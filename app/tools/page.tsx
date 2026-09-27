import type { Metadata } from 'next'
import { listContent } from '@/lib/content'
import { isLocalizedSlug } from '@/lib/locales'
import { TrackedLink } from '@/components/analytics/TrackedLink'

export const metadata: Metadata = {
  title: 'Free Realtime Translate Tools — Break the Language Barrier | WolfBot',
  description:
    'Free, private, local AI translation tools from WolfBot Community: realtime speech, text, documents and two-way conversation in 52 languages. No cloud, no account.',
  alternates: { canonical: 'https://community.wolfbot.io/tools' },
}

// Dark theme per prototypes/figma-make design language (same as /academy).
// Cards are built from content/tools/*.md, so a new tool page appears here
// automatically once its markdown file exists.
export default function ToolsPage() {
  const pages = listContent()
    .filter((p) => p.meta?.category === 'tools' && !isLocalizedSlug(p.slug))
    .sort((a, b) => {
      // Realtime meeting / livestream translation leads; text tools follow.
      const ORDER = [
        'tools/live-translate',
        'tools/meeting-translator',
        'tools/livestream-translator',
      ]
      const ia = ORDER.indexOf(a.slug)
      const ib = ORDER.indexOf(b.slug)
      if (ia !== -1 || ib !== -1) return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib)
      return (a.meta.title ?? '').localeCompare(b.meta.title ?? '')
    })

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-white text-center mb-4">Free Realtime Translate Tools</h1>
      <p className="text-center mb-12 max-w-2xl mx-auto" style={{ color: '#94A3B8' }}>
        Break the language barrier — free, private and local. Follow Teams, Google Meet and Zoom
        meetings and YouTube, TikTok and other livestreams in your own language: if it plays audio in
        your browser, it can be translated in real time. No account, and nothing leaves your machine.
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        {pages.map((p) => (
          <TrackedLink
            key={p.slug}
            href={`/${p.slug}`}
            eventName="tools_hub_card_click"
            eventParams={{ slug: p.slug }}
            className="rounded-xl p-5 border card-hover"
            style={{ background: '#0F172A', borderColor: 'rgba(255,255,255,0.07)' }}
          >
            <h2 className="text-white font-medium mb-1 text-sm">{p.meta.title}</h2>
            <p className="text-xs line-clamp-3" style={{ color: '#94A3B8' }}>{p.meta.description}</p>
          </TrackedLink>
        ))}
      </div>

      <p className="text-center mt-12 text-sm" style={{ color: '#94A3B8' }}>
        All tools ship inside{' '}
        <a href="/download" className="underline text-white">WolfBot Community</a> — the free,
        self-hosted trading platform. No trading account is needed to use them.
      </p>
    </div>
  )
}
