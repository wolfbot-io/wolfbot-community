import Link from 'next/link'

// Dark theme per prototypes/figma-make design language.
export function CommunityVsCloud() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
      <h2 className="text-3xl font-bold text-white text-center mb-4">Community or Cloud?</h2>
      <p className="text-center mb-12 max-w-lg mx-auto" style={{ color: '#94A3B8' }}>
        Self-host for free or use the managed WolfBot experience. Same platform. Same markets.
      </p>
      <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="rounded-xl p-8 border" style={{ background: 'rgba(0,201,232,0.06)', borderColor: 'rgba(0,201,232,0.28)' }}>
          <h3 className="text-xl font-bold text-white mb-2">WolfBot Community</h3>
          <div className="text-3xl font-bold mb-4" style={{ color: '#00C9E8' }}>Free</div>
          <ul className="space-y-3 text-sm" style={{ color: '#94A3B8' }}>
            <li>✅ Self-hosted on your machine</li>
            <li>✅ Crypto + Futures + MT5</li>
            <li>✅ Full unified trading platform</li>
            <li>✅ Simulation mode</li>
            <li>✅ Community support</li>
            <li style={{ color: '#475569' }}>— You manage infrastructure</li>
            <li style={{ color: '#475569' }}>— You handle updates</li>
          </ul>
        </div>
        <div className="rounded-xl p-8 border" style={{ background: '#0F172A', borderColor: 'rgba(255,255,255,0.07)' }}>
          <h3 className="text-xl font-bold text-white mb-2">WolfBot Cloud</h3>
          <div className="text-3xl font-bold mb-4" style={{ color: '#94A3B8' }}>Subscription</div>
          <ul className="space-y-3 text-sm" style={{ color: '#94A3B8' }}>
            <li>✅ Fully managed hosting</li>
            <li>✅ Crypto + Futures + MT5</li>
            <li>✅ Full unified trading platform</li>
            <li>✅ Simulation mode</li>
            <li>✅ Priority support</li>
            <li>✅ Automatic updates</li>
            <li>✅ No infrastructure maintenance</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8">
        <Link href="/community-vs-cloud" className="hover:underline text-sm" style={{ color: '#00C9E8' }}>Detailed comparison →</Link>
      </div>
    </section>
  )
}
