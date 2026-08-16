import type { Metadata } from 'next'
import { DownloadCenter } from '@/components/download/DownloadCenter'
import { TrackPageView } from '@/components/analytics/TrackPageView'
import { softwareAppSchema } from '@/lib/structured-data/software-app'
import { StructuredData } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'Download WolfBot Community for Linux — Free Self-Hosted Trading Bot',
  description:
    'Download WolfBot Community for Linux (Ubuntu/Debian) as a .deb installer. Free self-hosted trading automation for crypto, futures & MT5. Official GitHub releases. Windows build coming soon.',
  alternates: { canonical: 'https://community.wolfbot.io/download' },
}

export default function DownloadPage() {
  return (
    <>
      <StructuredData data={softwareAppSchema} />
      <DownloadCenter />
      <TrackPageView eventName="download_view" params={{ page: 'download', location: 'download_page' }} />
    </>
  )
}
