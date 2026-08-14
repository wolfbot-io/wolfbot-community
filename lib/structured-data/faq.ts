/** Structured data for the FAQ page (Schema.org FAQPage) */
export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is WolfBot Community free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. WolfBot Community is completely free — no subscription, no cloud account required.' } },
    { '@type': 'Question', name: 'How do I install it?', acceptedAnswer: { '@type': 'Answer', text: 'Download the installer from community.wolfbot.io/download and run it. Linux ships a .deb that sets up Docker automatically; the Windows Setup.exe is documented and coming in a follow-up release.' } },
    { '@type': 'Question', name: 'Which markets does WolfBot support?', acceptedAnswer: { '@type': 'Answer', text: 'Crypto (Binance, Bybit, BingX, KuCoin, Bitget), Crypto Futures, and MT5 markets (Forex, Gold, Indices, Stocks/CFDs).' } },
    { '@type': 'Question', name: 'Do I need a VPS or a cloud server?', acceptedAnswer: { '@type': 'Answer', text: 'No. WolfBot Community runs on your own computer. A VPS is only needed if you want 24/7 operation while your machine is off.' } },
    { '@type': 'Question', name: 'Can I start with Simulation?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Connect a broker Demo/testnet account and trade risk-free with real market data and virtual funds.' } },
    { '@type': 'Question', name: 'How do updates work?', acceptedAnswer: { '@type': 'Answer', text: 'Releases are cryptographically signed and shipped on channels (Stable, Beta, Dev Preview). Checksums are published for every installer.' } },
    { '@type': 'Question', name: 'What is the difference from WolfBot Cloud?', acceptedAnswer: { '@type': 'Answer', text: 'Community is free and self-hosted. Cloud is a managed service. Same platform, same markets — different hosting.' } },
  ],
}
