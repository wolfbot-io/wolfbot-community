---
title: "WolfBot Community Smart Terminal — Manual Trading Guide"
description: "How to use the WolfBot Community Smart Terminal for manual trading. Place orders with automatic risk controls across all your connected crypto exchanges and MT5 brokers."
tested_version: "0.1.0-beta.2"
last_updated: "2026-08-11"
platforms: ["windows", "linux"]
category: "smart-terminal"
difficulty: "beginner"
estimated_time: "10 minutes"
next_guide: "/docs/risk-controls"
previous_guide: "/docs/simulation"
related_guides: ["/docs/simulation", "/docs/risk-controls", "/brokers/api-key-guide"]
keywords: ["wolfbot smart terminal", "wolfbot manual trading", "crypto trading terminal", "trading bot terminal"]
sitemap_priority: 0.85
---

# Smart Terminal Guide

**Tested with WolfBot Community v0.1.0-beta.2** · Last updated: 2026-08-11

## What is the Smart Terminal?

The Smart Terminal is WolfBot Community's manual trading interface. Unlike a standard exchange trading UI, it automatically applies your risk settings — position limits, stop-losses, and take-profits — to every order you place. It works identically whether you're trading crypto on Binance, futures on Bybit, or gold via MT5.

## Key Concepts

| Feature | What It Does |
|---|---|
| **Risk-Aware Entry** | Automatically calculates position size based on your risk settings |
| **Auto TP/SL** | Places take-profit and stop-loss orders automatically |
| **Smart Limit** | Routes orders intelligently based on market depth |
| **Position Monitor** | Real-time P&L tracking across all positions |

## How to Use

### 1. Open the Smart Terminal

1. Launch WolfBot Community
2. Click **Smart Terminal** in the sidebar
3. Select a trading pair (e.g., BTC/USDT for crypto, EUR/USD for forex, XAU/USD for gold)
4. Choose your broker account

### 2. Configure Your Order

The terminal shows pre-filled values based on your risk configuration:

- **Position Size** — Calculated from your risk percentage and account balance
- **Stop-Loss** — Auto-set based on your risk parameters
- **Take-Profit** — Auto-set based on your reward ratio
- **Order Type** — Market, Limit, or Smart Limit

### 3. Place an Order

1. Review the pre-filled parameters
2. Adjust if needed (the terminal warns if you exceed risk limits)
3. Click **Buy** or **Sell**
4. Confirm the order details
5. Your order is placed with TP/SL protection already attached

### 4. Monitor Positions

After placing an order:
- The position appears in the **Positions** panel
- P&L updates in real-time
- TP/SL levels are visible
- You can modify or close from the terminal

## Risk Safety Net

The Smart Terminal automatically enforces:

- **Position Size Cap** — Can't exceed your configured maximum
- **Stop-Loss Required** — Every position must have a stop-loss (configurable)
- **Cooldown Timer** — Prevents rapid-fire orders (configurable)
- **Daily Trade Limit** — Maximum trades per day (configurable)

See [Risk Controls →](/docs/risk-controls) to configure your safety parameters.

## Demo vs Live Accounts

There's no separate terminal mode to switch — which account you select in Step 1 decides it:

| Account type | How It Works |
|---|---|
| **Demo** | Orders execute against a broker's testnet with virtual funds — zero risk |
| **Live** | Orders execute on your real exchange or MT5 broker account |

The Smart Terminal behaves identically either way — same risk controls, same order logic.

> ⚠️ Always test on a Demo account before switching to Live. See [Demo Account Guide →](/docs/simulation)

## Order Types

### Market Order
Executes immediately at the best available price.

### Limit Order
Executes only at your specified price or better.

### Smart Limit
WolfBot monitors the order book and executes when conditions are optimal — balancing price and fill probability.

## Common Tasks

| Task | How To |
|---|---|
| Place a market buy | Select pair → click **Buy Market** |
| Place a limit buy | Select pair → choose **Limit** → set price → click **Buy** |
| Set TP/SL | Auto-set from risk config; manual override in position panel |
| Close a position | Click position → **Close** |
| Modify TP/SL | Click position → edit TP/SL values → confirm |
| View order history | **Activity** tab in sidebar |

## Troubleshooting

- **"Risk limit exceeded"** — Reduce position size or adjust risk settings
- **"Cooldown active"** — Wait for the cooldown timer to expire
- **"Insufficient balance"** — Check your exchange or MT5 broker balance
- **"Order rejected"** — Check exchange order minimums or MT5 lot size requirements

## Next step

> **[Configure Risk Controls →](/docs/risk-controls)**
