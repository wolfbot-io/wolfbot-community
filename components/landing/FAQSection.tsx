import Link from 'next/link'
import type { LocaleProps } from '@/components/landing/HomePageI18n'
import type { HomeCopy } from '@/lib/home-page'
import { localizeHref } from '@/lib/localized-links'

// Dark theme per prototypes/figma-make design language.
type FAQProps = LocaleProps & { standalone?: boolean }

export function FAQSection({ copy, locale, standalone = false }: FAQProps) {
  const c = copy ?? ({} as HomeCopy)
  const Wrapper = standalone ? 'div' : 'section'
  const borderStyle = standalone ? {} : { borderColor: 'rgba(255,255,255,0.07)' }
  const borderClass = standalone ? '' : 'border-t'
  const faqs = c.faqs?.length
    ? c.faqs
    : [
        { q: 'What is WolfBot Community?', a: 'WolfBot Community is a free self-hosted unified trading platform. It connects crypto exchanges and MT5 brokers into one interface for automation, execution, portfolio monitoring and risk management.' },
        { q: 'Which markets does WolfBot support?', a: 'Crypto (Binance, Bybit, BingX, KuCoin, Bitget), Crypto Futures, and MT5 markets (Forex, Gold, Indices, Stocks/CFDs). One platform across modern and traditional finance.' },
        { q: 'Is WolfBot Community free?', a: 'Yes — completely free. No subscription, no cloud account required. Self-host on your own Windows or Linux machine.' },
        { q: 'How do I install it?', a: 'Download the installer from the Download page and run it. Linux ships a .deb that sets up Docker for you automatically; the Windows Setup.exe is documented and coming in a follow-up release. No terminal or Docker experience needed.' },
        { q: 'Do I need a VPS or a cloud server?', a: 'No. WolfBot Community runs on your own computer. You only need a VPS if you want it trading 24/7 while your personal machine is off.' },
        { q: 'What happens when my PC shuts down?', a: 'Trading simply pauses — your accounts, strategies and settings are saved, and bots resume when the machine is back on. If you need round-the-clock operation, run it on an always-on Linux VPS instead.' },
        { q: 'How is WolfBot different from a typical trading bot?', a: 'A typical bot connects to one exchange. WolfBot is a unified platform — it connects multiple exchanges AND MT5 brokers, provides one execution engine, one risk layer, and one portfolio view across all markets.' },
        { q: 'Can I start with Simulation?', a: 'Yes. Connect a broker Demo/testnet account (e.g. a Bybit Demo key — WolfBot auto-detects it) and trade risk-free with real market data and virtual funds, across every supported market.' },
        { q: 'How do updates work?', a: 'Releases are cryptographically signed and shipped on channels (Stable, Beta, Dev Preview). Linux updates run through the signed updater; checksums are published for every installer so you can verify before installing.' },
        { q: 'What is the difference from WolfBot Cloud?', a: 'Community is free and self-hosted. Cloud is a managed service. Same platform, same markets — different hosting.' },
      ]
  return (
    <Wrapper className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 ${borderClass}`} style={borderStyle}>
      <h2 className="text-3xl font-bold text-white text-center mb-12">{c.faqTitle || 'Frequently Asked Questions'}</h2>
      <div className="max-w-2xl mx-auto space-y-4">
        {faqs.map((faq, i) => (
          <details
            key={i}
            className="rounded-xl border group"
            style={{ background: '#0F172A', borderColor: 'rgba(255,255,255,0.07)' }}
          >
            <summary className="px-6 py-4 cursor-pointer text-white font-medium text-sm list-none flex items-center justify-between">
              {faq.q}
              <span style={{ color: '#94A3B8' }} className="group-open:rotate-180 transition-transform">▾</span>
            </summary>
            <div className="px-6 pb-4 text-sm" style={{ color: '#94A3B8' }}>{faq.a}</div>
          </details>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link href={localizeHref('/faq', locale ?? null)} className="hover:underline text-sm" style={{ color: '#00C9E8' }}>{c.faqViewAll || 'View all FAQs →'}</Link>
      </div>
    </Wrapper>
  )
}
