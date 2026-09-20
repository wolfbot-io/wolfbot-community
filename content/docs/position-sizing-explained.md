---
title: "Position Sizing Explained: How Much to Risk Per Automated Trade"
description: "Position sizing is the quiet half of risk management. Learn fixed-size and percentage sizing, and how a unified risk engine applies them across bots."
tested_version: "0.1.0-beta.10"
last_updated: "2026-09-06"
platforms: ["windows", "linux"]
category: "risk-controls"
difficulty: "intermediate"
estimated_time: "7 minutes"
next_guide: "/docs/how-unified-risk-differs-from-per-bot-risk"
previous_guide: "/docs/risk-controls"
related_guides: ["/docs/risk-controls", "/docs/how-to-reduce-drawdown", "/docs/how-to-read-trading-performance"]
keywords: [
  "position sizing trading bot",
  "how much to risk per trade",
  "risk per trade percentage",
  "automated trading risk management",
  "wolfbot position sizing"
]
sitemap_priority: 0.7
---

# Position Sizing Explained

**Tested with WolfBot Community v0.1.0-beta.10** · Last updated: 2026-09-06

## Who this guide is for

- You have read [risk-controls](/docs/risk-controls) and want to understand
  the sizing side: *how much* of your account each automated trade may use.
- You plan to run several strategies and want one consistent rule instead of
  guessing per bot.

## Why sizing matters more than entry signals

Entry signals decide *where* you trade; position sizing decides *how much you
can lose while you are right about the long term*. Two identical strategies
with different sizes can produce opposite experiences:

```text
Strategy with 2% risk per trade   -> a losing streak is uncomfortable
Strategy with 20% risk per trade  -> the same streak ends the account
```

The goal of sizing is to survive the losing streaks that every strategy has,
so the winning rules still get a chance to work.

## Two sizing styles you will meet

### Fixed size

Every order uses the same amount (for example, 20 USDT per trade). Simple to
understand, but it does not grow with your account and it can be a large
fraction of a small account.

### Percentage / risk-based size

The bot computes each order from a percentage of the account or of the risk
budget. This is what most long-term users prefer because the size shrinks
automatically after losses and grows after wins — without manual re-tuning.

## Where sizing meets risk limits

A size alone is not a risk plan. It becomes one when it is combined with
limits:

- a **stop-loss** defines how much a losing position can cost,
- a **drawdown guard** defines how much total damage is acceptable before the
  bot stops,
- **cooldowns** stop a repeated losing idea from firing again immediately.

WolfBot applies these as rules around every order — including DCA entries,
TP/SL exits and external signals — so sizing decisions are not left to each
individual order in isolation.

## A simple starting rule

Start conservative and keep the math boring:

```text
1. Decide your max acceptable loss for one bad week (e.g. 5-10%).
2. Split that across the trades the strategy is likely to take.
3. Size each position so a full stop-loss is a small part of that budget.
4. Run the same numbers in simulation first and read the results honestly.
```

If the simulation already reaches your drawdown guard with the planned size,
the size is too big for that strategy — reduce it or improve the rules first.
See [how to reduce drawdown](/docs/how-to-reduce-drawdown) for the next step.

## One more thing: read your results, not your emotions

Sizing is only useful if you measure the outcome. After a few weeks, compare
actual results against the simulation: win rate, average loss, max drawdown.
The [performance guide](/docs/how-to-read-trading-performance) explains which
numbers matter and how to read them without fooling yourself.
