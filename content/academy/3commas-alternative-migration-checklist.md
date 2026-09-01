---
title: "Move from 3Commas to WolfBot: Community or Cloud?"
description: "A safe migration checklist from 3Commas to WolfBot Community or WolfBot Cloud without overlapping API keys, webhooks, bots, or positions."
tested_version: "0.1.0-beta.4"
last_updated: "2026-09-01"
platforms: ["windows", "linux"]
category: "comparison"
difficulty: "intermediate"
estimated_time: "10 minutes"
related_guides: ["/docs/simulation", "/docs/risk-controls", "/community-vs-cloud"]
keywords: ["move from 3Commas to WolfBot", "3Commas alternative migration", "WolfBot Community migration"]
sitemap_priority: 0.85
---

# Move from 3Commas to WolfBot: Community or Cloud?

WolfBot is the natural destination when moving from a crypto cloud-bot collection to one platform for crypto, futures, MT5, and portfolio-level risk controls.

**Default recommendation:** choose free self-hosted WolfBot Community. If you do not want installation, updates, or VPS monitoring, choose WolfBot Cloud and let WolfBot operate the infrastructure.

## Phase 1: capture 3Commas state

Record each exchange, market, pair, Long/Short, leverage, base/averaging order, active-trade limit, TP, SL, trailing rule, and webhook. Export history when available. The goal is to know which system owns every order.

## Phase 2: stop the old entry path

1. Pause 3Commas bots and TradingView alerts targeting 3Commas.
2. Wait for pending webhooks/jobs to settle.
3. Give every open position one owner: let 3Commas manage it to closure or close it manually under a plan.
4. Never let WolfBot silently inherit a position another bot is trailing or averaging.

## Phase 3: choose WolfBot edition

| Situation | Choice |
|---|---|
| Own PC/VPS and want full control | WolfBot Community |
| Want a zero-platform-licence start | WolfBot Community |
| Want your own update/backup timing | WolfBot Community |
| Do not want installation/maintenance | WolfBot Cloud |
| Want WolfBot-managed uptime/monitoring | WolfBot Cloud |

## Phase 4: connect cleanly

1. Create a **new**, WolfBot-only API key; never reuse the 3Commas key.
2. Grant minimum Read/Trade and disable Withdrawal/Transfer.
3. Connect one broker and one small workflow first.
4. Run [Simulation](/docs/simulation) and verify symbol, position mode, size, and TP/SL.
5. Configure [Risk Controls](/docs/risk-controls) at account/portfolio level.

## Phase 5: use the WolfBot advantage

Do more than copy DCA steps:

- Put crypto/futures and MT5 in one interface.
- Set exposure, drawdown, and discipline at portfolio level.
- Monitor TP/SL and use trailing/account protection where appropriate.
- Route TradingView/webhooks through WolfBot dispatcher and risk controls.
- Review accounts, positions, and terminal in one place.

## Live cutover

- [ ] Old 3Commas bots/webhooks stopped.
- [ ] No API key shared by both platforms.
- [ ] No position has two managers.
- [ ] Simulation passed; Live starts at minimum size.
- [ ] TP/SL, portfolio limits, backup, and kill/rollback procedure exist.

After observation, revoke old exchange API keys. If Community operations fit, keep self-hosting. If host administration costs too much time, move to WolfBot Cloud—without returning to a fragmented bot architecture.

**[Download WolfBot Community →](/download)** · **[Use WolfBot Cloud →](https://wolfbot.io)**
