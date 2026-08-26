# WolfBot Community v0.1.0-beta.3 — Free Self-Hosted Trading Platform for Windows & Linux

WolfBot Community v0.1.0-beta.3 is the latest public release of the free, self-hosted WolfBot trading platform for Windows and Linux users.

This Linux-first release ships signed Ubuntu/Debian and self-extracting Linux installers today, while the Windows installer remains on the WolfBot Community roadmap for a dedicated follow-up release.

The release delivers a real end-to-end Community experience: signed installers, digest-pinned runtime images, TradingView webhook automation, crypto/futures exchange support, MT5 self-hosting, Simulation-first onboarding, Smart Terminal trading, in-app update notifications and one portfolio/risk layer across connected markets.

## Why this release matters

Most trading setups are fragmented:

- one exchange app for crypto,
- another interface for futures,
- MT5 for Forex, Gold and Indices,
- separate bots with separate risk settings,
- manual copy/paste alerts from TradingView.

WolfBot Community brings those workflows into one self-hosted platform:

- one local dashboard,
- one execution pipeline,
- one risk-control layer,
- one portfolio view,
- one install you control.

You run it on your own desktop, workstation, server or VPS. Your API keys, local data, broker configuration and trading history stay on your infrastructure.

## What's new in beta.3

### More reliable Smart Terminal

The Trading Terminal's live order preview could occasionally get stuck on "waiting" when quickly switching accounts, symbols or order size. The preview pipeline is now fully synchronized, so it always reflects your latest selection instead of an outdated one.

### Faster automated-strategy warm start

Fresh installs now ship with 35 days of recent, real trading-performance history pre-seeded for every built-in strategy profile. WolfBot's automated model-selection logic can pick a working strategy variant right from first boot, instead of needing weeks of live history before it can decide anything — while keeping the packaged download light.

### Self-healing DCA risk guard

Added a new background safety net that keeps WolfBot's internal position tracking in sync with your real exchange positions. It is intentionally conservative: it only ever restores tracking for a position it can confirm is genuinely still open across two independent checks, and it cross-references your trade history first — so it will never resurrect a position that was legitimately closed by take-profit, stop-loss or a trailing exit. This makes the DCA (dollar-cost-averaging) safety checks more resilient after a restart or update.

### Self-healing MT5 terminal

The MT5 terminal container now automatically recovers from an unclean shutdown — power loss, host reboot, an out-of-memory event — instead of getting stuck on the next start. No manual intervention required.

### In-app update notifications

WolfBot Community now checks GitHub for new releases in the background and shows a "Software update" card in Settings when one is available, with a direct link to what changed.

### Automatic disk housekeeping

A new periodic job keeps your install's Docker image cache tidy over time, so repeated updates don't slowly fill up your disk.

## Highlights carried over from previous releases

### TradingView webhook automation

TradingView alerts can flow through the real WolfBot command pipeline.

Supported actions:

| TradingView payload action | WolfBot behavior |
|---|---|
| `buy` | queue/open long |
| `sell` | queue/open short |
| `close_long` | close an existing long side |
| `close_short` | close an existing short side |

The webhook route validates the source secret, deduplicates repeated signals, writes an internal command, and then lets the normal dispatcher, execution layer and risk controls handle the action. TradingView does not receive exchange API keys and does not talk to exchanges directly.

Docs: https://community.wolfbot.io/docs/tradingview

### Signed Linux installers

This release ships two signed Linux installers:

| Asset | Use it when |
|---|---|
| `WolfBot-Setup-linux-amd64.deb` | You are on Ubuntu/Debian and want package-manager install |
| `wolfbot-oneclick-0.1.0-beta.3.run` | You want the self-extracting Linux install path |

The `.deb` is the recommended path for Ubuntu 22.04 LTS, Ubuntu 24.04 LTS and Debian 12.

Windows is still a target platform for WolfBot Community. The Windows install path remains documented for the follow-up installer release, while this release gives Linux desktop, workstation and VPS users the current install path.

### Digest-pinned runtime images

The release manifest pins the runtime by immutable container image digests, including:

- engine
- control-api
- gateway
- webui
- financial-publisher
- periodic-jobs
- worker-supervisor
- outcome worker

This matters because the installer pulls the exact image set signed for this release, not a mutable tag that can drift later.

### One platform for crypto, futures and MT5

WolfBot Community is built as a unified trading platform, not a single-exchange bot.

Supported broker families in this Community release:

- Binance
- Bybit
- BingX
- KuCoin
- Bitget
- MT5 brokers for Forex, Gold, Indices and broker-dependent CFDs

Use Simulation or broker demo accounts first. Move to live accounts only after verifying your setup and risk controls.

### Simulation-first onboarding

The intended first-run path is:

1. Install WolfBot Community.
2. Open the local setup wizard.
3. Connect a Simulation or broker demo account.
4. Test Smart Terminal, TradingView alerts or automated strategies.
5. Add live trade-only API keys when ready.

WolfBot is non-custodial. It never needs withdrawal permissions.

## Download

Download from this GitHub release or from the official Download Center:

https://community.wolfbot.io/download

### Linux `.deb`

```bash
sudo apt install ./WolfBot-Setup-linux-amd64.deb
```

SHA256:

```text
0ce98a0d6a29da01071dbfa13884ef1bb40b2a5efe051acaa848b0c6edfa39ca
```

### Linux `.run`

```bash
chmod +x wolfbot-oneclick-0.1.0-beta.3.run
sudo WOLFBOT_ONECLICK_CONFIRM=INSTALL ./wolfbot-oneclick-0.1.0-beta.3.run
```

SHA256:

```text
5021eca3b0a70174af7e6b504b7f915a9e5b3aaff40285f685e95b37e13b1158
```

After install, open:

```text
http://127.0.0.1:8080/portal/local/setup
```

## Verify before installing

On Linux:

```bash
sha256sum WolfBot-Setup-linux-amd64.deb
sha256sum wolfbot-oneclick-0.1.0-beta.3.run
```

Compare the output with the checksums above or the attached `SHA256SUMS`.

The release also includes:

- `wolfbot-release.json` — signed release manifest consumed by the updater/latest-release path
- `wolfbot-release.sig.json` — detached Ed25519 signature for `wolfbot-release.json`
- `release-manifest.0.1.0-beta.3.json` — full release manifest
- `release-manifest.0.1.0-beta.3.sig.json` — detached Ed25519 manifest signature
- `checksums.json` and `SHA256SUMS` — checksum manifests
- `checksums.txt`, `release-assets.json`, `SBOM-linux.spdx.json` and `source-build-info.json` — release audit/provenance metadata

Verification guide:

https://community.wolfbot.io/docs/how-to-verify-a-downloaded-trading-bot

## Security model

WolfBot Community is designed to be self-hosted and non-custodial:

- your API keys stay on your machine;
- use trade-only API keys;
- withdrawal and transfer permissions should remain disabled;
- installers publish SHA256 checksums;
- runtime images are digest-pinned;
- TradingView alerts use a WolfBot source secret and never contain broker credentials.

Security docs:

https://community.wolfbot.io/security

## Recommended first-run path

WolfBot Community is trading infrastructure, so the best first install flow is practical and controlled:

- Install the signed Linux `.deb` or `.run` package from this release.
- Open the local setup wizard at `http://127.0.0.1:8080/portal/local/setup`.
- Start with Simulation or a broker demo account to learn the workflow.
- Use trade-only API keys for live exchanges and keep withdrawal permissions disabled.
- Verify checksums before installing and keep the signed release files for auditability.
- Follow the Windows release track if you want the upcoming Windows Setup.exe installer.

## Useful links

- Download Center: https://community.wolfbot.io/download
- Linux install guide: https://community.wolfbot.io/install/linux
- TradingView setup: https://community.wolfbot.io/docs/tradingview
- Simulation guide: https://community.wolfbot.io/docs/simulation
- Risk controls: https://community.wolfbot.io/docs/risk-controls
- Community vs Cloud: https://community.wolfbot.io/community-vs-cloud
- Discussions: https://github.com/wolfbot-io/wolfbot-community/discussions

## Short summary

WolfBot Community v0.1.0-beta.3 is a free self-hosted trading platform for Windows and Linux users, with signed Linux installers available now for crypto exchanges, futures accounts, MT5 markets and TradingView webhook automation. This release adds a more reliable Smart Terminal, a self-healing DCA risk guard, a self-healing MT5 terminal, faster automated-strategy warm start and in-app update notifications. Install it locally, connect Simulation first, verify checksums, and manage every market from one WolfBot interface.
