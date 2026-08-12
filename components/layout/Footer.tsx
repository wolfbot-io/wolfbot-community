import Link from 'next/link'

// Visual language ported from prototypes/figma-make/src/landing/LandingChrome.tsx
// (Footer) — dark bg, uppercase muted column headings, wolf-text3 → wolf-text2
// hover links. Content stays Community-specific (real links/columns already
// verified this session), only the styling is ported.
const FOOTER_SECTIONS = [
  { title: 'PRODUCT', links: [{ href: '/download', label: 'Download' },{ href: '/brokers', label: 'Markets' },{ href: '/features', label: 'Features' },{ href: '/releases', label: 'Releases' }] },
  { title: 'LEARN', links: [{ href: '/getting-started', label: 'Getting Started' },{ href: '/docs', label: 'Docs' },{ href: '/academy', label: 'Academy' },{ href: '/faq', label: 'FAQ' }] },
  { title: 'COMMUNITY', links: [{ href: 'https://github.com/wolfbot-io/wolfbot-community', label: 'GitHub' },{ href: 'https://github.com/wolfbot-io/wolfbot-community/discussions', label: 'Discussions' },{ href: 'https://github.com/wolfbot-io/wolfbot-community/issues', label: 'Issues' },{ href: 'https://github.com/orgs/wolfbot-io/projects/1', label: 'Roadmap' }] },
  { title: 'WOLFBOT', links: [{ href: 'https://wolfbot.io', label: 'WolfBot Cloud' },{ href: 'https://wolfbot.io', label: 'WolfBot.io' },{ href: 'https://wolfbot.io/methodology', label: 'Methodology' },{ href: '/security', label: 'Security' }] },
]

const CONTACT_EMAIL = 'community@wolfbot.io'

export function Footer() {
  return (
    <footer className="border-t mt-24" style={{ background: '#060A14', borderColor: 'rgba(255,255,255,0.06)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-semibold text-wolf-text3 tracking-wider uppercase mb-4">{section.title}</h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('http') ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-wolf-text3 hover:text-wolf-text2 transition-colors">{link.label}</a>
                    ) : (
                      <Link href={link.href} className="text-sm text-wolf-text3 hover:text-wolf-text2 transition-colors">{link.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact — rightmost column, same pattern as wolfbot.io's footer */}
          <div>
            <h3 className="text-xs font-semibold text-wolf-text3 tracking-wider uppercase mb-4">Contact</h3>
            <p className="text-sm text-wolf-text3 mb-2">For any inquiries, please send to:</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm text-wolf-accent hover:underline break-all">
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
          <p className="text-sm text-wolf-text3">WolfBot Community — <span className="text-wolf-accent">One Platform. Every Market.</span> · by <a href="https://wolfbot.io" className="text-wolf-accent hover:underline">WolfBot.io</a></p>
          <p className="text-xs text-wolf-text3">Free · Self-Hosted · Crypto + Futures + MT5</p>
        </div>
      </div>
    </footer>
  )
}
