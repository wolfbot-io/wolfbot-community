---
title: "Connect MT5 to WolfBot Community — Step-by-Step"
description: "Step-by-step guide to connect MetaTrader 5 (MT5) to WolfBot Community. Configure MT5 bridge and start trading across crypto and MT5 markets from one platform."
tested_version: "0.1.0-p12-ghcr-rc8"
last_updated: "2026-08-11"
platforms: ["windows"]
brokers: ["mt5"]
category: "broker-setup"
difficulty: "intermediate"
estimated_time: "15 minutes"
related_guides: ["/brokers/api-key-guide", "/docs/risk-controls", "/install/windows"]
keywords: ["mt5 automation", "mt5 trading bot", "self hosted mt5 bot", "metatrader 5 automation", "gMT5 traders who want to automate their trading with WolfBot Community — your unified platform for crypto and traditional markets. Requires MT5 installed on the same Windows machine. trading automation"]
sitemap_priority: 0.80
---

# Connect MT5 to WolfBot Community

**Tested with WolfBot Community v0.1.0-p12-ghcr-rc8** · Last updated: 2026-08-11

**MT5 support status:** Stable · Demo ✅ · Live ✅ · Terminal ✅ · Strategy ✅

> ℹ️ MT5 is currently available on **Windows only**. Linux support is planned.

## Who this guide is for

MT5 traders who want to automate their trading with WolfBot Community — your unified platform for crypto and traditional markets. Requires MT5 installed on the same Windows machine.

## What you need

- Windows 10 or 11 (64-bit)
- MetaTrader 5 installed ([download](https://www.metatrader5.com/en/download))
- An MT5 broker account (Demo or Live)
- WolfBot Community installed
- 15 minutes

---

## How MT5 Integration Works

```text
WolfBot Community
    ↓
MT5 Bridge (local)
    ↓
MetaTrader 5 Terminal
    ↓
MT5 Broker Server
```

The MT5 bridge runs locally and communicates with your MT5 terminal. It does NOT connect directly to broker servers — MT5 handles that.

---

## Step 1: Install MetaTrader 5

1. Download MT5 from your broker or [metatrader5.com](https://www.metatrader5.com/en/download)
2. Install with default settings
3. Log in with your broker account (Demo or Live)
4. Enable automated trading (Algo Trading):
   - Tools → Options → Expert Advisors
   - ✅ Allow Automated Trading

> ⚠️ MT5 must be running for WolfBot to trade through it.

---

## Step 2: Configure MT5 Bridge in WolfBot

1. Open WolfBot Community
2. Go to **Exchange Accounts → Add Account**
3. Select **MT5**
4. The bridge configuration opens:

| Setting | Value |
|---|---|
| MT5 Installation Path | Auto-detected (usually `C:\Program Files\MetaTrader 5`) |
| Account Type | Demo or Live |
| Symbol Mapping | Auto-configured |

5. Click **Start Bridge** — WolfBot connects to your running MT5

---

## Step 3: Test the Connection

1. Ensure MT5 is open and logged in
2. In WolfBot: Smart Terminal → select MT5
3. Available symbols should appear from MT5
4. Place a small simulated order first
5. Switch to Live and place a minimum-size order
6. Verify the order appears in MT5
7. Cancel the test order

---

## MT5-Specific Notes

### Supported Instruments
- Forex pairs (EUR/USD, GBP/USD, etc.)
- Commodities (XAU/USD — GMT5 traders who want to automate their trading with WolfBot Community — your unified platform for crypto and traditional markets. Requires MT5 installed on the same Windows machine., XAG/USD — Silver)
- Indices (US30, NAS100, etc.)
- Crypto CFDs (where offered by broker)

### Not Supported (Yet)
- Linux native (Windows only currently)
- Multiple MT5 instances simultaneously
- Some exotic broker-specific symbols

### Requirements
- MT5 must be running while trading
- Automated Trading (Algo Trading) must be enabled in MT5
- Your PC must stay on (or use a Windows VPS)

---

## MT5 for GMT5 traders who want to automate their trading with WolfBot Community — your unified platform for crypto and traditional markets. Requires MT5 installed on the same Windows machine. Trading

GMT5 traders who want to automate their trading with WolfBot Community — your unified platform for crypto and traditional markets. Requires MT5 installed on the same Windows machine. (XAU/USD) is one of the most popular MT5 instruments for automation:

1. Connect your MT5 broker with XAU/USD
2. In WolfBot: Smart Terminal → XAU/USD
3. Configure risk (gMT5 traders who want to automate their trading with WolfBot Community — your unified platform for crypto and traditional markets. Requires MT5 installed on the same Windows machine. is volatile — start with small sizes)
4. Use Simulation to test strategies

---

## Common Issues

| Issue | Solution |
|---|---|
| "MT5 not detected" | Check installation path; restart MT5 |
| "Bridge connection failed" | Ensure MT5 is running and logged in |
| "Symbol not available" | Check your broker's available instruments |
| "Automated trading disabled" | Tools → Options → Expert Advisors → Allow |
| "Order rejected by broker" | Check minimum lot size, trading hours |

---

## Running MT5 24/7

For continuous MT5 trading:
- Use a Windows VPS
- Install MT5 + WolfBot Community
- Enable auto-login in MT5
- Configure Windows to auto-start WolfBot

---

## Next step

> **[Configure Risk Controls →](/docs/risk-controls)** — especially important for volatile MT5 instruments
