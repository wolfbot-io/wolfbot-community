#!/usr/bin/env tsx
/**
 * Sitemap Generator for wolfbot-community (Next.js)
 * ==================================================
 * Implements Section 52 of the Community Brand/SEO/Growth Master Plan V2.
 *
 * Reads content/ directory frontmatter and generates sitemap.xml.
 *
 * Usage:
 *   npx tsx scripts/generate-sitemap.ts
 *   npx tsx scripts/generate-sitemap.ts --output ../public/sitemap.xml
 */

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { LOCALES } from '../lib/locales'

const BASE_URL = 'https://community.wolfbot.io'

const PRIORITY: Record<string, number> = {
  install: 0.9, 'getting-started': 0.9, 'broker-setup': 0.85,
  simulation: 0.85, 'live-trading': 0.8, 'risk-controls': 0.8,
  automation: 0.8, 'smart-terminal': 0.8, 'external-signals': 0.7, 'custom-strategies': 0.7,
  updates: 0.7, backup: 0.7, troubleshooting: 0.8, academy: 0.7,
  security: 0.8, faq: 0.8, release: 0.85,
}

const CHANGEFREQ: Record<string, string> = {
  updates: 'daily', release: 'daily',
  install: 'weekly', 'getting-started': 'weekly', 'broker-setup': 'weekly',
  simulation: 'weekly', 'live-trading': 'weekly', 'risk-controls': 'weekly',
  automation: 'weekly', 'smart-terminal': 'weekly', troubleshooting: 'weekly',
  academy: 'monthly', security: 'monthly', faq: 'monthly',
  backup: 'monthly', 'external-signals': 'monthly', 'custom-strategies': 'monthly',
}

interface Entry {
  url: string; lastmod: string; changefreq: string; priority: string
  alternates?: { lang: string; href: string }[]
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
  if (rel === 'getting-started') return '/getting-started'
  return `/${rel}`
}

/** hreflang alternates for a content page (§91 multilingual): every page
 *  advertises English plus every locale that actually has a translated
 *  file — a full, reciprocal cluster (never a dangling alternate). */
function alternatesFor(filepath: string, contentDir: string): { lang: string; href: string }[] {
  const rel = path.relative(contentDir, filepath).replace(/\\/g, '/')
  const localeHit = LOCALES.find((l) => rel.startsWith(`${l.urlSegment}/`))
  const englishRel = localeHit ? rel.slice(localeHit.urlSegment.length + 1) : rel
  const englishRelNoExt = englishRel.replace(/\.md$/, '')

  const alternates: { lang: string; href: string }[] = [
    { lang: 'en', href: `${BASE_URL}/${englishRelNoExt}` },
  ]
  for (const l of LOCALES) {
    if (fs.existsSync(path.join(contentDir, l.urlSegment, englishRel))) {
      alternates.push({ lang: l.hreflang, href: `${BASE_URL}/${l.urlSegment}/${englishRelNoExt}` })
    }
  }
  return alternates
}

function generate(): string {
  const contentDir = path.join(process.cwd(), 'content')
  const entries: Entry[] = []

  // Static pages
  const staticPages: [string, string, string, number][] = [
    ['/', '2026-08-11', 'daily', 1.0],
    ['/download', '2026-08-11', 'daily', 0.95],
    ['/getting-started', '2026-08-11', 'weekly', 0.9],
    ['/community-vs-cloud', '2026-08-11', 'monthly', 0.8],
    ['/faq', '2026-08-11', 'monthly', 0.8],
    ['/security', '2026-08-11', 'monthly', 0.7],
    ['/brokers', '2026-08-11', 'weekly', 0.8],
  ]

  for (const [url, lastmod, freq, prio] of staticPages) {
    entries.push({ url: `${BASE_URL}${url}`, lastmod, changefreq: freq, priority: prio.toFixed(1) })
  }

  // Content pages
  for (const fp of walkContent(contentDir)) {
    const raw = fs.readFileSync(fp, 'utf-8')
    const { data } = matter(raw)
    if (data.noindex) continue

    const url = resolveUrl(fp, contentDir)
    const category: string = data.category || ''
    const prio = data.sitemap_priority ?? PRIORITY[category] ?? 0.5
    const freq = CHANGEFREQ[category] || 'weekly'
    const lastmod: string = data.last_updated || '2026-08-11'
    const alternates = alternatesFor(fp, contentDir)

    entries.push({
      url: `${BASE_URL}${url}`,
      lastmod,
      changefreq: freq,
      priority: prio.toFixed(1),
      alternates: alternates.length ? alternates : undefined,
    })
  }

  // Deduplicate by URL — a couple of pages exist both as an explicit static
  // page AND as a content/*.md file (e.g. getting-started, community-vs-cloud).
  // A sitemap must not repeat the same <loc>. Keep the first entry but merge in
  // any hreflang alternates carried by the duplicate (the content-file entry).
  const byUrl = new Map<string, Entry>()
  for (const e of entries) {
    const existing = byUrl.get(e.url)
    if (!existing) {
      byUrl.set(e.url, e)
    } else if (e.alternates?.length) {
      const merged = new Map<string, string>()
      for (const a of [...(existing.alternates ?? []), ...e.alternates]) {
        merged.set(a.lang, a.href)
      }
      existing.alternates = [...merged].map(([lang, href]) => ({ lang, href }))
    }
  }
  const unique = [...byUrl.values()]

  // Sort by priority desc
  unique.sort((a, b) => parseFloat(b.priority) - parseFloat(a.priority))

  const urlElements = unique.map(e => {
    const alt = (e.alternates ?? [])
      .map((a) => `    <xhtml:link rel="alternate" hreflang="${a.lang}" href="${a.href}" />`)
      .join('\n')
    const altBlock = alt ? `\n${alt}\n  ` : ''
    return `  <url>\n    <loc>${e.url}</loc>\n    <lastmod>${e.lastmod}</lastmod>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>${altBlock}</url>`
  }).join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urlElements}\n</urlset>\n`

  return xml
}

function main() {
  const args = process.argv.slice(2)
  const outIdx = args.indexOf('--output')
  const outPath = outIdx >= 0 ? args[outIdx + 1] : path.join(process.cwd(), 'public', 'sitemap.xml')

  const xml = generate()
  const dir = path.dirname(outPath)
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(outPath, xml, 'utf-8')

  const count = (xml.match(/<url>/g) || []).length
  console.log(`✓ Sitemap written to ${outPath} (${count} URLs)`)
}

main()
