import { ImageResponse } from 'next/og'

// No `export const runtime = 'edge'` here on purpose: this repo builds with
// `output: 'export'` (static export, see next.config.mjs) -- edge runtime
// implies a server function, which a static nginx deploy can't run. Default
// (Node.js) runtime renders this once at build time into a static PNG.
export const alt = 'WolfBot Community — One Platform. Every Market.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Section 96-97: proper 1200x630 OG banner instead of reusing the square
// 1024x1024 app logo, which gets cropped awkwardly by Facebook/Twitter/
// Discord link previews (they expect ~1.91:1, not 1:1). Rendered at build
// time via next/og (Satori) -- no external design tool needed. Same
// wireframe as the GitHub social preview image (plan section 33).
// Colors match prototypes/figma-make's dark cyan design language
// (wolf-bg / wolf-accent) so social-preview cards look consistent with the
// site itself instead of the old blue/zinc scheme.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#060A14',
          backgroundImage:
            'radial-gradient(circle at 25% 15%, rgba(0,201,232,0.18), transparent 45%), radial-gradient(circle at 80% 85%, rgba(0,201,232,0.1), transparent 45%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 16,
              background: 'linear-gradient(135deg, #00E5FF, #00A8C8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 40,
            }}
          >
            🐺
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 44, fontWeight: 800, color: 'white', letterSpacing: -1 }}>
              WolfBot
            </div>
            <div style={{ fontSize: 22, fontWeight: 600, color: '#475569', letterSpacing: 4 }}>
              COMMUNITY
            </div>
          </div>
        </div>

        <div style={{ fontSize: 30, color: '#94A3B8', fontWeight: 500, marginBottom: 20 }}>
          Free Self-Hosted Trading Automation
        </div>

        <div style={{ display: 'flex', gap: 16, marginBottom: 36 }}>
          {['Windows', 'Linux'].map((label) => (
            <div
              key={label}
              style={{
                display: 'flex',
                padding: '8px 20px',
                borderRadius: 999,
                border: '1px solid rgba(255,255,255,0.12)',
                color: '#94A3B8',
                fontSize: 20,
              }}
            >
              {label}
            </div>
          ))}
        </div>

        <div style={{ fontSize: 22, color: '#00C9E8', fontWeight: 600 }}>
          community.wolfbot.io
        </div>
      </div>
    ),
    { ...size }
  )
}
