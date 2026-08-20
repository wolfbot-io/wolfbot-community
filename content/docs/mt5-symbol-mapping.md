---
title: "MT5 Symbol Mapping — How WolfBot Community Routes Symbols Between MT5 and Crypto Exchanges"
description: "MT5 uses USD-quoted symbols (like BTCUSD or XAUUSD) while crypto exchanges use USDT pairs (BTCUSDT). Here's exactly how WolfBot Community maps them so one signal works across MT5, Binance, Bybit and BingX without manual resymboling."
tested_version: "0.1.0-p12-ghcr-rc20"
last_updated: "2026-08-16"
platforms: ["linux", "windows"]
category: "broker-setup"
difficulty: "intermediate"
estimated_time: "8 minutes"
next_guide: "/docs/mt5-troubleshooting"
related_guides: ["/brokers/mt5", "/docs/mt5-without-windows-vps", "/docs/smart-terminal", "/docs/risk-controls"]
keywords: [
  "mt5 symbol mapping",
  "mt5 to crypto symbol",
  "xauusd to paxgusdt",
  "btcusd vs btcusdt",
  "metatrader 5 futures crypto",
  "wolfbot symbol mapping",
  "cross market trading symbols"
]
sitemap_priority: 0.75
---

# MT5 Symbol Mapping

**Tested with WolfBot Community v0.1.0-p12-ghcr-rc20** · Last updated: 2026-08-16

## Who this guide is for

- **If you trade the same market on both crypto.com and MT5** — for example you run a gold or BTC strategy and want it in one dashboard — this explains why the symbol names look different and how WolfBot Community reconciles them for you.
- **If you're technically inclined** — you'll see the actual mapping table that runs inside WolfBot, so you know exactly what a symbol resolves to before you open a position.

## Why MT5 and crypto exchanges name symbols differently

Every venue quotes prices in its own format:

- **MT5 (Forex, Gold, Indices, Stocks/CFDs)** quotes in **USD-ish** form: `BTCUSD`, `XAUUSD`, `XAGUSD`, `ETHUSD`.
- **Crypto spot/futures exchanges** like Binance, Bybit or BingX quote in **USDT** pairs: `BTCUSDT`, `XAUUSDT`, `ETHUSDT`.
- Gold is particularly different: there is no "XAU/USDT" pair on most crypto exchanges — WolfBot maps gold to the `PAXG` token (`PAXGUSDT`), a tokenised gold ETF.

If you connected your MT5 broker and a crypto exchange without any reconciliation, the same strategy would look at two differently-named symbols and treat them as two separate markets. WolfBot Community collapses that so ONE portfolio view can show both.

## How WolfBot Community maps symbols

WolfBot Community keeps a single source-of-truth symbol map. When a signal or a strategy references a symbol, it is translated to the target venue's native name before an order is built. The general rules are:

- `BTCUSD` → `BTCUSDT`, `ETHUSD` → `ETHUSDT`, etc. — the crypto USD-quoted MT5 symbols map to the matching `USDT` pair.
- `XAUUSD` / `GOLD` → `PAXGUSDT` — gold maps to the tokenised-gold pair on Binance.
- `XAGUSD` / `SILVER` → `XAGUSDT` — silver has a native USDT pair.
- Silver also maps to BingX's TradFi silver perpetual with its internal swap id.
- A symbol with **no** mapping is passed through unchanged, so a custom instrument is never accidentally rewritten.

This table lives in code as the exchange symbol mapping (`map_symbol(source, target_exchange)`); it returns the target venue's usable name, or the original symbol untouched if no entry exists.

## What this means for your setup

- **You write a strategy once.** A gold signal on MT5 and a gold position on crypto both appear under one instrument in WolfBot's unified risk and portfolio view.
- **No manual resymboling.** You don't edit every bot when you add a second venue.
- **Deterministic.** The map is fixed in the platform, so the same signal always resolves to the same target symbol — no surprises between a Demo test and a Live run.

## A practical example

Take a silver strategy. On your MT5 broker the symbol shows as `XAGUSD`; on Binance it is `XAGUSDT`. When WolfBot routes that strategy, it resolves the source symbol to the correct per-venue name so the order goes to the right pair on each exchange, and your portfolio view is still one "Silver" instrument rather than two disconnected markets.

## Where to go next

- [Test it safely first →](/docs/simulation) — map and verify symbols on a Demo account before going Live
- [Common MT5 problems →](/docs/mt5-troubleshooting)
- [Connect MT5 →](/brokers/mt5)

## Next step

> **[MT5 troubleshooting →](/docs/mt5-troubleshooting)**
