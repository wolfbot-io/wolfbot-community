import Link from 'next/link'

// Dark theme per prototypes/figma-make design language.
const STEPS = [
  { number: 1, title: 'Download', desc: 'Windows Setup.exe or Linux .deb' },
  { number: 2, title: 'Install', desc: 'Double-click, follow the setup wizard' },
  { number: 3, title: 'Connect Markets', desc: 'Add crypto exchanges and MT5 brokers' },
]

export function InstallSteps() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-3xl font-bold text-white text-center mb-4">Install in Minutes</h2>
      <p className="text-center mb-12 max-w-lg mx-auto" style={{ color: '#94A3B8' }}>
        One platform for all your markets. No Docker, no terminal required.
      </p>
      <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
        {STEPS.map((step) => (
          <div key={step.number} className="text-center">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4"
              style={{ background: 'rgba(0,201,232,0.1)', color: '#00C9E8' }}
            >
              {step.number}
            </div>
            <h3 className="text-white font-semibold mb-1">{step.title}</h3>
            <p className="text-sm" style={{ color: '#94A3B8' }}>{step.desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link href="/install/windows" className="hover:underline text-sm" style={{ color: '#00C9E8' }}>Windows guide →</Link>
        <span className="mx-3" style={{ color: '#475569' }}>·</span>
        <Link href="/install/linux" className="hover:underline text-sm" style={{ color: '#00C9E8' }}>Linux guide →</Link>
      </div>
    </section>
  )
}
