import type { Metadata } from 'next'
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
    images: [{ url: '/wolfbot-logo.png', width: 1024, height: 1024 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    images: ['/wolfbot-logo.png'],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE.url },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/wolfbot-logo.png" sizes="any" />
        <StructuredData data={websiteSchema} />
        <script
          type="module"
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon={`{"token": "${CLOUDFLARE_BEACON_TOKEN}"}`}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
