import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

const root = process.cwd()
const academyDir = path.join(root, 'content', 'academy')
const vietnameseDir = path.join(root, 'content', 'vi', 'academy')
const errors: string[] = []

function wordCount(value: string): number {
  return value.trim().split(/\s+/).filter(Boolean).length
}

const researchFiles = fs.readdirSync(academyDir)
  .filter((name) => name.endsWith('.md'))
  .filter((name) => {
    const parsed = matter(fs.readFileSync(path.join(academyDir, name), 'utf8'))
    return parsed.data.content_type === 'research'
  })

for (const name of researchFiles) {
  const englishPath = path.join(academyDir, name)
  const vietnamesePath = path.join(vietnameseDir, name)
  const slug = name.replace(/\.md$/, '')
  const english = matter(fs.readFileSync(englishPath, 'utf8'))

  if (!String(english.data.category ?? '').startsWith('ai-trading-')) {
    errors.push(`${name}: research category must start with ai-trading-`)
  }
  if (wordCount(english.content) < 750) errors.push(`${name}: English article is below 750 words`)
  if (!Array.isArray(english.data.citations) || english.data.citations.length === 0) {
    errors.push(`${name}: missing primary-source citations`)
  }
  if (!english.content.includes('## Primary source')) errors.push(`${name}: missing Primary sources section`)

  if (!fs.existsSync(vietnamesePath)) {
    errors.push(`${name}: missing Vietnamese translation`)
    continue
  }

  const vietnamese = matter(fs.readFileSync(vietnamesePath, 'utf8'))
  if (vietnamese.data.lang !== 'vi') errors.push(`vi/${name}: lang must be vi`)
  if (vietnamese.data.translation_of !== `academy/${slug}`) {
    errors.push(`vi/${name}: translation_of must be academy/${slug}`)
  }
  if (vietnamese.data.category !== english.data.category) {
    errors.push(`vi/${name}: category must match English source`)
  }
  if (wordCount(vietnamese.content) < 700) errors.push(`vi/${name}: Vietnamese article is below 700 words`)
  if (!Array.isArray(vietnamese.data.citations) || vietnamese.data.citations.length === 0) {
    errors.push(`vi/${name}: missing primary-source citations`)
  }
  if (!vietnamese.content.includes('## Nguồn chính')) errors.push(`vi/${name}: missing Nguồn chính section`)
}

if (errors.length > 0) {
  console.error('[RESEARCH-CONTENT] validation failed:')
  for (const error of errors) console.error(`- ${error}`)
  process.exit(1)
}

console.log(`[RESEARCH-CONTENT] validated ${researchFiles.length} English/Vietnamese research article pairs`)
