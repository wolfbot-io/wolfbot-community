---
title: "Install WolfBot Community on Ubuntu/Linux — Step-by-Step"
description: "How to install WolfBot Community on Ubuntu 22.04, Ubuntu 24.04, or Debian 12. Download the .deb package and start trading across crypto and MT5 markets — no command line required."
tested_version: "0.1.0-p12-ghcr-rc17"
last_updated: "2026-08-12"
platforms: ["linux"]
category: "install"
difficulty: "beginner"
estimated_time: "5 minutes"
next_guide: "/getting-started"
related_guides: ["/docs/simulation", "/docs/troubleshooting", "/docs/error-codes"]
keywords: [
  "install wolfbot linux",
  "wolfbot community ubuntu",
  "crypto bot ubuntu",
  "linux trading bot",
  "unified trading platform linux",
  "self hosted trading linux"
]
os_tested: ["Ubuntu 24.04 LTS", "Ubuntu 22.04 LTS", "Debian 12"]
sitemap_priority: 0.9
---

# Install WolfBot Community on Ubuntu/Linux

**Tested with WolfBot Community v0.1.0-p12-ghcr-rc17** · Last updated: 2026-08-12 · Ubuntu 24.04 / Ubuntu 22.04 / Debian 12

## Who this guide is for

Anyone who wants to install WolfBot Community on Ubuntu or Debian — **you do
not need to know the terminal or Docker.** Everything below uses the same
double-click install you'd use for any other application; a command-line
alternative is included further down for anyone who prefers it.

## What you need

- Ubuntu 22.04 LTS, Ubuntu 24.04 LTS, or Debian 12 (64-bit)
- At least 4 GB RAM, 4 GB free disk space
- Internet connection
- Your account password (you'll be asked for it once, to allow the install
  — this is completely normal, every app installer on Linux asks for this)

> ℹ️ WolfBot needs Docker to run. If it isn't installed yet, the installer
> installs it for you automatically — nothing to set up by hand.

## Step 1: Download

1. Go to [community.wolfbot.io/download](https://community.wolfbot.io/download)
2. Click **Download for Linux**
3. The file `WolfBot-Setup-linux-amd64.deb` downloads to your **Downloads**
   folder

## Step 2: Install (double-click, like any other app)

1. Open your **Downloads** folder and **double-click**
   `WolfBot-Setup-linux-amd64.deb`
2. Your system's app installer window opens (usually called "Software
   Install" or "Package Installer")
3. Click **Install**
4. Type your password when asked, then press Enter/click OK
5. Wait for it to finish — this can take a minute or two the first time,
   since it also sets up Docker in the background

That's it — no terminal needed.

> **Didn't get an install window?** Some Ubuntu versions open `.deb` files
> in a file archive viewer instead of the installer by default.
> Right-click the file → **Open With** → choose **Software Install** (or
> **GDebi Package Installer** if you have it) → then click **Install**.

## Step 3: Launch WolfBot

1. Open your **Applications** menu (or press the Windows/Super key and
   type "WolfBot")
2. Click the **WolfBot** icon
3. Your browser opens automatically to the WolfBot Dashboard

## Expected result

- A WolfBot icon appears in your Applications menu
- Clicking it opens the Dashboard in your browser
- The Dashboard's Capability Status page shows which brokers you can connect — start with a [Demo account](/docs/simulation) for zero-risk trading

![WolfBot Community dashboard after installing on Linux — unified portfolio, connected accounts and quick links](/screenshots/wolfbot-community-dashboard.webp)

## Trade Forex, Gold and Indices via MT5 — no Windows needed

WolfBot Community is a **unified platform**: crypto exchanges and MT5 (Forex, Gold, Indices, Stocks/CFDs) inside one interface, one risk engine, one portfolio — including on Linux, with no separate Windows machine or VPS required. MT5 runs as a real terminal alongside the rest of WolfBot, and you control it from your own browser. Activate it with one command — see the [MT5 connect guide](/brokers/mt5) for the exact steps.

## Common mistakes

| Mistake | Fix |
|---|---|
| Double-clicking opens a file archive instead of installing | Right-click the file → Open With → Software Install |
| "Authentication required" prompt | This is normal — enter your regular login password |
| Nothing happens after clicking Install | Give it a minute — Docker setup runs in the background the first time |
| Can't find WolfBot after install | Log out and back in once, or search "WolfBot" in the Applications menu |

## Prefer the command line?

If you're comfortable with a terminal, this does the same thing as the
steps above:

```bash
cd ~/Downloads
sudo apt install ./WolfBot-Setup-linux-amd64.deb
```

Using `apt install ./file.deb` (rather than `dpkg -i`) resolves any missing
dependencies automatically in one step.

### Not on a Debian-based distro? Use the `.run` installer instead

The [download page](/download) also offers a self-extracting `.run`
installer — it doesn't need `apt`/`dpkg` at all, so it works on Linux
distributions beyond Ubuntu/Debian too:

```bash
cd ~/Downloads
chmod +x wolfbot-oneclick-*.run
./wolfbot-oneclick-*.run
```

Both installers set up the exact same WolfBot Community stack — pick
whichever fits your system; there's no functional difference afterward.

Useful commands once installed:

```bash
wolfbot status     # check services
wolfbot start      # start WolfBot
wolfbot open       # open the Dashboard in your browser
wolfbot logs       # view logs
```

Dashboard address: `http://127.0.0.1:8765`

## Troubleshooting

- **Nothing opens when I click the WolfBot icon** — give it a minute after
  a fresh install (Docker containers are still starting), then try again.
- **"Port in use" or the Dashboard won't load** — something else on your
  computer may be using port 8765. See the
  [Troubleshooting Guide](/docs/troubleshooting) for how to check.
- Still stuck? See the full [Troubleshooting Guide](/docs/troubleshooting)
  or ask in [GitHub Discussions](https://github.com/wolfbot-io/wolfbot-community/discussions).

## Uninstall

Open your system's app store (e.g. **Ubuntu Software**), search for
"WolfBot", and click **Remove** — the same way you'd uninstall any other
app you installed via a `.deb` file.

Or via the terminal:

```bash
sudo apt remove wolfbot-community
rm -rf ~/.wolfbot    # optional: also delete your local WolfBot data
```

## Next step

> **[Start with Simulation →](/docs/simulation)**
