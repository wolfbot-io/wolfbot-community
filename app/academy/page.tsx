import type { Metadata } from 'next'
import Link from 'next/link'
import { listContent } from '@/lib/content'
import { isLocalizedSlug } from '@/lib/locales'
import { DocsSearch } from '@/components/search/DocsSearch'

export const metadata: Metadata = {
  title: 'WolfBot Community Academy — Tutorials & Guides',
  description: 'WolfBot Community tutorials and guides — installation, broker setup, simulation, risk controls and more, all tested against a specific release.',
  alternates: { canonical: 'https://community.wolfbot.io/academy' },
}

const SECTIONS: { title: string; categories: string[] }[] = [
  { title: 'Getting Started', categories: ['getting-started', 'install'] },
  { title: 'Broker Setup', categories: ['broker-setup'] },
  { title: 'Using WolfBot', categories: ['simulation', 'smart-terminal', 'risk-controls', 'automation', 'backup', 'updates'] },
  { title: 'Reference', categories: ['release', 'status', 'troubleshooting', 'faq', 'security'] },
]

// Dark theme per prototypes/figma-make design language.
export default function AcademyPage() {
  const pages = listContent().filter((p) => p.meta?.title && !isLocalizedSlug(p.slug))

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-white text-center mb-4">Academy</h1>
      <p className="text-center mb-12 max-w-lg mx-auto" style={{ color: '#94A3B8' }}>
        Every guide below is tested against a specific WolfBot Community
        release — check the &quot;Tested with&quot; line on each page.
      </p>

      <DocsSearch />

      {SECTIONS.map((section) => {
        const items = pages.filter((p) => section.categories.includes(p.meta.category))
        if (items.length === 0) return null
        return (
          <div key={section.title} className="mb-12">
            <h2 className="text-lg font-semibold text-white mb-4 border-b pb-2" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
              {section.title}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {items.map((p) => (
                <Link
                  key={p.slug}
                  href={`/${p.slug}`}
                  className="rounded-xl p-5 border card-hover"
                  style={{ background: '#0F172A', borderColor: 'rgba(255,255,255,0.07)' }}
                >
                  <h3 className="text-white font-medium mb-1 text-sm">{p.meta.title}</h3>
                  <p className="text-xs line-clamp-2" style={{ color: '#94A3B8' }}>{p.meta.description}</p>
                </Link>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
