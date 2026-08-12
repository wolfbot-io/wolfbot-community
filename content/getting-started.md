---
title: "Getting Started with WolfBot Community"
description: "First steps after installing WolfBot Community. Connect a Demo account, explore the Dashboard, and add your crypto exchanges or MT5 broker."
tested_version: "0.1.0-p12-ghcr-rc8"
last_updated: "2026-08-12"
platforms: ["windows", "linux"]
category: "getting-started"
difficulty: "beginner"
estimated_time: "10 minutes"
next_guide: "/docs/simulation"
previous_guide: "/install/windows"
related_guides: ["/docs/simulation", "/brokers/bybit", "/docs/risk-controls"]
keywords: ["wolfbot getting started", "wolfbot tutorial", "how to use wolfbot", "unified trading platform"]
sitemap_priority: 0.9
---

# Getting Started with WolfBot Community

**Tested with WolfBot Community v0.1.0-p12-ghcr-rc8** · Last updated: 2026-08-12

## Welcome! 👋

WolfBot Community is a unified trading platform — one interface for crypto exchanges and MT5 brokers. Installing it doesn't create any exchange account or place any trade — nothing is connected until you add one. Follow these steps in order.

> **One Platform. Every Market.** — Crypto + Futures + MT5, unified by WolfBot.

## Step 1: Open the Dashboard

Launch WolfBot Community. You'll land on the **Capability Status** page — it shows which brokers and features are available on your install, and confirms nothing is connected yet.

## Step 2: Explore the Dashboard

| Area | Purpose |
|---|---|
| **Portfolio Overview** | Balance, P&L, positions — across ALL connected markets |
| **Bots** | Automated trading bots for crypto and MT5 |
| **Smart Terminal** | Manual trading with risk controls |
| **Risk Controls** | Position limits, drawdown guards |
| **Exchange Accounts** | Broker connections and API keys |

## Step 3: Connect a Demo Account — Zero Risk

WolfBot has no separate "Simulation mode" toggle. Instead, you connect a broker's own **Demo/testnet account** — real market data, virtual funds, the exact same interface and risk engine you'll use for live trading later.

1. Go to **Exchange Accounts → Add Account**
2. Choose **Bybit** and follow the [Bybit Demo setup steps](/brokers/bybit) — WolfBot auto-detects Demo vs. Live from the API key you paste in
3. Try the **Smart Terminal** with your Demo account
4. Watch how positions appear in the Dashboard

> ✅ A Demo account costs nothing and never touches real funds — the safest way to learn WolfBot across every supported market.

[Full Demo/Simulation Guide →](/docs/simulation)

## Step 4: Connect Your Markets for Real Trading

When ready to go live:
1. Create a trade-only API key on your exchange
2. Exchange Accounts → Add Account → Select broker → Enter keys
3. Start with small positions and tight risk controls

> ⚠️ Always use API keys with trade-only permission (no withdrawal).

Broker guides: [Bybit](/brokers/bybit) · [Binance](/brokers/binance) · [BingX](/brokers/bingx) · [KuCoin](/brokers/kucoin) · [Bitget](/brokers/bitget) · [MT5](/brokers/mt5)

## First Week Checklist

- [ ] Explore the Dashboard
- [ ] Connect a Demo account (Bybit Demo or MT5 demo)
- [ ] Trade on Demo for 1–2 days
- [ ] Try the Smart Terminal with your Demo account
- [ ] Read [Risk Controls Guide](/docs/risk-controls)
- [ ] Connect a Live account when you're ready

## Need Help?

- [Documentation](/docs)
- [GitHub Discussions](https://github.com/wolfbot-io/wolfbot-community/discussions)
- [Troubleshooting](/docs/troubleshooting)
- [FAQ](/faq)

## Next step

> **[Connect a Demo Account →](/docs/simulation)**
