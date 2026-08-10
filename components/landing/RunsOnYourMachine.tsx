export function RunsOnYourMachine() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-zinc-800">
      <h2 className="text-3xl font-bold text-white text-center mb-4">Unified Trading. On Your Machine.</h2>
      <p className="text-zinc-400 text-center mb-12 max-w-lg mx-auto">
        One platform connecting to all your markets — running on your infrastructure.
      </p>
      <div className="max-w-lg mx-auto rounded-xl border border-zinc-800 bg-zinc-900/50 p-8">
        <div className="space-y-3 font-mono text-sm">
          <div className="flex items-center gap-3 text-zinc-300"><span className="text-blue-400">🖥️</span>Your Windows/Linux Machine</div>
          <div className="ml-9 border-l border-zinc-700 pl-6 space-y-2 text-zinc-500">
            <div>├── WolfBot — Unified Platform</div>
            <div>│   ├── Trading Engine</div>
            <div>│   ├── Risk Engine</div>
            <div>│   ├── Smart Execution</div>
            <div>│   └── Portfolio Manager</div>
            <div>└── Local Data & Config</div>
          </div>
          <div className="flex items-center gap-3 text-zinc-400 mt-4"><span className="text-green-400">🔗</span>Crypto Exchanges</div>
          <div className="flex items-center gap-3 text-zinc-400"><span className="text-yellow-400">🔗</span>MT5 Brokers</div>
        </div>
      </div>
    </section>
  )
}
