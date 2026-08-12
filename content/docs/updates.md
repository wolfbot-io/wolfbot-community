---
title: "WolfBot Community Update Guide — Auto-Update & Channels"
description: "How WolfBot Community updates work. Stable, Beta, and Dev Preview channels. Keep your unified platform current."
tested_version: "0.1.0-p12-ghcr-rc8"
last_updated: "2026-08-11"
platforms: ["windows", "linux"]
category: "updates"
difficulty: "beginner"
estimated_time: "5 minutes"
next_guide: "/docs/backup"
related_guides: ["/docs/backup", "/releases/channels", "/docs/troubleshooting"]
keywords: ["wolfbot update", "wolfbot auto update", "wolfbot release channels", "update trading bot", "wolfbot update channels"]
sitemap_priority: 0.80
---

# Update WolfBot Community

**Tested with WolfBot Community v0.1.0-p12-ghcr-rc8** · Last updated: 2026-08-11

## How Updates Work

WolfBot Community uses channel-based updates with automatic notifications.

| Channel | Description | Update Frequency | Risk Level |
|---|---|---|---|
| **Stable** | Production-ready | Monthly milestones | Lowest |
| **Beta** | Broad testing | Every 1–2 weeks | Low |
| **Dev Preview** | Latest features | Several per week | Medium |

See [Release Channels Explained →](/releases/channels)

---

## Automatic Updates

When a new version is available:
1. A notification appears: "New version available"
2. Click **Update Now** or schedule for later
3. WolfBot downloads the signed update
4. The installer runs (upgrades in-place)
5. WolfBot restarts with the new version

**Linux CLI:**
```bash
wolfbot update check
wolfbot update apply
```

---

## Manual Update

### Windows
1. Go to [community.wolfbot.io/download](https://community.wolfbot.io/download)
2. Download the latest Setup.exe
3. Run the installer (upgrades in-place, preserves data)

### Linux
```bash
wget https://community.wolfbot.io/download/latest-linux
sudo dpkg -i WolfBot-Setup-*.deb
```

---

## Before Updating

1. **Backup your configuration** — See [Backup Guide →](/docs/backup)
2. **Read release notes** — [community.wolfbot.io/releases](/releases)
3. **Check known issues** — Listed in each release

### What Gets Preserved
- ✅ API keys and broker connections
- ✅ Strategy configurations and risk settings
- ✅ Trading history and bot configurations

---

## Changing Your Channel

1. Go to **Settings → Updates → Release Channel**
2. Select: **Stable** (live trading), **Beta** (new features), or **Dev Preview** (latest)
3. Click **Save**

> ⚠️ Dev Preview shows a warning: "May contain incomplete features."

---

## Rollback

If an update causes issues:

**Windows:** Settings → Updates → Previous Versions → Rollback

**Linux:** `wolfbot update rollback`

Or download previous version from [GitHub Releases](https://github.com/wolfbot-io/wolfbot-community/releases).

---

## Update Security

- All updates are cryptographically signed
- WolfBot verifies signatures before applying
- Checksums published for manual verification

---

## Common Issues

| Issue | Solution |
|---|---|
| "Update check failed" | Check internet connection |
| "Signature verification failed" | Download manually from website |
| "Update stuck" | Restart WolfBot and retry |

---

## Next step

> **[Backup & Restore Guide →](/docs/backup)**
