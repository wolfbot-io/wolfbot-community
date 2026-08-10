import Link from 'next/link'

export function ReleaseStrip() {
  return (
    <div className="bg-blue-950/40 border-b border-blue-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-2 text-sm">
          <div className="flex items-center gap-2">
            <span className="bg-blue-600/20 text-blue-400 text-xs font-semibold px-2 py-0.5 rounded">PUBLIC PREVIEW</span>
            <span className="text-zinc-300">WolfBot Community v0.8.0-beta.2 is available</span>
          </div>
          <div className="flex items-center gap-3 text-zinc-400">
            <span>Windows x64</span><span className="text-zinc-700">·</span><span>Linux x64</span>
            <Link href="/releases" className="text-blue-400 hover:underline">See release →</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
