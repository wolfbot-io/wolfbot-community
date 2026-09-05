# WolfBot Community v0.1.0-beta.9 — Free Self-Hosted Trading Platform for Windows & Linux

WolfBot Community v0.1.0-beta.9 is the latest public release of the free, self-hosted WolfBot trading platform for Windows and Linux users.

This release introduces **Live Translate** — a real-time speech and text translation feature built directly into WolfBot Community — plus a large set of reliability fixes across broker connections, MT5, Telegram notifications and the Terminal, accumulated since v0.1.0-beta.4.

Windows remains part of the WolfBot Community product roadmap, with the Windows Setup.exe installer planned as a dedicated follow-up release. This release ships signed Ubuntu/Debian and self-extracting Linux installers today.

## What's new: Live Translate

WolfBot Community now includes **Live Translate**, a local, real-time translation tool available at `/portal/translate` in your dashboard.

- **Runs entirely on your own machine.** No audio or text is sent to any cloud service — translation happens locally, using the same self-hosted install you already run for trading.
- **Text translation across 50+ languages.**
- **Real-time speech translation.** Speak into your microphone, or translate the audio playing in a browser tab (for example, a YouTube video), and hear the translated speech back in real time.
- **Automatic hardware detection.** The installer checks your machine's RAM, CPU and (if present) NVIDIA GPU and automatically selects the right build for your hardware: a lightweight text-only mode on modest machines, CPU-based speech translation on a typical desktop, or full GPU-accelerated real-time speech translation when a capable NVIDIA GPU is available. You don't need to configure anything yourself.
- **Out of your way.** Live Translate sits at the bottom of the trading sidebar, separate from your trading workflow, and is Community-only — it is not enabled on WolfBot Cloud.

## Reliability and bug fixes since v0.1.0-beta.4

### Broker connections

- **Bybit Demo Trading** — fixed a bug where the automatic 100,000 USDT demo wallet top-up could stop refilling an emptied demo account after its first top-up.
- **KuCoin** — fixed a dashboard bug that showed $0.00 balance for Unified Trading Account (UTA) users.
- **Bitget** — fixed a Unified Trading Account bug where setting a new Take-Profit or Stop-Loss order could silently clear the other one, so both are now set correctly together. Also fixed a crash in the automatic "missing TP/SL" safety-net check that could silently stop it from checking your open positions.

### MT5

- Self-hosted MT5 terminal containers now share one remembered login across every connected MT5 account, so you don't need to log in separately for each one.
- The MT5 bridge now automatically reconnects to your terminal in the background once you've completed the one-time browser login — no manual reconnect step needed.

### Telegram notifications

- Self-hosted users can now connect their own Telegram bot for trade alerts directly from the Settings page — a feature previously only available on WolfBot Cloud.
- Fixed a bug where the "Open bot" link on the Connect Telegram page could fail to appear.
- Fixed a bug that could create a duplicate Telegram connection and cause notifications to stop arriving reliably.

### Terminal and dashboard

- Fixed a server error when placing a manual order on a freshly installed WolfBot Community instance.
- Fixed the browser's real-time price and order book connection being rejected after a fresh install.
- Fixed "Could not load entry logs" on the Live Monitor page for connected accounts, and widened the page so the full trade history table is visible without scrolling sideways.

### Platform and infrastructure

- Added an automatic background cleanup job so old Docker build files no longer slowly accumulate and fill up your disk over time.
- Engine logs no longer fail or spam errors when writing accented or non-Latin text (for example, Vietnamese or emoji in log messages).

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

Docs: https://community.wolfbot.io/docs/tradingview

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

The release manifest pins the runtime by immutable container image digests, including engine, control-api, gateway, webui, financial-publisher, periodic-jobs, worker-supervisor and the outcome worker. The installer pulls the exact image set signed for this release, not a mutable tag that can drift later.

## Who should use this release

Use v0.1.0-beta.9 if you want to:

- run a free self-hosted trading platform on Ubuntu, Debian or a Linux VPS;
- try local, private, real-time speech and text translation alongside your trading dashboard;
- run an MT5 account on a Linux host with one shared login and automatic reconnection;
- rely on Bitget/KuCoin/Bybit Demo balances and TP/SL behaving correctly;
- connect your own Telegram bot for trade alerts;
- connect crypto/futures accounts and MT5 from one dashboard.

Already running an earlier Community build? Just install the new `.deb` or `.run` over your existing install — no need to uninstall first, and your data/config stay in place.

## Install

Ubuntu/Debian:

```bash
sudo apt install ./WolfBot-Setup-linux-amd64.deb
```

Self-extracting installer:

```bash
chmod +x wolfbot-oneclick-0.1.0-beta.9-0.1.0.run
sudo WOLFBOT_ONECLICK_CONFIRM=INSTALL ./wolfbot-oneclick-0.1.0-beta.9-0.1.0.run
```

After install, open:

```text
http://127.0.0.1:8080/portal/local/setup
```

## Verify before installing

On Linux:

```bash
sha256sum WolfBot-Setup-linux-amd64.deb
sha256sum wolfbot-oneclick-0.1.0-beta.9-0.1.0.run
```

| File | SHA256 |
|---|---|
| `WolfBot-Setup-linux-amd64.deb` | `b1250c2cecee876c5692a9f842ae1cc9376f7c68ea8c5db54d132a22016b7c31` |
| `wolfbot-oneclick-0.1.0-beta.9-0.1.0.run` | `bf75ae2f69727bfcd0b6830592e3d97242f54fe12f3ff930ef4103b4a0d5da31` |

Compare the values with the checksums above or the `SHA256SUMS` file attached to the GitHub release.

Read more: [How to verify a downloaded trading bot](/docs/how-to-verify-a-downloaded-trading-bot).

## Validation summary

Verified directly against the published artifacts for this release:

| Gate | Result |
|---|---|
| Signed release manifest | verified against the WolfBot release Ed25519 public key |
| Engine, control-api and webui container images | verified with `cosign verify` against the WolfBot release public key |
| Release-assets bundle | verified — checksums, manifest signature and packaged installer bytes all match |
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
- Follow the Windows release track if you want the upcoming Windows Setup.exe installer.

## Learn more

- Website: https://community.wolfbot.io
- Documentation: https://community.wolfbot.io/docs
- Discussions: https://github.com/wolfbot-io/wolfbot-community/discussions
- Issues: https://github.com/wolfbot-io/wolfbot-community/issues

WolfBot Community remains a Windows & Linux self-hosted trading platform. This release ships signed Linux installers; Windows packaging is on the roadmap for a dedicated follow-up release.
