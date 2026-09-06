---
title: "Leverage, Margin and Automated Futures: A Risk Primer"
description: "Automated futures trading changes risk maths. Learn what leverage and margin mean for a bot, and how risk controls should be set before going live."
tested_version: "0.1.0-beta.9"
last_updated: "2026-09-06"
platforms: ["windows", "linux"]
category: "risk-controls"
difficulty: "intermediate"
estimated_time: "8 minutes"
next_guide: "/docs/position-sizing-explained"
related_guides: ["/docs/position-sizing-explained", "/docs/risk-controls", "/docs/take-profit-stop-loss", "/brokers/binance"]
keywords: [
  "automated futures trading risk",
  "leverage for trading bot",
  "margin explained crypto futures",
  "futures bot risk management",
  "wolfbot futures automation"
]
sitemap_priority: 0.7
---

# Leverage, Margin and Automated Futures: A Risk Primer

**Tested with WolfBot Community v0.1.0-beta.9** · Last updated: 2026-09-06

## Who this guide is for

- You are thinking about automating **futures/perpetual** trading, not just spot.
- You already understand spot trading and want the *differences* that matter to
  risk — not a full futures course.

## The one difference that changes everything

On spot, a position can fall in price but it still belongs to you. On futures,
your position is **leveraged**: the exchange lends you exposure and asks for
margin as collateral. If the market moves against you far enough, the position
can be liquidated before price ever recovers.

```text
Spot    -> you own the asset; the worst case is "price went down".
Futures -> you control margin; the worst case is "the exchange closed your
           position at the worst moment" (liquidation).
```

A bot removes the effort of clicking — it does **not** remove liquidation risk.
Everything below exists to keep that risk visible and bounded.

## Leverage multiplies both directions

Leverage 5× means a 1% price move changes your position value by 5%. That
works in your favour and against you. The dangerous part for automation is
that leverage is usually *set per position* while losses accumulate over many
positions — so the total risk can grow without anyone noticing.

Practical rule: **start with low leverage (1–3×) on a small account**, then
raise it only after many live cycles behave as expected.

## What margin tells you before a trade

Margin is the collateral required to open and hold the position. Before letting
a bot open leveraged positions, know:

```text
- how much margin one position requires,
- how much free margin remains after the position,
- at what price level the exchange would liquidate it,
- whether your stop-loss fires *before* that level.
```

Your stop-loss must sit well inside the liquidation distance — see the
[take-profit and stop-loss guide](/docs/take-profit-stop-loss) for how WolfBot
attaches these to a position.

## Set risk controls the same way as spot — then add margin checks

The risk controls you already know still apply:

- stop-loss and take-profit on every position,
- cooldowns after repeated failures,
- a drawdown guard that can stop the bot entirely.

For futures, add one more habit: **check free margin and open risk** in the
daily review, not just the PnL. The [risk-controls](/docs/risk-controls) guide
lists every available guard; [position sizing](/docs/position-sizing-explained)
shows how to choose per-trade size.

## When in doubt, go back to simulation

Futures behaviour is best learned before real money. Run the strategy in
simulation/demo mode first with the same leverage you plan to use live, then
compare liquidation risk between the two. If the simulation already touches
liquidation levels during normal volatility, reduce leverage — the bot will
trade the same rules tomorrow, and the market will still be there.
