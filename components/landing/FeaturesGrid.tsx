import type { LocaleProps } from '@/components/landing/HomePageI18n'
import type { HomeCopy } from '@/lib/home-page'

// Icons are fixed by index (not part of the localized title) so the dict stays
// clean and reordering can never mismatch an icon.
const ICONS = ['🌐', '🖥️', '🎯', '🛡️', '📊', '🤖', '🧪', '💻', '🔄', '💾']

// Dark theme + card-hover per prototypes/figma-make design language.
export function FeaturesGrid({ copy }: LocaleProps) {
  const c = copy ?? ({} as HomeCopy)
  const features = c.features?.length
    ? c.features
    : [
        { title: 'Unified Markets', desc: 'Crypto exchanges + MT5. One platform.' },
        { title: 'One Interface', desc: 'Accounts, positions, orders — one dashboard.' },
        { title: 'Smart Execution', desc: 'Unified order routing across all markets.' },
        { title: 'Unified Risk', desc: 'Position limits and drawdown guards across everything.' },
        { title: 'One Portfolio', desc: 'Single portfolio view over all connected markets.' },
        { title: 'Automation', desc: 'Multi-strategy bots, TradingView signals, pipelines.' },
        { title: 'Simulation', desc: 'Paper-trade across markets risk-free.' },
        { title: 'Smart Terminal', desc: 'Manual trading with risk-aware execution.' },
        { title: 'Auto Updates', desc: 'Stay current with signed channel updates.' },
        { title: 'Backup & Restore', desc: 'Snapshot-based backup and recovery.' },
      ]
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
      <h2 className="text-3xl font-bold text-white text-center mb-4">{c.featuresTitle || 'One Platform. Every Market.'}</h2>
      <p className="text-center mb-12 max-w-lg mx-auto" style={{ color: '#94A3B8' }}>
        {c.featuresSubtitle || 'Everything you need across crypto and traditional markets — one platform, one interface.'}
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {features.map((f, i) => (
          <div
            key={i}
            className="rounded-xl p-6 border card-hover"
            style={{ background: '#0F172A', borderColor: 'rgba(255,255,255,0.07)' }}
          >
            <div className="text-2xl mb-3">{ICONS[i]}</div>
            <h3 className="text-white font-semibold mb-1 text-sm">{f.title}</h3>
            <p className="text-xs" style={{ color: '#94A3B8' }}>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
