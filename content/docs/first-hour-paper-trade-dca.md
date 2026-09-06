---
title: "First Hour With WolfBot Community: Download to a Paper-Trade DCA Strategy"
description: "A step-by-step first session: install, connect a test account, enable simulation, configure DCA with TP/SL and review your first paper fills."
tested_version: "0.1.0-beta.9"
last_updated: "2026-09-06"
platforms: ["windows", "linux"]
category: "simulation"
difficulty: "beginner"
estimated_time: "60 minutes"
next_guide: "/docs/dca-strategy"
previous_guide: "/docs/simulation"
related_guides: ["/docs/dca-strategy", "/docs/take-profit-stop-loss", "/docs/risk-controls", "/install/windows", "/install/linux"]
keywords: ["first trading bot setup", "paper trade DCA strategy", "WolfBot Community tutorial", "set up DCA bot in one hour", "demo trading bot first strategy"]
sitemap_priority: 0.8
---

# First Hour With WolfBot Community: Download to a Paper-Trade DCA Strategy

**Tested with WolfBot Community v0.1.0-beta.9** · Last updated: 2026-09-06

## Who this guide is for

- You downloaded WolfBot Community and want one guided session that ends with
  a real-looking DCA strategy running safely in paper/demo mode.
- You want to see the whole loop — install, connect, strategy, risk, fill —
  before you put real money anywhere near it.

## What you will have after 60 minutes

```text
- a running WolfBot Community installation,
- a connected demo/test exchange account,
- simulation mode confirmed on,
- one DCA strategy with a stop-loss and take-profit plan,
- risk limits that can stop the machine,
- your first paper fills visible in the log/performance view.
```

## Step 1 — Install (10 minutes)

Install Community on the platform you intend to use long term. The
[Windows guide](/install/windows) and [Linux/VPS guide](/install/linux) cover
the exact steps. A desktop PC is fine for testing; a VPS is what you want when
you let it run 24/7 later ([run 24-7 on a VPS](/docs/run-24-7-on-a-vps)).

## Step 2 — Connect a test account, not your main one (10 minutes)

Every exchange connection follows the same safety pattern from the
[API key guide](/brokers/api-key-guide):

```text
1. Use a demo/testnet account if the exchange offers one.
2. Create a NEW key for the bot — never reuse another key.
3. Grant trading/read permissions only; keep withdrawal disabled.
4. Keep the main account's real key out of the test setup entirely.
```

If no demo account exists, use a small dedicated live account with trade-only
permissions and tiny balances — never your main trading wallet.

## Step 3 — Turn simulation on (5 minutes)

Before any strategy can place an order, confirm that the platform runs in
simulation/demo mode so fills are simulated. The [simulation guide](/docs/simulation)
explains what simulation can and cannot tell you: it validates the *flow*
(signal → order → fill record → risk update), while live fills add real
spreads and slippage.

## Step 4 — Create a small DCA strategy (15 minutes)

Build the simplest strategy that exercises the loop end to end. Read the
[DCA guide](/docs/dca-strategy) for the full mechanics; the short version:

```text
Market:        pick one pair you know (for example BTC/USDT on the test account)
Entry style:   DCA — split the intended position into 3-4 smaller entries
Direction:     one direction only (buy) on the first test
Budget:        the smallest size the exchange allows per sub-order
```

Keep the first test deliberately boring: one pair, one direction, three
entries. Fancy logic can come after the basic loop is proven.

## Step 5 — Attach TP/SL before you start (10 minutes)

A DCA strategy without exits is not a strategy — it is a growing position.
Configure a stop-loss and take-profit plan per the
[take-profit and stop-loss guide](/docs/take-profit-stop-loss). For the first
test, prefer a stop-loss that triggers before anything dramatic can happen:
you are validating the platform, not hunting profit.

## Step 6 — Set portfolio-level risk limits (5 minutes)

Even in paper mode, build the habit of setting the guards you will need live:

```text
- a max position/exposure limit for this test strategy,
- a drawdown/portfolio guard that can stop the machine,
- a cooldown so repeated bad entries cannot fire back-to-back.
```

See [risk-controls](/docs/risk-controls) for every available guard and
[position sizing](/docs/position-sizing-explained) to choose the size logic.

## Step 7 — Run it and read the first fills (5 minutes)

Start the strategy, then open the log and the performance/fills view. Verify
the four things that matter:

```text
1. Each DCA sub-order was placed as designed.
2. The fills were recorded at sensible simulated prices.
3. The risk limits you set are visible on the open position.
4. No duplicate orders appeared.
```

If something looks wrong, the [reading logs](/docs/reading-bot-logs-like-an-operator)
and [troubleshooting](/docs/troubleshooting) guides help you read what the bot
reported.

## Step 8 — Decide the next 24 hours (5 minutes)

Leave the paper strategy running and plan one daily review —
see [running strategies without watching charts](/docs/running-strategies-without-watching-charts).
When the loop is clean after a day of paper fills, the path to live is the
[pre-launch checklist](/docs/pre-launch-checklist-before-going-live): a tiny
real size, the same TP/SL and risk limits, and one honest week of results.

## Why start this way

The fastest way to learn any trading platform is to see one complete, safe
cycle from start to finish. Sixty minutes now — with simulation, test keys and
a tiny DCA — will save you the expensive version of that lesson later.
