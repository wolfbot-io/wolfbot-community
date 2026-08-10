import Link from 'next/link'

const BROKERS = [
  { name: 'Binance', status: 'stable' as const },
  { name: 'Bybit', status: 'stable' as const },
  { name: 'BingX', status: 'stable' as const },
  { name: 'KuCoin', status: 'beta' as const },
  { name: 'Bitget', status: 'beta' as const },
  { name: 'MT5', status: 'beta' as const },
]

const STATUS_COLORS = {
  stable: 'text-green-400 bg-green-400/10',
  beta: 'text-yellow-400 bg-yellow-400/10',
  experimental: 'text-orange-400 bg-orange-400/10',
}

export function BrokerSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-zinc-800">
      <h2 className="text-3xl font-bold text-white text-center mb-4">
        Supported Brokers
      </h2>
      <p className="text-zinc-400 text-center mb-12 max-w-lg mx-auto">
        Connect to the exchanges you already use.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
        {BROKERS.map((b) => (
          <Link
            key={b.name}
            href={`/brokers/${b.name.toLowerCase()}`}
            className="border border-zinc-800 rounded-xl p-4 text-center hover:border-zinc-600 transition-colors bg-zinc-900/50"
          >
            <div className="text-white font-semibold mb-2">{b.name}</div>
            <span className={`text-xs font-medium px-2 py-0.5 rounded ${STATUS_COLORS[b.status]}`}>
              {b.status}
            </span>
          </Link>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link href="/brokers" className="text-blue-400 hover:underline text-sm">
          View compatibility details →
        </Link>
      </div>
    </section>
  )
}
