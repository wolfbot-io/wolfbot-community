import { HOME_COPY, type HomeCopy } from '@/lib/home-page'
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

/**
 * Shared homepage sections. `copy` and `locale` are threaded as plain props to
 * each section (NOT via React Context), which keeps server-side static
 * generation simple and avoids Next.js 14's 'use client' proxy pitfalls.
 *
 * On the English site (`copy` is undefined / `locale` null) each section falls
 * back to its hardcoded English JSX default. On a localized homepage the
 * translated dictionary for that locale is passed down.
 *
 * Kept in this dedicated component (not app/page.tsx) so page files stay free
 * of extra named exports; Next.js requires app/page.tsx files to export only
 * the default component and page metadata.
 */
export function HomePageSections({ copy, locale }: { copy?: HomeCopy; locale?: string | null }) {
  return (
    <>
      <ReleaseStrip copy={copy} locale={locale} />
      <Hero copy={copy} locale={locale} />
      <TrustStrip copy={copy} />
      <InstallSteps copy={copy} locale={locale} />
      <ScreenshotsCarousel copy={copy} />
      <FeaturesGrid copy={copy} />
      <RunsOnYourMachine copy={copy} />
      <BrokerSection copy={copy} locale={locale} />
      <CommunityVsCloud copy={copy} locale={locale} />
      <LatestRelease copy={copy} locale={locale} />
      <GitHubCommunityBlock copy={copy} />
      <SecurityTrust copy={copy} locale={locale} />
      <FAQSection copy={copy} locale={locale} />
      <FinalCTA copy={copy} locale={locale} />
    </>
  )
}

/** Renders the homepage sections for a given locale (or English by default). */
export function LocalizedHomePage({ locale }: { locale: string }) {
  const copy = HOME_COPY[locale]
  return <HomePageSections copy={copy} locale={locale} />
}

/** English homepage alias - same sections, matches HOME_COPY.en so the
 *  English hero/metadata/section copy stays the single source of truth
 *  (previously it fell back to hardcoded JSX defaults, which let the English
 *  page and the /en dictionary drift, e.g. the H1 in plan §5). */
export function EnglishHomePage() {
  return <HomePageSections copy={HOME_COPY['en']} locale={null} />
}
