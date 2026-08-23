'use client'

import Link from 'next/link'
import { trackEvent } from '@/lib/analytics'
import type { LocaleProps } from '@/components/landing/HomePageI18n'
import type { HomeCopy } from '@/lib/home-page'
import { localizeHref } from '@/lib/localized-links'

// Same reasoning as components/download/DownloadCenter.tsx: releases are
// NOT `prerelease: true` (so the in-app updater's `/releases/latest` alias
// dependency works) -- update RELEASE_TAG here on each new release since
// this static export has no server-side lookup to do it dynamically.
const RELEASE_TAG = 'v0.1.0-beta.2'
const GITHUB_RELEASE_URL = `https://github.com/wolfbot-io/wolfbot-community/releases/tag/${RELEASE_TAG}`

// Dark theme per prototypes/figma-make design language.
export function LatestRelease({ copy, locale }: LocaleProps) {
  const c = copy ?? ({} as HomeCopy)
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
      <h2 className="text-3xl font-bold text-white text-center mb-12">{c.releaseTitle || 'Latest Release'}</h2>
      <div className="max-w-2xl mx-auto rounded-xl p-8 border" style={{ background: '#0F172A', borderColor: 'rgba(255,255,255,0.07)' }}>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-semibold px-2 py-0.5 rounded" style={{ background: 'rgba(0,201,232,0.15)', color: '#67E8F9' }}>{c.releasePublicPreview || 'PUBLIC PREVIEW'}</span>
          <span className="text-white font-bold">{RELEASE_TAG}</span>
        </div>
        <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>{c.releaseBody || 'Public Beta for Linux with signed one-click installers, TradingView long/short/close webhooks, multi-broker crypto/futures support and the self-hosted MT5 bridge.'}</p>
        <div className="flex flex-wrap gap-4">
          <Link
            href={localizeHref('/download', locale ?? null)}
            onClick={() => trackEvent('cta_click', { label: 'download', location: 'latest_release' })}
            className="text-sm font-medium px-4 py-2 rounded-lg accent-glow"
            style={{ background: '#00C9E8', color: '#050C18' }}
          >
            {c.releaseDownload || 'Download'}
          </Link>
          <a
            href={GITHUB_RELEASE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium px-4 py-2 rounded-lg border"
            style={{ color: '#94A3B8', borderColor: 'rgba(255,255,255,0.12)' }}
          >
            {c.releaseGitHub || 'GitHub Release'}
          </a>
        </div>
      </div>
    </section>
  )
}
