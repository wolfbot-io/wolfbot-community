import Link from 'next/link'

// Same reasoning as components/download/DownloadCenter.tsx: this release
// is `prerelease: true`, so GitHub's `/releases/latest` alias never
// matches it -- link the exact tag instead.
const RELEASE_TAG = 'v0.1.0-p12-ghcr-rc8'
const GITHUB_RELEASE_URL = `https://github.com/wolfbot-io/wolfbot-community/releases/tag/${RELEASE_TAG}`

// Dark theme per prototypes/figma-make design language.
export function LatestRelease() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
      <h2 className="text-3xl font-bold text-white text-center mb-12">Latest Release</h2>
      <div className="max-w-2xl mx-auto rounded-xl p-8 border" style={{ background: '#0F172A', borderColor: 'rgba(255,255,255,0.07)' }}>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-semibold px-2 py-0.5 rounded" style={{ background: 'rgba(0,201,232,0.15)', color: '#67E8F9' }}>PUBLIC PREVIEW</span>
          <span className="text-white font-bold">{RELEASE_TAG}</span>
        </div>
        <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>First public release. Linux (Ubuntu/Debian) only — a Windows build is not part of this release yet.</p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/download"
            className="text-sm font-medium px-4 py-2 rounded-lg accent-glow"
            style={{ background: '#00C9E8', color: '#050C18' }}
          >
            Download
          </Link>
          <a
            href={GITHUB_RELEASE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium px-4 py-2 rounded-lg border"
            style={{ color: '#94A3B8', borderColor: 'rgba(255,255,255,0.12)' }}
          >
            GitHub Release
          </a>
        </div>
      </div>
    </section>
  )
}
