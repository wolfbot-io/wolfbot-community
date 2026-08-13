---
title: "WolfBot Community Release Channels Explained"
description: "Understand WolfBot Community release channels: Stable, Beta, RC, Alpha, and Dev Preview. Choose the right channel."
tested_version: "0.1.0-p12-ghcr-rc8"
last_updated: "2026-08-11"
platforms: ["windows", "linux"]
category: "release"
difficulty: "beginner"
estimated_time: "3 minutes"
next_guide: "/docs/updates"
related_guides: ["/docs/updates", "/download"]
keywords: ["wolfbot release channels", "wolfbot stable beta", "wolfbot dev preview", "wolfbot version", "trading bot version"]
sitemap_priority: 0.80
---

# Release Channels Explained

**Tested with WolfBot Community v0.1.0-p12-ghcr-rc8** · Last updated: 2026-08-11

## Available Channels

| Channel | Status | Who Should Use | Auto-Update |
|---|---|---|---|
| **Stable** | Production-ready | Live traders | ✅ |
| **RC** (Release Candidate) | Final testing | Cautious early adopters | Optional |
| **Beta** | Feature preview | Testers, enthusiasts | ✅ |
| **Alpha** | Early feature test | Technical testers | Optional |
| **Dev Preview** | Latest builds | Developers, feedback | Manual |

---

## Stable

Production-ready releases that have passed all quality gates.

- **Update frequency:** Every 1–2 months
- **Risk:** Lowest
- **Best for:** Live trading, production use
- **Support:** Full community support

> ✅ Recommended for all live trading.

---

## Beta

Feature-complete builds undergoing broader testing.

- **Update frequency:** Every 1–2 weeks
- **Risk:** Low — features work but may have edge cases
- **Best for:** Testing new features before Stable
- **Support:** Community feedback welcome

---

## Dev Preview

Latest development builds — newest features, least tested.

- **Update frequency:** Several per week
- **Risk:** Medium — features may be incomplete
- **Best for:** Developers, early feedback, enthusiasts
- **Support:** Best-effort

> ⚠️ Dev Preview may contain incomplete features. Default mode is Simulation.

---

## How Channels Work

```text
Dev Preview (frequent)
    ↓
Alpha (feature testing)
    ↓
Beta (broader testing)
    ↓
RC (release candidate)
    ↓
Stable (production)
```

Each build is immutable — we never modify a published release. If a bug is found, a new version is released.

---

## Current Status

WolfBot Community is currently in **Public Preview** (Beta phase).

```text
Stable: Not yet released
Current public: v0.1.0-p12-ghcr-rc8
```

This means:
- The software is functional and installable
- Features are being tested broadly
- Breaking changes may occur between versions
- A Demo account is recommended while testing

---

## Changing Your Channel

There's no in-app channel switch — your channel is simply whichever release you download and install. Grab a Beta or Dev Preview build from [GitHub Releases](https://github.com/wolfbot-io/wolfbot-community/releases) instead of the Stable link on the download page when you want to try newer features; the installer upgrades your existing install in place either way.

When trying a more experimental channel, testing on a Demo account first is recommended.

---

## Version Numbering

```text
MAJOR.MINOR.PATCH-channel.NUMBER

0.1.0-p12-ghcr-rc8
│   │  │
│   │  └── Channel: beta, build 2
│   └───── Minor version (feature releases)
└───────── Major version (0 = pre-stable)
```

Stable versions will use: `1.0.0`, `1.1.0`, etc.

---

## GitHub Releases

All releases are published on [GitHub Releases](https://github.com/wolfbot-io/wolfbot-community/releases):

- **Pre-release:** Dev Preview, Alpha, Beta, RC
- **Full Release:** Stable only
- Each release includes: installer files, checksums, release notes

---

## Next step

> **[Update Guide →](/docs/updates)**
