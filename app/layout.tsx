import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { StructuredData } from '@/components/seo/StructuredData'
import { websiteSchema } from '@/lib/structured-data/website'
import '@/styles/globals.css'

const SITE = {
  name: 'WolfBot Community',
  tagline: 'Free Self-Hosted Trading Automation',
  url: 'https://community.wolfbot.io',
  description: 'Run WolfBot on your own machine. Free. Download WolfBot Community for Windows or Linux and run trading automation on infrastructure you control.',
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    'wolfbot', 'wolfbot community', 'trading bot', 'crypto trading',
    'automated trading', 'self-hosted', 'free trading bot',
    'windows trading bot', 'linux trading bot',
  ],
  authors: [{ name: 'WolfBot.io', url: 'https://wolfbot.io' }],
  creator: 'WolfBot.io',
  publisher: 'WolfBot.io',
  formatDetection: { telephone: false },
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
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE.url,
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <StructuredData data={websiteSchema} />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
