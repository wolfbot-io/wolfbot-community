---
title: "WolfBot Marketplace & Copy Trading — Evaluate Before You Follow"
description: "Explore the WolfBot Community Marketplace and Copy Trading interfaces, with a practical framework for evaluating strategies, providers and risk before activation."
tested_version: "0.1.0-beta.20"
last_updated: "2026-11-15"
platforms: ["windows", "linux"]
category: "automation"
difficulty: "intermediate"
estimated_time: "8 minutes"
previous_guide: "/docs/mcp-ai-agents"
next_guide: "/docs/risk-controls"
related_guides: ["/docs/simulation", "/docs/reading-first-month-results", "/docs/why-bots-fail-risk-management", "/docs/pre-launch-checklist-before-going-live"]
keywords: ["WolfBot marketplace", "copy trading risk", "trading strategy marketplace", "self hosted copy trading", "evaluate trading strategy"]
sitemap_priority: 0.8
---

# Discover Strategies Without Outsourcing Judgment

Marketplace and Copy Trading shorten discovery, but they do not remove model risk. A strategy card, ranking or provider history is an invitation to investigate, not evidence that future returns will match the past.

![WolfBot Community Marketplace](/images/product/0.1.0-beta.20/en/17-marketplace.webp "Marketplace provides a structured place to discover available trading automation.")

## Evaluate the strategy, not the headline

Before using a marketplace strategy, inspect its market, timeframe, holding period, turnover, drawdown, sample size, cost assumptions and supported account mode. Ask whether results came from backtest, Demo, Live or a mixture. Prefer strategies with a clear hypothesis and bounded failure behavior.

## Copying also copies hidden exposure

Copy Trading can reproduce actions while your account has different balance, leverage, liquidity, fees and symbol availability. Position sizing must be normalized to your risk budget; blindly copying quantity is unsafe.

![WolfBot Community Copy Trading screen](/images/product/0.1.0-beta.20/en/18-copy-trading.webp "Copy Trading is a controlled workflow that still requires account-level risk limits.")

Check for correlated providers and duplicated positions. Following three traders who all hold the same directional exposure is one concentrated bet, not diversification.

## Controlled adoption path

1. Read the strategy and provider scope.
2. Compare reported periods and costs.
3. Run it in Simulation or Demo.
4. Set account and portfolio limits.
5. Observe fills and drift from the source.
6. Promote only with capped exposure and a stop condition.

WolfBot's value is that discovered automation still passes through your self-hosted account and risk controls. Ownership of the decision remains with you.

Next, configure [Risk Controls](/docs/risk-controls) and use the [pre-launch checklist](/docs/pre-launch-checklist-before-going-live).
