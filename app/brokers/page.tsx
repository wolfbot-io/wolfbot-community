import type { Metadata } from 'next'
import Link from 'next/link'
import { BROKERS, BROKER_COMPARISONS, BROKER_SIGNUP_LINKS, STATUS_STYLE, brokerHref } from '@/lib/brokers'
import { TrackedLink } from '@/components/analytics/TrackedLink'

export const metadata: Metadata = {
  title: 'Supported Brokers & Exchanges — WolfBot Community',
  description: 'WolfBot Community broker support status — Binance, Bybit, BingX, KuCoin, Bitget and MT5. Trade-only API key setup guides for each.',
  alternates: { canonical: 'https://community.wolfbot.io/brokers' },
}

// Dark theme per prototypes/figma-make design language.
export default function BrokersIndexPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-white text-center mb-4">Supported Brokers</h1>
      <p className="text-center mb-12 max-w-lg mx-auto" style={{ color: '#94A3B8' }}>
        WolfBot Community connects to these exchanges via trade-only API keys.
      </p>
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
      <div className="max-w-5xl mx-auto mt-10 rounded-xl border p-5" style={{ background: '#0F172A', borderColor: 'rgba(255,255,255,0.07)' }}>
        <h2 className="text-base font-bold text-white mb-1">No exchange account yet?</h2>
        <p className="text-sm mb-3" style={{ color: '#94A3B8' }}>
          Open one in your own name through WolfBot&apos;s partner links, then follow the matching account-opening guide:
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
          {BROKERS.filter((b) => BROKER_SIGNUP_LINKS[b.slug]).map((b) => (
            <span key={b.slug}>
              <a href={BROKER_SIGNUP_LINKS[b.slug]} target="_blank" rel="noopener noreferrer sponsored" className="hover:underline" style={{ color: '#00C9E8' }}>{b.name}</a>
              <Link href={`/brokers/open-${b.slug}-account`} className="ml-1 hover:underline" style={{ color: '#94A3B8' }}>(guide)</Link>
            </span>
          ))}
        </div>
        <p className="text-xs mt-3" style={{ color: '#64748B' }}>
          Referral disclosure: these links credit WolfBot as referrer at no extra cost to you. Each exchange alone decides any promotion or eligibility. Check that the exchange is permitted in your region.
        </p>
      </div>
      <div className="text-center mt-12">
        <Link href="/brokers/api-key-guide" className="hover:underline text-sm" style={{ color: '#00C9E8' }}>
          Trade-Only API Key Guide →</Link>
      </div>
    </div>
  )
}
