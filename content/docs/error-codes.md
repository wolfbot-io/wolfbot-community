---
title: "WolfBot Community Error Codes — Quick Fix Reference"
description: "Every WolfBot Community error code explained: WB-WIN-001 to WB-WIN-004 and WB-LNX-001 to WB-LNX-002. Find the exact fix for your installer or startup error."
tested_version: "0.1.0-beta.2"
last_updated: "2026-08-16"
platforms: ["windows", "linux"]
category: "troubleshooting"
difficulty: "beginner"
estimated_time: "3 minutes"
related_guides: ["/docs/troubleshooting", "/install/windows", "/install/linux", "/docs/updates"]
keywords: [
  "wolfbot error codes",
  "WB-WIN-001",
  "WB-LNX-002",
  "wolfbot installer error",
  "wolfbot linux error",
  "wolfbot windows error code"
]
sitemap_priority: 0.80
---

# WolfBot Community Error Codes

**Tested with WolfBot Community v0.1.0-beta.2** · Last updated: 2026-08-16

One code to one fix. Error codes tell you exactly what failed, so you don't
have to guess. Find your code below, apply its fix, then continue with the
[full Troubleshooting Guide](/docs/troubleshooting) if the problem persists.

---

## Quick lookup table

| Error code | Where it happens | One-line fix |
|---|:---:|---|
| [WB-WIN-001](#wb-win-001--insufficient-disk-space) | Windows installer | Free 2 GB of disk space |
| [WB-WIN-002](#wb-win-002--permission-denied) | Windows installer | Run the installer as Administrator |
| [WB-WIN-003](#wb-win-003--corrupt-download) | Windows installer | Re-download and verify the SHA256 checksum |
| [WB-WIN-004](#wb-win-004--missing-dependencies) | Windows first launch | Install the Visual C++ Redistributable |
| [WB-LNX-001](#wb-lnx-001--docker-not-found) | Linux installer | Install Docker, or re-run the installer |
| [WB-LNX-002](#wb-lnx-002--port-conflict) | Linux first launch | Stop whatever is using port 8765 |

---

## Windows error codes

### WB-WIN-001 — Insufficient Disk Space
**Symptom:** Installer fails with "Not enough disk space".

**Fix:** Free at least 2 GB, then retry. Check your `C:` drive free space first.

### WB-WIN-002 — Permission Denied
**Symptom:** "Access denied" during installation.

**Fix:** Right-click the installer and choose **Run as Administrator**.

### WB-WIN-003 — Corrupt Download
**Symptom:** Installer won't start, or fails the integrity check.

**Fix:** Re-download from [community.wolfbot.io/download](https://community.wolfbot.io/download), then verify the SHA256 checksum against the official value before running it. See [How to Verify a Downloaded Trading Bot](/docs/how-to-verify-a-downloaded-trading-bot).

### WB-WIN-004 — Missing Dependencies
**Symptom:** "VCRUNTIME140.dll not found" when WolfBot starts.

**Fix:** Install the [Visual C++ Redistributable](https://aka.ms/vs/17/release/vc_redist.x64.exe), then restart WolfBot.

---

## Linux error codes

### WB-LNX-001 — Docker Not Found
**Symptom:** "Docker is not installed".

**Fix:** `sudo apt-get install docker.io`, or just re-run the installer — it installs and runs Docker for you automatically.

### WB-LNX-002 — Port Conflict
**Symptom:** "Port 8765 already in use".

**Fix:** Find what owns the port with `sudo lsof -i :8765`, stop that service, then restart WolfBot.

---

## Related

- [Full Troubleshooting Guide](/docs/troubleshooting) — network, update, performance and data issues.
- [Install WolfBot on Windows](/install/windows) — the exact Windows setup journey.
- [Install WolfBot on Linux](/install/linux) — Ubuntu/Debian setup and service state.
- [Update & Rollback](/docs/updates) — what to do when an update fails.
- See a code you can't find? [Search GitHub Discussions](https://github.com/wolfbot-io/wolfbot-community/discussions) or [open an issue](https://github.com/wolfbot-io/wolfbot-community/issues/new/choose).
