import Link from 'next/link'

const FAQS = [
  { q: 'What is WolfBot Community?', a: 'WolfBot Community is a free self-hosted unified trading platform. It connects crypto exchanges and MT5 brokers into one interface for automation, execution, portfolio monitoring and risk management.' },
  { q: 'Which markets does WolfBot support?', a: 'Crypto (Binance, Bybit, BingX, KuCoin, Bitget), Crypto Futures, and MT5 markets (Forex, Gold, Indices, Stocks/CFDs). One platform across modern and traditional finance.' },
  { q: 'Is WolfBot Community free?', a: 'Yes — completely free. No subscription, no cloud account required. Self-host on your own Windows or Linux machine.' },
  { q: 'How is WolfBot different from a typical trading bot?', a: 'A typical bot connects to one exchange. WolfBot is a unified platform — it connects multiple exchanges AND MT5 brokers, provides one execution engine, one risk layer, and one portfolio view across all markets.' },
  { q: 'Can I start with Simulation?', a: 'Yes. Simulation is the default mode. Test strategies across markets without risking funds.' },
  { q: 'What is the difference from WolfBot Cloud?', a: 'Community is free and self-hosted. Cloud is a managed service. Same platform, same markets — different hosting.' },
]

export function FAQSection({ standalone = false }: { standalone?: boolean }) {
  const Wrapper = standalone ? 'div' : 'section'
  const borderClass = standalone ? '' : 'border-t border-zinc-800'
  return (
    <Wrapper className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 ${borderClass}`}>
      <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
      <div className="max-w-2xl mx-auto space-y-4">
        {FAQS.map((faq) => (
          <details key={faq.q} className="border border-zinc-800 rounded-xl bg-zinc-900/50 group">
            <summary className="px-6 py-4 cursor-pointer text-white font-medium text-sm list-none flex items-center justify-between">
              {faq.q}<span className="text-zinc-600 group-open:rotate-180 transition-transform">▾</span>
            </summary>
            <div className="px-6 pb-4 text-sm text-zinc-400">{faq.a}</div>
          </details>
        ))}
      </div>
      <div className="text-center mt-8"><Link href="/faq" className="text-blue-400 hover:underline text-sm">View all FAQs →</Link></div>
    </Wrapper>
  )
}
