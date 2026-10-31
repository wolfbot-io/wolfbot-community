---
title: "WolfBot Community Status"
description: "Current status of WolfBot Community — supported markets, platform availability, known issues, and roadmap."
tested_version: "0.1.0-beta.16"
last_updated: "2026-10-28"
category: "status"
difficulty: "beginner"
sitemap_priority: 0.60
---

# Community Status

**Last updated:** 2026-10-28

## Platform Status

| Component | Status | Details |
|---|---|---|
| Website (community.wolfbot.io) | 🟢 Online | Next.js 14, Cloudflare Pages |
| GitHub Repository | 🟢 Active | github.com/wolfbot-io/wolfbot-community |
| Linux Installer | 🟢 Available now | Ubuntu 22.04+, Debian 12, `.deb` and `.run`, v0.1.0-beta.16 |
| Windows Installer | 🟡 Available (v0.1.0-beta.15) | `WolfBot-Setup-0.1.0-beta.15-windows-x64.exe`; not yet code-signed, so Windows SmartScreen shows an unrecognized-publisher warning |
| MT5 Bridge (Linux) | 🟢 Stable | Built-in terminal container, browser VNC access |

## Supported Markets

### Crypto Exchanges
| Exchange | Status | Spot | Futures | Demo |
|---|---|---|---|---|
| Binance | 🟢 Stable | ✅ | ✅ | ✅ |
| Bybit | 🟢 Stable | ✅ | ✅ | ✅ |
| BingX | 🟢 Stable | ✅ | ✅ | ✅ |
| KuCoin | 🟢 Stable | ✅ | ✅ | ✅ |
| Bitget | 🟢 Stable | ✅ | ✅ | ✅ |

### Traditional Markets via MT5
| Market | Status | Instruments |
|---|---|---|
| Forex | 🟢 Stable | EUR/USD, GBP/USD, USD/JPY, etc. |
| Metals | 🟢 Stable | XAU/USD Gold, XAG/USD Silver, and more |
| Indices | 🟢 Stable | US30, NAS100, S&P 500 |
| Stocks/CFDs | 🟢 Stable | Broker-dependent |

> MT5 bridge available on **both Windows and Linux** — natively on Windows, or via WolfBot's built-in MT5 terminal container (browser VNC access) on Linux.

## Features

| Feature | Status |
|---|---|
| Demo Accounts | 🟢 Stable |
| Smart Terminal | 🟢 Stable |
| Automated Strategies | 🟢 Stable |
| Risk Controls | 🟢 Stable |
| Portfolio Management | 🟢 Stable |
| Auto Updates | 🟢 Stable |
| Backup & Restore | 🟢 Stable |
| TradingView Signals | 🟢 Available now — long, short, close_long, close_short |

## Current Version

- **Latest Public Release:** v0.1.0-beta.16 (Linux)
- **Channel:** Public release
- **Release Date:** 2026-10-28
- **Release notes:** [v0.1.0-beta.16](/releases/0.1.0-beta.16)
- **Windows:** v0.1.0-beta.15 is the current Windows installer (also attached to v0.1.0-beta.16) — see [v0.1.0-beta.15 release notes](/releases/0.1.0-beta.15)

## Known Issues

| Issue | Status | Workaround |
|---|---|---|
| Windows: market-data connections failing to reconnect (reported on v0.1.0-beta.10) | 🟡 Not yet re-verified on v0.1.0-beta.15 | Order placement, TP/SL and risk guards were not affected; report any repeated reconnect warnings in the logs via GitHub Issues |
| No mobile app | ℹ️ Not planned | Use browser on mobile |

v0.1.0-beta.13's known MT5 upgrade-install data-corruption issue is fixed as of v0.1.0-beta.14, v0.1.0-beta.15 fixed an account-rename bug that could reset equity-curve history, and v0.1.0-beta.16 fixes a KuCoin UTA TP/SL visibility gap and improves Bitget daily ROI reporting reliability; none of these are listed above.

## Roadmap

| Milestone | Target |
|---|---|
| v0.9.0 — First Release Candidate | Q3 2026 |
| v1.0.0 — Stable Release | Q4 2026 |
| Additional broker support | Ongoing |

## Incident History

No incidents reported. This page will be updated if any service disruptions occur.

---

*Status page last updated: 2026-10-28*
