import type { Metadata } from 'next'
import { DownloadCenter } from '@/components/download/DownloadCenter'
import { TrackPageView } from '@/components/analytics/TrackPageView'
import { softwareAppSchema } from '@/lib/structured-data/software-app'
import { StructuredData } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'Download WolfBot Community — Free Self-Hosted Trading Bot for Windows & Linux',
  description:
    'Download WolfBot Community, the free self-hosted trading platform for Windows and Linux. The current release includes signed Linux .deb/.run installers, with Windows installer status shown on this page.',
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
