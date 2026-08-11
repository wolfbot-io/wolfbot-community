# Triển khai community.wolfbot.io — Deployment Guide

**Ngày cập nhật:** 2026-08-11
**Stack:** Next.js 14, `output: 'export'` (static), đóng gói bằng Docker
**Domain:** community.wolfbot.io
**Hosting:** cùng VPS đang chạy wolfbot.io, deploy tự động qua GitHub webhook
khi push code — **push code là xong, không cần build/rsync thủ công.** Dùng
listener **riêng**, port **riêng** (`host_tools/webhook/community_webhook_listener.py`,
mặc định port 5001) — KHÔNG dùng chung listener/port 5000 của
`wolfbot-platform` (`webhook_listener.py`), xem lý do ở mục 0/Lần 3.

---

## 0. Kiến trúc — vì sao lại thế này (3 lần đổi hướng, ghi lại để khỏi lặp lại)

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
không phải build tay trên máy local rồi rsync. `git push` vào repo
`wolfbot-community` tự kích hoạt rebuild, y hệt trải nghiệm bạn đang có với
webUI.

**Lần 3 — dùng chung port 5000 với webhook monorepo:** ban đầu gắn thêm 1
nhánh `if repo == "wolfbot-io/wolfbot-community"` vào chính
`webhook_listener.py` (port 5000, service `webhook_listener` có sẵn cho
`WolfBot_Dockerized`). Trước khi kịp deploy bản này lên VPS, có push gần
nhau vào cả 2 repo — do VPS còn chạy bản `webhook_listener.py` **cũ** (chưa
có nhánh trên), push vào `wolfbot-community` bị hiểu nhầm thành push
monorepo, chạy `rebuild_all.sh` (rebuild toàn bộ trading engine, không liên
quan `community`) 2 lần liên tiếp cách nhau ~30s → lần 2 fail → code cũ tự
`git reset --hard` (rollback) monorepo. Không mất code (rollback chỉ ảnh
hưởng checkout monorepo trên VPS, không đụng lịch sử Git thật của
`wolfbot-community`), nhưng cho thấy 1 file listener/1 port dùng chung vẫn
có thể gây nhầm lẫn nếu quên đồng bộ deploy. Chuyển hẳn sang **1 process
Flask riêng, 1 port riêng** (`community_webhook_listener.py`, port 5001) —
loại bỏ khả năng nhầm lẫn giữa 2 luồng, và loại luôn giới hạn xếp-hàng-chờ
của Flask dev server đơn luồng (`app.run()` không `threaded=True` — 1 push
monorepo chạy nhiều phút sẽ chặn push community phải đợi nếu dùng chung 1
process).

```text
        GitHub: wolfbot-io/wolfbot-community (push)
                       │  webhook POST
                       ▼
        VPS :5001  host_tools/webhook/community_webhook_listener.py
                       │  (process/port RIÊNG, không chung với :5000
                       │   webhook_listener.py của monorepo)
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
| `host_tools/webhook/community_webhook_listener.py` | Flask app **riêng**, port riêng (mặc định 5001, đổi qua env `COMMUNITY_WEBHOOK_PORT`) — chỉ nhận push từ `wolfbot-io/wolfbot-community`, gọi `rebuild_community.sh`. KHÔNG chung process/port với `webhook_listener.py` (port 5000, monorepo) — xem mục 0/Lần 3 |
| `host_tools/webhook/setup_community_webhook_listener.sh` | Cài systemd service `community_webhook_listener` cho listener trên |
| `host_tools/webhook/webhook_listener.py` | Đã revert về đúng bản gốc (không còn nhánh xử lý community) — chỉ còn xử lý push cho `WolfBot_Dockerized` |

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
- `python3 -m py_compile webhook_listener.py community_webhook_listener.py` → syntax OK.
- Test `community_webhook_listener.py` bằng Flask test client thật (không
  qua mạng, không chạy `rebuild_community.sh` thật — trỏ tạm
  `REBUILD_COMMUNITY_SCRIPT` sang 1 script giả để không đụng `git reset
  --hard` trên working tree thật):
  - Payload không có `repository` → `Ignored`.
  - Push từ repo khác `wolfbot-io/wolfbot-community` → bị bỏ qua, **không**
    gọi rebuild.
  - Push đúng repo, script giả exit 0 → chạy + trả về "Community site
    rebuilt".
  - Push đúng repo, script giả exit 1 → trả lỗi rõ ràng, **không** crash
    500.
  - `COMMUNITY_WEBHOOK_PORT` override qua env var hoạt động đúng (mặc định
    5001).
  - Tất cả 5 case PASS.

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

### 2.3 Cài listener riêng + đăng ký GitHub webhook cho repo wolfbot-community

Listener này **độc lập hoàn toàn** với `webhook_listener` (port 5000) đang
chạy cho monorepo — cài thêm 1 systemd service mới, port mới (mặc định
5001), không sửa gì service cũ.

```bash
# Trên VPS
cd /path/to/WolfBot_Dockerized
bash host_tools/webhook/setup_community_webhook_listener.sh
# (đổi port: COMMUNITY_WEBHOOK_PORT=5002 bash host_tools/webhook/setup_community_webhook_listener.sh)

# Mở port trên firewall/security group VPS (giống cách port 5000 đã mở)
sudo ufw allow 5001/tcp   # hoặc đúng công cụ firewall VPS đang dùng
```

Repo `github.com/wolfbot-io/wolfbot-community` → **Settings → Webhooks →
Add webhook**:

```text
Payload URL:   http://<VPS_IP>:5001/webhook   ← port RIÊNG, khác port 5000 của monorepo
Content type:  application/json
Events:        Just the push event
```

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
