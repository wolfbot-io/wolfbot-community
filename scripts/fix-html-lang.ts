#!/usr/bin/env tsx
/**
 * Post-export <html lang> corrector for wolfbot-community.
 * ==========================================================
 * Root cause: `app/layout.tsx` is Next.js App Router's single SHARED root
 * layout (applies to every route, including every locale page under
 * `/vi/*`, `/zh/*`, ... via the flat `[...slug]` catch-all) and hardcodes
 * `<html lang="en">`. `app/[...slug]/page.tsx` already corrects this at
 * RUNTIME via `document.documentElement.lang = '<real lang>'` (an inline
 * `<script>`), but that only fixes what a browser sees AFTER it executes
 * JS. The static HTML file itself -- what search engines that skip/delay
 * JS execution, social-media link-preview crawlers, and screen readers
 * before hydration all see -- still literally says `lang="en"` on every
 * non-English page. That undermines the whole point of the hreflang/
 * translated-content work (Google's own guidance ties `<html lang>` and
 * hreflang together as one signal).
 *
 * Since this site is `output: 'export'` (next.config.mjs), `next build`
 * has already written one static .html file per route by the time this
 * runs -- so the surgical fix is a post-build pass that rewrites the
 * `<html lang="en">` tag in each exported file to the correct language,
 * derived straight from the file's own path (same convention
 * generate-sitemap.ts/generate-llms-txt.ts already use: first path
 * segment matches a LOCALES[].urlSegment -> that locale, else English).
 * No React/routing change, so it can't affect anything next build itself
 * validates.
 *
 * Usage:
 *   npx tsx scripts/fix-html-lang.ts
 *   npx tsx scripts/fix-html-lang.ts --dir ../out
 */

import fs from 'fs'
import path from 'path'
import { LOCALES } from '../lib/locales'

const argIdx = process.argv.indexOf('--dir')
const OUT_DIR = path.resolve(
  __dirname,
  '..',
  argIdx !== -1 ? process.argv[argIdx + 1] : 'out'
)

const SEGMENT_TO_HTML_LANG = new Map(LOCALES.map((l) => [l.urlSegment, l.htmlLang]))

function langForFile(relPath: string): string {
  // relPath like "zh/getting-started.html", "zh.html" (locale homepage),
  // "getting-started.html", "index.html" (English).
  const firstSegment = relPath.split(path.sep)[0].replace(/\.html$/, '')
  return SEGMENT_TO_HTML_LANG.get(firstSegment) ?? 'en'
}

function walk(dir: string, base = dir): string[] {
  const out: string[] = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      out.push(...walk(full, base))
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      out.push(path.relative(base, full))
    }
  }
  return out
}

function main() {
  if (!fs.existsSync(OUT_DIR)) {
    console.error(`fix-html-lang: export dir not found: ${OUT_DIR}`)
    process.exit(1)
  }

  const files = walk(OUT_DIR)
  let fixed = 0
  let alreadyCorrect = 0
  let noMatch = 0

  for (const rel of files) {
    const lang = langForFile(rel)
    const full = path.join(OUT_DIR, rel)
    const html = fs.readFileSync(full, 'utf8')
    const match = html.match(/<html[^>]*\blang="([^"]*)"/)
    if (!match) {
      noMatch++
      continue
    }
    if (match[1] === lang) {
      alreadyCorrect++
      continue
    }
    const patched = html.replace(/(<html[^>]*\blang=")[^"]*(")/, `$1${lang}$2`)
    fs.writeFileSync(full, patched)
    fixed++
  }

  console.log(
    `✓ fix-html-lang: ${fixed} file(s) corrected, ${alreadyCorrect} already correct, ${noMatch} had no <html lang> to patch (of ${files.length} total)`
  )
}

main()
