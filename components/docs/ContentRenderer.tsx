import ReactMarkdown from 'react-markdown'

export function ContentRenderer({ body }: { body: string }) {
  return (
    <ReactMarkdown
      components={{
        a: ({ href, children, ...props }) => (
          <a href={href} target={href?.startsWith('http') ? '_blank' : undefined} rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined} {...props}>
            {children}
          </a>
        ),
        img: ({ src, alt, ...props }) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={alt || ''} loading="lazy" className="rounded-xl border border-zinc-800 my-4" {...props} />
        ),
      }}
    >
      {body}
    </ReactMarkdown>
  )
}
