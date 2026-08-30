---
title: "TradingView Webhook to WolfBot Community - Step-by-Step Setup"
description: "Connect TradingView alerts to WolfBot Community with the real TradingView webhook URL, JSON payloads for buy, sell, close_long and close_short, Simulation testing, HTTPS setup and troubleshooting."
tested_version: "0.1.0-beta.4"
last_updated: "2026-08-23"
platforms: ["windows", "linux"]
category: "automation"
difficulty: "intermediate"
estimated_time: "25 minutes"
next_guide: "/docs/automated-trading-workflow"
related_guides: ["/docs/external-signals", "/docs/automated-trading-workflow", "/docs/simulation", "/docs/risk-controls", "/docs/mt5-symbol-mapping"]
keywords: [
  "tradingview webhook trading bot",
  "tradingview to self hosted trading bot",
  "tradingview webhook crypto bot",
  "tradingview webhook mt5",
  "connect tradingview to wolfbot",
  "wolfbot community tradingview",
  "tradingview alert json"
]
sitemap_priority: 0.9
---

# TradingView Webhook to WolfBot Community

**Tested with WolfBot Community v0.1.0-beta.4** · Last updated: 2026-08-23

This guide shows the exact setup for sending a TradingView alert into WolfBot Community. Follow it in order: create a WolfBot TradingView source, expose a secure HTTPS endpoint, paste the webhook URL and JSON message into TradingView, then test on Simulation before using a live account.

TradingView creates the signal. WolfBot receives it, validates the secret, resolves the pre-selected account, queues an internal command, and lets the normal WolfBot dispatcher and risk controls handle execution.

```text
TradingView alert
   -> HTTPS POST on port 443
   -> your public domain, Cloudflare Tunnel, reverse proxy or ngrok URL
   -> WolfBot /api/v1/tradingview-webhooks/{source_id}
   -> secret check, schema validation and per-source rate limit
   -> EntryCommand ledger
   -> WolfBot global dispatcher
   -> Simulation, crypto/futures account or MT5 account
```

Do not put exchange API keys, MT5 passwords, wallet secrets or broker credentials in a TradingView alert message.

## What you need before starting

| Requirement | Why it matters |
|---|---|
| WolfBot Community running locally, on a VPS, or on your own server | TradingView must reach your WolfBot webhook over HTTPS. |
| One Simulation account or a small test account in WolfBot | First tests should not touch a production-sized position. |
| A TradingView plan with webhook alerts enabled | TradingView only sends webhooks for plans that include the feature. |
| A public HTTPS URL on port 443 | TradingView webhook URLs should be reachable over standard HTTPS. |
| Your target symbol format | Example: `BTCUSDT` for crypto, `XAUUSD` or broker-specific suffixes for MT5. |

TradingView webhook delivery is time-sensitive. Your public endpoint should acknowledge quickly and let WolfBot queue the command internally. Do not teach TradingView to call an exchange directly.

## Step 1 - Create a TradingView source in WolfBot

1. Open WolfBot Community.
2. Go to **Integrations**.
3. Create a new source.
4. Set **Source type** to **TradingView simple**.
5. Give it a clear label, for example `BTC 15m TradingView test`.
6. Select the target account. Start with **Simulation** when possible.
7. Set the default TP and SL multipliers for entries from this source.
8. Save the source.
9. Copy the revealed **secret**. WolfBot shows it once when the source is created or rotated.
10. Copy the webhook URL shown by WolfBot.

The URL shape is:

```text
https://YOUR_PUBLIC_HOST/api/v1/tradingview-webhooks/SOURCE_ID
```

Replace `YOUR_PUBLIC_HOST` with your public WolfBot domain. Keep `SOURCE_ID` exactly as shown in WolfBot.

## Step 2 - Put WolfBot behind HTTPS

TradingView should call a public HTTPS endpoint. Use one of these patterns:

| Pattern | Good for | Notes |
|---|---|---|
| Cloudflare Tunnel | Home server, local workstation, VPS without opening inbound ports | Recommended for simple HTTPS exposure. |
| Reverse proxy on a VPS | Production VPS setup | Terminate TLS on Nginx/Caddy/Traefik and proxy only the WolfBot API route. |
| ngrok or similar tunnel | Short tests and demos | Good for validation, but rotate the WolfBot source secret after public demos. |

Recommended flow:

```text
TradingView
   -> https://community-api.yourdomain.com
   -> tunnel or reverse proxy
   -> WolfBot backend inside your machine or VPS
```

Avoid exposing internal development ports directly to the internet. Keep the public surface narrow, use HTTPS, and do not reuse the same secret across unrelated alert sources.

## Step 3 - Test the WolfBot webhook with curl

Before configuring TradingView, test from a terminal on any machine that can reach your public URL.

LONG test:

```bash
curl -sS -X POST "https://YOUR_PUBLIC_HOST/api/v1/tradingview-webhooks/SOURCE_ID" \
  -H "Content-Type: application/json" \
  -d '{
    "secret": "PASTE_THE_WOLFBOT_SECRET_HERE",
    "symbol": "BTCUSDT",
    "action": "buy",
    "notional_usd": 25,
    "signal_id": "curl-btc-long-001"
  }'
```

A healthy response looks like:

```json
{
  "status": "queued",
  "command_id": "tradingview-SOURCE_ID-curl-btc-long-001",
  "account": "your_account_alias"
}
```

If you send the same `signal_id` again, WolfBot may return:

```json
{
  "status": "duplicate",
  "command_id": "tradingview-SOURCE_ID-curl-btc-long-001"
}
```

That is expected. It protects against duplicate alert delivery.

## Step 4 - Create the TradingView alert

1. Open your chart in TradingView.
2. Add or select the indicator/strategy that will trigger the alert.
3. Click **Alert**.
4. Set the alert condition.
5. Enable **Webhook URL**.
6. Paste your WolfBot URL:

```text
https://YOUR_PUBLIC_HOST/api/v1/tradingview-webhooks/SOURCE_ID
```

7. Paste one JSON message from the examples below.
8. Save the alert.
9. Trigger a manual test alert if your TradingView plan/chart setup allows it.
10. Confirm WolfBot shows the command as queued or executed on the selected Simulation account.

## Step 5 - Use the correct JSON payload

WolfBot's TradingView simple route accepts this shape:

```json
{
  "secret": "your WolfBot source secret",
  "symbol": "BTCUSDT",
  "action": "buy",
  "notional_usd": 100,
  "signal_id": "optional unique id"
}
```

Fields:

| Field | Required | Example | Meaning |
|---|---:|---|---|
| `secret` | Yes | `wb_tv_...` | The secret revealed by WolfBot for this source. |
| `symbol` | Yes | `BTCUSDT`, `ETHUSDT`, `XAUUSD` | The symbol WolfBot should trade after broker-aware mapping. |
| `action` | Yes | `buy`, `sell`, `close_long`, `close_short` | `buy` opens long, `sell` opens short, close actions close an existing side. |
| `notional_usd` | No | `100` | Optional fixed notional sizing for entries. Omit to use the account/source defaults. |
| `signal_id` | No | `{{ticker}}-{{interval}}-{{time}}-long` | Optional de-dup key. Use TradingView placeholders when possible. |

Close actions ignore TP/SL multipliers and do not need `notional_usd`.

## LONG example

Use this when a TradingView condition should open or add a long position.

```json
{
  "secret": "PASTE_THE_WOLFBOT_SECRET_HERE",
  "symbol": "{{ticker}}",
  "action": "buy",
  "notional_usd": 100,
  "signal_id": "{{ticker}}-{{interval}}-{{time}}-long"
}
```

If `{{ticker}}` includes an exchange prefix such as `BINANCE:BTCUSDT`, use the exact symbol format your WolfBot account expects if your current mapper does not strip that prefix.

## SHORT example

Use this when a TradingView condition should open or add a short position.

```json
{
  "secret": "PASTE_THE_WOLFBOT_SECRET_HERE",
  "symbol": "BTCUSDT",
  "action": "sell",
  "notional_usd": 100,
  "signal_id": "btc-15m-short-{{time}}"
}
```

## CLOSE LONG example

Use this when TradingView should close an existing long position.

```json
{
  "secret": "PASTE_THE_WOLFBOT_SECRET_HERE",
  "symbol": "BTCUSDT",
  "action": "close_long",
  "signal_id": "btc-15m-close-long-{{time}}"
}
```

## CLOSE SHORT example

Use this when TradingView should close an existing short position.

```json
{
  "secret": "PASTE_THE_WOLFBOT_SECRET_HERE",
  "symbol": "BTCUSDT",
  "action": "close_short",
  "signal_id": "btc-15m-close-short-{{time}}"
}
```

## Symbol examples for crypto and MT5

| Market | TradingView chart may show | WolfBot payload to start with | Notes |
|---|---|---|---|
| Binance/Bybit futures BTC | `BINANCE:BTCUSDT`, `BTCUSDT.P` | `BTCUSDT` | Prefer the broker symbol your WolfBot account already uses. |
| ETH perpetual | `ETHUSDT.P` | `ETHUSDT` | Keep the payload consistent with your WolfBot account's symbol list. |
| Gold on MT5 | `OANDA:XAUUSD`, `XAUUSD` | `XAUUSD` | Some MT5 brokers use suffixes such as `XAUUSDm`; check the MT5 symbol mapping guide. |
| Silver on MT5 | `XAGUSD` | `XAGUSD` | Confirm lot size and symbol availability before live testing. |

If an alert queues but the trade does not appear, symbol mapping is one of the first things to check.

## Step 6 - Verify inside WolfBot

After each test alert:

1. Check the Integration source status and last received time.
2. Check the account selected on the source.
3. Check the command or activity log for `TRADINGVIEW`.
4. Confirm the symbol was normalized as expected.
5. Confirm the command is on Simulation while you are still testing.
6. Confirm the position size is what you intended before switching to Live.

For a close test, open a small Simulation position first, send `close_long` or `close_short`, then confirm the close appears as a TradingView close outcome.

## Step 7 - Move from Simulation to Live carefully

Do this only after several successful Simulation alerts:

1. Create a separate TradingView source for the live account.
2. Use a fresh source secret.
3. Start with small `notional_usd` or omit it to let WolfBot use conservative defaults.
4. Keep TP/SL multipliers explicit on the source.
5. Trigger one live alert manually or with a low-risk condition.
6. Confirm order, TP/SL and logs before letting the alert run unattended.

Rollback is simple: disable the TradingView alert, revoke or rotate the WolfBot source secret, or switch the source back to a Simulation account.

## Troubleshooting

| Symptom | Likely cause | What to check |
|---|---|---|
| TradingView says webhook failed | Public URL unreachable or not HTTPS | Open the URL host from another network, check tunnel/proxy logs, confirm port 443. |
| `404 SOURCE_NOT_FOUND` | Wrong `SOURCE_ID`, revoked source, or not a TradingView simple source | Copy the URL from WolfBot again. |
| `401 INVALID_SECRET` | Secret mismatch | Paste the current source secret exactly, or rotate the source and update the alert. |
| `409 ACCOUNT_TARGET_UNRESOLVED` | The source points to an account WolfBot cannot resolve | Re-select the account in Integrations and confirm the account exists in WolfBot. |
| `429 RATE_LIMITED` | Too many requests for one source | Check duplicate alerts, lower alert frequency, or split unrelated strategies into separate sources. |
| Response is `duplicate` | Same `signal_id` was already recorded | Include `{{time}}` or another unique TradingView placeholder in `signal_id`. |
| Alert queues but no trade appears | Dispatcher not running, account disabled, guard blocked, or symbol mismatch | Check WolfBot activity logs, risk controls, account status and symbol mapping. |
| Close alert queues but position stays open | Wrong side or no matching position | Use `close_long` for long positions and `close_short` for short positions. |

## Security checklist

- Use HTTPS only.
- Never place broker API keys, MT5 credentials or wallet secrets in TradingView.
- Use one WolfBot source per strategy/account workflow.
- Rotate the source secret if it was pasted into a public video, screenshot or chat.
- Start every new alert on Simulation.
- Keep position sizing conservative until the full alert -> queue -> execution -> close loop is verified.
- Disable or delete old TradingView alerts when rotating a source.

## Related guides

- [External Signals](/docs/external-signals)
- [Simulation](/docs/simulation)
- [Risk Controls](/docs/risk-controls)
- [MT5 Symbol Mapping](/docs/mt5-symbol-mapping)
- [Automated Trading Workflow](/docs/automated-trading-workflow)

## Next step

> **[Automated Trading Workflow ->](/docs/automated-trading-workflow)**
