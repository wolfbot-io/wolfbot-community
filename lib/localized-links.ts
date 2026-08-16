/**
 * Locale-aware link rewriting for the localized homepage (PLAN §91).
 * =================================================================
 * The homepage copy stores internal links as canonical English paths. When a
 * visitor is on a localized homepage (`/vi`, `/de`, ...) we rewrite those
 * links to the English page's translated URL — but ONLY for paths that
 * actually have a translation (content pages). Hubs that have no localized
 * page (download, features, academy, security, faq) stay on the English URL.
 *
 * Keeping the source-of-truth as English paths means the dictionary stays
 * compact and swapping locales never breaks navigation.
 */

// English paths that have a real `content/<locale>/<rest>` translation.
// `$1` = path minus leading slash, matched by prefix on one of these roots.
const LOCALIZABLE_ROOTS = [
  'getting-started',
  'install/',
  'brokers/',
  'docs/',
  'releases/',
  'community-vs-cloud',
]

function isLocalizable(pathname: string): boolean {
  const p = pathname.replace(/^\/+/, '').replace(/\/+$/, '')
  if (p === '') return false
  return LOCALIZABLE_ROOTS.some((root) =>
    root.endsWith('/') ? p.startsWith(root) : p === root || p.startsWith(root + '/'),
  )
}

export { isLocalizable }

/**
 * Rewrite an English (or already-absolute) href to the active locale. `locale`
 * is the locale urlSegment (e.g. 'vi', 'de') or null/en for the English site.
 * Absolute external links and leading `#`/`?` are returned unchanged.
 */
export function localizeHref(href: string, locale: string | null): string {
  if (!locale) return href
  if (/^(https?:)?\/\//.test(href) || href.startsWith('#') || href.startsWith('?')) return href
  const path = href.split('#')[0].split('?')[0]
  if (!isLocalizable(path)) return href
  const rest = path.replace(/^\/+/, '')
  return `/${locale}/${rest}${href.slice(path.length)}`
}
