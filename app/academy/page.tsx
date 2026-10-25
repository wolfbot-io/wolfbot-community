import type { Metadata } from 'next'
import { AcademyIndex } from '@/components/academy/AcademyIndex'

export const metadata: Metadata = {
  title: 'WolfBot Academy — AI Trading Research, Tutorials & Guides',
  description: 'Technical AI trading research on reinforcement learning, LSTM and state-space time-series models, financial LLMs, agents and RLOps, plus practical WolfBot guides.',
  alternates: {
    canonical: 'https://community.wolfbot.io/academy',
    languages: {
      en: 'https://community.wolfbot.io/academy',
      vi: 'https://community.wolfbot.io/vi/academy',
      'x-default': 'https://community.wolfbot.io/academy',
    },
  },
}

// Dark theme per prototypes/figma-make design language.
export default function AcademyPage() {
  return <AcademyIndex locale="en" />
}
