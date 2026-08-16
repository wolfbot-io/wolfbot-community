import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import {
  loadContent,
  listContent,
  slugToBreadcrumbs,
  toEnglishSlug,
  toLocaleSlug,
} from '@/lib/content'
import { LOCALES, localeForSlug } from '@/lib/locales'
import { HOME_COPY } from '@/lib/home-page'
import { LocalizedHomePage } from '@/components/landing/LocalizedHomePage'
import { ContentRenderer } from '@/components/docs/ContentRenderer'
import { StructuredData } from '@/components/seo/StructuredData'
import { FeedbackWidget } from '@/components/docs/FeedbackWidget'
import { breadcrumbSchema } from '@/lib/structured-data/breadcrumb'

interface Props {
  params: { slug: string[] }
}

function localeForRootSlug(slug: string[]): (typeof LOCALES)[number] | null {
  if (slug.length !== 1) return null
  return LOCALES.find((l) => l.urlSegment === slug[0]) ?? null
}

/** Generate static paths for all content pages + localized homepage roots. */
export function generateStaticParams() {
  const pages = listContent().map((p) => ({ slug: p.slug.split('/') }))
  const roots = LOCALES.map((l) => ({ slug: [l.urlSegment] }))
  return [...pages, ...roots]
}

/** Generate metadata from frontmatter (or localized-homepage defaults). */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const localeConf = localeForRootSlug(params.slug ?? [])
  if (localeConf) {
    const copy = HOME_COPY[localeConf.urlSegment]
    const title = copy?.metaTitle ?? 'WolfBot Community'
    const description = copy?.metaDescription ?? 'Free self-hosted unified trading platform for Windows and Linux. Connect crypto exchanges, futures and MT5 markets through one intelligent interface.'
    // Localized homepage root — advertise the full language cluster.
    const languages: Record<string, string> = {}
    for (const l of LOCALES) {
      languages[l.hreflang] = `https://community.wolfbot.io/${l.urlSegment}`
    }
    languages.en = 'https://community.wolfbot.io/'
    languages['x-default'] = 'https://community.wolfbot.io/'
    return {
      title,
      description,
      alternates: {
        canonical: `https://community.wolfbot.io/${localeConf.urlSegment}`,
        languages,
      },
      openGraph: {
        title,
        description,
        type: 'website',
        url: `https://community.wolfbot.io/${localeConf.urlSegment}`,
        locale: localeConf.ogLocale,
        images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'WolfBot Community' }],
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
      },
    }
  }

  const slug = (params.slug ?? []).join('/')
  const page = await loadContent(slug)
  if (!page) return {}

  const { meta } = page
  const locale = localeForSlug(slug)
  const canonical = `https://community.wolfbot.io/${slug}`
  const englishSlug = toEnglishSlug(slug)

  // §91 Multilingual — hreflang alternates so Google treats /docs/x,
  // /vi/docs/x, /zh/docs/x, etc. as one page localized, instead of
  // duplicate content. Every variant (English and localized) advertises
  // the full reciprocal set of languages that actually have a translated
  // file, plus x-default — so Google sees one complete language cluster
  // from any page, never a dangling alternate.
  const languages: Record<string, string> = {
    en: `https://community.wolfbot.io/${englishSlug}`,
  }
  for (const l of LOCALES) {
    const localizedSlug = toLocaleSlug(englishSlug, l.urlSegment)
    const translated = await loadContent(localizedSlug)
    if (translated) languages[l.hreflang] = `https://community.wolfbot.io/${localizedSlug}`
  }
  languages['x-default'] = `https://community.wolfbot.io/${englishSlug}`

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
      locale: locale ? locale.ogLocale : 'en_US',
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
  const slugParts = params.slug ?? []

  // Localized homepage root: `/vi`, `/de`, `/pt-br`, ...
  const localeConf = localeForRootSlug(slugParts)
  if (localeConf) {
    return (
      <>
        <script dangerouslySetInnerHTML={{ __html: `document.documentElement.lang = '${localeConf.htmlLang}';` }} />
        <LocalizedHomePage locale={localeConf.urlSegment} />
      </>
    )
  }

  const slug = slugParts.join('/')
  const page = await loadContent(slug)

  if (!page) notFound()

  const locale = localeForSlug(slug)
  const breadcrumbs = slugToBreadcrumbs(slug)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <StructuredData data={breadcrumbSchema(breadcrumbs)} />

      {/* The shared root <html> is static ("en"); correct it per page for
          localized content so assistive tech and rendered-DOM crawlers see
          the right language. hreflang tags above remain the authoritative
          signal for search engines either way. */}
      {locale && (
        <script dangerouslySetInnerHTML={{ __html: `document.documentElement.lang = '${locale.htmlLang}';` }} />
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
            {locale ? locale.ui.testedWith : 'Tested with WolfBot Community v'}
            {page.meta.tested_version}
          </strong>
          {' · '}
          {locale ? locale.ui.lastUpdated : 'Last updated'}: {page.meta.last_updated}
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
              {locale ? locale.ui.nextStep : 'Next step'}
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
