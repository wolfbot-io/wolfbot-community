import type { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, ExternalLink } from 'lucide-react'
import { BROKERS, BROKER_ACCOUNT_GUIDES, BROKER_COMPARISONS, STATUS_STYLE, brokerHref } from '@/lib/brokers'
import { TrackedLink } from '@/components/analytics/TrackedLink'

export const metadata: Metadata = {
  title: 'Supported Brokers & Crypto Exchange Account Guides — WolfBot Community',
  description: 'Connect WolfBot Community to Binance, Bybit, BingX, KuCoin, Bitget and MT5. Follow detailed account-opening guides for Bitget, OKX, Gate and other crypto exchanges.',
  alternates: { canonical: 'https://community.wolfbot.io/brokers' },
}

const ACCOUNT_STATUS = {
  supported: { label: 'Connect now', color: '#10B981', background: 'rgba(16,185,129,0.12)' },
  'release-dependent': { label: 'Check your release', color: '#38BDF8', background: 'rgba(56,189,248,0.12)' },
  planned: { label: 'Integration planned', color: '#F59E0B', background: 'rgba(245,158,11,0.12)' },
} as const

// Dark theme per prototypes/figma-make design language.
export default function BrokersIndexPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-white text-center mb-4">WolfBot Brokers &amp; Exchange Guides</h1>
      <p className="text-center mb-12 max-w-2xl mx-auto" style={{ color: '#94A3B8' }}>
        Connect supported crypto exchanges and MT5 brokers, or follow a step-by-step guide to open and secure a new exchange account.
      </p>
      <div className="max-w-5xl mx-auto mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">Supported WolfBot connections</h2>
        <p className="text-sm" style={{ color: '#94A3B8' }}>
          These connectors are documented for WolfBot Community and use trade-only API credentials or the MT5 bridge.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {BROKERS.map((b) => (
          <TrackedLink
            key={b.slug}
            href={brokerHref(b)}
            eventName="broker_click"
            eventParams={{ broker: b.slug }}
            className="rounded-xl p-6 border card-hover"
            style={{ background: '#0F172A', borderColor: 'rgba(255,255,255,0.07)' }}
          >
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-bold text-white">{b.name}</h2>
              <span className="text-xs font-semibold px-2 py-0.5 rounded capitalize" style={STATUS_STYLE[b.status]}>
                {b.status}
              </span>
            </div>
            <p className="text-sm" style={{ color: '#94A3B8' }}>{b.desc}</p>
          </TrackedLink>
        ))}
      </div>

      <section className="max-w-5xl mx-auto mt-16" aria-labelledby="account-guides-title">
        <h2 id="account-guides-title" className="text-2xl font-bold text-white mb-2">Open and secure an exchange account</h2>
        <p className="text-sm mb-6 max-w-3xl" style={{ color: '#94A3B8' }}>
          Each guide covers registration, identity verification, 2FA and the security checks to complete before creating an API key. Account-guide availability does not by itself mean that the current WolfBot release includes a direct connector.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {BROKER_ACCOUNT_GUIDES.map((broker) => {
            const status = ACCOUNT_STATUS[broker.availability]
            return (
              <article key={broker.slug} className="border rounded-lg p-5" style={{ background: '#0F172A', borderColor: 'rgba(255,255,255,0.07)' }}>
                <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                  <h3 className="text-lg font-bold text-white">Open a {broker.name} account</h3>
                  <span className="text-xs font-semibold px-2 py-1 rounded" style={{ color: status.color, background: status.background }}>
                    {status.label}
                  </span>
                </div>
                <p className="text-sm min-h-10" style={{ color: '#94A3B8' }}>{broker.description}</p>
                <div className="flex flex-wrap gap-3 mt-5">
                  <Link
                    href={`/brokers/open-${broker.slug}-account`}
                    className="inline-flex items-center gap-2 text-sm font-semibold px-3 py-2 rounded-lg border hover:underline"
                    style={{ color: '#00C9E8', borderColor: 'rgba(0,201,232,0.28)' }}
                  >
                    <BookOpen size={16} aria-hidden="true" />
                    Read the guide
                  </Link>
                  <TrackedLink
                    href={broker.signupHref}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    eventName="broker_signup_click"
                    eventParams={{ broker: broker.slug, location: 'brokers_index' }}
                    className="inline-flex items-center gap-2 text-sm font-semibold px-3 py-2 rounded-lg hover:underline"
                    style={{ color: '#E2E8F0', background: 'rgba(255,255,255,0.06)' }}
                  >
                    Open account <ExternalLink size={15} aria-hidden="true" />
                  </TrackedLink>
                </div>
              </article>
            )
          })}
        </div>
        <p className="text-xs mt-4" style={{ color: '#64748B' }}>
          Account links may credit WolfBot at no extra cost to you. Exchange terms and regional availability apply.
        </p>
      </section>

      <div className="max-w-5xl mx-auto mt-16">
        <h2 className="text-xl font-bold text-white mb-2">Comparing exchanges?</h2>
        <p className="text-sm mb-4" style={{ color: '#94A3B8' }}>
          Head-to-head guides for the exchanges WolfBot connects to — markets, Demo path, API key setup and how to choose.
        </p>
        <div className="flex flex-wrap gap-2">
          {BROKER_COMPARISONS.map(({ a, b }) => {
            const na = BROKERS.find((x) => x.slug === a)?.name ?? a
            const nb = BROKERS.find((x) => x.slug === b)?.name ?? b
            return (
              <Link key={`${a}-${b}`} href={`/brokers/${a}-vs-${b}`} className="text-sm px-3 py-1.5 rounded-lg border hover:underline"
                style={{ color: '#00C9E8', borderColor: 'rgba(0,201,232,0.28)' }}>
                {na} vs {nb}
              </Link>
            )
          })}
        </div>
      </div>
      <div className="text-center mt-12">
        <Link href="/brokers/api-key-guide" className="hover:underline text-sm" style={{ color: '#00C9E8' }}>
          Trade-Only API Key Guide →</Link>
      </div>
    </div>
  )
}
