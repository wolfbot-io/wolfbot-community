---
title: "Unified Risk vs Per-Bot Risk — Why One Risk Engine Is Safer for Multi-Market Trading"
description: "Running separate risk rules per bot leaves gaps between them. This explains how WolfBot Community's single unified risk engine treats crypto and MT5 positions as one portfolio, and why that stops a spread-out drawdown."
tested_version: "0.1.0-beta.2"
last_updated: "2026-08-16"
platforms: ["windows", "linux"]
category: "risk-controls"
difficulty: "intermediate"
estimated_time: "8 minutes"
next_guide: "/docs/risk-controls"
related_guides: ["/docs/risk-controls", "/docs/why-bots-fail-risk-management", "/docs/how-to-reduce-drawdown"]
keywords: [
  "unified risk management",
  "risk vs per bot risk",
  "portfolio level risk trading",
  "unified risk crypto mt5",
  "drawdown control across bots",
  "wolfbot risk management"
]
sitemap_priority: 0.8
---

# Unified Risk vs Per-Bot Risk

**Tested with WolfBot Community v0.1.0-beta.2** · Last updated: 2026-08-16

## Who this guide is for

- **If you run more than one strategy and want them to behave like one portfolio, not strangers** — this explains the difference between risk per bot and risk across everything.
- **If you're technically inclined** — you'll see how a single risk engine sees your whole exposure instead of fragmenting it by strategy.

## The per-bot trap

Many setups give **each bot its own risk rules**: this strategy has a 10% drawdown limit, that one has another. The problem is that these limits don't talk to each other. If every bot is allowed to draw down a little, and they all do at once — which tends to happen when markets move together — each one individually "obeys its limit" while your total account is bleeding across all of them.

Per-bot risk is like each room in a house having its own sprinkler but no one watching the whole building.

## What unified risk means

A unified risk engine looks at **your total position across every connected account** — crypto futures and MT5 included — before and during each trade. Rules like drawdown limits, exposure caps and guards are evaluated at the portfolio level, not per strategy in isolation.

So "don't exceed X% drawdown" means X% of your **whole portfolio**, no matter how many bots and brokers generated the positions underneath.

## Result in practice

- **A stop is a real stop.** Hitting the portfolio drawdown limit pauses activity across all strategies, not just the one that crossed it.
- **No hidden correlation.** If ten strategies all depend on the same price move, the unified engine sees that exposure once.
- **Crypto and MT5, the same rule.** A gold position on MT5 and a crypto position are both part of the same risk picture.

## Compare the two

| | Per-bot risk | Unified risk |
|---|---|---|
| Drawdown read | per strategy | whole portfolio |
| Correlated positions | invisible | grouped |
| Stop action | that bot only | all activity |
| Crypto + MT5 | separate | together |

## Get started safely

- [Set up your Risk Controls →](/docs/risk-controls)
- [Why bots fail →](/docs/why-bots-fail-risk-management)
- [How to reduce drawdown →](/docs/how-to-reduce-drawdown)

## Next step

> **[Read the Risk Controls guide →](/docs/risk-controls)**
