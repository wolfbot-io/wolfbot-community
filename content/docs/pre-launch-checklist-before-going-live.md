---
title: "Going Live: A Pre-Launch Checklist for Your First Automated Strategy"
description: "A practical checklist for moving from paper trading to a live automated strategy with a self-hosted bot: permissions, risk limits, size and monitoring."
tested_version: "0.1.0-beta.10"
last_updated: "2026-09-06"
platforms: ["windows", "linux"]
category: "live-trading"
difficulty: "beginner"
estimated_time: "10 minutes"
next_guide: "/docs/risk-controls"
previous_guide: "/docs/simulation"
related_guides: ["/docs/simulation", "/docs/risk-controls", "/brokers/api-key-guide"]
keywords: [
  "go live trading bot checklist",
  "paper trading to live trading",
  "first automated strategy",
  "self hosted trading bot go live",
  "safe automated trading setup"
]
sitemap_priority: 0.7
---

# Going Live: A Pre-Launch Checklist for Your First Automated Strategy

**Tested with WolfBot Community v0.1.0-beta.10** · Last updated: 2026-09-06

## Who this guide is for

- You finished the [simulation guide](/docs/simulation), your strategy behaves
  as expected in paper/demo mode, and you now want to let it trade a small
  real account.
- You want a repeatable checklist so "going live" is a controlled step, not a
  jump into the dark.

## The 30-second version

A safe first launch has five parts:

```text
1. Narrow permissions     -> trade-only API keys, withdrawals disabled
2. Start tiny             -> smallest size your exchange and the bot allow
3. Set hard risk limits   -> global stop-loss / max drawdown guard
4. Limit what can happen  -> enable cooldowns and duplicate-order protection
5. Watch the first cycle  -> check logs and fills for the first 24-48h
```

## 1. Check your API key permissions

Connect the exchange with a **trade-only key**: the bot can place and manage
orders but can never withdraw funds. The [API key guide](/brokers/api-key-guide)
shows the exact steps per exchange. After connecting, double-check that the
withdrawal permission is really disabled — see
[why withdrawal permissions should stay disabled](/docs/why-withdrawal-permissions-should-stay-disabled).

## 2. Start smaller than you think you need

The first live order is not about profit; it is about confirming the whole
path works end to end: signal → bot → exchange → fill → record. Use the
smallest position size that is still meaningful for your market. If a fill or
a price feed behaves differently from the simulation, a small position keeps
the lesson cheap.

## 3. Set risk limits before enabling the strategy

Configure the risk controls that belong to this strategy *before* it can place
real orders:

- a **stop-loss / take-profit** plan that matches the simulation,
- a **maximum drawdown or portfolio guard** that stops the bot when things go
  wrong,
- sensible **cooldowns** so a repeated bad signal cannot fire again instantly.

Read [risk-controls](/docs/risk-controls) for the full list and
[how unified risk differs from per-bot risk](/docs/how-unified-risk-differs-from-per-bot-risk)
if you plan to run several strategies later.

## 4. Decide what the bot may do when something looks wrong

A good automated workflow is also a *failure* workflow. Before going live,
answer these questions:

- What happens when the exchange API is temporarily down?
- What happens when a webhook or external signal is delivered twice?
- What happens if a position cannot be closed at the expected price?

If you use TradingView or external signals, review the deduplication settings
described in the [TradingView guide](/docs/tradingview) and
[external signals guide](/docs/external-signals) so one alert does not become
two orders.

## 5. Monitor the first real cycles

Plan to look at the logs, open orders and the performance screen for the first
one or two days. You are verifying four things:

```text
- signals arrive and translate into orders exactly once,
- fills and fees match the exchange record,
- stop-loss / TP rules behave as in simulation,
- the bot recovers cleanly after a restart or an API error.
```

When all four are stable, you can raise the size gradually and add more
strategies — each time repeating the same checklist instead of skipping it.
