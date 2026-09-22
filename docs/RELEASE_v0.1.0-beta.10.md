# WolfBot Community v0.1.0-beta.10 — Free Self-Hosted Trading Platform for Windows & Linux

WolfBot Community v0.1.0-beta.10 is the latest public release of the free, self-hosted WolfBot trading platform for Windows and Linux users. This is a reliability release focused on making the automated model-selection engine and MT5 self-serve connections trustworthy from the very first install, plus infrastructure hardening so future installs are immune to a class of long-uptime failures out of the box.

**Windows Setup.exe is now available as an initial build.** A known issue is already fixed and in final testing (see below) — a follow-up build will replace this asset shortly. Linux ships signed Ubuntu/Debian and self-extracting installers as usual.

**Known issue (verified 2026-09-21):** the signed beta.10 installer does not include the Live Translate service image. The `/translate` proxy therefore returns an error. A subsequent versioned installer is required; reinstalling the same beta.10 package will not restore this feature.

## ⬇️ Download v0.1.0-beta.10

| Platform | File | Size | Download |
|---|---|---|---|
| 🐧 Linux — Debian / Ubuntu (`.deb`) | `WolfBot-Setup-linux-amd64.deb` | ~86 MB | **[⬇️ Download .deb](https://github.com/wolfbot-io/wolfbot-community/releases/download/v0.1.0-beta.10/WolfBot-Setup-linux-amd64.deb)** |
| 🐧 Linux — any distro (`.run`, self-extracting) | `wolfbot-oneclick-0.1.0-beta.10-0.1.0.run` | ~113 MB | **[⬇️ Download .run](https://github.com/wolfbot-io/wolfbot-community/releases/download/v0.1.0-beta.10/wolfbot-oneclick-0.1.0-beta.10-0.1.0.run)** |
| 🪟 Windows — 64-bit installer (`.exe`) | `WolfBot-Setup-0.1.0-beta.10-windows-x64.exe` | ~457 MB | **[⬇️ Download .exe](https://github.com/wolfbot-io/wolfbot-community/releases/download/v0.1.0-beta.10/WolfBot-Setup-0.1.0-beta.10-windows-x64.exe)** |

Not sure which Linux file to pick? Use `.deb` on Ubuntu/Debian for a normal `apt`-managed install, or `.run` on any other Linux distro. SHA256 checksums are in the [Verify before installing](#verify-before-installing) section below and in the `checksums.txt` / `SHA256SUMS` assets attached to this release.

### ⚠️ Known issue on this Windows build (fix already built, publishing shortly)

This initial Windows `.exe` has a packaging gap that was found right after this build finished: the background market-data connections (used to feed the AI signal engine live crypto prices) fail to reconnect and retry continuously, which is visible as repeated warning lines in the application logs and can make the Overview page's account summary take longer to load than expected. This does **not** touch order placement, TP/SL, or any risk-guard code path directly, but until it is fixed the AI engine may be working from stale/incomplete real-time price data on Windows specifically. The Windows installer is not yet code-signed (Authenticode), so Windows SmartScreen will show an "unrecognized publisher" warning — select "More info" → "Run anyway" to continue; this is expected for this build and unrelated to the issue above. A corrected Windows build resolving the reconnect issue is already compiled and being verified now; it will replace this asset on this same release shortly with no other action needed from you.

## What's new since v0.1.0-beta.9

### Automated model selection now works correctly on a fresh install

WolfBot Community's automated strategy picker evaluates each symbol's recent real trading performance to decide which model to run. On a fresh install, this evaluation was reading a one-time bootstrap data snapshot whose dates were frozen at build time — as that snapshot aged relative to the rolling 30-day lookback window, every symbol could eventually show "no qualifying data" and get disabled. The bootstrap snapshot now shifts its own dates to line up with "today" at build time, so a fresh install always has a populated, real 30-day window to evaluate from, no matter when the release is downloaded.

### MT5 self-serve connections are more reliable

Some self-hosted MT5 accounts could fail to reach their own dedicated bridge for balance/equity reads and order placement after setup. This is fixed so a newly connected (or previously affected) MT5 account reliably resolves its own bridge connection.

### MT5 VNC session — open it anytime, not just once

The one-time VNC setup link for connecting to your MT5 terminal is now backed by a persistent "Open MT5 VNC" option in your account details, so you can reopen that session whenever you need it instead of only during initial setup.

### Proactive protection against long-uptime file-handle exhaustion

Every core service in the Community stack now starts with a raised file-descriptor ceiling, so a long-running install is protected from the start against the class of "too many open files" failures that can otherwise silently interrupt background jobs like daily portfolio snapshots after extended uptime.

## Highlights carried over from previous releases

### Live Translate

Live Translate is unavailable in the beta.10 installer because its service image was omitted from the signed release manifest. This is a packaging regression; the feature remains in the codebase and must return in a newly signed release. Learn more: https://community.wolfbot.io/tools/live-translate

### TradingView webhook automation

TradingView alerts flow through the real WolfBot command pipeline.

| TradingView payload action | WolfBot behavior |
|---|---|
| `buy` | queue/open long |
| `sell` | queue/open short |
| `close_long` | close an existing long side |
| `close_short` | close an existing short side |

The webhook route validates the source secret, deduplicates repeated signals, writes an internal command, and then lets the normal dispatcher, execution layer and risk controls handle the action. TradingView does not receive exchange API keys and does not talk to exchanges directly.

### One platform for crypto, futures and MT5

WolfBot Community continues to target one interface for:

- Binance
- Bybit
- BingX
- KuCoin
- Bitget
- MT5 brokers for Forex, Gold, Indices and broker-dependent CFDs

Use Simulation or broker demo accounts first. Move to live accounts only after verifying your setup and risk controls.

### Digest-pinned, signed runtime images

The release manifest pins the runtime by immutable container image digests. The installer pulls the exact image set signed for this release, not a mutable tag that can drift later.

## Who should use this release

Use v0.1.0-beta.10 if you want to:

- run a free self-hosted trading platform on Ubuntu, Debian or a Linux VPS;
- rely on the automated model-selection feature actually evaluating real data on a fresh install;
- run a self-serve MT5 account with a reliable bridge connection and an always-available VNC entry point;
- run a long-uptime install with less exposure to file-descriptor exhaustion;
- connect crypto/futures accounts and MT5 from one dashboard.

Already running an earlier Community build? Just install the new `.deb` or `.run` over your existing install — no need to uninstall first, and your data/config stay in place.

## Install

Ubuntu/Debian:

```bash
sudo apt install ./WolfBot-Setup-linux-amd64.deb
```

Self-extracting installer:

```bash
chmod +x wolfbot-oneclick-0.1.0-beta.10-0.1.0.run
sudo WOLFBOT_ONECLICK_CONFIRM=INSTALL ./wolfbot-oneclick-0.1.0-beta.10-0.1.0.run
```

Windows (initial build — see the known issue above):

```text
1. Double-click WolfBot-Setup-0.1.0-beta.10-windows-x64.exe
2. If SmartScreen appears: "More info" -> "Run anyway" (not yet code-signed)
3. Follow the installer, then open WolfBot from the Start Menu
```

After install, open:

```text
http://127.0.0.1:8080/portal/local/setup
```

## Verify before installing

On Linux:

```bash
sha256sum WolfBot-Setup-linux-amd64.deb
sha256sum wolfbot-oneclick-0.1.0-beta.10-0.1.0.run
```

On Windows (PowerShell):

```powershell
Get-FileHash .\WolfBot-Setup-0.1.0-beta.10-windows-x64.exe -Algorithm SHA256
```

| File | SHA256 |
|---|---|
| `WolfBot-Setup-linux-amd64.deb` | `3d1dd23fb8dd333e4f750bf45dfa5161467e576148dd0d571ccbb98c4273669c` |
| `wolfbot-oneclick-0.1.0-beta.10-0.1.0.run` | `745a2e2474e2f8d30b4a5f328f9b68edd9ffcdee9d5f5e436f57930fa1ebe586` |
| `WolfBot-Setup-0.1.0-beta.10-windows-x64.exe` | `85ec8b5f7062d0d05a7c3416105a5173d16ad7ea24d52e2c6c56f037271e3b79` |

Compare the values with the checksums above or the `SHA256SUMS` file attached to the GitHub release.

Read more: [How to verify a downloaded trading bot](https://community.wolfbot.io/docs/how-to-verify-a-downloaded-trading-bot).

## Validation summary

Verified directly against the published artifacts for this release:

| Gate | Result |
|---|---|
| Signed release manifest | verified against the WolfBot release Ed25519 public key |
| Engine container image | verified with `cosign verify` against the WolfBot release public key |
| `.deb` / `.run` checksums | match the published `checksums.json` / `SHA256SUMS` byte-for-byte |

## Security model

WolfBot Community is designed to be self-hosted and non-custodial:

- your API keys stay on your machine;
- use trade-only API keys;
- withdrawal and transfer permissions should remain disabled;
- installers publish SHA256 checksums;
- runtime images are digest-pinned and cryptographically signed;
- TradingView alerts use a WolfBot source secret and never contain broker credentials;
- Live Translate runs entirely locally — no audio or text leaves your machine.

## Recommended first-run path

WolfBot Community is trading infrastructure, so the best first install flow is practical and controlled:

- Install the signed Linux `.deb` or `.run` package from this release.
- Open the local setup wizard at `http://127.0.0.1:8080/portal/local/setup`.
- Start with Simulation or a broker demo account to learn the workflow.
- Use trade-only API keys for live exchanges and keep withdrawal permissions disabled.
- Verify checksums before installing and keep the signed release files for auditability.
- On Windows, expect the known market-data reconnect issue above until the corrected build replaces this asset.

## Learn more

- Website: https://community.wolfbot.io
- Documentation: https://community.wolfbot.io/docs
- Discussions: https://github.com/wolfbot-io/wolfbot-community/discussions
- Telegram: https://t.me/wolfbot_community
- Issues: https://github.com/wolfbot-io/wolfbot-community/issues

WolfBot Community remains a Windows & Linux self-hosted trading platform. This release ships signed Linux installers and an initial, unsigned Windows build with one known issue (above); a corrected, code-signed Windows build is expected shortly.
