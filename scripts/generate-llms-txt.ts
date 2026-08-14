#!/usr/bin/env tsx
/**
 * llms.txt generator for wolfbot-community.
 * ==========================================
 * Produces the site's llms.txt (https://llmstxt.org) — a single,
 * crawl-friendly index written for LLM / AI-search readers (ChatGPT,
 * Gemini, Perplexity, etc.). Unlike sitemap.xml (for classic search
 * engines), llms.txt gives an AI a plain-Markdown map of what the site is
 * and where the useful pages live.
 *
 * Reads content/ frontmatter the same way generate-sitemap.ts does, so the
 * link list stays in sync with the real page set. Regenerate via
 * `npm run prebuild-content` (it is wired into that script).
 *
 * Usage:
 *   npx tsx scripts/generate-llms-txt.ts
 *   npx tsx scripts/generate-llms-txt.ts --output ../public/llms.txt
 */

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const BASE_URL = 'https://community.wolfbot.io'

function* walkContent(dir: string): Generator<string> {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) yield* walkContent(full)
    else if (entry.name.endsWith('.md')) yield full
  }
}

function resolveUrl(filepath: string, contentDir: string): string {
  let rel = path.relative(contentDir, filepath).replace(/\\/g, '/')
  rel = rel.replace(/\.md$/, '')
  return `/${rel}`
}

// Human order + label for each section; falls back to a generic label for
// any category not listed.
const SECTION_ORDER: { category: string; label: string }[] = [
  { category: 'getting-started', label: 'Getting Started' },
  { category: 'install', label: 'Installation' },
  { category: 'broker-setup', label: 'Broker Setup' },
  { category: 'simulation', label: 'Simulation & Demo' },
  { category: 'smart-terminal', label: 'Smart Terminal' },
  { category: 'risk-controls', label: 'Risk Controls' },
  { category: 'backup', label: 'Backup & Restore' },
  { category: 'updates', label: 'Updates' },
  { category: 'release', label: 'Releases' },
  { category: 'status', label: 'Status' },
  { category: 'security', label: 'Security' },
  { category: 'troubleshooting', label: 'Troubleshooting' },
  { category: 'faq', label: 'FAQ' },
]

function generate(): string {
  const contentDir = path.join(process.cwd(), 'content')
  const lines: string[] = []

  lines.push('# WolfBot Community')
  lines.push('')
  lines.push(
    '> Free, self-hosted unified trading platform for Windows and Linux. Connects crypto exchanges (Binance, Bybit, BingX, KuCoin, Bitget) and MT5 brokers (Forex, Gold, Indices, Stocks/CFDs) into one interface, one risk engine, one portfolio.'
  )
  lines.push('')
  lines.push(
    'WolfBot Community is the free, self-hosted edition of WolfBot by [WolfBot.io](https://wolfbot.io). The source is open at [github.com/wolfbot-io/wolfbot-community](https://github.com/wolfbot-io/wolfbot-community).'
  )
  lines.push('')

  // Key static/product pages first.
  lines.push('## Core')
  const corePages: [string, string, string][] = [
    ['/', 'Home', 'Overview of WolfBot Community and its markets'],
    ['/download', 'Download', 'Installers, checksums, and release channel'],
    ['/getting-started', 'Getting Started', 'First-run walkthrough'],
    ['/brokers', 'Supported Brokers', 'Broker/status matrix'],
    ['/features', 'Features', 'Full feature list'],
    ['/academy', 'Academy', 'All tutorials and guides'],
    ['/security', 'Security', 'Non-custodial design, signed releases'],
    ['/faq', 'FAQ', 'Frequently asked questions'],
    ['/community-vs-cloud', 'Community vs Cloud', 'Comparison of the two editions'],
  ]
  for (const [url, title, desc] of corePages) {
    lines.push(`- [${title}](${BASE_URL}${url}): ${desc}`)
  }
  lines.push('')

  // Group content pages by category.
  const byCategory = new Map<string, { url: string; title: string; desc: string }[]>()
  for (const fp of walkContent(contentDir)) {
    const raw = fs.readFileSync(fp, 'utf-8')
    const { data } = matter(raw)
    if (data.noindex) continue
    const url = resolveUrl(fp, contentDir)
    const cat: string = data.category || 'other'
    if (!byCategory.has(cat)) byCategory.set(cat, [])
    byCategory.get(cat)!.push({
      url,
      title: data.title || url,
      desc: data.description || '',
    })
  }

  const knownCats = new Set(SECTION_ORDER.map((s) => s.category))
  const ordered: { category: string; label: string }[] = [...SECTION_ORDER]
  for (const cat of byCategory.keys()) {
    if (!knownCats.has(cat)) ordered.push({ category: cat, label: cat })
  }

  for (const { category, label } of ordered) {
    const items = byCategory.get(category)
    if (!items || items.length === 0) continue
    lines.push(`## ${label}`)
    for (const item of items) {
      lines.push(`- [${item.title}](${BASE_URL}${item.url}): ${item.desc}`)
    }
    lines.push('')
  }

  return lines.join('\n').trimEnd() + '\n'
}

function main() {
  const args = process.argv.slice(2)
  const outIdx = args.indexOf('--output')
  const outPath = outIdx >= 0 ? args[outIdx + 1] : path.join(process.cwd(), 'public', 'llms.txt')

  const text = generate()
  const dir = path.dirname(outPath)
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(outPath, text, 'utf-8')

  const linkCount = (text.match(/^\- \[/gm) || []).length
  console.log(`✓ llms.txt written to ${outPath} (${linkCount} links)`)
}

main()
