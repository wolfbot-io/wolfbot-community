---
title: "Install WolfBot Community on Windows — Step-by-Step"
description: "How to install WolfBot Community on Windows 10 or Windows 11. Download one installer, click Install, and WolfBot sets up everything itself, then opens like a normal app."
tested_version: "0.1.0-beta.20"
last_updated: "2026-11-14"
platforms: ["windows"]
category: "install"
difficulty: "beginner"
estimated_time: "30-60 minutes"
next_guide: "/getting-started"
related_guides: ["/docs/simulation", "/docs/troubleshooting", "/docs/error-codes"]
keywords: [
  "install wolfbot windows",
  "wolfbot community windows setup",
  "crypto trading bot windows",
  "trading bot windows 11",
  "windows trading platform"
]
os_tested: ["Windows 11 Home"]
sitemap_priority: 0.9
---

# Install WolfBot Community on Windows

**Tested with WolfBot Community v0.1.0-beta.20** · Last updated: 2026-11-14

> ⚠️ **Public beta — not code-signed yet.** Windows SmartScreen will show
> "Windows protected your PC" because the installer is not signed by a
> certificate authority yet. That warning alone doesn't mean the file is unsafe.
> Download only from the official [community.wolfbot.io/download](https://community.wolfbot.io/download)
> page or the wolfbot-io GitHub Releases page, compare the SHA256 checksum
> (see "Verify your download" below), then choose **More info → Run anyway**.
>
> **What has and has not been tested yet:** this beta was tested end to end on Windows 11
> Home. The restart-and-continue flow on a brand-new PC, Windows 10, in-place updates and
> the tray update notice have not been tested on clean machines yet, so please report
> anything unexpected on the [GitHub Discussions](https://github.com/wolfbot-io/wolfbot-community/discussions).

## Who this guide is for

Anyone who wants to run WolfBot Community on a Windows 10 or Windows 11 PC.
No coding, Docker or Linux knowledge is needed: you click **Install**, wait, and
WolfBot opens like a normal app. Windows uses the **same WolfBot as Linux** (same
signed components, same features).

## What you need

- Windows 11 (tested) or Windows 10 22H2 or later (expected to work, not tested yet), 64-bit
- **Virtualization turned on** in your computer's BIOS/UEFI (most PCs have it on; see "Common problems")
- At least **8 GB of RAM** (16 GB recommended)
- **At least 50 GB of free disk space** on the drive you choose. WolfBot keeps a private environment there; this beta downloads every translation tier, and a later release will need much less
- An internet connection (the first install downloads roughly 30–35 GB in this beta)
- Administrator access to install

You do **not** need to install Docker, WSL or Ollama yourself. The installer
prepares them inside its own private environment and does not touch other
programs or virtual machines you already use.

## Important: WolfBot only trades while your PC is on

WolfBot runs on your computer, so it works only while the PC is **on and awake**.
It pauses when Windows goes to **Sleep or Hibernate**, when you **shut down** or
**sign out**, and after a Windows restart until someone signs in. While paused it
cannot open new trades, adjust trailing stops or monitor positions. Orders and
TP/SL already placed on your exchange stay there.

What you can do (your choice — WolfBot never changes your settings): in
**Settings → System → Power & battery → Screen and sleep**, set **Sleep** to
**Never** while plugged in. On a laptop, also check what closing the lid does.
Prefer a PC that stays on, or turn on automatic sign-in so WolfBot resumes after
a restart.

## Step 1: Download

1. Go to [community.wolfbot.io/download](https://community.wolfbot.io/download)
2. Click **Download for Windows**
3. The file `WolfBot-Setup-{version}-windows-amd64.exe` downloads (about 87 MB)

## Step 2: Install

1. Double-click the downloaded file.
2. If SmartScreen shows "Windows protected your PC", first confirm you
   downloaded from an official source and the checksum matches, then click
   **More info → Run anyway**.
3. Click **Yes** when Windows asks for administrator permission.
4. Read the welcome page, then choose where to install. WolfBot suggests a drive
   with enough free space. Click **Install**.
5. Wait while the progress bar moves. The longest step is downloading WolfBot
   components (about 15–40 minutes depending on your internet). You can keep using your
   computer.
6. If Windows asks to **restart once**, allow it. **Setup continues by itself**
   after you sign in again — you don't need to do anything.
7. When you see "WolfBot is ready", click **Open WolfBot now** (or **Finish**).

### If your PC cannot run the recommended edition

The recommended installer runs WolfBot in a private Linux environment (WSL2 + Docker), the same
signed components as the Linux version. Some PCs cannot run that — for example virtualization is
turned off in the BIOS or blocked by a company policy, or there is too little free disk space.
In those cases setup does **not** stop with an error: it automatically downloads and installs the
older **Windows "Native" edition** instead (about 590 MB, checked against a fixed SHA256 before it
runs), and tells you at the end that it installed in compatibility mode.

- You do not choose this and you do not need to download the Native file yourself — please do not
  pick `WolfBot-Setup-0.1.0-beta.15-windows-x64.exe` from the releases page unless the installer asks.
- Setup only does this for hardware or policy reasons. If the problem is something you can fix
  (a busy port, no internet, a non-NTFS drive), it tells you what to change instead.
- The Native edition is older (it lacks some fixes from newer releases) and cannot be upgraded to
  the recommended edition automatically yet. If you later fix the cause (for example enable
  virtualization), uninstall WolfBot and run the installer again.
- Uninstalling works the same way from Windows "Installed apps".

## Step 3: Use WolfBot

- Open **WolfBot** from the Desktop or Start Menu. It opens in its own window — you
  never have to type a web address.
- A **tray icon** (near the clock) shows the status: green = running, amber =
  starting, red = stopped. Right-click it to Open, Start, Restart or Stop WolfBot,
  or to read when WolfBot pauses.
- On first run the Dashboard asks you to set up; no exchange account is connected
  yet, so there is nothing to risk while you explore.

## Updating

When a newer version is available, the tray icon shows a notification. Choose the
update item, and the installer upgrades WolfBot in place, keeping your data. During
an update WolfBot is unavailable for a few minutes.

## Uninstalling

**Settings → Apps → WolfBot → Uninstall.** By default your data (accounts, API
keys, settings, history) is **kept** so you can reinstall later and continue. You
are only asked about permanently deleting it if you choose not to keep it, and then
you can save a copy to Documents first.

## Common problems

| Problem | What to do |
|---|---|
| "Virtualization is turned off" | Restart, open BIOS/UEFI (usually F2 or Del), turn on **Intel VT-x** or **AMD-V / SVM**, then run setup again. Nothing was changed on your PC. |
| "WolfBot is already installed or running… uses the same network ports" | Close or uninstall the other program or the older WolfBot (the previous Windows "Native" build cannot run together with this one), then run setup again. |
| Not enough memory or disk space | Free space or choose another drive on the install page (8 GB RAM and 45 GB free are required; 50 GB or more is recommended). |
| Your organization blocks "Windows Subsystem for Linux" | Ask your IT administrator to allow it. |
| Setup stops with an error | Run the installer again — it continues where it stopped. Details are saved in `C:\ProgramData\WolfBot\wsl\install.log`. |
| Windows SmartScreen warning | Expected for this unsigned beta. Verify the checksum, then **More info → Run anyway**. |
| WolfBot stopped after sleep or restart | Open WolfBot from the Start Menu; it starts again by itself. See the sleep note above. |

## Troubleshooting

- **WB-WIN-001:** Insufficient disk space → free at least 45 GB or pick another drive
- **WB-WIN-002:** Permission denied → accept the administrator prompt
- **WB-WIN-003:** Corrupt download → re-download and verify the checksum
- **WB-WIN-004:** Virtualization off or Windows feature blocked → see "Common problems"

See [Troubleshooting Guide](/docs/troubleshooting).

## Verify your download

Open PowerShell and run:

```powershell
Get-FileHash .\WolfBot-Setup-*-windows-amd64.exe -Algorithm SHA256
```

Compare the result with the SHA256 checksum on the
[download page](https://community.wolfbot.io/download). If it differs, do not run
the file and download it again from the official page.

## Next step

> **[Start with Simulation →](/docs/simulation)**
