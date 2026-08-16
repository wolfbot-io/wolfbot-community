import Link from 'next/link'
import type { LocaleProps } from '@/components/landing/HomePageI18n'
import type { HomeCopy } from '@/lib/home-page'
import { localizeHref } from '@/lib/localized-links'

// Dark theme per prototypes/figma-make design language.
export function CommunityVsCloud({ copy, locale }: LocaleProps) {
  const c = copy ?? ({} as HomeCopy)
  const community = c.cvcCommunityItems?.length
    ? c.cvcCommunityItems
    : ['✅ Self-hosted on your machine', '✅ Crypto + Futures + MT5', '✅ Full unified trading platform', '✅ Demo account support', '✅ Community support', '— You manage infrastructure', '— You handle updates']
  const cloud = c.cvcCloudItems?.length
    ? c.cvcCloudItems
    : ['✅ Fully managed hosting', '✅ Crypto + Futures + MT5', '✅ Full unified trading platform', '✅ Demo account support', '✅ Priority support', '✅ Automatic updates', '✅ No infrastructure maintenance']
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
      <h2 className="text-3xl font-bold text-white text-center mb-4">{c.cvcTitle || 'Community or Cloud?'}</h2>
      <p className="text-center mb-12 max-w-lg mx-auto" style={{ color: '#94A3B8' }}>
        {c.cvcSubtitle || 'Self-host for free or use the managed WolfBot experience. Same platform. Same markets.'}
      </p>
      <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="rounded-xl p-8 border" style={{ background: 'rgba(0,201,232,0.06)', borderColor: 'rgba(0,201,232,0.28)' }}>
          <h3 className="text-xl font-bold text-white mb-2">{c.cvcCommunity || 'WolfBot Community'}</h3>
          <div className="text-3xl font-bold mb-4" style={{ color: '#00C9E8' }}>{c.cvcCommunityPrice || 'Free'}</div>
          <ul className="space-y-3 text-sm" style={{ color: '#94A3B8' }}>
            {community.slice(0, 5).map((item) => <li key={item}>{item}</li>)}
            {community.slice(5).map((item) => <li key={item} style={{ color: '#475569' }}>{item}</li>)}
          </ul>
        </div>
        <div className="rounded-xl p-8 border" style={{ background: '#0F172A', borderColor: 'rgba(255,255,255,0.07)' }}>
          <h3 className="text-xl font-bold text-white mb-2">{c.cvcCloud || 'WolfBot Cloud'}</h3>
          <div className="text-3xl font-bold mb-4" style={{ color: '#94A3B8' }}>{c.cvcCloudPrice || 'Subscription'}</div>
          <ul className="space-y-3 text-sm" style={{ color: '#94A3B8' }}>
            {cloud.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </div>
      <div className="text-center mt-8">
        <Link href={localizeHref('/community-vs-cloud', locale ?? null)} className="hover:underline text-sm" style={{ color: '#00C9E8' }}>{c.cvcCompareLink || 'Detailed comparison →'}</Link>
      </div>
    </section>
  )
}
