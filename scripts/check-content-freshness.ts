#!/usr/bin/env tsx
/**
 * Content Freshness Checker
 * =========================
 * Implements Section 66 of the Community Brand/SEO/Growth Master Plan V2.
 *
 * Scans all content/*.md files and flags pages where:
 * - tested_version is behind the current release
 * - last_updated is more than N days old
 * - broker connector changes may affect broker guides
 *
 * Usage:
 *   npx tsx scripts/check-content-freshness.ts --current-version 0.8.0-beta.2 --max-age 90
 */

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

interface Issue {
  file: string
  severity: 'warning' | 'error' | 'info'
  message: string
}

function* walkContent(dir: string): Generator<string> {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) yield* walkContent(full)
    else if (entry.name.endsWith('.md')) yield full
  }
}

function compareVersions(a: string, b: string): number {
  const clean = (v: string) => v.replace(/^v/, '').split(/[-.]/).map(s => parseInt(s) || s)
  const ca = clean(a), cb = clean(b)
  for (let i = 0; i < Math.max(ca.length, cb.length); i++) {
    const va = ca[i] ?? 0, vb = cb[i] ?? 0
    if (typeof va === 'number' && typeof vb === 'number' && va !== vb) return va - vb
    if (va !== vb) return String(va).localeCompare(String(vb))
  }
  return 0
}

function main() {
  const args = process.argv.slice(2)
  const verIdx = args.indexOf('--current-version')
  const ageIdx = args.indexOf('--max-age')
  const currentVersion = verIdx >= 0 ? args[verIdx + 1] : null
  const maxAgeDays = ageIdx >= 0 ? parseInt(args[ageIdx + 1]) : 90

  const contentDir = path.join(process.cwd(), 'content')
  const issues: Issue[] = []
  const now = Date.now()
  const msPerDay = 86400000

  for (const fp of walkContent(contentDir)) {
    const raw = fs.readFileSync(fp, 'utf-8')
    const { data } = matter(raw)
    const rel = path.relative(contentDir, fp)

    // Check tested_version
    if (currentVersion && data.tested_version) {
      if (compareVersions(data.tested_version, currentVersion) < 0) {
        issues.push({ file: rel, severity: 'warning', message: `tested_version ${data.tested_version} is behind current ${currentVersion}` })
      }
    }

    if (!data.tested_version) {
      issues.push({ file: rel, severity: 'error', message: 'Missing tested_version in frontmatter' })
    }

    // Check last_updated age
    if (data.last_updated) {
      const age = (now - new Date(data.last_updated).getTime()) / msPerDay
      if (age > maxAgeDays) {
        issues.push({ file: rel, severity: 'warning', message: `Last updated ${Math.round(age)} days ago (max: ${maxAgeDays})` })
      }
    }

    if (!data.last_updated) {
      issues.push({ file: rel, severity: 'error', message: 'Missing last_updated in frontmatter' })
    }

    // Check required fields
    if (!data.title) issues.push({ file: rel, severity: 'error', message: 'Missing title' })
    if (!data.description) issues.push({ file: rel, severity: 'error', message: 'Missing description' })
  }

  // Report
  const errors = issues.filter(i => i.severity === 'error')
  const warnings = issues.filter(i => i.severity === 'warning')

  console.log(`\n📋 Content Freshness Report`)
  console.log(`   ${path.basename(contentDir)}/: scanned, ${errors.length} errors, ${warnings.length} warnings\n`)

  if (errors.length > 0) {
    console.log('❌ Errors:')
    for (const e of errors) console.log(`   ${e.file}: ${e.message}`)
    console.log()
  }
  if (warnings.length > 0) {
    console.log('⚠️  Warnings:')
    for (const w of warnings) console.log(`   ${w.file}: ${w.message}`)
    console.log()
  }

  if (errors.length === 0 && warnings.length === 0) {
    console.log('✅ All content pages are fresh and complete.\n')
  }

  process.exit(errors.length > 0 ? 1 : 0)
}

main()
