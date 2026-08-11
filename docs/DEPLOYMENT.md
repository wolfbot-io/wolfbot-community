# Triển khai community.wolfbot.io — Deployment Guide

**Ngày cập nhật:** 2026-08-11
**Stack:** Next.js 14, `output: 'export'` (static), đóng gói bằng Docker
**Domain:** community.wolfbot.io
**Hosting:** cùng VPS đang chạy wolfbot.io, cùng cơ chế auto-deploy qua
webhook (`host_tools/webhook/webhook_listener.py`) mà `wolfbot-platform`
(frontend/backend của wolfbot.io) đang dùng — **push code là xong, không cần
build/rsync thủ công.**

---

## 0. Kiến trúc — vì sao lại thế này (2 lần đổi hướng, ghi lại để khỏi lặp lại)

**Lần 1 — Cloudflare Pages/Workers:** thử deploy qua Cloudflare git
integration, Cloudflare tự nhận diện `next` trong `package.json` và chạy
`@opennextjs/cloudflare migrate`, biến site thành Worker chạy SSR runtime
đầy đủ — trong khi site 100% static, không cần. Adapter đó đòi Next.js
≥ 15.5, repo đang Next 14.2 → xung đột dependency ngay bước cài. Bỏ.

**Lần 2 — VPS + rsync thủ công:** chuyển sang serve tĩnh qua nginx có sẵn
trên VPS, nhưng deploy là build local (`npm run build`) rồi rsync `out/`
sang VPS bằng tay. Đúng nhưng **không tự động** — không giống cách
`wolfbot.io` vẫn deploy (push code → webhook trên VPS tự pull + `docker
compose build/up`).

**Hiện tại (đúng, khớp pattern có sẵn):** đóng gói `wolfbot-community` thành
1 Docker image tự chứa (multi-stage: Node build → nginx:alpine runtime),
build từ chính `wolfbot-community/docker-compose.yml` — y hệt cách
`frontend`/`backend` trong `wolfbot-platform` đã được build từ source, chỉ
khác là **compose project riêng** (không nằm trong
`wolfbot-platform/docker-compose.yml`, xem lý do ở mục 2.0 — tránh mỗi lần
push code platform không liên quan cũng vô tình rebuild theo `community`).
Build diễn ra **trong Docker trên VPS** (`docker compose build community`),
không phải build tay trên máy local rồi rsync. Gắn thêm vào webhook listener
đang chạy sẵn cho `wolfbot.io` để `git push` vào repo `wolfbot-community`
cũng tự kích hoạt rebuild, y hệt trải nghiệm bạn đang có với webUI.

```text
        GitHub: wolfbot-io/wolfbot-community (push)
                       │  webhook POST
                       ▼
        VPS :5000  host_tools/webhook/webhook_listener.py
                       │  repo == "wolfbot-io/wolfbot-community"
                       ▼
        wolfbot-community/scripts/rebuild_community.sh
          git fetch + reset --hard origin/main
          docker compose build community   (Dockerfile: Node build → nginx:alpine)
          docker compose up -d community
                       │
                       ▼
        wolfbot-platform nginx (đã chạy sẵn cho wolfbot.io)
          server_name community.wolfbot.io → proxy_pass http://community:80
                       │
                       ▼
              https://community.wolfbot.io
```

Cloudflare chỉ còn vai trò DNS + CDN proxy trước VPS (giống wolfbot.io hiện
tại) — không phải nơi host code.

---

## 1. Các file liên quan (đã có trong repo, verify local xong)

| File | Vai trò |
|---|---|
| `wolfbot-community/Dockerfile` | Multi-stage: `npm run sitemap && npm run build` → copy `out/` vào nginx:alpine |
| `wolfbot-community/docker/nginx.conf` | Nginx bên trong container: redirect `/docs`, `/github`, `/releases/latest`, cache `_next/static` + ảnh, `try_files $uri $uri.html $uri/ =404` (Next export ghi `<route>.html` phẳng, không phải `<route>/index.html`) |
| `wolfbot-community/docker-compose.yml` | Compose project **riêng** (`COMPOSE_PROJECT_NAME=wolfbot-community`), chỉ join network `wolfbot_platform_net` (external) — không nằm trong compose project của `wolfbot-platform`, xem mục 2.0 |
| `wolfbot-community/scripts/rebuild_community.sh` | `git fetch/reset --hard` (có guard chặn nếu có file track chưa commit) + `docker compose build/up community` trên project riêng — chạy trên VPS, do webhook gọi |
| `wolfbot-platform/docker-compose.yml` | Service `community` đã **gỡ khỏi** file này (từng ở đây, gây rủi ro rebuild chéo — xem mục 2.0); `nginx` chỉ còn share network để `proxy_pass` |
| `wolfbot-platform/nginx/nginx.conf` | Server block 443 `community.wolfbot.io` → `proxy_pass http://community:80` (resolve qua network dùng chung, không phải `depends_on` cùng compose project) |
| `host_tools/webhook/webhook_listener.py` | Thêm nhánh: nếu `repository.full_name == "wolfbot-io/wolfbot-community"` → chạy `rebuild_community.sh` thay vì flow pull-toàn-monorepo cũ |

**Verify đã chạy (local, không đụng VPS):**
- `docker build` image `wolfbot-community` → thành công (multi-stage, 0 lỗi).
- Chạy container độc lập, curl: `/`, `/brokers/bybit`, `/download`,
  `/sitemap.xml` → 200; `/docs` → 301; `/github` → 302; route lạ → 404;
  ảnh → `Cache-Control: max-age=31536000, immutable`.
- Test end-to-end thật: dựng outer nginx (đúng `nginx.conf` mới) +
  container `community` (chạy từ compose project riêng
  `wolfbot-community/docker-compose.yml`) trên cùng external Docker network
  `wolfbot_platform_net`, outer nginx `proxy_pass` qua Host header
  `community.wolfbot.io` → tất cả route trên đều đúng qua 2 lớp proxy,
  giống hệt topology production.
- Verify riêng cho việc tách compose project (mục 2.0): tạo 1 service giả
  trong 1 project tên `wolfbot-platform` trên cùng network, chạy
  `compose down --remove-orphans` trên project đó → container `community`
  (project khác) **sống sót nguyên vẹn**, chỉ service giả bị xoá; và
  `curl http://community:80` từ container ở project khác vẫn resolve đúng
  qua Docker DNS của network dùng chung.
- `nginx -t` với `nginx.conf` mới (cert giả) → syntax OK.
- `python3 -m py_compile webhook_listener.py` → syntax OK. (Không chạy
  `rebuild_community.sh` thật vì nó `git reset --hard` — sẽ xoá các file
  chưa commit.)

---

## 2. Việc cần làm 1 LẦN DUY NHẤT (sau đó push là xong mãi mãi)

### 2.0 Vì sao `community` là 1 compose project RIÊNG, không chung với frontend/backend

`wolfbot-platform/rebuild_platform.sh` chạy `compose down --remove-orphans` /
`compose build` / `compose up -d` **không giới hạn service** trên project
`wolfbot-platform`. Nếu `community` là 1 service trong cùng
`wolfbot-platform/docker-compose.yml`, thì **mỗi lần có push bất kỳ vào
monorepo** (kể cả không đụng gì tới `wolfbot-community`) cũng sẽ tự tắt/rebuild
lại `community` theo — 2 vòng đời deploy độc lập bị dính vào nhau.

Vì vậy `wolfbot-community/docker-compose.yml` là **1 file/project compose
riêng** (`COMPOSE_PROJECT_NAME=wolfbot-community`), chỉ dùng chung 1 external
Docker network (`wolfbot_platform_net`) để nginx của `wolfbot-platform` vẫn
`proxy_pass http://community:80` được — Docker DNS resolve tên container qua
network dùng chung, bất kể khác compose project. Đã verify thật: container
`community` **sống sót nguyên vẹn** qua `compose down --remove-orphans` chạy
trên project `wolfbot-platform`, và vẫn `curl` được từ container ở project
khác qua đúng tên `community`.

Network `wolfbot_platform_net` đã được tạo sẵn lúc setup VPS ban đầu
(`scripts/install_new_vps_full.sh`, `scripts/rebuild_all.sh` đều
`docker network create wolfbot_platform_net` một cách idempotent) — không
cần tạo lại.

### 2.1 Trên VPS — pull code + bootstrap cert + khởi động service mới

```bash
# --- Phần wolfbot-platform: chỉ cần nginx.conf mới ---
cd /path/to/WolfBot_Dockerized/wolfbot-platform
git pull   # lấy nginx.conf mới (không còn service `community` ở đây nữa)

# Nginx sẽ từ chối reload nếu cert community.wolfbot.io chưa tồn tại.
# 1) Comment tạm khối `server { listen 443 ... community.wolfbot.io }`
#    trong nginx/nginx.conf, rồi:
docker compose exec nginx nginx -s reload

# 2) Xin cert qua webroot (service certbot đã có sẵn)
docker compose run --rm certbot certonly --webroot \
  -w /var/www/certbot -d community.wolfbot.io \
  --email <admin-email> --agree-tos --no-eff-email

# 3) Bỏ comment lại khối 443, reload
docker compose exec nginx nginx -s reload

# --- Phần wolfbot-community: build + start container riêng ---
cd ../wolfbot-community
git pull
COMPOSE_PROJECT_NAME=wolfbot-community docker compose build community
COMPOSE_PROJECT_NAME=wolfbot-community docker compose up -d community
```

Cert renew tự động về sau nhờ vòng lặp `certbot renew` đã chạy sẵn trong
service `certbot` — không cần thêm cron/job mới. `rebuild_community.sh`
(mục 3) đã tự set `COMPOSE_PROJECT_NAME=wolfbot-community` nên các lần sau
không cần gõ tay.

### 2.2 DNS — Cloudflare

`wolfbot.io` đã ở Cloudflare — chỉ thêm 1 record:

```text
Type:   A       (hoặc CNAME trỏ wolfbot.io)
Name:   community
Target: <VPS public IP>      ← IP giống record A của wolfbot.io
Proxy:  ✅ Orange cloud
TTL:    Auto
```

### 2.3 Đăng ký GitHub webhook cho repo wolfbot-community

Repo `github.com/wolfbot-io/wolfbot-community` → **Settings → Webhooks →
Add webhook**:

```text
Payload URL:   http://<VPS_IP>:5000/webhook
Content type:  application/json
Events:        Just the push event
```

Đây là **URL webhook y hệt** đang dùng cho monorepo (`wolfbot_listener.py`
đọc `repository.full_name` để tự phân biệt, không cần port/URL riêng).

---

## 3. Từ giờ về sau — chỉ cần push

```bash
cd wolfbot-community
git add -A && git commit -m "..."
git push origin main
```

→ GitHub gửi webhook → VPS tự `git fetch/reset --hard` + `docker compose
build community` + `up -d community` + reload → site cập nhật trong khoảng
1-2 phút, có Telegram thông báo kết quả (dùng chung
`scripts/send_telegram_notify.py` đã có).

**Không còn bước build/rsync thủ công nào.**

---

## 4. Post-Deploy Checklist

```bash
curl -I https://community.wolfbot.io
# → HTTP/2 200

curl -I https://community.wolfbot.io/wolfbot-logo.png
# → Cache-Control: public, max-age=31536000, immutable

curl -s https://community.wolfbot.io | grep '<title>'
curl -s https://community.wolfbot.io | grep 'application/ld+json'
```

| URL | Expected |
|---|---|
| `/` | Homepage |
| `/download` | Download center |
| `/brokers/bybit` | Bybit guide |
| `/sitemap.xml` | XML sitemap |
| `/docs` | 301 → `/getting-started` |
| `/github` | 302 → GitHub repo |

**Google Search Console:** search.google.com/search-console → Add property
`https://community.wolfbot.io/` (URL prefix) → verify DNS TXT hoặc HTML
file → submit `https://community.wolfbot.io/sitemap.xml`.

---

## 5. Rollback

```bash
# Trên VPS
cd wolfbot-community
COMPOSE_PROJECT_NAME=wolfbot-community docker compose logs community   # xem lỗi
git log --oneline -5
git reset --hard <commit-tốt-trước-đó>
COMPOSE_PROJECT_NAME=wolfbot-community docker compose build community
COMPOSE_PROJECT_NAME=wolfbot-community docker compose up -d community
```

`webhook_listener.py` cho path monorepo có auto-rollback (lưu
`/tmp/last_known_good_commit`, tự `git reset --hard` khi rebuild fail).
Nhánh community hiện **chưa** có auto-rollback tương tự (giữ scope thay đổi
nhỏ) — deploy fail sẽ báo Telegram nhưng cần rollback thủ công như trên nếu
cần. Có thể thêm sau nếu thấy cần thiết.

---

## 6. Local preview (trước khi push, tuỳ chọn)

```bash
cd wolfbot-community
docker build -t wolfbot-community:local .
docker run --rm -p 8080:80 wolfbot-community:local
# mở http://localhost:8080
```

---

**Tài liệu liên quan:**
- `wolfbot-platform/rebuild_platform.sh` — pattern gốc cho toàn platform
- `host_tools/webhook/README.md` — cơ chế webhook chung
- `wolfbot-community/scripts/rebuild_community.sh`
- [Next.js Static Exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
