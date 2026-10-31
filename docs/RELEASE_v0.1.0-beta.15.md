# WolfBot Community v0.1.0-beta.15 — Free Self-Hosted Trading Platform for Windows & Linux

WolfBot Community v0.1.0-beta.15 is a public release of the free, self-hosted WolfBot trading platform. Its Windows Public Preview asset was added on 2026-10-31; Linux users should use the newer v0.1.0-beta.16 release. Beta.15 **fixes an account-rename bug that could orphan a connected account's ROI/equity-curve history** and carries forward every fix from v0.1.0-beta.14.

## ✅ Fixes equity-curve history loss after renaming an account

Renaming a connected account (via its label/display name) previously started a brand-new, empty ROI/equity-curve history file instead of continuing the existing one — making the account's equity curve on the Overview page look like tracking had just started, even though weeks of real history existed under the account's old name. The account-rename flow now migrates the existing ROI history file to the new name automatically, so renaming an account no longer loses its equity-curve history. This only affects the local reporting/history file used to draw the equity curve — it never touches trading, balances, or order execution.

## ⬇️ Download v0.1.0-beta.15

| Platform | File | Size | Download |
|---|---|---|---|
| 🐧 Linux — Debian / Ubuntu (`.deb`) | `WolfBot-Setup-linux-amd64.deb` | ~86 MB | **[⬇️ Download .deb](https://github.com/wolfbot-io/wolfbot-community/releases/download/v0.1.0-beta.15/WolfBot-Setup-linux-amd64.deb)** |
| 🐧 Linux — any distro (`.run`, self-extracting) | `WolfBot-Setup-0.1.0-beta.15-linux-amd64.run` | ~113 MB | **[⬇️ Download .run](https://github.com/wolfbot-io/wolfbot-community/releases/download/v0.1.0-beta.15/WolfBot-Setup-0.1.0-beta.15-linux-amd64.run)** |
| 🪟 Windows 10/11 — 64-bit Public Preview (`.exe`) | `WolfBot-Setup-0.1.0-beta.15-windows-amd64.exe` | ~520 MB | **[⬇️ Download .exe](https://github.com/wolfbot-io/wolfbot-community/releases/download/v0.1.0-beta.15/WolfBot-Setup-0.1.0-beta.15-windows-amd64.exe)** |

Not sure which Linux file to pick? Use `.deb` on Ubuntu/Debian for a normal `apt`-managed install, or `.run` on any other Linux distro. Windows users should use the `.exe`. SHA256 checksums are in the [Verify before installing](#verify-before-installing) section below and in the checksum assets attached to this release.

> **Windows Public Preview:** the beta.15 Windows installer replaces beta.10 and contains the corrected market-data reconnect packaging plus the current Windows Community runtime. It is not yet Authenticode-signed, so verify its SHA256 before running it and expect Windows SmartScreen to show an unrecognized-publisher warning.

## What's new since v0.1.0-beta.14

### Equity-curve history preserved after an account rename — fixed

The ROI/equity-curve snapshot history for an account is stored in a file keyed by that account's label. Renaming an account via the dashboard previously left the existing history file in place under the old name and started a brand-new, empty one for the new name, so the Overview page's equity curve would appear to reset to "tracking started today." The rename flow now migrates the existing history file to the new label (fail-safe: it never overwrites an existing file at the destination), so a rename is purely cosmetic and the full equity-curve history is preserved.

### Carried forward from v0.1.0-beta.14

- **MT5 upgrade-install data corruption — fixed.** Installing over an existing Community install that already has a connected MT5 terminal no longer leaves that terminal's own data unreadable. Fresh installs were never affected.
- **MT5 self-serve symbol resolution** — continued groundwork on resolving a broker's real suffixed symbol names (e.g. `AAPL.s`, `XAUUSD+`) against WolfBot's own canonical names.
- **MCP AI Agent — continued groundwork** — broker-side position actions, read-only risk tools, and an owner-approval workflow. Advanced, opt-in capability.

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

Use v0.1.0-beta.15 if you want to:

- run a free self-hosted trading platform on Windows 10/11, Ubuntu, Debian or a Linux VPS;
- rename a connected account without losing its equity-curve history on the Overview page;
- upgrade an existing Community install that has a connected MT5 account, without the beta.13 data-corruption risk;
- connect crypto/futures accounts and MT5 from one dashboard.

Already running an earlier Community build? Install the matching beta.15 package over your existing installation — `.exe` on Windows, `.deb` or `.run` on Linux. You do not need to uninstall first, and your data/config stay in place.

## Install

Ubuntu/Debian:

```bash
sudo apt install ./WolfBot-Setup-linux-amd64.deb
```

Self-extracting installer:

```bash
chmod +x WolfBot-Setup-0.1.0-beta.15-linux-amd64.run
sudo WOLFBOT_ONECLICK_CONFIRM=INSTALL ./WolfBot-Setup-0.1.0-beta.15-linux-amd64.run
```

After install, open:

```text
http://127.0.0.1:8080/portal/local/setup
```

Windows:

1. Download `WolfBot-Setup-0.1.0-beta.15-windows-amd64.exe`.
2. Verify its SHA256 below.
3. Double-click it. Because this Public Preview is not yet Authenticode-signed, choose **More info → Run anyway** when SmartScreen appears.

## Verify before installing

```bash
sha256sum WolfBot-Setup-linux-amd64.deb
sha256sum WolfBot-Setup-0.1.0-beta.15-linux-amd64.run
```

```powershell
Get-FileHash .\WolfBot-Setup-0.1.0-beta.15-windows-amd64.exe -Algorithm SHA256
```

| File | SHA256 |
|---|---|
| `WolfBot-Setup-linux-amd64.deb` | `ca4822bc0c583f1fe45a446cfd0f5e979baa22d7546a5b4eeeb2c9099b19e3e7` |
| `WolfBot-Setup-0.1.0-beta.15-linux-amd64.run` | `b5ae36342b8006094bbb3efe6d9e423ab970721e2ecf929cdd7b8d0eec91d245` |
| `WolfBot-Setup-0.1.0-beta.15-windows-amd64.exe` | `64f896b98688760b08491c6cb303e6dc3263b64d1c1c6f0df16a5776d8041083` |

Compare the values with the checksums above or the `SHA256SUMS` file attached to the GitHub release.

Read more: [How to verify a downloaded trading bot](https://community.wolfbot.io/docs/how-to-verify-a-downloaded-trading-bot).

## Validation summary

Verified directly against the published artifacts for this release:

| Gate | Result |
|---|---|
| Signed release manifest | verified against the WolfBot release Ed25519 public key |
| Engine + translator container images | verified with `cosign verify` against the WolfBot release public key |
| `.deb` / `.run` checksums | match the published `checksums.json` / `SHA256SUMS` byte-for-byte |
| Windows `.exe` checksum | matches the published `SHA256SUMS-windows.txt`; Authenticode is not yet available |

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

- Install the signed Linux `.deb` / `.run`, or the checksum-published Windows Public Preview `.exe`, from this release.
- Open the local setup wizard at `http://127.0.0.1:8080/portal/local/setup`.
- Start with Simulation or a broker demo account to learn the workflow.
- Use trade-only API keys for live exchanges and keep withdrawal permissions disabled.
- Verify checksums before installing and keep the signed release files for auditability.
- On Windows, verify the published SHA256 before running the unsigned Public Preview installer.

## Learn more

- Website: https://community.wolfbot.io
- Documentation: https://community.wolfbot.io/docs
- Discussions: https://github.com/wolfbot-io/wolfbot-community/discussions
- Telegram: https://t.me/wolfbot_community
- Issues: https://github.com/wolfbot-io/wolfbot-community/issues

WolfBot Community remains a Windows & Linux self-hosted trading platform. This release ships signed Linux installers and a checksum-published Windows Public Preview installer.
