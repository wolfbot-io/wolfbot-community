#!/usr/bin/env tsx
/**
 * Search-index generator for wolfbot-community.
 * ==============================================
 * Produces public/search-index.json — a flat index of every content page
 * (title, description, category, keywords, and normalized body text) used by
 * the client-side DocsSearch component (PLAN §146 "Technical documentation
 * search"). The site is a static export (no server), so search runs in the
 * browser against this prebuilt file.
 *
 * Regenerate via `npm run prebuild-content` (wired alongside sitemap/rss).
 *
 * Usage:
 *   npx tsx scripts/generate-search-index.ts
 *   npx tsx scripts/generate-search-index.ts --output ../public/search-index.json
 */

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

interface Entry {
  url: string
  title: string
  description: string
  category: string
  keywords: string[]
  text: string
}

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

/** Coarse markdown -> plain text for search matching. Not a renderer; just
 *  removes the tokens that would otherwise pollute keyword matching. */
function stripMarkdown(md: string): string {
  return md
    .replace(/```[\s\S]*?```/g, ' ') // fenced code blocks
    .replace(/`([^`]*)`/g, '$1') // inline code
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ') // images
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // links -> keep text
    .replace(/^#{1,6}\s*/gm, '') // headings
    .replace(/^\s*[-*+]\s+/gm, ' ') // list bullets
    .replace(/^\s*\d+\.\s+/gm, ' ') // ordered list numbers
    .replace(/^\s*[>|]\s*/gm, ' ') // blockquotes + table pipes
    .replace(/\*\*([^*]*)\*\*/g, '$1') // bold
    .replace(/\*([^*]*)\*/g, '$1') // italic
    .replace(/_([^_]*)_/g, '$1') // underscore emphasis
    .replace(/\s+/g, ' ')
    .toLowerCase()
    .trim()
}

function generate(): Entry[] {
  const contentDir = path.join(process.cwd(), 'content')
  const entries: Entry[] = []

  for (const fp of walkContent(contentDir)) {
    const raw = fs.readFileSync(fp, 'utf-8')
    const { data, content } = matter(raw)
    if (data.noindex) continue

    entries.push({
      url: resolveUrl(fp, contentDir),
      title: data.title || '',
      description: data.description || '',
      category: data.category || '',
      keywords: Array.isArray(data.keywords) ? data.keywords : [],
      text: stripMarkdown(content),
    })
  }

  entries.sort((a, b) => a.title.localeCompare(b.title))
  return entries
}

function main() {
  const args = process.argv.slice(2)
  const outIdx = args.indexOf('--output')
  const outPath =
    outIdx >= 0 ? args[outIdx + 1] : path.join(process.cwd(), 'public', 'search-index.json')

  const entries = generate()
  const dir = path.dirname(outPath)
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(outPath, JSON.stringify(entries), 'utf-8')

  console.log(`✓ search-index.json written to ${outPath} (${entries.length} pages)`)
}

main()
