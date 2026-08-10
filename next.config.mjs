/** @type {import('next').NextConfig} */
import createMDX from '@next/mdx'

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  images: {
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      { protocol: 'https', hostname: 'community.wolfbot.io' },
      { protocol: 'https', hostname: 'github.com' },
    ],
  },
  async headers() {
    return [
      {
        source: '/assets/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ]
  },
  async redirects() {
    return [
      { source: '/docs', destination: '/getting-started', permanent: true },
      { source: '/github', destination: 'https://github.com/wolfbot-io/wolfbot-community', permanent: false },
      { source: '/releases/latest', destination: 'https://github.com/wolfbot-io/wolfbot-community/releases/latest', permanent: false },
    ]
  },
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
})

export default withMDX(nextConfig)
