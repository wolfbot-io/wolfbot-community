# WolfBot Community

<p align="center">
  <img src=".github/assets/social-preview.png" alt="WolfBot Community — One Platform. Every Market." width="640" />
</p>

<h3 align="center">One Platform. Every Market.</h3>

<p align="center">
  <strong>Crypto. Futures. MT5. One platform. One interface. One trading workflow.</strong>
</p>

<p align="center">
  <a href="https://community.wolfbot.io/download">
    <img src="https://img.shields.io/badge/Download-WolfBot%20Community-2563eb?style=for-the-badge" alt="Download WolfBot Community" />
  </a>
</p>

<p align="center">
  <a href="https://community.wolfbot.io">Website</a> ·
  <a href="https://community.wolfbot.io/getting-started">Getting Started</a> ·
  <a href="https://community.wolfbot.io/docs">Documentation</a> ·
  <a href="https://github.com/wolfbot-io/wolfbot-community/releases/latest">Latest Release</a> ·
  <a href="https://github.com/wolfbot-io/wolfbot-community/discussions">Discussions</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/channel-public%20preview-blue" alt="Public Preview" />
  <img src="https://img.shields.io/badge/platform-Windows-0078D6?logo=windows" alt="Windows" />
  <img src="https://img.shields.io/badge/platform-Linux-FCC624?logo=linux" alt="Linux" />
  <img src="https://img.shields.io/badge/markets-Crypto%20%2B%20Futures%20%2B%20MT5-orange" alt="Markets" />
  <img src="https://img.shields.io/github/downloads/wolfbot-io/wolfbot-community/total" alt="Downloads" />
  <img src="https://img.shields.io/github/discussions/wolfbot-io/wolfbot-community" alt="Discussions" />
  <img src="https://img.shields.io/badge/license-Proprietary-lightgrey" alt="License" />
</p>

---

## Stop Managing Markets in Separate Platforms

Trading infrastructure is fragmented.

One exchange app for crypto. Another for futures. MT5 terminal for traditional markets. Different dashboards for every account. Different bots for every platform. Separate risk tools scattered everywhere.

**WolfBot changes that.**

WolfBot Community brings modern digital markets and traditional financial markets into one unified trading environment — free and self-hosted on Windows or Linux. Connect your crypto exchanges and MT5 brokers once, then manage everything from one interface.

```text
                  CRYPTO EXCHANGES
                        │
Binance ──── Bybit ──── BingX ──── KuCoin ──── Bitget
            │            │            │             │
            └────────────┼────────────┼─────────────┘
                         │
                         ▼
                      WOLFBOT
                 Unified Trading Platform
                         │
              ┌──────────┼──────────┐
              │          │          │
          Trading      Risk     Portfolio
          Engine      Engine    Management
              │          │          │
              └──────────┼──────────┘
                         │
                         ▼
                  ONE INTERFACE
                         ▲
                         │
            ┌────────────┼────────────┐
            │            │            │
        Forex ────  Gold ────  Indices ──── Stocks/CFDs
                         │
                    MT5 BROKERS
```

### WolfBot vs a Typical Trading Bot

A typical trading bot connects to **one exchange → one API → one strategy → one market**.

WolfBot unifies **multiple exchanges + multiple brokers + crypto + MT5 markets** under one platform:

| | Typical Bot | WolfBot Community |
|---|---|---|
| **Markets** | One exchange | Crypto + Futures + MT5 |
| **Interface** | One dashboard per bot | One unified interface |
| **Risk** | Per-bot or none | Unified risk across all markets |
| **Portfolio** | Per-exchange | One portfolio — all markets |
| **Execution** | Direct to exchange | Unified execution layer |
| **Cost** | Varies (free to $$$) | Free |

---

## Four Brand Pillars

| Pillar | What It Means |
|---|---|
| 🌐 **Unified Markets** | Crypto exchanges (Binance, Bybit, BingX, KuCoin, Bitget) and MT5 brokers (Forex, Gold, Indices, Stocks/CFDs) — one platform |
| 🖥️ **One Interface** | Accounts, positions, orders, bots, strategies, portfolio — one dashboard |
| 🎯 **One Trading Layer** | Unified order routing across exchanges and brokers — consistent workflow regardless of market |
| 🛡️ **Unified Risk** | Position limits, drawdown guards, cooldowns — apply identically across all connected markets |

---

## Install in Minutes

### Windows
```powershell
# 1. Download Setup.exe from community.wolfbot.io/download
# 2. Double-click → Install → Open WolfBot
# 3. Setup Wizard guides you through Simulation mode
```

### Linux (Ubuntu/Debian)
```bash
cd ~/Downloads
sudo dpkg -i WolfBot-Setup-*.deb
sudo apt-get install -f       # if needed
wolfbot start                  # launch
```

> Docker is installed automatically. No manual setup required.

**[→ Download WolfBot Community](https://community.wolfbot.io/download)** · [Windows Guide](https://community.wolfbot.io/install/windows) · [Linux Guide](https://community.wolfbot.io/install/linux)

---

## Screenshots

<p align="center">
  <em>Dashboard · Smart Terminal · Portfolio · Risk Controls</em>
  <br/>
  <sub>Screenshots coming in the next release</sub>
</p>

---

## Supported Markets

### Crypto & Futures
| Exchange | Status | Features |
|---|---|---|
| **Binance** | ✅ Stable | Spot, Futures, Demo, Terminal, Strategies |
| **Bybit** | ✅ Stable | Spot, Futures, Demo, Terminal, Strategies |
| **BingX** | ✅ Stable | Standard, Perpetual Futures, Demo, Terminal |
| **KuCoin** | ✅ Stable | Spot, Futures, Demo, Terminal, Strategies |
| **Bitget** | ✅ Stable | Spot, Futures, Demo, Terminal, Strategies |

### Traditional Markets via MT5 (Windows)
| Market | Status | Instruments |
|---|---|---|
| **Forex** | ✅ Stable | EUR/USD, GBP/USD, USD/JPY, etc. |
| **Gold** | ✅ Stable | XAU/USD |
| **Indices** | ✅ Stable | US30, NAS100, S&P 500, etc. |
| **Stocks/CFDs** | ✅ Stable | Broker-dependent |

> MT5 bridge currently requires Windows. Linux support is planned.

---

## Security

WolfBot Community is built with security-first principles:

- 🔑 **Trade-only API keys** — No withdrawal permissions. Funds cannot leave your exchange.
- 💻 **Self-hosted** — Runs on your machine. API keys and trading data stay local.
- ✍️ **Signed releases** — Cryptographically signed installers. Verify checksums before installing.
- 🧪 **Simulation-first** — Default mode is paper trading. Test strategies without risking funds.
- 🔒 **Non-custodial** — WolfBot never holds your funds. You control your exchange accounts.

[Read our full security policy →](https://community.wolfbot.io/security)

---

## Community vs Cloud

| | WolfBot Community | WolfBot Cloud |
|---|---|---|
| **Cost** | Free forever | Subscription |
| **Hosting** | Self-hosted — your machine or VPS | Managed by WolfBot.io |
| **Markets** | Crypto + Futures + MT5 | Crypto + Futures + MT5 |
| **Setup** | Install & configure | Ready immediately |
| **Updates** | Channel-based auto-update | Automatic |
| **Support** | Community (Discussions) | Direct support |
| **Customization** | Full access — your machine, your rules | Within platform |

[Detailed comparison →](https://community.wolfbot.io/community-vs-cloud)

---

## Quick Start

1. [Download WolfBot Community](https://community.wolfbot.io/download)
2. [Install on Windows](https://community.wolfbot.io/install/windows) or [Linux](https://community.wolfbot.io/install/linux)
3. [Read Getting Started](https://community.wolfbot.io/getting-started)
4. [Start with Simulation](https://community.wolfbot.io/docs/simulation) — zero risk
5. [Connect a broker](https://community.wolfbot.io/brokers) — start with a demo account

---

## Documentation

| Category | Guides |
|---|---|
| **Getting Started** | [Overview](https://community.wolfbot.io/getting-started) · [Windows Install](https://community.wolfbot.io/install/windows) · [Linux Install](https://community.wolfbot.io/install/linux) |
| **Trading** | [Smart Terminal](https://community.wolfbot.io/docs/smart-terminal) · [Risk Controls](https://community.wolfbot.io/docs/risk-controls) · [Simulation](https://community.wolfbot.io/docs/simulation) |
| **Brokers** | [Bybit](https://community.wolfbot.io/brokers/bybit) · [Binance](https://community.wolfbot.io/brokers/binance) · [BingX](https://community.wolfbot.io/brokers/bingx) · [KuCoin](https://community.wolfbot.io/brokers/kucoin) · [Bitget](https://community.wolfbot.io/brokers/bitget) · [MT5](https://community.wolfbot.io/brokers/mt5) · [API Key Guide](https://community.wolfbot.io/brokers/api-key-guide) |
| **Platform** | [Updates](https://community.wolfbot.io/docs/updates) · [Backup & Restore](https://community.wolfbot.io/docs/backup) · [Release Channels](https://community.wolfbot.io/releases/channels) · [Troubleshooting](https://community.wolfbot.io/docs/troubleshooting) |
| **Reference** | [Community vs Cloud](https://community.wolfbot.io/community-vs-cloud) · [Self-Hosted Explained](https://community.wolfbot.io/docs/self-hosted-explained) · [Security](https://community.wolfbot.io/security) |

---

## Community

- 💬 [GitHub Discussions](https://github.com/wolfbot-io/wolfbot-community/discussions) — Q&A, ideas, strategies, show & tell
- 🐛 [GitHub Issues](https://github.com/wolfbot-io/wolfbot-community/issues) — Bug reports, feature requests, broker issues
- 🗺️ [Public Roadmap](https://github.com/orgs/wolfbot-io/projects/1) — What we're building next
- 🌐 [Community Website](https://community.wolfbot.io) — Full documentation & guides
- ☁️ [WolfBot Cloud](https://wolfbot.io) — Managed WolfBot experience

---

## Official Links

| | |
|---|---|
| 🌐 **Website** | [community.wolfbot.io](https://community.wolfbot.io) |
| 📦 **Downloads** | [community.wolfbot.io/download](https://community.wolfbot.io/download) |
| 🚀 **Releases** | [GitHub Releases](https://github.com/wolfbot-io/wolfbot-community/releases) |
| ☁️ **WolfBot Cloud** | [wolfbot.io](https://wolfbot.io) |

---

<p align="center">
  <strong>WolfBot Community</strong> — <em>One Platform. Every Market.</em><br/>
  <sub>Free · Self-Hosted · Windows & Linux · Crypto + Futures + MT5</sub><br/>
  <sub>Built with ❤️ by <a href="https://wolfbot.io">WolfBot.io</a></sub>
</p>
