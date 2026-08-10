/**
 * Generate RSS feed from content and release data
 * Section 78: RSS / Changelog Feed
 * 
 * Usage: npx tsx scripts/generate-rss.ts > public/rss.xml
 */

import fs from 'fs'
import path from 'path'

const SITE_URL = 'https://community.wolfbot.io'
const SITE_TITLE = 'WolfBot Community'
const SITE_DESC = 'Free self-hosted unified trading platform — One Platform. Every Market.'

interface ContentItem {
  title: string
  description: string
  slug: string
  date: string
}

function escapeXml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

function getContentFiles(dir: string, basePath = ''): ContentItem[] {
  const items: ContentItem[] = []
  const entries = fs.readdirSync(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      items.push(...getContentFiles(fullPath, `${basePath}/${entry.name}`))
    } else if (entry.name.endsWith('.md')) {
      const content = fs.readFileSync(fullPath, 'utf-8')
      const titleMatch = content.match(/^title:\s*"([^"]+)"/m)
      const descMatch = content.match(/^description:\s*"([^"]+)"/m)
      const dateMatch = content.match(/^last_updated:\s*"([^"]+)"/m)

      if (titleMatch) {
        const slug = `${basePath}/${entry.name.replace('.md', '')}`.replace(/^\/+/, '')
        items.push({
          title: titleMatch[1],
          description: descMatch ? descMatch[1] : '',
          slug,
          date: dateMatch ? dateMatch[1] : '2026-08-11',
        })
      }
    }
  }
  return items
}

function generateRss(): string {
  const contentDir = path.join(process.cwd(), 'content')
  const items = getContentFiles(contentDir).sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  let rss = '<?xml version="1.0" encoding="UTF-8"?>\n'
  rss += '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">\n'
  rss += '  <channel>\n'
  rss += `    <title>${escapeXml(SITE_TITLE)}</title>\n`
  rss += `    <link>${SITE_URL}</link>\n`
  rss += `    <description>${escapeXml(SITE_DESC)}</description>\n`
  rss += `    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>\n`
  rss += `    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>\n`

  for (const item of items.slice(0, 30)) {
    rss += '    <item>\n'
    rss += `      <title>${escapeXml(item.title)}</title>\n`
    rss += `      <link>${SITE_URL}/${item.slug}</link>\n`
    rss += `      <description>${escapeXml(item.description)}</description>\n`
    rss += `      <pubDate>${new Date(item.date).toUTCString()}</pubDate>\n`
    rss += `      <guid>${SITE_URL}/${item.slug}</guid>\n`
    rss += '    </item>\n'
  }

  rss += '  </channel>\n'
  rss += '</rss>\n'
  return rss
}

// Generate and output
if (require.main === module) {
  console.log(generateRss())
}

export { generateRss }
