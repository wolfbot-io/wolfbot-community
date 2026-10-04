---
title: "WolfBot Telegram Notifications — Operation & Security Guide"
description: "Understand WolfBot Telegram alerts, keep the self-hosted notification path healthy, rotate a bot token safely, and protect your private bot."
tested_version: "0.1.0-beta.11"
last_updated: "2026-10-04"
platforms: ["windows", "linux"]
category: "integrations"
difficulty: "beginner"
estimated_time: "8 minutes"
next_guide: "/docs/telegram-troubleshooting"
previous_guide: "/docs/connect-telegram-notifications"
related_guides: ["/docs/connect-telegram-notifications", "/docs/telegram-troubleshooting", "/docs/risk-controls", "/docs/backup", "/docs/run-24-7-on-a-vps"]
keywords: ["wolfbot telegram alerts", "telegram trading notifications", "secure telegram bot token", "rotate telegram bot token", "self hosted trading notifications"]
sitemap_priority: 0.80
---

# Operate and Secure WolfBot Telegram Notifications

After Telegram shows **Linked**, the important work is keeping the notification path available and the bot token private. This guide explains what each part does, what a successful setup can and cannot guarantee, and how to maintain it without weakening your trading security.

New setup? Complete [Connect Telegram to WolfBot Community](/docs/connect-telegram-notifications) first.

## The Three Parts of the Connection

| Part | Purpose | Stored where |
|---|---|---|
| **Telegram bot token** | Authorizes WolfBot to operate the bot you created | Encrypted in the local WolfBot Vault |
| **Linked Telegram chat** | Tells WolfBot which private chat receives notifications | Local notification-routing record; UI displays a masked ID |
| **Telegram command listener** | Receives `/link` commands from Telegram | Runs with the local WolfBot web service |

These are separate. A saved token does not mean a chat is linked, and a previously linked chat does not prove the current token can still send a message. The **Send test** action checks the complete delivery path.

![WolfBot Community Telegram status panel with a linked chat and Send test action](/images/guides/telegram/wolfbot-community-telegram-linked.png "Use Linked plus a successful Send test as the operational check.")

## Notifications You Can Receive

The current Connect Telegram screen identifies these notification groups:

- New entry activity
- Order status changes
- Take-profit and stop-loss activity
- Trailing protection updates
- Safety notifications

The exact message depends on the account, strategy, broker response, and current release. Telegram delivery confirms that an event reached the notification channel; it does not guarantee an exchange order filled or a position closed. Verify execution state in **Activity**, **Live Monitor**, or directly at the broker when the event is risk-critical.

## Availability for a Self-Hosted Installation

Notifications originate from your WolfBot Community installation. To receive them continuously:

1. Keep the WolfBot machine powered on.
2. Prevent the machine from sleeping during active monitoring.
3. Keep WolfBot services running.
4. Allow outbound HTTPS access to Telegram.
5. Keep system time accurate.

For a desktop used only during trading sessions, test Telegram at the start of each session. For round-the-clock operation, use a reliable always-on machine or follow the [24/7 VPS guide](/docs/run-24-7-on-a-vps).

## A 60-Second Health Check

Run this check after an update, restart, network change, or token rotation:

1. Open **Integrations → Manage Telegram**.
2. Confirm the token field says **saved**.
3. Confirm there is no yellow **Enable Telegram commands** warning.
4. Confirm the green **Linked** badge is present.
5. Select **Send test**.
6. Confirm the test message arrives in the correct private chat.

Do not rely only on the green badge. It confirms the stored link, while the test confirms current network and bot authorization.

## Protect the Bot Token

The Telegram bot token is not your Telegram password, but it gives control of the bot to whoever holds it. Apply the same discipline used for an exchange API secret:

- Store it only in the WolfBot token field and Telegram's own BotFather chat.
- Never include it in screenshots or screen recordings.
- Never commit it to Git, `.env` examples, scripts, or documentation.
- Redact it before sharing logs.
- Do not run another polling application with the same token while WolfBot uses it.
- Rotate it immediately if it may have been exposed.

WolfBot returns a masked value after storage. A masked token such as `1234…ABCD` confirms a value exists; it cannot be used to reconstruct the secret.

## Rotate a Token Safely

Rotate the token when it was exposed, copied to the wrong machine, included in a support bundle, or accessed by someone who should no longer control the bot.

### Rotate the token for the same bot

1. Open the verified `@BotFather` chat.
2. Use `/mybots`, select your alert bot, and open its API token controls. Telegram also documents `/token` for generating a replacement token.
3. Generate and copy the new token. The previous token should be treated as unusable.
4. In WolfBot, open **Integrations → Manage Telegram**.
5. Paste the replacement into **Platform bot token**.
6. Select **Update token**.
7. Select **Refresh status**, then **Send test**.

WolfBot stops the current command listener before binding the replacement token, which avoids two local listeners competing for the same bot. A normal token rotation for the same bot does not require restarting WolfBot.

### Move to an entirely new bot

If you create a different bot rather than rotating the existing bot's token:

1. Save the new bot's token with **Update token**.
2. Open the new bot in Telegram and select **Start**.
3. Create a fresh WolfBot link code.
4. Send the `/link` command to the new bot.
5. Confirm **Linked** and run **Send test**.
6. Delete or revoke the old bot in BotFather only after the new path works.

This sequence matters because a new bot cannot assume that you have already opened a private chat with it.

## What Telegram Linking Does Not Change

Linking or replacing a Telegram bot does not:

- Add, enable, disable, or remove an exchange account
- Change API permissions
- Start or stop a trading strategy
- Modify leverage, position size, TP/SL, or drawdown controls
- Grant Telegram users access to the WolfBot dashboard
- Grant the bot permission to withdraw funds

Keep exchange API keys trade-only with withdrawals disabled. Read the [API Key Security Guide](/brokers/api-key-guide) and [Risk Controls Guide](/docs/risk-controls) separately.

## Backup and Migration Notes

The bot token and linked-chat metadata are security-sensitive local state. Before moving WolfBot to another machine:

1. Create and inspect a supported [WolfBot backup](/docs/backup).
2. After restore, open **Connect Telegram**.
3. Confirm whether the masked saved token and **Linked** state are present.
4. Run **Send test** before relying on alerts.
5. If either value is missing, save the token and create a new one-time link code.

Never assume a restored backup has a working outbound Telegram path until the test message arrives.

## Monthly Maintenance Checklist

- [ ] Send a test message
- [ ] Confirm it reaches the intended private chat
- [ ] Confirm the WolfBot host remains online during monitored hours
- [ ] Review who can access the host and its backups
- [ ] Confirm no second application is polling the same Telegram bot
- [ ] Rotate the token if there is any exposure concern
- [ ] Review WolfBot release notes for notification changes

## Next Step

Bookmark [Telegram Troubleshooting](/docs/telegram-troubleshooting). It maps each visible setup symptom to a safe fix, including expired link codes, inactive command listening, missing test messages, and duplicate bot pollers.
