import type { Metadata } from 'next'
import { DownloadCenter } from '@/components/download/DownloadCenter'
import { softwareAppSchema } from '@/lib/structured-data/software-app'
import { StructuredData } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'Download WolfBot Community for Windows & Linux',
  description:
    'Download WolfBot Community installer for Windows (Setup.exe) or Linux (.deb). Free self-hosted trading automation. Official GitHub releases.',
  alternates: { canonical: 'https://community.wolfbot.io/download' },
}

export default function DownloadPage() {
  return (
    <>
      <StructuredData data={softwareAppSchema} />
      <DownloadCenter />
    </>
  )
}
