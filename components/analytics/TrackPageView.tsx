'use client'

import { useEffect, useRef } from 'react'
import { trackEvent } from '@/lib/analytics'

/**
 * Fires a one-time GA4 event on mount (after hydration). Used for
 * `download_view` on the /download page — a distinct funnel stage over the
 * automatic `page_view` (PLAN §20 conversion SEO). No-op if gtag is missing.
 */
export function TrackPageView({ eventName, params }: { eventName: string; params?: Record<string, string | number | boolean> }) {
  const fired = useRef(false)
  useEffect(() => {
    if (fired.current) return
    fired.current = true
    trackEvent(eventName, params)
  }, [eventName, params])
  return null
}
