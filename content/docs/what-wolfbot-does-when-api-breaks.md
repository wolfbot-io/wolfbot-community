---
title: "What WolfBot Does When an Exchange API Breaks"
description: "APIs go down, webhooks retry and rate limits bite. A plain-language tour of WolfBot's fail-safe behaviour and how to verify it yourself."
tested_version: "0.1.0-beta.9"
last_updated: "2026-09-06"
platforms: ["windows", "linux"]
category: "academy"
difficulty: "intermediate"
estimated_time: "7 minutes"
next_guide: "/docs/error-codes"
previous_guide: "/docs/rate-limits-retries-duplicate-orders"
related_guides: ["/docs/error-codes", "/docs/smart-execution-explained", "/docs/troubleshooting", "/docs/reading-bot-logs-like-an-operator"]
keywords: ["exchange api down trading bot", "trading bot fail safe", "webhook outage bot", "api error handling bot", "WolfBot reliability"]
sitemap_priority: 0.7
---

# What WolfBot Does When an Exchange API Breaks

**Tested with WolfBot Community v0.1.0-beta.9** · Last updated: 2026-09-06

## Who this guide is for

- You worry about the day the exchange API is slow or down while your bot is
  live.
- You want to know what a well-built platform does in that moment — and how to
  verify it on your own setup before trusting it with real money.

## Outages are a when, not an if

Exchange APIs throttle, time out and occasionally go down for maintenance.
Webhook senders retry. Your machine loses its network for a minute. A trading
bot that assumes perfect connectivity is not a bot; it is an accident waiting
to happen.

## The fail-safe checklist

A trustworthy platform behaves predictably in each of these situations:

```text
1. Request times out     -> record it, check exchange state, do not blindly
                            resubmit.
2. Rate limit reached    -> back off and queue, treat it as normal traffic.
3. Webhook delivered twice -> deduplicate -> exactly one order.
4. Order can't be placed -> surface a clear error; never invent a fill.
5. Position can't close  -> keep TP/SL intent visible and retry safely.
6. Connection restored   -> reconcile state, then continue the strategy
                            cycle normally.
```

WolfBot's execution path follows this shape: broker adapters talk to each
exchange through a shared, rate-limit-aware path; retries verify state before
re-submitting; and the risk guards still sit on top so a connectivity hiccup
cannot silently bypass a cooldown or drawdown rule.

## What should NOT happen

Equally important is what a good platform refuses to do:

```text
- do not fabricate a fill that did not happen,
- do not double-submit because the first call was slow,
- do not let a strategy cycle "forget" an open position,
- do not leave a stop-loss unattended during a reconnect.
```

If you ever see a platform guessing instead of checking, that is a red flag —
see [rate limits, retries and duplicates](/docs/rate-limits-retries-duplicate-orders)
for why "verify before retry" matters so much.

## How to test this yourself (no real money needed)

Reliability is testable. Before going live, run these three exercises in
simulation/demo:

```text
1. Send the same webhook twice  -> expect exactly one order.
2. Disconnect the host mid-action -> reconnect and confirm the bot reconciles
   without creating a duplicate.
3. Block the exchange endpoint (or use a wrong permission) -> confirm the
   error is clear and the strategy stops cleanly, not silently.
```

Each exercise is described in the [pre-launch checklist](/docs/pre-launch-checklist-before-going-live).
If any of them produces two orders, a phantom fill or a silent gap, fix it
before money is involved.

## When the API is down, your risk rules are the first responder

Connectivity failures are moments when *risk* matters more than *entries*. A
platform that keeps portfolio guards and TP/SL intent active during a reconnect
is protecting you exactly when the market is doing something you cannot see.
That is the property to look for in every bot — and the reason WolfBot's
guards live at the platform level, not inside a single order call.

## The bottom line

Ask any bot platform: "What happens when the API is slow?" If the answer is
only "we retry", keep asking. The right answer is a sequence — record, check,
deduplicate, reconcile, protect — and it should be visible in the logs so you
can verify it yourself. WolfBot is designed so that sequence exists, is logged,
and is testable before your first real trade.
