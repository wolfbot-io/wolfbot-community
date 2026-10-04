# WolfBot Community v0.1.0-beta.14 — Free Self-Hosted Trading Platform for Linux

WolfBot Community v0.1.0-beta.14 is the latest public release of the free, self-hosted WolfBot trading platform. This release **fixes the MT5 upgrade-install data-corruption issue disclosed in v0.1.0-beta.13's known issues**, and continues MT5 symbol-resolution and MCP AI Agent groundwork.

## ✅ Fixes the v0.1.0-beta.13 known issue

v0.1.0-beta.13 shipped with a disclosed known issue: installing it **over** an existing Community install with an already-connected MT5 terminal could leave that terminal's own data unreadable, stopping it from updating prices. **This release fixes the root cause** — the installer's directory-ownership step now explicitly skips the MT5 terminal's own data tree on an upgrade install, instead of recursively reassigning it. Fresh installs were never affected, and this never touched any exchange (Binance/Bybit/BingX/KuCoin/Bitget) account. If you hit the beta.13 issue and haven't already applied the one-line workaround, upgrading to this release resolves it going forward.

## ⬇️ Download v0.1.0-beta.14

| Platform | File | Size | Download |
|---|---|---|---|
| 🐧 Linux — Debian / Ubuntu (`.deb`) | `WolfBot-Setup-linux-amd64.deb` | ~86 MB | **[⬇️ Download .deb](https://github.com/wolfbot-io/wolfbot-community/releases/download/v0.1.0-beta.14/WolfBot-Setup-linux-amd64.deb)** |
| 🐧 Linux — any distro (`.run`, self-extracting) | `WolfBot-Setup-0.1.0-beta.14-linux-amd64.run` | ~113 MB | **[⬇️ Download .run](https://github.com/wolfbot-io/wolfbot-community/releases/download/v0.1.0-beta.14/WolfBot-Setup-0.1.0-beta.14-linux-amd64.run)** |
| 🪟 Windows — 64-bit installer (`.exe`, unchanged from v0.1.0-beta.10) | `WolfBot-Setup-0.1.0-beta.10-windows-x64.exe` | ~457 MB | **[⬇️ Download .exe](https://github.com/wolfbot-io/wolfbot-community/releases/download/v0.1.0-beta.10/WolfBot-Setup-0.1.0-beta.10-windows-x64.exe)** |

Not sure which Linux file to pick? Use `.deb` on Ubuntu/Debian for a normal `apt`-managed install, or `.run` on any other Linux distro. SHA256 checksums are in the [Verify before installing](#verify-before-installing) section below and in the `SHA256SUMS` asset attached to this release.

## What's new since v0.1.0-beta.13

### MT5 upgrade-install data corruption — fixed

The installer's host-provisioning step previously reassigned ownership of every file under its data directory on every install, including a connected MT5 terminal's own `/config` tree (owned by the terminal process, not WolfBot's own runtime user). On an upgrade install over an already-provisioned terminal, this could leave that terminal unable to read its own files, stopping price updates for that account. The provisioning step now explicitly excludes the MT5 terminal data tree from this step, matching the terminal's own expected ownership. Fresh installs (no existing MT5 terminal yet) were never affected by the beta.13 issue and see no behavior change here.

### Continued MT5 self-serve symbol-resolution and MCP AI Agent work

Further groundwork on automatically resolving a self-serve MT5 broker's real suffixed symbol names (for example `AAPL.s`, `XAUUSD+`) against WolfBot's own canonical names, and on the MCP AI Agent interface's broker-side position actions, read-only risk tools, and an owner-approval workflow. These remain internal/advanced, opt-in work — see the [MCP AI Agent section](https://community.wolfbot.io/#mcp-ai-agent) on the main site for the current scope.

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

Use v0.1.0-beta.14 if you want to:

- run a free self-hosted trading platform on Ubuntu, Debian or a Linux VPS;
- upgrade an existing Community install that has a connected MT5 account, without the beta.13 data-corruption risk;
- connect crypto/futures accounts and MT5 from one dashboard.

Already running v0.1.0-beta.13 or earlier? Just install the new `.deb` or `.run` over your existing install — no need to uninstall first, and your data/config stay in place. On Windows, there is nothing new to install this release; keep your current v0.1.0-beta.10 install.

## Install

Ubuntu/Debian:

```bash
sudo apt install ./WolfBot-Setup-linux-amd64.deb
```

Self-extracting installer:

```bash
chmod +x WolfBot-Setup-0.1.0-beta.14-linux-amd64.run
sudo WOLFBOT_ONECLICK_CONFIRM=INSTALL ./WolfBot-Setup-0.1.0-beta.14-linux-amd64.run
```

After install, open:

```text
http://127.0.0.1:8080/portal/local/setup
```

## Verify before installing

```bash
sha256sum WolfBot-Setup-linux-amd64.deb
sha256sum WolfBot-Setup-0.1.0-beta.14-linux-amd64.run
```

| File | SHA256 |
|---|---|
| `WolfBot-Setup-linux-amd64.deb` | `66951e5422b3284bab3ef92b9ae50a902c07d1f2f29d38eceb6087967e77fb78` |
| `WolfBot-Setup-0.1.0-beta.14-linux-amd64.run` | `0285c05918c25237f2230b90faea00d6ef4887ea21aba859667494ba9711bf89` |

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

WolfBot Community remains a Windows & Linux self-hosted trading platform. This release ships signed Linux installers and closes the v0.1.0-beta.13 MT5 upgrade-install known issue; the existing v0.1.0-beta.10 Windows build remains the current Windows option.
