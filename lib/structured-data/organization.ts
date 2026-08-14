/**
 * Standalone Organization structured data (PLAN §48 Organization connection).
 *
 * The Organization was previously only embedded as a nested `publisher` /
 * `author` object inside the WebSite and SoftwareApplication schemas. A
 * top-level Organization node makes the WolfBot.io entity explicit and
 * consistent across the whole site: same name, same logo, same canonical
 * `sameAs` links (GitHub org + main site). This strengthens entity
 * consistency for Google's Knowledge Graph and AI search.
 */
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'WolfBot.io',
  url: 'https://wolfbot.io',
  logo: { '@type': 'ImageObject', url: 'https://community.wolfbot.io/wolfbot-logo.png' },
  sameAs: [
    'https://github.com/wolfbot-io',
    'https://wolfbot.io',
  ],
  description:
    'WolfBot.io is the maker of WolfBot, a unified trading platform that connects crypto exchanges and MT5 brokers (Forex, Gold, Indices) in one interface, one risk engine, and one portfolio. WolfBot Community is the free, self-hosted edition.',
}
