import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'WolfBot Community Features — Unified Trading Platform',
  description: 'What WolfBot Community includes: unified crypto + MT5 trading, smart execution, risk controls, simulation, automation, and self-hosted infrastructure — all free.',
  alternates: { canonical: 'https://community.wolfbot.io/features' },
}

const FEATURES: { icon: string; title: string; desc: string; href?: string }[] = [
  {
    icon: '🌐',
    title: 'Unified Markets',
    desc: 'Crypto exchanges and MT5 in one platform — trade Binance, Bybit, BingX, KuCoin, Bitget and MT5 (forex, gold, indices) without switching tools.',
    href: '/brokers',
  },
  {
    icon: '🖥️',
    title: 'One Interface',
    desc: 'Accounts, positions and orders across every connected market show up in a single dashboard, not one screen per broker.',
  },
  {
    icon: '🎯',
    title: 'Smart Execution',
    desc: 'Unified order routing handles tick/step-size adjustment, partial fills and stale-quote guards consistently across markets.',
    href: '/docs/smart-terminal',
  },
  {
    icon: '🛡️',
    title: 'Unified Risk',
    desc: 'Position limits and drawdown guards apply across every connected account, not per-broker in isolation.',
    href: '/docs/risk-controls',
  },
  {
    icon: '📊',
    title: 'One Portfolio',
    desc: 'A single portfolio view aggregates exposure and P&L over every connected market.',
  },
  {
    icon: '🤖',
    title: 'Automation',
    desc: 'Run multi-strategy bots, wire in TradingView signals, and chain pipelines without hand-managing each order.',
  },
  {
    icon: '🧪',
    title: 'Simulation',
    desc: 'Paper-trade against real market data across crypto and MT5 markets before risking real funds.',
    href: '/docs/simulation',
  },
  {
    icon: '💻',
    title: 'Smart Terminal',
    desc: 'Manual trading with the same risk-aware execution guards the automated strategies use.',
    href: '/docs/smart-terminal',
  },
  {
    icon: '🔄',
    title: 'Auto Updates',
    desc: 'Stay current with signed, checkpoint-based channel updates — rollback if an update fails.',
    href: '/docs/updates',
  },
  {
    icon: '💾',
    title: 'Backup & Restore',
    desc: 'Snapshot-based backup and recovery for your configuration and local data.',
    href: '/docs/backup',
  },
]

// Dark theme per prototypes/figma-make design language.
export default function FeaturesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-white text-center mb-4">Features</h1>
      <p className="text-center mb-12 max-w-lg mx-auto" style={{ color: '#94A3B8' }}>
        Everything WolfBot Community includes — self-hosted, free, no Cloud
        subscription required.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {FEATURES.map((f) => {
          const card = (
            <div className="rounded-xl p-6 h-full border card-hover" style={{ background: '#0F172A', borderColor: 'rgba(255,255,255,0.07)' }}>
              <div className="text-2xl mb-3">{f.icon}</div>
              <h2 className="text-white font-semibold mb-2">{f.title}</h2>
              <p className="text-sm" style={{ color: '#94A3B8' }}>{f.desc}</p>
            </div>
          )
          return f.href ? (
            <Link key={f.title} href={f.href}>{card}</Link>
          ) : (
            <div key={f.title}>{card}</div>
          )
        })}
      </div>
      <div className="text-center mt-12">
        <Link href="/download" className="hover:underline text-sm" style={{ color: '#00C9E8' }}>
          Download WolfBot Community →
        </Link>
      </div>
    </div>
  )
}
