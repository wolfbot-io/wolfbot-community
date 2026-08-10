import Link from 'next/link'

const STEPS = [
  {
    number: 1,
    title: 'Download',
    desc: 'Windows Setup.exe or Linux .deb',
  },
  {
    number: 2,
    title: 'Install',
    desc: 'Double-click, follow the setup wizard',
  },
  {
    number: 3,
    title: 'Start Simulation',
    desc: 'Test strategies risk-free with virtual funds',
  },
]

export function InstallSteps() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-3xl font-bold text-white text-center mb-4">
        Install in Minutes
      </h2>
      <p className="text-zinc-400 text-center mb-12 max-w-lg mx-auto">
        No Docker, no Python, no terminal required. Download and run.
      </p>

      <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
        {STEPS.map((step) => (
          <div key={step.number} className="text-center">
            <div className="w-12 h-12 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center text-xl font-bold mx-auto mb-4">
              {step.number}
            </div>
            <h3 className="text-white font-semibold mb-1">{step.title}</h3>
            <p className="text-sm text-zinc-500">{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/install/windows"
          className="text-blue-400 hover:underline text-sm"
        >
          Windows step-by-step →
        </Link>
        <span className="text-zinc-700 mx-3">·</span>
        <Link
          href="/install/linux"
          className="text-blue-400 hover:underline text-sm"
        >
          Linux step-by-step →
        </Link>
      </div>
    </section>
  )
}
