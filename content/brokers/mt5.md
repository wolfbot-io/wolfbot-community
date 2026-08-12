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
keywords: ["mt5 automation", "mt5 trading bot", "self hosted mt5 bot", "metatrader 5 automation", "gold trading automation"]
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
4. Place a small test order on your Demo account first
5. Switch to your Live MT5 account and place a minimum-size order
6. Verify the order appears in MT5
7. Cancel the test order

---

## MT5-Specific Notes

### Supported Instruments

WolfBot's MT5 bridge is symbol-agnostic — it trades whatever instruments your broker's MT5 terminal lists, not a fixed WolfBot whitelist. MT5 brokers typically cover nearly every asset class:

- **Forex** — EUR/USD, GBP/USD, USD/JPY, and 50+ more pairs
- **Metals** — XAU/USD (Gold), XAG/USD (Silver), often Platinum and Palladium too
- **Energies** — WTI/Brent Crude Oil, Natural Gas (broker-dependent)
- **Indices** — US30, NAS100, S&P 500, DAX, and more
- **Stocks/CFDs** — individual company shares, often thousands of symbols (broker-dependent)
- **Agricultural commodities** — Wheat, Corn, Coffee, Sugar and others (broker-dependent)
- **Crypto CFDs** — where offered by your broker

> Exact instrument availability depends on your MT5 broker, not on WolfBot — check **Market Watch** in your MT5 terminal for the full symbol list your account can trade.

### Not Supported (Yet)
- Linux native (Windows only currently)
- Multiple MT5 instances simultaneously
- Some exotic broker-specific symbols

### Requirements
- MT5 must be running while trading
- Automated Trading (Algo Trading) must be enabled in MT5
- Your PC must stay on (or use a Windows VPS)

---

## MT5 for Gold Trading

Gold (XAU/USD) is one of the most popular MT5 instruments for automation:

1. Connect your MT5 broker with XAU/USD
2. In WolfBot: Smart Terminal → XAU/USD
3. Configure risk (gold is volatile — start with small sizes)
4. Test on a Demo account before going live

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
