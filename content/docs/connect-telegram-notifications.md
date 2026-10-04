---
title: "How to Connect Telegram to WolfBot Community — Step-by-Step"
description: "Create a private Telegram bot with BotFather, save its token securely in WolfBot Community, link your chat, and test trading notifications."
tested_version: "0.1.0-beta.11"
last_updated: "2026-10-04"
platforms: ["windows", "linux"]
category: "integrations"
difficulty: "beginner"
estimated_time: "10 minutes"
next_guide: "/docs/telegram-notifications-guide"
previous_guide: "/getting-started"
related_guides: ["/docs/telegram-notifications-guide", "/docs/telegram-troubleshooting", "/docs/risk-controls", "/docs/run-24-7-on-a-vps"]
keywords: ["connect telegram to wolfbot", "wolfbot telegram notifications", "telegram trading bot notifications", "botfather wolfbot", "self hosted trading alerts", "telegram bot token setup"]
sitemap_priority: 0.86
---

# Connect Telegram Notifications to WolfBot Community

WolfBot Community can send **ENTRY, order status, take-profit/stop-loss, trailing, and safety notifications** to a private Telegram chat. You create and own the Telegram bot; WolfBot stores its token in the encrypted local Vault and uses it only for the notification connection.

Telegram linking is notification-only. It does **not** grant trading access, expose exchange API keys, enable a strategy, or turn on live trading.

## Before You Start

You need:

- A running WolfBot Community installation on Windows or Linux
- Access to its local dashboard, normally at `http://127.0.0.1:8080`
- A Telegram account on your phone or desktop
- Internet access from the WolfBot machine to Telegram
- About 10 minutes

Keep both WolfBot and Telegram open while completing the guide. The WolfBot link code expires after 10 minutes and works once.

## Step 1: Open Telegram Settings in WolfBot

1. Open the WolfBot Community dashboard.
2. Select **Integrations** near the bottom of the left navigation.
3. Find the **Telegram** panel.
4. Select **Manage Telegram**.

![WolfBot Community Integrations page with the Telegram panel and Manage Telegram button](/images/guides/telegram/wolfbot-community-integrations-telegram.png "Open Integrations, then select Manage Telegram. Click the image to enlarge it.")

You should now see **Connect Telegram**, with a **Platform bot token** panel and a three-step **Telegram status** panel.

## Step 2: Create Your Bot with BotFather

`@BotFather` is Telegram's official bot-management account. Do not use a similarly named account.

1. In Telegram, open [the official @BotFather chat](https://t.me/BotFather).
2. Confirm the account shows the verified badge.
3. Send `/newbot`.
4. Enter a display name, for example `My WolfBot Alerts`.
5. Enter a unique username. Telegram requires 5–32 Latin letters, numbers, or underscores, and the username must end in `bot`, for example `my_wolfbot_alerts_bot`.
6. BotFather returns an HTTP API token. Copy the complete token, including the colon.

A token normally looks like this:

```text
1234567890:AAExampleOnly_DoNotUse_ThisValue
```

Treat the token like a password. Anyone who obtains it can control that Telegram bot. Telegram's [official BotFather documentation](https://core.telegram.org/bots/features#botfather) explains the same creation flow and token security requirement.

> Never paste your real token into a GitHub issue, screenshot, chat room, log excerpt, or support message.

## Step 3: Save the Bot Token in WolfBot

1. Return to **Connect Telegram** in WolfBot.
2. Paste the token into **Platform bot token**.
3. Select **Save token**.
4. Wait for the green confirmation: **Stack is configured with a platform bot**.

WolfBot encrypts the token into your local Vault. After it is saved, the page shows only a masked value. Saving a valid token also binds the notification service without requiring a container or computer restart.

![WolfBot Community Connect Telegram page showing a saved platform bot token and linked Telegram status, with example values replacing private identifiers](/images/guides/telegram/wolfbot-community-connect-telegram.png "The Connect Telegram screen. Private token and chat values are replaced with examples in this documentation image.")

If **Open Telegram bot** does not appear immediately, select **Refresh status** once. If the page reports that Telegram commands are not listening, select **Enable Telegram commands**, then continue.

## Step 4: Create a One-Time Link Code

1. In the **Telegram status** panel, select **Create link code**.
2. WolfBot displays a command in this format:

```text
/link WB-XXXXXX
```

3. Select **Copy**.
4. Do not share this code. It identifies the WolfBot workspace being linked.

The code expires after 10 minutes and can be consumed only once. If it expires, simply create a new one; there is no need to replace the bot token.

## Step 5: Send the Link Command to Your Bot

1. Select **Open Telegram bot**, or find the bot by the username you created.
2. If Telegram shows a **Start** button, select it.
3. Paste the complete `/link WB-XXXXXX` command into the private chat with your bot.
4. Send the message.

The bot should reply **WolfBot Telegram linked successfully**. The WolfBot page checks the status automatically every few seconds. You can also select **Refresh status**.

> Send the command to your own bot in a private chat. Do not post it in a Telegram group or channel.

## Step 6: Confirm the Linked State

The setup is complete when the Telegram panel shows:

- A green **Linked** badge
- Your masked Telegram identity
- An enabled **Send test** button

![WolfBot Community Telegram status card showing the three steps and green Linked badge](/images/guides/telegram/wolfbot-community-telegram-linked.png "A successful Telegram connection shows Linked and enables Send test.")

The identity is masked in WolfBot so the page does not reveal the complete chat ID.

## Step 7: Send a Test Notification

1. Select **Send test**.
2. Open Telegram.
3. Confirm that your bot sent a message beginning with **WolfBot Telegram is connected**.

Receiving this message proves the full path works: WolfBot can read the saved bot token, resolve the linked chat, reach Telegram, and deliver a notification.

If WolfBot shows **Linked** but no test message arrives, use the [Telegram Troubleshooting Guide](/docs/telegram-troubleshooting).

## What Happens After Setup?

WolfBot can route supported notifications for enabled accounts to the linked chat. Keep the WolfBot machine running and connected to the internet if you expect notifications while away from the dashboard. A laptop that is shut down or asleep cannot send local self-hosted alerts.

Telegram is an alert channel, not a substitute for exchange-side protections. Keep stop-loss settings, position limits, and other [WolfBot risk controls](/docs/risk-controls) configured independently.

## Security Checklist

- [ ] I used the verified `@BotFather` account
- [ ] I did not publish or screenshot the real bot token
- [ ] I saved the token only in WolfBot's Platform bot token field
- [ ] I sent the `/link` command in a private chat with my own bot
- [ ] WolfBot shows **Linked**
- [ ] I received the test notification
- [ ] Withdrawal permission remains disabled on every exchange API key

## Frequently Asked Questions

### Does Telegram linking let someone place trades?

No. The link stores notification-routing metadata only. It does not grant trading access, expose broker credentials, start bots, or enable live trading.

### Do I need to enter a Telegram chat ID manually?

No. The one-time `/link` command lets WolfBot associate the correct private chat automatically.

### Can I reuse the link code?

No. It is single-use and expires after 10 minutes. Create another code from WolfBot when needed.

### Must WolfBot stay online?

Yes. WolfBot Community is self-hosted, so its notification service must be running and able to reach Telegram. For continuous alerts, see [Run WolfBot 24/7 on a VPS](/docs/run-24-7-on-a-vps).

### Where is the bot token stored?

WolfBot stores it encrypted in the installation's local Vault. The settings page returns only a masked token after saving.

## Next Step

Continue with [Operating and Securing Telegram Notifications](/docs/telegram-notifications-guide) to learn routine checks, safe token rotation, and what to do before leaving WolfBot unattended.
