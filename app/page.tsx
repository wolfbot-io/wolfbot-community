import type { Metadata } from 'next'
import { EnglishHomePage } from '@/components/landing/LocalizedHomePage'

export const metadata: Metadata = {
  title: 'WolfBot Community — Free Self-Hosted Trading Bot for Linux',
  description:
    'Free self-hosted unified trading platform for Linux. Connect crypto exchanges, futures, MT5 markets and TradingView alerts through one intelligent interface.',
}

export default function HomePage() {
  return <EnglishHomePage />
}
