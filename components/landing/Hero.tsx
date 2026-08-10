import Link from 'next/link'

export function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Copy */}
        <div>
          <p className="text-sm font-semibold text-blue-400 uppercase tracking-wide mb-4">
            WolfBot Community
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Run WolfBot
            <br />
            on your own machine.
            <br />
            <span className="text-blue-500">Free.</span>
          </h1>
          <p className="mt-6 text-lg text-zinc-400 max-w-lg">
            Self-host WolfBot on Windows or Linux.
            Install in minutes and start with Simulation.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/download"
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors text-center"
            >
              Download for Windows
            </Link>
            <Link
              href="/install/linux"
              className="border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors text-center"
            >
              Linux download
            </Link>
          </div>

          <p className="mt-4 text-sm text-zinc-600">
            Public Preview · v0.8.0-beta.2
          </p>
        </div>

        {/* Right: Screenshot */}
        <div className="relative">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 overflow-hidden shadow-2xl">
            <div className="h-8 bg-zinc-800 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <span className="text-xs text-zinc-500 ml-2">WolfBot Dashboard</span>
            </div>
            <div className="aspect-video bg-zinc-950 flex items-center justify-center text-zinc-700 text-sm">
              {/* Real screenshot goes here */}
              Dashboard Preview
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
