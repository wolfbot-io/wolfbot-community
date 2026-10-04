# WolfBot Community v0.1.0-beta.13 — Free Self-Hosted Trading Platform for Linux

WolfBot Community v0.1.0-beta.13 is the latest public release of the free, self-hosted WolfBot trading platform. This release fixes a long-standing MT5 "Empty Kline" bug for stock/gold/forex symbols, repairs Live Translate's meeting-minutes storage, and continues work on the MCP AI Agent interface.

**⚠️ Known issue on upgrade installs with an already-connected MT5 account.** If you install this release **over** an existing Community install that already has a provisioned, connected MT5 terminal, the installer's directory-ownership step can leave that terminal's own data unreadable by its process, which can make it stop updating prices. **Fresh installs are not affected at all**, and this does not touch any exchange (Binance/Bybit/BingX/KuCoin/Bitget) account. A corrected installer is already being built and will replace this asset shortly. If you hit this after upgrading, the workaround is one command against your own install's MT5 bridge container: `docker exec <your-mt5-bridge-container-name> chown -R 911:911 /config`, then restart that container. Not sure which container? Run `docker ps | grep mt5_bridge` first.

## ⬇️ Download v0.1.0-beta.13

| Platform | File | Size | Download |
|---|---|---|---|
| 🐧 Linux — Debian / Ubuntu (`.deb`) | `WolfBot-Setup-linux-amd64.deb` | ~86 MB | **[⬇️ Download .deb](https://github.com/wolfbot-io/wolfbot-community/releases/download/v0.1.0-beta.13/WolfBot-Setup-linux-amd64.deb)** |
| 🐧 Linux — any distro (`.run`, self-extracting) | `WolfBot-Setup-0.1.0-beta.13-linux-amd64.run` | ~113 MB | **[⬇️ Download .run](https://github.com/wolfbot-io/wolfbot-community/releases/download/v0.1.0-beta.13/WolfBot-Setup-0.1.0-beta.13-linux-amd64.run)** |
| 🪟 Windows — 64-bit installer (`.exe`, unchanged from v0.1.0-beta.10) | `WolfBot-Setup-0.1.0-beta.10-windows-x64.exe` | ~457 MB | **[⬇️ Download .exe](https://github.com/wolfbot-io/wolfbot-community/releases/download/v0.1.0-beta.10/WolfBot-Setup-0.1.0-beta.10-windows-x64.exe)** |

Not sure which Linux file to pick? Use `.deb` on Ubuntu/Debian for a normal `apt`-managed install, or `.run` on any other Linux distro. SHA256 checksums are in the [Verify before installing](#verify-before-installing) section below and in the `SHA256SUMS` asset attached to this release.

## What's new since v0.1.0-beta.11

### MT5 "Empty Kline" fixed for stock/gold/forex symbols

Self-serve MT5 accounts whose broker uses suffixed symbol names (for example `AAPL.s`, `XAUUSD+` instead of the plain `AAPL`/`XAUUSD`) could get permanently stuck showing "Empty Kline data" for those instruments, because WolfBot never translated between its own canonical symbol names and the broker's real names for self-serve accounts. A new symbol resolver detects the broker's real suffix variant automatically and verifies it against the connected terminal before using it — crypto-style (unsuffixed) accounts are completely unaffected.

### Live Translate meeting-minutes storage fixed

Meeting minutes recording previously failed with "storage unavailable" on a fresh Community install, because its database defaulted to a path the container can't write to. This is fixed, and the feature now also includes a post-meeting correction pass that cleans up transcript fragments per speaker (joining broken sentences, fixing obvious mis-transcriptions) while always keeping the original raw transcript as a fallback. The realtime translate page itself also got a cleaner, more compact layout.

### MCP AI Agent — continued groundwork

Further work on the MCP AI Agent interface: broker-side support for an agent partially closing a position, adjusting its stop-loss/take-profit, or cancelling an order (Bybit first, other exchanges opt-in); read-only risk-status/exposure tools; and an approval workflow for actions that need explicit owner sign-off. This remains an advanced, opt-in capability — see the [MCP AI Agent section](https://community.wolfbot.io/#mcp-ai-agent) on the main site for the current scope.

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
- MT5 brokers for Forex, Gold, Indices and broker-dependent CFDs

Use Simulation or broker demo accounts first. Move to live accounts only after verifying your setup and risk controls.

### Digest-pinned, signed runtime images

The release manifest pins the runtime by immutable container image digests, including the translator tiers that power Live Translate. The installer pulls the exact image set signed for this release, not a mutable tag that can drift later.

## Who should use this release

Use v0.1.0-beta.13 if you want to:

- run a free self-hosted trading platform on Ubuntu, Debian or a Linux VPS;
- connect a self-serve MT5 account trading stocks, gold or forex with broker-suffixed symbol names;
- use Live Translate's meeting-minutes recording reliably on a fresh install;
- connect crypto/futures accounts and MT5 from one dashboard.

**If you already have a working Community install with a connected MT5 account**, read the known-issue note above before upgrading, or wait for the corrected installer.

Already running an earlier Community build with no MT5 account connected (or none at all)? Just install the new `.deb` or `.run` over your existing install — no need to uninstall first, and your data/config stay in place. On Windows, there is nothing new to install this release; keep your current v0.1.0-beta.10 install.

## Install

Ubuntu/Debian:

```bash
sudo apt install ./WolfBot-Setup-linux-amd64.deb
```

Self-extracting installer:

```bash
chmod +x WolfBot-Setup-0.1.0-beta.13-linux-amd64.run
sudo WOLFBOT_ONECLICK_CONFIRM=INSTALL ./WolfBot-Setup-0.1.0-beta.13-linux-amd64.run
```

After install, open:

```text
http://127.0.0.1:8080/portal/local/setup
```

## Verify before installing

```bash
sha256sum WolfBot-Setup-linux-amd64.deb
sha256sum WolfBot-Setup-0.1.0-beta.13-linux-amd64.run
```

| File | SHA256 |
|---|---|
| `WolfBot-Setup-linux-amd64.deb` | `1473be688ca06fdc0090e133364c2dc1c356371ce0d31ca1052bcd4ff0ac1ae1` |
| `WolfBot-Setup-0.1.0-beta.13-linux-amd64.run` | `b076ae9769fc3962feb74111da10b8bb7a0fccdada565cef4e0700fa9a1adb35` |

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
- If you have a connected MT5 account, read the known-issue note above before upgrading.

## Learn more

- Website: https://community.wolfbot.io
- Documentation: https://community.wolfbot.io/docs
- Discussions: https://github.com/wolfbot-io/wolfbot-community/discussions
- Telegram: https://t.me/wolfbot_community
- Issues: https://github.com/wolfbot-io/wolfbot-community/issues

WolfBot Community remains a Windows & Linux self-hosted trading platform. This release ships signed Linux installers with one known MT5 upgrade-path issue (above, fix already in progress); the existing v0.1.0-beta.10 Windows build remains the current Windows option.
