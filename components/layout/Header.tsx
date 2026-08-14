'use client'

import { useState } from 'react'
import Link from 'next/link'
import { SearchBar } from '@/components/docs/SearchBar'
import { trackEvent } from '@/lib/analytics'

// Visual language ported from prototypes/figma-make/src/landing/LandingChrome.tsx
// (LandingHeader) — sticky dark blurred header, wolf-accent CTA with glow,
// and a mobile hamburger menu (figma-make's header is never nav-less on
// mobile — the desktop nav items just move into a slide-down panel).
// Nav items/links stay Community-specific (docs/downloads, not the SaaS
// product menu), per docs/plans/WOLFBOT_FIGMA_MAKE_UI_PORTING_FROM_UX8.md
// §8.0 ("port visual first, functionality unchanged").
const NAV_ITEMS = [
  { href: '/download', label: 'Download' },
  { href: '/getting-started', label: 'Getting Started' },
  { href: '/brokers', label: 'Markets' },
  { href: '/docs', label: 'Docs' },
  { href: '/releases', label: 'Releases' },
  { href: '/academy', label: 'Academy' },
  { href: '/security', label: 'Security' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

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
            <span className="text-wolf-text2 font-normal text-sm hidden sm:inline">COMMUNITY</span>
          </Link>

          {/* Search bar — hidden on mobile */}
          <div className="hidden md:block flex-1 max-w-xs mx-4">
            <SearchBar />
          </div>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
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
            <a
              href="https://github.com/wolfbot-io/wolfbot-community"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex text-sm text-wolf-text2 hover:text-wolf-text transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://wolfbot.io"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex text-sm text-wolf-text2 hover:text-wolf-text transition-colors"
            >
              WolfBot Cloud
            </a>
            <Link
              href="/download"
              onClick={() => trackEvent('cta_click', { label: 'download', location: 'header' })}
              className="bg-wolf-accent hover:bg-wolf-accent-soft text-[#050C18] text-sm font-semibold px-4 py-2 rounded-lg accent-glow transition-colors"
            >
              Download
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-wolf-text2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
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
          {NAV_ITEMS.map((item) => (
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
            <a
              href="https://github.com/wolfbot-io/wolfbot-community"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 text-sm text-wolf-text2 hover:text-wolf-text transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://wolfbot.io"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 text-sm text-wolf-text2 hover:text-wolf-text transition-colors"
            >
              WolfBot Cloud
            </a>
            <Link
              href="/download"
              onClick={() => { trackEvent('cta_click', { label: 'download', location: 'header_mobile' }); setMobileOpen(false) }}
              className="mx-3 text-center bg-wolf-accent text-[#050C18] text-sm font-semibold px-4 py-2.5 rounded-lg accent-glow"
            >
              Download
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
