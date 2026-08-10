/** Structured data for the FAQ page (Schema.org FAQPage) */
export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is WolfBot Community free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. WolfBot Community is completely free — no subscription, no cloud account required.' } },
    { '@type': 'Question', name: 'How do I install it?', acceptedAnswer: { '@type': 'Answer', text: 'Download the installer from community.wolfbot.io/download. Windows: run Setup.exe. Linux: install the .deb package.' } },
    { '@type': 'Question', name: 'Does it work on Windows?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. WolfBot Community supports Windows 10 and Windows 11 (64-bit).' } },
    { '@type': 'Question', name: 'Does it work on Ubuntu?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Supports Ubuntu 22.04 LTS, Ubuntu 24.04 LTS, and Debian 12+.' } },
    { '@type': 'Question', name: 'Which brokers are supported?', acceptedAnswer: { '@type': 'Answer', text: 'Binance, Bybit, BingX, KuCoin, Bitget, and MT5.' } },
    { '@type': 'Question', name: 'Can I start with Simulation?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Simulation is the default mode — test strategies against real market data risk-free.' } },
    { '@type': 'Question', name: 'What is the difference from WolfBot Cloud?', acceptedAnswer: { '@type': 'Answer', text: 'Community is free and self-hosted. Cloud is a managed service where we handle infrastructure.' } },
  ],
}
