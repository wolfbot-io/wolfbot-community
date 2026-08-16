import type { HomeCopy } from '@/lib/home-page'

/**
 * Locale-aware landing section props.
 *
 * Copy and locale are threaded as plain props from the server-rendered
 * `LocalizedHomePage`/`EnglishHomePage` into each section (NOT via React
 * Context). This avoids Next.js 14's "callable-export proxy" for `'use client'`
 * modules during server-side static generation: props are serialized normally
 * across the client boundary, so hooks/onClick handlers that live in client
 * components keep working while the copy comes from the server.
 *
 * `copy` is `undefined` (or an empty dict) on the English site so each section
 * falls back to its hardcoded English JSX default. `locale` is `null` on
 * English, otherwise the locale urlSegment (e.g. 'vi', 'de') used to rewrite
 * internal links to their translated URLs.
 */
export interface LocaleProps {
  copy?: HomeCopy
  locale?: string | null
}

/** Convenience: the active locale string used by `localizeHref`. */
export function localeOrNull(locale?: string | null): string | null {
  return locale ?? null
}
