---
title: "A Weekly Maintenance Routine for Your Self-Hosted Bot"
description: "Self-hosted software needs light maintenance. A 10-minute weekly routine: updates, backups, log review and one honest performance check."
tested_version: "0.1.0-beta.10"
last_updated: "2026-09-06"
platforms: ["windows", "linux"]
category: "academy"
difficulty: "beginner"
estimated_time: "10 minutes"
next_guide: "/docs/updates"
previous_guide: "/docs/backup"
related_guides: ["/docs/backup", "/docs/updates", "/docs/troubleshooting", "/docs/community-status"]
keywords: [
  "trading bot weekly maintenance",
  "self hosted bot update",
  "backup trading bot settings",
  "keep trading bot healthy",
  "wolfbot community updates"
]
sitemap_priority: 0.7
---

# A Weekly Maintenance Routine for Your Self-Hosted Bot

**Tested with WolfBot Community v0.1.0-beta.10** · Last updated: 2026-09-06

## Who this guide is for

- Your bot runs fine most days and you want a *short* weekly habit that keeps
  it that way — without turning maintenance into a part-time job.

## Why weekly, not monthly

A month is a long time in software: releases land, exchange APIs change, and
small issues that were ignored once have become habits. Ten minutes a week
catches those things while they are still small.

## The 10-minute checklist

```text
1. Update        -> check whether a new version is available (see /docs/updates).
2. Backup        -> export settings/config before applying any update.
3. Logs          -> scan for repeated warnings or errors from the last 7 days.
4. Status        -> confirm the process, exchange connections and any external
                    signals are all healthy.
5. Performance   -> compare this week's results with the simulation honestly.
```

## Updating without breaking anything

Self-hosted software is yours to control — use that control carefully:

```text
1. Read the release notes before updating.
2. Back up your current settings first (see /docs/backup).
3. Update when the market is quiet and you can watch the first minutes.
4. Keep the previous version's backup until the new one has run cleanly
   for at least one full trading cycle.
```

The [updates guide](/docs/updates) explains release channels and how to pick a
cadence that matches how much risk you are comfortable taking on a live bot.

## Reading a week of logs in two minutes

You do not need to read every line. Search for the unusual:

```text
- repeated "error" or "timeout" entries,
- a pattern of failed retries that quietly repeats,
- orders whose recorded fills look different from normal.
```

If a warning repeats every day but you have been ignoring it, this is the
moment to look it up in the [troubleshooting guide](/docs/troubleshooting) or
check the [community status page](/docs/community-status) in case it is a known
upstream issue.

## The honest performance check

A weekly review should answer one question: *is reality matching the plan?*
Compare win rate, average loss and drawdown against the simulation you ran
before going live. The [performance guide](/docs/how-to-read-trading-performance)
shows which numbers deserve your attention and which are noise.

## When something looks wrong

Do not leave a suspicious log entry "to check later" — that is how a small bug
becomes a story. Stop the affected strategy, investigate, fix, and restart.
Ten disciplined minutes every week keeps the machine boring, and a boring
machine is a reliable one.
