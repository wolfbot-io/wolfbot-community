/**
 * Structured data for /tools/* pages: FAQPage built from the page's own
 * "Frequently asked questions" section (so markup can never drift from the
 * visible text) and a free SoftwareApplication node for the tool.
 * No ratings/reviews are ever emitted.
 */

/** Parse "**Question?**\nAnswer..." pairs from the FAQ section of a page body. */
export function faqFromMarkdown(body: string): { question: string; answer: string }[] {
  const m = body.match(/^##\s+(?:Frequently asked questions|Câu hỏi thường gặp)\s*$([\s\S]*?)(?=^##\s|(?![\s\S]))/im)
  if (!m) return []
  const out: { question: string; answer: string }[] = []
  const blocks = m[1].split(/\n\s*\n/)
  for (const b of blocks) {
    const q = b.match(/^\*\*(.+?)\*\*\s*\n([\s\S]+)$/)
    if (q) out.push({ question: q[1].trim(), answer: q[2].replace(/\s+/g, ' ').trim() })
  }
  return out
}

export function toolFaqSchema(body: string) {
  const faqs = faqFromMarkdown(body)
  if (faqs.length === 0) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }
}

export function toolAppSchema(opts: { name: string; description: string; url: string; inLanguage: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: opts.name,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Linux',
    description: opts.description,
    url: opts.url,
    inLanguage: opts.inLanguage,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    isPartOf: { '@type': 'SoftwareApplication', name: 'WolfBot Community', url: 'https://community.wolfbot.io' },
    author: { '@type': 'Organization', name: 'WolfBot.io', url: 'https://wolfbot.io' },
    downloadUrl: 'https://community.wolfbot.io/download',
  }
}
