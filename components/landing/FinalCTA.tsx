import Link from 'next/link'

export function FinalCTA() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-zinc-800">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Try WolfBot?</h2>
        <p className="text-zinc-400 mb-8">Download WolfBot Community and start with Simulation — free.</p>
        <Link
          href="/download"
          className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold px-10 py-5 rounded-xl text-lg transition-colors"
        >
          Download WolfBot Community
        </Link>
        <p className="mt-4 text-sm text-zinc-600">Free · Windows & Linux · No signup required</p>
      </div>
    </section>
  )
}
