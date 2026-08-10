# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in WolfBot Community, please **do not** open a public issue.

Instead, report it privately to:

**security@wolfbot.io**

Include:
- A description of the vulnerability
- Steps to reproduce
- Affected versions
- Any potential impact

We will respond within 48 hours and work with you on a coordinated disclosure timeline.

## Supported Versions

| Version | Supported |
|---|---|
| Latest Stable | ✅ |
| Latest Beta | ✅ |
| Development Preview | ⚠️ Best-effort |

## Security Principles

WolfBot Community is designed with these security principles:

- **Non-custodial** — WolfBot never holds your funds; you connect via trade-only API keys
- **Self-hosted** — Runs on your infrastructure; no third party has access to your credentials
- **Trade-only API keys** — We recommend API keys with trading permission only (no withdrawal)
- **Local data** — Your trading data and configuration stay on your machine
- **Signed releases** — All releases are cryptographically signed; verify checksums before installation
- **Simulation-first** — Test strategies in paper-trading mode before connecting real exchange accounts

## Best Practices for Users

1. **API Key Permissions** — Create API keys with trade-only permissions; disable withdrawal and transfer
2. **IP Restrictions** — Where supported by your exchange, restrict API keys to your machine's IP
3. **Keep Updated** — Run the latest stable release to receive security fixes
4. **Verify Checksums** — Verify the SHA256 checksum of downloaded installers
5. **Simulation First** — Always test new strategies in Simulation mode before live trading

## Disclosure Policy

- Critical vulnerabilities: patch released within 7 days of confirmation
- High severity: patch released within 14 days
- Medium/low severity: addressed in next scheduled release
- Public disclosure coordinated with reporter after fix is available

---

WolfBot Community is maintained by [WolfBot.io](https://wolfbot.io).
