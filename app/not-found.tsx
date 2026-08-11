import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-32 text-center">
      <div className="text-8xl font-bold text-zinc-800 mb-6">404</div>
      <h1 className="text-2xl font-bold text-white mb-4">Page not found</h1>
      <p className="text-zinc-400 mb-8 max-w-md mx-auto">
        The page you are looking for doesn&apos;t exist or has been moved.
        Try searching or browse the documentation.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link href="/" className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-3 rounded-xl">
          Go Home
        </Link>
        <Link href="/getting-started" className="border border-zinc-700 hover:border-zinc-500 text-zinc-300 font-medium px-6 py-3 rounded-xl">
          Getting Started
        </Link>
        <Link href="/docs" className="text-zinc-400 hover:text-white text-sm underline">
          Browse Docs
        </Link>
      </div>
      <p className="mt-12 text-xs text-zinc-700">
        WolfBot Community — One Platform. Every Market.
      </p>
    </div>
  )
}
