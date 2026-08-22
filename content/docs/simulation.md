---
title: "Start WolfBot Community with a Demo Account"
description: "Learn how to test WolfBot Community risk-free with a broker Demo account. Paper-trade against real market data across crypto and MT5 markets without risking real funds."
tested_version: "0.1.0-p12-ghcr-rc21"
last_updated: "2026-08-12"
platforms: ["windows", "linux"]
category: "simulation"
difficulty: "beginner"
estimated_time: "10 minutes"
next_guide: "/brokers/bybit"
previous_guide: "/getting-started"
related_guides: ["/getting-started", "/docs/risk-controls", "/docs/smart-terminal"]
keywords: [
  "wolfbot simulation",
  "wolfbot paper trading",
  "wolfbot demo mode",
  "test trading bot without money",
  "crypto trading simulator",
  "bybit demo account"
]
sitemap_priority: 0.85
---

# Start with a Demo Account

**Tested with WolfBot Community v0.1.0-p12-ghcr-rc21** · Last updated: 2026-08-12

## What is "Simulation" in WolfBot?

WolfBot doesn't have a separate global "Simulation mode" you switch on and off. Instead, you connect a broker's own **Demo (testnet) account** — the same interface, the same risk engine and the same order logic as live trading, but running against real-time market data with virtual funds instead of real ones. Nothing about the platform changes between Demo and Live; only which account you're trading on does.

For Bybit specifically, WolfBot auto-detects whether an API key belongs to a Demo or a Live account — you don't select a mode manually.

## Why start with a Demo account?

1. **Zero risk** — No real money involved
2. **Learn the interface** — Understand orders, positions, risk controls across markets
3. **Test strategies** — Validate your approach on crypto and MT5 instruments before going live
4. **Build confidence** — See how WolfBot reacts to market movements across different asset classes

## Step 1: Connect a Demo Account

1. Open WolfBot Community → **Exchange Accounts → Add Account**
2. Choose **Bybit** and create a Demo/testnet API key — see the [Bybit connect guide](/brokers/bybit) for exact steps
3. Paste the key in. WolfBot detects it's a Demo key automatically and labels the account accordingly
4. MT5 users: most MT5 brokers also offer a free demo account — check your broker's dashboard, then follow the [MT5 connect guide](/brokers/mt5)

## Step 2: Explore the Smart Terminal

The Smart Terminal is your manual trading interface — the same one you'll use for live trading later.

1. Go to **Smart Terminal**
2. Select your Demo account, then a trading pair (e.g., BTC/USDT for crypto, or XAU/USD for gold via MT5)
3. Notice the pre-filled risk parameters:
   - Position size
   - Stop-loss
   - Take-profit
4. Click **Place Order**

Your order appears in the **Positions** panel immediately — funded by your Demo account's virtual balance.

## Step 3: Watch Your Demo Portfolio

1. Go to **Portfolio Overview**
2. See your Demo account's balance and P&L
3. Watch positions update with real market prices
4. Observe how TP/SL levels protect your position

## Step 4: Configure Risk Controls

Even on Demo, practice good risk management — these settings carry over identically when you connect a Live account:

1. **Position Limits** — Max size per trade
2. **Drawdown Guards** — Max loss before stopping
3. **Cooldowns** — Minimum time between trades
4. **Daily Limits** — Max number of trades per day

> 🛡️ Risk controls work identically on Demo and Live accounts. Configure them now so you're ready when you go live.

See [Risk Controls Guide →](/docs/risk-controls)

## Step 5: Try Automated Bots

1. Go to **Bots → Create Bot**
2. Choose a strategy template
3. Configure parameters
4. Point the bot at your Demo account
5. Watch it execute trades automatically — the same logic runs for crypto and MT5 instruments

## Switching to Live Trading

When you're confident:
1. Connect a broker account with a Live, trade-only API key (see [Connect Your Markets](/getting-started))
2. Start with minimum position sizes
3. Keep tight stop-losses
4. Gradually increase as you verify behavior

> ⚠️ Even experienced traders should test new strategies on a Demo account first — especially when trading across different market types.

## Common Questions

**Q: Does a Demo account use real market data?**
Yes. WolfBot fetches real-time prices from exchanges and MT5 brokers for both Demo and Live accounts.

**Q: Can I lose money on a Demo account?**
No. Demo accounts trade with virtual funds provided by the exchange/broker, not real money.

**Q: How realistic is Demo vs Live?**
WolfBot runs the exact same order logic on both. The main difference is execution — a Demo account fills against the exchange's testnet, not the real order book, so slippage can differ slightly. This is true whether you're trading crypto, forex, or gold.

**Q: Can I reset my Demo balance?**
That depends on the exchange, not WolfBot — most brokers let you top up or reset a Demo account's virtual balance from their own website (e.g., Bybit's testnet dashboard).

## Next step

> **[Connect Bybit Demo →](/brokers/bybit)** or **[Explore Risk Controls →](/docs/risk-controls)**
