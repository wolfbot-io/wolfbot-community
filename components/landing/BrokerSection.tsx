import Link from 'next/link'
import { BROKERS, STATUS_STYLE, brokerHref } from '@/lib/brokers'

// Dark theme + card-hover per prototypes/figma-make design language.
export function BrokerSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
      <h2 className="text-3xl font-bold text-white text-center mb-4">Crypto + Futures + MT5</h2>
      <p className="text-center mb-12 max-w-lg mx-auto" style={{ color: '#94A3B8' }}>
        One platform across modern digital markets and traditional financial markets.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
        {BROKERS.map((b) => (
          <Link
            key={b.slug}
            href={brokerHref(b)}
            className="rounded-xl p-4 text-center border card-hover"
            style={{ background: '#0F172A', borderColor: 'rgba(255,255,255,0.07)' }}
          >
            <div className="text-white font-semibold mb-1">{b.name}</div>
            <div className="text-xs mb-2" style={{ color: '#94A3B8' }}>{b.market}</div>
            <span className="text-xs font-medium px-2 py-0.5 rounded capitalize" style={STATUS_STYLE[b.status]}>{b.status}</span>
          </Link>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link href="/brokers" className="hover:underline text-sm" style={{ color: '#00C9E8' }}>View all supported markets →</Link>
      </div>
    </section>
  )
}
