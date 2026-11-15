import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

const root = process.cwd()
const version = '0.1.0-beta.20'
const assetRoot = path.join(root, 'public', 'images', 'product', version)
const errors: string[] = []

const assets = ['en', 'vi'].flatMap((lang) => {
  const dir = path.join(assetRoot, lang)
  return fs.existsSync(dir)
    ? fs.readdirSync(dir).filter((name) => name.endsWith('.webp')).map((name) => path.join(dir, name))
    : []
})

if (assets.length !== 78) errors.push(`expected 78 optimized product screenshots, found ${assets.length}`)
for (const asset of assets) {
  if (fs.statSync(asset).size > 250 * 1024) errors.push(`${path.relative(root, asset)} exceeds 250KB`)
}

function* markdownFiles(dir: string): Generator<string> {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name)
    if (entry.isDirectory()) yield* markdownFiles(file)
    else if (entry.name.endsWith('.md')) yield file
  }
}

const referencedIds = new Set<string>()
for (const file of markdownFiles(path.join(root, 'content'))) {
  const body = fs.readFileSync(file, 'utf8')
  const imagePattern = /!\[([^\]]+)\]\((\/images\/product\/0\.1\.0-beta\.20\/(en|vi)\/([^ )"]+)\.webp)(?:\s+"([^"]+)")?\)/g
  for (const match of body.matchAll(imagePattern)) {
    const [, alt, url, lang, id, caption] = match
    const expectedLang = file.includes(`${path.sep}vi${path.sep}`) ? 'vi' : 'en'
    if (lang !== expectedLang) errors.push(`${path.relative(root, file)} uses ${lang} image in ${expectedLang} content`)
    if (alt.trim().length < 12) errors.push(`${path.relative(root, file)} has weak alt text for ${id}`)
    if (!caption?.trim()) errors.push(`${path.relative(root, file)} is missing a caption for ${id}`)
    if (!fs.existsSync(path.join(root, 'public', url.slice(1)))) errors.push(`${path.relative(root, file)} references missing ${url}`)
    referencedIds.add(id)
  }
}

const featureArticles = [
  'community-dashboard-and-portfolio',
  'strategy-builder-workflow',
  'bot-control-and-live-monitoring',
  'ai-analyst-trade-review',
  'mcp-ai-agents',
  'marketplace-and-copy-trading',
]

for (const slug of featureArticles) {
  const english = path.join(root, 'content', 'docs', `${slug}.md`)
  const vietnamese = path.join(root, 'content', 'vi', 'docs', `${slug}.md`)
  if (!fs.existsSync(english) || !fs.existsSync(vietnamese)) {
    errors.push(`${slug} must have English and Vietnamese articles`)
    continue
  }
  const viMeta = matter(fs.readFileSync(vietnamese, 'utf8')).data
  if (viMeta.translation_of !== `docs/${slug}`) errors.push(`vi/docs/${slug}.md has invalid translation_of`)
}

const requiredFeatureShots = [
  '01-home', '02-overview-demo', '03-overview-live', '04-portfolio', '04b-portfolio-demo',
  '05-accounts', '06-account-detail', '08-command-palette', '09-terminal', '11-strategies-gallery',
  '12-strategy-builder', '13-strategy-detail', '14-strategy-import', '15-bots', '16-bot-detail',
  '17-marketplace', '18-copy-trading', '19-risk-center', '20-activity', '21-live-monitor',
  '22-ai-analyst', '22b-ai-analyst-report', '23-ai-analyst-settings', '24-ai-agents',
  '25-live-translate', '26-integrations', '27-telegram-connect', '28-settings', '29-help',
  '31-local-setup', '33-connect-account',  // 32-onboarding shows the same screen as 33; intentionally not required '34-connect-mt5', '36-mobile-overview',
]
for (const id of requiredFeatureShots) {
  if (!referencedIds.has(id)) errors.push(`main feature screenshot ${id} is not used by any article`)
}

if (errors.length) {
  console.error('[PRODUCT-SCREENSHOTS] validation failed:')
  for (const error of errors) console.error(`- ${error}`)
  process.exit(1)
}

console.log(`[PRODUCT-SCREENSHOTS] ${assets.length} assets; ${referencedIds.size} screenshot IDs used; ${featureArticles.length} EN/VI feature pairs`)
