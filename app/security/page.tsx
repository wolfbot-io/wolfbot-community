import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'WolfBot Community Security — How We Keep Your Trading Safe',
  description: 'WolfBot Community security principles: non-custodial, trade-only API keys, self-hosted, signed releases.',
  alternates: { canonical: 'https://community.wolfbot.io/security' },
}

export default function SecurityPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 prose-content">
      <h1>Security</h1>
      <p>WolfBot Community is designed with security-first principles.</p>

      <h2>Non-Custodial by Design</h2>
      <p>WolfBot never holds your funds. You connect via API keys that you control. You can revoke them at any time. Your money stays on the exchange.</p>

      <h2>Trade-Only API Keys</h2>
      <p>We recommend (and our guides show) creating API keys with trade-only permissions. No withdrawal, no transfer. Even if a key is compromised, funds cannot be stolen — only unwanted trades could be placed.</p>
      <p><Link href="/brokers/api-key-guide">Read the API Key Guide →</Link> · <Link href="/docs/trade-only-api-keys-explained">Why this setting matters →</Link></p>

      <h2>Self-Hosted</h2>
      <p>WolfBot Community runs on your machine. No third party has access to your credentials or trading data. Your firewall, your security rules.</p>

      <h2>Signed Releases</h2>
      <p>All releases are cryptographically signed. Checksums are published for every installer. Verify before installing.</p>
      <p><Link href="/docs/why-verifiable-results-matter">Why verifiable results matter →</Link></p>

      <h2>Local Data</h2>
      <p>Configuration, trading history, and strategies stay on your machine. Nothing is sent to WolfBot.io unless you explicitly opt in.</p>

      <h2>Demo-Friendly by Default</h2>
      <p>Installing WolfBot connects nothing automatically — no exchange account exists until you add one. Connect a broker&apos;s Demo/testnet account first and test everything risk-free before ever adding a Live, trade-only key.</p>

      <h2>Reporting a Vulnerability</h2>
      <p>If you discover a security issue, please email <strong>security@wolfbot.io</strong>. Do not open a public issue. We respond within 48 hours.</p>

      <h2>Best Practices for Users</h2>
      <ul>
        <li>Use trade-only API keys — never enable withdrawal</li>
        <li>Bind API keys to your IP address where supported</li>
        <li>Keep WolfBot updated to the latest stable version</li>
        <li>Verify installer checksums before installation</li>
        <li>Start with a Demo account before live trading</li>
      </ul>
    </div>
  )
}
