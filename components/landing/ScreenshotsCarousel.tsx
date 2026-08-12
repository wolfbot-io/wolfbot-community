// Real screenshots from a running WolfBot Community instance (local
// self-hosted webui, logged in via loopback session) -- not generic
// placeholder art, per plan section 14/18. Only screens that render real
// data cleanly are included here; a few other panels (Terminal, Bots,
// Strategies, Risk, Marketplace) currently error on this particular local
// instance ("Not authenticated" on client-side API calls) and were
// deliberately left out rather than shipped as broken/error screenshots.
// Swap in more entries here as those get fixed or as new screenshots are
// captured from a fully-connected instance.
const SCREENSHOTS = [
  {
    src: '/screenshots/wolfbot-community-dashboard.webp',
    label: 'Dashboard',
    alt: 'WolfBot Community dashboard overview showing connected accounts and quick links to Portfolio, Strategies, Bots and Risk Center',
  },
  {
    src: '/screenshots/wolfbot-community-accounts.webp',
    label: 'Account Status',
    alt: 'WolfBot Community account status page showing PnL, fees and per-account permissions',
  },
]

// Dark theme (browser-mockup chrome) per prototypes/figma-make design language.
export function ScreenshotsCarousel() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
      <h2 className="text-3xl font-bold text-white text-center mb-12">
        See WolfBot Community
      </h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {SCREENSHOTS.map((shot) => (
          <div
            key={shot.label}
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
