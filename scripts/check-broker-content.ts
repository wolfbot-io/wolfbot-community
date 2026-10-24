import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { BROKERS, BROKER_ACCOUNT_GUIDES } from '../lib/brokers'

const root = join(import.meta.dirname, '..')
const errors: string[] = []
const supportedSlugs = new Set(BROKERS.map((broker) => broker.slug))
const seenSlugs = new Set<string>()
const seenUrls = new Set<string>()

function read(relativePath: string): string | null {
  const path = join(root, relativePath)
  if (!existsSync(path)) {
    errors.push(`Missing ${relativePath}`)
    return null
  }
  return readFileSync(path, 'utf8')
}

for (const guide of BROKER_ACCOUNT_GUIDES) {
  if (seenSlugs.has(guide.slug)) errors.push(`Duplicate account-guide slug: ${guide.slug}`)
  if (seenUrls.has(guide.signupHref)) errors.push(`Duplicate partner URL: ${guide.signupHref}`)
  seenSlugs.add(guide.slug)
  seenUrls.add(guide.signupHref)

  const guideImage = `public/images/guides/open-${guide.slug}-account.png`
  if (!existsSync(join(root, guideImage))) errors.push(`Missing ${guideImage}`)

  for (const localePrefix of ['', 'vi/']) {
    const relativePath = `content/${localePrefix}brokers/open-${guide.slug}-account.md`
    const content = read(relativePath)
    if (!content) continue

    const referralUses = content.split(guide.signupHref).length - 1
    if (referralUses < 2) {
      errors.push(`${relativePath} must use the canonical partner URL in both its primary CTA and registration step`)
    }
    if (!content.includes('sitemap_priority:')) {
      errors.push(`${relativePath} is missing sitemap_priority`)
    }
  }

  if (supportedSlugs.has(guide.slug)) {
    const englishSetup = read(`content/brokers/${guide.slug}.md`)
    const vietnameseSetup = read(`content/vi/brokers/${guide.slug}.md`)
    if (englishSetup && !englishSetup.includes(`/brokers/open-${guide.slug}-account`)) {
      errors.push(`English ${guide.slug} setup guide does not link to its account-opening guide`)
    }
    if (vietnameseSetup && !vietnameseSetup.includes(`/vi/brokers/open-${guide.slug}-account`)) {
      errors.push(`Vietnamese ${guide.slug} setup guide does not link to its account-opening guide`)
    }
  }
}

if (errors.length > 0) {
  console.error('[BROKER-CONTENT] validation failed:')
  for (const error of errors) console.error(`- ${error}`)
  process.exit(1)
}

console.log(`[BROKER-CONTENT] validated ${BROKER_ACCOUNT_GUIDES.length} account-guide pairs and canonical partner links`)
