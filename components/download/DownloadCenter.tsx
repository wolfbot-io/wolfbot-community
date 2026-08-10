import Link from 'next/link'

export function DownloadCenter() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-white text-center mb-2">Download WolfBot Community</h1>
      <p className="text-zinc-400 text-center mb-12">Free self-hosted edition.</p>
      <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <div className="border border-blue-900/50 rounded-xl p-8 bg-blue-950/10">
          <span className="text-xs font-semibold bg-blue-600/20 text-blue-400 px-2 py-0.5 rounded">RECOMMENDED</span>
          <h2 className="text-xl font-bold text-white mt-2 mb-1">Windows x64</h2>
          <p className="text-sm text-zinc-500 mb-4">WolfBot Community v0.8.0-beta.2</p>
          <Link href="#" className="block text-center bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl">Download Setup.exe</Link>
          <div className="mt-4 space-y-1 text-xs text-zinc-600"><p>Release channel: Public Preview</p><p>SHA256: coming soon</p></div>
        </div>
        <div className="border border-zinc-800 rounded-xl p-8 bg-zinc-900/50">
          <h2 className="text-xl font-bold text-white mb-1">Linux x64</h2>
          <p className="text-sm text-zinc-500 mb-4">Ubuntu/Debian · v0.8.0-beta.2</p>
          <Link href="#" className="block text-center border border-zinc-700 hover:border-zinc-500 text-white font-semibold px-6 py-3 rounded-xl">Download .deb</Link>
          <div className="mt-4 space-y-1 text-xs text-zinc-600"><p>Release channel: Public Preview</p><p>SHA256: coming soon</p></div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto mt-8 flex flex-wrap items-center justify-center gap-4 text-sm">
        <Link href="/releases" className="text-blue-400 hover:underline">Release Notes</Link>
        <span className="text-zinc-700">·</span>
        <a href="https://github.com/wolfbot-io/wolfbot-community/releases/latest" className="text-blue-400 hover:underline">GitHub Release</a>
        <span className="text-zinc-700">·</span>
        <Link href="/getting-started" className="text-zinc-400 hover:text-white">Not sure? Read Getting Started →</Link>
      </div>
    </section>
  )
}
