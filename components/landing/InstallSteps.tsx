import Link from 'next/link'
import type { LocaleProps } from '@/components/landing/HomePageI18n'
import type { HomeCopy } from '@/lib/home-page'
import { localizeHref } from '@/lib/localized-links'

// Dark theme per prototypes/figma-make design language.
// Steps are localized via the dictionary; the sequence (1-2-3) is constant.
export function InstallSteps({ copy, locale }: LocaleProps) {
  const c = copy ?? ({} as HomeCopy)
  const steps = [
    { number: 1, title: c.installStep1Title || 'Download', desc: c.installStep1Desc || 'Windows Setup.exe or Linux .deb' },
    { number: 2, title: c.installStep2Title || 'Install', desc: c.installStep2Desc || 'Double-click, follow the setup wizard' },
    { number: 3, title: c.installStep3Title || 'Connect Markets', desc: c.installStep3Desc || 'Add crypto exchanges and MT5 brokers' },
  ]
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-3xl font-bold text-white text-center mb-4">{c.installTitle || 'Install in Minutes'}</h2>
      <p className="text-center mb-12 max-w-lg mx-auto" style={{ color: '#94A3B8' }}>
        {c.installSubtitle || 'One platform for all your markets. No Docker, no terminal required.'}
      </p>
      <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
        {steps.map((step) => (
          <div key={step.number} className="text-center">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4"
              style={{ background: 'rgba(0,201,232,0.1)', color: '#00C9E8' }}
            >
              {step.number}
            </div>
            <h3 className="text-white font-semibold mb-1">{step.title}</h3>
            <p className="text-sm" style={{ color: '#94A3B8' }}>{step.desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link href={localizeHref('/install/windows', locale ?? null)} className="hover:underline text-sm" style={{ color: '#00C9E8' }}>{c.installWindowsLink || 'Windows guide →'}</Link>
        <span className="mx-3" style={{ color: '#475569' }}>·</span>
        <Link href={localizeHref('/install/linux', locale ?? null)} className="hover:underline text-sm" style={{ color: '#00C9E8' }}>{c.installLinuxLink || 'Linux guide →'}</Link>
      </div>
    </section>
  )
}
