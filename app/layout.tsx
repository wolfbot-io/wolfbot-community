import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { StructuredData } from '@/components/seo/StructuredData'
import { websiteSchema } from '@/lib/structured-data/website'
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
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s — ${SITE.name}`,
  },
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
    // No explicit `images` here on purpose: app/opengraph-image.tsx (a
    // proper 1200x630 banner, Section 96-97) is picked up automatically by
    // Next.js's file convention and takes priority over any square-logo
    // fallback set here.
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
