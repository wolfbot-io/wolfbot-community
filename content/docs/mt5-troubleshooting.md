---
title: "MT5 Troubleshooting — Fix Common MT5 Connection and Setup Problems in WolfBot Community"
description: "MT5 won't connect, an account can't be provisioned, or a symbol isn't showing? Here are the concrete MT5 connection and setup errors in WolfBot Community and exactly what to check for each one."
tested_version: "0.1.0-beta.2"
last_updated: "2026-08-16"
platforms: ["linux", "windows"]
category: "troubleshooting"
difficulty: "intermediate"
estimated_time: "10 minutes"
next_guide: "/brokers/mt5"
related_guides: ["/brokers/mt5", "/docs/mt5-without-windows-vps", "/docs/mt5-symbol-mapping", "/docs/risk-controls"]
keywords: [
  "mt5 troubleshooting",
  "mt5 not connecting wolfbot",
  "mt5 provisioning failed",
  "mt5 account setup error",
  "metatrader 5 troubleshooting",
  "wolfbot mt5 error",
  "mt5 linux setup problem"
]
sitemap_priority: 0.75
---

# MT5 Troubleshooting

**Tested with WolfBot Community v0.1.0-beta.2** · Last updated: 2026-08-16

## Who this guide is for

- **If you hit an error connecting MT5 to WolfBot Community** — try the fixes below in order; each one points you at logs you can read yourself instead of guessing.
- **If you're technically inclined** — the root-cause section tells you exactly which component logs what, so you can diagnose on your own machine.

## Before you start

Two quick checks resolve many MT5 connection problems faster than anything else:

1. **Demo vs Live.** Make sure you're connecting a **Demo (testnet)** MT5 account first, exactly like the connect guide does. A Live account can fail readiness checks (and is riskier to test against).
2. **The MT5 bridge is part of the Linux install only.** MT5 runs inside a container on Linux (activated with one command) — it is not bundled the same way on a Windows build that isn't out yet. Confirm your platform matches the guide you're following.

## Common errors and what to check

### "Could not set up the MT5 account. Please try again." (`MT5_PROVISIONING_FAILED`)

This is the main one reported from live installs. It happens when the **per-account provisioning step** for the MT5 terminal/bridge cannot complete. Don't change your API credentials first — check, in order:

1. **Read the control/api logs** for the provisioning attempt and the exact failure it returned. The message recorded `container_provisioned=false` when the terminal/bridge containers could not be created.
2. **Confirm the container runtime is reachable.** On a Community install, a missing Docker socket mount to the bridge control means per-account containers can never be created — this is the structural cause behind many `MT5_PROVISIONING_FAILED` errors. If your logs show a socket/permission error, that's the bottleneck.
3. **Confirm the bridge image is present.** If the MT5 bridge image isn't pulled, provisioning fails with an image-not-found error even though everything else is fine.
4. **Retry after checking the logs.** This is not a "delete and re-add the key" situation; the state is in the provisioning step, and the log will name the actual failure.

### Account connects but shows no symbols

- If your strategy references a symbol that has no mapping to the venue, WolfBot passes it through unchanged. Confirm the exact symbol spelling and check the [symbol mapping guide](/docs/mt5-symbol-mapping).
- If the symbol list looks empty, check the selected-symbols file for the MT5 account and confirm the market watch in MT5 actually has the instruments loaded.

### Connection drops or order errors shortly after start

- Verify the strategy is set to **Simulation** first, so a typo or a bad instrument never opens a real position while you're still testing.
- Check the MT5 bridge log for the terminal state; a headless terminal that isn't logged in to the broker yet will reject orders until the session is established.

### Still stuck?

The fastest way to get a definitive answer is to reproduce the exact error with the logs in front of you:

- **Control/api logs** — provisioning and account readiness (what actually fails).
- **MT5 bridge logs** — terminal login and order state.

When you open a support thread, paste the specific error line (like `MT5_PROVISIONING_FAILED`) and the matching log frame — that's what makes it solvable in one pass instead of a back-and-forth.

## Get started on the right foot

- [MT5 symbol mapping →](/docs/mt5-symbol-mapping) — see exactly how symbols resolve before you open a position
- [Run MT5 without a Windows VPS →](/docs/mt5-without-windows-vps)
- [Connect MT5 →](/brokers/mt5)

## Next step

> **[Connect MT5 →](/brokers/mt5)**
