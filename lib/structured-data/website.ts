export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'WolfBot Community',
  alternateName: ['WolfBot Community by WolfBot.io', 'WolfBot — One Platform. Every Market.'],
  url: 'https://community.wolfbot.io',
  description: 'Free self-hosted Linux trading platform with Windows coming soon, bringing crypto exchanges, futures, MT5 markets and TradingView automation into one interface for smart execution, portfolio monitoring and risk management.',
  inLanguage: 'en',
  publisher: { '@type': 'Organization', name: 'WolfBot.io', url: 'https://wolfbot.io', sameAs: ['https://github.com/wolfbot-io'] },
  // No SearchAction here: Google's sitelinks searchbox requires the
  // urlTemplate to resolve. This site's docs search is client-side
  // (/docs/search.html does not exist in the static export), so advertising a
  // SearchAction pointing at /docs/search would send users to a 404 and read
  // as a schema error. Adding it once a real search URL exists (PLAN §15).
}
