---
title: "Connect Binance to WolfBot Community — Step-by-Step"
description: "Connect Binance to WolfBot Community — create trade-only API keys and start automated trading on Spot and Futures."
tested_version: "0.1.0-p12-ghcr-rc8"
last_updated: "2026-08-11"
platforms: ["windows", "linux"]
brokers: ["binance"]
category: "broker-setup"
difficulty: "beginner"
estimated_time: "10 minutes"
next_guide: "/docs/risk-controls"
previous_guide: "/brokers/api-key-guide"
related_guides: ["/docs/simulation", "/docs/risk-controls", "/brokers/api-key-guide"]
keywords: ["binance trading bot", "binance api bot", "connect binance to wolfbot", "binance unified trading", "binance self hosted bot"]
sitemap_priority: 0.85
---

# Connect Binance to WolfBot Community

**Tested with WolfBot Community v0.1.0-p12-ghcr-rc8** · Last updated: 2026-08-11

**Binance support status:** Stable · Demo ✅ · Live ✅ · Terminal ✅ · Strategy ✅

## Who this guide is for

Anyone who wants to connect a Binance account to WolfBot Community for trading across markets.

## What you need

- A Binance account ([sign up](https://www.binance.com/register?ref=WOLFBOT))
- WolfBot Community installed and running
- 5 minutes

---

## Step 1: Create a Binance API Key

### For Spot Trading

1. Log in to [binance.com](https://www.binance.com/register?ref=WOLFBOT)
2. Go to **Profile → API Management**
3. Click **Create API**
4. Choose **System-generated** key type
5. Label it "WolfBot Community"
6. Complete security verification
7. **Critical — Edit restrictions:**
   - Enable Spot & Margin Trading: ✅ ON
   - Enable Withdrawals: ❌ OFF
   - Enable Universal Transfer: ❌ OFF
8. (Recommended) Restrict to trusted IPs
9. Click **Save**

> ⚠️ Never enable Withdrawals. WolfBot only needs trading permission.

---

## Step 2: Add Binance Account in WolfBot

1. Open WolfBot Community → **Exchange Accounts → Add Account**
2. Select **Binance** → choose **Spot** or **Futures**
3. Enter your API Key and Secret Key
4. Click **Test Connection**

---

## Step 3: Test

1. Go to **Smart Terminal** → select BTC/USDT
2. Start with a **Demo** account first
3. Then switch to a **Live** account and place a small limit order
4. Verify on Binance that the order appears → Cancel it

Your Binance account appears in Exchange Accounts with Live/Demo environment and permission state:

![WolfBot Exchange Accounts showing a connected exchange account with environment and permissions](/screenshots/wolfbot-accounts.webp)

---

## Binance-Specific Notes

- **Rate Limits:** WolfBot automatically respects Binance API rate limits (1200 weight/min)
- **IP Restriction:** Strongly recommended for production keys
- **Order Types:** Market, Limit, Stop-Limit, OCO fully supported

---

## Common Issues

| Issue | Solution |
|---|---|
| "API key invalid" | Regenerate key on Binance |
| "IP not whitelisted" | Add your IP or disable restriction |
| "Insufficient permissions" | Enable Spot Trading on Binance |
| "Connection timeout" | Check firewall/network |

---

## Next step

> **[Configure Risk Controls →](/docs/risk-controls)**
