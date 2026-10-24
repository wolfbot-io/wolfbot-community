/**
 * Single source of truth for WolfBot Community's broker roster.
 *
 * Before this file existed, the same 6-broker list (name/slug/status) was
 * hand-duplicated in `app/brokers/page.tsx` and
 * `components/landing/BrokerSection.tsx` -- exactly the kind of drift that
 * already caused a real, found-and-fixed bug this session (MT5's asset
 * class list was complete in some places and stale in others). Components
 * that render a *structured* broker list should import from here instead
 * of hand-rolling their own array. Free-form prose mentioning brokers
 * (FAQ answers, README paragraphs, individual `content/brokers/*.md`
 * guides) is deliberately NOT templated from this file -- turning natural
 * sentences into string interpolation is its own risk (see the "old" ->
 * paragraph-text corruption bug found in `content/brokers/mt5.md` earlier
 * this session), so those stay hand-written and are just expected to stay
 * roughly in sync by review, same as before.
 */

export type BrokerStatus = 'stable' | 'beta' | 'experimental'

export interface Broker {
  /** Display name, e.g. "Binance" */
  name: string
  /** URL slug under /brokers/<slug> */
  slug: string
  /** Support status -- all 6 are 'stable' as of v0.1.0-beta.10 */
  status: BrokerStatus
  /** Short market label for compact cards, e.g. "Crypto" or "Forex, Metals, Indices" */
  market: string
  /** Longer one-line description for the /brokers index page */
  desc: string
}

export const BROKERS: Broker[] = [
  { name: 'Binance', slug: 'binance', status: 'stable', market: 'Crypto', desc: 'Spot and Futures trading. Most liquid exchange.' },
  { name: 'Bybit', slug: 'bybit', status: 'stable', market: 'Crypto', desc: 'Spot, Futures, Demo. Excellent API stability.' },
  { name: 'BingX', slug: 'bingx', status: 'stable', market: 'Crypto', desc: 'Standard and Perpetual Futures supported.' },
  { name: 'KuCoin', slug: 'kucoin', status: 'stable', market: 'Crypto', desc: 'Wide altcoin selection. Passphrase required.' },
  { name: 'Bitget', slug: 'bitget', status: 'stable', market: 'Crypto', desc: 'Spot and Futures. Growing exchange.' },
  { name: 'MT5', slug: 'mt5', status: 'stable', market: 'Forex, Metals, Indices', desc: 'MetaTrader 5 bridge. Forex, Metals, Indices, Stocks/CFDs and more — whatever your broker offers. Windows and Linux.' },
]

export const STATUS_STYLE: Record<BrokerStatus, { color: string; background: string }> = {
  stable: { color: '#10B981', background: 'rgba(16,185,129,0.12)' },
  beta: { color: '#F59E0B', background: 'rgba(245,158,11,0.12)' },
  experimental: { color: '#F59E0B', background: 'rgba(245,158,11,0.12)' },
}

export function brokerHref(broker: Pick<Broker, 'slug'>): string {
  return `/brokers/${broker.slug}`
}

export type AccountGuideAvailability = 'supported' | 'release-dependent' | 'planned'

export interface BrokerAccountGuide {
  name: string
  slug: string
  signupHref: string
  availability: AccountGuideAvailability
  description: string
}

/**
 * Account-opening guides and WolfBot partner links. This list is deliberately
 * separate from BROKERS: an exchange may have a useful registration guide
 * before its direct Community connector is available.
 */
export const BROKER_ACCOUNT_GUIDES: BrokerAccountGuide[] = [
  {
    name: 'Binance',
    slug: 'binance',
    signupHref: 'https://www.binance.com/register?ref=WOLFBOT',
    availability: 'supported',
    description: 'Registration, identity verification, 2FA and a safe trade-only API setup path.',
  },
  {
    name: 'Bybit',
    slug: 'bybit',
    signupHref: 'https://partner.bybit.com/b/WOLFBOT',
    availability: 'supported',
    description: 'Create and secure an account, then validate the workflow in Demo before Live.',
  },
  {
    name: 'BingX',
    slug: 'bingx',
    signupHref: 'https://bingxdao.com/partner/Wolfbot/',
    availability: 'supported',
    description: 'Account registration, KYC, authenticator security and WolfBot connection prep.',
  },
  {
    name: 'KuCoin',
    slug: 'kucoin',
    signupHref: 'https://www.kucoin.com/r/broker/WOLFBOTIO',
    availability: 'supported',
    description: 'Set up KYC and 2FA, then keep the API key, secret and passphrase distinct.',
  },
  {
    name: 'Bitget',
    slug: 'bitget',
    signupHref: 'https://partner.bitget.com/bg/WOLFBOT',
    availability: 'supported',
    description: 'A complete registration, KYC, Google Authenticator and API passphrase guide.',
  },
  {
    name: 'OKX',
    slug: 'okx',
    signupHref: 'https://okx.com/join/WOLFBOT',
    availability: 'release-dependent',
    description: 'Open and secure an OKX account, then confirm support in your installed release.',
  },
  {
    name: 'Gate',
    slug: 'gate',
    signupHref: 'https://www.gate.com/referral/earn-together/invite/VgBGUVBd?ref=VgBGUVBd&ref_type=103&utm_cmp=rXJBDjtJ&activity_id=1774966633270',
    availability: 'planned',
    description: 'Prepare a verified, secure Gate account while direct Community integration is planned.',
  },
  {
    name: 'HTX',
    slug: 'htx',
    signupHref: 'https://www.htx.com/invite/en-us/1f?invite_code=84k59223&regChannel=11349190',
    availability: 'planned',
    description: 'Register and secure an HTX account while direct Community integration is planned.',
  },
]

export const BROKER_SIGNUP_LINKS: Record<string, string> = Object.fromEntries(
  BROKER_ACCOUNT_GUIDES.map((broker) => [broker.slug, broker.signupHref]),
)

/** Exchange-vs-exchange comparison pages (content/brokers/<a>-vs-<b>.md). */
export const BROKER_COMPARISONS: { a: string; b: string }[] = [
  { a: 'binance', b: 'bybit' }, { a: 'binance', b: 'bingx' }, { a: 'binance', b: 'kucoin' },
  { a: 'binance', b: 'bitget' }, { a: 'bybit', b: 'bingx' }, { a: 'bybit', b: 'kucoin' },
  { a: 'bybit', b: 'bitget' }, { a: 'bingx', b: 'kucoin' }, { a: 'bingx', b: 'bitget' },
  { a: 'kucoin', b: 'bitget' },
]
