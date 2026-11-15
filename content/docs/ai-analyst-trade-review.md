---
title: "WolfBot AI Analyst — Private Trade Review with Verifiable Metrics"
description: "See how WolfBot Community AI Analyst reviews real trading history, surfaces strengths and risks, and keeps deterministic metrics separate from AI commentary."
tested_version: "0.1.0-beta.20"
last_updated: "2026-11-15"
platforms: ["windows", "linux"]
category: "automation"
difficulty: "intermediate"
estimated_time: "11 minutes"
previous_guide: "/docs/bot-control-and-live-monitoring"
next_guide: "/docs/mcp-ai-agents"
related_guides: ["/docs/how-to-read-trading-performance", "/docs/reading-first-month-results", "/academy/financial-ai-agents-auditable-decisions", "/security"]
keywords: ["WolfBot AI Analyst", "AI trade review", "private trading analysis", "self hosted trading AI", "AI trading performance report"]
sitemap_priority: 0.9
---

# AI Commentary Built on Deterministic Trading Metrics

WolfBot AI Analyst turns trading history into a structured review: final result, win rate, payoff, drawdown, direction mix, observed strengths and risks. The important boundary is architectural: code calculates and reconciles the numbers; the language model explains selected facts and proposes questions for further testing.

![WolfBot Community AI Analyst report history and review workspace](/images/product/0.1.0-beta.20/en/22-ai-analyst.webp "AI Analyst keeps generated reviews and their scope visible in one workspace.")

## What a report helps you inspect

A useful report should answer:

- Did the account make or lose money over the measured period?
- Is the result supported by many trades or a small sample?
- Are losses concentrated by symbol, direction or time?
- Does the strategy depend on unusually large positions?
- Do estimated trade records reconcile with real account equity?
- Which hypothesis should be tested in Demo next?

![Detailed WolfBot AI Analyst report with performance, strengths and risk findings](/images/product/0.1.0-beta.20/en/22b-ai-analyst-report.webp "The detailed report combines a deterministic verdict, performance visuals and bounded AI commentary.")

The screenshots contain real local account history with credentials and sensitive identifiers removed before capture. They demonstrate the interface, not guaranteed performance.

## Local model or your own provider

The settings screen supports a local model and configured external providers. A local model keeps report content on the machine and avoids per-report cloud transfer. An external provider may offer stronger language output, but the operator must understand its privacy, cost and retention terms.

![WolfBot AI Analyst settings for local and configured AI providers](/images/product/0.1.0-beta.20/en/23-ai-analyst-settings.webp "AI provider choice remains explicit; secrets are stored separately and are not displayed in reports.")

## What AI Analyst must not do

It should not place orders, alter risk settings, promise profit or recommend increasing leverage from a small sample. A report is evidence for review, not authority to trade. Metrics can still be limited by missing broker history, estimated sync-close prices or incomplete periods, so important conclusions should be checked against the broker.

## Recommended workflow

1. Select one account or a defined Demo/Live group.
2. Generate a report only after enough history exists.
3. Read the measured result before the AI summary.
4. Test suggestions in Demo as hypotheses.
5. Compare the next period rather than rewriting the past.

For the underlying evaluation discipline, read [How to Read Trading Performance](/docs/how-to-read-trading-performance) and [auditable financial AI agents](/academy/financial-ai-agents-auditable-decisions).
