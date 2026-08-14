'use client'

import Link from 'next/link'
import { trackEvent } from '@/lib/analytics'

// Dark theme per prototypes/figma-make design language.
export function FinalCTA() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">One Platform. Every Market.</h2>
        <p className="mb-8" style={{ color: '#94A3B8' }}>
          Download WolfBot Community — free, self-hosted on Windows and Linux.
          Connect crypto exchanges and MT5 brokers. Start with Simulation.
        </p>
        <Link
          href="/download"
          onClick={() => trackEvent('cta_click', { label: 'download', location: 'final_cta' })}
          className="inline-block font-bold px-10 py-5 rounded-xl text-lg transition-all accent-glow"
          style={{ background: '#00C9E8', color: '#050C18' }}
        >
          Download WolfBot Community
        </Link>
        <p className="mt-4 text-sm" style={{ color: '#475569' }}>Free · Windows &amp; Linux · No signup required · Crypto + Futures + MT5</p>
      </div>
    </section>
  )
}
