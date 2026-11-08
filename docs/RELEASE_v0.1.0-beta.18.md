# WolfBot Community v0.1.0-beta.18 — Free Self-Hosted Trading Platform for Linux

WolfBot Community v0.1.0-beta.18 is the latest public release of the free, self-hosted WolfBot trading platform. It adds **Gate account connection and more robust OKX/Gate TP/SL handling**, makes **BingX multi-asset collateral and Binance Portfolio Margin liabilities count correctly in account equity**, fixes a **Binance timestamp-error crash in the outcome simulator**, and adds **Bitget UTA realized-PnL support**. It also includes everything that was prepared as v0.1.0-beta.17 (an internal build that was never published).

## ⬇️ Download v0.1.0-beta.18

| Platform | File | Size | Download |
|---|---|---|---|
| 🐧 Linux — Debian / Ubuntu (`.deb`) | `WolfBot-Setup-linux-amd64.deb` | ~86 MB | **[⬇️ Download .deb](https://github.com/wolfbot-io/wolfbot-community/releases/download/v0.1.0-beta.18/WolfBot-Setup-linux-amd64.deb)** |
| 🐧 Linux — any distro (`.run`, self-extracting) | `WolfBot-Setup-0.1.0-beta.18-linux-amd64.run` | ~113 MB | **[⬇️ Download .run](https://github.com/wolfbot-io/wolfbot-community/releases/download/v0.1.0-beta.18/WolfBot-Setup-0.1.0-beta.18-linux-amd64.run)** |
| 🪟 Windows — 64-bit installer (`.exe`, unchanged from v0.1.0-beta.15) | `WolfBot-Setup-0.1.0-beta.15-windows-x64.exe` | ~564 MB | **[⬇️ Download .exe](https://github.com/wolfbot-io/wolfbot-community/releases/download/v0.1.0-beta.15/WolfBot-Setup-0.1.0-beta.15-windows-x64.exe)** |

Not sure which Linux file to pick? Use `.deb` on Ubuntu/Debian for a normal `apt`-managed install, or `.run` on any other Linux distro. SHA256 checksums are in the [Verify before installing](#verify-before-installing) section below and in the `SHA256SUMS` asset attached to this release.

## What's new since v0.1.0-beta.16

### Gate — Account Connect support

Gate gets a read-only API-key permission inspector (it checks that the key can read and trade and that withdrawal is not enabled) and is wired into the account-connect path and the CLI. OKX and Gate TP/SL placement is also hardened: the position quantity is re-read with a short retry after a fill, stop-loss is placed before take-profit with independent error handling per leg, and alerts are throttled. Both brokers follow the same protection pattern already used for KuCoin and Bitget.

### Account equity — BingX multi-asset collateral and Binance Portfolio Margin

- **BingX:** accounts in Multi-Assets Margin mode that hold non-USDT collateral (for example BTC) now include that collateral in the equity that risk guards read, without counting it twice.
- **Binance Portfolio Margin:** cross-margin liabilities are now tracked in the account state so equity is not overstated.

These changes affect the equity value used by portfolio-level guards on those accounts; ordinary USDT-only accounts are unchanged.

### Binance — timestamp errors no longer crash the outcome simulator

A Binance `-1021` (timestamp outside the receive window) error during a position close used to propagate out of the outcome simulator and crash its process. The close is now wrapped: the entry stays pending and is retried on the next poll, with throttled Telegram alerts. Signed Binance requests also carry a configurable `recvWindow` (`BINANCE_RECV_WINDOW_MS`, default 10000 ms, `0` = library default).

### Bitget — UTA realized PnL

Bitget UTA accounts now get realized-PnL calculations in the executor and in the daily ROI provider, building on the daily-report resilience fix from v0.1.0-beta.16.

### Smaller fixes

- ROI metrics tolerate a missing estimated-balance value instead of failing.
- Account-settings lookup is tenant-scoped, so a key can only resolve inside its own tenant.
- A Python dependency (`python-dateutil`) is pinned to a known-good version for reproducible builds.
- An optional ENTRY-content relay (default **off**; it does nothing unless explicitly enabled) was added for operators who want to feed confirmed entries to a local content workflow.

### Carried forward from v0.1.0-beta.16

- **KuCoin UTA TP/SL visibility fixed** — NORMAL and ADVANCED order lists are both read.
- **OKX in Account Connect**, **Bitget daily ROI report resilience**, and everything from earlier releases.

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

- Binance
- Bybit
- BingX
- KuCoin
- Bitget
- OKX
- Gate (Account Connect)
- MT5 brokers for Forex, Gold, Indices and broker-dependent CFDs

Use Simulation or broker demo accounts first. Move to live accounts only after verifying your setup and risk controls.

### Digest-pinned, signed runtime images

The release manifest pins the runtime by immutable container image digests, including the translator tiers that power Live Translate. The installer pulls the exact image set signed for this release, not a mutable tag that can drift later.

## Who should use this release

Use v0.1.0-beta.18 if you want to:

- run a free self-hosted trading platform on Ubuntu, Debian or a Linux VPS;
- connect a Gate account, or trade OKX/Gate with the hardened TP/SL protection;
- run BingX Multi-Assets Margin or Binance Portfolio Margin accounts with equity that reflects the real collateral and liabilities;
- run Bitget UTA accounts with realized-PnL reporting;
- connect crypto/futures accounts and MT5 from one dashboard.

Already running v0.1.0-beta.16 or earlier on Linux? Install the new `.deb` or `.run` over your existing install — no need to uninstall first, and your data/config stay in place. On Windows there is nothing new to install this release; keep your current v0.1.0-beta.15 installer.

## Install

Ubuntu/Debian:

```bash
sudo apt install ./WolfBot-Setup-linux-amd64.deb
```

Self-extracting installer:

```bash
chmod +x WolfBot-Setup-0.1.0-beta.18-linux-amd64.run
sudo WOLFBOT_ONECLICK_CONFIRM=INSTALL ./WolfBot-Setup-0.1.0-beta.18-linux-amd64.run
```

After install, open:

```text
http://127.0.0.1:8080/portal/local/setup
```

## Verify before installing

```bash
sha256sum WolfBot-Setup-linux-amd64.deb
sha256sum WolfBot-Setup-0.1.0-beta.18-linux-amd64.run
```

| File | SHA256 |
|---|---|
| `WolfBot-Setup-linux-amd64.deb` | `5a64bdc8ab99d8a75b62bf0f29abfa2620d36c6e5b7eecfcda0ead5760767e3a` |
| `WolfBot-Setup-0.1.0-beta.18-linux-amd64.run` | `15e3472f86210dff547b1a80c6fca447b713d12585004293599f0b2fd5c1b2f6` |

Compare the values with the checksums above or the `SHA256SUMS` file attached to the GitHub release.

Read more: [How to verify a downloaded trading bot](https://community.wolfbot.io/docs/how-to-verify-a-downloaded-trading-bot).

## Validation summary

Verified directly against the release artifacts:

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

- Install the signed Linux `.deb` or `.run` package from this release.
- Open the local setup wizard at `http://127.0.0.1:8080/portal/local/setup`.
- Start with Simulation or a broker demo account to learn the workflow.
- Use trade-only API keys for live exchanges and keep withdrawal permissions disabled.
- Verify checksums before installing and keep the signed release files for auditability.

## Learn more

- Website: https://community.wolfbot.io
- Documentation: https://community.wolfbot.io/docs
- Discussions: https://github.com/wolfbot-io/wolfbot-community/discussions
- Telegram: https://t.me/wolfbot_community
- Issues: https://github.com/wolfbot-io/wolfbot-community/issues

WolfBot Community remains a Windows & Linux self-hosted trading platform. This release ships signed Linux installers; the existing v0.1.0-beta.15 Windows build remains the current Windows option.
