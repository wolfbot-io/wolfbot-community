---
title: "Trade-Only API Keys Explained — Why Your Bot Should Never Be Able to Withdraw"
description: "The single most important setting when connecting any exchange to a trading bot: disabling withdrawal permissions. Here's exactly what a trade-only API key can and can't do, and why it matters."
tested_version: "0.1.0-beta.4"
last_updated: "2026-08-14"
platforms: ["windows", "linux"]
category: "security"
difficulty: "beginner"
estimated_time: "5 minutes"
next_guide: "/brokers/api-key-guide"
related_guides: ["/brokers/api-key-guide", "/security", "/docs/self-hosted-explained"]
keywords: [
  "trade only api key",
  "api key withdrawal disabled",
  "is it safe to connect exchange api to a bot",
  "non custodial trading bot",
  "trading bot api key security"
]
sitemap_priority: 0.75
---

# Trade-Only API Keys Explained

**Tested with WolfBot Community v0.1.0-beta.4** · Last updated: 2026-08-14

## Who this guide is for

- **If you want to connect an exchange without putting your funds at risk** —
  this shows you the one permission to always turn off, in plain language, so
  a leaked key can never empty your account.
- **If you're technically inclined** — you'll get the exact permission model
  (Read/Trade vs Withdraw/Transfer) and the second layer of IP restriction.

## The one setting that matters most

Every exchange lets you create an API key with a specific set of permissions attached to it — not "your whole account," a narrower slice of it. When you connect an exchange to any trading bot, including WolfBot, the single most important decision you make is which permissions that key has.

WolfBot only ever needs two:

- **Read** — see your balance, open orders and positions
- **Trade** — place and cancel orders

It never needs, and should never be given:

- ❌ **Withdraw** — move funds off the exchange
- ❌ **Transfer** — move funds between exchange sub-accounts or to other users

## What happens if you leave withdrawal enabled anyway

Nothing, most of the time — until the one time it matters. If your API key or the machine it's stored on is ever compromised, the blast radius is defined entirely by what that key is *allowed* to do, not by what your bot actually uses. A trade-only key in the wrong hands can place unwanted trades — annoying, and something you'd notice and can undo. A withdrawal-enabled key in the wrong hands can empty the account.

This is why exchanges expose the permission as its own checkbox, separate from trading: it's meant to be turned off for exactly this use case.

## Why this matters more for self-hosted tools

WolfBot Community runs on your own machine — which is a genuine security advantage (see [Self-Hosted Explained](/docs/self-hosted-explained)), but it also means the API key lives in your environment, not behind a vendor's own hardened infrastructure. Trade-only permissions are what make that trade-off a non-issue: even if your machine were compromised, an attacker holding your API key still can't move your funds anywhere, because the exchange itself refuses withdrawal requests from that key.

This is also why WolfBot is **non-custodial** — at no point does WolfBot, or anyone else, ever hold your funds. They stay on the exchange, under permissions you control, and you can revoke the key instantly from your exchange account at any time.

In WolfBot, each connected account shows its environment (Live/Demo), its P&L and its permission state at a glance — so you can verify a key is read-trade only:

![WolfBot Exchange Accounts showing per-account status, environment and permission state](/screenshots/wolfbot-accounts.webp)

## IP restriction — the second layer

Most exchanges also let you lock an API key to a specific IP address. If you're running WolfBot on a fixed home connection or a VPS, this adds a second independent barrier: even a leaked key with trade-only permissions becomes useless from anywhere else. Not every exchange supports this for every account tier, but it's worth enabling wherever it's offered.

## Checklist for every broker you connect

- [ ] Trade permission: **enabled**
- [ ] Read permission: **enabled**
- [ ] Withdrawal permission: **disabled**
- [ ] Transfer permission: **disabled**
- [ ] IP restriction: **enabled where supported**

Every broker guide in the [Academy](/academy) walks through exactly where to find these checkboxes for that specific exchange.

## Next step

> **[Full API Key Setup Guide →](/brokers/api-key-guide)**
