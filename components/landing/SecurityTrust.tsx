import Link from 'next/link'

export function SecurityTrust() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-zinc-800">
      <h2 className="text-3xl font-bold text-white text-center mb-4">Built for Trust</h2>
      <p className="text-zinc-400 text-center mb-12 max-w-lg mx-auto">
        WolfBot Community is non-custodial and self-hosted — you control your keys, your infrastructure, your data.
      </p>
      <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {[
          { icon: '🔑', title: 'Trade-Only API', desc: 'Connect with API keys that cannot withdraw funds.' },
          { icon: '💻', title: 'Self-Hosted', desc: 'Runs on your machine. No third party access to credentials.' },
          { icon: '✍️', title: 'Signed Releases', desc: 'Cryptographically signed. Verify checksums before installing.' },
        ].map((item) => (
          <div key={item.title} className="text-center">
            <div className="text-2xl mb-3">{item.icon}</div>
            <h3 className="text-white font-semibold mb-2 text-sm">{item.title}</h3>
            <p className="text-xs text-zinc-500">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link href="/security" className="text-blue-400 hover:underline text-sm">Learn more →</Link>
      </div>
    </section>
  )
}
