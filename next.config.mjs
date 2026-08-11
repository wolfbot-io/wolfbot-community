/** @type {import('next').NextConfig} */
import createMDX from '@next/mdx'

const nextConfig = {
  // Static export: Cloudflare Pages serves this as pure HTML/CSS/JS, no Node.js
  // server or edge adapter required. Every route is fully static (see
  // app/[...slug]/page.tsx generateStaticParams, no app/api/*, no middleware.ts),
  // so export mode is safe. Cache headers and redirects moved to
  // public/_headers and public/_redirects because Next.js does not support
  // headers()/redirects() config functions in output: 'export' mode.
  output: 'export',
  pageExtensions: ['ts', 'tsx', 'mdx'],
  images: {
    // No next/image remote optimization server in static export.
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      { protocol: 'https', hostname: 'community.wolfbot.io' },
      { protocol: 'https', hostname: 'github.com' },
    ],
  },
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
})

export default withMDX(nextConfig)
