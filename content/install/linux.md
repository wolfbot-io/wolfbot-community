---
title: "Install WolfBot Community on Ubuntu/Linux — Step-by-Step"
description: "How to install WolfBot Community on Ubuntu 22.04, Ubuntu 24.04, or Debian 12. Download the .deb package and start trading automation."
tested_version: "0.8.0-beta.2"
last_updated: "2026-08-11"
platforms: ["linux"]
category: "install"
difficulty: "beginner"
estimated_time: "5 minutes"
next_guide: "/getting-started"
related_guides: ["/docs/simulation", "/docs/troubleshooting"]
keywords: [
  "install wolfbot linux",
  "wolfbot community ubuntu",
  "crypto bot ubuntu",
  "linux trading bot",
  "self hosted trading bot linux"
]
os_tested: ["Ubuntu 24.04 LTS", "Ubuntu 22.04 LTS", "Debian 12"]
sitemap_priority: 0.9
---

# Install WolfBot Community on Ubuntu/Linux

**Tested with WolfBot Community v0.8.0-beta.2** · Last updated: 2026-08-11 · Ubuntu 24.04 / Ubuntu 22.04 / Debian 12

## Who this guide is for

Anyone who wants to install WolfBot Community on Ubuntu or Debian. The installer handles Docker automatically — no manual setup required.

## What you need

- Ubuntu 22.04 LTS, Ubuntu 24.04 LTS, or Debian 12 (64-bit)
- At least 4 GB RAM, 4 GB disk space
- Internet connection
- `sudo` access

> ℹ️ Docker is installed automatically by the WolfBot installer. No manual Docker setup needed.

## Step 1: Download

1. Go to [community.wolfbot.io/download](https://community.wolfbot.io/download)
2. Click **Download for Linux**
3. File: `WolfBot-Setup-{version}-linux-amd64.deb`

> **Verify:** `sha256sum WolfBot-Setup-*.deb` — compare with checksum on download page.

## Step 2: Install

```bash
cd ~/Downloads
sudo dpkg -i WolfBot-Setup-*.deb
sudo apt-get install -f    # if dependency issues (rare)
```

The installer automatically checks/installs Docker, pulls WolfBot images, and configures services.

## Step 3: Launch

**GUI:** Find **WolfBot** in your application menu → click to launch → Dashboard opens in browser.

**CLI:**
```bash
wolfbot status     # check services
wolfbot start      # start WolfBot
wolfbot open        # open Dashboard
```

Dashboard opens at `http://127.0.0.1:8765`.

## Common issues

| Issue | Solution |
|---|---|
| Docker not found | Installer handles it; or `sudo apt-get install docker.io` |
| Port in use | `sudo lsof -i :8765`, stop conflicting service |
| Permission denied | Use `sudo dpkg -i` |
| Dependency error | `sudo apt-get install -f` |

## Troubleshooting

```bash
wolfbot logs       # view logs
wolfbot restart    # restart services
wolfbot setup      # re-run setup
```

See [Troubleshooting Guide](/docs/troubleshooting).

## Uninstall

```bash
sudo dpkg -r wolfbot-community
rm -rf ~/.wolfbot    # optionally remove data
```

## Next step

> **[Start with Simulation →](/docs/simulation)**
