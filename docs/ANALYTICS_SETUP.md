# WolfBot Community — Analytics Architecture

**Sections:** 101-109 (Master Plan V2)  
**Goal:** Track full funnel from discovery to active community member

---

## 1. Analytics Stack (All Free)

| Tool | Purpose | Cost |
|---|---|---|
| **Cloudflare Analytics** | Traffic, bandwidth, top pages | Free |
| **Google Search Console** | Search queries, CTR, position | Free |
| **GitHub Insights** | Stars, downloads, traffic sources | Free |
| **GitHub API** | Issue/PR/Discussion metrics | Free |

---

## 2. Funnel Definition

```text
Discovery
  ├── Google Search → community.wolfbot.io
  ├── GitHub Search → wolfbot-io/wolfbot-community
  ├── YouTube → community.wolfbot.io
  ├── Social → community.wolfbot.io
  └── Direct/Referral → community.wolfbot.io
         │
         ▼
      Website Visit
         │
    ┌────┼────┐
    ▼    ▼    ▼
  Home  Docs Download
    │    │    │
    └────┼────┘
         ▼
      GitHub Visit
         │
    ┌────┼────┐
    ▼    ▼    ▼
  Star  Watch  Fork
         │
         ▼
      Download Installer
         │
         ▼
       Install
         │
         ▼
      Simulation
         │
         ▼
   Broker Connection
         │
         ▼
   Active Community Member
```

---

## 3. KPIs

### 30-Day KPIs (Section 106)

| Metric | Target (30d) | Source |
|---|---|---|
| Website visitors | 500+ | Cloudflare |
| GitHub stars | 50+ | GitHub |
| Total downloads | 100+ | GitHub Releases |
| Search impressions | 1000+ | GSC |
| Avg CTR | 3%+ | GSC |
| Discussion posts | 20+ | GitHub |
| YouTube views | 500+ | YouTube |

### 90-Day KPIs (Section 107)

| Metric | Target (90d) | Source |
|---|---|---|
| Website visitors | 2000+/mo | Cloudflare |
| GitHub stars | 200+ | GitHub |
| Total downloads | 500+ | GitHub Releases |
| Search impressions | 5000+/mo | GSC |
| Avg CTR | 4%+ | GSC |
| Active discussions | 10+/week | GitHub |

---

## 4. Search Console Setup

```
1. Go to search.google.com/search-console
2. Add property: community.wolfbot.io (URL prefix)
3. Verify via DNS TXT record (Cloudflare)
4. Submit sitemap: https://community.wolfbot.io/sitemap.xml
5. Wait 24-48h for data
```

### Weekly Search Console Review (Section 55)

```text
Check every Monday:
[ ] Top queries → any new keywords ranking?
[ ] Top pages → which guides get traffic?
[ ] CTR analysis → which titles underperform?
[ ] Coverage → any indexing errors?
[ ] Mobile usability → any issues?
```

---

## 5. GitHub Metrics Collection

```bash
# Weekly (Monday)
python3 scripts/collect_github_metrics.py

# Output: analytics/metrics-{date}.json
{
  "stars": 50,
  "downloads_total": 120,
  "views_week": 300,
  "clones_week": 45,
  "discussions_open": 8,
  "issues_open": 3
}
```

---

## 6. UTM Standards (Section 105)

| Source | utm_source | utm_medium | utm_campaign |
|---|---|---|---|
| GitHub README | github | readme | community |
| YouTube | youtube | video | {playlist} |
| Twitter/X | twitter | social | community |
| LinkedIn | linkedin | social | community |
| Reddit | reddit | social | community |
| Product Hunt | producthunt | launch | community |
| Newsletter | newsletter | email | community |

---

## 7. Monthly Operating Review (Section 153)

```text
Review first Monday of month:

Traffic:
[ ] Website visitors (Cloudflare)
[ ] Unique visitors
[ ] Top 5 pages

Downloads:
[ ] Total downloads
[ ] Windows vs Linux split
[ ] Top referrers

GitHub:
[ ] New stars
[ ] Discussions created
[ ] Issues resolved

Search:
[ ] Total impressions
[ ] Avg position
[ ] New ranking keywords

Decision:
[ ] What to build next?
[ ] What to document?
[ ] What to promote?
```
