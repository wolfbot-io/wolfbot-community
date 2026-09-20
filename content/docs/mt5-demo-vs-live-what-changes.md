---
title: "MT5 Demo vs Live: What Changes When You Automate for Real"
description: "A strategy that works on an MT5 demo account can behave differently live. Know the differences in fills, symbols, weekends and broker rules."
tested_version: "0.1.0-beta.10"
last_updated: "2026-09-06"
platforms: ["windows", "linux"]
category: "live-trading"
difficulty: "intermediate"
estimated_time: "8 minutes"
next_guide: "/docs/mt5-symbol-mapping"
previous_guide: "/docs/mt5-self-hosted-trading"
related_guides: ["/docs/mt5-self-hosted-trading", "/docs/mt5-symbol-mapping", "/brokers/mt5", "/docs/pre-launch-checklist-before-going-live"]
keywords: [
  "mt5 demo vs live trading",
  "automate mt5 live account",
  "mt5 demo account differences",
  "forex bot demo to live",
  "wolfbot mt5 automation"
]
sitemap_priority: 0.7
---

# MT5 Demo vs Live: What Changes When You Automate for Real

**Tested with WolfBot Community v0.1.0-beta.10** · Last updated: 2026-09-06

## Who this guide is for

- Your strategy is working on an MT5 demo account and you are about to point
  the bot at a live one.
- You want the checklist of differences to expect — so the first live week
  does not surprise you.

## Demo and live are not the same market

A demo feed looks identical and fills instantly. A live feed has real
spreads, real depth and real broker rules. The differences below are normal —
the goal is to know them in advance, not to be caught off guard.

## What usually changes

### Fills and spreads

Live spreads widen around news and at quiet hours (including rollover).
Orders that filled instantly on demo may slip or take longer live. Keep your
expected slippage budget realistic and re-check it during the first week.

### Symbols and symbol names

Broker symbol names differ: one broker calls gold `XAUUSD`, another adds a
suffix. The bot needs the exact symbol name your live broker uses. The
[symbol mapping guide](/docs/mt5-symbol-mapping) explains how WolfBot maps
your internal symbol to the broker's real one — get this right *before* going
live.

### Trading sessions and weekends

Demo accounts often stay open around the clock for convenience; live forex and
metals have defined session open/close times and weekend breaks. A strategy
that fires during a closed session on demo may simply fail to fill live. Plan
around the session calendar of the instrument you automate.

### Broker margin and leverage rules

Leverage offered on demo is not guaranteed on live. If your live account has
lower leverage, the same position size uses more margin — which can trigger
margin calls your demo never showed. Re-check margin requirements with your
real account settings before the first trade.

### Execution and requotes

Some live accounts are requote or manual-quote based for certain order types.
An automated bot expects reliable order routing; if your broker requotes
heavily, test with a demo first and, if needed, prefer order types that your
broker executes without requote.

## A safe first-live plan

```text
1. Confirm the live symbol names and sessions (not the demo ones).
2. Confirm live leverage and margin rules.
3. Run the smallest live size for one full week.
4. Compare fills, spreads and margin use against your plan daily.
5. Only then scale up — and only after the numbers, not the excitement,
   tell you to.
```

The [pre-launch checklist](/docs/pre-launch-checklist-before-going-live) and
the [MT5 self-hosted guide](/docs/mt5-self-hosted-trading) cover the rest of
the setup. Treat the demo-to-live move as a controlled experiment with a small
size — that is how professionals treat it too.
