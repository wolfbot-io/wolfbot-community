---
title: "Why Verifiable Results Matter"
description: "Anyone can screenshot a winning trade. Verifiable results — signed releases, published checksums, and non-custodial access — are what actually let you trust trading software."
tested_version: "0.1.0-beta.9"
last_updated: "2026-08-14"
platforms: ["windows", "linux"]
category: "security"
difficulty: "beginner"
estimated_time: "5 minutes"
next_guide: "/docs/how-to-read-trading-performance"
previous_guide: "/docs/how-to-reduce-drawdown"
related_guides: ["/security", "/docs/self-hosted-explained", "/docs/community-status"]
keywords: [
  "verifiable trading results",
  "trust trading bot",
  "signed trading software",
  "trading bot checksum",
  "verify trading software"
]
sitemap_priority: 0.75
---

# Why Verifiable Results Matter

**Tested with WolfBot Community v0.1.0-beta.9** · Last updated: 2026-08-14

## Who this guide is for

- **If you want to know you can trust the software you run** — this explains,
  without jargon, how to tell real verifiable safety from marketing screenshots.
- **If you're technically inclined** — you'll get the concrete mechanisms
  (checksums, digest-pinned releases, trade-only keys) and how to check them
  yourself.

## A screenshot is not proof

A green PnL chart on a website proves exactly one thing: someone could produce a green PnL chart. It doesn't tell you whether the software is safe to run, whether the numbers were edited, or whether the download you're about to install is the same one everyone else got.

In trading software, "trust" has to be built out of things that can actually be checked. Here are the three that matter most, and how WolfBot Community handles each.

## 1. Signed releases — you can verify what you downloaded

Every WolfBot Community release is cryptographically signed, and checksums are published alongside each installer. That means you can independently confirm that the file you downloaded is the exact file that was built and shipped — not a modified copy swapped in somewhere along the way.

This is a small step that catches a real category of risk: a tampered installer is one of the classic ways malware gets onto a machine, and a published checksum is how you verify it didn't happen to you.

> 🔎 **For technical readers:** it goes a step further than a checksummed
> installer. Each container image in a WolfBot Community release manifest is
> **digest-pinned** — the reference carries its SHA256 digest (`@sha256:…`),
> and the updater refuses to apply a manifest whose declared digest doesn't
> match the image it actually pulls. So a release is not just signed once;
> every component is pinned to an exact, independently verifiable hash.

## 2. Non-custodial — there's nothing to steal by design

WolfBot Community is [non-custodial](/docs/self-hosted-explained): it never holds your funds, and it connects to exchanges only through [trade-only API keys](/brokers/api-key-guide) — keys with withdrawal and transfer permissions disabled at the exchange itself.

That's a structural guarantee, not a promise. Even if your machine were compromised, an attacker holding your API key still can't move funds, because the exchange refuses withdrawal requests from a trade-only key. You can also revoke the key instantly, from your exchange account, at any time.

## 3. Open source — the code is inspectable

The source is public on [GitHub](https://github.com/wolfbot-io/wolfbot-community). You can read exactly what the software does before you run it — and because it runs on [your own machine](/docs/self-hosted-explained), there's no hidden server doing something you can't see.

## Why this matters more than a pretty dashboard

Most trading-software marketing leads with profit screenshots because they're easy to fake and hard to verify. WolfBot Community leads with the opposite: signed artifacts, published checksums, trade-only access, and open source. Those are boring, but they're the things you can actually check — and they're the reason you can run the software without taking anyone's word for it.

## How to verify for yourself

1. **Check the checksum** — the SHA256 for each release is published on the [download page](/download); verify it matches the file you got.
2. **Use trade-only keys** — never enable withdrawal or transfer permissions on a key you give to *any* bot.
3. **Start on Demo** — connect a [demo account](/docs/simulation) first and watch how the software behaves with virtual funds before adding a live key.

## Next step

> **[How to Read Trading Performance Responsibly →](/docs/how-to-read-trading-performance)**
