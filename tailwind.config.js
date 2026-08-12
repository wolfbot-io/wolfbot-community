/** @type {import('tailwindcss').Config} */
// Design tokens ported from prototypes/figma-make/src/tokens/colors.ts and
// prototypes/figma-make/src/index.css (single source of truth for WolfBot's
// design language — see docs/plans/WOLFBOT_FIGMA_MAKE_UI_PORTING_FROM_UX8.md).
// Community site adopts the same `wolf-*` token names/values so the visual
// language stays identical across wolfbot.io, the customer app and this site.
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        wolf: {
          bg: '#060A14',
          surface: '#0B1120',
          card: '#0F172A',
          card2: '#131E33',
          border: 'rgba(255,255,255,0.07)',
          border2: 'rgba(255,255,255,0.12)',
          accent: '#00C9E8',
          'accent-soft': '#00A8C8',
          'accent-glow': 'rgba(0,201,232,0.14)',
          green: '#10B981',
          'green-bg': 'rgba(16,185,129,0.12)',
          red: '#F43F5E',
          'red-bg': 'rgba(244,63,94,0.12)',
          amber: '#F59E0B',
          'amber-bg': 'rgba(245,158,11,0.12)',
          text: '#F1F5F9',
          text2: '#94A3B8',
          text3: '#475569',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
