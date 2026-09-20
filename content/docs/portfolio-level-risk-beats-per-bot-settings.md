---
title: "Why Portfolio-Level Risk Beats Per-Bot Settings"
description: "Ten bots with their own stop-losses can still sink an account together. See why WolfBot evaluates risk across the whole portfolio and how that changes results."
tested_version: "0.1.0-beta.10"
last_updated: "2026-09-06"
platforms: ["windows", "linux"]
category: "risk-controls"
difficulty: "intermediate"
estimated_time: "8 minutes"
next_guide: "/docs/how-unified-risk-differs-from-per-bot-risk"
previous_guide: "/docs/position-sizing-explained"
related_guides: ["/docs/risk-controls", "/docs/how-to-reduce-drawdown", "/docs/position-sizing-explained"]
keywords: ["portfolio level risk trading bot", "unified risk engine", "why per bot risk fails", "account drawdown protection", "WolfBot risk architecture"]
sitemap_priority: 0.8
---

# Why Portfolio-Level Risk Beats Per-Bot Settings

**Tested with WolfBot Community v0.1.0-beta.10** · Last updated: 2026-09-06

## Who this guide is for

- You are running (or planning) more than one automated strategy.
- You want to understand why WolfBot treats risk at the portfolio level instead
  of letting every bot look after itself.

## The classic blind spot: everyone was safe, together they weren't

Imagine ten strategies, each with its own 2% stop-loss. Individually they look
disciplined. Then a correlated move hits all ten at once: ten orders close at
"-2%" within the same hour. The account just lost ~20%, yet no single bot ever
violated its own rule.

That is the fundamental weakness of *per-bot* risk thinking: it checks rules in
isolation while damage happens in aggregate.

```text
Per-bot risk    -> "each strategy lost less than its limit." (looks fine)
Portfolio risk  -> "the account is down X%, so the platform acts now." (real)
```

## What portfolio-level risk can see that per-bot risk cannot

A platform that evaluates the whole account can enforce rules no single bot
could ever express:

```text
- a maximum drawdown for the account, not per strategy,
- a total exposure cap across all open positions,
- a "stop everything" action when the portfolio guard trips,
- cooldowns that apply across bots, not just inside one bot,
- visibility into total realised loss over a period.
```

That is the difference WolfBot documents in
[unified risk vs per-bot risk](/docs/how-unified-risk-differs-from-per-bot-risk)
and exposes through its [risk controls](/docs/risk-controls).

## A worked example

```text
Account: 10,000 USDT
Three strategies, each risking 3% per trade independently
A correlated crypto move hits all three at the same moment

Per-bot view:    three "-3%" closes — each within its own limit
Portfolio view:  account is down ~9% in one hour and still exposed
With a portfolio guard at -8%: the platform stops remaining exposure early
```

The numbers are illustrative; the point is structural. By the time per-bot
settings notice a problem, the portfolio is already the problem.

## Why WolfBot can do this and a "collection of bots" often cannot

A platform that is architecturally a list of independent bots can only check
each bot. WolfBot's core treats crypto accounts, futures and MT5 as parts of
one operating layer — with broker adapters, an execution orchestrator and
guard modules (drawdown, DCA guard, trade guard) around the whole machine. That
is what makes "portfolio-level" a real behaviour instead of a marketing word.

## How to apply it today

```text
1. Set a portfolio/account drawdown guard first — before adding strategies.
2. Size each strategy so the sum of worst cases still respects that guard.
3. Review total exposure daily, not just each bot's PnL.
4. When the guard trips, investigate the combination, not only the last bot.
```

See [position sizing](/docs/position-sizing-explained) for sizing the pieces
and [how to reduce drawdown](/docs/how-to-reduce-drawdown) for recovery habits.

## The bottom line

The market does not care how your rules are organised. If ten strategies can
correlate into one big loss, your risk system must be able to see that loss as
one event. WolfBot's portfolio-level guards are built for exactly that view.
