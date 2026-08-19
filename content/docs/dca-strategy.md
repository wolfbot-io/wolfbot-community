---
title: "Dollar-Cost Averaging (DCA) in WolfBot Community"
description: "Dollar-cost averaging (DCA) spreads a position into smaller entries instead of one big buy. Here's how WolfBot Community supports DCA and how it fits the same risk engine as every other order."
tested_version: "0.1.0-p12-ghcr-rc17"
last_updated: "2026-08-14"
platforms: ["windows", "linux"]
category: "automation"
difficulty: "intermediate"
estimated_time: "6 minutes"
next_guide: "/docs/risk-controls"
previous_guide: "/docs/take-profit-stop-loss"
related_guides: ["/docs/take-profit-stop-loss", "/docs/risk-controls", "/brokers/bybit"]
keywords: [
  "dollar cost averaging",
  "dca trading bot",
  "dca crypto bot",
  "wolfbot dca",
  "average down trading bot"
]
sitemap_priority: 0.75
---

# Dollar-Cost Averaging (DCA)

**Tested with WolfBot Community v0.1.0-p12-ghcr-rc17** · Last updated: 2026-08-14

## Who this guide is for

- **If you want a gentler way into a position** — this explains DCA in plain
  language: what it is, when it helps, and how WolfBot runs it.
- **If you're technically inclined** — you'll see how a DCA entry is modelled
  as a sequence of sub-orders (each with its own index) inside the same order
  execution path, so risk limits still apply to the *whole* position, not just
  the first slice.

## What DCA is

Dollar-cost averaging means buying a position in **several smaller pieces over
time or across price levels**, instead of one lump at a single price.

```text
One-shot entry:     buy 100% at once  →  one price decides everything
DCA entry:          buy 25% × 4       →  average of several prices
```

If the price keeps falling after your first slice, the later slices buy lower,
which brings your average entry price down. You give up some upside if the
price never dips, but you remove the "did I time this perfectly?" problem.

## How WolfBot Community supports DCA

DCA is one of the order types WolfBot supports, alongside market, limit and
TP/SL orders. A DCA entry is handled as a set of smaller sub-orders rather than
one large fill — each slice is tracked individually in the execution layer.

> 🔎 **For technical readers:** each DCA sub-order carries its own `dca_index`
> (`1` for the first slice, incrementing from there), so the execution manager
> knows which slice it's filling and can treat the sequence as one logical
> position for risk purposes.

## Why it still respects your risk limits

DCA does **not** mean "keep buying with no ceiling." The whole DCA sequence is
still subject to the same [risk controls](/docs/risk-controls) as any other
position:

- The **total position size** across all slices stays within your exposure cap
- The **drawdown guard** still pauses trading if the combined position loses too
  much
- **TP/SL** still apply to the overall position, not each slice in isolation

This is the important part: DCA spreads *when* you buy, not *how much total
risk* you take.

## When DCA makes sense

- You're confident in the long-term direction but not in the short-term timing
- You're entering a volatile market where the exact entry price is hard to call
- You want to reduce the regret of a single mistimed entry

## Common mistakes

| Mistake | Fix |
|---|---|
| Treating DCA as "buy the dip with no limit" | The total position is still capped by your exposure limit — set it first |
| No stop-loss on a DCA position | The whole position still needs a stop-loss, like any other trade |
| Adding slices without watching total exposure | Every slice adds to the same position; check the combined size |

## Next step

> **[Configure the risk controls that keep DCA (and everything else) safe →](/docs/risk-controls)**
