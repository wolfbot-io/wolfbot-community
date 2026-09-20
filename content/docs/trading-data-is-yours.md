---
title: "Your Trading Data Is Yours: Logs, Results and Backups on WolfBot"
description: "Cloud bots store your trading history on their servers. WolfBot Community keeps logs, results and backups under your control — and exportable."
tested_version: "0.1.0-beta.10"
last_updated: "2026-09-06"
platforms: ["windows", "linux"]
category: "academy"
difficulty: "intermediate"
estimated_time: "6 minutes"
related_guides: ["/docs/backup", "/docs/how-to-read-trading-performance", "/docs/reading-bot-logs-like-an-operator", "/docs/why-verifiable-results-matter"]
keywords: ["own trading data", "trading bot logs ownership", "self hosted bot backup", "export trading history", "WolfBot data ownership"]
sitemap_priority: 0.7
---

# Your Trading Data Is Yours: Logs, Results and Backups on WolfBot

**Tested with WolfBot Community v0.1.0-beta.10** · Last updated: 2026-09-06

## Who this guide is for

- You want to know where your trading history lives and who can read it.
- You are comparing a cloud bot service with a self-hosted platform and want
  to add "data ownership" to the decision — not just features and price.

## Where your data lives decides who owns it

With a cloud bot, your orders, settings and performance history are stored by
the vendor. You usually access them through the vendor's interface, under the
vendor's terms, and you depend on the vendor's export tools if you ever want
them elsewhere.

With **WolfBot Community**, the platform runs on your machine or VPS. That
means the raw material of your trading life — configuration, logs, order
history and results — lives in a place you control:

```text
- you can back it up whenever you choose,
- you can read it with your own tools,
- you can keep it after any subscription decision,
- nothing disappears because a third party changed a plan or policy.
```

## The three layers of data worth protecting

### 1. Configuration

Your exchange connections, strategy settings, risk limits and symbol mappings
represent real work. The [backup guide](/docs/backup) shows how to export them
so a disk failure or a migration to a new VPS never means rebuilding from
memory.

### 2. Logs

Every order decision leaves a trace — this is how you audit the machine after
a strange fill or a bad week. Because logs live on your host, they are yours
to search, keep or delete. See
[reading logs like an operator](/docs/reading-bot-logs-like-an-operator).

### 3. Results and performance history

Verifiable results are the foundation of honest trading decisions — see
[why verifiable results matter](/docs/why-verifiable-results-matter). When the
data is on your side of the fence, you can re-check any number months later
instead of trusting a dashboard that could reset or change.

## What "portable" means in practice

Owning data is most useful when you can do something with it:

```text
- Export results to your own spreadsheet for deeper analysis.
- Keep a record that survives platform or host changes.
- Compare behaviour between simulation and live over time.
- Audit a past decision with the original logs beside it.
```

If a platform cannot give you those four things, you are renting your trading
history, not owning it.

## The honest trade-off

Owning the data means you are responsible for it: backups, disk health and
access security are your job. WolfBot turns that job into a checklist
([backup](/docs/backup), [security](/security), weekly maintenance), which is
the price of not depending on someone else's server for your memory.

## The bottom line

Ask every bot platform one question: "Where does my trading history live, and
can I take it with me?" WolfBot Community's answer is the one most traders
would choose if they thought about it: on your hardware, under your control,
backed up by your own routine — and yours to keep.
