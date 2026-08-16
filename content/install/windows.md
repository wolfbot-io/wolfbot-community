---
title: "Install WolfBot Community on Windows — Step-by-Step"
description: "How to install WolfBot Community on Windows 10 or Windows 11. Download Setup.exe, install in minutes, and start trading across crypto and MT5 markets."
tested_version: "0.1.0-p12-ghcr-rc8"
last_updated: "2026-08-12"
platforms: ["windows"]
category: "install"
difficulty: "beginner"
estimated_time: "5 minutes"
next_guide: "/getting-started"
related_guides: ["/docs/simulation", "/docs/troubleshooting"]
keywords: [
  "install wolfbot windows",
  "wolfbot community windows setup",
  "crypto trading bot windows",
  "trading bot windows 11",
  "windows trading platform"
]
os_tested: []
sitemap_priority: 0.9
---

# Install WolfBot Community on Windows

**Tested with WolfBot Community v0.1.0-p12-ghcr-rc8** · Last updated: 2026-08-12 · See availability note below

> ℹ️ **Availability:** the first public release (v0.1.0-p12-ghcr-rc8) ships the Linux installer. The Windows installer is documented here ahead of its follow-up release — check the [download page](/download) for the current status, and this guide will walk you through it the moment it's available.

## Who this guide is for

This guide is for anyone who wants to install WolfBot Community on a Windows 10 or Windows 11 computer. No coding or Docker experience required. After installation, you'll have a unified trading platform for crypto exchanges and MT5 brokers — one interface, every market.

## What you need

- Windows 10 (22H2 or later) or Windows 11 (23H2 or later), 64-bit
- At least 4 GB of free RAM
- At least 2 GB of free disk space
- Internet connection
- Administrator access to install software

> ⚠️ **Antivirus note:** Public-preview self-hosted installers are often not yet
> code-signed, so Windows SmartScreen and some antivirus tools may warn that the
> publisher is unknown. That warning alone doesn't mean the file is unsafe —
> verify the file before allowing it: download only from the official
> [community.wolfbot.io/download](https://community.wolfbot.io/download) or the
> wolfbot-io GitHub Releases page, and compare the SHA256 checksum shown on the
> download page (see "verify your download" below) with what you got. Only
> bypass SmartScreen for a build you've downloaded from those two official
> sources. When future stable releases are properly signed, SmartScreen will
> not prompt in the same way.

## Step 1: Download

1. Go to [community.wolfbot.io/download](https://community.wolfbot.io/download)
2. Click **Download for Windows**
3. The file `WolfBot-Setup-{version}-windows-x64.exe` will download

## Step 2: Install

1. Double-click the downloaded `WolfBot-Setup-*.exe`
2. If Windows SmartScreen shows "Windows protected your PC", first confirm you
   downloaded from an official source and the checksum matches the download
   page (see "verify your download" below). If so, click **More info** →
   **Run anyway**
3. Follow the setup wizard: choose folder → click **Install**
4. Wait for installation to complete (typically 30–60 seconds)
5. Click **Finish**

## Step 3: Launch WolfBot

1. Double-click the **WolfBot** icon on your desktop (or Start menu)
2. WolfBot opens to the Dashboard — no exchange account is connected yet, so there's nothing to configure before you explore

## Expected result

- WolfBot icon in system tray
- Dashboard window opens
- The Dashboard's Capability Status page shows which brokers you can connect

## Common mistakes

| Mistake | Fix |
|---|---|
| "Windows protected your PC" | Verify the checksum against the official download page, then "More info" → "Run anyway" |
| Installer won't start | Right-click → "Run as Administrator" |
| Antivirus quarantine | Confirm you downloaded from the official download page or wolfbot-io GitHub, verify the checksum, then add `C:\Program Files\WolfBot` to exclusions |
| "Missing DLL" error | Install [Microsoft Visual C++ Redistributable](https://aka.ms/vs/17/release/vc_redist.x64.exe) — a small, free Microsoft component many Windows apps need; safe to install |

## Troubleshooting

- **WB-WIN-001:** Insufficient disk space → Free 2 GB
- **WB-WIN-002:** Permission denied → Run as Administrator
- **WB-WIN-003:** Corrupt download → Re-download, verify checksum
- **WB-WIN-004:** Missing dependencies → Install VC++ Redist

See [Troubleshooting Guide](/docs/troubleshooting).

## Advanced: verify your download (optional)

If you want to double-check the file wasn't corrupted or tampered with,
open PowerShell and run:

```powershell
Get-FileHash .\WolfBot-Setup-*.exe -Algorithm SHA256
```

Compare the result with the SHA256 checksum shown on the
[download page](https://community.wolfbot.io/download). This step is
optional — most people can skip it.

## Next step

> **[Start with Simulation →](/docs/simulation)**
