# WolfBot Community v0.1.0-beta.2 — Windows & Linux Platform, Linux Public Beta

WolfBot Community v0.1.0-beta.2 is the latest Public Beta of the free, self-hosted WolfBot trading platform for Windows and Linux.

This beta publishes signed Linux installers first. Windows remains part of the WolfBot Community product and SEO roadmap, but the Windows installer is not included in `v0.1.0-beta.2`.

This release focuses on a real end-to-end Community experience: signed Linux installers, digest-pinned runtime images, TradingView webhook automation, crypto/futures exchange support, MT5 self-hosting, Simulation-first onboarding, Smart Terminal trading and one portfolio/risk layer across connected markets.

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

## Highlights

### TradingView webhook automation

TradingView alerts can now flow through the real WolfBot command pipeline.

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

This beta ships two Linux installers:

| Asset | Use it when |
|---|---|
| `WolfBot-Setup-linux-amd64.deb` | You are on Ubuntu/Debian and want package-manager install |
| `wolfbot-oneclick-0.1.0-beta.2.run` | You want the self-extracting Linux install path |

The `.deb` is the recommended path for Ubuntu 22.04 LTS, Ubuntu 24.04 LTS and Debian 12.

Windows is still a target platform for WolfBot Community. The Windows install path remains documented for the follow-up installer release, but this beta should not be presented as a downloadable Windows build.

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

Supported broker families in this public beta:

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
b7cff2408b7ad6eafc6b374d2644202b15fb05ebe8c4bfdd72a12d4df91e2674
```

### Linux `.run`

```bash
chmod +x wolfbot-oneclick-0.1.0-beta.2.run
sudo WOLFBOT_ONECLICK_CONFIRM=INSTALL ./wolfbot-oneclick-0.1.0-beta.2.run
```

SHA256:

```text
16896217809f8525f65d806a3cb76d5856d3fa6c51fabe037b92bcd87441f046
```

After install, open:

```text
http://127.0.0.1:8080/portal/local/setup
```

## Verify before installing

On Linux:

```bash
sha256sum WolfBot-Setup-linux-amd64.deb
sha256sum wolfbot-oneclick-0.1.0-beta.2.run
```

Compare the output with the checksums above or the attached `SHA256SUMS`.

The release also includes:

- `wolfbot-release.json` — signed release manifest consumed by the updater/latest-release path
- `wolfbot-release.sig.json` — detached Ed25519 signature for `wolfbot-release.json`
- `release-manifest.0.1.0-beta.2.json` — full release manifest
- `release-manifest.0.1.0-beta.2.sig.json` — detached Ed25519 manifest signature
- `checksums.json` and `SHA256SUMS` — checksum manifests
- `checksums.txt`, `release-assets.json`, `SBOM-linux.spdx.json` and `source-build-info.json` — release audit/provenance metadata

Verification guide:

https://community.wolfbot.io/docs/how-to-verify-a-downloaded-trading-bot

## Validation

This build was tested locally before publication:

| Gate | Result |
|---|---|
| TradingView + Integrations backend tests | 76 passed |
| Customer-app Integrations tests | 16 passed |
| Customer-app build | passed |
| Release preflight tests | 18 passed |
| One-click installer `--verify` | passed, signed manifest verified |
| Download bundle verification | passed |
| Release targeted suite | 45 passed |
| `git diff --check` | passed |
| GHCR publish/sign/verify | completed for product components plus MT5 image |

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

## Known beta limitations

This is a Public Beta, not a Stable release:

- `production_ready=false` is expected by prerelease policy.
- Windows installer is not included in this release; Windows remains a target platform for a follow-up installer.
- Start with Simulation or a broker demo account.
- Runtime-generated SQLite files from the existing data bundle remain a non-fatal release-audit cleanup item before a stable production gate.
- A compiled parity source-smoke warning was non-fatal in this build pipeline and should be cleaned before a stable gate.

## Useful links

- Download Center: https://community.wolfbot.io/download
- Linux install guide: https://community.wolfbot.io/install/linux
- TradingView setup: https://community.wolfbot.io/docs/tradingview
- Simulation guide: https://community.wolfbot.io/docs/simulation
- Risk controls: https://community.wolfbot.io/docs/risk-controls
- Community vs Cloud: https://community.wolfbot.io/community-vs-cloud
- Discussions: https://github.com/wolfbot-io/wolfbot-community/discussions

## Short summary

WolfBot Community v0.1.0-beta.2 is a free self-hosted trading platform beta for Windows and Linux users, with Linux installers available now for crypto exchanges, futures accounts, MT5 markets and TradingView webhook automation. Install it locally, start in Simulation, verify checksums, and keep live trading conservative while the Community edition is still in beta.
