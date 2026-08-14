'use client'

/**
 * GA4 event tracking helper. Safe to call anywhere -- silently no-ops if
 * `window.gtag` isn't loaded yet (e.g. ad blockers, or before the
 * `afterInteractive` script in app/layout.tsx has run).
 *
 * Before this existed, `app/layout.tsx`'s gtag.js snippet only ever sent
 * automatic `page_view` hits -- there was no way to see which download
 * button, which CTA, or which broker card actually gets clicked (PLAN
 * §102 Website Events / §103 Funnel Dashboard). Pageviews alone can't
 * answer "how many people who land on /download actually click Download".
 */
export function trackEvent(name: string, params: Record<string, string | number | boolean> = {}) {
  if (typeof window === 'undefined') return
  const gtag = (window as typeof window & { gtag?: (...args: unknown[]) => void }).gtag
  if (typeof gtag !== 'function') return
  gtag('event', name, params)
}
