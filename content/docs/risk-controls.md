---
title: "WolfBot Community Risk Controls — Complete Guide"
description: "Configure unified risk controls in WolfBot Community — position limits, drawdown guards, cooldowns, and daily trade limits that apply across all your connected crypto exchanges and MT5 brokers."
tested_version: "0.1.0-beta.4"
last_updated: "2026-08-11"
platforms: ["windows", "linux"]
category: "risk-controls"
difficulty: "intermediate"
estimated_time: "10 minutes"
next_guide: "/brokers/bybit"
previous_guide: "/docs/smart-terminal"
related_guides: ["/docs/smart-terminal", "/docs/live-trading", "/security"]
keywords: ["wolfbot risk controls", "trading bot risk management", "crypto trading risk", "position limit", "drawdown protection"]
sitemap_priority: 0.85
---

# Risk Controls Guide

**Tested with WolfBot Community v0.1.0-beta.4** · Last updated: 2026-08-11

## Why Risk Controls Matter

Risk controls act as a safety net across your entire trading environment — they prevent over-trading, limit losses, and protect your account whether you're trading crypto on Binance, futures on Bybit, or gold via MT5. The same risk rules apply consistently no matter which market you're trading.

> 🛡️ Risk controls are active identically on Demo and Live accounts. Configure them before you start trading.

## Risk Control Layers

WolfBot has four layers of risk protection — they apply identically to all connected markets:

| Layer | What It Does | Example |
|---|---|---|
| **Position Size** | Caps individual trade size | Max 5% of balance per trade |
| **Drawdown Guard** | Stops trading after a loss threshold | Pause if daily loss exceeds 10% |
| **Cooldown Timer** | Minimum time between trades | At least 60 seconds between orders |
| **Daily Limits** | Maximum trades per day | Max 20 trades per 24 hours |

---

## 1. Position Size Limits

Prevents any single trade from risking too much capital — applies across crypto pairs and MT5 instruments equally.

### Settings

1. Go to **Risk** in the sidebar
2. Find **Position Sizing**
3. Configure:

| Setting | Recommended (Beginner) | Description |
|---|---|---|
| **Max position % of balance** | 2–5% | Single trade max size |
| **Total exposure %** | 20–30% | Sum of all positions |
| **Max leverage** | 1x–3x | Leverage cap per position |

### Example

If your balance is $10,000 and max position is 5%:
- Maximum single trade: **$500**
- Total all positions: **$2,000–$3,000**

---

## 2. Drawdown Guard

Stops all trading when losses exceed your threshold.

### Settings

| Setting | Recommended | Description |
|---|---|---|
| **Daily loss limit** | 5–10% | Stop trading for the day |
| **Weekly loss limit** | 15–20% | Stop trading for the week |
| **Total drawdown limit** | 25–30% | Requires manual re-enable |

### Behavior

When triggered:
1. All active bots pause
2. New orders are rejected
3. Existing positions can still be managed/closed
4. Notification appears in Dashboard

> ℹ️ You can manually close positions during a drawdown lock — only new entries are blocked.

---

## 3. Cooldown Timer

Prevents rapid-fire trading and emotional decisions.

### Settings

| Setting | Recommended | Description |
|---|---|---|
| **Minimum interval** | 30–120 seconds | Time between order placements |
| **After loss cooldown** | 5–15 minutes | Extra wait after a losing trade |
| **Per-symbol cooldown** | 60 seconds | Same symbol re-entry delay |

---

## 4. Daily Trade Limits

Caps the number of trades per day.

| Setting | Recommended | Description |
|---|---|---|
| **Max trades per day** | 10–20 | Total orders (all symbols) |
| **Max trades per symbol** | 5 | Orders per trading pair |

Resets at midnight UTC.

---

## Quick Start: Recommended Risk Profiles

### Beginner (Demo / First Live)

```
Max position: 2% of balance
Total exposure: 20%
Max leverage: 1x
Daily loss limit: 5%
Cooldown: 120 seconds
Max trades/day: 10
```

### Conservative Live

```
Max position: 3% of balance
Total exposure: 25%
Max leverage: 2x
Daily loss limit: 8%
Cooldown: 60 seconds
Max trades/day: 15
```

### Experienced

```
Max position: 5% of balance
Total exposure: 40%
Max leverage: 5x
Daily loss limit: 12%
Cooldown: 30 seconds
Max trades/day: 30
```

---

## Emergency: Global Stop

If you need to stop everything immediately:

1. Go to **Risk** in the sidebar
2. Click **Emergency Stop**
3. This:
   - Pauses all bots
   - Cancels all pending orders
   - Rejects new entries
   - Does NOT close existing positions (you decide)

---

## Monitoring

The Dashboard shows your risk status at a glance:

- **Green** — All within limits
- **Yellow** — Approaching a limit
- **Red** — A limit has been triggered

---

## Common Questions

**Q: Can I override risk controls for a specific trade?**
Risk controls are enforced globally. You can adjust parameters on the Risk page before trading.

**Q: What happens if my balance changes?**
Position size limits auto-adjust to your current balance.

**Q: Do risk controls work with automated bots?**
Yes — all four layers apply to both manual and automated trading, across all connected markets.

**Q: Can I disable risk controls?**
Risk controls can be adjusted but we strongly recommend keeping them active. They are your primary safety net.

---

## Further reading

- [Why Most Trading Bots Fail at Risk Management →](/docs/why-bots-fail-risk-management) — the four ways bots lose money, and how each is prevented
- [How to Reduce Drawdown in Trading →](/docs/how-to-reduce-drawdown) — a practical walkthrough of the exact settings above
- [How to Read Trading Performance Responsibly →](/docs/how-to-read-trading-performance) — judge a result by its drawdown, not its headline return

---

## Next step

> **[Connect a Broker →](/brokers/bybit)**
