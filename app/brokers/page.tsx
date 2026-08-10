import Link from 'next/link'

const BROKERS = [
  { name: 'Binance', status: 'Stable', slug: 'binance', desc: 'Spot and Futures trading. Most liquid exchange.' },
  { name: 'Bybit', status: 'Stable', slug: 'bybit', desc: 'Spot, Futures, Demo. Excellent API stability.' },
  { name: 'BingX', status: 'Stable', slug: 'bingx', desc: 'Standard and Perpetual Futures supported.' },
  { name: 'KuCoin', status: 'Stable', slug: 'kucoin', desc: 'Wide altcoin selection. Passphrase required.' },
  { name: 'Bitget', status: 'Stable', slug: 'bitget', desc: 'Spot and Futures. Growing exchange.' },
  { name: 'MT5', status: 'Stable', slug: 'mt5', desc: 'MetaTrader 5 bridge. Forex, Gold, Indices. Windows only.' },
]

export default function BrokersIndexPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-white text-center mb-4">Supported Brokers</h1>
      <p className="text-zinc-400 text-center mb-12 max-w-lg mx-auto">
        WolfBot Community connects to these exchanges via trade-only API keys.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {BROKERS.map((b) => (
          <Link
            key={b.slug}
            href={`/brokers/${b.slug}`}
            className="border border-zinc-800 rounded-xl p-6 hover:border-zinc-600 transition-colors bg-zinc-900/50"
          >
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-bold text-white">{b.name}</h2>
              <span className={`text-xs font-semibold px-2 py-0.5 rounded ${
                b.status === 'Stable' ? 'text-green-400 bg-green-400/10' : 'text-yellow-400 bg-yellow-400/10'
              }`}>
                {b.status}
              </span>
            </div>
            <p className="text-sm text-zinc-500">{b.desc}</p>
          </Link>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link href="/brokers/api-key-guide" className="text-blue-400 hover:underline text-sm">
          Trade-Only API Key Guide →</Link>
      </div>
    </div>
  )
}
