import Link from 'next/link'
import type { LocaleProps } from '@/components/landing/HomePageI18n'
import type { HomeCopy } from '@/lib/home-page'
import { localizeHref } from '@/lib/localized-links'

// Dark theme per prototypes/figma-make design language.
export function SecurityTrust({ copy, locale }: LocaleProps) {
  const c = copy ?? ({} as HomeCopy)
  const items = c.securityItems?.length
    ? c.securityItems
    : [
        { title: 'Trade-Only API', desc: 'Connect with API keys that cannot withdraw funds.' },
        { title: 'Self-Hosted', desc: 'Runs on your machine. No third party access to credentials.' },
        { title: 'Signed Releases', desc: 'Cryptographically signed. Verify checksums before installing.' },
      ]
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
      <h2 className="text-3xl font-bold text-white text-center mb-4">{c.securityTitle || 'Built for Trust'}</h2>
      <p className="text-center mb-12 max-w-lg mx-auto" style={{ color: '#94A3B8' }}>
        {c.securitySubtitle || 'WolfBot Community is non-custodial and self-hosted — you control your keys, your infrastructure, your data.'}
      </p>
      <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {items.map((item, i) => (
          <div key={i} className="text-center">
            <div className="text-2xl mb-3">{['🔑', '💻', '✍️'][i]}</div>
            <h3 className="text-white font-semibold mb-2 text-sm">{item.title}</h3>
            <p className="text-xs" style={{ color: '#94A3B8' }}>{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link href={localizeHref('/security', locale ?? null)} className="hover:underline text-sm" style={{ color: '#00C9E8' }}>{c.securityLearnMore || 'Learn more →'}</Link>
      </div>
    </section>
  )
}
