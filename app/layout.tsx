import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { StructuredData } from '@/components/seo/StructuredData'
import { websiteSchema } from '@/lib/structured-data/website'
import { organizationSchema } from '@/lib/structured-data/organization'
import '@/styles/globals.css'

const SITE = {
  name: 'WolfBot Community',
  tagline: 'One Platform. Every Market.',
  url: 'https://community.wolfbot.io',
  description: 'WolfBot Community is a free self-hosted unified trading platform for Windows and Linux, bringing crypto exchanges, futures and MT5 markets into one interface for automated trading, smart execution, portfolio monitoring and risk management.',
}

// Cloudflare Web Analytics (privacy-conscious, no cookies) -- site
// registered as "community.wolfbot.io" in the Cloudflare dashboard under
// Analytics & Logs -> Web Analytics. This token is not a secret (it's
// pasted into a public <script> tag by design, same as any Cloudflare
// beacon token), just an identifier for that dashboard entry.
const CLOUDFLARE_BEACON_TOKEN = '8d9f9006aa4d4e519b0523eb68a8ed02'

// Google Analytics 4 -- separate GA4 property from wolfbot.io's own
// (community.wolfbot.io is a distinct product: free/self-hosted vs Cloud),
// so traffic isn't mixed between the two. Same gtag.js pattern as
// wolfbot-platform/frontend/app/layout.tsx for consistency. Not a secret --
// a GA Measurement ID is meant to be public, it's pasted into every page's
// HTML by design.
const GA_MEASUREMENT_ID = 'G-TPQZ9X224P'

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  // No `template` here on purpose: content frontmatter titles (and the
  // homepage / download / security pages) already embed the "WolfBot
  // Community" brand inside the title itself (e.g. "Connect Binance to
  // WolfBot Community — Step-by-Step"). A `%s — WolfBot Community`
  // template would append the brand a second time
  // ("... — WolfBot Community — WolfBot Community"), which reads as
  // spammy in search results and hurts click-through. A plain string here
  // means child pages render their title exactly as authored, and this value
  // is only the fallback for routes that don't set one.
  title: 'WolfBot Community — Free Self-Hosted Trading Bot for Windows & Linux',
  description: SITE.description,
  keywords: [
    'wolfbot', 'wolfbot community', 'unified trading platform',
    'crypto trading', 'mt5 automation', 'forex trading bot',
    'self-hosted trading', 'multi-market trading', 'trading automation',
  ],
  authors: [{ name: 'WolfBot.io', url: 'https://wolfbot.io' }],
  creator: 'WolfBot.io',
  publisher: 'WolfBot.io',
  icons: {
    icon: '/wolfbot-logo.png',
    apple: '/wolfbot-logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    // Shared 1200x630 banner (app/opengraph-image.tsx). Next.js's file
    // convention only auto-injects og:image on the root `/` route -- child
    // routes (docs, brokers, etc.) do NOT get it automatically, so we set it
    // here so every page gets a valid social-preview image instead of a blank
    // card. Content pages merge their own og:title/description/url on top.
    images: [
      { url: '/opengraph-image', width: 1200, height: 630, alt: `${SITE.name} — ${SITE.tagline}` },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    // Same reasoning as openGraph above -- falls back to
    // app/opengraph-image.tsx instead of a hardcoded square image.
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE.url },
}

// Mobile browser chrome (address bar / task switcher) color — matches the
// wolf-bg dark theme (prototypes/figma-make design language) instead of
// leaving it to default to white, which would flash against the dark page.
export const viewport: Viewport = {
  themeColor: '#060A14',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/wolfbot-logo.png" sizes="any" />
        <link rel="alternate" type="application/rss+xml" title={`${SITE.name} — Releases & Docs`} href="/rss.xml" />
        <StructuredData data={websiteSchema} />
        <StructuredData data={organizationSchema} />
        <script
          type="module"
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon={`{"token": "${CLOUDFLARE_BEACON_TOKEN}"}`}
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');
`}
        </Script>
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
