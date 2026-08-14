'use client'

import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { trackEvent } from '@/lib/analytics'

interface TrackedLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** GA4 event name, e.g. "download_click" */
  eventName: string
  /** Extra GA4 event params, e.g. { platform: "linux", location: "download_page" } */
  eventParams?: Record<string, string | number | boolean>
  children: ReactNode
}

/**
 * Plain `<a>` that fires a GA4 event on click before navigating.
 * Uses a real `<a>`, not next/link's client-side router -- every tracked
 * link on this site points either to an external download (GitHub
 * Releases) or is fine as a full navigation, so there's no SPA
 * transition to preserve.
 */
export function TrackedLink({ eventName, eventParams, onClick, children, ...anchorProps }: TrackedLinkProps) {
  return (
    <a
      {...anchorProps}
      onClick={(e) => {
        trackEvent(eventName, eventParams)
        onClick?.(e)
      }}
    >
      {children}
    </a>
  )
}
