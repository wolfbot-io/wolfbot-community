import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About WolfBot Community — Who Builds It & Where to Get the Official Release',
  description: 'WolfBot Community by WolfBot.io — the official free self-hosted trading platform for Windows and Linux. Who we are, how to verify the official download, and how to tell real WolfBot releases from unrelated projects.',
  alternates: { canonical: 'https://community.wolfbot.io/about' },
}

const FACTS = [
  {
    title: 'The official source',
    body: 'WolfBot Community is the free, self-hosted edition of WolfBot, built and published by WolfBot.io. The only official distribution points are this site (community.wolfbot.io) and the official GitHub repository (github.com/wolfbot-io/wolfbot-community).',
  },
  {
    title: 'Free and self-hosted',
    body: 'One platform connecting crypto, futures, MT5 markets and TradingView webhooks — built for Windows and Linux self-hosting. You hold your keys, your infrastructure and your data.',
  },
  {
    title: 'Signed releases',
    body: 'Official releases are cryptographically signed, and every download page lists a checksum so you can verify what you install. If a file came from anywhere that is not the official GitHub or this site, treat it as unverified.',
  },
  {
    title: 'A clear name',
    body: 'There are unrelated projects online that use the name "WolfBot". To avoid confusion, this project is consistently referred to as WolfBot Community by WolfBot.io, published to community.wolfbot.io and the wolfbot-io GitHub organization.',
  },
]

// Dark theme per prototypes/figma-make design language.
export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-white text-center mb-4">About WolfBot Community</h1>
      <p className="text-center mb-12 max-w-lg mx-auto" style={{ color: '#94A3B8' }}>
        The free, self-hosted WolfBot edition by WolfBot.io. One platform. Every market.
      </p>

      <div className="grid gap-6">
        {FACTS.map((f) => (
          <div key={f.title} className="rounded-xl p-6 border" style={{ background: '#0F172A', borderColor: 'rgba(255,255,255,0.07)' }}>
            <h2 className="text-lg font-bold text-white mb-2">{f.title}</h2>
            <p className="text-sm leading-relaxed" style={{ color: '#94A3B8' }}>{f.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
        <a
          href="https://github.com/wolfbot-io/wolfbot-community"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl p-5 border card-hover text-center"
          style={{ background: '#0F172A', borderColor: 'rgba(255,255,255,0.07)' }}
        >
          <span className="block text-white font-semibold">Official GitHub</span>
          <span className="block text-sm mt-1" style={{ color: '#00C9E8' }}>github.com/wolfbot-io/wolfbot-community</span>
        </a>
        <Link
          href="/download"
          className="rounded-xl p-5 border card-hover text-center"
          style={{ background: 'rgba(0,201,232,0.06)', borderColor: 'rgba(0,201,232,0.28)' }}
        >
          <span className="block text-white font-semibold">Official Download</span>
          <span className="block text-sm mt-1" style={{ color: '#00C9E8' }}>community.wolfbot.io/download</span>
        </Link>
      </div>
    </div>
  )
}
