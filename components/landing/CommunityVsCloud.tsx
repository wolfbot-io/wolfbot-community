import Link from 'next/link'

export function CommunityVsCloud() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-zinc-800">
      <h2 className="text-3xl font-bold text-white text-center mb-4">
        Community or Cloud?
      </h2>
      <p className="text-zinc-400 text-center mb-12 max-w-lg mx-auto">
        Self-host for free or use the managed WolfBot experience.
      </p>

      <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Community */}
        <div className="border border-blue-900/50 rounded-xl p-8 bg-blue-950/10">
          <h3 className="text-xl font-bold text-white mb-2">WolfBot Community</h3>
          <div className="text-3xl font-bold text-blue-400 mb-4">Free</div>
          <ul className="space-y-3 text-sm text-zinc-400">
            <li>✅ Self-hosted on your machine</li>
            <li>✅ Full trading engine</li>
            <li>✅ All brokers</li>
            <li>✅ Simulation mode</li>
            <li>✅ Community support</li>
            <li className="text-zinc-600">— You manage infrastructure</li>
            <li className="text-zinc-600">— You handle updates</li>
          </ul>
        </div>

        {/* Cloud */}
        <div className="border border-zinc-800 rounded-xl p-8 bg-zinc-900/50">
          <h3 className="text-xl font-bold text-white mb-2">WolfBot Cloud</h3>
          <div className="text-3xl font-bold text-zinc-400 mb-4">Subscription</div>
          <ul className="space-y-3 text-sm text-zinc-400">
            <li>✅ Fully managed hosting</li>
            <li>✅ Full trading engine</li>
            <li>✅ All brokers</li>
            <li>✅ Simulation mode</li>
            <li>✅ Priority support</li>
            <li>✅ Automatic updates</li>
            <li>✅ No infrastructure maintenance</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-8">
        <Link href="/community-vs-cloud" className="text-blue-400 hover:underline text-sm">
          Detailed comparison →
        </Link>
      </div>
    </section>
  )
}
