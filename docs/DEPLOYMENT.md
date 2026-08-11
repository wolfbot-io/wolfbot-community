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
thêm làm 1 service trong chính `wolfbot-platform/docker-compose.yml` —
y hệt cách `frontend`/`backend` đã được build từ source. Build diễn ra
**trong Docker trên VPS** (`docker compose build community`), không phải
build tay trên máy local rồi rsync. Gắn thêm vào webhook listener đang chạy
sẵn cho `wolfbot.io` để `git push` vào repo `wolfbot-community` cũng tự
kích hoạt rebuild, y hệt trải nghiệm bạn đang có với webUI.

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
| `wolfbot-community/scripts/rebuild_community.sh` | `git fetch/reset --hard` + `docker compose build/up community` — chạy trên VPS, do webhook gọi |
| `wolfbot-platform/docker-compose.yml` | Service `community` mới (build từ `../wolfbot-community`); `nginx` service `depends_on: community` |
| `wolfbot-platform/nginx/nginx.conf` | Server block 443 `community.wolfbot.io` → `proxy_pass http://community:80` (giống hệt block `frontend`) |
| `host_tools/webhook/webhook_listener.py` | Thêm nhánh: nếu `repository.full_name == "wolfbot-io/wolfbot-community"` → chạy `rebuild_community.sh` thay vì flow pull-toàn-monorepo cũ |

**Verify đã chạy (local, không đụng VPS):**
- `docker build` image `wolfbot-community` → thành công (multi-stage, 0 lỗi).
- Chạy container độc lập, curl: `/`, `/brokers/bybit`, `/download`,
  `/sitemap.xml` → 200; `/docs` → 301; `/github` → 302; route lạ → 404;
  ảnh → `Cache-Control: max-age=31536000, immutable`.
- Test end-to-end thật: dựng outer nginx (đúng `nginx.conf` mới) +
  container `community` trên cùng Docker network, outer nginx
  `proxy_pass` qua Host header `community.wolfbot.io` → tất cả route trên
  đều đúng qua 2 lớp proxy, giống hệt topology production.
- `nginx -t` với `nginx.conf` mới (cert giả) → syntax OK.
- `python3 -m py_compile webhook_listener.py` → syntax OK. (Không chạy
  `rebuild_community.sh` thật vì nó `git reset --hard` — sẽ xoá các file
  chưa commit.)

---

## 2. Việc cần làm 1 LẦN DUY NHẤT (sau đó push là xong mãi mãi)

### 2.1 Trên VPS — pull code + bootstrap cert + khởi động service mới

```bash
cd /path/to/WolfBot_Dockerized/wolfbot-platform
git pull   # lấy docker-compose.yml + nginx.conf mới

# Nginx sẽ từ chối reload nếu cert community.wolfbot.io chưa tồn tại.
# 1) Comment tạm khối `server { listen 443 ... community.wolfbot.io }`
#    trong nginx/nginx.conf, rồi:
docker compose exec nginx nginx -s reload

# 2) Xin cert qua webroot (service certbot đã có sẵn)
docker compose run --rm certbot certonly --webroot \
  -w /var/www/certbot -d community.wolfbot.io \
  --email <admin-email> --agree-tos --no-eff-email

# 3) Bỏ comment lại khối 443, build + start service community lần đầu
docker compose build community
docker compose up -d community
docker compose exec nginx nginx -s reload
```

Cert renew tự động về sau nhờ vòng lặp `certbot renew` đã chạy sẵn trong
service `certbot` — không cần thêm cron/job mới.

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
cd wolfbot-platform
docker compose logs community          # xem lỗi
git -C ../wolfbot-community log --oneline -5
git -C ../wolfbot-community reset --hard <commit-tốt-trước-đó>
docker compose build community && docker compose up -d community
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
