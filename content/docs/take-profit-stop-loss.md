---
title: "Take-Profit and Stop-Loss — The Two Orders That Protect Every Trade"
description: "Take-profit (TP) and stop-loss (SL) are the two orders that decide how much you win and how much you can lose. Here's how WolfBot Community places them automatically and how to tune them."
tested_version: "0.1.0-beta.4"
last_updated: "2026-08-14"
platforms: ["windows", "linux"]
category: "risk-controls"
difficulty: "beginner"
estimated_time: "6 minutes"
next_guide: "/docs/dca-strategy"
previous_guide: "/docs/automated-trading-workflow"
related_guides: ["/docs/risk-controls", "/docs/smart-terminal", "/docs/automated-trading-workflow"]
keywords: [
  "take profit stop loss",
  "tp sl trading bot",
  "stop loss trading bot",
  "take profit order",
  "trading bot stop loss"
]
sitemap_priority: 0.80
---

# Take-Profit and Stop-Loss

**Tested with WolfBot Community v0.1.0-beta.4** · Last updated: 2026-08-14

## Who this guide is for

- **If you want to protect every trade without babysitting the screen** — this
  explains the two orders that do the protecting, and how WolfBot attaches them
  to your trades for you.
- **If you're technically inclined** — you'll see how TP/SL are derived from
  your risk settings (reward and loss percentages) and where to override them.

## The two orders, in plain language

A trade by itself has no exit plan. Two orders give it one:

| Order | What it does | Why it matters |
|---|---|---|
| **Stop-loss (SL)** | Closes the position automatically if the price moves against you by a set amount | Caps how much you can lose on any single trade |
| **Take-profit (TP)** | Closes the position automatically when the price reaches your target | Locks in a gain instead of hoping for more and giving it back |

Without them, "watching the position" is the only exit strategy — and no one
watches every second, especially not across crypto and MT5 markets at once.

## How WolfBot Community handles TP/SL

WolfBot attaches TP/SL **automatically** to every trade you place through the
[Smart Terminal](/docs/smart-terminal), and it derives the levels from your
risk settings:

- **Stop-loss** — set from your configured loss tolerance, so a single trade
  can only ever lose a bounded amount
- **Take-profit** — set from your reward ratio, so winners are banked at a
  target rather than left open

You can still adjust either level from the position panel after the fact, but
the default is "a stop-loss is attached" — not "you forgot to add one."

> 🛡️ WolfBot's risk engine treats a missing stop-loss as a problem, not a
> choice: the terminal enforces that every position has a stop-loss (this is
> configurable, but on by default).

## How to think about the numbers

The two percentages that matter are your **loss per trade** and your **reward
per trade**:

```text
Risk 1.5% to make 3%   →  1:2 risk/reward
```

A 1:2 ratio means you only need to be right a bit more than a third of the time
to break even, because winners are twice the size of losers. This is why TP/SL
aren't just safety — they're the foundation of any consistent strategy.

## Tuning TP/SL in WolfBot

1. Set your base loss tolerance on the **Risk** page (this feeds the stop-loss)
2. Set your reward target (this feeds the take-profit)
3. Place a trade in the **Smart Terminal** — TP/SL are attached automatically
4. Fine-tune a specific position from the position panel if needed

> For automated bots, the same TP/SL logic applies: a bot can't enter a trade
> that would violate your configured limits, and its exits respect the same
> take-profit/stop-loss behaviour.

## Common mistakes

| Mistake | Fix |
|---|---|
| Moving the stop-loss further away "to give it room" | That increases risk mid-trade — decide your risk *before* entry, then leave it |
| No take-profit, hoping for a big win | Bank winners at a target; you can always re-enter |
| Different TP/SL rules per market | Use one risk engine so crypto and MT5 trades behave the same |
| Disabling the required stop-loss | Keep it on — it's the single most important guard |

## Next step

> **[Dollar-Cost Averaging (DCA) — a different way to enter a position →](/docs/dca-strategy)**
