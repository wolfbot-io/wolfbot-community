# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in WolfBot Community, please **do not** open a public issue.

Report privately to: **security@wolfbot.io**

Include: description, steps to reproduce, affected versions, potential impact. We respond within 48 hours.

## Supported Versions

| Version | Supported |
|---|---|
| Latest Stable | ✅ |
| Latest Stable | ✅ |
| Development Preview | ⚠️ Best-effort |

## Security Principles

WolfBot Community is designed with security-first principles:

- **Non-custodial** — Never holds your funds; connect via trade-only API keys
- **Self-hosted** — Runs on your infrastructure; no third party access to credentials
- **Trade-only API keys** — Trading permission only (no withdrawal) across all connected markets
- **Local data** — Trading data and configuration stay on your machine
- **Signed releases** — Cryptographically signed; verify checksums before installation
- **Simulation-first** — Test strategies across markets before connecting real accounts

## Best Practices

1. **API Key Permissions** — Trade-only; disable withdrawal and transfer on every connected exchange
2. **IP Restrictions** — Where supported, restrict API keys to your machine's IP
3. **Keep Updated** — Run the latest stable release for security fixes
4. **Verify Checksums** — Verify SHA256 checksum of downloaded installers
5. **Simulation First** — Test new strategies in Simulation before live trading

## Disclosure Policy

- Critical: patch within 7 days
- High: patch within 14 days
- Medium/low: next scheduled release
- Public disclosure coordinated with reporter after fix

---

WolfBot Community is maintained by [WolfBot.io](https://wolfbot.io).
