// Dark theme + card-hover per prototypes/figma-make design language.
const FEATURES = [
  { icon: '🌐', title: 'Unified Markets', desc: 'Crypto exchanges + MT5. One platform.' },
  { icon: '🖥️', title: 'One Interface', desc: 'Accounts, positions, orders — one dashboard.' },
  { icon: '🎯', title: 'Smart Execution', desc: 'Unified order routing across all markets.' },
  { icon: '🛡️', title: 'Unified Risk', desc: 'Position limits and drawdown guards across everything.' },
  { icon: '📊', title: 'One Portfolio', desc: 'Single portfolio view over all connected markets.' },
  { icon: '🤖', title: 'Automation', desc: 'Multi-strategy bots, TradingView signals, pipelines.' },
  { icon: '🧪', title: 'Simulation', desc: 'Paper-trade across markets risk-free.' },
  { icon: '💻', title: 'Smart Terminal', desc: 'Manual trading with risk-aware execution.' },
  { icon: '🔄', title: 'Auto Updates', desc: 'Stay current with signed channel updates.' },
  { icon: '💾', title: 'Backup & Restore', desc: 'Snapshot-based backup and recovery.' },
]

export function FeaturesGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
      <h2 className="text-3xl font-bold text-white text-center mb-4">One Platform. Every Market.</h2>
      <p className="text-center mb-12 max-w-lg mx-auto" style={{ color: '#94A3B8' }}>
        Everything you need across crypto and traditional markets — one platform, one interface.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {FEATURES.map((f) => (
          <div
            key={f.title}
            className="rounded-xl p-6 border card-hover"
            style={{ background: '#0F172A', borderColor: 'rgba(255,255,255,0.07)' }}
          >
            <div className="text-2xl mb-3">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1 text-sm">{f.title}</h3>
            <p className="text-xs" style={{ color: '#94A3B8' }}>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
