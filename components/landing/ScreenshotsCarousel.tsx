import type { LocaleProps } from '@/components/landing/HomePageI18n'
import type { HomeCopy } from '@/lib/home-page'

export function ScreenshotsCarousel({ copy }: LocaleProps) {
  const c = copy ?? ({} as HomeCopy)
  const shots = [
    { src: '/screenshots/wolfbot-community-dashboard.webp', label: c.screenshot1Label || 'Dashboard', alt: c.screenshot1Alt || 'WolfBot Community dashboard overview showing connected accounts and quick links to Portfolio, Strategies, Bots and Risk Center' },
    { src: '/screenshots/wolfbot-community-accounts.webp', label: c.screenshot2Label || 'Account Status', alt: c.screenshot2Alt || 'WolfBot Community account status page showing PnL, fees and per-account permissions' },
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
