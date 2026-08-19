---
title: "Run WolfBot Community 24/7 on a VPS — Self-Hosted Trading on Your Own Server"
description: "Run WolfBot Community around the clock on an Ubuntu VPS. Install the .deb, keep your dashboard private with an SSH tunnel, back up on the server, and trade non-custodially."
tested_version: "0.1.0-p12-ghcr-rc19"
last_updated: "2026-08-14"
platforms: ["linux"]
category: "install"
difficulty: "intermediate"
estimated_time: "15 minutes"
next_guide: "/getting-started"
related_guides: ["/install/linux", "/docs/backup", "/docs/updates", "/security"]
keywords: [
  "self hosted trading bot",
  "trading bot on my own server",
  "run trading bot 24/7",
  "wolfbot vps",
  "crypto bot server",
  "linux trading bot vps"
]
sitemap_priority: 0.85
---

# Run WolfBot Community 24/7 on a VPS

**Tested with WolfBot Community v0.1.0-p12-ghcr-rc19** · Last updated: 2026-08-14 · Ubuntu 22.04 / 24.04

## Who this guide is for

Two kinds of readers get value here:

- **If you just want your bots running around the clock** — so you never miss a
  trade while your computer is off — follow the steps below in order. Every
  command is copy-paste, and you don't need to understand the machinery to get
  the result.
- **If you're comfortable with servers** and want to know *why* each step is
  done this way (loopback-only dashboard, SSH tunnel), the notes explain the
  reasoning without getting in your way.

In short: this guide puts your WolfBot Community on a small always-on Linux
server (a VPS) so it keeps trading overnight — your strategies, settings and
accounts stay exactly as you left them, and your bots keep working even when
your personal computer is off.

## What you need

- An Ubuntu 22.04 LTS or 24.04 LTS VPS (any mainstream provider works —
  Hetzner, DigitalOcean, Vultr, Linode, AWS Lightsail, etc.)
- At least 4 GB RAM and 4 GB disk space
- The ability to open a terminal and SSH into your server
- 15 minutes

> ℹ️ WolfBot Community runs in Docker. The installer sets Docker up for you
> automatically, exactly like on a desktop Linux install.

## Step 1: Get your VPS and connect

1. Create an Ubuntu 22.04/24.04 server with at least 4 GB RAM
2. Connect over SSH (most providers give you this command on their page):

```bash
ssh your-user@your-server-ip
```

## Step 2: Install WolfBot Community (same as desktop)

Follow the exact [Linux install guide](/install/linux) — the steps are
identical on a server:

1. Download the `.deb` from [community.wolfbot.io/download](https://community.wolfbot.io/download)
2. Install it (on a headless server you'll use the terminal form):

```bash
sudo apt install ./WolfBot-Setup-linux-amd64.deb
```

3. Start WolfBot and check it's healthy:

```bash
wolfbot start
wolfbot status
```

## Step 3: Reach the dashboard safely (SSH tunnel)

WolfBot Community binds its dashboard to your server's **loopback address
(127.0.0.1) only** — this is deliberate: it means the trading dashboard is
never exposed to the public internet by default. On your own computer at home,
the browser opens it directly. On a VPS, you reach it through an encrypted SSH
tunnel instead:

```bash
ssh -L 8080:127.0.0.1:8080 your-user@your-server-ip
```

Then open **http://localhost:8080** in your browser. The tunnel forwards your
local port 8080 to the dashboard on the server, over SSH — no open ports, no
public URL, nothing to firewall.

> 🔎 **For technical readers:** WolfBot Community's services bind to
> `127.0.0.1` (loopback) by design — control-api on `8765`, gateway on `8766`,
> and the dashboard on `8080`. Loopback-only means the trading surface is never
> reachable from the internet, so an SSH tunnel is the correct (and simplest)
> way to reach it remotely rather than exposing a public port.

> ⚠️ Do **not** open the dashboard to the public internet. Keep it on
> loopback and use the SSH tunnel. The dashboard controls real trading, so it
> should stay private.

## Step 4: Back up on the server

Your VPS is where your configuration now lives, so back it up there:

```bash
wolfbot backup --install-root /opt/wolfbot --data-root /var/lib/wolfbot --execute
```

Then copy the archive off the server for safekeeping. See the
[Backup & Restore guide](/docs/backup) for the full flow.

## Step 5: Keep it updated

On the server, updates run through the signed updater:

```bash
/opt/wolfbot/launcher/wolfbot-updater.sh check
```

See the [Update guide](/docs/updates) for apply/rollback steps.

## Expected result

- WolfBot Community runs in Docker on your VPS, independent of your PC
- You reach the dashboard via an SSH tunnel (loopback-only, no public port)
- Bots keep trading and strategies keep running while your computer is off

![WolfBot Community dashboard accessible over the SSH tunnel from the VPS — unified portfolio and connected accounts](/screenshots/wolfbot-community-dashboard.webp)

## Common mistakes

| Mistake | Fix |
|---|---|
| Opening the dashboard to the public internet | Don't — use the SSH tunnel, keep it loopback-only |
| Forgetting to back up on the server | `wolfbot backup ... --execute`, then copy the archive off-box |
| Server reboots and WolfBot isn't running | `wolfbot status` to confirm; `wolfbot start` if needed |
| Tunnel drops when your laptop sleeps | Re-run the `ssh -L ...` command; it's a normal reconnect |

## Troubleshooting

- **Can't reach localhost:8080 through the tunnel** — confirm the tunnel
  command is still running and `wolfbot status` shows services healthy.
- **SSH connection refused** — check your VPS firewall allows SSH (port 22)
  and that you're using the right user/IP.
- Other issues — see the full [Troubleshooting guide](/docs/troubleshooting).

## Next step

> **[Getting Started →](/getting-started)** — connect a Demo account first and trade risk-free before going live.
