/** @type {import('next').NextConfig} */
import createMDX from '@next/mdx'

const nextConfig = {
  // Static export: the Dockerfile copies the resulting out/ into an
  // nginx:alpine runtime image (see docker/nginx.conf), no Node.js server
  // at runtime. Every route is fully static (see app/[...slug]/page.tsx
  // generateStaticParams, no app/api/*, no middleware.ts), so export mode
  // is safe. Cache headers and redirects live in docker/nginx.conf instead
  // of headers()/redirects() here, which Next.js does not support in
  // output: 'export' mode.
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
