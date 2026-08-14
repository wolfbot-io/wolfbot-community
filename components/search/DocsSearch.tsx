'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { trackEvent } from '@/lib/analytics'

interface SearchEntry {
  url: string
  title: string
  description: string
  category: string
  keywords: string[]
  text: string
}

const MAX_RESULTS = 8

/** Client-side docs search (PLAN §146). The site is a static export, so this
 *  loads the prebuilt public/search-index.json and filters it in the browser.
 *  Zero-result queries are tracked (docs_search_zero_result) so missing
 *  content can be identified — §146's "zero-result terms identify missing
 *  content" loop. */
export function DocsSearch() {
  const [index, setIndex] = useState<SearchEntry[]>([])
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const boxRef = useRef<HTMLDivElement>(null)
  const lastTracked = useRef<string>('')

  useEffect(() => {
    let cancelled = false
    fetch('/search-index.json')
      .then((r) => (r.ok ? r.json() : []))
      .then((data: SearchEntry[]) => {
        if (!cancelled) setIndex(Array.isArray(data) ? data : [])
      })
      .catch(() => {
        if (!cancelled) setIndex([])
      })
    return () => {
      cancelled = true
    }
  }, [])

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q || q.length < 2) return []
    const terms = q.split(/\s+/)
    return index
      .filter((e) => {
        const hay = `${e.title} ${e.description} ${e.keywords.join(' ')} ${e.text}`
        return terms.every((t) => hay.includes(t))
      })
      .slice(0, MAX_RESULTS)
  }, [index, query])

  // Debounced analytics: log the query + result count once per settled query.
  useEffect(() => {
    const q = query.trim().toLowerCase()
    if (q.length < 3) return
    if (lastTracked.current === q) return
    const t = setTimeout(() => {
      lastTracked.current = q
      trackEvent('docs_search', { query: q, results: results.length })
      if (results.length === 0) trackEvent('docs_search_zero_result', { query: q })
    }, 600)
    return () => clearTimeout(t)
  }, [query, results])

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  const hasQuery = query.trim().length >= 2

  return (
    <div ref={boxRef} className="relative w-full max-w-md mx-auto mb-12">
      <input
        type="search"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value)
          setOpen(true)
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={(e) => {
          if (e.key === 'Escape') setOpen(false)
          if (e.key === 'Enter' && results.length > 0) {
            window.location.href = results[0].url
          }
        }}
        placeholder="Search the Academy…"
        aria-label="Search the Academy"
        className="w-full rounded-lg px-4 py-2.5 text-sm text-white outline-none border"
        style={{ background: '#0F172A', borderColor: 'rgba(255,255,255,0.12)' }}
      />

      {open && hasQuery && (
        <div
          className="absolute z-20 mt-2 w-full rounded-lg border shadow-xl overflow-hidden"
          style={{ background: '#0F172A', borderColor: 'rgba(255,255,255,0.1)' }}
        >
          {results.length === 0 ? (
            <p className="px-4 py-3 text-sm" style={{ color: '#94A3B8' }}>
              No results for &quot;{query.trim()}&quot;. Try a broader term, or
              browse the sections below.
            </p>
          ) : (
            results.map((r) => (
              <a
                key={r.url}
                href={r.url}
                className="block px-4 py-3 hover:bg-white/5 transition-colors"
              >
                <span className="block text-sm font-medium text-white">{r.title}</span>
                <span className="block text-xs mt-0.5 line-clamp-1" style={{ color: '#94A3B8' }}>
                  {r.description}
                </span>
              </a>
            ))
          )}
        </div>
      )}
    </div>
  )
}
