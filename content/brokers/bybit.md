---
title: "Connect Bybit to WolfBot Community — Setup Guide"
description: "Step-by-step guide to connect Bybit (Demo and Live) to WolfBot Community. Create trade-only API keys, test connection, and start trading."
tested_version: "0.8.0-beta.2"
last_updated: "2026-08-11"
platforms: ["windows", "linux"]
brokers: ["bybit"]
category: "broker-setup"
difficulty: "beginner"
estimated_time: "10 minutes"
next_guide: "/docs/risk-controls"
previous_guide: "/docs/simulation"
related_guides: ["/docs/simulation", "/docs/risk-controls", "/brokers/api-key-guide"]
keywords: [
  "bybit trading bot",
  "bybit self hosted bot",
  "bybit api trading automation",
  "connect bybit to wolfbot",
  "bybit automated trading"
]
sitemap_priority: 0.85
---

# Connect Bybit to WolfBot Community

**Tested with WolfBot Community v0.8.0-beta.2** · Last updated: 2026-08-11

**Bybit support status:** Stable · Demo ✅ · Live ✅ · Terminal ✅ · Strategy ✅

## Who this guide is for

Anyone who wants to connect a Bybit account (Demo or Live) to WolfBot Community for automated or manual trading.

## What you need

- A Bybit account ([sign up](https://www.bybit.com))
- WolfBot Community installed and running
- 5 minutes

---

## Step 1: Create a Bybit API Key

### For Demo (Testnet)

1. Go to [testnet.bybit.com](https://testnet.bybit.com) and log in
2. Navigate to **Account & Security → API Management**
3. Click **Create New Key**
4. Select **System-generated API Key**
5. Configure permissions:
   - ✅ **Trade** (Read-Write)
   - ❌ **Withdrawal** (disabled)
   - ❌ **Transfer** (disabled)
6. (Optional) Bind IP address for extra security
7. Click **Confirm**
8. **Copy and save** your API Key and Secret Key

### For Live Trading

1. Go to [bybit.com](https://www.bybit.com) and log in
2. Navigate to **Account & Security → API Management**
3. Follow the same steps as Demo — always disable Withdrawal and Transfer

> ⚠️ **Critical:** Never enable Withdrawal or Transfer permissions. WolfBot only needs Trade permission.

---

## Step 2: Add Bybit Account in WolfBot

1. Open WolfBot Community
2. Go to **Exchange Accounts → Add Account**
3. Select **Bybit** from the broker list
4. Choose account type: **Demo** or **Live**
5. Enter your API Key and Secret Key
6. Click **Test Connection**

WolfBot will verify:
- API key is valid
- Permissions are correct
- Network connectivity

---

## Step 3: Test the Connection

After connection succeeds:

1. Go to **Smart Terminal**
2. Select a Bybit trading pair (e.g., BTC/USDT)
3. Ensure mode is **Simulation** (for first test)
4. Place a small simulated order
5. Verify the order appears in Positions

Then switch to **Live** (Demo or Real):
1. Start with minimum position size
2. Place a small limit order
3. Check Bybit to confirm the order appears
4. Cancel the test order

---

## Step 4: Configure Settings

Recommended settings for Bybit:

| Setting | Demo | Live |
|---|---|---|
| Mode | Simulation first, then Live | Start small |
| Position Size | Any | Minimum |
| Max Leverage | Any | Start 1x |
| TP/SL | Enabled | Enabled |
| Hedge Mode | Optional | Optional |

---

## Expected Result

After successful setup:
- **Exchange Accounts** shows Bybit as "Connected"
- Smart Terminal shows your Bybit balance
- You can place orders that appear on Bybit

---

## Common Issues

| Issue | Solution |
|---|---|
| "API key invalid" | Check key hasn't expired; regenerate if needed |
| "Permission denied" | Verify Trade permission is enabled, Withdrawal disabled |
| "Connection timeout" | Check firewall/network; ensure Bybit isn't geo-restricted in your region |
| "IP restriction" | If IP-bound, ensure your machine's IP matches the API key restriction |
| "Insufficient balance" | For Live: deposit funds; for Demo: request testnet funds |

---

## Bybit-Specific Notes

- **Hedge Mode:** Supported. Enable in Bybit account settings first, then in WolfBot.
- **Position Mode:** Both One-Way and Hedge Mode are supported.
- **Order Types:** Market, Limit, TP/SL, DCA are all supported.
- **Rate Limits:** WolfBot respects Bybit rate limits automatically.

---

## Troubleshooting

For persistent issues:
1. Check [Bybit API Status](https://status.bybit.com)
2. Verify API key permissions on Bybit
3. Regenerate API key and re-add in WolfBot
4. Check WolfBot logs: `wolfbot logs` (Linux) or `C:\Program Files\WolfBot\logs\` (Windows)

---

## Next Steps

> **[Configure Risk Controls →](/docs/risk-controls)** or **[Connect Binance →](/brokers/binance)**
