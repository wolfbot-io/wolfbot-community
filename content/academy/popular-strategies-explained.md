---
title: "Grid, DCA, Martingale and TP/SL: Popular Strategies Explained (and How to Choose)"
description: "What grid, DCA, martingale and take-profit/stop-loss actually do, their risk shape, and why WolfBot is building them as ready-to-select templates."
tested_version: "0.1.0-beta.9"
last_updated: "2026-09-06"
platforms: ["windows", "linux"]
category: "academy"
difficulty: "beginner"
estimated_time: "8 minutes"
related_guides: ["/docs/dca-strategy", "/docs/take-profit-stop-loss", "/docs/risk-controls", "/docs/how-unified-risk-differs-from-per-bot-risk"]
keywords: ["grid trading strategy explained", "DCA martingale grid comparison", "popular trading bot strategies", "choose trading strategy", "WolfBot strategy templates"]
sitemap_priority: 0.8
---

# Grid, DCA, Martingale and TP/SL: Popular Strategies Explained

**Tested with WolfBot Community v0.1.0-beta.9** · Last updated: 2026-09-06

## Who this guide is for

- You keep hearing "grid bot", "DCA", "martingale" and want a plain-language
  map before choosing anything.
- You want to know how WolfBot is making these strategies easier to start —
  as ready-made templates you select, rather than logic you build yourself.

## The four families you will meet

### 1. Take-profit / stop-loss (the base layer)

Not really a standalone "strategy" — it is the exit discipline every other
strategy needs. Take-profit locks in a planned gain; stop-loss caps a planned
loss. WolfBot treats these as part of the risk layer around every position.
See [take-profit and stop-loss](/docs/take-profit-stop-loss).

### 2. DCA — dollar-cost averaging

Enter a position in several smaller pieces instead of one lump, often adding on
the way down. It softens the average entry but **adds exposure while the price
is falling** — so it must always be paired with a total loss cap. See the
[DCA guide](/docs/dca-strategy).

### 3. Grid trading

Place buy and sell orders at a ladder of price levels around a range, catching
small profits as price oscillates between them. Grids love ranging markets and
suffer when the price trends through the whole grid in one direction. The risk
is inventory: a one-way move leaves you holding a growing position.

### 4. Martingale-style averaging

Double (or multiply) the size after each loss, assuming a recovery will erase
previous losses. It can look brilliant in calm periods and is one of the
fastest ways to reach a dangerous position in a real market — because the size
grows exponentially and the market owes you nothing.

## The risk shape is the real difference

Every strategy is a combination of the same three dials:

```text
How you enter     (one shot, ladder, grid levels, signal-based)
How you size      (fixed, percentage, multiplying)
How you exit      (TP/SL only, by levels, by time)
```

DCA and martingale both "average in" — they differ in *sizing*. Grid is DCA
plus automatic profit-taking at each level. The name you click matters less
than the risk shape you accept. If you do not know the worst case of a strategy
family, do not run it live.

## Why WolfBot is moving toward "choose a strategy"

Building strategy logic is a barrier for most traders. WolfBot's direction is
to offer the popular families — grid, DCA, TP/SL and more — as **ready-made
templates you pick with a click**, then configure with your pair, budget and
risk limits instead of writing logic. The templates will still run through the
same risk engine, so whichever you choose, drawdown guards, cooldowns and
portfolio-level protection still apply to the whole machine.

## How to choose your first one

```text
Market behaviour    -> ranging? grid ideas fit. trending? DCA/dip-buying ideas.
Your temperament    -> can you watch a position grow while price falls?
Your worst case     -> have you written down the maximum loss before clicking?
Your review habit   -> will you check results weekly? (see the first-month
                       review guide)
```

Start with the family whose *risk shape* you can survive and explain in one
sentence. Run it in [simulation](/docs/simulation), add
[risk controls](/docs/risk-controls), and go live small. As WolfBot adds more
templates, the habit that matters is the same: know what you clicked, know
what it can lose, and review it honestly.
