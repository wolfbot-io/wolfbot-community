import Link from 'next/link'

const BROKERS = [
  { name: 'Binance', market: 'Crypto', status: 'stable' as const },
  { name: 'Bybit', market: 'Crypto', status: 'stable' as const },
  { name: 'BingX', market: 'Crypto', status: 'stable' as const },
  { name: 'KuCoin', market: 'Crypto', status: 'stable' as const },
  { name: 'Bitget', market: 'Crypto', status: 'stable' as const },
  { name: 'MT5', market: 'Forex, Gold, Indices', status: 'stable' as const },
]

const STATUS_COLORS = { stable: 'text-green-400 bg-green-400/10', beta: 'text-yellow-400 bg-yellow-400/10', experimental: 'text-orange-400 bg-orange-400/10' }

export function BrokerSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-zinc-800">
      <h2 className="text-3xl font-bold text-white text-center mb-4">Crypto + Futures + MT5</h2>
      <p className="text-zinc-400 text-center mb-12 max-w-lg mx-auto">
        One platform across modern digital markets and traditional financial markets.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
        {BROKERS.map((b) => (
          <Link key={b.name} href={b.name === 'MT5' ? '/brokers/mt5' : `/brokers/${b.name.toLowerCase()}`}
            className="border border-zinc-800 rounded-xl p-4 text-center hover:border-zinc-600 transition-colors bg-zinc-900/50">
            <div className="text-white font-semibold mb-1">{b.name}</div>
            <div className="text-xs text-zinc-600 mb-2">{b.market}</div>
            <span className={`text-xs font-medium px-2 py-0.5 rounded ${STATUS_COLORS[b.status]}`}>{b.status}</span>
          </Link>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link href="/brokers" className="text-blue-400 hover:underline text-sm">View all supported markets →</Link>
      </div>
    </section>
  )
}
