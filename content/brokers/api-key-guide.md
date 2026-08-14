---
title: "Trade-Only API Key Guide — Security Best Practices"
description: "How to create secure trade-only API keys for WolfBot Community. Never enable withdrawal permissions. Guide for Binance, Bybit, BingX, KuCoin, Bitget."
tested_version: "0.1.0-p12-ghcr-rc8"
last_updated: "2026-08-11"
platforms: ["windows", "linux"]
brokers: ["binance", "bybit", "bingx", "kucoin", "bitget"]
category: "security"
difficulty: "beginner"
estimated_time: "5 minutes"
related_guides: ["/brokers/bybit", "/brokers/binance", "/security", "/docs/trade-only-api-keys-explained"]
keywords: [
  "trade only api key",
  "api key security trading bot",
  "non custodial trading bot",
  "safe api key setup",
  "wolfbot api permissions"
]
sitemap_priority: 0.80
---

# Trade-Only API Key Guide

**Tested with WolfBot Community v0.1.0-p12-ghcr-rc8** · Last updated: 2026-08-11

## Why Trade-Only?

WolfBot Community is **non-custodial** — it never holds your funds. It connects to exchanges via API keys that you control. You can revoke these keys at any time.

**The golden rule:** Never enable Withdrawal or Transfer permissions on any API key used with trading software. See [Trade-Only API Keys Explained →](/docs/trade-only-api-keys-explained) for why this one setting matters more than any other.

## Required Permissions

WolfBot needs only these permissions:

| Permission | Required | Why |
|---|---|---|
| **Trade** (Read-Write) | ✅ Yes | Place/cancel orders, check positions |
| **Read** (Read-Only) | ✅ Yes | Read balance, positions, order history |
| **Withdrawal** | ❌ NEVER | WolfBot does not withdraw funds |
| **Transfer** | ❌ NEVER | WolfBot does not transfer between accounts |

If an exchange offers granular permissions, also disable:
- ❌ **Withdrawal**
- ❌ **Internal Transfer**
- ❌ **Sub-account Transfer**
- ❌ **Earn/Staking** management

## By Exchange

### Binance
1. API Management → Create API
2. Enable: **Enable Spot & Margin Trading**
3. Disable: **Enable Withdrawals**
4. (Recommended) Restrict to trusted IPs

### Bybit
1. API Management → Create New Key
2. Enable: **Trade** permission
3. Disable: **Withdrawal**, **Transfer**
4. (Recommended) Bind IP address

### BingX
1. API Management → Create API Key
2. Enable: **Trade**
3. Disable: **Withdrawal**
4. (Recommended) Restrict IP access

### KuCoin
1. API Management → Create API
2. Enable: **Trade** under Spot Trading
3. Disable: **Withdrawal**, **Transfer**
4. Set a passphrase (required for KuCoin)

### Bitget
1. API Management → Create API Key
2. Enable: **Trade**
3. Disable: **Withdrawal**
4. (Recommended) Bind IP

## Additional Security Tips

### IP Binding (Recommended)
Where supported, bind API keys to your machine's IP address:
- Prevents use from other locations
- Update when your IP changes
- Use a static IP or VPS for 24/7 operation

### Separate Keys per Service
- One API key for WolfBot Community
- Different keys for portfolio tracking apps
- Makes it easy to revoke individual integrations

### Regular Audits
- Review API keys monthly
- Delete unused keys
- Regenerate keys periodically

### Key Storage
- Store API secrets securely (WolfBot encrypts them locally)
- Never share keys in screenshots or support messages
- Don't store keys in cloud notes or email

---

## What Happens if a Key is Compromised?

1. **Immediately** delete the API key on the exchange
2. Check your account for unauthorized activity
3. Create a new trade-only key
4. Update WolfBot with the new key

Because withdrawal is disabled, a compromised trade-only key cannot steal funds — but it could place unwanted trades. Always act fast.

---

## Next Steps

> **[Connect Bybit →](/brokers/bybit)** or **[Security Overview →](/security)**
