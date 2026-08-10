import type { Metadata } from 'next'
import { ReleaseStrip } from '@/components/landing/ReleaseStrip'
import { Hero } from '@/components/landing/Hero'
import { TrustStrip } from '@/components/landing/TrustStrip'
import { InstallSteps } from '@/components/landing/InstallSteps'
import { ScreenshotsCarousel } from '@/components/landing/ScreenshotsCarousel'
import { FeaturesGrid } from '@/components/landing/FeaturesGrid'
import { RunsOnYourMachine } from '@/components/landing/RunsOnYourMachine'
import { BrokerSection } from '@/components/landing/BrokerSection'
import { CommunityVsCloud } from '@/components/landing/CommunityVsCloud'
import { LatestRelease } from '@/components/landing/LatestRelease'
import { GitHubCommunityBlock } from '@/components/landing/GitHubCommunityBlock'
import { SecurityTrust } from '@/components/landing/SecurityTrust'
import { FAQSection } from '@/components/landing/FAQSection'
import { FinalCTA } from '@/components/landing/FinalCTA'

export const metadata: Metadata = {
  title: 'WolfBot Community — One Platform. Every Market.',
  description:
    'Free self-hosted unified trading platform for Windows and Linux. Connect crypto exchanges, futures and MT5 markets through one intelligent interface.',
}

export default function HomePage() {
  return (
    <>
      {/* ── Section 13: Release status strip ── */}
      <ReleaseStrip />

      {/* ── Section 14: Hero ── */}
      <Hero />

      {/* ── Section 15: Trust microcopy ── */}
      <TrustStrip />

      {/* ── Section 17: Install in 3 steps ── */}
      <InstallSteps />

      {/* ── Section 18: Screenshots carousel ── */}
      <ScreenshotsCarousel />

      {/* ── Section 19: Feature cards ── */}
      <FeaturesGrid />

      {/* ── Section 20: What runs on your machine ── */}
      <RunsOnYourMachine />

      {/* ── Section 21: Supported brokers ── */}
      <BrokerSection />

      {/* ── Section 23: Community vs Cloud ── */}
      <CommunityVsCloud />

      {/* ── Section 11 (part): Latest release ── */}
      <LatestRelease />

      {/* ── GitHub / community block ── */}
      <GitHubCommunityBlock />

      {/* ── Section 142: Security / trust ── */}
      <SecurityTrust />

      {/* ── Section 99: FAQ ── */}
      <FAQSection />

      {/* ── Final download CTA ── */}
      <FinalCTA />
    </>
  )
}
