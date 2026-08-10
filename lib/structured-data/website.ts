export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'WolfBot Community',
  alternateName: ['WolfBot Community by WolfBot.io', 'WolfBot — One Platform. Every Market.'],
  url: 'https://community.wolfbot.io',
  description: 'Free self-hosted unified trading platform for Windows and Linux, bringing crypto exchanges, futures and MT5 markets into one interface for automated trading, smart execution, portfolio monitoring and risk management.',
  inLanguage: 'en',
  publisher: { '@type': 'Organization', name: 'WolfBot.io', url: 'https://wolfbot.io' },
  potentialAction: { '@type': 'SearchAction', target: { '@type': 'EntryPoint', urlTemplate: 'https://community.wolfbot.io/docs/search?q={search_term_string}' }, 'query-input': 'required name=search_term_string' },
}
