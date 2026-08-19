---
title: "Why Withdrawal Permissions Should Stay Disabled — Protect Your Funds from a Compromised Key"
description: "Trade-only API keys are meant to leave withdrawals turned off. Here's why a withdrawal-enabled key is the main way a compromised exchange key becomes a stolen balance, and how to check yours."
tested_version: "0.1.0-p12-ghcr-rc17"
last_updated: "2026-08-16"
platforms: ["windows", "linux"]
category: "security"
difficulty: "beginner"
estimated_time: "5 minutes"
next_guide: "/docs/trade-only-api-keys-explained"
related_guides: ["/docs/trade-only-api-keys-explained", "/security", "/docs/risk-controls"]
keywords: [
  "withdrawal permission api key",
  "trade only api key",
  "disable withdrawal trading bot",
  "api key security",
  "no withdrawal permissions exchange key",
  "secure bot api credentials"
]
sitemap_priority: 0.7
---

# Why Withdrawal Permissions Should Stay Disabled

**Tested with WolfBot Community v0.1.0-p12-ghcr-rc17** · Last updated: 2026-08-16

## The one-line answer

A trading bot only needs to place and manage trades. It never needs to move your funds out. So the safest API key for any self-hosted bot — including WolfBot Community — is a **trade-only key with withdrawal permissions disabled.**

## What permissions an API key can carry

When you create an API key on an exchange you usually pick which actions it may perform. The meaningful difference for a trading bot:

- **Trade:** read balances, place orders, manage positions — exactly what a bot does.
- **Withdraw:** move funds out of the account.

The second one is what turns a leaked or stolen key from "someone can mess with my trades" into "someone can take my money."

## Why it matters for your funds

If your key's withdrawal permission is **off**, even a fully compromised key cannot send your balance anywhere — the exchange simply rejects any withdrawal request from it. That is a hard stop on the damage a stolen credential can do to your actual funds.

If it's **on**, the moment that key leaks (a paste, a compromised machine, a malicious dependency you ran), an attacker can drain the account directly, with no extra step.

## How to check yours

1. Log into the exchange and open **API Management**.
2. Find the key connected to your bot.
3. Confirm only **Trade / Read** is enabled and **Withdraw is disabled.**
4. If withdrawal is on, disable it, then re-connect the bot. WolfBot never needs it.

## The trade-only key, in short

- A trade-only key fulfils everything a bot does: read, place, manage.
- Disabling withdrawal is the cheapest, most effective fund-protection each of us controls.

## Where to go next

- [Trade-Only API Keys Explained →](/docs/trade-only-api-keys-explained)
- [Security →](/security)
- [Risk Controls →](/docs/risk-controls)

## Next step

> **[Trade-Only API Keys Explained →](/docs/trade-only-api-keys-explained)**
