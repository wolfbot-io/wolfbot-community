import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface ContentMeta {
  title: string
  description: string
  tested_version: string
  last_updated: string
  platforms: string[]
  brokers?: string[]
  category: string
  difficulty?: string
  estimated_time?: string
  next_guide?: string
  previous_guide?: string
  related_guides?: string[]
  keywords?: string[]
  os_tested?: string[]
  sitemap_priority?: number
}

export interface ContentPage {
  slug: string
  meta: ContentMeta
  body: string
}

const CONTENT_DIR = path.join(process.cwd(), 'content')

/** Load a single content page by slug */
export async function loadContent(slug: string): Promise<ContentPage | null> {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)

  return {
    slug,
    meta: data as ContentMeta,
    body: content,
  }
}

/** List all content pages */
export function listContent(): ContentPage[] {
  const results: ContentPage[] = []

  function walk(dir: string, basePath = '') {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const fullPath = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        walk(fullPath, path.join(basePath, entry.name))
      } else if (entry.name.endsWith('.md')) {
        const slug = path.join(basePath, entry.name.replace('.md', ''))
        const raw = fs.readFileSync(fullPath, 'utf-8')
        const { data } = matter(raw)
        results.push({ slug, meta: data as ContentMeta, body: '' })
      }
    }
  }

  walk(CONTENT_DIR)
  return results
}

/** Build breadcrumb segments from a content slug */
export function slugToBreadcrumbs(slug: string): { label: string; href: string }[] {
  const segments = slug.split('/')
  const crumbs: { label: string; href: string }[] = [
    { label: 'Home', href: '/' },
  ]
  let cumulative = ''
  for (const seg of segments) {
    cumulative += `/${seg}`
    const label = seg
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase())
    crumbs.push({ label, href: cumulative })
  }
  return crumbs
}
