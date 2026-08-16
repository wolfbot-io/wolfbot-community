---
title: "TradingView to Self-Hosted Trading Bot — Connect TradingView Alerts to WolfBot Community"
description: "Send a TradingView alert webhook straight to your self-hosted WolfBot Community bot. How the webhook URL, HMAC signature and tiered alert templates work, and how to test safely on Simulation first."
tested_version: "0.1.0-p12-ghcr-rc8"
last_updated: "2026-08-16"
platforms: ["windows", "linux"]
category: "automation"
difficulty: "intermediate"
estimated_time: "12 minutes"
next_guide: "/docs/automated-trading-workflow"
related_guides: ["/docs/automated-trading-workflow", "/docs/simulation", "/docs/risk-controls", "/docs/mt5-symbol-mapping"]
keywords: [
  "tradingview to trading bot",
  "tradingview webhook bot",
  "tradingview to self hosted bot",
  "tradingview alerts automation",
  "connect tradingview to wolfbot",
  "tradingview webhook self hosted"
]
sitemap_priority: 0.8
---

# TradingView to Self-Hosted Trading Bot

**Tested with WolfBot Community v0.1.0-p12-ghcr-rc8** · Last updated: 2026-08-16

## Who this guide is for

- **If you already write TradingView alerts and want them to act on your own bot, not a paper notebook** — this gives you the one URL and one alert template to wire together, and a safe way to test before it touches real money.
- **If you're technically inclined** — you'll see exactly how the webhook is authenticated (HMAC), how the alert payload is structured, and how symbols are normalized to your broker before any order exists.

## How TradingView connects to WolfBot Community

TradingView alerts can fire an **HTTP webhook**. WolfBot Community exposes a webhook endpoint for that alert, verifies it really came from you, and turns it into a strategy signal that goes through the same risk and execution pipeline as every other entry.

The flow:

```text
TradingView alert
   → HTTP POST to your webhook URL
   → WolfBot verifies the HMAC signature
   → parses the alert (symbol, direction, from/to)
   → normalizes the symbol to your target broker
   → queues an entry through the shared risk/execution layer
```

## 1. Get your webhook URL and secret

Every TradingView source gets a dedicated endpoint. The path shape is:

```text
/api/v1/strategy-webhooks/{source_id}
```

You URL-encode this against your own WolfBot Community host (the same host you else log into), and pair it with a per-source webhook secret. That secret is what WolfBot uses to verify each request is genuinely yours.

## 2. Use an alert template (three tiers)

WolfBot ships alert templates in three tiers, so you call only with what each situation needs:

- **`signal_only`** — direction and symbol only; no risk or account details. WolfBot decides sizing and protection.
- **`signal_and_risk`** — adds risk fields such as requested notional and take-profit, but no account selection.
- **`full_entry_request`** — the complete payload including the target `account_id`, when you want one alert to drive a specific account.

Each tier carries its identity fields — `tenant_id`, `source_id`, strategy instance/version, and a `definition_hash` — so the signal is always attributed to the exact strategy you meant to trigger.

## 3. The HMAC signature

To stop anyone else from firing your bot, the webhook is signed. The HTTP request you send from TradingView includes a signature computed over the body with your webhook secret (the ready-made curl example ships this HMAC recipe already correct). WolfBot recomputes it server-side and only accepts a request whose signature matches. A mismatched signature is simply rejected — nothing is executed.

## 4. Symbols are normalized for you

The `symbol` in your alert may be the MT5/USD form (`XAGUSD`) while your order target is Binance (`XAGUSDT`). WolfBot runs the alert symbol through the same broker-aware symbol mapper used everywhere else, so the alert lands on the correct pair. If there's no mapping, the symbol is passed through unchanged rather than silently rewritten. See the [symbol mapping guide](/docs/mt5-symbol-mapping) for the full table.

## 5. Test on Simulation before anything real

Before pointing the alert at a Live strategy:

1. Create a strategy on a **Simulation** account and give it the webhook URL + a test alert.
2. Fire a test alert from TradingView (or use the curl example) and watch the signal land in WolfBot.
3. Confirm the symbol resolved to the pair you expected and the tier fields look right.
4. Only then flip the strategy to Live.

## Security notes

- Keep your webhook secret private — it is the only thing that lets a request be trusted. Treat it like an API key.
- Run your Community instance on your own host/port, don't expose the webhook route to the open internet without the signature verified.
- Start with `signal_only`, add risk/take-profit fields only once you've seen a full cycle work in Simulation.

## Where to go next

- [Automated Trading Workflow →](/docs/automated-trading-workflow) — the broader loop your alert plugs into
- [Simulation first →](/docs/simulation)
- [Risk Controls →](/docs/risk-controls)

## Next step

> **[Automated Trading Workflow →](/docs/automated-trading-workflow)**
