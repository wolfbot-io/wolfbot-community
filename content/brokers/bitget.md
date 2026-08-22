---
title: "Connect Bitget to WolfBot Community — Step-by-Step"
description: "Connect Bitget to WolfBot Community — create trade-only API keys and start automated trading on Spot and Futures."
tested_version: "0.1.0-p12-ghcr-rc21"
last_updated: "2026-08-11"
platforms: ["windows", "linux"]
brokers: ["bitget"]
category: "broker-setup"
difficulty: "beginner"
estimated_time: "8 minutes"
related_guides: ["/brokers/api-key-guide", "/docs/risk-controls"]
keywords: ["bitget trading bot", "bitget api bot", "connect bitget to wolfbot"]
sitemap_priority: 0.80
---

# Connect Bitget to WolfBot Community

**Tested with WolfBot Community v0.1.0-p12-ghcr-rc21** · Last updated: 2026-08-11

**Bitget support status:** Stable · Demo ✅ · Live ✅ · Terminal ✅ · Strategy ✅

## Who this guide is for

Anyone connecting a Bitget account to WolfBot Community.

## What you need

- A Bitget account ([sign up](https://partner.bitget.com/bg/WOLFBOT))
- WolfBot Community installed
- 5 minutes

---

## Step 1: Create Bitget API Key

1. Log in to [bitget.com](https://partner.bitget.com/bg/WOLFBOT)
2. Go to **Account → API Management**
3. Click **Create API Key**
4. Label it "WolfBot Community"
5. Set permissions:
   - Trade: ✅ ON
   - Withdrawal: ❌ OFF
   - Transfer: ❌ OFF
6. (Recommended) Bind IP address
7. Complete verification → save Key + Secret

---

## Step 2: Add in WolfBot

1. WolfBot → **Exchange Accounts → Add Account**
2. Select **Bitget**
3. Choose **Spot** or **Futures**
4. Enter API Key + Secret → **Test Connection**

---

## Step 3: Test

1. Smart Terminal → select trading pair
2. Start with your Demo API key → then a small live limit order
3. Verify on Bitget → cancel

---

## Bitget-Specific Notes

- **Demo trading:** Bitget testnet available for testing
- **Futures:** Available
- **Copy trading:** WolfBot does not interact with Bitget copy trading feature

---

## Common Issues

| Issue | Solution |
|---|---|
| API key invalid | Regenerate on Bitget |
| Permission denied | Enable Trade permission |
| IP restriction error | Add your IP or disable restriction |

---

## Next step

> **[Configure Risk Controls →](/docs/risk-controls)**
