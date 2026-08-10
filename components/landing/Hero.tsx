import Link from 'next/link'

export function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm font-semibold text-blue-400 uppercase tracking-wide mb-4">
            WolfBot Community
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Trade Every Market.
            <br />
            From One Platform.
          </h1>
          <p className="mt-4 text-xl text-blue-400 font-semibold">
            Crypto, Futures and MT5 — unified in WolfBot.
          </p>
          <p className="mt-6 text-lg text-zinc-400 max-w-xl">
            Connect modern digital-asset exchanges and traditional financial markets through a single trading platform. Automate strategies, manage accounts, control risk, execute trades and monitor your portfolio from one interface.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/download"
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors text-center"
            >
              Download WolfBot Community
            </Link>
            <Link
              href="/getting-started"
              className="border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors text-center"
            >
              Getting Started
            </Link>
          </div>

          <p className="mt-4 text-sm text-zinc-600">
            Free · Windows & Linux · Self-Hosted · Public Preview
          </p>
        </div>

        <div className="relative">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 overflow-hidden shadow-2xl">
            <div className="h-8 bg-zinc-800 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <span className="text-xs text-zinc-500 ml-2">WolfBot — One Platform</span>
            </div>
            <div className="aspect-video bg-zinc-950 flex items-center justify-center text-zinc-700 text-sm">
              Dashboard Preview
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
