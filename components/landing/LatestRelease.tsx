import Link from 'next/link'

export function LatestRelease() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-zinc-800">
      <h2 className="text-3xl font-bold text-white text-center mb-12">Latest Release</h2>
      <div className="max-w-2xl mx-auto border border-zinc-800 rounded-xl p-8 bg-zinc-900/50">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-blue-600/20 text-blue-400 text-xs font-semibold px-2 py-0.5 rounded">PUBLIC PREVIEW</span>
          <span className="text-white font-bold">v0.8.0-beta.2</span>
        </div>
        <p className="text-zinc-400 text-sm mb-6">Latest public preview with installation improvements and market connectivity updates.</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/download" className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-lg">Download</Link>
          <a href="https://github.com/wolfbot-io/wolfbot-community/releases/latest" target="_blank" rel="noopener noreferrer" className="border border-zinc-700 hover:border-zinc-500 text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">GitHub Release</a>
        </div>
      </div>
    </section>
  )
}
