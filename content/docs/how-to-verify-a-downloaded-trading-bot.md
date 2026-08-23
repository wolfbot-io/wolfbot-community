---
title: "How to Verify a Downloaded Trading Bot — Check What You're About to Install"
description: "Before you install any trading bot, verify the source and the file. Here's how to check a download against the official release, digest and signature so you never run unverified trading software."
tested_version: "0.1.0-beta.2"
last_updated: "2026-08-16"
platforms: ["windows", "linux"]
category: "security"
difficulty: "beginner"
estimated_time: "7 minutes"
next_guide: "/security"
related_guides: ["/security", "/faq", "/about", "/download"]
keywords: [
  "verify downloaded trading bot",
  "verify trading bot checksum",
  "trading software authenticity",
  "check wolfbot download sha256",
  "safe install trading bot",
  "verify bot download linux"
]
sitemap_priority: 0.7
---

# How to Verify a Downloaded Trading Bot

**Tested with WolfBot Community v0.1.0-beta.2** · Last updated: 2026-08-16

## Who this guide is for

- **If you've downloaded a trading bot (or are about to) and want to be sure it's the real thing** — this shows the two checks that take two minutes.
- **If you're technically inclined** — you'll see how to independently confirm a binary using the digest and signature the maintainers publish.

## Why verify at all

Trading software touches your exchanges and your money. Anyone can publish a binary named "WolfBot" — the safest habit is to confirm a file really is what its name claims **before** you run it. Two signals make that checkable:

1. **Where it came from** — the official release source.
2. **What the file actually is** — matching digest and signature.

## The two-minute check

**1. Use the official source.**

Only download from the official GitHub repository (`github.com/wolfbot-io/wolfbot-community`) or from `community.wolfbot.io`. A file offered somewhere else — a random blog, a mirror site, a DM — is unverified by definition.

**2. Compare the checksum.**

WolfBot publishes the **SHA-256 digest** for each installer (you'll see it on the download page and the release notes). After you download:

```bash
# Linux/macOS
sha256sum WolfBot-Setup-linux-amd64.deb
# Windows (PowerShell)
Get-FileHash .\WolfBot-Setup.exe -Algorithm SHA256
```

The output must match the published digest exactly. A mismatch means the file is not the original — do not install it.

**3. (Technical) check the signature.**

Official releases are cryptographically signed. Verifying the signature against the project's public key confirms who built it, independent of the hashed file.

## Red flags

- The digest does **not** match what was published.
- The file came from a source other than the official repo / community site.
- The page you downloaded from is not the real wolfbot.io/github domain.
- You're asked to run an installer as admin from an unverified source.

Stop in any of those cases and download from the official release instead.

## Why WolfBot Community publishes this

Transparency is part of safe self-hosting. Because you can always verify what you install, you never have to trust a name on a download page on faith.

## Where to go next

- [Security →](/security)
- [About & official sources →](/about)
- [Download the official release →](/download)

## Next step

> **[Read the security page →](/security)**
