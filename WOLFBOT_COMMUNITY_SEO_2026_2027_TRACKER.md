# 🎯 wolfbot-community — SEO/Growth Master Plan (2026–2027) — Implementation Tracker

**Source plan:** `docs/plans/WOLFBOT_COMMUNITY_SEO_MASTER_PLAN_2026_2027.md` (25 sections)
**Repo:** `wolfbot-community/` (Next.js, static export via `output: 'export'`, Nginx)
**Status:** 🚀 IN PROGRESS

> Mục đích file này: đối chiếu từng mục trong **PLAN SEO 2026–2027** với hiện trạng
> code/`public/`/config, để biết **tính năng nào làm rồi, tính năng nào chưa**.
> Ghi trạng thái bằng: `✅` xong (có bằng chứng) · `🟡` một phần / cần hoàn thiện ·
> `⬜` chưa làm · `🔒` cần User (Search Console / VPS deploy / nội dung ngoài repo: video, social).
>
> Cập nhật mỗi khi triển khai xong 1 mục. Căn cứ thực tế code, không phải mô tả plan.

---

## §1 — Mục tiêu / North Star

| Mục | Trạng thái | Ghi chú |
|---|:---:|---|
| North Star = **Monthly Successful Community Installs** | 🟡 | Không thể đo trực tiếp; gần nhất là funnel events (xem §20). Cần kiểm tra content truy cập Installs. |
| Secondary: organic downloads, stars, releases, docs return, participation | 🟡 | Một phần có: GA4 funnel (xem §20) + `collect_github_metrics.py`. Chưa có dashboard mở. |

---

## §2 — Positioning

| Mục | Trạng thái | Ghi chú |
|---|:---:|---|
| Entity name "WolfBot Community by WolfBot.io" | ✅ | Hero badge + README + metadata. |
| Tagline "One Platform. Every Market." | ✅ | Hero subtitle + footer tagline (`lib/chrome-i18n.ts` `tagline`). |
| Core search proposition (free/self-hosted/Windows/Linux/crypto/futures/MT5) | ✅ | Metadata + homepage copy (`lib/home-page.ts`). |
| Differentiation (multiple exchanges + MT5 unified) | ✅ | Homepage FeaturesGrid/BrokerSection + `/features`. |

---

## §3 — Keyword ownership (Clusters A–F)

| Cụm | Trạng thái | Ghi chú |
|---|:---:|---|
| A — Free Trading Bot | ✅ | Cluster keywords hiện diện trong homepage H1/copy + metadata +/docs. Không tạo trang chuyên riêng cho từng cluster (plan §18: tránh thin pages) — coverage trải qua các trang đúng intent. |
| B — Self-Hosted | ✅ | `self-hosted-explained` ✅, `run-24-7-on-a-vps` ✅, redirect `/install/vps` ✅. |
| C — GitHub / Download | ✅ | README/About + `/download`. |
| D — Windows/Linux | ✅ | `/install/windows`, `/install/linux` (EN+8 locale) ✅; Windows chưa có build — nội dung ghi rõ "coming soon" (đúng plan §6 không quảng cáo Windows). |
| E — MT5 self-hosting | ✅ | MT5 cluster đầy đủ (§9): `mt5-without-windows-vps` ✅, `brokers/mt5` ✅, `mt5-symbol-mapping` ✅, `mt5-troubleshooting` ✅, + 3 academy MT5 ✅. |
| F — Broker-specific | ✅ | 6 broker guide pages ✅ (binance/bybit/bingx/kucoin/bitget/mt5). |

---

## §4 — URL Architecture

Tham chiếu plan (mục tiêu) → hiện trạng thực tế.

| URL (plan) | Hiện trạng | Ghi chú |
|---|:---:|---|
| `/` | ✅ | Homepage (EN + 8 locale roots). |
| `/download` | ✅ | `app/download/page.tsx` + SoftwareApplication schema. |
| `/getting-started` | ✅ | `content/getting-started.md` (+8 locales). |
| `/features` | ✅ | `app/features/page.tsx`. **VD: trước 2026-08-16 KHÔNG trong sitemap — đã thêm.** |
| `/markets` | ✅ | Header nav "Markets" trỏ `/brokers` (redirect `/markets` → `/brokers` thêm 2026-08-16, plan §4). |
| `/install/windows` | ✅ | `content/install/windows.md` (+8). |
| `/install/linux` | ✅ | `content/install/linux.md` (+8). |
| `/install/vps` | ✅ | Redirect `/install/vps` → `/docs/run-24-7-on-a-vps` (nginx). Trang chính = `/docs/run-24-7-on-a-vps` ✅. Không nhân bản nội dung (plan §23). |
| `/brokers/{binance,bybit,bingx,kucoin,bitget,mt5}` | ✅ | 6 trang + `api-key-guide` ✅. |
| `/docs/simulation` | ✅ | |
| `/docs/smart-terminal` | ✅ | |
| `/docs/automated-trading-workflow` | ✅ | |
| `/docs/risk-controls` | ✅ | |
| `/docs/take-profit-stop-loss` | ✅ | |
| `/docs/dca-strategy` | ✅ | |
| `/docs/external-signals` | ✅ | `content/docs/external-signals.md` (EN+VI, 2026-08-16). |
| `/docs/tradingview` | ✅ | `content/docs/tradingview.md` (EN+VI, 2026-08-16). |
| `/docs/updates` | ✅ | |
| `/docs/backup` | ✅ | |
| `/docs/troubleshooting` | ✅ | |
| `/docs/security` | 🟡 | Có trang tĩnh `/security` (React), không có content docs. |
| `/releases/latest` | ✅ | nginx 302 → GitHub releases. |
| `/releases/[version]` / `/releases/channels` | ✅ | `content/releases/channels.md`. Không có trang per-version tĩnh (đúng §12 — tránh thin pages). |
| `/academy` | ✅ | `app/academy/page.tsx`. **Trước 2026-08-16 KHÔNG trong sitemap — đã thêm.** |
| `/community-vs-cloud` | ✅ | |
| `/security` | ✅ | `app/security/page.tsx`. |
| `/faq` | ✅ | `app/faq/page.tsx` + FAQPage schema. |
| `/support` | ✅ | `app/support/page.tsx` (EN, 2026-08-16). |
| `vi/` mirrors | ✅ | 8 locale hoàn chỉnh (xem §21). |

---

## §5 — Homepage SEO

| Mục | Trạng thái | Ghi chú |
|---|:---:|---|
| Title gợi ý | ✅ | EN title = "WolfBot Community — Free Self-Hosted Trading Bot for Windows & Linux" (= plan §5). |
| H1 gợi ý "Free Self-Hosted Trading Platform..." | ✅ | **Rồi (2026-08-16):** H1 EN + 8 locale = discovery phrase (EN: "Free Self-Hosted Trading Platform for Crypto, Futures & MT5"); support heading giữ "Trade Every Market From One Platform" (plan §5). | "Trade Every Market. From One Platform." **Chưa khớp khuyến nghị discovery-focused H1.** Cần đánh giá đổi hay giữ. |
| 10 từ khóa trong 120 từ đầu | ✅ | MetaDescription + hero copy chứa đủ. |
| CTA "Download WolfBot Community" + "Getting Started" | ✅ | Hero CTA. |

---

## §6 — Download page ← MONEY PAGE

| Mục | Trạng thái | Ghi chú |
|---|:---:|---|
| Release, maturity, OS, file, version, date, size, checksum, signature | ✅ | **Rồi (2026-08-16):** có đủ release date (2026-08-12), file size (~83 MB), signature status (Signed ✓), file name, checksum, version, maturity (Public Preview), Linux sẵn / Windows chưa (đúng plan — không quảng cáo). Metadata `/download` đổi khỏi "Windows & Linux" (không quảng cáo Windows không có build). |
| "What happens after install" + clean install guides | ✅ | **Mở rộng (2026-08-16 round 2):** `DownloadCenter` thêm khối "System requirements" (Ubuntu 22.04/24.04/Debian 12, 4GB RAM — khớp install/linux.md), "What happens after install" (4 bước: dashboard → demo → broker → order), và "Download FAQ" (4 câu: miễn phí / nguồn chính thức / verify checksum / SmartScreen) + link install guides + verify-download. |
| GitHub Release + troubleshooting + FAQ links | ✅ | |
| SoftwareApplication structured data (chỉ facts có thật) | ✅ | `lib/structured-data/software-app.ts` (FinanceApplication, Linux (Windows build in development), offers 0 USD). |
| Không quảng cáo Windows nếu chưa có | ✅ | Windows card "Available soon" + công khai "No Windows build yet". |

---

## §7 — Install pillar

| Mục | Trạng thái | Ghi chú |
|---|:---:|---|
| `/install/windows` → journey + screenshots + SmartScreen + first launch + simulation + troubleshooting codes | ✅ | Có trang windows ✅. **Rà (2026-08-16):** `os_tested` bỏ claim sai (Windows chưa build), SmartScreen/signature hướng dẫn xác minh checksum trước khi bypass (plan §6/§16 chính xác release info). Error codes WB-WIN-001..004. Screenshot = 🔒 cần từ build. |
| `/install/linux` → Ubuntu/Debian + .deb + service state + first launch + update/remove + errors | ✅ | Nội dung tốt, có MT5 callout (§9). |
| `/install/vps` → self-hosted VPS + 24/7 | ✅ | **Rồi (2026-08-16):** redirect `/install/vps` → `/docs/run-24-7-on-a-vps` (nginx) tránh trùng nội dung; trang chính `/docs/run-24-7-on-a-vps` ✅. |

---

## §8 — Broker pages (task pages)

| Mục | Trạng thái | Ghi chú |
|---|:---:|---|
| Template 13 bước (release/capability/demo/live/permissions/create/connect/verify/sim/live/errors/docs) | ✅ | Có template đầy đủ trong 6 broker pages. |
| Capability từ manifest (không hard-code) | ✅ | Capability status đọc từ `lib/brokers.ts` (single source of truth — tránh drift hard-code lặp giữa index page + BrokerSection). Broker task pages = content hand-written (`content/brokers/*.md`) theo template. Manifest JSON (`release-assets.json`/`bundle-manifest.json`) chỉ tồn tại trong GitHub release, không có local để sinh động — status/capability giữ ở `lib/brokers.ts`. |

---

## §9 — MT5 = separate cluster

| Mục | Trạng thái | Ghi chú |
|---|:---:|---|
| `/brokers/mt5` (pillar) | ✅ | |
| `/docs/mt5-without-windows-vps` | ✅ | |
| `/install/linux#mt5` + `/install/windows#mt5` | ✅ | Linux có callout; Windows chưa build. |
| `/academy/automate-forex-gold-with-mt5` | ✅ | `content/docs/automate-forex-gold-with-mt5.md` (EN+VI, 2026-08-16). |
| `/academy/crypto-and-mt5-one-platform` | ✅ | `content/docs/crypto-and-mt5-one-platform.md` (EN+VI, 2026-08-16). |
| `/academy/mt5-self-hosted-trading` | ✅ | `content/docs/mt5-self-hosted-trading.md` (EN+VI, 2026-08-16). |
| `/docs/mt5-symbol-mapping` | ✅ | `content/docs/mt5-symbol-mapping.md` (EN+VI, 2026-08-16). |
| `/docs/mt5-troubleshooting` | ✅ | `content/docs/mt5-troubleshooting.md` (EN+VI, 2026-08-16). |

> **MT5 = différenciateur.** Plan nhấn mạnh đây là cơ hội lớn nhất vs bot crypto-only. Cluster đã đầy đủ (2026-08-16): pillar + 2 docs kỹ thuật + 3 bài academy MT5, tất cả EN+VI.

---

## §10 — Academy content clusters

| Cluster / bài | Trạng thái | Ghi chú |
|---|:---:|---|
| Self-hosting (what-is, self-vs-cloud, run-24/7-vps, backup) | 🟡 | what-is→`self-hosted-explained` ✅, vps ✅, backup ✅, self-vs-cloud→`community-vs-cloud` ✅. Tên bài cần khớp plan (academy slug riêng chưa có). |
| Safety (trade-only-keys, withdrawal-disabled, sim-before-live, verify-download) | ✅ | **Rồi (2026-08-16):** trade-only-keys ✅, sim ✅, **verify-download ✅** (`how-to-verify-a-downloaded-trading-bot` EN+VI), **withdrawal-disabled ✅** (`why-withdrawal-permissions-should-stay-disabled` EN+VI). |
| Automation (workflow, tradingview-to-bot, TPSL, DCA, why-fail, reduce-drawdown) | 🟡 | workflow ✅, TPSL ✅, DCA ✅, why-fail ✅, reduce-drawdown ✅; **tradingview-to-bot ✅** (`/docs/tradingview` EN+VI) + `/docs/external-signals` ✅. |
| Platform (crypto+futures+mt5 one-interface, one-portfolio, unified-risk, smart-execution) | ✅ | **Rồi (2026-08-16):** **one-interface ✅** (`crypto-and-mt5-one-platform` EN+VI), **one-portfolio ✅** (`one-portfolio-across-exchanges-and-mt5` EN+VI), **unified-risk ✅** (`how-unified-risk-differs-from-per-bot-risk` EN+VI), **smart-execution ✅** (`smart-execution-explained` EN+VI). |

---

## §11 — GitHub SEO / Discovery

| Mục | Trạng thái | Ghi chú |
|---|:---:|---|
| Repository About = plan §11 | ✅ | README intro "Free self-hosted trading bot for Windows & Linux". |
| Website = community.wolfbot.io | ✅ | |
| Topics (trading-bot, crypto-trading-bot, ...) | ✅ | Set FULL trên GitHub 2026-08-16: trading-bot, crypto-trading-bot, automated-trading, self-hosted, algorithmic-trading, crypto, futures, forex, mt5, linux, windows, tradingview, risk-management + (giữ binance/bybit/crypto-trading/trading-automation/wolfbot) = 18 topics. |
| README first screen (10 items) | ✅ | README đầy đủ. |

---

## §12 — GitHub Releases = recurring events

| Mục | Trạng thái | Ghi chú |
|---|:---:|---|
| Release page + "What's new" + screenshots + links | 🟡 | Internal `releases/channels` ✅; GitHub Release publishing = 🔒 User (draft chưa publish). |
| Chỉ index latest/milestone, noindex thin dev builds | ✅ | Nginx `releases/latest` → GitHub; không tạo thin pages. |

---

## §13 — Issues/Discussions → content flywheel

| Mục | Trạng thái | Ghi chú |
|---|:---:|---|
| Monthly: reoccurring problem → article; error code → troubleshooting | 🟡 | Có `troubleshooting.md` + `community-status`; quy trình flywheel = 🔒 User (vận hành Discussions). |
| Error-to-SEO loop | 🟡 | Có troubleshooting trang; chưa có hệ thống error-code index riêng. |

---

## §14 — Community ↔ wolfbot.io

| Mục | Trạng thái | Ghi chú |
|---|:---:|---|
| community → wolfbot.io (Cloud/managed) | ✅ | Header/Footer "WolfBot Cloud", `community-vs-cloud`. |
| wolfbot.io → community (nav "Community (Free)") | 🔒 | Cần chỉnh trên repo/site wolfbot.io (ngoài repo này). |
| Entity consistency (logo, "by WolfBot.io", Organization schema) | ✅ | Organization schema site-wide; "by WolfBot.io" trong hero/footer. |

---

## §15 — Technical SEO

| Mục | Trạng thái | Ghi chú |
|---|:---:|---|
| WebSite schema + Organization | ✅ | `lib/structured-data/{website,organization}.ts`. **Rà (2026-08-16):** gỡ `SearchAction` khỏi WebSite schema — urlTemplate `/docs/search` trỏ 404 (docs search là client-side, không có URL tĩnh) → schema trỏ 404 đọc là lỗi Google. Organization node riêng + publisher entity rõ. |
| SoftwareApplication on download | ✅ | |
| BreadcrumbList | ✅ | `lib/structured-data/breadcrumb.ts` trên content pages. |
| canonical per page | ✅ | |
| sitemap | ✅ | 311 URL (2026-08-16: thêm `/features`+`/academy`+`/about`+`/support`+13 docs mới). |
| robots.txt allow useful, disallow /api,/admin,/internal | ✅ | `Disallow: /_next/` đã gỡ. |
| unique titles | ✅ | |
| OG images | ✅ | `opengraph-image.tsx`. |
| image alt | ✅ | Screenshots carousel + README có alt mô tả đầy đủ (dashboard overview, account status). |
| hreflang EN/VI (now 8 locales) | ✅ | hreflang đầy đủ 10 tags/page. |
| crawlable SSR/SSG HTML | ✅ | Static export. |
| proper status codes | ✅ | 404 page; nginx redirects hợp lệ. |
| cache headers đúng / non-hashed assets revalidate | ✅ | **2026-08-16 (fix vĩnh viễn):** `nginx.conf` chỉ giữ `immutable` cho `/_next/static/*` (file build có hash). Mọi media `public/` không-hash (`/screenshots/`, favicon, og:image, logo, thumbnail...) dùng `max-age=3600, stale-while-revalidate=604800` — hết bug "đổi ảnh nhưng web giữ ảnh cũ 1 năm" (trước đó regex áp `immutable`/31536000 cho cả ảnh không-hash, khóa cache theo URL 1 năm). HTML `location /` = `no-cache, must-revalidate` → deploy xong content hiện ngay. |
| noindex low-value/internal | 🟡 | robots chặn /api,/admin,/internal. |
| **Sitemap bao gồm mọi trang public quan trọng** | ✅ | **2026-08-16: đã thêm `/features`, `/academy`, `/about`, `/support`** (đang render nhưng bị thiếu từ trước). `/brokers/api-key-guide` ✅ có. |

---

## §16 — Content quality / AI search

| Mục | Trạng thái | Ghi chú |
|---|:---:|---|
| Solve real tasks, screenshots, actual steps, accurate release info, update dates | ✅ | Content có `last_updated`/`tested_version` + `freshness` script. |
| llms.txt | ✅ | 311 links (2026-08-16). |
| search-index.json | ✅ | 42 EN pages (2026-08-16). |
| "For technical readers" expandable box (§2-audience) | ✅ | Applied trong articles. |

---

## §17 — Image / Video SEO

| Mục | Trạng thái | Ghi chú |
|---|:---:|---|
| Screenshots descriptive + alt | ✅ | 7 webp UI/timer real (1600×1000) chụp từ portal (overview, accounts, risk-center, terminal, bots, portfolio). Dùng hiện tại: dashboard overview (homepage+getting-started+install/linux+VPS), accounts (bybit/binance/trade-only-api-keys), bots (automated-trading-workflow). terminal/risk-center/portfolio chụp đang xấu → TẠM GỠ khỏi bài (chờ ảnh đẹp hơn). Build clean (315). Backup cũ: `/tmp/OLD-*.webp`. |
| Core videos (5) embed trên page | 🔒 | YouTube + ghi hình = ngoài repo. Có `docs/YOUTUBE_CHANNEL_SETUP.md`. |

---

## §18 — Programmatic SEO (chỉ nơi data thật)

| Mục | Trạng thái | Ghi chú |
|---|:---:|---|
| Release pages, capability tables, broker status | ✅ | `broker-capabilities.json`; broker status badges. |
| Không tạo thin pages coin/country/city | ✅ | Không có, đúng nguyên tắc. |

---

## §19 — Brand collision defense

| Mục | Trạng thái | Ghi chú |
|---|:---:|---|
| Consistent naming (WolfBot Community by WolfBot.io, official links) | ✅ | |
| `/about` hoặc FAQ identity section | ✅ | **Rồi (2026-08-16):** `app/about/page.tsx` — official source, signed releases, brand clarity, official GitHub/download. |
| Official GitHub + signed releases + publisher identity | ✅ | `app/about/page.tsx` củng cố + GitHub official link. |

---

## §20 — Conversion SEO (funnel)

| Mục | Trạng thái | Ghi chú |
|---|:---:|---|
| `organic_landing` → `download_view` → `download_click` → `installer_download` → `install_success` → `simulation_started` → `broker_connected` | 🟡 | Đã có GA4 + `DOWNLOAD_VIEW`/`download_click`/`broker_click`/`academy_click`/`cta_click`/`docs_search`/`docs_feedback`. Đo `install_success`/`simulation`/`broker_connected` cần telemetry phía app (ngoài website). |
| Privacy-respecting | ✅ | Cloudflare W.A (no cookies) + GA4. |
| GitHub release downloads làm nguồn metrics | ✅ | `collect_github_metrics.py`. |

---

## §21 — Search Console loop

| Mục | Trạng thái | Ghi chú |
|---|:---:|---|
| Domain property wolfbot.io + URL-prefix community.wolfbot.io | 🔒 | Cần User cài đặt. |
| Weekly/monthly review loops | 🔒 | Vận hành by User. |

---

## §22 — 30-day plan

| Mục | Trạng thái | Ghi chú |
|---|:---:|---|
| Week1: titles/canonical/hreflang/SC/GitHub README/release claims | ✅ | Đã xong các mục trong repo. SC = 🔒 User. |
| Week2: /download, install cluster, getting-started, simulation, error-code | ✅ | /download ✅, install cluster ✅ (/install/{windows,linux} + redir /install/vps), getting-started ✅, simulation ✅, error-code ✅ (`troubleshooting.md` WB-*). |
| Week3: 6 brokers, MT5 pillar, community-vs-cloud, security/trust | ✅ | **Rồi (2026-08-16):** 6 broker pages ✅, MT5 cluster đầy đủ (§9: pillar + 2 docs kỹ thuật + 3 academy, EN+VI) ✅, community-vs-cloud ✅, security/trust ✅. |
| Week4: 6 academy articles, 3 videos, GH Discussions, launch | 🔒 | Videos/Discussions publish = User. |

---

## §23 — 90-day plan

| Mục | Trạng thái | Ghi chú |
|---|:---:|---|
| Month1: foundation + install + brokers | ✅ | Foundation + install ✅ (/install/{windows,linux} + redir /install/vps) + 6 brokers ✅. |
| Month2: MT5 cluster + self-hosted cluster + release cadence + video | 🟡 | MT5 cluster ✅ (§9 đầy đủ), self-hosted ✅ (`self-hosted-explained` + `run-24-7-on-a-vps`), release cadence ✅ (`releases/channels`). Video = 🔒 User. |
| Month3: comparisons + stories + technical guides + link earning + vi optimization | 🟡 | VI đầy đủ ✅; story/link-earning = 🔒 User. |
| ~35–60 quality URLs, không thin | ✅ | 311 sitemap URL (2026-08-16), content chất lượng. |

---

## §24 — 6–12 month flywheel

| Mục | Trạng thái | Ghi chú |
|---|:---:|---|
| Vận hành (product usage → content) | 🔒 | Liên tục; cần quy trình Monthly theo §13. |

---

## §25 — KPIs

| Cụm KPI | Trạng thái | Ghi chú |
|---|:---:|---|
| Search (organic clicks, ranking, CTR, indexed, referring domains) | 🔒 | Cần GA4 + SC data. |
| Distribution (download clicks, GH release downloads, installs, OS split) | 🟡 | GA4 click events ✅; installs/OS split cần telemetry app. |
| Activation (first start, simulation, broker connected) | 🔒 | Ngoài website. |
| Community (stars, discussions, issues, returning docs) | 🟡 | `collect_github_metrics.py`; returning visitors @ GA4. |
| Brand (branded searches, SERP ownership) | 🔒 | SC + GA4. |

---

## 📋 Tasks mở (ưu tiên theo plan — EN + VI trước, theo yêu cầu User 2026-08-16)

| # | Task | Plan § | Trạng thái |
|---|---|---|---|
| 1 | `/features` + `/academy` vào sitemap | §15 | ✅ **Rồi (2026-08-16)** |
| 2 | Wire `prebuild-content` vào `build` | §15 | ✅ **Rồi (2026-08-16)** |
| 3 | Funnel events: `/download_view`, `broker_click`, `academy_click` | §20 | ✅ **Rồi (2026-08-16)** |
| 4 | `/install/vps` (EN + VI) | §4/§7 | ✅ **Rồi (2026-08-16)** — redirect `/install/vps` → `/docs/run-24-7-on-a-vps` (tránh trùng nội dung, plan §23). |
| 5 | `/docs/mt5-symbol-mapping` (EN + VI) | §9 | ✅ **Rồi (2026-08-16)** |
| 6 | `/docs/mt5-troubleshooting` (EN + VI) | §9 | ✅ **Rồi (2026-08-16)** |
| 7 | `/docs/tradingview` (EN + VI) | §9/§10 | ✅ **Rồi (2026-08-16)** |
| 8 | `/docs/external-signals` (EN + VI) | §4/§10 | ✅ **Rồi (2026-08-16)** |
| 9 | Academy MT5 cluster: `automate-forex-gold-with-mt5`, `crypto-and-mt5-one-platform`, `mt5-self-hosted-trading` | §9 | ✅ **Rồi (2026-08-16)** — 3 bài EN+VI. |
| 10 | Academy Safety: verify-download + withdrawal-disabled | §10 | ✅ **Rồi (2026-08-16)** — 2 bài EN+VI. |
| 11 | Academy Platform: unified-risk, smart-execution, one-portfolio | §10 | ✅ **Rồi (2026-08-16)** — 3 bài EN+VI. |
| 12 | `/about` (brand identity §19) | §19 | ✅ **Rồi (2026-08-16)** — `app/about/page.tsx`, footer link, sitemap. |
| 13 | `/support` | §4 | ✅ **Rồi (2026-08-16)** — `app/support/page.tsx`, footer link, sitemap. |
| 14 | Đánh giá đổi H1 homepage sang discovery-focused (plan §5) | §5 | ✅ **Rồi (2026-08-16)** — H1 EN + 8 locale = "Free Self-Hosted Trading Platform for Crypto, Futures & MT5" (discovery) + support heading "Trade Every Market From One Platform". |
| 15 | breadcrumb `/install` parent crash fix | §15 | ✅ **Rồi (2026-08-16)** — nginx `= /install → 301 /getting-started`. |
| 16 | H1 discovery (plan §5) cho EN home — `EnglishHomePage` dùng `HOME_COPY['en']` | §5 | ✅ **Rồi (2026-08-16)** — trước đó `copy={undefined}` làm EN home fallback JSX cứng, drift khỏi dictionary; giờ EN = single source. |
| 17 | Download page: System requirements + "What happens after install" + Download FAQ | §6 | ✅ **Rồi (2026-08-16)** — mở rộng `DownloadCenter`. |
| 18 | WebSite schema: gỡ SearchAction trỏ `/docs/search` (404) | §15 | ✅ **Rồi (2026-08-16)** — client-side search, không có URL tĩnh; tránh lỗi schema. |
| 19 | SoftwareApplication schema: `operatingSystem` → Linux (Windows build in development) | §6/§15 | ✅ **Rồi (2026-08-16)** — không quảng cáo Windows chưa có. |
| 20 | MT5 cluster cross-link đầy đủ 2 chiều | §9/§24 | ✅ **Rồi (2026-08-16)** — `/brokers/mt5` related_guides gồm 5 bài MT5 mới; các bài đã trỏ ngược về pillar. |

> **Quy tắc dịch:** mỗi trang content mới: tạo `content/<slug>.md` (EN) + `content/vi/<slug>.md` (VI) với `lang:`/`translation_of` frontmatter, thêm vào build (tự động qua `[...slug]`), update sitemap (tự động qua `generate-sitemap.ts` khi chạy `prebuild-content`). Update file này sau mỗi mục.
