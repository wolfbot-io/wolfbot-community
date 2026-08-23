---
title: "Automate Forex & Gold with MT5 — Run Gold, FX and Commodity Strategies Self-Hosted"
description: "Automate Forex, Gold and commodity CFD strategies with MT5 on your own machine or VPS, side by side with crypto — the same WolfBot interface, unified risk and one portfolio."
tested_version: "0.1.0-beta.2"
last_updated: "2026-08-16"
platforms: ["linux", "windows"]
category: "broker-setup"
difficulty: "beginner"
estimated_time: "10 minutes"
next_guide: "/docs/mt5-symbol-mapping"
related_guides: ["/docs/mt5-without-windows-vps", "/docs/mt5-troubleshooting", "/brokers/mt5", "/docs/risk-controls"]
keywords: [
  "automate forex bot",
  "gold trading bot mt5",
  "mt5 automation forex gold",
  "commodities trading bot",
  "metatrader 5 self hosted",
  "forex gold mt5 wolfbot"
]
sitemap_priority: 0.8
---

# Automate Forex & Gold with MT5

**Tested with WolfBot Community v0.1.0-beta.2** · Last updated: 2026-08-16

## Who this guide is for

- **If you trade Forex, Gold, Indices or commodity CFDs and want them automated on your own machine** — this explains how to run MT5 strategies in WolfBot Community without renting a second Windows server.
- **If you're technically inclined** — you'll see how MT5 terminal, symbol mapping and WolfBot's unified risk fit together, so you know exactly what runs where.

## Forex, gold and MT5 — the classic automation problem

MetaTrader 5 is the tool most FX, Gold and CFD traders already use. The traditional way to automate it means keeping a **Windows machine running 24/7** — usually a rented VPS — just to hold one MT5 terminal alive, on top of whatever else you run.

WolfBot Community removes that second machine. MT5 runs inside a container on the same Linux box (or Windows) as the rest of WolfBot, so your gold/FX strategies AND your crypto strategies live in one platform.

## How automated gold and FX trading fits together

```text
Your machine (or VPS), 24/7
    │
    ├── WolfBot Community — strategies + unified risk + portfolio
    │
    └── MT5 bridge container
            ├── real MT5 terminal (headless, your broker account)
            └── browser window into it (no remote desktop)
```

Your MT5 gold/FX strategy, your crypto futures strategy and your manual positions all appear in **one dashboard, one risk engine, one portfolio view** — not scattered across separate apps.

## Symbols just work across markets

A gold strategy on MT5 quotes the metal as `XAUUSD`; on a crypto exchange you might hold it as the tokenised-gold pair `PAXGUSDT`. WolfBot's symbol mapping reconciles these automatically (see the [symbol mapping guide](/docs/mt5-symbol-mapping)), so your portfolio shows one "Gold" instrument instead of two disconnected markets.

## Start with Simulation

First connect an MT5 **Demo** account (the connect guide walks you through it), verify symbols resolve the way you expect, and run your strategy in Simulation until you trust it. Only then connect a Live account and move carefully.

## Get started

- [Connect MT5 →](/brokers/mt5) — step-by-step for Windows and Linux
- [MT5 symbol mapping →](/docs/mt5-symbol-mapping)
- [Run MT5 without a Windows VPS →](/docs/mt5-without-windows-vps)

## Next step

> **[MT5 symbol mapping →](/docs/mt5-symbol-mapping)**
