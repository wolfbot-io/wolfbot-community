const FEATURES = [
  { icon: '🤖', title: 'Automated Trading', desc: 'Multi-strategy bots with entry signals and DCA' },
  { icon: '🧪', title: 'Simulation', desc: 'Paper-trade against real market data risk-free' },
  { icon: '💻', title: 'Smart Terminal', desc: 'Manual trading with risk-aware execution' },
  { icon: '🎯', title: 'Smart Limit Execution', desc: 'Intelligent order routing and fills' },
  { icon: '🛡️', title: 'Risk Controls', desc: 'Position limits, drawdown guards, cooldowns' },
  { icon: '🔗', title: 'Multi-Broker', desc: 'Binance, Bybit, BingX, KuCoin, Bitget, MT5' },
  { icon: '📡', title: 'External Signals', desc: 'TradingView webhooks and custom pipelines' },
  { icon: '⚙️', title: 'Custom Strategies', desc: 'Build and deploy your own trading logic' },
  { icon: '🔄', title: 'Auto Updates', desc: 'Stay current with signed channel updates' },
  { icon: '💾', title: 'Backup & Restore', desc: 'Snapshot-based backup and recovery' },
]

export function FeaturesGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-zinc-800">
      <h2 className="text-3xl font-bold text-white text-center mb-4">
        What You Get
      </h2>
      <p className="text-zinc-400 text-center mb-12 max-w-lg mx-auto">
        Everything you need for automated trading — free.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {FEATURES.map((f) => (
          <div
            key={f.title}
            className="border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors bg-zinc-900/50"
          >
            <div className="text-2xl mb-3">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1 text-sm">{f.title}</h3>
            <p className="text-xs text-zinc-500">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
