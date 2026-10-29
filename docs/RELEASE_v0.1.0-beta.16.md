# WolfBot Community v0.1.0-beta.16 — Free Self-Hosted Trading Platform for Linux

WolfBot Community v0.1.0-beta.16 is the latest public release of the free, self-hosted WolfBot trading platform. This release **fixes a KuCoin UTA TP/SL visibility gap**, **adds OKX to the Account Connect flow**, and **improves Bitget's daily ROI reporting reliability** — and carries forward every fix from v0.1.0-beta.15.

## ✅ Fixes KuCoin UTA accounts that could show open positions with no TP/SL

KuCoin's Unified Trading Account (UTA) API keeps regular ("NORMAL") orders and conditional ("ADVANCED") take-profit/stop-loss orders in two separate lists. WolfBot's KuCoin UTA executor was reading only the regular list (plus a legacy Classic endpoint), so a position's real TP/SL — which KuCoin places as ADVANCED orders — could be invisible to WolfBot's own protection checks, occasionally leaving a position reported as unprotected even when TP/SL had actually been placed. The executor now reads both NORMAL and ADVANCED snapshots explicitly, places stop-loss before take-profit with independent error handling per leg, and briefly retries a transient post-fill quantity read instead of giving up immediately. This is isolated to the KuCoin UTA executor only — Classic KuCoin, other brokers and trailing/entry logic are unaffected.

## ⬇️ Download v0.1.0-beta.16

| Platform | File | Size | Download |
|---|---|---|---|
| 🐧 Linux — Debian / Ubuntu (`.deb`) | `WolfBot-Setup-linux-amd64.deb` | ~86 MB | **[⬇️ Download .deb](https://github.com/wolfbot-io/wolfbot-community/releases/download/v0.1.0-beta.16/WolfBot-Setup-linux-amd64.deb)** |
| 🐧 Linux — any distro (`.run`, self-extracting) | `WolfBot-Setup-0.1.0-beta.16-linux-amd64.run` | ~113 MB | **[⬇️ Download .run](https://github.com/wolfbot-io/wolfbot-community/releases/download/v0.1.0-beta.16/WolfBot-Setup-0.1.0-beta.16-linux-amd64.run)** |
| 🪟 Windows — 64-bit installer (`.exe`, unchanged from v0.1.0-beta.10) | `WolfBot-Setup-0.1.0-beta.10-windows-x64.exe` | ~457 MB | **[⬇️ Download .exe](https://github.com/wolfbot-io/wolfbot-community/releases/download/v0.1.0-beta.10/WolfBot-Setup-0.1.0-beta.10-windows-x64.exe)** |

Not sure which Linux file to pick? Use `.deb` on Ubuntu/Debian for a normal `apt`-managed install, or `.run` on any other Linux distro. SHA256 checksums are in the [Verify before installing](#verify-before-installing) section below and in the `SHA256SUMS` asset attached to this release.

## What's new since v0.1.0-beta.15

### KuCoin UTA TP/SL visibility — fixed

See the summary above. WolfBot now explicitly reads KuCoin UTA's NORMAL and ADVANCED order lists, so an account's real take-profit and stop-loss orders are correctly detected regardless of which list KuCoin places them in.

### OKX added to Account Connect

OKX joins Binance, Bybit, BingX, KuCoin and Bitget as a supported crypto broker in the Account Connect flow, with the same passphrase-based read+trade (no-withdraw) permission guidance already used for KuCoin/Bitget-style API keys.

### Bitget daily ROI reporting — more resilient

Bitget's UTA financial-records API can return a valid, empty "end of data" page after a real cursor page. The daily ROI/Telegram report job now recognizes this terminal shape correctly instead of treating it as malformed data, and its failure-alert path is more informative when a real API error does occur. This only affects the daily reporting job — trading, balances and order execution are unaffected.

### Carried forward from v0.1.0-beta.15

- **Equity-curve history preserved after an account rename** — renaming a connected account no longer resets its equity-curve history on the Overview page.
- **MT5 upgrade-install data corruption — fixed.** Installing over an existing Community install that already has a connected MT5 terminal no longer leaves that terminal's own data unreadable. Fresh installs were never affected.
- **MT5 self-serve symbol resolution** and **MCP AI Agent** — continued groundwork, advanced/opt-in capability.

## Highlights carried over from previous releases

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
- OKX (Account Connect)
- MT5 brokers for Forex, Gold, Indices and broker-dependent CFDs

Use Simulation or broker demo accounts first. Move to live accounts only after verifying your setup and risk controls.

### Digest-pinned, signed runtime images

The release manifest pins the runtime by immutable container image digests, including the translator tiers that power Live Translate. The installer pulls the exact image set signed for this release, not a mutable tag that can drift later.

## Who should use this release

Use v0.1.0-beta.16 if you want to:

- run a free self-hosted trading platform on Ubuntu, Debian or a Linux VPS;
- trade on a KuCoin UTA account and want accurate TP/SL protection visibility;
- connect an OKX account through the dashboard's Account Connect flow;
- run a Bitget UTA account with more resilient daily ROI reporting;
- connect crypto/futures accounts and MT5 from one dashboard.

Already running v0.1.0-beta.15 or earlier on Linux? Just install the new `.deb` or `.run` over your existing install — no need to uninstall first, and your data/config stay in place. On Windows, there is nothing new to install this release; keep your current v0.1.0-beta.10 install.

## Install

Ubuntu/Debian:

```bash
sudo apt install ./WolfBot-Setup-linux-amd64.deb
```

Self-extracting installer:

```bash
chmod +x WolfBot-Setup-0.1.0-beta.16-linux-amd64.run
sudo WOLFBOT_ONECLICK_CONFIRM=INSTALL ./WolfBot-Setup-0.1.0-beta.16-linux-amd64.run
```

After install, open:

```text
http://127.0.0.1:8080/portal/local/setup
```

## Verify before installing

```bash
sha256sum WolfBot-Setup-linux-amd64.deb
sha256sum WolfBot-Setup-0.1.0-beta.16-linux-amd64.run
```

| File | SHA256 |
|---|---|
| `WolfBot-Setup-linux-amd64.deb` | `d1104863bc7993c175140f56c665a06182b0f18e2bd0841bd908575052f61425` |
| `WolfBot-Setup-0.1.0-beta.16-linux-amd64.run` | `6cee1973f9384149ed9d46698a96bd8bb3723d8cee1df730581d6698dce6a24d` |

Compare the values with the checksums above or the `SHA256SUMS` file attached to the GitHub release.

Read more: [How to verify a downloaded trading bot](https://community.wolfbot.io/docs/how-to-verify-a-downloaded-trading-bot).

## Validation summary

Verified directly against the published artifacts for this release:

| Gate | Result |
|---|---|
| Signed release manifest | verified against the WolfBot release Ed25519 public key |
| Engine + translator container images | verified with `cosign verify` against the WolfBot release public key |
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
- On Windows, keep using the v0.1.0-beta.10 installer until a corrected, code-signed build ships.

## Learn more

- Website: https://community.wolfbot.io
- Documentation: https://community.wolfbot.io/docs
- Discussions: https://github.com/wolfbot-io/wolfbot-community/discussions
- Telegram: https://t.me/wolfbot_community
- Issues: https://github.com/wolfbot-io/wolfbot-community/issues

WolfBot Community remains a Windows & Linux self-hosted trading platform. This release ships signed Linux installers; the existing v0.1.0-beta.10 Windows build remains the current Windows option.
