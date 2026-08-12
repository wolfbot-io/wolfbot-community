---
title: "Connect MT5 to WolfBot Community — Step-by-Step"
description: "WolfBot Community includes MT5 — trade Forex, Gold, Indices and Stocks/CFDs on Windows or Linux, no separate Windows machine needed. Step-by-step connect guide."
tested_version: "0.1.0-p12-ghcr-rc8"
last_updated: "2026-08-12"
platforms: ["windows", "linux"]
brokers: ["mt5"]
category: "broker-setup"
difficulty: "beginner"
estimated_time: "15 minutes"
related_guides: ["/brokers/api-key-guide", "/docs/risk-controls", "/install/windows", "/install/linux"]
keywords: ["mt5 automation", "mt5 trading bot", "self hosted mt5 bot", "metatrader 5 automation", "gold trading automation", "mt5 on linux"]
sitemap_priority: 0.80
---

# Connect MT5 to WolfBot Community

**Tested with WolfBot Community v0.1.0-p12-ghcr-rc8** · Last updated: 2026-08-12

**MT5 support status:** Stable · Demo ✅ · Live ✅ · Terminal ✅ · Strategy ✅ · Windows ✅ · Linux ✅

## MT5 comes built in

Forex, Gold, Indices, Stocks/CFDs — MT5 markets are part of WolfBot Community out of the box, right next to your crypto accounts in the same dashboard. It works the same way on Windows and on Linux, and you never need a separate Windows machine to trade MT5.

- **On Windows**, WolfBot connects to the MetaTrader 5 app you already use.
- **On Linux**, WolfBot opens MT5 for you inside your own browser — nothing extra to install.

## Who this guide is for

MT5 traders who want to automate their trading with WolfBot Community — your unified platform for crypto and traditional markets, on the OS you already run.

## What you need

- WolfBot Community installed
- An MT5 broker account (Demo or Live)
- On Windows: [MetaTrader 5](https://www.metatrader5.com/en/download) installed
- 15 minutes

## Connect MT5

1. Open WolfBot Community
2. Go to **Exchange Accounts → Add Account → MT5**
3. Log into your broker account (Demo or Live)
   - **Windows:** this happens in your MetaTrader 5 app
   - **Linux:** this happens right inside the WolfBot browser window — first time only, there's one quick one-time setup step (see [For Technical Users](#for-technical-users) below)
4. WolfBot picks up your available symbols automatically
5. Start trading — Smart Terminal, Bots and Risk Controls all work exactly the same as with your crypto accounts

> ⚠️ MT5 needs to be logged in for WolfBot to trade through it.

## Test the Connection

1. In WolfBot: Smart Terminal → select MT5
2. Available symbols should appear from MT5
3. Place a small test order on your Demo account first
4. Switch to your Live MT5 account and place a minimum-size order
5. Verify the order appears in MT5
6. Cancel the test order

## What You Can Trade

MT5 covers almost every asset class — WolfBot trades whatever your broker's MT5 account offers, not a fixed list:

- **Forex** — EUR/USD, GBP/USD, USD/JPY, and 50+ more pairs
- **Metals** — Gold (XAU/USD), Silver (XAG/USD), often Platinum and Palladium too
- **Energies** — Crude Oil, Natural Gas (broker-dependent)
- **Indices** — US30, NAS100, S&P 500, DAX, and more
- **Stocks/CFDs** — individual company shares, often thousands of symbols (broker-dependent)
- **Agricultural commodities** — Wheat, Corn, Coffee, Sugar and others (broker-dependent)
- **Crypto CFDs** — where offered by your broker

> Exact instrument availability depends on your MT5 broker, not on WolfBot — check **Market Watch** in your MT5 terminal for the full symbol list your account can trade.

## MT5 for Gold Trading

Gold (XAU/USD) is one of the most popular MT5 instruments for automation:

1. Connect your MT5 broker with XAU/USD
2. In WolfBot: Smart Terminal → XAU/USD
3. Configure risk (gold is volatile — start with small sizes)
4. Test on a Demo account before going live

## Common Issues

| Issue | Solution |
|---|---|
| MT5 not connecting | Make sure you're logged into your broker account in MT5, then try again |
| "Symbol not available" | Check your broker's available instruments |
| "Automated trading disabled" | In MT5: Tools → Options → Expert Advisors → Allow Automated Trading |
| "Order rejected by broker" | Check minimum lot size and trading hours |

## Next step

> **[Configure Risk Controls →](/docs/risk-controls)** — especially important for volatile MT5 instruments

---

## For Technical Users

The details below are for anyone who wants to understand exactly how the MT5 bridge works, or prefers doing the Linux setup step from a terminal. None of this is required reading to use MT5 in WolfBot — see [Connect MT5](#connect-mt5) above for the normal flow.

### How the bridge works

**Windows** — MT5 runs as its own native app; WolfBot bridges to it directly:

```text
WolfBot Community → MT5 Bridge (local) → MetaTrader 5 Terminal (your install) → MT5 Broker Server
```

**Linux** — WolfBot runs the MT5 terminal itself inside a container, and gives you a browser window into it (VNC):

```text
WolfBot Community → MT5 Bridge Container (Terminal + VNC + RPyC) → Browser window → MT5 Broker Server
```

Either way, the bridge only ever talks to your broker *through* MT5 — WolfBot never connects to your broker directly.

### Linux: one-time terminal setup

WolfBot's MT5 container isn't started by the base install (not every Community user trades MT5), so the first time, start it with:

```bash
docker compose \
  -f /opt/wolfbot/compose/wolfbot-compose.json \
  -f /opt/wolfbot/compose/compose.mt5.yaml \
  up -d
```

Then open **`http://127.0.0.1:8090/mt5-vnc/`** in your browser (password `wolfbot`, or whatever you set via `MT5_VNC_PASSWORD`) and log into your broker there — this is the same browser window WolfBot's MT5 flow uses afterward. Access is always-on and unrestricted, since this is your own machine, not a shared Cloud instance.

### Windows: bridge configuration reference

| Setting | Value |
|---|---|
| MT5 Installation Path | Auto-detected (usually `C:\Program Files\MetaTrader 5`) |
| Account Type | Demo or Live |
| Symbol Mapping | Auto-configured |

### Requirements

- MT5 must be running while trading (native on Windows, or the bridge container on Linux)
- Automated Trading (Algo Trading) must be enabled in MT5
- Your machine must stay on (or use a VPS — Windows or Linux both work)
- Not yet supported: multiple MT5 instances at once, some exotic broker-specific symbols

### Technical troubleshooting

| Issue | Solution |
|---|---|
| "MT5 not detected" (Windows) | Check the installation path; restart MT5 |
| VNC page won't load (Linux) | Confirm the MT5 container is running: `docker compose ... ps` — it can take a minute on first launch |
| "Bridge connection failed" | Ensure MT5 is running and logged in — native on Windows, or the browser session on Linux |

### Running MT5 24/7

- **Windows:** use a Windows VPS, install MT5 + WolfBot Community, enable auto-login in MT5, configure Windows to auto-start WolfBot
- **Linux:** use a Linux VPS running WolfBot Community with the MT5 container enabled — it stays logged in and keeps running the same way any other WolfBot service does, no auto-login scripting needed
