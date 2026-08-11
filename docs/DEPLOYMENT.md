# Triển khai community.wolfbot.io — Deployment Guide

**Ngày cập nhật:** 2026-08-11
**Stack:** Next.js 14, `output: 'export'` (100% static HTML/CSS/JS)
**Domain:** community.wolfbot.io

> Cập nhật so với bản trước: đã xác minh bằng build thật (`npm run build` →
> thư mục `out/`, 28 trang tĩnh, không lỗi). `next.config.mjs` giờ có
> `output: 'export'`; `headers()`/`redirects()` (không tương thích với chế độ
> export) đã được chuyển sang `public/_headers` và `public/_redirects` —
> Cloudflare Pages đọc 2 file này tự động.

---

## 1. Tổng quan kiến trúc

```text
                    Internet
                       │
                       ▼
                 Cloudflare DNS
             (community.wolfbot.io — cùng zone với wolfbot.io,
              đã proxy qua Cloudflare, không cần đổi nameserver)
                       │
                       ▼
                Cloudflare Pages
             (static export — out/)
                       │
                       ▼
    github.com/wolfbot-io/wolfbot-community
              (branch: master)
```

**Vì sao static export (`output: 'export'`), không phải SSR/`next-on-pages`:**
Toàn bộ route trong repo đều dùng `generateStaticParams` (không có
`app/api/*`, không có `middleware.ts`, không dùng `next/image` remote), nên
site build ra HTML tĩnh 100% — không cần Node.js runtime hay adapter
`@cloudflare/next-on-pages`. Đây là lựa chọn đơn giản nhất, rẻ nhất (Cloudflare
Pages free tier, unlimited bandwidth) và khớp với cách site đã được viết.

---

## 2. Build ở local trước khi deploy (bắt buộc làm 1 lần để verify)

```bash
cd wolfbot-community
npm install

# 1. Sinh sitemap.xml TRƯỚC khi build — script ghi vào public/sitemap.xml,
#    Next export sẽ copy nó vào out/sitemap.xml. Nếu build trước, sitemap.xml
#    sẽ KHÔNG có trong out/.
npm run sitemap

# 2. Build static export
npm run build

# Kết quả mong đợi: thư mục out/ chứa index.html, download.html,
# sitemap.xml, robots.txt, _headers, _redirects, wolfbot-logo.png, ...
ls out/
```

Đã verify cục bộ (2026-08-11): build thành công, 28 trang tĩnh, không lỗi
TypeScript/MDX, `out/_headers` và `out/_redirects` được copy đúng từ `public/`.

---

## 3. DNS Setup — Cloudflare

`wolfbot.io` đã nằm trên Cloudflare (root domain resolve ra IP Cloudflare) —
**không cần** làm lại bước "Add Site / đổi nameserver". Chỉ cần thêm subdomain.

Có 2 cách, khuyên dùng cách A (Cloudflare tự tạo CNAME đúng, tránh đoán sai
target `*.pages.dev`):

### Cách A — để Cloudflare Pages tự tạo DNS (khuyên dùng)

Tạo Pages project trước (mục 4), sau đó ở bước "Set up a custom domain",
Cloudflare tự thêm CNAME chính xác vào zone `wolfbot.io`. Bỏ qua mục 3.1 bên
dưới, làm thẳng mục 4 rồi quay lại xác minh ở mục 3.2.

### Cách B — tự tạo CNAME thủ công (nếu không dùng UI wizard)

```text
Type:   CNAME
Name:   community
Target: <project-name>.pages.dev   ← lấy đúng tên sau khi tạo Pages project ở mục 4,
                                      KHÔNG đoán trước tên này
Proxy:  ✅ (Orange cloud - Proxied)
TTL:    Auto
```

### 3.2 Xác minh DNS

```bash
dig community.wolfbot.io CNAME
# Kết quả mong đợi: community.wolfbot.io → <project-name>.pages.dev

curl -I https://community.wolfbot.io
# HTTP/2 200
```

Trạng thái tại thời điểm viết tài liệu này: `dig community.wolfbot.io` **chưa
có record nào** — subdomain chưa được deploy.

---

## 4. Cloudflare Pages Deployment

### 4.1 Connect GitHub Repository

1. Cloudflare Dashboard → Workers & Pages → Create → Pages
2. Connect to Git → GitHub → `wolfbot-io/wolfbot-community`
3. Configure build:

```text
Framework preset:    Next.js (Static HTML Export)
Production branch:   master        ← repo HEAD/default branch là "master",
                                      không phải "main" — kiểm tra kỹ khi chọn
Build command:       npm run sitemap && npm run build
Build output dir:    out
Root directory:      /
```

> Lưu ý: **không** để "Build output dir" là `.next` — thư mục đó là build
> server nội bộ của Next.js, không phải HTML tĩnh, Cloudflare Pages sẽ không
> serve đúng site nếu trỏ vào đó.

### 4.2 Environment Variables

```text
NODE_VERSION=20
NEXT_PUBLIC_SITE_URL=https://community.wolfbot.io
```

### 4.3 Custom Domain

1. Pages project → Custom domains → Set up a custom domain
2. Nhập: `community.wolfbot.io`
3. Cloudflare tự tạo CNAME + verify (nếu chưa có bản ghi nào trùng tên) và
   tự provision SSL certificate (~5 phút)

### 4.4 Deploy

```bash
# Push vào đúng branch production đã chọn ở mục 4.1 (master)
cd wolfbot-community
git push origin master

# Theo dõi deploy: Cloudflare Dashboard → Workers & Pages →
# wolfbot-community → Deployments
```

---

## 5. Alternative: Vercel Deployment

Nếu không dùng Cloudflare:

### 5.1 Vercel Setup

```bash
npm i -g vercel
cd wolfbot-community
vercel login
vercel
```

1. Link to GitHub repo `wolfbot-io/wolfbot-community`
2. Framework: Next.js
3. Root Directory: `.`
4. Build Command: `npm run sitemap && npm run build`
5. Output Directory: `out`

### 5.2 DNS

```text
Type:   CNAME
Name:   community
Target: cname.vercel-dns.com
```

### 5.3 Domain in Vercel

1. Vercel Dashboard → wolfbot-community → Settings → Domains
2. Add: `community.wolfbot.io`
3. Vercel auto-generates SSL (Let's Encrypt)

---

## 6. Post-Deploy Checklist

Sau khi deploy thành công, kiểm tra:

### 6.1 HTTP/HTTPS

```bash
curl -I http://community.wolfbot.io
# → 301 → https://community.wolfbot.io

curl -I https://community.wolfbot.io
# → HTTP/2 200
# → Strict-Transport-Security header (Cloudflare tự thêm)
```

### 6.2 Pages Verification

| URL | Expected |
|---|---|
| `https://community.wolfbot.io/` | Homepage với Hero + tất cả sections |
| `/download` | Download page với Windows + Linux cards |
| `/getting-started` | Getting Started guide |
| `/brokers` | Broker matrix |
| `/brokers/bybit` | Bybit guide |
| `/faq` | FAQ accordion |
| `/security` | Security page |
| `/sitemap.xml` | XML sitemap (27 URLs tại thời điểm viết) |
| `/robots.txt` | Robots rules |
| `/docs` | 301 → `/getting-started` (qua `_redirects`) |
| `/github` | 302 → GitHub repo (qua `_redirects`) |

### 6.3 SEO Verification

```bash
curl -s https://community.wolfbot.io | grep '<title>'
# → WolfBot Community — One Platform. Every Market.

curl -s https://community.wolfbot.io | grep 'meta name="description"'
curl -s https://community.wolfbot.io | grep 'application/ld+json'
curl -s https://community.wolfbot.io | grep 'canonical'
```

### 6.4 Cache headers

```bash
curl -I https://community.wolfbot.io/wolfbot-logo.png
# → Cache-Control: public, max-age=31536000, immutable  (từ public/_headers)
```

### 6.5 Google Search Console

1. Mở [Google Search Console](https://search.google.com/search-console)
2. Add property → `community.wolfbot.io` (URL prefix)
3. Verify via DNS TXT record hoặc HTML file
4. Submit sitemap: `https://community.wolfbot.io/sitemap.xml`

---

## 7. Monitoring

### Cloudflare Analytics
- Traffic overview
- Unique visitors
- Bandwidth usage
- Top pages

### GitHub Insights
- Stars, forks, watchers
- Traffic (views, clones)
- Referral sources

---

## 8. Rollback

**Cloudflare Pages:**
1. Dashboard → Pages → wolfbot-community → Deployments
2. Find previous successful deployment
3. ... → Rollback to this deployment

**Git:**
```bash
git revert <bad-commit>
git push origin master
# Auto-redeploys to Cloudflare Pages
```

---

## 9. DNS Propagation Time

- Cloudflare: instant (vì nameserver đã là Cloudflare)
- Global propagation: 5-30 phút
- SSL provisioning: 1-5 phút (Cloudflare auto)

```bash
dig community.wolfbot.io +trace
curl -I https://community.wolfbot.io 2>&1 | head -5
```

---

**Tài liệu liên quan:**
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages)
- [Cloudflare Pages — Headers](https://developers.cloudflare.com/pages/configuration/headers/)
- [Cloudflare Pages — Redirects](https://developers.cloudflare.com/pages/configuration/redirects/)
- [Next.js Static Exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
