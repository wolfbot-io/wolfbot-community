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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    images: [{ url: '/assets/social-preview.png', width: 1280, height: 640 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    images: ['/assets/social-preview.png'],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE.url },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><StructuredData data={websiteSchema} /></head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
