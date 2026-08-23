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
  /** Support status -- all 6 are 'stable' as of v0.1.0-beta.2 */
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
