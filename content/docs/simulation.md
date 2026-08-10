---
title: "Start WolfBot Community with Simulation"
description: "Learn how to use WolfBot Community Simulation mode. Paper-trade against real market data across crypto and MT5 markets without risking real funds."
tested_version: "0.8.0-beta.2"
last_updated: "2026-08-11"
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
  "crypto trading simulator"
]
sitemap_priority: 0.85
---

# Start with Simulation

**Tested with WolfBot Community v0.8.0-beta.2** · Last updated: 2026-08-11

## What is Simulation?

Simulation mode lets you paper-trade using real market data without risking any funds — across all markets WolfBot connects to. WolfBot processes real-time prices from crypto exchanges and MT5 brokers, executing simulated orders exactly like live trading, but with virtual money.

## Why start with Simulation?

1. **Zero risk** — No real money involved
2. **Learn the interface** — Understand orders, positions, risk controls across markets
3. **Test strategies** — Validate your approach on crypto and MT5 instruments before going live
4. **Build confidence** — See how WolfBot reacts to market movements across different asset classes

## Step 1: Enable Simulation

1. Open WolfBot Community
2. Go to **Settings → Mode**
3. Select **Simulation**
4. Click **Save**

> ℹ️ Simulation is the default mode on first install.

## Step 2: Explore the Smart Terminal

The Smart Terminal is your manual trading interface — the same one you'll use for live trading later.

1. Go to **Smart Terminal**
2. Select a trading pair (e.g., BTC/USDT for crypto, or XAU/USD for gold via MT5)
3. Notice the pre-filled risk parameters:
   - Position size
   - Stop-loss
   - Take-profit
4. Click **Place Order** (simulated)

Your order appears in the **Positions** panel immediately.

## Step 3: Watch Your Simulated Portfolio

1. Go to **Portfolio Overview**
2. See your simulated balance and P&L
3. Watch positions update with market prices
4. Observe how TP/SL levels protect your simulated position

## Step 4: Configure Risk Controls

Even in Simulation, practice good risk management:

1. **Position Limits** — Max size per trade
2. **Drawdown Guards** — Max loss before stopping
3. **Cooldowns** — Minimum time between trades
4. **Daily Limits** — Max number of trades per day

> 🛡️ Risk controls work the same way in Simulation and Live mode. Configure them now so you're ready when you go live.

See [Risk Controls Guide →](/docs/risk-controls)

## Step 5: Try Automated Bots

1. Go to **Bots → Create Bot**
2. Choose a strategy template
3. Configure parameters
4. Start the bot in Simulation mode
5. Watch it execute trades automatically — the same logic runs for crypto and MT5 instruments

## Switching to Live Trading

When you're confident:
1. Connect a broker account (trade-only API key)
2. Start with minimum position sizes
3. Keep tight stop-losses
4. Gradually increase as you verify behavior

> ⚠️ Never skip Simulation. Even experienced traders should test new strategies in Simulation first — especially when trading across different market types.

## Common Questions

**Q: Does Simulation use real market data?**
Yes. WolfBot fetches real-time prices from exchanges and MT5 brokers.

**Q: Can I lose money in Simulation?**
No. All trades are simulated with virtual funds.

**Q: How realistic is Simulation vs Live?**
Simulation uses the same order logic as live trading. The main difference is no real execution slippage. This is true whether you're trading crypto, forex, or gold.

**Q: Can I reset my Simulation balance?**
Yes. Settings → Simulation → Reset Balance.

## Next step

> **[Connect Bybit Demo →](/brokers/bybit)** or **[Explore Risk Controls →](/docs/risk-controls)**
