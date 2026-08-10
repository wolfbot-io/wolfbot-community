import Link from 'next/link'

const FAQS = [
  { q: 'Is WolfBot Community free?', a: 'Yes. WolfBot Community is completely free. No subscription or cloud account required.' },
  { q: 'How do I install it?', a: 'Download the installer from our download page. Windows: run Setup.exe. Linux: install the .deb package.' },
  { q: 'Does it work on Windows?', a: 'Yes. WolfBot Community supports Windows 10 and Windows 11 (64-bit).' },
  { q: 'Which brokers are supported?', a: 'Binance, Bybit, BingX, KuCoin, Bitget, and MT5. See our broker page for current status.' },
  { q: 'Can I start with Simulation?', a: 'Yes. Simulation is the default mode. Test strategies against real market data without risking funds.' },
  { q: 'What is the difference from WolfBot Cloud?', a: 'Community is free and self-hosted. Cloud is a managed service where we handle hosting.' },
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
              {faq.q}
              <span className="text-zinc-600 group-open:rotate-180 transition-transform">▾</span>
            </summary>
            <div className="px-6 pb-4 text-sm text-zinc-400">{faq.a}</div>
          </details>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link href="/faq" className="text-blue-400 hover:underline text-sm">View all FAQs →</Link>
      </div>
    </Wrapper>
  )
}
