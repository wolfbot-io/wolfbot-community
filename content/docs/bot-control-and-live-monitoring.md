---
title: "WolfBot Bot Control & Live Monitoring — Operate Automation with Evidence"
description: "Use the real WolfBot Community Bots, bot detail, Activity and Live Monitor screens to supervise automated trading without losing operational context."
tested_version: "0.1.0-beta.20"
last_updated: "2026-11-15"
platforms: ["windows", "linux"]
category: "automation"
difficulty: "intermediate"
estimated_time: "10 minutes"
previous_guide: "/docs/strategy-builder-workflow"
next_guide: "/docs/ai-analyst-trade-review"
related_guides: ["/docs/automated-trading-workflow", "/docs/weekly-bot-maintenance-routine", "/docs/reading-bot-logs-like-an-operator", "/docs/risk-controls"]
keywords: ["trading bot monitoring", "WolfBot bot control", "automated trading activity log", "live trading monitor", "self hosted bot operations"]
sitemap_priority: 0.9
---

# Operate Bots Without Losing the Evidence Trail

Automation should reduce repetitive work, not remove visibility. WolfBot Community gives each running bot a clear identity, environment, strategy and symbol scope, then exposes the activity and live state needed to investigate what happened.

## My Bots is the control inventory

The Bots page answers the first operational question: what automation exists right now? Use it to distinguish Demo from Live and to spot a bot whose scope no longer matches its intended account or strategy.

![WolfBot Community My Bots list](/images/product/0.1.0-beta.20/en/15-bots.webp "My Bots provides an inventory of automated workflows and their current state.")

## Bot detail keeps scope visible

A bot detail page should be readable as an execution contract: account, environment, strategy, symbols and current state. Review this before changing settings, particularly on Live.

![WolfBot Community bot detail with environment, strategy and symbols](/images/product/0.1.0-beta.20/en/16-bot-detail.webp "Bot detail makes the automation scope inspectable before an operator acts.")

## Activity reconstructs the sequence

The Activity screen is where signals, decisions and operational events become a timeline. Read related entries together rather than reacting to one line. A timeout followed by a successful retry is different from a repeated rejection or a silent gap.

![WolfBot Community Activity timeline](/images/product/0.1.0-beta.20/en/20-activity.webp "Activity creates an operator-readable trail of system events.")

When investigating an incident, capture the time, account, symbol, direction, bot version and broker response. Do not retry a potentially ambiguous order until the broker state has been reconciled.

## Live Monitor is for state, not prediction

Live Monitor brings current operational signals into one screen. It helps answer whether services and trading workflows are active, but it does not turn a transient indicator into a trading recommendation.

![WolfBot Community Live Monitor showing current operational state](/images/product/0.1.0-beta.20/en/21-live-monitor.webp "Live Monitor supports real-time supervision without hiding the underlying activity trail.")

## A professional operating rhythm

1. Review Bot inventory and environment.
2. Check Risk Center before the session.
3. Use Live Monitor for current state.
4. Use Activity to explain anomalies.
5. Compare positions with the broker.
6. Record changes and preserve rollback.

This workflow keeps a human accountable for risk while the software handles repeatable execution. Continue with [AI Analyst trade review](/docs/ai-analyst-trade-review) for structured post-trade analysis.
