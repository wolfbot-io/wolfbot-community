---
title: "WolfBot Community Troubleshooting — Common Problems & Solutions"
description: "Fix common WolfBot Community issues. Installation errors, market connection problems, update failures, and error codes."
tested_version: "0.8.0-beta.2"
last_updated: "2026-08-11"
platforms: ["windows", "linux"]
category: "troubleshooting"
difficulty: "intermediate"
estimated_time: "5 minutes"
related_guides: ["/install/windows", "/install/linux", "/docs/updates", "/brokers/api-key-guide"]
keywords: ["wolfbot troubleshooting", "wolfbot error codes", "fix wolfbot", "wolfbot installation error", "wolfbot connection problem"]
sitemap_priority: 0.80
---

# Troubleshooting Guide

**Tested with WolfBot Community v0.8.0-beta.2** · Last updated: 2026-08-11

## Quick Diagnostic

Run the built-in diagnostic tool:

**Windows:** Settings → About → **Run Diagnostics**

**Linux:** `wolfbot doctor`

It checks: installation integrity, service status, network, broker connections.

---

## Installation Errors

### WB-WIN-001 — Insufficient Disk Space
**Symptom:** Installer fails with "Not enough disk space"

**Fix:** Free at least 2 GB. Check `C:` drive space.

### WB-WIN-002 — Permission Denied
**Symptom:** "Access denied" during installation

**Fix:** Right-click installer → **Run as Administrator**

### WB-WIN-003 — Corrupt Download
**Symptom:** Installer won't start or fails integrity check

**Fix:** Re-download from [community.wolfbot.io/download](https://community.wolfbot.io/download). Verify SHA256 checksum.

### WB-WIN-004 — Missing Dependencies
**Symptom:** "VCRUNTIME140.dll not found"

**Fix:** Install [Visual C++ Redistributable](https://aka.ms/vs/17/release/vc_redist.x64.exe)

### WB-LNX-001 — Docker Not Found
**Symptom:** "Docker is not installed"

**Fix:** `sudo apt-get install docker.io` or re-run installer which handles it automatically.

### WB-LNX-002 — Port Conflict
**Symptom:** "Port 8765 already in use"

**Fix:** `sudo lsof -i :8765` → stop conflicting service → restart WolfBot

---

## Connection Issues

### Broker Connection Failed
1. Verify API key is still valid (not expired)
2. Check API permissions: Trade ✅, Withdrawal ❌
3. If IP-restricted: confirm your IP matches
4. Test exchange API status page
5. For MT5: ensure MT5 terminal is running and logged in
6. Regenerate key and re-add

### "Connection Refused"
- Check internet connection
- Verify exchange isn't geo-blocked in your region
- Try with VPN if needed

### "Rate Limit Exceeded"
WolfBot handles this automatically. If persistent, reduce bot frequency.

---

## Update Issues

| Problem | Solution |
|---|---|
| Update check fails | Check internet; firewall might block update server |
| Signature verification fails | Download manually from [download page](/download) |
| Update stuck | Restart WolfBot and retry |
| After update, WolfBot won't start | Rollback to previous version in Settings → Updates |

---

## Performance Issues

### High CPU Usage
- Reduce number of active trading pairs
- Increase bot interval (e.g., 5min → 15min)
- Close unused Dashboard tabs

### High Memory Usage
- Restart WolfBot (memory leak if running >7 days)
- Reduce number of simultaneous strategies

### Slow Dashboard
- Use a modern browser (Chrome, Edge, Firefox)
- Clear browser cache
- Reduce Dashboard widgets

---

## Data & Configuration

### Lost Configuration
1. Check **Settings → Backup & Restore**
2. Restore from latest automatic backup
3. If no backup: reconfigure manually

### Database Corruption
```bash
# Linux
wolfbot repair-db

# Windows
# Settings → Advanced → Repair Database
```

---

## Logs

Find detailed logs for debugging:

**Windows:** `C:\Program Files\WolfBot\logs\`

**Linux:** `~/.wolfbot/logs/` or `wolfbot logs`

When reporting issues on [GitHub](https://github.com/wolfbot-io/wolfbot-community/issues), attach relevant log excerpts (redact API keys).

---

## Still Having Issues?

1. Search [GitHub Discussions](https://github.com/wolfbot-io/wolfbot-community/discussions)
2. Check [GitHub Issues](https://github.com/wolfbot-io/wolfbot-community/issues)
3. Open a [new issue](https://github.com/wolfbot-io/wolfbot-community/issues/new/choose) with:
   - WolfBot version
   - OS and version
   - Error code or message
   - Steps to reproduce

> ⚠️ Never share API keys, secret keys, or passwords.
