interface ResearchArticleInput {
  title: string
  description: string
  url: string
  dateModified: string
  inLanguage: string
  citations: string[]
}

export function researchArticleSchema(input: ResearchArticleInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: input.title,
    description: input.description,
    url: input.url,
    mainEntityOfPage: input.url,
    dateModified: input.dateModified,
    inLanguage: input.inLanguage,
    author: {
      '@type': 'Organization',
      name: 'WolfBot.io',
      url: 'https://wolfbot.io',
    },
    publisher: {
      '@type': 'Organization',
      name: 'WolfBot.io',
      url: 'https://wolfbot.io',
    },
    citation: input.citations,
    about: ['Artificial intelligence', 'Algorithmic trading', 'Quantitative finance'],
  }
}
