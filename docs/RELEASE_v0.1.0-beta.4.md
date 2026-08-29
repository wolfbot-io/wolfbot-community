# WolfBot Community v0.1.0-beta.4 — Free Self-Hosted Trading Platform for Windows & Linux

WolfBot Community v0.1.0-beta.4 is the latest public release of the free, self-hosted WolfBot trading platform for Windows and Linux users.

This Linux-first release ships signed Ubuntu/Debian and self-extracting Linux installers today, while the Windows installer remains on the WolfBot Community roadmap for a dedicated follow-up release.

WolfBot Community brings crypto, futures and MT5 trading into one self-hosted platform: one local dashboard, one execution pipeline, one risk-control layer, one portfolio view, one install you control. You run it on your own desktop, workstation, server or VPS. Your API keys, local data, broker configuration and trading history stay on your infrastructure.

## What's new in v0.1.0-beta.4

This release is a reliability and infrastructure hardening update, focused on making the self-hosted install experience smoother and the in-app update flow trustworthy end to end.

### In-app "Software update" notification now works correctly

Community's Settings page has a built-in "Software update" card that checks GitHub for a newer release and offers a direct download link, without you needing to watch the repository yourself.

Previously, that check could silently fail on a self-hosted install and report "you're on the latest version" even when a newer release existed. This release fixes the update checker's secure connection handling so the check runs reliably against GitHub's release feed, and the card now correctly reflects whether an update is actually available.

### Background safety jobs are more resilient

WolfBot Community runs a small set of periodic background jobs alongside your trading engine — including the TP/SL safety-net check that watches for positions missing their protective orders. This release closes a gap where one of those background jobs could fail to start its internal bookkeeping on a freshly-installed system, and hardens the same startup path across every core service in the platform so it can't silently recur elsewhere.

### Package installation is more robust

If you installed an earlier Community build using the older `0.1.0-p12-ghcr-rcNN` version naming, the Ubuntu/Debian package installer could previously report "a later version is already installed" and refuse to proceed, even for a genuinely newer release. This is fixed with a proper package epoch, so future releases upgrade cleanly regardless of past naming schemes.

### MT5 terminal containers recover automatically after a host restart

If your machine loses power or restarts uncleanly while an MT5 terminal container is running, the container previously could get stuck in a broken state after the next start and require manual cleanup. MT5 terminal containers now detect and clear this stale state automatically on boot, so a connected MT5 account keeps working across host restarts without you needing to intervene.

### Position-tracking self-heal for DCA accounts

For accounts using WolfBot's DCA (dollar-cost-averaging) discipline rules, an internal position tracker occasionally lost sync with the exchange's own reported open positions after certain edge-case timing windows. This release adds a background reconciliation check that safely re-syncs the tracker from the exchange's own state — corroborated against your trade history and debounced to avoid acting on stale reads — so the DCA guard always evaluates against your real, current positions. The check only ever restores missing tracking data; it never removes or closes anything on its own.

## Highlights carried over from previous releases

### TradingView webhook automation

TradingView alerts flow through the real WolfBot command pipeline.

Supported actions:

| TradingView payload action | WolfBot behavior |
|---|---|
| `buy` | queue/open long |
| `sell` | queue/open short |
| `close_long` | close an existing long side |
| `close_short` | close an existing short side |

The webhook route validates the source secret, deduplicates repeated signals, writes an internal command, and then lets the normal dispatcher, execution layer and risk controls handle the action. TradingView does not receive exchange API keys and does not talk to exchanges directly.

Docs: https://community.wolfbot.io/docs/tradingview

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

### Digest-pinned, signed runtime images

The release manifest pins the runtime by immutable container image digests, including:

- engine
- control-api
- gateway
- webui
- financial-publisher
- periodic-jobs
- worker-supervisor
- outcome worker

The installer pulls the exact image set signed for this release, not a mutable tag that can drift later.

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
3430e1b9ab3eae39e1299914ffebae2e40c0cbee16875dcff4e2778777339e7a
```

### Linux `.run`

```bash
chmod +x wolfbot-oneclick-0.1.0-beta.4.run
sudo WOLFBOT_ONECLICK_CONFIRM=INSTALL ./wolfbot-oneclick-0.1.0-beta.4.run
```

SHA256:

```text
d5bef01f23d3c70b003b80cfd3b7ec9685628c5de6f961fff8eaaa20689bd22c
```

After install, open:

```text
http://127.0.0.1:8080/portal/local/setup
```

Already running an earlier Community build? Just install the new `.deb` or `.run` over your existing install — no need to uninstall first, and your data/config stay in place.

## Verify before installing

On Linux:

```bash
sha256sum WolfBot-Setup-linux-amd64.deb
sha256sum wolfbot-oneclick-0.1.0-beta.4.run
```

Compare the output with the checksums above or the attached `SHA256SUMS`.

The release also includes:

- `wolfbot-release.json` — signed release manifest consumed by the updater/latest-release path
- `wolfbot-release.sig.json` — detached Ed25519 signature for `wolfbot-release.json`
- `release-manifest.0.1.0-beta.4.json` — full release manifest
- `release-manifest.0.1.0-beta.4.sig.json` — detached Ed25519 manifest signature
- `checksums.json` and `SHA256SUMS` — checksum manifests
- `checksums.txt`, `release-assets.json`, `SBOM-linux.spdx.json` and `source-build-info.json` — release audit/provenance metadata

Verification guide:

https://community.wolfbot.io/docs/how-to-verify-a-downloaded-trading-bot

## Validation

This build was tested locally before publication:

| Gate | Result |
|---|---|
| One-click installer `--verify` | passed, signed manifest verified |
| Download bundle verification | passed |
| `.deb` package version / epoch check | passed against a real `dpkg` comparison |
| Update-checker regression suite | 14 passed |
| Debian packaging regression suite | 9 passed |
| GHCR publish/sign/verify | completed for all 8 core service images plus MT5 image |

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
- Connect a Simulation or broker demo account first.
- Review the Smart Terminal, risk controls and TradingView automation before connecting a live account.

## Learn more

- Website: https://community.wolfbot.io
- Documentation: https://community.wolfbot.io/docs
- Discussions: https://github.com/wolfbot-io/wolfbot-community/discussions
- Issues: https://github.com/wolfbot-io/wolfbot-community/issues

WolfBot Community remains a Windows & Linux self-hosted trading platform. This release ships signed Linux installers; Windows packaging is on the roadmap for a dedicated follow-up release.
