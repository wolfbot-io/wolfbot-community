---
title: "Connect KuCoin to WolfBot Community — Step-by-Step"
description: "Connect KuCoin to WolfBot Community — create API keys with passphrase and start automated trading on Spot and Futures."
tested_version: "0.1.0-beta.4"
last_updated: "2026-08-11"
platforms: ["windows", "linux"]
brokers: ["kucoin"]
category: "broker-setup"
difficulty: "beginner"
estimated_time: "8 minutes"
related_guides: ["/brokers/api-key-guide", "/docs/risk-controls"]
keywords: ["kucoin trading bot", "kucoin api bot", "connect kucoin to wolfbot"]
sitemap_priority: 0.80
---

# Connect KuCoin to WolfBot Community

**Tested with WolfBot Community v0.1.0-beta.4** · Last updated: 2026-08-11

**KuCoin support status:** Stable · Demo ✅ · Live ✅ · Terminal ✅ · Strategy ✅

## Who this guide is for

Anyone connecting a KuCoin account to WolfBot Community.

## What you need

- A KuCoin account ([sign up](https://www.kucoin.com/r/broker/WOLFBOTIO))
- WolfBot Community installed
- 5 minutes

---

## Step 1: Create KuCoin API Key

1. Log in to [kucoin.com](https://www.kucoin.com/r/broker/WOLFBOTIO)
2. Go to **Account → API Management**
3. Click **Create API**
4. Label it "WolfBot Community"
5. Set an **API Passphrase** (required for KuCoin — remember this!)
6. Permissions:
   - Spot Trading: ✅ ON
   - Futures Trading: ✅ ON (if using futures)
   - Withdrawal: ❌ OFF
   - Transfer: ❌ OFF
7. (Recommended) Bind IP address
8. Complete verification → save Key, Secret, and Passphrase

> ⚠️ KuCoin requires a passphrase. Store it securely — you'll need it in WolfBot.

---

## Step 2: Add in WolfBot

1. WolfBot → **Exchange Accounts → Add Account**
2. Select **KuCoin**
3. Choose account type: **Spot** or **Futures**
4. Enter API Key, Secret Key, **and Passphrase**
5. Click **Test Connection**

---

## Step 3: Test

1. Smart Terminal → select trading pair
2. Start with your Demo API key → then a small live order
3. Verify on KuCoin → cancel

---

## KuCoin-Specific Notes

- **Passphrase required** — unlike most brokers, KuCoin mandates an API passphrase
- **Demo:** KuCoin Sandbox available for testing
- **Futures:** Available
- **Token variety:** KuCoin has many altcoin pairs supported

---

## Common Issues

| Issue | Solution |
|---|---|
| "Passphrase incorrect" | Re-enter; the passphrase is case-sensitive |
| API key invalid | Regenerate on KuCoin |
| Permission denied | Enable Spot Trading |
| Connection timeout | Check firewall |

---

## Next step

> **[Configure Risk Controls →](/docs/risk-controls)**
