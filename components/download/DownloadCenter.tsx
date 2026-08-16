import Link from 'next/link'
import { TrackedLink } from '@/components/analytics/TrackedLink'
import { MobileDownloadNotice } from '@/components/download/MobileDownloadNotice'

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
const RELEASE_DATE = '2026-08-12'
const LINUX_DEB_SHA256 = 'b02ff9b4fb677ef354ad502ae5101e7256d3254126efa542c69d79d5d032f94c'
const LINUX_DEB_SIZE_MB = '~83'
const GITHUB_RELEASE_URL = `https://github.com/wolfbot-io/wolfbot-community/releases/tag/${RELEASE_TAG}`
const LINUX_DEB_URL = `https://github.com/wolfbot-io/wolfbot-community/releases/download/${RELEASE_TAG}/WolfBot-Setup-linux-amd64.deb`

// Dark theme per prototypes/figma-make design language.
export function DownloadCenter() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-white text-center mb-2">Download WolfBot Community</h1>
      <p className="text-center mb-2" style={{ color: '#94A3B8' }}>Free self-hosted unified trading platform.</p>
      <p className="text-center mb-12 text-sm font-medium" style={{ color: '#00C9E8' }}>Crypto + Futures + MT5 — One Platform. Every Market.</p>
      <MobileDownloadNotice />
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
          <TrackedLink
            href={LINUX_DEB_URL}
            eventName="download_click"
            eventParams={{ platform: 'linux', format: 'deb', release: RELEASE_TAG, location: 'download_page' }}
            className="block text-center font-semibold px-6 py-3 rounded-xl accent-glow"
            style={{ background: '#00C9E8', color: '#050C18' }}
          >
            Download .deb
          </TrackedLink>
          <div className="mt-4 space-y-1 text-xs" style={{ color: '#94A3B8' }}>
            <p>Release channel: Public Preview</p>
            <p>Released: {RELEASE_DATE} · {LINUX_DEB_SIZE_MB} MB</p>
            <p>Signature: Signed release ✓</p>
            <p>File: WolfBot-Setup-linux-amd64.deb</p>
            <p className="break-all">SHA256: {LINUX_DEB_SHA256}</p>
          </div>
        </div>
      </div>

      {/* §6: system requirements — matches install/linux.md facts */}
      <div className="max-w-3xl mx-auto mt-12">
        <h2 className="text-xl font-bold text-white mb-4">System requirements</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-xl border p-5" style={{ background: '#0F172A', borderColor: 'rgba(255,255,255,0.07)' }}>
            <h3 className="text-sm font-semibold text-white mb-2">Linux (available now)</h3>
            <ul className="space-y-1 text-sm" style={{ color: '#94A3B8' }}>
              <li>• Ubuntu 22.04 LTS, Ubuntu 24.04 LTS or Debian 12</li>
              <li>• 64-bit (x86-64)</li>
              <li>• At least 4 GB RAM and 4 GB free disk</li>
              <li>• Docker is set up automatically by the installer</li>
            </ul>
          </div>
          <div className="rounded-xl border p-5" style={{ background: '#0F172A', borderColor: 'rgba(255,255,255,0.07)' }}>
            <h3 className="text-sm font-semibold text-white mb-2">Windows (coming soon)</h3>
            <ul className="space-y-1 text-sm" style={{ color: '#94A3B8' }}>
              <li>• No Windows build in this release yet</li>
              <li>• Linux ships first; Windows is documented ahead of its follow-up release</li>
              <li>• Join the <a href="https://github.com/wolfbot-io/wolfbot-community/discussions" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#00C9E8' }}>GitHub Discussions</a> for launch updates</li>
            </ul>
          </div>
        </div>
      </div>

      {/* §6: what happens after install */}
      <div className="max-w-3xl mx-auto mt-10">
        <h2 className="text-xl font-bold text-white mb-4">What happens after install</h2>
        <ol className="list-decimal pl-5 space-y-2 text-sm leading-relaxed" style={{ color: '#94A3B8' }}>
          <li><strong className="text-white">You land on the <a href="/getting-started" className="hover:underline" style={{ color: '#00C9E8' }}>Dashboard</a></strong> — the Capability Status page shows which brokers and features your install supports. Nothing is connected yet, and WolfBot never places a trade until you add an account.</li>
          <li><strong className="text-white">Connect a Demo account first</strong> — trade risk-free against real market data with virtual funds (see the <a href="/docs/simulation" className="hover:underline" style={{ color: '#00C9E8' }}>Simulation guide</a>).</li>
          <li><strong className="text-white">Add your real broker</strong> with a trade-only API key when ready, start small, and keep risk controls on (<a href="/docs/risk-controls" className="hover:underline" style={{ color: '#00C9E8' }}>Risk Controls</a>).</li>
          <li><strong className="text-white">Recommended order:</strong> <a href="/install/linux" className="hover:underline" style={{ color: '#00C9E8' }}>install guide</a> → <a href="/getting-started" className="hover:underline" style={{ color: '#00C9E8' }}>Getting Started</a> → <a href="/docs/simulation" className="hover:underline" style={{ color: '#00C9E8' }}>Simulation</a> → <a href="/brokers" className="hover:underline" style={{ color: '#00C9E8' }}>connect a broker</a>.</li>
        </ol>
      </div>

      {/* §6: FAQ */}
      <div className="max-w-3xl mx-auto mt-10">
        <h2 className="text-xl font-bold text-white mb-4">Download FAQ</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-white mb-1">Is WolfBot Community really free?</h3>
            <p className="text-sm" style={{ color: '#94A3B8' }}>Yes. It's the free, self-hosted, open-source edition of WolfBot — you keep all your data on your own machine. WolfBot Cloud is the separate managed (paid) option; see <a href="/community-vs-cloud" className="hover:underline" style={{ color: '#00C9E8' }}>Community vs Cloud</a>.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white mb-1">Is this an official WolfBot download?</h3>
            <p className="text-sm" style={{ color: '#94A3B8' }}>Yes. This page and the <a href={GITHUB_RELEASE_URL} className="hover:underline" style={{ color: '#00C9E8' }}>wolfbot-io GitHub Releases</a> are the only official sources.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white mb-1">How do I verify the download isn't tampered with?</h3>
            <p className="text-sm" style={{ color: '#94A3B8' }}>Compare the SHA256 checksum above with yours after downloading. A signed signature file is also published with each release. See <a href="/docs/how-to-verify-a-downloaded-trading-bot" className="hover:underline" style={{ color: '#00C9E8' }}>How to verify a downloaded bot</a>.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white mb-1">Windows says the publisher is unknown. Is it safe?</h3>
            <p className="text-sm" style={{ color: '#94A3B8' }}>Public-preview self-hosted builds may not be code-signed yet, so SmartScreen can warn. Verify you downloaded from an official source and that the checksum matches, then allow it. See the <a href="/install/windows" className="hover:underline" style={{ color: '#00C9E8' }}>Windows guide</a>.</p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto mt-12 flex flex-wrap items-center justify-center gap-4 text-sm">
        <Link href="/releases" className="hover:underline" style={{ color: '#00C9E8' }}>Release Notes</Link>
        <span style={{ color: '#475569' }}>·</span>
        <a href={GITHUB_RELEASE_URL} className="hover:underline" style={{ color: '#00C9E8' }}>GitHub Release</a>
        <span style={{ color: '#475569' }}>·</span>
        <Link href="/getting-started" style={{ color: '#94A3B8' }} className="hover:text-white transition-colors">Not sure? Read Getting Started →</Link>
      </div>
    </section>
  )
}
