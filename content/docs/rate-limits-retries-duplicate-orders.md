---
title: "Rate Limits, Retries and Duplicate Orders: Execution Internals, Explained"
description: "Exchanges throttle and connections drop. Learn how WolfBot handles rate limits, retries and duplicate protection so one alert never becomes two orders."
tested_version: "0.1.0-beta.9"
last_updated: "2026-09-06"
platforms: ["windows", "linux"]
category: "academy"
difficulty: "intermediate"
estimated_time: "7 minutes"
next_guide: "/docs/smart-execution-explained"
previous_guide: "/docs/fast-markets-and-fills"
related_guides: ["/docs/smart-execution-explained", "/docs/error-codes", "/docs/tradingview"]
keywords: ["exchange rate limits trading bot", "order retry logic bot", "duplicate order protection", "webhook duplicate orders", "WolfBot execution internals"]
sitemap_priority: 0.7
---

# Rate Limits, Retries and Duplicate Orders: Execution Internals, Explained

**Tested with WolfBot Community v0.1.0-beta.9** · Last updated: 2026-09-06

## Who this guide is for

- You have seen an "order rejected" or "timeout" line in the log and want to
  know what happens next.
- You want to understand why duplicate orders are a real risk in automation
  and how a good execution layer prevents them.

## Three boring problems that decide reliability

A trading bot's reliability is decided by how it handles three unglamorous
things:

```text
1. Rate limits   -> exchanges throttle how many requests you may send.
2. Retries       -> a dropped connection or timeout must be handled safely.
3. Duplicates    -> the same intent must never create two orders.
```

Each one is invisible when it works and painful when it does not.

## Rate limits: the exchange says "slow down"

Every exchange limits how many API calls you can make per second/minute. A bot
that fires too many requests gets throttled — and then "nothing happens" even
though the strategy wanted to act.

A good execution layer:

- knows the limit of each exchange,
- queues or spaces out its calls,
- treats a rate-limit response as a normal event, not a mystery.

WolfBot's core includes a rate-limit aware path shared by all broker
connections, so a throttled call does not silently corrupt a strategy cycle.

## Retries: "did that order actually go through?"

A timeout is ambiguous: the request may have failed *before* reaching the
exchange, or the exchange may have received it and answered too late. Blindly
retrying in the second case is how duplicate orders are born.

The safe pattern is:

```text
1. Record the attempt.
2. Check the exchange state before retrying (did the order appear?).
3. Retry only when you know the first attempt did not succeed.
4. Never resubmit a whole strategy action just because one call timed out.
```

This "verify before retry" discipline is exactly what the
[smart execution](/docs/smart-execution-explained) model documents for WolfBot.

## Duplicate orders: why "send it twice" is a real story

Duplicate orders usually come from *duplicate inputs*, not from bad code:

- a TradingView alert delivered twice,
- a webhook retried by the sender,
- the same signal reaching the bot through two paths.

WolfBot handles this at two levels: deduplication on incoming signals (see the
[TradingView guide](/docs/tradingview) and [external signals](/docs/external-signals))
and an execution path that never re-submits an order it has already placed.
The DCA and trade guards sit on top so averaging logic cannot double-fire
either.

## What you should verify in your own tests

Before trusting any bot with this, run a controlled experiment:

```text
1. Send the same webhook twice in a row.
2. Confirm exactly one order was created.
3. Simulate a timeout by disconnecting the host mid-action.
4. Confirm the bot recovers without creating a second order.
```

If both tests produce exactly one order, the duplicate-protection layer is
doing its job. If not, that is the bug to fix *before* real money — see the
[pre-launch checklist](/docs/pre-launch-checklist-before-going-live).

## The bottom line

Rate limits, retries and duplicates are not exotic edge cases; they are the
normal weather of automated trading. Choose (or configure) a platform that
treats them as first-class engineering problems — because on the day your
webhook is delivered twice, that engineering is the only thing standing
between one order and two.
