---
title: "Install WolfBot Community on Windows — Step-by-Step"
description: "How to install WolfBot Community on Windows 10 or Windows 11. Download Setup.exe, install in minutes, and start with Simulation."
tested_version: "0.8.0-beta.2"
last_updated: "2026-08-11"
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
  "free trading software windows"
]
os_tested: ["Windows 11 23H2", "Windows 10 22H2"]
sitemap_priority: 0.9
---

# Install WolfBot Community on Windows

**Tested with WolfBot Community v0.8.0-beta.2** · Last updated: 2026-08-11 · Windows 11 / Windows 10

## Who this guide is for

This guide is for anyone who wants to install WolfBot Community on a Windows 10 or Windows 11 computer. No coding or Docker experience required.

## What you need

- Windows 10 (22H2 or later) or Windows 11 (23H2 or later), 64-bit
- At least 4 GB of free RAM
- At least 2 GB of free disk space
- Internet connection
- Administrator access to install software

> ⚠️ **Antivirus note:** Some antivirus may flag new software. WolfBot Community installers are safe. If your antivirus blocks the installer, add an exception or temporarily pause it.

## Step 1: Download

1. Go to [community.wolfbot.io/download](https://community.wolfbot.io/download)
2. Click **Download for Windows**
3. The file `WolfBot-Setup-{version}-windows-x64.exe` will download

> **Verify the download (optional):** `Get-FileHash .\WolfBot-Setup-*.exe -Algorithm SHA256` in PowerShell; compare with checksum on download page.

## Step 2: Install

1. Double-click the downloaded `WolfBot-Setup-*.exe`
2. If Windows SmartScreen appears, click **More info** → **Run anyway**
3. Follow the setup wizard: choose folder → click **Install**
4. Wait for installation to complete (typically 30–60 seconds)
5. Click **Finish**

## Step 3: Launch WolfBot

1. Double-click the **WolfBot** icon on your desktop (or Start menu)
2. The Setup Wizard appears, guiding you through Simulation mode and dashboard overview

## Expected result

- WolfBot icon in system tray
- Dashboard window opens
- Setup Wizard welcomes you

## Common mistakes

| Mistake | Fix |
|---|---|
| "Windows protected your PC" | Click "More info" → "Run anyway" |
| Installer won't start | Right-click → "Run as Administrator" |
| Antivirus quarantine | Add `C:\Program Files\WolfBot` to exclusions |
| "Missing DLL" error | Install [VC++ Redistributable](https://aka.ms/vs/17/release/vc_redist.x64.exe) |

## Troubleshooting

- **WB-WIN-001:** Insufficient disk space → Free 2 GB
- **WB-WIN-002:** Permission denied → Run as Administrator
- **WB-WIN-003:** Corrupt download → Re-download, verify checksum
- **WB-WIN-004:** Missing dependencies → Install VC++ Redist

See [Troubleshooting Guide](/docs/troubleshooting).

## Next step

> **[Start with Simulation →](/docs/simulation)**
