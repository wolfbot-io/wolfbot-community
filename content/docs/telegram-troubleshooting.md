---
title: "WolfBot Telegram Not Working — Troubleshooting Guide"
description: "Fix WolfBot Community Telegram setup problems: invalid bot tokens, expired link codes, inactive polling, missing test messages, and duplicate bot listeners."
tested_version: "0.1.0-beta.11"
last_updated: "2026-10-04"
platforms: ["windows", "linux"]
category: "troubleshooting"
difficulty: "beginner"
estimated_time: "10 minutes"
previous_guide: "/docs/telegram-notifications-guide"
related_guides: ["/docs/connect-telegram-notifications", "/docs/telegram-notifications-guide", "/docs/troubleshooting", "/docs/run-24-7-on-a-vps"]
keywords: ["wolfbot telegram not working", "telegram bot not linking", "telegram link code expired", "telegram polling conflict", "wolfbot send test failed", "telegram bot token invalid"]
sitemap_priority: 0.82
---

# Troubleshoot WolfBot Telegram Notifications

Start with the symptom you can see. Most Telegram setup failures belong to one of four layers: bot token, command listener, one-time link, or outbound message delivery.

If you have not completed the initial setup, follow [Connect Telegram to WolfBot Community](/docs/connect-telegram-notifications) first.

## Quick Diagnosis

| Symptom | Most likely layer | First action |
|---|---|---|
| **Save token** fails | Bot token | Copy a fresh complete token from the verified `@BotFather` chat |
| Bot username is not resolved | Token or network | Select **Refresh status**; verify internet access and token validity |
| Yellow “commands aren't listening” notice | Command listener | Select **Enable Telegram commands** |
| Bot ignores `/link` | Listener or duplicate poller | Enable commands; stop any other app using the same token |
| “invalid, expired, or already used” | One-time link | Create and send a new link code within 10 minutes |
| WolfBot remains **Not linked yet** | Link command | Verify you sent the complete command to the correct bot |
| **Linked**, but test fails | Outbound delivery | Unblock/start the bot, check network, then test again |
| Notifications stopped after token change | Authorization | Save the replacement token and run **Send test** |

## 1. WolfBot Rejects the Bot Token

### What to check

1. The token came from the verified `@BotFather` account.
2. You copied the complete value, including the numeric prefix, colon, and characters after it.
3. There are no spaces, quotation marks, or line breaks before or after the token.
4. You did not paste a bot username, Telegram link, placeholder, or `/newbot` response text.
5. The token has not been revoked in BotFather.

Return to **Integrations → Manage Telegram**, paste the corrected value, and select **Save token** or **Update token**.

> Do not test a real token by posting it in a browser URL, shell history, or online validation website. Saving it in WolfBot and using **Send test** keeps the workflow inside the intended application path.

## 2. “Open Telegram Bot” Is Missing

WolfBot resolves the public bot username from Telegram after binding the token. If the link is missing:

1. Confirm the page says the platform bot is configured.
2. Select **Refresh status**.
3. Confirm the WolfBot host can reach the internet.
4. Check that a firewall, DNS filter, proxy, or VPN is not blocking Telegram API access.
5. Generate a new token in BotFather and use **Update token** if the old token was revoked.

You can still locate the bot manually by the username you created in BotFather, but do not continue until WolfBot accepts and stores a valid token.

## 3. Telegram Commands Are Not Listening

After a service restart, WolfBot may have the saved token available while its Telegram command listener is not active. The page then displays a yellow explanation that `/link` and testing will not work yet.

Select **Enable Telegram commands**. Wait a few seconds, then select **Refresh status** and send the `/link` command again.

This action starts only the Telegram command listener. It does not enable live trading, change account status, or alter any order setting.

## 4. The Bot Ignores `/link`

Work through these checks in order:

1. Ensure the command is in a private chat with the exact bot whose token is saved in WolfBot.
2. Select **Start** in the bot chat if Telegram presents it.
3. Copy the whole command, including `/link`, one space, and the `WB-...` code.
4. In WolfBot, select **Enable Telegram commands** if that warning is visible.
5. Create a fresh code and send it immediately.
6. Confirm no other program, old WolfBot installation, test script, or automation service is using the same bot token for Telegram `getUpdates` polling.

Telegram allows only one active long-polling consumer for a bot token. If another process uses the same token, Telegram can terminate one listener with a `409 Conflict`, and the WolfBot bot may stop receiving `/link` commands. Stop the other listener or create a dedicated bot for WolfBot.

## 5. The Link Code Is Invalid, Expired, or Already Used

This is an expected security response when a code is older than 10 minutes or has already been consumed.

1. Return to WolfBot.
2. Select **Create link code**.
3. Select **Copy**.
4. Send the new command to the bot immediately.

Do not reuse the old command. Creating a new link code does not require a new bot token and does not change trading settings.

## 6. Telegram Replied Successfully but WolfBot Still Says “Not Linked Yet”

1. Wait up to several seconds; the page automatically checks status while a link code is active.
2. Select **Refresh status**.
3. Confirm Telegram's reply says **WolfBot Telegram linked successfully**, not the invalid/expired response.
4. Confirm you are viewing the same local WolfBot installation that created the code.
5. If necessary, create a new code from that installation and repeat the link.

A code from one WolfBot installation cannot be used to link a different installation.

## 7. WolfBot Is Linked but “Send Test” Fails

The stored chat link exists, but current message delivery is failing. Check:

- The bot is not blocked in Telegram.
- You have opened the chat and selected **Start**.
- The token still belongs to the same bot and has not been revoked.
- WolfBot has internet access.
- Telegram is not blocked by the host network, firewall, proxy, or VPN.
- System date and time are correct.

If you rotated the token, paste the replacement into **Update token** before testing. If you changed to a completely different bot, open that new bot, create a new link code, and link again.

## 8. Test Works but Trading Notifications Do Not Arrive

A successful test proves Telegram delivery, not that a particular trading event occurred. Verify:

1. The expected account is enabled and healthy in WolfBot.
2. The event appears in **Activity** or **Live Monitor**.
3. The strategy or manual action actually produced an ENTRY, order, TP/SL, trailing, or safety event.
4. The WolfBot host was awake and online at that time.
5. You are checking the same Telegram chat used for the successful test.

For order-critical events, verify broker state directly. Telegram is an observability channel and should not be the only source used to confirm execution.

## 9. Notifications Stop After Restarting WolfBot

Open **Connect Telegram** after the restart:

1. Confirm the token still shows **saved**.
2. If the yellow listener warning appears, select **Enable Telegram commands**.
3. Confirm **Linked**.
4. Run **Send test**.

You normally do not need to relink the chat when the same saved bot and local Vault are intact.

## Advanced: Collect a Safe Log Excerpt on Linux

Use the built-in stack log command only when the UI checks above are insufficient:

```bash
sudo /opt/wolfbot/launcher/wolfbot-stack.sh logs | grep -i telegram
```

Look for recent messages about token initialization, polling, network failure, or `409 Conflict`. Before sharing an excerpt:

- Remove bot tokens, `/link` codes, chat IDs, usernames, emails, and private host paths.
- Include the WolfBot version and approximate failure time.
- Do not publish the complete log archive in a public issue.

## Safe Reset Sequence

When the cause is unclear, this sequence resets only the Telegram connection path:

1. Generate a replacement token for the same bot in `@BotFather`.
2. Save it with **Update token**.
3. Select **Enable Telegram commands** if offered.
4. Create a new link code.
5. Send it to the bot in a private chat.
6. Confirm **Linked**.
7. Select **Send test**.

This does not change broker credentials or trading configuration.

## Still Not Working?

Open a [GitHub issue](https://github.com/wolfbot-io/wolfbot-community/issues/new/choose) with:

- WolfBot Community version
- Windows or Linux version
- The exact visible error message
- Which step fails: save, enable, link, refresh, or test
- A redacted screenshot
- A short redacted Telegram log excerpt, if available

Never include the bot token or a live `/link` code.
