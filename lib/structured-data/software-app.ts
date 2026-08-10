/** Structured data for the download page (Schema.org SoftwareApplication) */
export const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'WolfBot Community',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Windows, Linux',
  description: 'Free self-hosted trading automation for Windows and Linux.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  author: {
    '@type': 'Organization',
    name: 'WolfBot.io',
    url: 'https://wolfbot.io',
  },
  downloadUrl: 'https://community.wolfbot.io/download',
  softwareVersion: '0.8.0-beta.2',
  featureList: [
    'Automated trading with multiple strategies',
    'Simulation mode for risk-free testing',
    'Smart Terminal for manual trading',
    'Risk controls with position limits and drawdown guards',
    'Multi-broker support (Binance, Bybit, BingX, KuCoin, Bitget, MT5)',
    'External signal integration',
    'Automatic updates',
    'Backup and restore',
  ],
}
