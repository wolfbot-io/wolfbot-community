#!/usr/bin/env tsx
/**
 * Claim guard for the /tools cluster (Master Plan V3.1 section 53/69:
 * "public claims must match certified release data").
 *
 * Fails (exit 1) when a language/voice count written in the tools pages, the
 * homepage copy or the features page is not backed by
 * lib/data/language-capabilities.json, or when a tools page breaks basic SEO
 * hygiene (description > 160 chars, missing/duplicate H1, dead internal link).
 *
 * Refresh the data file from a running translator:
 *   python3 scripts/release/export_language_capabilities.py   (repo root)
 *
 * Usage: npx tsx scripts/check-tool-claims.ts
 */
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const ROOT = path.resolve(__dirname, '..')
const data = JSON.parse(fs.readFileSync(path.join(ROOT, 'lib/data/language-capabilities.json'), 'utf8'))
const allowed = new Set<number>([
  data.counts.total,
  data.counts.voices,
  data.counts.total - data.counts.voices,
  ...Object.values<number>(data.extra_allowed_numbers ?? {}),
])

const errors: string[] = []
const warnings: string[] = []

function* walk(dir: string): Generator<string> {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) yield* walk(full)
    else if (e.name.endsWith('.md')) yield full
  }
}

// number directly before/after a language/voice word (EN + VI)
const COUNT_RE = /(\d+)\+?\s+(?:more\s+|other\s+|additional\s+)?(?:languages|language|voices|ngôn ngữ|giọng)|(?:ngôn ngữ|giọng)\s+(\d+)\b/gi

function checkCounts(file: string, text: string) {
  for (const m of text.matchAll(COUNT_RE)) {
    const n = Number(m[1] ?? m[2])
    if (n > 0 && !allowed.has(n) && n >= 5) {
      errors.push(`${file}: unbacked language/voice count "${m[0]}" (allowed: ${[...allowed].sort((a, b) => a - b).join(', ')})`)
    }
  }
}

const contentSlugs = new Set<string>()
const files = [...walk(path.join(ROOT, 'content'))]
for (const f of files) contentSlugs.add(path.relative(path.join(ROOT, 'content'), f).replace(/\.md$/, ''))
const KNOWN_ROUTES = new Set(['download', 'security', 'features', 'academy', 'faq', 'brokers', 'about', 'support', 'tools', 'vi/download', 'vi/security'])

for (const f of files) {
  const rel = path.relative(path.join(ROOT, 'content'), f)
  if (!/(^|\/)tools\//.test(rel)) continue
  const { data: fm, content } = matter(fs.readFileSync(f, 'utf8'))
  const desc = String(fm.description ?? '')
  if (desc.length > 160) errors.push(`${rel}: description ${desc.length} chars (>160)`)
  if (!fm.tested_version) errors.push(`${rel}: missing tested_version`)
  const h1 = (content.match(/^# /gm) ?? []).length
  if (h1 !== 1) errors.push(`${rel}: expected exactly 1 H1, found ${h1}`)
  for (const m of content.matchAll(/\]\((\/[^)#\s]*)\)/g)) {
    const slug = m[1].replace(/^\//, '')
    if (!contentSlugs.has(slug) && !KNOWN_ROUTES.has(slug)) errors.push(`${rel}: dead internal link ${m[1]}`)
  }
  if (/\b(only|first|no other|nothing else)\b[^.\n]{0,40}\b(tool|translator)\b[^.\n]{0,40}\b(market|world)\b/i.test(content)) {
    errors.push(`${rel}: unverifiable "only tool on the market" style claim`)
  }
  if (/windows/i.test(content) && /realtime|real-time/i.test(content) && /(works|available) on windows/i.test(content)) {
    warnings.push(`${rel}: mentions Windows realtime availability — speech is Linux-only today`)
  }
  checkCounts(rel, content + '\n' + desc)
}
for (const f of ['lib/home-page.ts', 'app/features/page.tsx']) {
  const text = fs.readFileSync(path.join(ROOT, f), 'utf8')
  // only lines that talk about translation
  for (const line of text.split('\n')) if (/translat|dịch/i.test(line)) checkCounts(f, line)
}

for (const w of warnings) console.warn('WARN ', w)
if (errors.length) {
  for (const e of errors) console.error('ERROR', e)
  console.error(`\ncheck-tool-claims: ${errors.length} problem(s)`)
  process.exit(process.env.SKIP_TOOL_CLAIMS === '1' ? 0 : 1)
}
console.log(`check-tool-claims: OK (${data.counts.total} languages, ${data.counts.voices} voices)`)
