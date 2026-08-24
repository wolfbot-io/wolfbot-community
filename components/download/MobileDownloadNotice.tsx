'use client'

import { useState } from 'react'
import { trackEvent } from '@/lib/analytics'

// PLAN §95 "Mobile-First" — the download page must not show a bare
// "Download .deb" button to a phone visitor with no context: a .deb
// installer is useless on iOS/Android, and silently offering it anyway
// is exactly what §95 calls out ("Do not show unusable Setup.exe CTA
// without context"). CSS-only visibility (`sm:hidden`) so this never
// causes a hydration flicker -- the banner's presence doesn't depend on
// JS, only the "Copy link" button's click behavior does.
export function MobileDownloadNotice() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      trackEvent('mobile_download_link_copied', { location: 'download_page' })
      setTimeout(() => setCopied(false), 2500)
    } catch {
      // Clipboard API can fail (permissions, insecure context) -- the
      // link is still visible below as a manual fallback, so this is a
      // silent no-op rather than an error state.
    }
  }

  return (
    <div
      className="sm:hidden max-w-xl mx-auto mb-8 rounded-xl border p-5"
      style={{ background: 'rgba(0,201,232,0.06)', borderColor: 'rgba(0,201,232,0.2)' }}
    >
      <p className="text-sm font-semibold text-white mb-1">📱 You&apos;re on a phone</p>
      <p className="text-sm leading-relaxed mb-4" style={{ color: '#94A3B8' }}>
        WolfBot Community is desktop/server software for Windows and Linux, not
        iOS or Android. The current installer download is for Linux; copy this
        page&apos;s link and open it on your computer to download or follow Windows
        status updates.
      </p>
      <button
        type="button"
        onClick={handleCopy}
        className="w-full text-center font-semibold px-4 py-2.5 rounded-lg border text-sm transition-colors"
        style={{
          borderColor: copied ? 'rgba(74,222,128,0.4)' : 'rgba(0,201,232,0.28)',
          color: copied ? '#4ADE80' : '#67E8F9',
          background: copied ? 'rgba(74,222,128,0.08)' : 'transparent',
        }}
      >
        {copied ? '✓ Link copied' : 'Copy link for your desktop'}
      </button>
    </div>
  )
}
