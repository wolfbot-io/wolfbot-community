export function GitHubCommunityBlock() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-zinc-800">
      <h2 className="text-3xl font-bold text-white text-center mb-4">
        Join the Community
      </h2>
      <p className="text-zinc-400 text-center mb-12 max-w-lg mx-auto">
        Follow development, ask questions and share feedback.
      </p>

      <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
        {[
          {
            label: 'GitHub',
            desc: 'Stars, releases, activity',
            href: 'https://github.com/wolfbot-io/wolfbot-community',
          },
          {
            label: 'Discussions',
            desc: 'Q&A, ideas, show & tell',
            href: 'https://github.com/wolfbot-io/wolfbot-community/discussions',
          },
          {
            label: 'Roadmap',
            desc: 'What we are building next',
            href: 'https://github.com/orgs/wolfbot-io/projects/1',
          },
        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-zinc-800 rounded-xl p-6 text-center hover:border-zinc-600 transition-colors bg-zinc-900/50"
          >
            <div className="text-white font-semibold mb-1">{item.label}</div>
            <div className="text-xs text-zinc-500">{item.desc}</div>
          </a>
        ))}
      </div>
    </section>
  )
}
