---
title: "External Signals - Send Market Signals Into WolfBot Community from Any Source"
description: "Wire external trading signals, TradingView alerts, custom webhooks and signal services into your self-hosted WolfBot Community bot through validated, risk-gated intake paths."
tested_version: "0.1.0-beta.9"
last_updated: "2026-08-23"
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

**Tested with WolfBot Community v0.1.0-beta.9** · Last updated: 2026-08-23

## Who this guide is for

- **If you already get signals from somewhere else** — a TradingView alert, a paid signal service, or your own script — and want them to enter positions on your own bot instead of executing manually.
- **If you're technically inclined** — you'll see the one pipeline every external signal goes through (verify → parse → normalize → risk → execute), so you can plug in your own source without inventing a new path.

## What "external signal" means here

An external signal is any buy/sell/close instruction that comes from **outside** WolfBot Community and needs to become a queued WolfBot command. Examples:

- TradingView alert webhooks (see the dedicated [TradingView guide](/docs/tradingview)).
- A custom webhook your own script or service fires.
- A signal service you trust enough to point at your risk layer.

TradingView simple alerts use the dedicated TradingView route documented in the [TradingView guide](/docs/tradingview). Rich Strategy OS webhooks use the signed strategy webhook route.

## The one pipeline every external signal uses

No matter the source, every incoming signal travels the same path:

```text
HTTP POST
   → source lookup and authentication
   → parse signal (symbol, action, optional sizing)
   → normalize symbol to your target broker
   → attach identity (source, strategy or integration id)
   → queue command through the shared risk/execution layer
```

Because every source funnels through the same pipeline, you get the same guarantees regardless of where the signal came from:

- **Authenticated** — TradingView simple requests must include the source secret; rich Strategy OS requests use HMAC signing.
- **Risk-gated** — entries still pass the same risk controls as manual or strategy orders.
- **Symbol-normalized** — the MT5/USD name in your signal is mapped to the right pair on your target exchange.

## Choose the right intake path

WolfBot supports two external-signal patterns:

| Path | Best for | Authentication | Payload style |
|---|---|---|---|
| TradingView simple | Human-managed TradingView alerts | Static source secret in the JSON body | `secret`, `symbol`, `action`, optional `notional_usd`, optional `signal_id` |
| Strategy OS signed webhook | Custom services that can compute signatures | HMAC-signed request headers | Versioned rich schema with strategy identity and risk fields |

Start with TradingView simple if you are pasting JSON into TradingView. Use the signed Strategy OS route only when your sender can compute per-request signatures.

## Test every new source on Simulation first

For any external source:

1. Point it at a **Simulation** strategy with its own webhook URL + secret.
2. Fire a test signal and confirm it lands, authenticated, on the intended symbol.
3. Check the risk-gated entry behaves how you expect.
4. Only then switch a copy to Live.

## Security notes

- Every external source gets **its own secret or signing key** — treat it like an API key. Keep it out of public charts/repos.
- Keep the webhook route behind your own HTTPS host; authentication is the secret/signature, not secrecy of the URL itself.
- A signal service you point at your bot should be one you trust — the pipeline authenticates the request but cannot judge whether the signal idea is sound.

## Where to go next

- [TradingView alerts →](/docs/tradingview) — the most common external source, step by step
- [Automated Trading Workflow →](/docs/automated-trading-workflow)
- [Simulation first →](/docs/simulation)

## Next step

> **[TradingView alerts →](/docs/tradingview)**
