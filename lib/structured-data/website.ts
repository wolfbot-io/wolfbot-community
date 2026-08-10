/** Structured data for the website homepage (Schema.org WebSite) */
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'WolfBot Community',
  alternateName: ['WolfBot Community by WolfBot.io'],
  url: 'https://community.wolfbot.io',
  description: 'Free self-hosted trading automation for Windows & Linux.',
  inLanguage: 'en',
  publisher: {
    '@type': 'Organization',
    name: 'WolfBot.io',
    url: 'https://wolfbot.io',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://community.wolfbot.io/docs/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}
