'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher'
import { localeForSlug } from '@/lib/locales'
import { chromeFor } from '@/lib/chrome-i18n'
import { localizeHref } from '@/lib/localized-links'

// Visual language ported from prototypes/figma-make/src/landing/LandingChrome.tsx
// (Footer) — dark bg, uppercase muted column headings, wolf-text3 → wolf-text2
// hover links. Content stays Community-specific (real links/columns already
// verified this session), only the styling is ported.
// Column titles, link labels and the tagline follow the active locale (see
// lib/chrome-i18n.ts); internal links keep the locale where a translation
// exists via localizeHref.
const FOOTER_SECTIONS = [
  {
    titleField: 'product',
    links: [
      { href: '/download', field: 'download' },
      { href: '/brokers', field: 'markets' },
      { href: '/features', field: 'features' },
      { href: '/releases', field: 'releases' },
    ],
  },
  {
    titleField: 'learn',
    links: [
      { href: '/getting-started', field: 'gettingStarted' },
      { href: '/docs', field: 'docs' },
      { href: '/academy', field: 'academy' },
      { href: '/faq', field: 'faq' },
      { href: '/support', field: 'support' },
    ],
  },
  {
    titleField: 'community',
    links: [
      { href: 'https://github.com/wolfbot-io/wolfbot-community', field: 'github' },
      { href: 'https://github.com/wolfbot-io/wolfbot-community/discussions', field: 'discussions' },
      { href: 'https://github.com/wolfbot-io/wolfbot-community/issues', field: 'issues' },
      { href: 'https://github.com/orgs/wolfbot-io/projects/1', field: 'roadmap' },
    ],
  },
  {
    titleField: 'wolfbot',
    links: [
      { href: 'https://wolfbot.io', field: 'wolfbotCloud' },
      { href: 'https://wolfbot.io', field: 'wolfbotDotIo' },
      { href: 'https://wolfbot.io/methodology', field: 'methodology' },
      { href: '/about', field: 'about' },
      { href: '/security', field: 'security' },
    ],
  },
] as const

const CONTACT_EMAIL = 'community@wolfbot.io'

export function Footer() {
  const pathname = usePathname()
  const locale = localeForSlug((pathname ?? '/').split('#')[0].split('?')[0].slice(1))
  const t = chromeFor(locale ? locale.urlSegment : null)

  return (
    <footer className="border-t mt-24" style={{ background: '#060A14', borderColor: 'rgba(255,255,255,0.06)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.titleField}>
              <h3 className="text-xs font-semibold text-wolf-text3 tracking-wider uppercase mb-4">{t[section.titleField]}</h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.field}>
                    {link.href.startsWith('http') ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-wolf-text3 hover:text-wolf-text2 transition-colors">{t[link.field]}</a>
                    ) : (
                      <Link href={localizeHref(link.href, locale?.urlSegment ?? null)} className="text-sm text-wolf-text3 hover:text-wolf-text2 transition-colors">{t[link.field]}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact — rightmost column, same pattern as wolfbot.io's footer */}
          <div>
            <h3 className="text-xs font-semibold text-wolf-text3 tracking-wider uppercase mb-4">{t.contact}</h3>
            <p className="text-sm text-wolf-text3 mb-2">{t.contactIntro}</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm text-wolf-accent hover:underline break-all">
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
          </div>
        </div>
        <div className="mt-6 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
          <p className="text-sm text-wolf-text3">WolfBot Community — <span className="text-wolf-accent">{t.tagline}</span> · by <a href="https://wolfbot.io" className="text-wolf-accent hover:underline">WolfBot.io</a></p>
          <p className="text-xs text-wolf-text3">{t.footerMeta}</p>
        </div>
      </div>
    </footer>
  )
}
