// Dark theme per prototypes/figma-make design language.
export function TrustStrip() {
  return (
    <div className="border-y" style={{ borderColor: 'rgba(255,255,255,0.07)', background: '#0B1120' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm" style={{ color: '#94A3B8' }}>
          <span>✅ Free Community Edition</span>
          <span className="hidden sm:inline" style={{ color: '#475569' }}>·</span>
          <span>🖥️ Self-Hosted on Windows &amp; Linux</span>
          <span className="hidden sm:inline" style={{ color: '#475569' }}>·</span>
          <span>🌐 Crypto + Futures + MT5</span>
          <span className="hidden sm:inline" style={{ color: '#475569' }}>·</span>
          <span>🔒 Official WolfBot.io Release</span>
        </div>
      </div>
    </div>
  )
}
