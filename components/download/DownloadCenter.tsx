import Link from 'next/link'
import { TrackedLink } from '@/components/analytics/TrackedLink'
import { MobileDownloadNotice } from '@/components/download/MobileDownloadNotice'

// Real release info -- was `href="#"` on both buttons before (100% dead,
// unrelated to draft/publish state). Releases are published as regular
// (non-prerelease) GitHub Releases -- NOT `prerelease: true` -- specifically
// so GitHub's `/releases/latest` alias resolves correctly. That alias is a
// hard dependency of `core/local_runtime/update_checker.py` (the in-app
// "check for updates" feature), which fetches the fixed URL
// `releases/latest/download/wolfbot-release.json`; a prerelease-flagged
// release is invisible to that alias and silently breaks update checks for
// every install (found + fixed 2026-08-19). Update RELEASE_TAG here on each
// new release too (matches the existing per-page `tested_version`
// frontmatter pattern already used elsewhere on this site -- this repo has
// no server-side rendering to look this up dynamically, see
// next.config.mjs output: 'export').
const RELEASE_TAG = 'v0.1.0-beta.11'
const RELEASE_VERSION_LABEL = '0.1.0-beta.11'
const RELEASE_DATE = '2026-09-25'
const LINUX_DEB_SHA256 = '85a25dd4a809ed715784d2848fbc131e28399de907831082ce8fa63da2f499fb'
const LINUX_DEB_SIZE_MB = '~86'
const LINUX_RUN_SHA256 = '06529a590da413552067aa867ab8d377fb003fe2dae84c0ac3a321c7c7e7e0f4'
const LINUX_RUN_SIZE_MB = '~113'
const GITHUB_RELEASE_URL = `https://github.com/wolfbot-io/wolfbot-community/releases/tag/${RELEASE_TAG}`
const LINUX_DEB_URL = `https://github.com/wolfbot-io/wolfbot-community/releases/download/${RELEASE_TAG}/WolfBot-Setup-linux-amd64.deb`
const LINUX_RUN_URL = `https://github.com/wolfbot-io/wolfbot-community/releases/download/${RELEASE_TAG}/wolfbot-oneclick-${RELEASE_VERSION_LABEL}.run`
// Windows: v0.1.0-beta.11 shipped Linux-only (no new Windows build), so the
// Windows card intentionally keeps pointing at the v0.1.0-beta.10 asset/tag
// instead of the current RELEASE_TAG above -- this is an initial build with
// a known background market-data reconnect issue (websockets.legacy Nuitka
// packaging gap) found right after it shipped; a corrected build is already
// compiled and will replace this asset in a future release. Kept as a
// distinct, honest note rather than silently implying it tracks RELEASE_TAG.
const WINDOWS_RELEASE_TAG = 'v0.1.0-beta.10'
const WINDOWS_VERSION_LABEL = '0.1.0-beta.10'
const WINDOWS_RELEASE_DATE = '2026-09-20'
const WINDOWS_EXE_SHA256 = '85ec8b5f7062d0d05a7c3416105a5173d16ad7ea24d52e2c6c56f037271e3b79'
const WINDOWS_EXE_SIZE_MB = '~457'
const WINDOWS_EXE_URL = `https://github.com/wolfbot-io/wolfbot-community/releases/download/${WINDOWS_RELEASE_TAG}/WolfBot-Setup-${WINDOWS_VERSION_LABEL}-windows-x64.exe`

// Dark theme per prototypes/figma-make design language.
export function DownloadCenter() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-white text-center mb-2">Download WolfBot Community</h1>
      <p className="text-center mb-2" style={{ color: '#94A3B8' }}>Free self-hosted unified trading platform.</p>
      <p className="text-center mb-12 text-sm font-medium" style={{ color: '#00C9E8' }}>Crypto + Futures + MT5 + TradingView Webhooks — One Platform. Every Market.</p>
      <MobileDownloadNotice />
      <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <div className="rounded-xl p-8 border" style={{ background: 'rgba(0,201,232,0.06)', borderColor: 'rgba(0,201,232,0.28)' }}>
          <span className="text-xs font-semibold px-2 py-0.5 rounded" style={{ background: 'rgba(245,158,11,0.15)', color: '#FBBF24' }}>INITIAL BUILD</span>
          <h2 className="text-xl font-bold text-white mt-2 mb-1">Windows x64</h2>
          <p className="text-sm mb-4" style={{ color: '#94A3B8' }}>64-bit installer · v{WINDOWS_VERSION_LABEL}</p>
          <TrackedLink
            href={WINDOWS_EXE_URL}
            target="_blank"
            rel="noopener noreferrer"
            eventName="download_click"
            eventParams={{ platform: 'windows', format: 'exe', release: WINDOWS_RELEASE_TAG, location: 'download_page' }}
            className="block text-center font-semibold px-6 py-3 rounded-xl accent-glow"
            style={{ background: '#00C9E8', color: '#050C18' }}
          >
            Download .exe ({WINDOWS_EXE_SIZE_MB} MB)
          </TrackedLink>
          <div className="mt-4 space-y-1 text-xs" style={{ color: '#94A3B8' }}>
            <p>Release channel: v{WINDOWS_VERSION_LABEL} (unchanged in v{RELEASE_VERSION_LABEL})</p>
            <p>Released: {WINDOWS_RELEASE_DATE}</p>
            <p className="break-all">SHA256: {WINDOWS_EXE_SHA256}</p>
          </div>
          <div className="mt-3 rounded-lg border p-3 text-xs space-y-1" style={{ borderColor: 'rgba(245,158,11,0.3)', background: 'rgba(245,158,11,0.06)', color: '#FCD34D' }}>
            <p className="font-semibold">Known issue on this build (fix already built)</p>
            <p style={{ color: '#94A3B8' }}>Background market-data connections used by the AI signal engine can fail to reconnect and retry continuously on Windows, visible as repeated warnings in the app logs and a slower Overview page. Order placement, TP/SL, and risk guards are not touched by this specific gap. A corrected build will replace this same file in a future release — no action needed from you.</p>
            <p style={{ color: '#94A3B8' }}>This build is not yet code-signed, so Windows SmartScreen will show an unrecognized-publisher warning — choose "More info" → "Run anyway" to continue.</p>
            <p style={{ color: '#94A3B8' }}>v{RELEASE_VERSION_LABEL} shipped Linux-only — this Windows file is unchanged since v{WINDOWS_VERSION_LABEL}.</p>
          </div>
        </div>
        <div className="rounded-xl p-8 border" style={{ background: 'rgba(0,201,232,0.06)', borderColor: 'rgba(0,201,232,0.28)' }}>
          <span className="text-xs font-semibold px-2 py-0.5 rounded" style={{ background: 'rgba(0,201,232,0.15)', color: '#67E8F9' }}>AVAILABLE NOW</span>
          <h2 className="text-xl font-bold text-white mt-2 mb-1">Linux x64</h2>
          <p className="text-sm mb-4" style={{ color: '#94A3B8' }}>Ubuntu/Debian · v{RELEASE_VERSION_LABEL}</p>
          <p className="text-xs mb-3" style={{ color: '#94A3B8' }}>Two installer formats — pick whichever fits your system.</p>
          <div className="grid grid-cols-2 gap-3">
            <TrackedLink
              href={LINUX_DEB_URL}
              target="_blank"
              rel="noopener noreferrer"
              eventName="download_click"
              eventParams={{ platform: 'linux', format: 'deb', release: RELEASE_TAG, location: 'download_page' }}
              className="block text-center font-semibold px-4 py-3 rounded-xl accent-glow"
              style={{ background: '#00C9E8', color: '#050C18' }}
            >
              Download .deb
            </TrackedLink>
            <TrackedLink
              href={LINUX_RUN_URL}
              target="_blank"
              rel="noopener noreferrer"
              eventName="download_click"
              eventParams={{ platform: 'linux', format: 'run', release: RELEASE_TAG, location: 'download_page' }}
              className="block text-center font-semibold px-4 py-3 rounded-xl border"
              style={{ borderColor: 'rgba(0,201,232,0.4)', color: '#67E8F9' }}
            >
              Download .run
            </TrackedLink>
          </div>
          <div className="mt-4 space-y-1 text-xs" style={{ color: '#94A3B8' }}>
            <p>Release channel: Latest public release</p>
            <p>Released: {RELEASE_DATE}</p>
            <p>Signature: signed release manifest + digest-pinned images</p>
          </div>
          <div className="mt-3 space-y-1 text-xs" style={{ color: '#94A3B8' }}>
            <p className="font-semibold" style={{ color: '#CBD5E1' }}>.deb — Debian/Ubuntu package ({LINUX_DEB_SIZE_MB} MB)</p>
            <p>Installs via <code>apt</code>/<code>dpkg</code>; uses your system's package manager for updates.</p>
            <p>File: WolfBot-Setup-linux-amd64.deb</p>
            <p className="break-all">SHA256: {LINUX_DEB_SHA256}</p>
          </div>
          <div className="mt-3 space-y-1 text-xs" style={{ color: '#94A3B8' }}>
            <p className="font-semibold" style={{ color: '#CBD5E1' }}>.run — self-extracting installer ({LINUX_RUN_SIZE_MB} MB)</p>
            <p>No <code>.deb</code> packaging required; works on more Linux distributions beyond Debian/Ubuntu.</p>
            <p className="break-all">File: {LINUX_RUN_URL.split('/').pop()}</p>
            <p className="break-all">SHA256: {LINUX_RUN_SHA256}</p>
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
            <h3 className="text-sm font-semibold text-white mb-2">Windows (available now, initial build)</h3>
            <ul className="space-y-1 text-sm" style={{ color: '#94A3B8' }}>
              <li>• Windows 10/11, 64-bit (x86-64)</li>
              <li>• At least 4 GB RAM and 4 GB free disk</li>
              <li>• Docker Desktop is only required for the optional MT5 and Translator features</li>
              <li>• Not yet code-signed — Windows SmartScreen shows a warning, choose "Run anyway"</li>
              <li>• Join the <a href="https://github.com/wolfbot-io/wolfbot-community/discussions" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#00C9E8' }}>GitHub Discussions</a> for updates</li>
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
            <p className="text-sm" style={{ color: '#94A3B8' }}>Yes. This page and the <a href={GITHUB_RELEASE_URL} target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#00C9E8' }}>wolfbot-io GitHub Releases</a> are the only official sources.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white mb-1">How do I verify the download isn't tampered with?</h3>
            <p className="text-sm" style={{ color: '#94A3B8' }}>Compare the SHA256 checksum above with yours after downloading. A signed signature file is also published with each release. See <a href="/docs/how-to-verify-a-downloaded-trading-bot" className="hover:underline" style={{ color: '#00C9E8' }}>How to verify a downloaded bot</a>.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white mb-1">Should I install directly or verify first?</h3>
            <p className="text-sm" style={{ color: '#94A3B8' }}>Verify first if you can. Check the SHA256 value for the <code>.deb</code> or <code>.run</code> file, then compare it with the checksum published here and in the GitHub release. The installer also uses the signed release manifest for the runtime stack.</p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto mt-12 flex flex-wrap items-center justify-center gap-4 text-sm">
        <Link href="/releases/0.1.0-beta.11" className="hover:underline" style={{ color: '#00C9E8' }}>Release Notes</Link>
        <span style={{ color: '#475569' }}>·</span>
        <a href={GITHUB_RELEASE_URL} target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#00C9E8' }}>GitHub Release</a>
        <span style={{ color: '#475569' }}>·</span>
        <Link href="/getting-started" style={{ color: '#94A3B8' }} className="hover:text-white transition-colors">Not sure? Read Getting Started →</Link>
      </div>
    </section>
  )
}
