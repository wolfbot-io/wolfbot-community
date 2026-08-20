---
title: "External Signals — Send Market Signals Into WolfBot Community from Any Source"
description: "Wire external trading signals — TradingView alerts, custom webhooks, signal services — into your self-hosted WolfBot Community bot through one signed, risk-gated pipeline."
tested_version: "0.1.0-p12-ghcr-rc20"
last_updated: "2026-08-16"
platforms: ["windows", "linux"]
category: "automation"
difficulty: "intermediate"
estimated_time: "10 minutes"
next_guide: "/docs/tradingview"
related_guides: ["/docs/tradingview", "/docs/automated-trading-workflow", "/docs/simulation", "/docs/risk-controls"]
keywords: [
  "external trading signals",
  "webhook trading bot",
  "custom signals into trading bot",
  "signal service wolfbot",
  "signed webhook automation",
  "external signals self hosted"
]
sitemap_priority: 0.75
---

# External Signals

**Tested with WolfBot Community v0.1.0-p12-ghcr-rc20** · Last updated: 2026-08-16

## Who this guide is for

- **If you already get signals from somewhere else** — a TradingView alert, a paid signal service, or your own script — and want them to enter positions on your own bot instead of executing manually.
- **If you're technically inclined** — you'll see the one pipeline every external signal goes through (verify → parse → normalize → risk → execute), so you can plug in your own source without inventing a new path.

## What "external signal" means here

An external signal is any buy/sell instruction that comes from **outside** WolfBot Community and needs to become a trade. Examples:

- TradingView alert webhooks (see the dedicated [TradingView guide](/docs/tradingview)).
- A custom webhook your own script or service fires.
- A signal service you trust enough to point at your risk layer.

All of these share a single, signed entry point instead of each being a bespoke integration.

## The one pipeline every external signal uses

No matter the source, every incoming signal travels the same path:

```text
HTTP POST (signed)
   → signature verify (HMAC with your webhook secret)
   → parse signal (symbol, direction, from/to)
   → normalize symbol to your target broker
   → attach identity (source, strategy, tier)
   → queue entry through the shared risk/execution layer
```

Because every source funnels through the same pipeline, you get the same guarantees regardless of where the signal came from:

- **Authenticated** — only requests signed with your secret can execute.
- **Risk-gated** — entries still pass the same risk controls as manual or strategy orders.
- **Symbol-normalized** — the MT5/USD name in your signal is mapped to the right pair on your target exchange.

## Tiers keep signals appropriate to their source

External signals use the same three-tier payload model, so a light signal and a full order request are both supported:

- `signal_only` — direction/symbol; WolfBot handles sizing and protection.
- `signal_and_risk` — adds notional and take-profit fields.
- `full_entry_request` — complete, including target account.

Start a new external source at `signal_only` and only move up once you've seen a clean cycle in Simulation.

## Test every new source on Simulation first

For any external source:

1. Point it at a **Simulation** strategy with its own webhook URL + secret.
2. Fire a test signal and confirm it lands, authenticated, on the intended symbol.
3. Check the risk-gated entry behaves how you expect.
4. Only then switch a copy to Live.

## Security notes

- Every external source gets **its own webhook secret** — treat each like an API key. Keep them out of public charts/repos.
- Keep the webhook route behind your own host; the signature is what authenticates, not secrecy of the URL itself.
- A signal service you point at your bot should be one you trust — the pipeline authenticates the request but cannot judge whether the signal idea is sound.

## Where to go next

- [TradingView alerts →](/docs/tradingview) — the most common external source, step by step
- [Automated Trading Workflow →](/docs/automated-trading-workflow)
- [Simulation first →](/docs/simulation)

## Next step

> **[TradingView alerts →](/docs/tradingview)**
