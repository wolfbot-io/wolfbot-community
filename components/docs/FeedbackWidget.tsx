'use client'

import { useState } from 'react'

export function FeedbackWidget({ slug }: { slug: string }) {
  const [voted, setVoted] = useState<'yes' | 'no' | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const handleVote = (vote: 'yes' | 'no') => {
    setVoted(vote)
    setSubmitted(true)
  }

  if (submitted && voted) {
    return (
      <div className="mt-16 pt-8 border-t border-zinc-800">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-green-400">✅</span>
          <span className="text-zinc-300">Thanks for your feedback!</span>
          {voted === 'no' && (
            <a
              href={`https://github.com/wolfbot-io/wolfbot-community/issues/new?template=doc_feedback.yml&title=Feedback%3A+${encodeURIComponent(slug)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline ml-2"
            >
              Tell us what to improve
            </a>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="mt-16 pt-8 border-t border-zinc-800">
      <div className="flex items-center gap-4">
        <span className="text-sm text-zinc-400">Was this page helpful?</span>
        <button
          onClick={() => handleVote('yes')}
          className="px-4 py-1.5 text-sm border border-zinc-700 rounded-lg text-zinc-300 hover:border-green-500/50 hover:text-green-400 hover:bg-green-500/5 transition-colors"
        >
          👍 Yes
        </button>
        <button
          onClick={() => handleVote('no')}
          className="px-4 py-1.5 text-sm border border-zinc-700 rounded-lg text-zinc-300 hover:border-red-500/50 hover:text-red-400 hover:bg-red-500/5 transition-colors"
        >
          👎 No
        </button>
      </div>
    </div>
  )
}
