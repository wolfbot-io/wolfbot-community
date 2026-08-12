// Dark theme + JetBrains Mono file-tree per prototypes/figma-make design language.
export function RunsOnYourMachine() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
      <h2 className="text-3xl font-bold text-white text-center mb-4">Unified Trading. On Your Machine.</h2>
      <p className="text-center mb-12 max-w-lg mx-auto" style={{ color: '#94A3B8' }}>
        One platform connecting to all your markets — running on your infrastructure.
      </p>
      <div className="max-w-lg mx-auto rounded-xl border p-8" style={{ background: '#0F172A', borderColor: 'rgba(255,255,255,0.07)' }}>
        <div className="space-y-3 font-mono text-sm">
          <div className="flex items-center gap-3 text-white"><span style={{ color: '#00C9E8' }}>🖥️</span>Your Windows/Linux Machine</div>
          <div className="ml-9 border-l pl-6 space-y-2" style={{ borderColor: 'rgba(255,255,255,0.12)', color: '#94A3B8' }}>
            <div>├── WolfBot — Unified Platform</div>
            <div>│   ├── Trading Engine</div>
            <div>│   ├── Risk Engine</div>
            <div>│   ├── Smart Execution</div>
            <div>│   └── Portfolio Manager</div>
            <div>└── Local Data &amp; Config</div>
          </div>
          <div className="flex items-center gap-3 mt-4" style={{ color: '#94A3B8' }}><span style={{ color: '#10B981' }}>🔗</span>Crypto Exchanges</div>
          <div className="flex items-center gap-3" style={{ color: '#94A3B8' }}><span style={{ color: '#F59E0B' }}>🔗</span>MT5 Brokers</div>
        </div>
      </div>
    </section>
  )
}
