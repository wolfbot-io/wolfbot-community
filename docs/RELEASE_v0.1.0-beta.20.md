# WolfBot Community v0.1.0-beta.20 — Free Self-Hosted Trading Platform for Linux

WolfBot Community v0.1.0-beta.20 is the latest public release of the free, self-hosted WolfBot trading platform. It adds **per-account Trading settings** (Model Type, Trailing, Account Profit Lock) to the dashboard for every broker, **fixes missing stop-loss on small Binance Portfolio Margin LONG positions**, and adds **OKX symbol aliasing for spot-gold (PAXGUSDT)**. It also includes everything prepared as v0.1.0-beta.19 (an internal build that was never published) and carries forward every change from v0.1.0-beta.18.

## ⬇️ Download v0.1.0-beta.20

| Platform | File | Size | Download |
|---|---|---|---|
| 🐧 Linux — Debian / Ubuntu (`.deb`) | `WolfBot-Setup-linux-amd64.deb` | ~86 MB | **[⬇️ Download .deb](https://github.com/wolfbot-io/wolfbot-community/releases/download/v0.1.0-beta.20/WolfBot-Setup-linux-amd64.deb)** |
| 🐧 Linux — any distro (`.run`, self-extracting) | `WolfBot-Setup-0.1.0-beta.20-linux-amd64.run` | ~113 MB | **[⬇️ Download .run](https://github.com/wolfbot-io/wolfbot-community/releases/download/v0.1.0-beta.20/WolfBot-Setup-0.1.0-beta.20-linux-amd64.run)** |
| 🪟 Windows — 64-bit installer (`.exe`, unchanged from v0.1.0-beta.15) | `WolfBot-Setup-0.1.0-beta.15-windows-x64.exe` | ~564 MB | **[⬇️ Download .exe](https://github.com/wolfbot-io/wolfbot-community/releases/download/v0.1.0-beta.15/WolfBot-Setup-0.1.0-beta.15-windows-x64.exe)** |

Not sure which Linux file to pick? Use `.deb` on Ubuntu/Debian for a normal `apt`-managed install, or `.run` on any other Linux distro. SHA256 checksums are in the [Verify before installing](#verify-before-installing) section below and in the `SHA256SUMS` asset attached to this release.

## What's new since v0.1.0-beta.18

### Account Trading settings — for every broker

Accounts → Details now has a **Trading settings** block (all brokers, MT5 included) to set the account's **Model Type**, **Trailing**, and **Account Profit Lock** (all its fields) directly from the dashboard instead of editing config files. Changes are validated before anything is written, only the fields you send are changed, the write is rolled back if the second config file fails, and the account must belong to your tenant. These are **account-level** settings: the Bots page is unchanged.

### Binance Portfolio Margin — stop-loss no longer silently missing on small LONGs

On a small LONG position against a large Portfolio Margin equity, the computed stop-loss could land below Binance's minimum trigger price and be rejected (`-4502`), leaving the position with no SL while the log still said it succeeded. The executor now clamps the stop-loss up to the symbol's minimum price, and an API-level rejection is treated as a failure (retried and alerted) instead of a success. Only the Binance Portfolio Margin executor changed; other brokers are unaffected.

### OKX — spot-gold symbol aliasing

OKX lists spot-gold as `XAU/USDT:USDT`, while WolfBot's canonical name is `PAXGUSDT`. The OKX executor now maps `PAXGUSDT` to the OKX swap market. Disable with `OKX_SYMBOL_ALIAS_ENABLED=0`.

### Carried forward from v0.1.0-beta.18

- **Gate Account Connect** and hardened **OKX/Gate TP/SL** handling.
- **BingX multi-asset collateral** and **Binance Portfolio Margin liabilities** counted correctly in equity.
- **Binance timestamp errors** no longer crash the outcome simulator (`BINANCE_RECV_WINDOW_MS`).
- **Bitget UTA realized PnL**, KuCoin UTA TP/SL visibility, OKX Account Connect, and everything from earlier releases.

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

Use v0.1.0-beta.20 if you want to:

- run a free self-hosted trading platform on Ubuntu, Debian or a Linux VPS;
- set Model Type, Trailing and Account Profit Lock per account from the dashboard;
- run Binance Portfolio Margin accounts with small LONG positions and a reliably placed stop-loss;
- trade gold on OKX through the `PAXGUSDT` alias, or connect a Gate account;
- run BingX Multi-Assets Margin or Binance Portfolio Margin accounts with equity that reflects the real collateral and liabilities;
- run Bitget UTA accounts with realized-PnL reporting;
- connect crypto/futures accounts and MT5 from one dashboard.

Already running v0.1.0-beta.18 or earlier on Linux? Install the new `.deb` or `.run` over your existing install — no need to uninstall first, and your data/config stay in place. On Windows there is nothing new to install this release; keep your current v0.1.0-beta.15 installer.

## Install

Ubuntu/Debian:

```bash
sudo apt install ./WolfBot-Setup-linux-amd64.deb
```

Self-extracting installer:

```bash
chmod +x WolfBot-Setup-0.1.0-beta.20-linux-amd64.run
sudo WOLFBOT_ONECLICK_CONFIRM=INSTALL ./WolfBot-Setup-0.1.0-beta.20-linux-amd64.run
```

After install, open:

```text
http://127.0.0.1:8080/portal/local/setup
```

## Verify before installing

```bash
sha256sum WolfBot-Setup-linux-amd64.deb
sha256sum WolfBot-Setup-0.1.0-beta.20-linux-amd64.run
```

| File | SHA256 |
|---|---|
| `WolfBot-Setup-linux-amd64.deb` | `f8dcaeabf658987ef78095e2aa375477b8cc2406dd631e76c06499a34692acb1` |
| `WolfBot-Setup-0.1.0-beta.20-linux-amd64.run` | `4b448ec8a5741a98736ee2c5166f4592f6b46d23d2c76d0f4f1b8567cdca533e` |

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
