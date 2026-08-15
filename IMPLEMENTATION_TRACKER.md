# 🏗️ wolfbot-community — Implementation Tracker

**Plan:** Community Brand/SEO/Growth Master Plan V2 (162 sections)  
**Git submodule:** `github.com/wolfbot-io/wolfbot-community`  
**Date:** 2026-08-15  
**Status:** 🚀 IN PROGRESS

> Last updated 2026-08-15 — mobile-first download experience (PLAN §95) and
> the first repo CI workflow (PLAN §66/§151) added on top of 2026-08-14's
> SEO/AI-search/content work (title-dup fix, structured-data fixes,
> llms.txt, search index, docs search + feedback analytics, Month-3
> automation articles).

### Session work (2026-08-15) — added beyond 2026-08-14

| Item | What | Status |
|---|---|---|
| Mobile-download | `MobileDownloadNotice` (PLAN §95) — phone visitors to `/download` get an explicit "this installs on a computer, not a phone" notice + a Copy-link button (`mobile_download_link_copied` GA4 event) instead of a bare, context-free `.deb` button; hidden on `sm:` and up via CSS only, no hydration flicker | ✅ |
| CI | First `.github/workflows/ci.yml` for this repo — typecheck, `prebuild-content`, `next build`, and `npm run freshness` (PLAN §66/§151) on every push/PR to `main`; repo had **zero** CI before this | ✅ |
| freshness script wired | `scripts/check-content-freshness.ts` existed but was never invoked by anything — added `npm run freshness` + wired into the new CI workflow; current run: 0 errors, 0 warnings across all 31 content pages | ✅ |
| lint gap noted, not fixed | `npm run lint` is non-functional (`next lint` needs interactive ESLint setup that was never completed) — left out of CI rather than silently claiming lint coverage; flagged as a real, separate gap | 🟡 noted |

---

## 📁 Directory Structure (Next.js App Router)

```
wolfbot-community/                  # Git submodule → GitHub public repo
│
├── README.md                       # GitHub repo README (Section 34-37)
├── SECURITY.md                     # Security policy (Section 142)
├── SUPPORT.md                      # Support info (Section 82)
├── package.json                    # Next.js 14 + MDX
├── next.config.mjs                 # MDX, redirects, headers
├── tsconfig.json                   # TypeScript config
├── tailwind.config.js / postcss    # Styling
├── .gitignore
│
├── .github/                        # GitHub repo configs
│   ├── ISSUE_TEMPLATE/             # 5 issue forms (Section 40)
│   ├── DISCUSSION_TEMPLATE/        # 8 categories + pinned (Section 38-39)
│   └── repo-config.yml             # Settings doc (Section 31-33)
│
├── app/                            # Next.js App Router
│   ├── layout.tsx                  # Root layout: Header + Footer + SEO
│   ├── page.tsx                    # Homepage (14 sections per plan)
│   ├── download/page.tsx           # Download center (Section 24)
│   ├── faq/page.tsx                # FAQ page (Section 99)
│   ├── [...slug]/page.tsx          # Dynamic content renderer
│   └── [all route dirs]            # install/, brokers/, docs/, etc.
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx              # Nav: Download, Docs, Brokers, GitHub, Cloud
│   │   └── Footer.tsx              # 4-column footer (Section 133)
│   ├── landing/                    # Homepage sections
│   │   ├── Hero.tsx                # Left copy + right screenshot (Section 14)
│   │   ├── ReleaseStrip.tsx        # Public Preview banner (Section 13)
│   │   ├── TrustStrip.tsx          # Trust microcopy (Section 15)
│   │   ├── InstallSteps.tsx        # 3-step install (Section 17)
│   │   ├── ScreenshotsCarousel.tsx # UI screenshots (Section 18)
│   │   ├── FeaturesGrid.tsx        # 10 feature cards (Section 19)
│   │   ├── RunsOnYourMachine.tsx   # Architecture diagram (Section 20)
│   │   ├── BrokerSection.tsx       # Broker matrix (Section 21)
│   │   ├── CommunityVsCloud.tsx    # Comparison (Section 23)
│   │   ├── LatestRelease.tsx       # Release block (Section 11)
│   │   ├── GitHubCommunityBlock.tsx# Community links (Section 12)
│   │   ├── SecurityTrust.tsx       # Trust section (Section 142)
│   │   ├── FAQSection.tsx          # Accordion FAQ (Section 99)
│   │   └── FinalCTA.tsx            # Bottom download CTA (Section 16)
│   ├── download/
│   │   └── DownloadCenter.tsx      # OS-aware download cards (Section 24)
│   ├── docs/
│   │   └── ContentRenderer.tsx     # MD → HTML with links/alt
│   └── seo/
│       └── StructuredData.tsx      # JSON-LD injector
│
├── content/                        # MD content (rendered by [...slug])
│   ├── install/
│   │   ├── windows.md              # Section 63 (#1)
│   │   └── linux.md                # Section 63 (#2)
│   ├── getting-started.md          # Section 63 (#3)
│   ├── docs/
│   │   └── simulation.md           # Section 63 (#4)
│   └── brokers/
│       ├── bybit.md                # Section 63 (#5-6)
│       └── api-key-guide.md        # Section 63 (#12)
│
├── lib/
│   ├── content.ts                  # Frontmatter parser, slug → breadcrumbs
│   ├── seo.ts                      # OG image, keyword helpers
│   └── structured-data/
│       ├── website.ts              # WebSite schema (Section 47)
│       ├── software-app.ts         # SoftwareApplication schema (Section 49)
│       └── faq.ts                  # FAQPage schema (Section 99)
│
├── schemas/                        # JSON Schema files
│   ├── content-frontmatter.json    # Section 66
│   ├── broker-capabilities.json    # Section 144
│   ├── release-manifest.json       # Section 95.20
│   └── structured-data-*.json      # Sections 47, 49, 99
│
├── scripts/                        # Automation
│   ├── generate_release_social.py  # Sections 75-76, 124-125
│   ├── generate_broker_capabilities.py  # Sections 144-145
│   ├── generate_sitemap.py         # Section 52
│   └── collect_github_metrics.py   # Sections 43-44, 106-108
│
├── public/
│   ├── robots.txt                  # Section 53
│   └── (future: assets, screenshots)
│
└── analytics/                      # Metrics snapshots (gitignored)
```

---

## Implementation Gates

| Gate | Description | Status |
|---|---|---|
| BRAND-G1 | All surfaces say "WolfBot Community" | ✅ |
| WEB-G2 | Next.js app scaffolded, homepage built | ✅ |
| GH-G3 | README + issue forms + repo config | ✅ |
| SEO-G4 | Structured data + sitemap + robots | ✅ |
| DL-G5 | Download page built | ✅ |
| CONTENT-G7 | 20/20 content pages created | ✅ |
| COMMUNITY-G8 | Discussion/issue templates ready | ✅ |
| ANALYTICS-G9 | Metrics collector script | ✅ |
| BRAND-G10 | wolfbot.io link (needs main site) | ⬜ |
| DEPLOY-G11 | Deployment guide created + git push | ✅ |
| YT-G12 | YouTube channel setup guide | ✅ |
| SOCIAL-G13 | Release social templates | ✅ |
| ANALYTICS-G14 | Analytics architecture documented | ✅ |
| GROWTH-G15 | Growth playbook created | ✅ |
| STATUS-G16 | Community status page | ✅ |
| RSS-G17 | RSS feed generator script | ✅ |
| SEARCH-G18 | Client-side docs search (SearchBar) | ✅ |
| FEEDBACK-G19 | Page feedback widget (Yes/No) | ✅ |
| ERROR-G20 | Custom 404 page | ✅ |

### Session work (2026-08-14) — added beyond the original gates

| Item | What | Status |
|---|---|---|
| SEO-dup | Title tag brand duplication removed (`title.template` → plain string) | ✅ |
| SD-version | `softwareVersion` corrected to `0.1.0-p12-ghcr-rc8` in SoftwareApplication | ✅ |
| SD-org | Standalone Organization schema (`lib/structured-data/organization.ts`) rendered site-wide | ✅ |
| OG-image | `og:image`/`og:url` now present on all content pages | ✅ |
| llms.txt | `scripts/generate-llms-txt.ts` → `public/llms.txt` (36 links, AI search) | ✅ |
| search-index | `scripts/generate-search-index.ts` → `public/search-index.json` (27→30 pages) | ✅ |
| DocsSearch | `components/search/DocsSearch.tsx` (auto-synced, tracks `docs_search`/zero-result) on /academy | ✅ |
| feedback-GA4 | `FeedbackWidget` now fires `docs_feedback` GA4 event | ✅ |
| GA4-events | `lib/analytics.ts` `trackEvent` + download/CTA tracking | ✅ |
| broker-SSOT | `lib/brokers.ts` single source of truth for broker roster | ✅ |
| Academy ×6 | 6 risk/trust Academy articles (why-bots-fail, reduce-drawdown, verifiable-results, read-performance, mt5-linux, trade-only-keys) | ✅ |
| Month3 ×3 | automation-workflow, take-profit-stop-loss, dca-strategy | ✅ |
| 2-audience | "Who this guide is for" (non-technical + technical) applied to all new/retrofitted articles | ✅ |

---

## Content Pages Progress (30) ✅

| # | Page | File | Status |
|---|---|---|---|
| 1 | Install Windows | `content/install/windows.md` | ✅ |
| 2 | Install Linux | `content/install/linux.md` | ✅ |
| 3 | Getting Started | `content/getting-started.md` | ✅ |
| 4 | Simulation | `content/docs/simulation.md` | ✅ |
| 5-6 | Bybit (Demo+Live) | `content/brokers/bybit.md` | ✅ |
| 7 | Binance | `content/brokers/binance.md` | ✅ |
| 8 | BingX | `content/brokers/bingx.md` | ✅ |
| 9 | KuCoin | `content/brokers/kucoin.md` | ✅ |
| 10 | Bitget | `content/brokers/bitget.md` | ✅ |
| 11 | MT5 | `content/brokers/mt5.md` | ✅ |
| 12 | API Key Guide | `content/brokers/api-key-guide.md` | ✅ |
| 13 | Smart Terminal | `content/docs/smart-terminal.md` | ✅ |
| 14 | Risk Controls | `content/docs/risk-controls.md` | ✅ |
| 15 | Updates | `content/docs/updates.md` | ✅ |
| 16 | Backup/Restore | `content/docs/backup.md` | ✅ |
| 17 | Community vs Cloud | `content/community-vs-cloud.md` | ✅ |
| 18 | Self-Hosted Explained | `content/docs/self-hosted-explained.md` | ✅ |
| 19 | Troubleshooting | `content/docs/troubleshooting.md` | ✅ |
| 20 | Release Channels | `content/releases/channels.md` | ✅ |
| 21 | Community Status | `content/docs/community-status.md` | ✅ |
| 22 | Run 24/7 on a VPS | `content/docs/run-24-7-on-a-vps.md` | ✅ |
| 23 | Why Bots Fail (risk) | `content/docs/why-bots-fail-risk-management.md` | ✅ |
| 24 | How to Reduce Drawdown | `content/docs/how-to-reduce-drawdown.md` | ✅ |
| 25 | Why Verifiable Results Matter | `content/docs/why-verifiable-results-matter.md` | ✅ |
| 26 | Read Trading Performance | `content/docs/how-to-read-trading-performance.md` | ✅ |
| 27 | MT5 Without Windows VPS | `content/docs/mt5-without-windows-vps.md` | ✅ |
| 28 | Trade-Only API Keys Explained | `content/docs/trade-only-api-keys-explained.md` | ✅ |
| 29 | Automated Trading Workflow | `content/docs/automated-trading-workflow.md` | ✅ |
| 30 | Take-Profit and Stop-Loss | `content/docs/take-profit-stop-loss.md` | ✅ |
| 31 | Dollar-Cost Averaging (DCA) | `content/docs/dca-strategy.md` | ✅ |

---

## Components Progress (all landing sections built)

| Component | Status |
|---|---|
| Header (Nav) | ✅ |
| Footer (4-column) | ✅ |
| Hero | ✅ |
| ReleaseStrip | ✅ |
| TrustStrip | ✅ |
| InstallSteps | ✅ |
| ScreenshotsCarousel | ✅ |
| FeaturesGrid | ✅ |
| RunsOnYourMachine | ✅ |
| BrokerSection | ✅ |
| CommunityVsCloud | ✅ |
| LatestRelease | ✅ |
| GitHubCommunityBlock | ✅ |
| SecurityTrust | ✅ |
| FAQSection | ✅ |
| FinalCTA | ✅ |
| DownloadCenter | ✅ |
| ContentRenderer | ✅ |
| StructuredData | ✅ |

---

## Setup Needed

```bash
# 1. Create GitHub repo
#    https://github.com/new → wolfbot-io/wolfbot-community

# 2. Push wolfbot-community/ as initial commit
cd wolfbot-community
git init
git add .
git commit -m "Initial: WolfBot Community website + GitHub repo setup"
git remote add origin git@github.com:wolfbot-io/wolfbot-community.git
git push -u origin main

# 3. Add as submodule in WolfBot_Dockerized_cp
cd /home/vuhungkt18/project/bk/WolfBot_Dockerized_cp
# (already configured in .gitmodules)
git submodule add git@github.com:wolfbot-io/wolfbot-community.git wolfbot-community

# 4. Install deps and run dev
cd wolfbot-community
npm install
npm run dev
# → http://localhost:3000

# 5. Deploy to Cloudflare Pages
#    See docs/DEPLOYMENT.md

# 6. Setup DNS: CNAME community → pages.dev
#    See docs/DEPLOYMENT.md §2
```

---

## Strategy Documents (new)

| Doc | Sections Covered | Status |
|---|---|---|
| docs/DEPLOYMENT.md | DNS + Cloudflare Pages + Vercel | ✅ |
| docs/YOUTUBE_CHANNEL_SETUP.md | 71-73: YouTube channel + 32 videos + Shorts | ✅ |
| docs/SOCIAL_TEMPLATES.md | 75-76, 123-124: Release social automation | ✅ |
| docs/ANALYTICS_SETUP.md | 101-109: Analytics architecture + KPIs | ✅ |
| docs/30DAY_LAUNCH_ROADMAP.md | 154: 30-day launch plan | ✅ |
| docs/GROWTH_PLAYBOOK.md | 84-90, 129-130: Stars, HN, PH, directories, backlinks | ✅ |
| content/docs/community-status.md | 100: Community status page | ✅ |
| scripts/generate-rss.ts | 78: RSS/Changelog feed | ✅ |

## Build Status

- TypeScript: 0 errors (`npm run typecheck`)
- Next.js build: 41 static pages generated (`npm run build`)
- Sitemap: 37 URLs (`public/sitemap.xml`)
- llms.txt: 39 links (`public/llms.txt`)
- search-index.json: 30 pages (`public/search-index.json`)
- DocsSearch: auto-synced from search-index.json on /academy
- FeedbackWidget: Yes/No + GA4 `docs_feedback` event on every doc page
- Link crawl: 0 broken internal links

## Build Status (archive)

- TypeScript: no errors (npx tsc --noEmit)
- Next.js build: 27 static pages generated
- Dev server: http://localhost:3000 (200 OK)
- Git pushed: github.com/wolfbot-io/wolfbot-community (3 commits)

## Next Actions

1. Cloudflare DNS: CNAME community to pages.dev
2. Cloudflare Pages: connect repo then deploy
3. Google Search Console: add property then submit sitemap
4. YouTube: create channel then record Video 1
5. GitHub: enable Discussions then pin 5 topics


