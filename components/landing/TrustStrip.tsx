export function TrustStrip() {
  return (
    <div className="border-y border-zinc-800 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-zinc-500">
          <span>✅ Free Community Edition</span>
          <span className="hidden sm:inline text-zinc-700">·</span>
          <span>☁️ No Cloud subscription required</span>
          <span className="hidden sm:inline text-zinc-700">·</span>
          <span>🪟🐧 Windows &amp; Linux</span>
          <span className="hidden sm:inline text-zinc-700">·</span>
          <span>🔒 Official WolfBot.io release</span>
        </div>
      </div>
    </div>
  )
}
