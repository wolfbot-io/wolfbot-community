'use client'

import Link from 'next/link'
import { trackEvent } from '@/lib/analytics'
import type { LocaleProps } from '@/components/landing/HomePageI18n'
import type { HomeCopy } from '@/lib/home-page'
import { localizeHref } from '@/lib/localized-links'

// Visual language ported from prototypes/figma-make/src/landing/LandingPage.tsx
// (HeroSection) — hero-glow radial backdrop, gradient-text headline accent,
// wolf-accent CTA with glow, dark browser-mockup card. Copy is localized via
// the `copy` prop; the `en` site passes no copy so these JSX defaults are used.
export function Hero({ copy, locale }: LocaleProps) {
  const c = copy ?? ({} as HomeCopy)
  return (
    <section className="relative overflow-hidden" style={{ background: '#060A14' }}>
      <div className="hero-glow absolute inset-0 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6"
              style={{ background: 'rgba(0,201,232,0.1)', color: '#67E8F9', border: '1px solid rgba(0,201,232,0.18)' }}
            >
              {c.heroBadge || 'WolfBot Community by WolfBot.io · Free & Self-Hosted'}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
              {c.heroTitle1 || 'Trade Every Market.'}
              <br />
              {c.heroTitle2 || 'From '}<span className="gradient-text">{c.heroTitleGradient || 'One Platform'}</span>.
            </h1>
            <p className="mt-4 text-xl font-semibold" style={{ color: '#00C9E8' }}>
              {c.heroTagline || 'Crypto, Futures and MT5 — unified in WolfBot.'}
            </p>
            <p className="mt-6 text-lg leading-relaxed max-w-xl" style={{ color: '#94A3B8' }}>
              {c.heroDescription ||
                'Connect modern digital-asset exchanges and traditional financial markets through a single trading platform. Automate strategies, manage accounts, control risk, execute trades and monitor your portfolio from one interface.'}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href={localizeHref('/download', locale ?? null)}
                onClick={() => trackEvent('cta_click', { label: 'download', location: 'hero' })}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-xl transition-all accent-glow text-center"
                style={{ background: '#00C9E8', color: '#050C18' }}
              >
                {c.heroDownloadCta || 'Download WolfBot Community'}
              </Link>
              <Link
                href={localizeHref('/getting-started', locale ?? null)}
                onClick={() => trackEvent('cta_click', { label: 'getting_started', location: 'hero' })}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-xl border transition-all text-center"
                style={{ color: '#94A3B8', borderColor: 'rgba(255,255,255,0.12)' }}
              >
                {c.heroGettingStartedCta || 'Getting Started'}
              </Link>
            </div>

            <p className="mt-4 text-sm" style={{ color: '#475569' }}>
              {c.heroMeta || 'Free · Windows & Linux · Self-Hosted · Latest Public Release'}
            </p>
          </div>

          <div className="relative">
            <div
              className="rounded-2xl overflow-hidden border shadow-2xl"
              style={{ background: '#0B1120', borderColor: 'rgba(0,201,232,0.18)', boxShadow: '0 24px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,201,232,0.1)' }}
            >
              <div className="h-9 flex items-center px-4 gap-2 border-b" style={{ background: '#0F172A', borderColor: 'rgba(255,255,255,0.07)' }}>
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="text-xs ml-2" style={{ color: '#94A3B8' }}>{c.heroMockupTitle || 'WolfBot — One Platform'}</span>
              </div>
              <div className="aspect-video flex items-center justify-center text-sm" style={{ background: '#0B1120', color: '#475569' }}>
                {c.heroMockupLabel || 'Dashboard Preview'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
