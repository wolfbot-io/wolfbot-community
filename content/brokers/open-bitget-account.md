---
title: "How to Open a Bitget Account with WolfBot: KYC, 2FA, and Passphrase"
description: "Register Bitget through the WolfBot referral, complete Identity Verification, enable Google Authenticator, and prepare an API passphrase safely."
tested_version: "0.1.0-beta.9"
last_updated: "2026-09-01"
platforms: ["windows", "linux"]
brokers: ["bitget"]
category: "broker-account-opening"
difficulty: "beginner"
estimated_time: "15–30 minutes plus KYC review time"
next_guide: "/brokers/bitget"
related_guides: ["/brokers/bitget", "/brokers/api-key-guide", "/docs/simulation", "/docs/risk-controls"]
keywords: ["open Bitget account", "Bitget WolfBot referral", "Bitget KYC", "Bitget API passphrase"]
sitemap_priority: 0.85
---

# How to Open a Bitget Account with WolfBot

**[Open the WolfBot Bitget registration page →](https://partner.bitget.com/bg/WOLFBOT)**

> Referral attribution goes to WolfBot; Bitget controls all programs and eligibility. No deposit is required to finish account security.

![Four-step Bitget account-opening flow: referral, registration, KYC, and authenticator 2FA](/images/guides/open-bitget-account.png)

*Instructional diagram, not a Bitget UI screenshot.*

## Step 1: register on the correct site

1. Open the link and confirm HTTPS plus an official Bitget domain.
2. Choose a long-term email or phone you control.
3. Enter the verification code, create a unique password, and save it in a password manager.
4. Sign in again and review regional/product terms for your account.

## Step 2: Identity Verification

1. Web: profile → **Identity Verification**. App: User profile → **ID verification**.
2. Select **Verify**, issuing country/region, and document type.
3. Read the capture requirements and photograph front/back when requested; legal name and birth date must be clear, with no edits.
4. Complete facial recognition on computer or phone.
5. Wait for the website inbox/email result. If rejected, use the stated reason and retake the original clearly.

## Step 3: enable Google Authenticator

1. Go to Profile → **Security → Google Authenticator**.
2. Select Next, add a key in the authenticator, and scan the QR code or enter the setup key manually.
3. Store the setup key offline. Manual entry may be easier when both apps are on one phone.
4. Enter the six-digit code, then enable anti-phishing code/login alerts when available.
5. Review sessions/devices, remove unknown ones, and test login.

## Step 4: understand the API passphrase

Bitget can require three separate secrets: **API Key**, **Secret Key**, and **API Passphrase**. The passphrase is created with the API; it is not your login password or 2FA code. Store all three in a password manager. If the passphrase is lost, revoke and recreate the API key.

## WolfBot checklist

- [ ] KYC/2FA complete; recovery key safe.
- [ ] [Bitget connection guide](/brokers/bitget) reviewed.
- [ ] Dedicated WolfBot API with minimum Read/Trade access.
- [ ] **Withdrawal/Transfer disabled**; passphrase never sent in chat.
- [ ] [Simulation](/docs/simulation) and [Risk Controls](/docs/risk-controls) used.

## Common problems

| Problem | Action |
|---|---|
| KYC rejected | Match issuing country/type, use a clear unedited original, and good light for face scan. |
| Authenticator code wrong | Enable automatic phone time and enter the newest code. |
| API passphrase forgotten | Revoke and recreate the API key; do not guess with your login password. |
| Test Connection fails | Check key/secret/passphrase, account type, and permissions; never enable Withdrawal to test. |

## Official references

- [Bitget registration and login](https://www.bitget.com/support/sections/12508313443723)
- [Bitget Identity Verification](https://www.bitget.com/support/articles/12560603795184)
- [Bitget Google Authenticator](https://www.bitget.com/support/articles/12560603808459)
