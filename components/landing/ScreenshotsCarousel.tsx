import { execSync } from 'child_process'
import type { LocaleProps } from '@/components/landing/HomePageI18n'
import type { HomeCopy } from '@/lib/home-page'

// Cache-busting for non-hashed screenshot URLs. The /screenshots/* filenames
// never change, so without a changing query string, a browser/CDN that cached
// `immutable` under the old nginx config would keep showing a stale image. Any
// changing value per deploy (env override, else the current git short SHA)
// makes the URL unique per release, so the new image is fetched the moment the
// new HTML is deployed -- no manual Cloudflare purge ever needed.
const ASSET_VERSION =
  process.env.NEXT_PUBLIC_ASSET_VERSION ||
  (() => {
    try {
      return execSync('git rev-parse --short HEAD').toString().trim()
    } catch {
      return 'dev'
    }
  })()

const versioned = (path: string) => `${path}?v=${ASSET_VERSION}`

export function ScreenshotsCarousel({ copy }: LocaleProps) {
  const c = copy ?? ({} as HomeCopy)
  const shots = [
    { src: versioned('/screenshots/wolfbot-community-dashboard.webp'), label: c.screenshot1Label || 'Dashboard', alt: c.screenshot1Alt || 'WolfBot Community dashboard overview showing connected accounts and quick links to Portfolio, Strategies, Bots and Risk Center' },
    { src: versioned('/screenshots/wolfbot-community-accounts.webp'), label: c.screenshot2Label || 'Account Status', alt: c.screenshot2Alt || 'WolfBot Community account status page showing PnL, fees and per-account permissions' },
  ]
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
      <h2 className="text-3xl font-bold text-white text-center mb-12">
        {c.screenshotsTitle || 'See WolfBot Community'}
      </h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {shots.map((shot, i) => (
          <div
            key={i}
            className="rounded-xl border overflow-hidden"
            style={{ background: '#0B1120', borderColor: 'rgba(0,201,232,0.18)' }}
          >
            <div className="h-8 flex items-center px-4 border-b" style={{ background: '#0F172A', borderColor: 'rgba(255,255,255,0.07)' }}>
              <span className="text-xs" style={{ color: '#94A3B8' }}>{shot.label}</span>
            </div>
            <img
              src={shot.src}
              alt={shot.alt}
              loading="lazy"
              className="w-full h-auto block"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
