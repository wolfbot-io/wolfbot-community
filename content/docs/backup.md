---
title: "WolfBot Community Backup & Restore — Data Protection Guide"
description: "How to backup and restore WolfBot Community — protect your unified platform configuration and trading data."
tested_version: "0.8.0-beta.2"
last_updated: "2026-08-11"
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

**Tested with WolfBot Community v0.8.0-beta.2** · Last updated: 2026-08-11

## Why Backup?

WolfBot stores your configuration locally: broker API connections, strategy settings, risk parameters, bot configurations, and trading preferences. A backup protects days or weeks of setup work.

---

## Automatic Backup (Recommended)

WolfBot automatically creates snapshots:
- After any configuration change
- Before applying an update
- Daily at midnight

**Storage locations:**
- Windows: `C:\Users\<You>\AppData\Local\WolfBot\backups\`
- Linux: `~/.wolfbot/backups/`

---

## Manual Backup

### Via Dashboard
1. Go to **Settings → Backup & Restore**
2. Click **Create Backup** → enter a name → **Create**

### Via CLI (Linux)
```bash
wolfbot backup create "before-weekend"
wolfbot backup list
```

### Backup File Format
```
wolfbot-backup-2026-08-11-v0.8.0-beta.2.wbbackup
```
This is an encrypted, compressed archive.

---

## Restore from Backup

### Via Dashboard
1. Settings → Backup & Restore → find the backup → **Restore**
2. Confirm: "This will replace current configuration"
3. WolfBot restarts with restored settings

### Via CLI
```bash
wolfbot backup restore wolfbot-backup-2026-08-11-v0.8.0-beta.2.wbbackup
```

### Import External Backup
1. Copy `.wbbackup` file to your machine
2. Settings → Backup & Restore → **Import Backup**
3. Select file → verify → **Restore**

---

## What Gets Backed Up

| Data | Included? | Notes |
|---|---|---|
| API connections | ✅ | Encrypted |
| Strategy configs | ✅ | All bot settings |
| Risk parameters | ✅ | Your guardrails |
| Trading history | ✅ | Past orders |
| Dashboard layout | ✅ | UI preferences |
| Exchange credentials | ❌ | Never exported in plain text |

Because API secrets are never exported, you'll need to re-enter them after restoring to a new machine.

---

## Best Practices

- **Before major changes:** Create a named manual backup
- **External storage:** Copy important backups to cloud storage (encrypted, safe anywhere)
- **Retention:** Keep last 7 automatic + all manual backups

---

## Migrating to a New Machine

1. Create a manual backup on old machine
2. Copy `.wbbackup` to new machine
3. Install WolfBot Community on new machine
4. Import backup → re-enter API keys → verify settings

---

## Troubleshooting

| Issue | Solution |
|---|---|
| "Backup creation failed" | Check disk space |
| "Restore failed — version mismatch" | Update to same version first |
| "Backup file corrupted" | Try an earlier backup |

---

## Next step

> **[Troubleshooting Guide →](/docs/troubleshooting)**
