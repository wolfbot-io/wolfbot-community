---
title: "Connect OKX to WolfBot Community — Step-by-Step"
description: "Connect OKX to WolfBot Community: create a Read + Trade API key with a passphrase, keep Withdraw off, and verify the connection safely."
tested_version: "0.1.0-beta.16"
last_updated: "2026-11-01"
platforms: ["windows", "linux"]
brokers: ["okx"]
category: "broker-setup"
difficulty: "beginner"
estimated_time: "8 minutes"
related_guides: ["/brokers/open-okx-account", "/brokers/api-key-guide", "/docs/risk-controls"]
keywords: ["okx trading bot", "okx api bot", "connect okx to wolfbot", "okx api passphrase"]
sitemap_priority: 0.80
---
# Connect OKX to WolfBot Community

**Tested with WolfBot Community v0.1.0-beta.16** · Last updated: 2026-11-01

**OKX support status:** Release-dependent. OKX was added to Account Connect in v0.1.0-beta.16. Check **Exchange Accounts → Add Account** in your installed version: if OKX is listed, you can follow this guide; if not, update WolfBot first.

> **New to OKX?** Start with the [OKX account-opening guide](/brokers/open-okx-account). It covers registration, identity verification and authenticator security.

## Who this guide is for

Anyone connecting an OKX account to WolfBot Community on a release that lists OKX.

## What you need

- A verified OKX account ([sign up](https://okx.com/join/WOLFBOT))
- WolfBot Community with OKX listed in Account Connect
- A password manager, because OKX API keys come with three values you must store: API key, secret and passphrase

---

## Step 1: Create the OKX API key

1. Log in to [okx.com](https://okx.com/join/WOLFBOT) and open **Profile → API**.
2. Click **Create API key** and name it "WolfBot Community".
3. Choose a **passphrase** and save it. OKX asks you to set it yourself, WolfBot needs it, and it cannot be shown again.
4. Set permissions:
   - Read: ✅ ON
   - Trade: ✅ ON
   - Withdraw: ❌ OFF
5. (Recommended) Bind the IP address of the machine running WolfBot. Check OKX's current API rules for how unbound keys with trade permission are treated.
6. Complete verification, then save the API key, the secret and the passphrase together in your password manager.

---

## Step 2: Add the account in WolfBot

1. WolfBot → **Exchange Accounts → Add Account**.
2. Select **OKX**.
3. Enter the API key, secret and passphrase exactly as saved. Case matters.
4. Click **Test Connection**. WolfBot reads the key's permissions and should refuse a key that has withdrawal enabled.

---

## Step 3: Test safely

1. Confirm the account appears in Exchange Accounts without errors.
2. Check what your installed release offers for OKX (Demo, Terminal, Strategy) before relying on any of it. Where Demo is not available for OKX, rehearse the flow on a connected Demo account of another exchange first.
3. Place one small limit order from Smart Terminal, verify it on OKX, then cancel it.
4. Turn on [Risk Controls](/docs/risk-controls) before any automated live trading.

---

## OKX-Specific Notes

- **Passphrase:** unlike most exchanges, OKX needs a passphrase you choose. A wrong or lost passphrase means you must create a new key.
- **Regional availability:** OKX determines eligibility and the products you can use.
- **Copy trading:** WolfBot does not interact with OKX's copy-trading feature.

---

## Common Issues

| Issue | Solution |
|---|---|
| "API key doesn't exist" | The key was deleted, mistyped, or belongs to another environment. Recreate it and copy the values again. |
| Invalid passphrase | Re-enter it exactly; it is case-sensitive. If lost, create a new key. |
| Permission denied | Enable Read and Trade on the key. |
| IP restriction error | Add your current IP or update the binding. |
| OKX is not in the account list | Your installed release predates OKX support; update WolfBot. |

---

## Comparing OKX with other exchanges?

[Binance vs OKX](/brokers/binance-vs-okx) · [Bybit vs OKX](/brokers/bybit-vs-okx) · [BingX vs OKX](/brokers/bingx-vs-okx) · [KuCoin vs OKX](/brokers/kucoin-vs-okx)

## Next step

> **[Configure Risk Controls →](/docs/risk-controls)**
