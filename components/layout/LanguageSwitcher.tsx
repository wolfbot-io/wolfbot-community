'use client'

import { useState, useRef, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { LOCALES, localeForSlug, toEnglishSlug, toLocaleSlug } from '@/lib/locales'

// PLAN §91 — language switcher. Shows the 9 available languages (English +
// the 8 translated locales) as a globe dropdown. Choosing a language jumps
// to the localized URL of the *current English-equivalent page* when a
// translation exists (e.g. /docs/risk-controls -> /vi/docs/risk-controls),
// or to the English page otherwise. The path name is resolved purely from
// the URL (split('%2F') preserves embedded slashes from locale segments).
export function getSwitchedHref(langUrlSegment: string, pathname: string): string {
  const path = pathname.split('#')[0].split('?')[0]
  const currentLocale = localeForSlug(path.slice(1))
  const english = currentLocale ? toEnglishSlug(path.slice(1)) : path.slice(1)
  if (langUrlSegment === 'en') return `/${english}`
  return toLocaleSlug(english, langUrlSegment)
}

const SELECTED_KEY = 'wolfbot_community_lang'

export function LanguageSwitcher({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [picked, setPicked] = useState<string | null>(null)
  const ref = useRef<HTMLDivElement>(null)

  const path = pathname.split('#')[0].split('?')[0]
  const currentLocale = localeForSlug(path.slice(1))
  const currentSegment = currentLocale ? currentLocale.urlSegment : 'en'

  const choose = (seg: string) => {
    setOpen(false)
    setPicked(seg)
    onNavigate?.()
  }

  // Close on outside click
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onDocClick)
    return () => document.removeEventListener('mousedown', onDocClick)
  }, [])

  // Persist last choice so auto-detect (layout head script) uses it next time.
  useEffect(() => {
    if (picked) localStorage.setItem(SELECTED_KEY, picked)
  }, [picked])

  const englishLabel = 'English'

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-1.5 px-3 py-2 text-sm text-wolf-text2 hover:text-wolf-text rounded-lg hover:bg-white/5 transition-colors"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.5 4 5.6 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.6-4-9s1.5-6.5 4-9z" />
        </svg>
        <span className="hidden sm:inline">{currentLocale ? currentLocale.labelEn : englishLabel}</span>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Language"
          className="absolute right-0 mt-2 w-44 rounded-xl border nav-dropdown py-1.5 z-50"
          style={{ background: '#0B1120', borderColor: 'rgba(255,255,255,0.12)' }}
        >
          <li>
            <a
              href={getSwitchedHref('en', pathname)}
              onClick={() => choose('en')}
              className={`block px-3 py-2 text-sm hover:bg-white/5 transition-colors ${
                currentSegment === 'en' ? 'text-wolf-accent font-medium' : 'text-wolf-text2'
              }`}
              role="option"
              aria-selected={currentSegment === 'en'}
            >
              English
            </a>
          </li>
          {LOCALES.map((l) => (
            <li key={l.urlSegment}>
              <a
                href={getSwitchedHref(l.urlSegment, pathname)}
                onClick={() => choose(l.urlSegment)}
                className={`flex items-center justify-between px-3 py-2 text-sm hover:bg-white/5 transition-colors ${
                  currentSegment === l.urlSegment ? 'text-wolf-accent font-medium' : 'text-wolf-text2'
                }`}
                role="option"
                aria-selected={currentSegment === l.urlSegment}
              >
                <span>{l.labelEn}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
