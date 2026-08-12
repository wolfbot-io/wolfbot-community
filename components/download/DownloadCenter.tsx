import Link from 'next/link'

// Real release info -- was `href="#"` on both buttons before (100% dead,
// unrelated to draft/publish state). GitHub's `/releases/latest` alias
// (and `/releases/latest/download/<file>`) only ever resolves to the most
// recent release that is NEITHER a draft NOR a prerelease -- this release
// is intentionally `prerelease: true` (Public Preview / dev-preview
// channel), so `latest` would silently never match it even once
// published. Link the exact tag instead; update RELEASE_TAG on each new
// release (matches the existing per-page `tested_version` frontmatter
// pattern already used elsewhere on this site -- this repo has no
// server-side rendering to look this up dynamically, see next.config.mjs
// output: 'export').
const RELEASE_TAG = 'v0.1.0-p12-ghcr-rc8'
const RELEASE_VERSION_LABEL = '0.1.0-p12-ghcr-rc8 (Public Preview)'
const LINUX_DEB_SHA256 = 'b02ff9b4fb677ef354ad502ae5101e7256d3254126efa542c69d79d5d032f94c'
const GITHUB_RELEASE_URL = `https://github.com/wolfbot-io/wolfbot-community/releases/tag/${RELEASE_TAG}`
const LINUX_DEB_URL = `https://github.com/wolfbot-io/wolfbot-community/releases/download/${RELEASE_TAG}/WolfBot-Setup-linux-amd64.deb`

// Dark theme per prototypes/figma-make design language.
export function DownloadCenter() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-white text-center mb-2">Download WolfBot Community</h1>
      <p className="text-center mb-2" style={{ color: '#94A3B8' }}>Free self-hosted unified trading platform.</p>
      <p className="text-center mb-12 text-sm font-medium" style={{ color: '#00C9E8' }}>Crypto + Futures + MT5 — One Platform. Every Market.</p>
      <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <div className="rounded-xl p-8 border opacity-60" style={{ background: '#0F172A', borderColor: 'rgba(255,255,255,0.07)' }}>
          <h2 className="text-xl font-bold text-white mt-2 mb-1">Windows x64</h2>
          <p className="text-sm mb-4" style={{ color: '#94A3B8' }}>Not built yet</p>
          <span
            className="block text-center border font-semibold px-6 py-3 rounded-xl cursor-not-allowed"
            style={{ borderColor: 'rgba(255,255,255,0.12)', color: '#94A3B8' }}
            aria-disabled="true"
          >
            Coming soon
          </span>
          <div className="mt-4 space-y-1 text-xs" style={{ color: '#94A3B8' }}>
            <p>No Windows build in this release yet — Linux is first.</p>
          </div>
        </div>
        <div className="rounded-xl p-8 border" style={{ background: 'rgba(0,201,232,0.06)', borderColor: 'rgba(0,201,232,0.28)' }}>
          <span className="text-xs font-semibold px-2 py-0.5 rounded" style={{ background: 'rgba(0,201,232,0.15)', color: '#67E8F9' }}>AVAILABLE NOW</span>
          <h2 className="text-xl font-bold text-white mt-2 mb-1">Linux x64</h2>
          <p className="text-sm mb-4" style={{ color: '#94A3B8' }}>Ubuntu/Debian · v{RELEASE_VERSION_LABEL}</p>
          <a
            href={LINUX_DEB_URL}
            className="block text-center font-semibold px-6 py-3 rounded-xl accent-glow"
            style={{ background: '#00C9E8', color: '#050C18' }}
          >
            Download .deb
          </a>
          <div className="mt-4 space-y-1 text-xs" style={{ color: '#94A3B8' }}>
            <p>Release channel: Public Preview</p>
            <p className="break-all">SHA256: {LINUX_DEB_SHA256}</p>
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto mt-8 flex flex-wrap items-center justify-center gap-4 text-sm">
        <Link href="/releases" className="hover:underline" style={{ color: '#00C9E8' }}>Release Notes</Link>
        <span style={{ color: '#475569' }}>·</span>
        <a href={GITHUB_RELEASE_URL} className="hover:underline" style={{ color: '#00C9E8' }}>GitHub Release</a>
        <span style={{ color: '#475569' }}>·</span>
        <Link href="/getting-started" style={{ color: '#94A3B8' }} className="hover:text-white transition-colors">Not sure? Read Getting Started →</Link>
      </div>
    </section>
  )
}
