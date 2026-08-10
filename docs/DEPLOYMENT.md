# Triển khai community.wolfbot.io — Deployment Guide

**Ngày:** 2026-08-11  
**Stack:** Next.js 14 Static Site  
**Domain:** community.wolfbot.io  

---

## 1. Tổng quan kiến trúc

```text
                    Internet
                       │
                       ▼
                 Cloudflare DNS
             (community.wolfbot.io)
                       │
            ┌──────────┼──────────┐
            │                     │
            ▼                     ▼
     Cloudflare Pages        GitHub Pages
     (Primary Hosting)       (Fallback)
            │
            ▼
    github.com/wolfbot-io/
      wolfbot-community
```

**Lựa chọn hosting: Cloudflare Pages (khuyên dùng)**
- Miễn phí
- Global CDN edge network
- HTTPS tự động
- Tích hợp GitHub (auto-deploy on push)
- Hỗ trợ Next.js static export
- Unlimited bandwidth

---

## 2. DNS Setup — Cloudflare

### 2.1 Thêm domain vào Cloudflare

1. Đăng nhập Cloudflare Dashboard
2. Add Site → `wolfbot.io`
3. Chọn Free plan
4. Cloudflare scan DNS records hiện tại
5. Update nameservers tại registrar của `wolfbot.io`

### 2.2 Tạo CNAME record

```text
Type:   CNAME
Name:   community
Target: community-wolfbot-io.pages.dev
Proxy:  ✅ (Orange cloud - Proxied)
TTL:    Auto
```

**Giải thích:** Cloudflare Pages tự động cấp subdomain `*.pages.dev`. Khi add custom domain `community.wolfbot.io`, Cloudflare tự tạo SSL certificate.

### 2.3 Xác minh DNS

```bash
dig community.wolfbot.io CNAME
# Kết quả mong đợi: community.wolfbot.io → community-wolfbot-io.pages.dev

curl -I https://community.wolfbot.io
# HTTP/2 200
```

---

## 3. Cloudflare Pages Deployment

### 3.1 Connect GitHub Repository

1. Cloudflare Dashboard → Workers & Pages → Create → Pages
2. Connect to Git → GitHub → `wolfbot-io/wolfbot-community`
3. Configure build:

```text
Framework preset:    Next.js
Build command:       npm run build
Build output dir:    .next
Root directory:      /
Environment:         Production
```

### 3.2 Environment Variables

```text
NODE_VERSION=20
NEXT_PUBLIC_SITE_URL=https://community.wolfbot.io
```

### 3.3 Custom Domain

1. Pages project → Custom domains → Set up a custom domain
2. Enter: `community.wolfbot.io`
3. Cloudflare auto-verifies DNS CNAME
4. SSL certificate auto-provisioned (wait ~5 minutes)

### 3.4 Deploy

```bash
# Push to main branch → auto-deploys to Cloudflare Pages
cd wolfbot-community
git push origin main

# Check deployment status
# Cloudflare Dashboard → Pages → wolfbot-community → Deployments
```

---

## 4. Alternative: Vercel Deployment

Nếu không dùng Cloudflare:

### 4.1 Vercel Setup

```bash
npm i -g vercel
cd wolfbot-community
vercel login
vercel
```

1. Link to GitHub repo `wolfbot-io/wolfbot-community`
2. Framework: Next.js
3. Root Directory: `.`
4. Build Command: `npm run build`
5. Output Directory: `.next`

### 4.2 DNS

```text
Type:   CNAME
Name:   community
Target: cname.vercel-dns.com
```

### 4.3 Domain in Vercel

1. Vercel Dashboard → wolfbot-community → Settings → Domains
2. Add: `community.wolfbot.io`
3. Vercel auto-generates SSL (Let's Encrypt)

---

## 5. Post-Deploy Checklist

Sau khi deploy thành công, kiểm tra:

### 5.1 HTTP/HTTPS

```bash
# Force HTTPS redirect
curl -I http://community.wolfbot.io
# → 301 → https://community.wolfbot.io

# Check SSL
curl -I https://community.wolfbot.io
# → HTTP/2 200
# → Strict-Transport-Security header
```

### 5.2 Pages Verification

| URL | Expected |
|---|---|
| `https://community.wolfbot.io/` | Homepage với Hero + tất cả sections |
| `/download` | Download page với Windows + Linux cards |
| `/getting-started` | Getting Started guide |
| `/brokers` | Broker matrix (6 brokers Stable) |
| `/brokers/bybit` | Bybit guide |
| `/faq` | FAQ accordion |
| `/security` | Security page |
| `/sitemap.xml` | XML sitemap |
| `/robots.txt` | Robots rules |

### 5.3 SEO Verification

```bash
# Check title tag
curl -s https://community.wolfbot.io | grep '<title>'
# → WolfBot Community — One Platform. Every Market.

# Check meta description
curl -s https://community.wolfbot.io | grep 'meta name="description"'

# Check structured data
curl -s https://community.wolfbot.io | grep 'application/ld+json'

# Check canonical URL
curl -s https://community.wolfbot.io | grep 'canonical'
```

### 5.4 Google Search Console

1. Mở [Google Search Console](https://search.google.com/search-console)
2. Add property → `community.wolfbot.io` (URL prefix)
3. Verify via DNS TXT record hoặc HTML file
4. Submit sitemap: `https://community.wolfbot.io/sitemap.xml`

---

## 6. Cache & Performance

### Cloudflare Cache Rules

```text
/*                        → Cache: Standard, Edge TTL: 2 hours
/assets/*                 → Cache: Standard, Edge TTL: 1 year
/sitemap.xml              → Cache: Standard, Edge TTL: 1 day
/robots.txt               → Cache: Standard, Edge TTL: 1 day
```

### Headers (next.config.mjs)

```javascript
// Đã cấu hình trong next.config.mjs:
// - /assets/* → Cache-Control: public, max-age=31536000, immutable
// - Strict-Transport-Security via Cloudflare
```

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

Nếu cần rollback:

**Cloudflare Pages:**
1. Dashboard → Pages → wolfbot-community → Deployments
2. Find previous successful deployment
3. ... → Rollback to this deployment

**Git:**
```bash
git revert <bad-commit>
git push origin main
# Auto-redeploys to Cloudflare Pages
```

---

## 9. DNS Propagation Time

Sau khi set DNS:
- Cloudflare: instant (vì nameserver là Cloudflare)
- Global propagation: 5-30 phút (vì Cloudflare global network)
- SSL provisioning: 1-5 phút (Cloudflare auto)

**Kiểm tra real-time:**
```bash
# Check DNS globally
dig community.wolfbot.io +trace

# Check SSL
curl -I https://community.wolfbot.io 2>&1 | head -5
```

---

**Tài liệu liên quan:**
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages)
- [Next.js Deployment Docs](https://nextjs.org/docs/app/building-your-application/deploying)
- [Vercel Custom Domains](https://vercel.com/docs/projects/domains)
