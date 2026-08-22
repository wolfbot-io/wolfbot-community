---
title: "One Portfolio Across Exchanges and MT5 — See Every Position in a Single View"
description: "Instead of logging into each exchange, your whole portfolio — crypto and MT5 together — shows up in one self-hosted view. Here's what unified portfolio visibility does and why it changes how you manage risk."
tested_version: "0.1.0-p12-ghcr-rc21"
last_updated: "2026-08-16"
platforms: ["windows", "linux"]
category: "automation"
difficulty: "beginner"
estimated_time: "7 minutes"
next_guide: "/docs/risk-controls"
related_guides: ["/docs/risk-controls", "/docs/crypto-and-mt5-one-platform", "/docs/how-unified-risk-differs-from-per-bot-risk", "/brokers/mt5"]
keywords: [
  "unified portfolio trading",
  "one portfolio multiple exchanges",
  "crypto mt5 portfolio view",
  "portfolio across exchanges",
  "single portfolio view bot",
  "wolfbot portfolio dashboard"
]
sitemap_priority: 0.8
---

# One Portfolio Across Exchanges and MT5

**Tested with WolfBot Community v0.1.0-p12-ghcr-rc21** · Last updated: 2026-08-16

## Who this guide is for

- **If you hold positions on more than one exchange and in MT5, and are tired of adding them up in your head or on a spreadsheet.**
- **If you're technically inclined** — this explains how positions from completely different venues are reconciled into one readable portfolio.

## The scattered-portfolio problem

The more markets you trade, the more your "portfolio" spreads across login screens: a futures position on one exchange, spot on another, gold and FX over in MT5. Nothing adds them up unless you do it by hand, and by the time you do, the numbers moved.

WolfBot Community shows you **one portfolio** — every connected account, crypto and MT5, in a single self-hosted dashboard.

## What unified visibility gives you

- **Total exposure at a glance.** See your whole risk instead of splitting it across tabs.
- **Consistent symbols.** The same instrument appears as one row whether it came from MT5 (`XAUUSD`) or a crypto pair — [symbol mapping](/docs/mt5-symbol-mapping) reconciles the names.
- **A portfolio-level number.** Margin, drawdown and exposure are computed together, which feeds the [unified risk engine](/docs/how-unified-risk-differs-from-per-bot-risk) instead of a loose set of per-bot numbers.

## How it works

Underneath, Binance and MT5 are unrelated systems — a futures REST API and a Windows trading terminal. WolfBot connects both and presents them through one portfolio view, resolving the symbol/venue differences in between. You get a coherent picture without giving up any of your brokers.

## Start small

Connect a crypto Demo and an MT5 Demo, open a tiny position on each, and look at the portfolio view — both appear in the same list. That's the base for trusting the unified numbers before you run bigger sizes.

## Where to go next

- [Risk Controls →](/docs/risk-controls)
- [How unified risk differs →](/docs/how-unified-risk-differs-from-per-bot-risk)
- [Crypto and MT5 on one platform →](/docs/crypto-and-mt5-one-platform)

## Next step

> **[Read the Risk Controls guide →](/docs/risk-controls)**
