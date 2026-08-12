'use client'

import { useState } from 'react'

// Dark theme per prototypes/figma-make design language.
export function FeedbackWidget({ slug }: { slug: string }) {
  const [voted, setVoted] = useState<'yes' | 'no' | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const handleVote = (vote: 'yes' | 'no') => {
    setVoted(vote)
    setSubmitted(true)
  }

  if (submitted && voted) {
    return (
      <div className="mt-16 pt-8 border-t border-wolf-border">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-wolf-green">✅</span>
          <span className="text-wolf-text2">Thanks for your feedback!</span>
          {voted === 'no' && (
            <a
              href={`https://github.com/wolfbot-io/wolfbot-community/issues/new?template=doc_feedback.yml&title=Feedback%3A+${encodeURIComponent(slug)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-wolf-accent hover:underline ml-2"
            >
              Tell us what to improve
            </a>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="mt-16 pt-8 border-t border-wolf-border">
      <div className="flex items-center gap-4">
        <span className="text-sm text-wolf-text2">Was this page helpful?</span>
        <button
          onClick={() => handleVote('yes')}
          className="px-4 py-1.5 text-sm border border-wolf-border2 rounded-lg text-wolf-text2 hover:border-wolf-green/40 hover:text-wolf-green hover:bg-wolf-green/10 transition-colors"
        >
          👍 Yes
        </button>
        <button
          onClick={() => handleVote('no')}
          className="px-4 py-1.5 text-sm border border-wolf-border2 rounded-lg text-wolf-text2 hover:border-wolf-red/40 hover:text-wolf-red hover:bg-wolf-red/10 transition-colors"
        >
          👎 No
        </button>
      </div>
    </div>
  )
}
