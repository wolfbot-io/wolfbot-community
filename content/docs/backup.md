---
title: "WolfBot Community Backup & Restore — Data Protection Guide"
description: "How to backup and restore WolfBot Community — protect your unified platform configuration and trading data."
tested_version: "0.1.0-p12-ghcr-rc20"
last_updated: "2026-08-12"
platforms: ["windows", "linux"]
category: "backup"
difficulty: "beginner"
estimated_time: "5 minutes"
next_guide: "/docs/troubleshooting"
previous_guide: "/docs/updates"
related_guides: ["/docs/updates", "/docs/troubleshooting"]
keywords: ["wolfbot backup", "wolfbot restore", "backup trading bot", "trading bot data protection", "wolfbot unified platform backup"]
sitemap_priority: 0.80
---

# Backup & Restore Guide

**Tested with WolfBot Community v0.1.0-p12-ghcr-rc20** · Last updated: 2026-08-12

## Why Backup?

WolfBot stores your configuration locally: broker API connections, strategy settings, risk parameters, bot configurations, and trading preferences. A backup protects days or weeks of setup work.

---

## Backup (Linux)

Backups run from a terminal, and default to a **dry run** — they show you what would be backed up without writing anything, until you add `--execute`:

```bash
# See what a backup would include, without writing anything
wolfbot backup --install-root /opt/wolfbot --data-root /var/lib/wolfbot

# Actually write the backup archive
wolfbot backup --install-root /opt/wolfbot --data-root /var/lib/wolfbot --execute
```

Add `--label "before-weekend"` to tag a backup with a name you'll recognize later. The resulting archive is written with restricted file permissions (readable only by your own user account) alongside a receipt describing what it contains.

> Run `wolfbot backup --help` for the full, current list of options — flags can change between releases.

### Windows

A dedicated backup command isn't available yet on Windows — for now, the safest option is copying your WolfBot data folder somewhere safe before a major change (see [Troubleshooting](/docs/troubleshooting) if you're not sure where that is).

---

## Restore from Backup

```bash
wolfbot restore-backup --install-root /opt/wolfbot --data-root /var/lib/wolfbot --backup <path-to-archive>
```

Like backup, this defaults to a dry run so you can see what would change before committing with `--execute`. Use `wolfbot inspect-backup <path-to-archive>` first if you just want to check what's inside an archive without restoring anything.

---

## What Gets Backed Up

Your configuration, strategy settings, risk parameters and trading history live in WolfBot's data directory and are included in a backup. Broker API secrets are handled carefully — check the output of `wolfbot backup` (even in dry-run) if you need to confirm exactly what a given release includes before relying on it for a machine migration.

---

## Migrating to a New Machine

1. Create a backup on the old machine (`wolfbot backup ... --execute`)
2. Copy the resulting archive to the new machine
3. Install WolfBot Community on the new machine
4. Restore the archive (`wolfbot restore-backup ...`), then verify your accounts and settings — re-enter any API keys that didn't carry over

---

## Troubleshooting

| Issue | Solution |
|---|---|
| "Backup creation failed" | Check disk space and that `--install-root`/`--data-root` point at your real WolfBot paths |
| Restore looks wrong after a version change | Update WolfBot to the same version the backup was taken on first, then retry |
| Not sure a backup succeeded | Run `wolfbot inspect-backup <path>` to check its contents before you need it |

---

## Next step

> **[Troubleshooting Guide →](/docs/troubleshooting)**
