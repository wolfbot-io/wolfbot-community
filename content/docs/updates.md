---
title: "WolfBot Community Update Guide — Auto-Update & Channels"
description: "How WolfBot Community updates work. Stable, Beta, and Dev Preview channels. Keep your unified platform current."
tested_version: "0.1.0-p12-ghcr-rc17"
last_updated: "2026-08-12"
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

**Tested with WolfBot Community v0.1.0-p12-ghcr-rc17** · Last updated: 2026-08-12

## How Updates Work

WolfBot Community ships on channels — which release you download decides how fresh (and how tested) your build is.

| Channel | Description | Update Frequency | Risk Level |
|---|---|---|---|
| **Stable** | Production-ready | Monthly milestones | Lowest |
| **Beta** | Broad testing | Every 1–2 weeks | Low |
| **Dev Preview** | Latest features | Several per week | Medium |

See [Release Channels Explained →](/releases/channels)

---

## Updating

### Windows

1. Go to [community.wolfbot.io/download](https://community.wolfbot.io/download)
2. Download the latest Setup.exe

   > ℹ️ **Availability:** the first public release ships the Linux installer;
   > the Windows installer is documented ahead of its follow-up release. When a
   > Windows build is published, download it here and run the installer — it
   > upgrades in place and keeps your data, accounts and settings. Check the
   > [download page](/download) for current status. There is no Windows build in
   > this release yet.

### Linux

Every install includes a signed updater, run from a terminal:

```bash
# Check what's currently installed
/opt/wolfbot/launcher/wolfbot-updater.sh check

# Apply a specific release (see community.wolfbot.io/releases for manifest links)
/opt/wolfbot/launcher/wolfbot-updater.sh apply <release-manifest-url>
```

The updater verifies the new release's signature before pulling anything, and stops your current stack only after the new one has been staged.

> ℹ️ There's no in-app "update available" popup today — check [GitHub Releases](https://github.com/wolfbot-io/wolfbot-community/releases) or run the check command above to see what's current.

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

## Choosing a Channel

There's no in-app channel switch — you choose a channel by which release you download. Grab a Beta or Dev Preview build directly from [GitHub Releases](https://github.com/wolfbot-io/wolfbot-community/releases) instead of the Stable link on the download page when you want to try newer features.

> ⚠️ Dev Preview builds may contain incomplete features — expect rougher edges than Stable.

---

## Rollback

If an update causes issues:

**Linux:**
```bash
/opt/wolfbot/launcher/wolfbot-updater.sh rollback
```
This restores the previous release's manifest and restarts the stack on it.

**Windows:** once a Windows build is available, download and reinstall the previous version's Setup.exe from [GitHub Releases](https://github.com/wolfbot-io/wolfbot-community/releases) — installing over the current version upgrades or downgrades in place either way.

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
| Update stuck partway | Re-run the updater command, or reinstall from a fresh download |

---

## Next step

> **[Backup & Restore Guide →](/docs/backup)**
