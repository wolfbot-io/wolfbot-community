'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

interface SearchItem {
  title: string
  description: string
  slug: string
  keywords: string[]
}

const CONTENT_INDEX: SearchItem[] = [
  { title: 'Install on Windows', description: 'Install WolfBot Community on Windows 10/11', slug: 'install/windows', keywords: ['windows', 'setup.exe', 'install'] },
  { title: 'Install on Linux', description: 'Install WolfBot Community on Ubuntu/Debian', slug: 'install/linux', keywords: ['linux', 'ubuntu', 'debian', '.deb', 'install'] },
  { title: 'Getting Started', description: 'First steps after installing WolfBot Community', slug: 'getting-started', keywords: ['getting started', 'tutorial', 'setup wizard', 'first run'] },
  { title: 'Simulation Guide', description: 'Paper-trade across markets without risking funds', slug: 'docs/simulation', keywords: ['simulation', 'paper trading', 'demo', 'test'] },
  { title: 'Smart Terminal', description: 'Manual trading interface with risk controls', slug: 'docs/smart-terminal', keywords: ['smart terminal', 'manual trading', 'order', 'position'] },
  { title: 'Risk Controls', description: 'Position limits, drawdown guards, cooldowns', slug: 'docs/risk-controls', keywords: ['risk', 'controls', 'stop loss', 'position size', 'drawdown'] },
  { title: 'Updates Guide', description: 'How WolfBot Community updates work', slug: 'docs/updates', keywords: ['update', 'channel', 'stable', 'beta', 'dev preview'] },
  { title: 'Backup & Restore', description: 'Protect your configuration and data', slug: 'docs/backup', keywords: ['backup', 'restore', 'snapshot', 'migrate'] },
  { title: 'Troubleshooting', description: 'Fix common WolfBot Community issues', slug: 'docs/troubleshooting', keywords: ['troubleshoot', 'error', 'fix', 'problem'] },
  { title: 'Self-Hosted Explained', description: 'Benefits of running WolfBot on your machine', slug: 'docs/self-hosted-explained', keywords: ['self hosted', 'privacy', 'control'] },
  { title: 'Community Status', description: 'Platform availability and known issues', slug: 'docs/community-status', keywords: ['status', 'uptime', 'incident'] },
  { title: 'Connect Bybit', description: 'Connect Bybit to WolfBot Community', slug: 'brokers/bybit', keywords: ['bybit', 'api key', 'connect'] },
  { title: 'Connect Binance', description: 'Connect Binance to WolfBot Community', slug: 'brokers/binance', keywords: ['binance', 'api key', 'connect'] },
  { title: 'Connect BingX', description: 'Connect BingX to WolfBot Community', slug: 'brokers/bingx', keywords: ['bingx', 'api key', 'connect'] },
  { title: 'Connect KuCoin', description: 'Connect KuCoin to WolfBot Community', slug: 'brokers/kucoin', keywords: ['kucoin', 'api key', 'passphrase', 'connect'] },
  { title: 'Connect Bitget', description: 'Connect Bitget to WolfBot Community', slug: 'brokers/bitget', keywords: ['bitget', 'api key', 'connect'] },
  { title: 'Connect MT5', description: 'Connect MetaTrader 5 to WolfBot Community', slug: 'brokers/mt5', keywords: ['mt5', 'metatrader', 'forex', 'gold', 'bridge'] },
  { title: 'API Key Guide', description: 'Create secure trade-only API keys', slug: 'brokers/api-key-guide', keywords: ['api key', 'security', 'trade only', 'permissions'] },
  { title: 'Community vs Cloud', description: 'Compare Community and Cloud editions', slug: 'community-vs-cloud', keywords: ['community', 'cloud', 'comparison', 'free vs paid'] },
  { title: 'Release Channels', description: 'Understand Stable, Beta, Dev Preview channels', slug: 'releases/channels', keywords: ['release', 'channel', 'stable', 'beta'] },
  { title: 'FAQ', description: 'Frequently asked questions', slug: 'faq', keywords: ['faq', 'questions', 'help'] },
]

export function SearchBar() {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)

  const results = useMemo(() => {
    if (!query.trim()) return []
    const q = query.toLowerCase()
    return CONTENT_INDEX.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.keywords.some((k) => k.includes(q))
    ).slice(0, 8)
  }, [query])

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-wolf-text3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        <input
          type="text"
          placeholder="Search docs..."
          value={query}
          onChange={(e) => { setQuery(e.target.value); setOpen(true) }}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 200)}
          className="w-full pl-10 pr-4 py-2 bg-wolf-surface border border-wolf-border rounded-xl text-sm text-wolf-text placeholder-wolf-text3 focus:outline-none focus:border-wolf-accent/55 focus:ring-1 focus:ring-wolf-accent/30 transition-colors"
        />
      </div>
      {open && results.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-wolf-card border border-wolf-border2 rounded-xl shadow-2xl overflow-hidden z-50">
          {results.map((item) => (
            <Link
              key={item.slug}
              href={`/${item.slug}`}
              className="block px-4 py-3 hover:bg-white/5 transition-colors border-b border-wolf-border last:border-0"
            >
              <div className="text-sm font-medium text-wolf-text">{item.title}</div>
              <div className="text-xs text-wolf-text2 mt-0.5">{item.description}</div>
            </Link>
          ))}
        </div>
      )}
      {open && query && results.length === 0 && (
        <div className="absolute top-full mt-2 w-full bg-wolf-card border border-wolf-border2 rounded-xl shadow-2xl p-4 text-sm text-wolf-text2 z-50">
          No results found for &ldquo;{query}&rdquo;
        </div>
      )}
    </div>
  )
}
