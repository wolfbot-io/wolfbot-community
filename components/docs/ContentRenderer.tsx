import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'

export function ContentRenderer({ body }: { body: string }) {
  return (
    <ReactMarkdown
      // GFM (tables, strikethrough, autolinks, task lists) is a
      // CommonMark extension react-markdown doesn't enable by default --
      // without this, every `| a | b |` pipe table in content/ rendered as
      // a raw plain-text paragraph with literal `|` characters instead of
      // an actual <table>. Nearly every content page (19/20) has at least
      // one table, so this was a widespread rendering bug, not cosmetic.
      remarkPlugins={[remarkGfm]}
      // rehype-slug gives every heading a real `id` (e.g. `## For Technical
      // Users` -> `id="for-technical-users"`) so in-page anchor links like
      // `[jump](#for-technical-users)` actually work instead of silently
      // scrolling to the top of the page.
      rehypePlugins={[rehypeSlug]}
      components={{
        a: ({ href, children, ...props }) => (
          <a href={href} target={href?.startsWith('http') ? '_blank' : undefined} rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined} {...props}>
            {children}
          </a>
        ),
        img: ({ src, alt, ...props }) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={alt || ''} loading="lazy" className="rounded-xl border border-wolf-border my-4" {...props} />
        ),
      }}
    >
      {body}
    </ReactMarkdown>
  )
}
