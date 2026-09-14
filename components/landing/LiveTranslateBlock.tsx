'use client'

import Link from 'next/link'
import { trackEvent } from '@/lib/analytics'
import type { LocaleProps } from '@/components/landing/HomePageI18n'
import type { HomeCopy } from '@/lib/home-page'
import { localizeHref } from '@/lib/localized-links'

// Dark theme per prototypes/figma-make design language. Deliberately styled
// as a standout, badged feature card (not a plain text section) --
// docs/plans/WOLFBOT_COMMUNITY_UNIVERSAL_LANGUAGE_LAYER_LEAD_MAGNET_MASTER_PLAN_V3_FINAL.md
// treats Live Translate as a primary lead-magnet, not a minor add-on, so the
// homepage should market it with matching visual weight.
// `copy` is only translated for en/vi so far (other locales fall back to the
// English defaults below, same pattern every other homepage section uses).
export function LiveTranslateBlock({ copy, locale }: LocaleProps) {
  const c = copy ?? ({} as HomeCopy)
  const bullets = [
    c.ltBullet1 || 'Real-time speech translation — microphone or browser-tab audio, translated as it happens',
    c.ltBullet2 || 'Instant text translation, plus a two-way conversation mode for travel and support calls',
    c.ltBullet3 || '100% local — no cloud account, no subscription, nothing ever leaves your machine',
  ]
  const stats = [
    { value: c.ltStatLanguages || '52 languages', icon: '🌐' },
    { value: c.ltStatVoices || '43 with natural voice', icon: '🔊' },
    { value: c.ltStatPrivate || '0% cloud', icon: '🔒' },
  ]
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
      <div
        className="rounded-2xl p-8 sm:p-12 border relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, rgba(0,201,232,0.08), #0B1426)', borderColor: 'rgba(0,201,232,0.25)' }}
      >
        <span
          className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
          style={{ background: 'rgba(0,201,232,0.15)', color: '#67E8F9' }}
        >
          NEW · FREE · LOCAL AI
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 max-w-2xl">
          {c.ltTitle || 'Live Translate — Break the Language Barrier with Local AI'}
        </h2>
        <p className="max-w-2xl mb-8" style={{ color: '#94A3B8' }}>
          {c.ltSubtitle || 'A free, local AI translator built into WolfBot Community. Understand anyone. Read anything. In your language.'}
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-8 max-w-2xl">
          {stats.map((s, i) => (
            <div key={i} className="rounded-xl p-4 border text-center" style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.08)' }}>
              <div className="text-lg mb-1">{s.icon}</div>
              <div className="text-sm font-semibold text-white">{s.value}</div>
            </div>
          ))}
        </div>

        <ul className="space-y-2 mb-8 max-w-2xl">
          {bullets.map((b, i) => (
            <li key={i} className="flex gap-2 text-sm" style={{ color: '#CBD5E1' }}>
              <span style={{ color: '#00C9E8' }}>✓</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <Link
          href={localizeHref('/tools/live-translate', locale ?? null)}
          onClick={() => trackEvent('cta_click', { label: 'live_translate', location: 'homepage' })}
          className="inline-block text-sm font-semibold px-6 py-3 rounded-xl accent-glow"
          style={{ background: '#00C9E8', color: '#050C18' }}
        >
          {c.ltCta || 'Explore Live Translate →'}
        </Link>
      </div>
    </section>
  )
}
