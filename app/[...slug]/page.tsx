import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import {
  loadContent,
  listContent,
  slugToBreadcrumbs,
  toEnglishSlug,
  toViSlug,
} from '@/lib/content'
import { ContentRenderer } from '@/components/docs/ContentRenderer'
import { StructuredData } from '@/components/seo/StructuredData'
import { FeedbackWidget } from '@/components/docs/FeedbackWidget'
import { breadcrumbSchema } from '@/lib/structured-data/breadcrumb'

interface Props {
  params: { slug: string[] }
}

/** Generate static paths for all content pages */
export function generateStaticParams() {
  const pages = listContent()
  return pages.map((p) => ({ slug: p.slug.split('/') }))
}

/** Generate metadata from frontmatter */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (params.slug ?? []).join('/')
  const page = await loadContent(slug)
  if (!page) return {}

  const { meta } = page
  const isVi = meta.lang === 'vi'
  const canonical = `https://community.wolfbot.io/${slug}`

  // §91 Multilingual — hreflang alternates so Google treats /docs/x and
  // /vi/docs/x as one page localized, instead of duplicate content.
  const languages: Record<string, string> = {}
  if (isVi) {
    languages['en'] = `https://community.wolfbot.io/${toEnglishSlug(slug)}`
    languages['vi'] = canonical
  } else {
    const viPage = await loadContent(toViSlug(slug))
    languages['en'] = canonical
    if (viPage) languages['vi'] = `https://community.wolfbot.io/${toViSlug(slug)}`
  }
  languages['x-default'] = `https://community.wolfbot.io/${toEnglishSlug(slug)}`

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords?.join(', '),
    alternates: { canonical, languages },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: 'article',
      url: canonical,
      locale: isVi ? 'vi_VN' : 'en_US',
      modifiedTime: meta.last_updated,
      images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: meta.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
    },
    robots: meta.sitemap_priority === 0 ? { index: false } : undefined,
  }
}

export default async function ContentPage({ params }: Props) {
  const slug = (params.slug ?? []).join('/')
  const page = await loadContent(slug)

  if (!page) notFound()

  const isVi = page.meta.lang === 'vi'
  const breadcrumbs = slugToBreadcrumbs(slug)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <StructuredData data={breadcrumbSchema(breadcrumbs)} />

      {/* The shared root <html> is static ("en"); correct it per page for
          Vietnamese so assistive tech and rendered-DOM crawlers see the right
          language. hreflang tags above remain the authoritative signal. */}
      {isVi && (
        <script dangerouslySetInnerHTML={{ __html: `document.documentElement.lang = 'vi';` }} />
      )}

      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-wolf-text2 mb-8">
        {breadcrumbs.map((crumb, i) => (
          <span key={crumb.href} className="flex items-center gap-2">
            {i > 0 && <span className="text-wolf-text2">/</span>}
            {i < breadcrumbs.length - 1 ? (
              <a href={crumb.href} className="hover:text-white transition-colors">
                {crumb.label}
              </a>
            ) : (
              <span className="text-wolf-text">{crumb.label}</span>
            )}
          </span>
        ))}
      </nav>

      {/* Frontmatter banner */}
      <div className="prose-content">
        <div className="frontmatter-banner">
          <strong>
            {isVi ? 'Đã kiểm thử với WolfBot Community v' : 'Tested with WolfBot Community v'}
            {page.meta.tested_version}
          </strong>
          {' · '}
          {isVi ? 'Cập nhật lần cuối' : 'Last updated'}: {page.meta.last_updated}
          {page.meta.os_tested && <> · {page.meta.os_tested.join(' / ')}</>}
          {page.meta.estimated_time && <> · ⏱️ {page.meta.estimated_time}</>}
          {page.meta.difficulty && <> · {page.meta.difficulty}</>}
        </div>

        {/* Rendered content */}
        <ContentRenderer body={page.body} />

        {/* Next guide CTA */}
        {page.meta.next_guide && (
          <div className="next-guide">
            <span className="text-xs font-semibold text-wolf-accent uppercase tracking-wide">
              {isVi ? 'Bước tiếp theo' : 'Next step'}
            </span>
            <div className="mt-1">
              <a href={page.meta.next_guide} className="text-lg">
                {(() => {
                  const next = listContent().find((p) => p.slug === page.meta.next_guide?.replace(/^\//, ''))
                  return next?.meta.title ?? 'Continue →'
                })()}
              </a>
            </div>
          </div>
        )}

        {/* Feedback widget */}
        <FeedbackWidget slug={slug} />
      </div>
    </div>
  )
}
