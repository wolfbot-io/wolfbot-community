'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SearchBar } from '@/components/docs/SearchBar'
import { trackEvent } from '@/lib/analytics'
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher'
import { localeForSlug } from '@/lib/locales'
import { chromeFor } from '@/lib/chrome-i18n'
import { localizeHref } from '@/lib/localized-links'

// Visual language ported from prototypes/figma-make/src/landing/LandingChrome.tsx
// (LandingHeader) — sticky dark blurred header, wolf-accent CTA with glow,
// and a mobile hamburger menu (figma-make's header is never nav-less on
// mobile — the desktop nav items just move into a slide-down panel).
// Nav items/links stay Community-specific (docs/downloads, not the SaaS
// product menu), per docs/plans/WOLFBOT_FIGMA_MAKE_UI_PORTING_FROM_UX8.md
// §8.0 ("port visual first, functionality unchanged").
// Labels + link targets follow the active locale (see lib/chrome-i18n.ts and
// lib/localized-links.ts): a visitor on /vi gets a Vietnamese header and the
// nav links stay on /vi content where a translation exists.
const NAV_ITEMS = [
  { href: '/download', field: 'download' },
  { href: '/getting-started', field: 'gettingStarted' },
  { href: '/brokers', field: 'markets' },
  { href: '/docs', field: 'docs' },
  { href: '/releases', field: 'releases' },
  { href: '/academy', field: 'academy' },
  { href: '/security', field: 'security' },
] as const

type NavField = (typeof NAV_ITEMS)[number]['field']

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const locale = localeForSlug((pathname ?? '/').split('#')[0].split('?')[0].slice(1))
  const t = chromeFor(locale ? locale.urlSegment : null)

  const navItems = NAV_ITEMS.map((item) => ({
    // null on English so English pages keep unprefixed /getting-started (never
    // /en/getting-started); only real locales get a prefix.
    href: localizeHref(item.href, locale?.urlSegment ?? null),
    label: t[item.field as NavField],
  }))

  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur-md"
      style={{ background: 'rgba(6,10,20,0.88)', borderColor: 'rgba(255,255,255,0.07)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <Link href="/" className="flex items-center gap-2.5 font-bold text-lg shrink-0">
            <img
              src="/wolfbot-logo.png"
              alt="WolfBot"
              className="h-8 w-8 rounded-lg"
            />
            <span className="text-wolf-text hidden sm:inline">WolfBot</span>
            <span className="text-wolf-text2 font-normal text-sm hidden sm:inline">{t.wolfbotCommunityMark}</span>
          </Link>

          {/* Search bar — hidden on mobile */}
          <div className="hidden md:block flex-1 max-w-xs mx-4">
            <SearchBar />
          </div>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm text-wolf-text2 hover:text-wolf-text rounded-lg hover:bg-white/5 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <LanguageSwitcher />
            <a
              href="https://github.com/wolfbot-io/wolfbot-community"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex text-sm text-wolf-text2 hover:text-wolf-text transition-colors"
            >
              {t.github}
            </a>
            <a
              href="https://wolfbot.io"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex text-sm text-wolf-text2 hover:text-wolf-text transition-colors"
            >
              {t.wolfbotCloud}
            </a>
            <Link
              href={localizeHref('/download', locale?.urlSegment ?? null)}
              onClick={() => trackEvent('cta_click', { label: 'download', location: 'header' })}
              className="bg-wolf-accent hover:bg-wolf-accent-soft text-[#050C18] text-sm font-semibold px-4 py-2 rounded-lg accent-glow transition-colors"
            >
              {t.download}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-wolf-text2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? t.chromeAccessibilityClose : t.chromeAccessibilityOpen}
            aria-expanded={mobileOpen}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path
                d={mobileOpen ? 'M4 4L18 18M4 18L18 4' : 'M3 6h16M3 11h16M3 16h16'}
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t px-4 sm:px-6 py-4 space-y-1 nav-dropdown"
          style={{ background: '#0B1120', borderColor: 'rgba(255,255,255,0.07)' }}
        >
          <div className="mb-3 md:hidden">
            <SearchBar />
          </div>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 text-sm text-wolf-text2 hover:text-wolf-text rounded-lg hover:bg-white/5 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-3 mt-3 border-t flex flex-col gap-3" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
            <LanguageSwitcher onNavigate={() => setMobileOpen(false)} />
            <a
              href="https://github.com/wolfbot-io/wolfbot-community"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 text-sm text-wolf-text2 hover:text-wolf-text transition-colors"
            >
              {t.github}
            </a>
            <a
              href="https://wolfbot.io"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 text-sm text-wolf-text2 hover:text-wolf-text transition-colors"
            >
              {t.wolfbotCloud}
            </a>
            <Link
              href={localizeHref('/download', locale?.urlSegment ?? null)}
              onClick={() => { trackEvent('cta_click', { label: 'download', location: 'header_mobile' }); setMobileOpen(false) }}
              className="mx-3 text-center bg-wolf-accent text-[#050C18] text-sm font-semibold px-4 py-2.5 rounded-lg accent-glow"
            >
              {t.download}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

