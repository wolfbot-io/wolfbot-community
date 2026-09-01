---
title: "How to Open an HTX Account with WolfBot: Registration, KYC, and 2FA"
description: "Create an HTX account through the WolfBot referral, complete verification, secure it, and understand current Community integration status."
tested_version: "0.1.0-beta.4"
last_updated: "2026-09-01"
platforms: ["windows", "linux"]
brokers: ["htx"]
category: "broker-account-opening"
difficulty: "beginner"
estimated_time: "15–30 minutes plus KYC review time"
related_guides: ["/brokers/api-key-guide", "/docs/simulation", "/docs/risk-controls"]
keywords: ["open HTX account", "HTX WolfBot referral", "HTX KYC", "HTX trading bot account"]
sitemap_priority: 0.75
---

# How to Open an HTX Account with WolfBot

> **WolfBot status:** HTX referral signup is active; direct HTX connectivity in WolfBot Community is currently **planned**. Registration does not imply current API support.

**[Open the WolfBot HTX registration page →](https://www.htx.com/invite/en-us/1f?invite_code=84k59223&regChannel=11349190)**

![Four-step HTX account-opening flow: referral, registration, KYC, and authenticator 2FA](/images/guides/open-htx-account.png)

*Instructional diagram, not an HTX UI screenshot.*

## Step 1: verify domain and eligibility

1. Open the link; confirm HTTPS and a final `htx.com` hostname.
2. Select truthful country/region and review current terms/restricted jurisdictions.
3. If shown, confirm invite code `84k59223` before completion.
4. Do not use VPN or another person's identity to bypass restrictions.

## Step 2: register

1. Choose your own email/phone and enter the verification code.
2. Create a unique password and store it in a password manager.
3. Complete CAPTCHA/security prompts and sign in again.
4. Review login email/device activity immediately.

## Step 3: Identity Verification

1. Locate **Identity Verification/KYC** in the profile.
2. Choose Individual, correct issuing country, and document type.
3. Enter matching legal details; capture the unexpired original clearly with all corners visible.
4. Complete face/liveness in good light using the account owner.
5. Review results through the account/official Help Center; requirements can vary by region.

## Step 4: secure it

1. Enable an authenticator app and store the setup/recovery key offline.
2. Enable anti-phishing code, passkey, and withdrawal whitelist when offered.
3. Remove unknown sessions/devices and test a complete 2FA login.
4. Never provide OTP, KYC files, password, or recovery key to chat-group “admins.”

## Do not create a WolfBot API while integration is planned

Wait for a published WolfBot capability and `/brokers/htx` guide. Once supported, create a fresh WolfBot-only API key with minimum Read/Trade access and **Withdrawal/Transfer disabled**. Never reuse a key issued to another tool.

To start now, use a documented broker such as [BingX](/brokers/bingx), [KuCoin](/brokers/kucoin), or [Binance](/brokers/binance), then run [Simulation](/docs/simulation).

## Checklist

- [ ] Domain/invite code and region verified.
- [ ] Owned contact details, KYC, and 2FA complete.
- [ ] Recovery stored separately; no unknown sessions.
- [ ] No WolfBot API created for an unreleased integration.
- [ ] No deposit made solely on expected future support.

## Official references

- [HTX Support](https://www.htx.com/support/)
- [HTX registration via WolfBot](https://www.htx.com/invite/en-us/1f?invite_code=84k59223&regChannel=11349190)
