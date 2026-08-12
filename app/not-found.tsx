import Link from 'next/link'

// Dark theme per prototypes/figma-make design language.
export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-32 text-center">
      <div className="text-8xl font-bold mb-6" style={{ color: '#131E33' }}>404</div>
      <h1 className="text-2xl font-bold text-white mb-4">Page not found</h1>
      <p className="mb-8 max-w-md mx-auto" style={{ color: '#94A3B8' }}>
        The page you are looking for doesn&apos;t exist or has been moved.
        Try searching or browse the documentation.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href="/"
          className="font-medium px-6 py-3 rounded-xl accent-glow"
          style={{ background: '#00C9E8', color: '#050C18' }}
        >
          Go Home
        </Link>
        <Link
          href="/getting-started"
          className="border font-medium px-6 py-3 rounded-xl"
          style={{ borderColor: 'rgba(255,255,255,0.12)', color: '#94A3B8' }}
        >
          Getting Started
        </Link>
        <Link href="/docs" className="text-sm underline" style={{ color: '#94A3B8' }}>
          Browse Docs
        </Link>
      </div>
      <p className="mt-12 text-xs" style={{ color: '#475569' }}>
        WolfBot Community — One Platform. Every Market.
      </p>
    </div>
  )
}
