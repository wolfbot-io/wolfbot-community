/** Shared SEO helpers for page-level metadata */

export const OG_IMAGE = 'https://community.wolfbot.io/wolfbot-logo.png'

export function ogImage(title: string, subtitle?: string): string {
  return OG_IMAGE
}

export function pageKeywords(base: string[]): string {
  return ['wolfbot', 'wolfbot community', 'unified trading platform', 'crypto trading', 'mt5', 'self-hosted', ...base].join(', ')
}
