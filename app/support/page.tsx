import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'WolfBot Community Support — Discussions, Issues and Contact',
  description: 'Where to get help with WolfBot Community: GitHub Discussions for questions and ideas, GitHub Issues for bugs, and direct email under the Plan for self-hosted users.',
  alternates: { canonical: 'https://community.wolfbot.io/support' },
}

const CHANNELS = [
  {
    title: 'GitHub Discussions',
    desc: 'Ask questions, share ideas and show what you built. The best place for "how do I..." and feature ideas.',
    href: 'https://github.com/wolfbot-io/wolfbot-community/discussions',
    cta: 'Open Discussions',
  },
  {
    title: 'GitHub Issues',
    desc: 'Report a bug or a problem with a release. Include your version and the exact error text so we can fix it in one pass.',
    href: 'https://github.com/wolfbot-io/wolfbot-community/issues',
    cta: 'Report an issue',
  },
  {
    title: 'Direct email',
    desc: 'For private or install-specific problems, reach the maintainers directly.',
    href: 'mailto:community@wolfbot.io',
    cta: 'community@wolfbot.io',
  },
]

// Dark theme per prototypes/figma-make design language.
export default function SupportPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-white text-center mb-4">Support</h1>
      <p className="text-center mb-12 max-w-lg mx-auto" style={{ color: '#94A3B8' }}>
        WolfBot Community is free and self-hosted — help comes from the community and the maintainers directly.
      </p>

      <div className="grid gap-6">
        {CHANNELS.map((c) => (
          <a
            key={c.title}
            href={c.href}
            target={c.href.startsWith('http') ? '_blank' : undefined}
            rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="rounded-xl p-6 border card-hover"
            style={{ background: '#0F172A', borderColor: 'rgba(255,255,255,0.07)' }}
          >
            <h2 className="text-lg font-bold text-white mb-1">{c.title}</h2>
            <p className="text-sm mb-3" style={{ color: '#94A3B8' }}>{c.desc}</p>
            <span className="text-sm font-semibold" style={{ color: '#00C9E8' }}>{c.cta} →</span>
          </a>
        ))}
      </div>

      <p className="text-sm mt-12 text-center" style={{ color: '#94A3B8' }}>
        Before you post, check the{' '}
        <a className="hover:underline" style={{ color: '#00C9E8' }} href="/docs/troubleshooting">troubleshooting guide</a> — most
        install and connection problems have a documented fix with the exact logs to read.
      </p>
    </div>
  )
}
