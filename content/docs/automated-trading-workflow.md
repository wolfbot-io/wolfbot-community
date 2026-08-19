---
title: "Automated Trading with WolfBot Community — From Strategy to Execution"
description: "How automated trading works in WolfBot Community: configure a bot, choose a strategy template, test on a Demo account, and let the same risk engine protect every automated order across crypto and MT5."
tested_version: "0.1.0-p12-ghcr-rc19"
last_updated: "2026-08-14"
platforms: ["windows", "linux"]
category: "automation"
difficulty: "beginner"
estimated_time: "8 minutes"
next_guide: "/docs/take-profit-stop-loss"
related_guides: ["/docs/simulation", "/docs/risk-controls", "/docs/smart-terminal"]
keywords: [
  "automated trading bot",
  "trading bot automation",
  "crypto trading bot",
  "wolfbot automated trading",
  "trading bot workflow",
  "set up trading bot"
]
sitemap_priority: 0.80
---

# Automated Trading with WolfBot Community

**Tested with WolfBot Community v0.1.0-p12-ghcr-rc19** · Last updated: 2026-08-14

## Who this guide is for

- **If you want a bot to trade for you** — this walks you through the whole
  workflow in plain language, from picking a strategy to running it safely, so
  you know exactly what happens after you click "start".
- **If you're technically inclined** — you'll see how WolfBot wraps *every*
  automated order in the same risk engine as manual trading, which is what
  keeps an automated bot from turning a small bug into a big loss.

## What "automated trading" means here

Automated trading in WolfBot Community is a bot that you configure once, then
let run: it watches the market, decides when to enter and exit according to a
strategy, and places orders for you. You're not hand-clicking each trade — but
you *are* still in charge of the two things that matter most: the strategy it
follows and the risk limits it must respect.

## The workflow, end to end

```text
1. Pick a strategy template
2. Configure its parameters
3. Point it at a Demo account first
4. Let the risk engine wrap every order
5. Review, then point it at Live
```

### 1. Pick a strategy template

In the **Bots** area you create a bot and choose a strategy template — a
starting point for how the bot decides to buy and sell. You don't write code;
you pick a template and tune its parameters.

### 2. Configure its parameters

Each strategy exposes its own settings (entry/exit rules, timeframe, symbol).
Set them conservatively at first — you can always loosen them later once you've
seen the bot behave on real market data.

### 3. Point it at a Demo account first

Before any real money moves, run the bot against a [Demo account](/docs/simulation).
It trades real market data with virtual funds, so you can watch exactly how the
strategy behaves — including its losing streaks — at zero cost.

### 4. The risk engine wraps every order

This is the part that matters most. An automated bot places orders
automatically, but every one of those orders still passes through the same
[risk controls](/docs/risk-controls) as a manual trade:

- **Position size cap** — one bad signal can't open an oversized position
- **Drawdown guard** — a losing streak pauses the bot instead of compounding
- **Cooldown** — a minimum gap between orders, longer after a loss
- **Daily trade limit** — a ceiling on total orders

So the bot can *suggest* trades, but it can't bypass your safety limits.

### 5. Review, then go Live

Once you're comfortable with the bot's behaviour on Demo, point the same
configuration at a Live, [trade-only API key](/brokers/api-key-guide) and start
with the smallest position size you can.

## One bot, every market

A bot in WolfBot Community works across your connected accounts the same way
manual trading does — crypto on Binance or Bybit, futures, or MT5 instruments
(forex, gold, indices). The strategy logic and the risk engine don't change
between markets; only the account the bot trades on does.

You manage every bot — its lifecycle, paper state and risk snapshot — in the
Bots view:

![WolfBot My Bots view showing bot lifecycle and paper state](/screenshots/wolfbot-bots.webp)

## Common mistakes

| Mistake | Fix |
|---|---|
| Going live without a Demo run | Run the strategy on [Demo](/docs/simulation) first and watch a full losing streak |
| Disabling risk limits "just for testing" | Keep them on — they apply identically on Demo, so there's no reason to remove them |
| One bot per market with different rules | Use one risk engine across all accounts so a loss in one market can't hide from the guard |
| Ignoring the cooldown | A short cooldown stops the bot from firing into a fast-moving market |

## Troubleshooting

- **Bot placed an unexpected order** — check the strategy parameters and the
  [risk controls](/docs/risk-controls) it's subject to.
- **Bot paused on its own** — that's the drawdown guard or a daily limit doing
  its job; review the Risk page to see which limit triggered.
- **Order rejected** — check exchange minimums, lot sizes (MT5), and your
  account balance. See [Troubleshooting](/docs/troubleshooting).

## Next step

> **[Take-Profit and Stop-Loss — the two orders that protect every trade →](/docs/take-profit-stop-loss)**
