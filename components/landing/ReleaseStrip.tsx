import Link from 'next/link'
import type { LocaleProps } from '@/components/landing/HomePageI18n'
import type { HomeCopy } from '@/lib/home-page'
import { localizeHref } from '@/lib/localized-links'

// Dark theme (announcement-bg gradient) per prototypes/figma-make design language.
export function ReleaseStrip({ copy, locale }: LocaleProps) {
  const c = copy ?? ({} as HomeCopy)
  return (
    <div className="announcement-bg border-b" style={{ borderColor: 'rgba(0,201,232,0.14)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-2 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-2 py-0.5 rounded" style={{ background: 'rgba(0,201,232,0.15)', color: '#67E8F9' }}>{c.stripPublicPreview || 'PUBLIC PREVIEW'}</span>
            <span style={{ color: '#94A3B8' }}>{c.stripReleaseAvailable || 'WolfBot Community v0.1.0-p12-ghcr-rc19 is available'}</span>
          </div>
          <div className="flex items-center gap-3" style={{ color: '#94A3B8' }}>
            <span>Windows x64</span><span style={{ color: '#475569' }}>·</span><span>Linux x64</span>
            <Link href={localizeHref('/releases', locale ?? null)} className="hover:underline" style={{ color: '#00C9E8' }}>{c.stripSeeRelease || 'See release →'}</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
