// Dark theme + JetBrains Mono file-tree per prototypes/figma-make design language.
import type { LocaleProps } from '@/components/landing/HomePageI18n'
import type { HomeCopy } from '@/lib/home-page'

export function RunsOnYourMachine({ copy }: LocaleProps) {
  const c = copy ?? ({} as HomeCopy)
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
      <h2 className="text-3xl font-bold text-white text-center mb-4">{c.runsTitle || 'Unified Trading. On Your Machine.'}</h2>
      <p className="text-center mb-12 max-w-lg mx-auto" style={{ color: '#94A3B8' }}>
        {c.runsSubtitle || 'One platform connecting to all your markets — running on your infrastructure.'}
      </p>
      <div className="max-w-lg mx-auto rounded-xl border p-8" style={{ background: '#0F172A', borderColor: 'rgba(255,255,255,0.07)' }}>
        <div className="space-y-3 font-mono text-sm">
          <div className="flex items-center gap-3 text-white"><span style={{ color: '#00C9E8' }}>🖥️</span>{c.runsMachine || 'Your Windows/Linux Machine'}</div>
          <div className="ml-9 border-l pl-6 space-y-2" style={{ borderColor: 'rgba(255,255,255,0.12)', color: '#94A3B8' }}>
            <div>{c.runsPlatform || '├── WolfBot — Unified Platform'}</div>
            <div>{c.runsEngine || '│   ├── Trading Engine'}</div>
            <div>{c.runsRisk || '│   ├── Risk Engine'}</div>
            <div>{c.runsSmart || '│   ├── Smart Execution'}</div>
            <div>{c.runsPortfolio || '│   └── Portfolio Manager'}</div>
            <div>{c.runsLocalData || '└── Local Data & Config'}</div>
          </div>
          <div className="flex items-center gap-3 mt-4" style={{ color: '#94A3B8' }}><span style={{ color: '#10B981' }}>🔗</span>{c.runsCrypto || 'Crypto Exchanges'}</div>
          <div className="flex items-center gap-3" style={{ color: '#94A3B8' }}><span style={{ color: '#F59E0B' }}>🔗</span>{c.runsMt5 || 'MT5 Brokers'}</div>
        </div>
      </div>
    </section>
  )
}
