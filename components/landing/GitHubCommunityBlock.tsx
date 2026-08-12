// Dark theme + card-hover per prototypes/figma-make design language.
export function GitHubCommunityBlock() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
      <h2 className="text-3xl font-bold text-white text-center mb-4">Join the Community</h2>
      <p className="text-center mb-12 max-w-lg mx-auto" style={{ color: '#94A3B8' }}>Follow development, ask questions and share feedback.</p>
      <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
        {[
          { label: 'GitHub', desc: 'Stars, releases, activity', href: 'https://github.com/wolfbot-io/wolfbot-community' },
          { label: 'Discussions', desc: 'Q&A, ideas, show & tell', href: 'https://github.com/wolfbot-io/wolfbot-community/discussions' },
          { label: 'Roadmap', desc: 'What we are building next', href: 'https://github.com/orgs/wolfbot-io/projects/1' },
        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl p-6 text-center border card-hover"
            style={{ background: '#0F172A', borderColor: 'rgba(255,255,255,0.07)' }}
          >
            <div className="text-white font-semibold mb-1">{item.label}</div>
            <div className="text-xs" style={{ color: '#94A3B8' }}>{item.desc}</div>
          </a>
        ))}
      </div>
    </section>
  )
}
