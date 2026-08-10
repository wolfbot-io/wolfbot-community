export function RunsOnYourMachine() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-zinc-800">
      <h2 className="text-3xl font-bold text-white text-center mb-4">
        Runs on Your Machine
      </h2>
      <p className="text-zinc-400 text-center mb-12 max-w-lg mx-auto">
        You control the infrastructure, the keys, and the data.
      </p>

      <div className="max-w-lg mx-auto rounded-xl border border-zinc-800 bg-zinc-900/50 p-8">
        <div className="space-y-3 font-mono text-sm">
          <div className="flex items-center gap-3 text-zinc-300">
            <span className="text-blue-400">🖥️</span>
            Your Windows/Linux Machine
          </div>
          <div className="ml-9 border-l border-zinc-700 pl-6 space-y-2 text-zinc-500">
            <div>├── WolfBot Desktop</div>
            <div>├── Trading Engine</div>
            <div>├── Risk Engine</div>
            <div>├── Smart Execution</div>
            <div>├── Local Data</div>
            <div>└── Broker Connections</div>
          </div>
          <div className="flex items-center gap-3 text-zinc-400 mt-4">
            <span className="text-green-400">🔗</span>
            Exchanges (API)
          </div>
        </div>
      </div>
    </section>
  )
}
