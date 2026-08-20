---
title: "Connect BingX to WolfBot Community — Step-by-Step"
description: "Connect BingX to WolfBot Community — create trade-only API keys and start automated trading on Standard and Perpetual Futures."
tested_version: "0.1.0-p12-ghcr-rc20"
last_updated: "2026-08-11"
platforms: ["windows", "linux"]
brokers: ["bingx"]
category: "broker-setup"
difficulty: "beginner"
estimated_time: "8 minutes"
related_guides: ["/brokers/api-key-guide", "/docs/risk-controls", "/brokers/bybit"]
keywords: ["bingx trading bot", "bingx api bot", "connect bingx to wolfbot"]
sitemap_priority: 0.80
---

# Connect BingX to WolfBot Community

**Tested with WolfBot Community v0.1.0-p12-ghcr-rc20** · Last updated: 2026-08-11

**BingX support status:** Stable · Demo ✅ · Live ✅ · Terminal ✅ · Strategy ✅

## Who this guide is for

Anyone who wants to connect a BingX account to WolfBot Community for automated trading on Standard or Perpetual Futures.

## What you need

- A BingX account ([sign up](https://bingxdao.com/partner/Wolfbot/))
- WolfBot Community installed
- 5 minutes

---

## Step 1: Create BingX API Key

1. Log in to [bingx.com](https://bingxdao.com/partner/Wolfbot/)
2. Go to **API Management** (under profile/settings)
3. Click **Create API Key**
4. Label it "WolfBot Community"
5. Set permissions:
   - Standard/Contract Trading: ✅ ON
   - Withdrawal: ❌ OFF
6. (Recommended) Bind IP address
7. Complete verification → save Key + Secret

> ⚠️ Never enable Withdrawal — WolfBot only needs trading.

---

## Step 2: Add in WolfBot

1. WolfBot → **Exchange Accounts → Add Account**
2. Select **BingX**
3. Choose **Standard** or **Perpetual Futures**
4. Enter API Key + Secret → **Test Connection**

---

## Step 3: Test

1. Smart Terminal → select trading pair (e.g., BTC/USDT)
2. Start with your Demo API key → then a small live limit order
3. Verify on BingX → cancel test order

---

## BingX-Specific Notes

- **Demo trading:** Available in-app under Derivatives → Perpetual Futures → Demo Trading (uses virtual funds) — [how it works](https://bingx.com/en/wiki/detail/demo-trading) — separate API keys
- **Futures:** Use Perpetual Futures account type in WolfBot
- **Copy trading:** WolfBot does not interact with BingX copy trading

---

## Common Issues

| Issue | Solution |
|---|---|
| API key invalid | Regenerate on BingX |
| Permission error | Enable Standard/Contract Trading |
| Connection timeout | Check firewall; BingX may be region-restricted |

---

## Next step

> **[Configure Risk Controls →](/docs/risk-controls)**
