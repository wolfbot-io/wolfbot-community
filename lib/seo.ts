/** Shared SEO helpers for page-level metadata */
export function ogImage(title: string, subtitle?: string): string {
  // In production, use an OG image generation service or static template
  return `https://community.wolfbot.io/api/og?title=${encodeURIComponent(title)}${subtitle ? `&subtitle=${encodeURIComponent(subtitle)}` : ''}`
}

export function pageKeywords(base: string[]): string {
  return ['wolfbot', 'wolfbot community', 'trading bot', 'crypto trading', 'self-hosted', ...base].join(', ')
}
