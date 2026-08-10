import Link from 'next/link'

const FOOTER_SECTIONS = [
  { title: 'PRODUCT', links: [{ href: '/download', label: 'Download' },{ href: '/brokers', label: 'Markets' },{ href: '/features', label: 'Features' },{ href: '/releases', label: 'Releases' }] },
  { title: 'LEARN', links: [{ href: '/getting-started', label: 'Getting Started' },{ href: '/docs', label: 'Docs' },{ href: '/academy', label: 'Academy' },{ href: '/faq', label: 'FAQ' }] },
  { title: 'COMMUNITY', links: [{ href: 'https://github.com/wolfbot-io/wolfbot-community', label: 'GitHub' },{ href: 'https://github.com/wolfbot-io/wolfbot-community/discussions', label: 'Discussions' },{ href: 'https://github.com/wolfbot-io/wolfbot-community/issues', label: 'Issues' },{ href: 'https://github.com/orgs/wolfbot-io/projects/1', label: 'Roadmap' }] },
  { title: 'WOLFBOT', links: [{ href: 'https://wolfbot.io', label: 'WolfBot Cloud' },{ href: 'https://wolfbot.io', label: 'WolfBot.io' },{ href: 'https://wolfbot.io/methodology', label: 'Methodology' },{ href: '/security', label: 'Security' }] },
]

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-semibold text-zinc-500 tracking-wider uppercase mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('http') ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-white">{link.label}</a>
                    ) : (
                      <Link href={link.href} className="text-sm text-zinc-400 hover:text-white">{link.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500">WolfBot Community — <span className="text-blue-400">One Platform. Every Market.</span> · by <a href="https://wolfbot.io" className="text-blue-400 hover:underline">WolfBot.io</a></p>
          <p className="text-xs text-zinc-600">Free · Self-Hosted · Crypto + Futures + MT5</p>
        </div>
      </div>
    </footer>
  )
}
