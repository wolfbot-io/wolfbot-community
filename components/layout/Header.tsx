import Link from 'next/link'

const NAV_ITEMS = [
  { href: '/download', label: 'Download' },
  { href: '/getting-started', label: 'Getting Started' },
  { href: '/features', label: 'Features' },
  { href: '/brokers', label: 'Brokers' },
  { href: '/docs', label: 'Docs' },
  { href: '/releases', label: 'Releases' },
  { href: '/academy', label: 'Academy' },
  { href: '/security', label: 'Security' },
]

export function Header() {
  return (
    <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-lg">
            <span className="text-blue-500">🐺</span>
            <span className="text-white">WolfBot</span>
            <span className="text-zinc-500 font-normal text-sm">COMMUNITY</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm text-zinc-400 hover:text-white rounded-md hover:bg-zinc-800 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side: GitHub + Download CTA */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/wolfbot-io/wolfbot-community"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex text-sm text-zinc-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://wolfbot.io"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex text-sm text-zinc-400 hover:text-white transition-colors"
            >
              WolfBot Cloud
            </a>
            <Link
              href="/download"
              className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              Download
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
