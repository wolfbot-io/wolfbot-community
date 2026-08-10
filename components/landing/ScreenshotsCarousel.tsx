export function ScreenshotsCarousel() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-zinc-800">
      <h2 className="text-3xl font-bold text-white text-center mb-12">
        See WolfBot Community
      </h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {['Dashboard', 'Smart Terminal', 'Bots', 'Risk Controls'].map((label) => (
          <div
            key={label}
            className="rounded-xl border border-zinc-800 bg-zinc-900 overflow-hidden"
          >
            <div className="h-8 bg-zinc-800 flex items-center px-4">
              <span className="text-xs text-zinc-500">{label}</span>
            </div>
            <div className="aspect-video bg-zinc-950 flex items-center justify-center text-zinc-700 text-sm">
              {label} Screenshot
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
