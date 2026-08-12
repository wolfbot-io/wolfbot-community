import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Supported Brokers & Exchanges',
  description: 'WolfBot Community broker support status — Binance, Bybit, BingX, KuCoin, Bitget and MT5. Trade-only API key setup guides for each.',
  alternates: { canonical: 'https://community.wolfbot.io/brokers' },
}

const BROKERS = [
  { name: 'Binance', status: 'Stable', slug: 'binance', desc: 'Spot and Futures trading. Most liquid exchange.' },
  { name: 'Bybit', status: 'Stable', slug: 'bybit', desc: 'Spot, Futures, Demo. Excellent API stability.' },
  { name: 'BingX', status: 'Stable', slug: 'bingx', desc: 'Standard and Perpetual Futures supported.' },
  { name: 'KuCoin', status: 'Stable', slug: 'kucoin', desc: 'Wide altcoin selection. Passphrase required.' },
  { name: 'Bitget', status: 'Stable', slug: 'bitget', desc: 'Spot and Futures. Growing exchange.' },
  { name: 'MT5', status: 'Stable', slug: 'mt5', desc: 'MetaTrader 5 bridge. Forex, Gold, Indices. Windows only.' },
]

const STATUS_STYLE: Record<string, { color: string; background: string }> = {
  Stable: { color: '#10B981', background: 'rgba(16,185,129,0.12)' },
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
          <Link
            key={b.slug}
            href={`/brokers/${b.slug}`}
            className="rounded-xl p-6 border card-hover"
            style={{ background: '#0F172A', borderColor: 'rgba(255,255,255,0.07)' }}
          >
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-bold text-white">{b.name}</h2>
              <span className="text-xs font-semibold px-2 py-0.5 rounded" style={STATUS_STYLE[b.status] ?? { color: '#F59E0B', background: 'rgba(245,158,11,0.12)' }}>
                {b.status}
              </span>
            </div>
            <p className="text-sm" style={{ color: '#94A3B8' }}>{b.desc}</p>
          </Link>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link href="/brokers/api-key-guide" className="hover:underline text-sm" style={{ color: '#00C9E8' }}>
          Trade-Only API Key Guide →</Link>
      </div>
    </div>
  )
}
