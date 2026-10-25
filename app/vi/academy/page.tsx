import type { Metadata } from 'next'
import { AcademyIndex } from '@/components/academy/AcademyIndex'

export const metadata: Metadata = {
  title: 'Học viện WolfBot — Nghiên cứu AI Trading & Hướng dẫn',
  description: 'Nghiên cứu kỹ thuật về reinforcement learning, LSTM, state-space model, financial LLM, AI agent và RLOps cho trading, cùng hướng dẫn WolfBot thực hành.',
  alternates: {
    canonical: 'https://community.wolfbot.io/vi/academy',
    languages: {
      en: 'https://community.wolfbot.io/academy',
      vi: 'https://community.wolfbot.io/vi/academy',
      'x-default': 'https://community.wolfbot.io/academy',
    },
  },
}

export default function VietnameseAcademyPage() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: "document.documentElement.lang = 'vi';" }} />
      <AcademyIndex locale="vi" />
    </>
  )
}
