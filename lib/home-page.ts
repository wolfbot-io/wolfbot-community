/**
 * Homepage copy dictionary (PLAN §91 multilingual — localized homepage).
 * =====================================================================
 * The `app/[...slug]/page.tsx` route renders a fully-localized homepage when
 * the path is exactly a locale root (`/vi`, `/de`, ...). Copy + locale are
 * threaded as plain props from `LocalizedHomePage` into each landing section
 * (see components/landing/LocalizedHomePage.tsx). On the English home `/`
 * the JSX-default strings are used directly (no duplicate English copy).
 *
 * Internal links inside the copy are written as **English paths** here — the
 * `localizeHref()` helper in `lib/localized-links.ts` rewrites them to the
 * active locale's URL only for the paths that actually have a translation
 * (content pages: getting-started, docs/*, install/*, brokers/*,
 * releases/*, community-vs-cloud). Hubs without a translation (download,
 * features, academy, security, faq, /) always stay English.
 */

export interface HomeFaq {
  q: string
  a: string
}

export interface HomeCopy {
  /* SEO metadata used by the localized homepage <head> */
  metaTitle: string
  metaDescription: string

  /* ReleaseStrip */
  stripPublicPreview: string
  stripReleaseAvailable: string
  stripSeeRelease: string

  /* Hero */
  heroBadge: string
  heroTitle1: string
  heroTitle2: string
  heroTitleGradient: string
  heroTagline: string
  heroDescription: string
  heroDownloadCta: string
  heroGettingStartedCta: string
  heroMeta: string
  heroMockupTitle: string
  heroMockupLabel: string

  /* TrustStrip */
  trustFree: string
  trustSelfHosted: string
  trustMarkets: string
  trustOfficial: string

  /* InstallSteps */
  installTitle: string
  installSubtitle: string
  installStep1Title: string
  installStep1Desc: string
  installStep2Title: string
  installStep2Desc: string
  installStep3Title: string
  installStep3Desc: string
  installWindowsLink: string
  installLinuxLink: string

  /* Screenshots */
  screenshotsTitle: string
  screenshot1Label: string
  screenshot1Alt: string
  screenshot2Label: string
  screenshot2Alt: string

  /* FeaturesGrid */
  featuresTitle: string
  featuresSubtitle: string
  features: { title: string; desc: string }[]

  /* RunsOnYourMachine */
  runsTitle: string
  runsSubtitle: string
  runsMachine: string
  runsPlatform: string
  runsEngine: string
  runsRisk: string
  runsSmart: string
  runsPortfolio: string
  runsLocalData: string
  runsCrypto: string
  runsMt5: string

  /* BrokerSection */
  brokersTitle: string
  brokersSubtitle: string
  brokersViewAll: string

  /* CommunityVsCloud */
  cvcTitle: string
  cvcSubtitle: string
  cvcCommunity: string
  cvcCommunityPrice: string
  cvcCommunityItems: string[]
  cvcCloud: string
  cvcCloudPrice: string
  cvcCloudItems: string[]
  cvcCompareLink: string

  /* LatestRelease */
  releaseTitle: string
  releasePublicPreview: string
  releaseBody: string
  releaseDownload: string
  releaseGitHub: string

  /* GitHubCommunityBlock */
  ghTitle: string
  ghSubtitle: string
  ghCardGithub: string
  ghCardGithubDesc: string
  ghCardDiscussions: string
  ghCardDiscussionsDesc: string
  ghCardRoadmap: string
  ghCardRoadmapDesc: string

  /* SecurityTrust */
  securityTitle: string
  securitySubtitle: string
  securityItems: { title: string; desc: string }[]
  securityLearnMore: string

  /* FAQSection */
  faqTitle: string
  faqViewAll: string
  faqs: HomeFaq[]

  /* FinalCTA */
  finalCtaTitle: string
  finalCtaBody: string
  finalCtaDownload: string
  finalCtaMeta: string
}

/**
 * English reference copy. Used as the `/` homepage default AND as the
 * structural template for every locale entry (translators keep the same
 * shape). Components receive `copy` via props and fall back to their JSX
 * default when a field is empty, so on the English site this is effectively
 * unused except as documentation of the full string inventory.
 */
export const HOME_COPY: Record<string, HomeCopy> = {
  en: {
    metaTitle: 'WolfBot Community — Free Self-Hosted Trading Bot for Windows & Linux',
    metaDescription:
      'Free self-hosted unified trading platform for Windows and Linux. Connect crypto exchanges, futures and MT5 markets through one intelligent interface.',
    stripPublicPreview: 'PUBLIC PREVIEW',
    stripReleaseAvailable: 'WolfBot Community v0.1.0-p12-ghcr-rc17 is available',
    stripSeeRelease: 'See release →',
    heroBadge: 'WolfBot Community by WolfBot.io · Free & Self-Hosted',
    heroTitle1: 'Free Self-Hosted Trading Platform for Crypto, Futures & MT5',
    heroTitle2: 'Trade Every Market From ',
    heroTitleGradient: 'One Platform',
    heroTagline: 'Crypto, Futures and MT5 — unified in WolfBot.',
    heroDescription:
      'Connect modern digital-asset exchanges and traditional financial markets through a single trading platform. Automate strategies, manage accounts, control risk, execute trades and monitor your portfolio from one interface.',
    heroDownloadCta: 'Download WolfBot Community',
    heroGettingStartedCta: 'Getting Started',
    heroMeta: 'Free · Windows & Linux · Self-Hosted · Public Preview',
    heroMockupTitle: 'WolfBot — One Platform',
    heroMockupLabel: 'Dashboard Preview',
    trustFree: '✅ Free Community Edition',
    trustSelfHosted: '🖥️ Self-Hosted on Windows & Linux',
    trustMarkets: '🌐 Crypto + Futures + MT5',
    trustOfficial: '🔒 Official WolfBot.io Release',
    installTitle: 'Install in Minutes',
    installSubtitle: 'One platform for all your markets. No Docker, no terminal required.',
    installStep1Title: 'Download',
    installStep1Desc: 'Windows Setup.exe or Linux .deb',
    installStep2Title: 'Install',
    installStep2Desc: 'Double-click, follow the setup wizard',
    installStep3Title: 'Connect Markets',
    installStep3Desc: 'Add crypto exchanges and MT5 brokers',
    installWindowsLink: 'Windows guide →',
    installLinuxLink: 'Linux guide →',
    screenshotsTitle: 'See WolfBot Community',
    screenshot1Label: 'Dashboard',
    screenshot1Alt:
      'WolfBot Community dashboard overview showing connected accounts and quick links to Portfolio, Strategies, Bots and Risk Center',
    screenshot2Label: 'Account Status',
    screenshot2Alt: 'WolfBot Community account status page showing PnL, fees and per-account permissions',
    featuresTitle: 'One Platform. Every Market.',
    featuresSubtitle:
      'Everything you need across crypto and traditional markets — one platform, one interface.',
    features: [
      { title: 'Unified Markets', desc: 'Crypto exchanges + MT5. One platform.' },
      { title: 'One Interface', desc: 'Accounts, positions, orders — one dashboard.' },
      { title: 'Smart Execution', desc: 'Unified order routing across all markets.' },
      { title: 'Unified Risk', desc: 'Position limits and drawdown guards across everything.' },
      { title: 'One Portfolio', desc: 'Single portfolio view over all connected markets.' },
      { title: 'Automation', desc: 'Multi-strategy bots, TradingView signals, pipelines.' },
      { title: 'Simulation', desc: 'Paper-trade across markets risk-free.' },
      { title: 'Smart Terminal', desc: 'Manual trading with risk-aware execution.' },
      { title: 'Auto Updates', desc: 'Stay current with signed channel updates.' },
      { title: 'Backup & Restore', desc: 'Snapshot-based backup and recovery.' },
    ],
    runsTitle: 'Unified Trading. On Your Machine.',
    runsSubtitle: 'One platform connecting to all your markets — running on your infrastructure.',
    runsMachine: '🖥️ Your Windows/Linux Machine',
    runsPlatform: '├── WolfBot — Unified Platform',
    runsEngine: '│   ├── Trading Engine',
    runsRisk: '│   ├── Risk Engine',
    runsSmart: '│   ├── Smart Execution',
    runsPortfolio: '│   └── Portfolio Manager',
    runsLocalData: '└── Local Data & Config',
    runsCrypto: '🔗 Crypto Exchanges',
    runsMt5: '🔗 MT5 Brokers',
    brokersTitle: 'Crypto + Futures + MT5',
    brokersSubtitle: 'One platform across modern digital markets and traditional financial markets.',
    brokersViewAll: 'View all supported markets →',
    cvcTitle: 'Community or Cloud?',
    cvcSubtitle: 'Self-host for free or use the managed WolfBot experience. Same platform. Same markets.',
    cvcCommunity: 'WolfBot Community',
    cvcCommunityPrice: 'Free',
    cvcCommunityItems: [
      '✅ Self-hosted on your machine',
      '✅ Crypto + Futures + MT5',
      '✅ Full unified trading platform',
      '✅ Demo account support',
      '✅ Community support',
      '— You manage infrastructure',
      '— You handle updates',
    ],
    cvcCloud: 'WolfBot Cloud',
    cvcCloudPrice: 'Subscription',
    cvcCloudItems: [
      '✅ Fully managed hosting',
      '✅ Crypto + Futures + MT5',
      '✅ Full unified trading platform',
      '✅ Demo account support',
      '✅ Priority support',
      '✅ Automatic updates',
      '✅ No infrastructure maintenance',
    ],
    cvcCompareLink: 'Detailed comparison →',
    releaseTitle: 'Latest Release',
    releasePublicPreview: 'PUBLIC PREVIEW',
    releaseBody:
      'First public release. Linux (Ubuntu/Debian) only — a Windows build is not part of this release yet.',
    releaseDownload: 'Download',
    releaseGitHub: 'GitHub Release',
    ghTitle: 'Join the Community',
    ghSubtitle: 'Follow development, ask questions and share feedback.',
    ghCardGithub: 'GitHub',
    ghCardGithubDesc: 'Stars, releases, activity',
    ghCardDiscussions: 'Discussions',
    ghCardDiscussionsDesc: 'Q&A, ideas, show & tell',
    ghCardRoadmap: 'Roadmap',
    ghCardRoadmapDesc: 'What we are building next',
    securityTitle: 'Built for Trust',
    securitySubtitle:
      'WolfBot Community is non-custodial and self-hosted — you control your keys, your infrastructure, your data.',
    securityItems: [
      { title: '🔑 Trade-Only API', desc: 'Connect with API keys that cannot withdraw funds.' },
      { title: '💻 Self-Hosted', desc: 'Runs on your machine. No third party access to credentials.' },
      { title: '✍️ Signed Releases', desc: 'Cryptographically signed. Verify checksums before installing.' },
    ],
    securityLearnMore: 'Learn more →',
    faqTitle: 'Frequently Asked Questions',
    faqViewAll: 'View all FAQs →',
    faqs: [
      {
        q: 'What is WolfBot Community?',
        a: 'WolfBot Community is a free self-hosted unified trading platform. It connects crypto exchanges and MT5 brokers into one interface for automation, execution, portfolio monitoring and risk management.',
      },
      {
        q: 'Which markets does WolfBot support?',
        a: 'Crypto (Binance, Bybit, BingX, KuCoin, Bitget), Crypto Futures, and MT5 markets (Forex, Gold, Indices, Stocks/CFDs). One platform across modern and traditional finance.',
      },
      {
        q: 'Is WolfBot Community free?',
        a: 'Yes — completely free. No subscription, no cloud account required. Self-host on your own Windows or Linux machine.',
      },
      {
        q: 'How do I install it?',
        a: 'Download the installer from the Download page and run it. Linux ships a .deb that sets up Docker for you automatically; the Windows Setup.exe is documented and coming in a follow-up release. No terminal or Docker experience needed.',
      },
      {
        q: 'Do I need a VPS or a cloud server?',
        a: 'No. WolfBot Community runs on your own computer. You only need a VPS if you want it trading 24/7 while your personal machine is off.',
      },
      {
        q: 'What happens when my PC shuts down?',
        a: 'Trading simply pauses — your accounts, strategies and settings are saved, and bots resume when the machine is back on. If you need round-the-clock operation, run it on an always-on Linux VPS instead.',
      },
      {
        q: 'How is WolfBot different from a typical trading bot?',
        a: 'A typical bot connects to one exchange. WolfBot is a unified platform — it connects multiple exchanges AND MT5 brokers, provides one execution engine, one risk layer, and one portfolio view across all markets.',
      },
      {
        q: 'Can I start with Simulation?',
        a: 'Yes. Connect a broker Demo/testnet account (e.g. a Bybit Demo key — WolfBot auto-detects it) and trade risk-free with real market data and virtual funds, across every supported market.',
      },
      {
        q: 'How do updates work?',
        a: 'Releases are cryptographically signed and shipped on channels (Stable, Beta, Dev Preview). Linux updates run through the signed updater; checksums are published for every installer so you can verify before installing.',
      },
      {
        q: 'What is the difference from WolfBot Cloud?',
        a: 'Community is free and self-hosted. Cloud is a managed service. Same platform, same markets — different hosting.',
      },
    ],
    finalCtaTitle: 'One Platform. Every Market.',
    finalCtaBody:
      'Download WolfBot Community — free, self-hosted on Windows and Linux. Connect crypto exchanges and MT5 brokers. Start with Simulation.',
    finalCtaDownload: 'Download WolfBot Community',
    finalCtaMeta: 'Free · Windows & Linux · No signup required · Crypto + Futures + MT5',
  },

  vi: {
    metaTitle: 'WolfBot Community — Bot Giao Dịch Tự Lưu Trữ Miễn Phí cho Windows & Linux',
    metaDescription:
      'Nền tảng giao dịch hợp nhất, tự lưu trữ, miễn phí dành cho Windows và Linux. Kết nối sàn crypto, futures và thị trường MT5 qua một giao diện thông minh duy nhất.',
    stripPublicPreview: 'BẢN XEM TRƯỚC CÔNG KHAI',
    stripReleaseAvailable: 'WolfBot Community v0.1.0-p12-ghcr-rc17 đã có sẵn',
    stripSeeRelease: 'Xem bản phát hành →',
    heroBadge: 'WolfBot Community by WolfBot.io · Miễn Phí & Tự Lưu Trữ',
    heroTitle1: 'Nền tảng giao dịch tự lưu trữ miễn phí cho Crypto, Futures & MT5',
    heroTitle2: 'Giao dịch mọi thị trường từ ',
    heroTitleGradient: 'Một nền tảng',
    heroTagline: 'Crypto, Futures và MT5 — hợp nhất trong WolfBot.',
    heroDescription:
      'Kết nối các sàn giao dịch tài sản số hiện đại và các thị trường tài chính truyền thống qua một nền tảng giao dịch duy nhất. Tự động hóa chiến lược, quản lý tài khoản, kiểm soát rủi ro, thực hiện lệnh và theo dõi danh mục từ một giao diện.',
    heroDownloadCta: 'Tải WolfBot Community',
    heroGettingStartedCta: 'Bắt đầu',
    heroMeta: 'Miễn Phí · Windows & Linux · Tự Lưu Trữ · Bản Xem Trước Công Khai',
    heroMockupTitle: 'WolfBot — Một Nền Tảng',
    heroMockupLabel: 'Xem trước Bảng điều khiển',
    trustFree: '✅ Phiên bản Community miễn phí',
    trustSelfHosted: '🖥️ Tự lưu trữ trên Windows & Linux',
    trustMarkets: '🌐 Crypto + Futures + MT5',
    trustOfficial: '🔒 Bản phát hành chính thức WolfBot.io',
    installTitle: 'Cài đặt trong vài phút',
    installSubtitle: 'Một nền tảng cho mọi thị trường của bạn. Không cần Docker, không cần dòng lệnh.',
    installStep1Title: 'Tải xuống',
    installStep1Desc: 'Windows Setup.exe hoặc Linux .deb',
    installStep2Title: 'Cài đặt',
    installStep2Desc: 'Nhấp đúp và làm theo trình hướng dẫn cài đặt',
    installStep3Title: 'Kết nối thị trường',
    installStep3Desc: 'Thêm sàn crypto và broker MT5',
    installWindowsLink: 'Hướng dẫn Windows →',
    installLinuxLink: 'Hướng dẫn Linux →',
    screenshotsTitle: 'Xem WolfBot Community',
    screenshot1Label: 'Bảng điều khiển',
    screenshot1Alt:
      'Tổng quan bảng điều khiển WolfBot Community hiển thị các tài khoản đã kết nối và liên kết nhanh đến Danh mục, Chiến lược, Bot và Trung tâm Rủi ro',
    screenshot2Label: 'Trạng thái tài khoản',
    screenshot2Alt: 'Trang trạng thái tài khoản WolfBot Community hiển thị PnL, phí và quyền hạn của từng tài khoản',
    featuresTitle: 'Một Nền Tảng. Mọi Thị Trường.',
    featuresSubtitle: 'Mọi thứ bạn cần trên thị trường crypto và tài chính truyền thống — một nền tảng, một giao diện.',
    features: [
      { title: 'Thị trường hợp nhất', desc: 'Sàn crypto + MT5. Một nền tảng.' },
      { title: 'Một giao diện', desc: 'Tài khoản, vị thế, lệnh — một bảng điều khiển.' },
      { title: 'Thực hiện thông minh', desc: 'Định tuyến lệnh thống nhất trên mọi thị trường.' },
      { title: 'Rủi ro hợp nhất', desc: 'Giới hạn vị thế và bảo vệ drawdown trên tất cả.' },
      { title: 'Một danh mục', desc: 'Một góc nhìn danh mục duy nhất trên mọi thị trường đã kết nối.' },
      { title: 'Tự động hóa', desc: 'Bot đa chiến lược, tín hiệu TradingView, pipeline.' },
      { title: 'Mô phỏng', desc: 'Giao dịch thử trên các thị trường, không rủi ro.' },
      { title: 'Smart Terminal', desc: 'Giao dịch thủ công với thực hiện nhận biết rủi ro.' },
      { title: 'Tự động cập nhật', desc: 'Luôn mới với cập nhật kênh đã ký.' },
      { title: 'Sao lưu & Phục hồi', desc: 'Sao lưu và khôi phục dựa trên snapshot.' },
    ],
    runsTitle: 'Giao Dịch Hợp Nhất. Trên Máy Của Bạn.',
    runsSubtitle: 'Một nền tảng kết nối mọi thị trường — chạy trên hạ tầng của bạn.',
    runsMachine: '🖥️ Máy Windows/Linux của bạn',
    runsPlatform: '├── WolfBot — Nền tảng hợp nhất',
    runsEngine: '│   ├── Công cụ giao dịch',
    runsRisk: '│   ├── Công cụ rủi ro',
    runsSmart: '│   ├── Thực hiện thông minh',
    runsPortfolio: '│   └── Trình quản lý danh mục',
    runsLocalData: '└── Dữ liệu & cấu hình cục bộ',
    runsCrypto: '🔗 Sàn crypto',
    runsMt5: '🔗 Broker MT5',
    brokersTitle: 'Crypto + Futures + MT5',
    brokersSubtitle: 'Một nền tảng trên thị trường số hiện đại và thị trường tài chính truyền thống.',
    brokersViewAll: 'Xem tất cả thị trường được hỗ trợ →',
    cvcTitle: 'Community hay Cloud?',
    cvcSubtitle: 'Tự lưu trữ miễn phí hoặc dùng trải nghiệm WolfBot được quản lý. Cùng nền tảng. Cùng thị trường.',
    cvcCommunity: 'WolfBot Community',
    cvcCommunityPrice: 'Miễn phí',
    cvcCommunityItems: [
      '✅ Tự lưu trữ trên máy của bạn',
      '✅ Crypto + Futures + MT5',
      '✅ Nền tảng giao dịch hợp nhất đầy đủ',
      '✅ Hỗ trợ tài khoản Demo',
      '✅ Hỗ trợ cộng đồng',
      '— Bạn tự quản lý hạ tầng',
      '— Bạn tự xử lý cập nhật',
    ],
    cvcCloud: 'WolfBot Cloud',
    cvcCloudPrice: 'Thuê bao',
    cvcCloudItems: [
      '✅ Lưu trữ được quản lý hoàn toàn',
      '✅ Crypto + Futures + MT5',
      '✅ Nền tảng giao dịch hợp nhất đầy đủ',
      '✅ Hỗ trợ tài khoản Demo',
      '✅ Hỗ trợ ưu tiên',
      '✅ Cập nhật tự động',
      '✅ Không cần bảo trì hạ tầng',
    ],
    cvcCompareLink: 'So sánh chi tiết →',
    releaseTitle: 'Bản phát hành mới nhất',
    releasePublicPreview: 'BẢN XEM TRƯỚC CÔNG KHAI',
    releaseBody:
      'Bản phát hành công khai đầu tiên. Chỉ dành cho Linux (Ubuntu/Debian) — bản Windows chưa có trong đợt phát hành này.',
    releaseDownload: 'Tải xuống',
    releaseGitHub: 'Bản phát hành GitHub',
    ghTitle: 'Tham gia Cộng đồng',
    ghSubtitle: 'Theo dõi phát triển, đặt câu hỏi và chia sẻ phản hồi.',
    ghCardGithub: 'GitHub',
    ghCardGithubDesc: 'Star, bản phát hành, hoạt động',
    ghCardDiscussions: 'Thảo luận',
    ghCardDiscussionsDesc: 'Q&A, ý tưởng, giới thiệu & chia sẻ',
    ghCardRoadmap: 'Lộ trình',
    ghCardRoadmapDesc: 'Những gì chúng tôi đang xây dựng tiếp theo',
    securityTitle: 'Được xây dựng để tin cậy',
    securitySubtitle:
      'WolfBot Community không giữ tiền của bạn và tự lưu trữ — bạn kiểm soát khóa, hạ tầng và dữ liệu của mình.',
    securityItems: [
      { title: 'API Chỉ giao dịch', desc: 'Kết nối bằng API key không thể rút tiền.' },
      { title: 'Tự lưu trữ', desc: 'Chạy trên máy bạn. Không bên thứ ba truy cập thông tin xác thực.' },
      { title: 'Bản phát hành đã ký', desc: 'Được ký mã hóa. Xác minh checksum trước khi cài đặt.' },
    ],
    securityLearnMore: 'Tìm hiểu thêm →',
    faqTitle: 'Câu hỏi thường gặp',
    faqViewAll: 'Xem tất cả câu hỏi →',
    faqs: [
      {
        q: 'WolfBot Community là gì?',
        a: 'WolfBot Community là một nền tảng giao dịch hợp nhất miễn phí, tự lưu trữ. Nó kết nối các sàn crypto và broker MT5 vào một giao diện để tự động hóa, thực hiện lệnh, theo dõi danh mục và quản lý rủi ro.',
      },
      {
        q: 'WolfBot hỗ trợ những thị trường nào?',
        a: 'Crypto (Binance, Bybit, BingX, KuCoin, Bitget), Crypto Futures và thị trường MT5 (Forex, Vàng, Chỉ số, Cổ phiếu/CFD). Một nền tảng trên cả tài chính hiện đại lẫn truyền thống.',
      },
      {
        q: 'WolfBot Community có miễn phí không?',
        a: 'Có — hoàn toàn miễn phí. Không thuê bao, không cần tài khoản cloud. Tự lưu trữ trên máy Windows hoặc Linux của bạn.',
      },
      {
        q: 'Tôi cài đặt như thế nào?',
        a: 'Tải bộ cài từ trang Download và chạy nó. Linux cung cấp tệp .deb tự thiết lập Docker cho bạn; Windows Setup.exe đã được ghi lại và sẽ ra mắt trong bản kế tiếp. Không cần kinh nghiệm terminal hay Docker.',
      },
      {
        q: 'Tôi có cần VPS hoặc máy chủ cloud không?',
        a: 'Không. WolfBot Community chạy trên máy tính của bạn. Bạn chỉ cần VPS nếu muốn nó giao dịch 24/7 trong khi máy cá nhân tắt.',
      },
      {
        q: 'Điều gì xảy ra khi máy tính của tôi tắt?',
        a: 'Giao dịch chỉ tạm dừng — tài khoản, chiến lược và cài đặt được lưu, các bot tiếp tục khi máy trở lại online. Nếu cần vận hành suốt ngày đêm, hãy chạy trên VPS Linux luôn bật.',
      },
      {
        q: 'WolfBot khác bot giao dịch thông thường thế nào?',
        a: 'Bot thông thường kết nối một sàn. WolfBot là nền tảng hợp nhất — kết nối nhiều sàn VÀ broker MT5, cung cấp một công cụ thực hiện lệnh, một lớp rủi ro và một góc nhìn danh mục trên mọi thị trường.',
      },
      {
        q: 'Tôi có thể bắt đầu với Mô phỏng không?',
        a: 'Có. Kết nối tài khoản Demo/testnet của broker (ví dụ khóa Bybit Demo — WolfBot tự phát hiện) và giao dịch không rủi ro với dữ liệu thị trường thực và tiền ảo, trên mọi thị trường được hỗ trợ.',
      },
      {
        q: 'Cập nhật hoạt động thế nào?',
        a: 'Các bản phát hành được ký mã hóa và phát hành theo kênh (Stable, Beta, Dev Preview). Cập nhật Linux chạy qua trình cập nhật đã ký; checksum được công bố cho mọi bộ cài để bạn xác minh trước khi cài đặt.',
      },
      {
        q: 'Sự khác biệt với WolfBot Cloud là gì?',
        a: 'Community miễn phí và tự lưu trữ. Cloud là dịch vụ được quản lý. Cùng nền tảng, cùng thị trường — khác cách lưu trữ.',
      },
    ],
    finalCtaTitle: 'Một Nền Tảng. Mọi Thị Trường.',
    finalCtaBody:
      'Tải WolfBot Community — miễn phí, tự lưu trữ trên Windows và Linux. Kết nối sàn crypto và broker MT5. Bắt đầu với Mô phỏng.',
    finalCtaDownload: 'Tải WolfBot Community',
    finalCtaMeta: 'Miễn Phí · Windows & Linux · Không cần đăng ký · Crypto + Futures + MT5',
  },

  zh: {
    metaTitle: 'WolfBot Community — 面向 Windows 和 Linux 的免费自托管交易机器人',
    metaDescription:
      '适用于 Windows 和 Linux 的免费自托管统一交易平台。通过一个智能界面连接加密货币交易所、期货和 MT5 市场。',
    stripPublicPreview: '公开预览',
    stripReleaseAvailable: 'WolfBot Community v0.1.0-p12-ghcr-rc17 现已可用',
    stripSeeRelease: '查看发布 →',
    heroBadge: 'WolfBot Community by WolfBot.io · 免费与自托管',
    heroTitle1: '加密货币、期货和 MT5 的免费自托管交易平台',
    heroTitle2: '交易所有市场，从 ',
    heroTitleGradient: '一个平台',
    heroTagline: '加密货币、期货和 MT5 — 统一到 WolfBot。',
    heroDescription:
      '通过一个交易平台连接现代数字资产交易所和传统金融市场。在一个界面中自动化策略、管理账户、控制风险、执行交易并监控投资组合。',
    heroDownloadCta: '下载 WolfBot Community',
    heroGettingStartedCta: '快速开始',
    heroMeta: '免费 · Windows 和 Linux · 自托管 · 公开预览',
    heroMockupTitle: 'WolfBot — 一个平台',
    heroMockupLabel: '仪表盘预览',
    trustFree: '✅ 免费社区版',
    trustSelfHosted: '🖥️ 在 Windows 和 Linux 上自托管',
    trustMarkets: '🌐 加密货币 + 期货 + MT5',
    trustOfficial: '🔒 官方 WolfBot.io 发布',
    installTitle: '几分钟即可安装',
    installSubtitle: '一个平台覆盖所有市场。无需 Docker，无需终端。',
    installStep1Title: '下载',
    installStep1Desc: 'Windows Setup.exe 或 Linux .deb',
    installStep2Title: '安装',
    installStep2Desc: '双击，按照安装向导操作',
    installStep3Title: '连接市场',
    installStep3Desc: '添加加密货币交易所和 MT5 经纪商',
    installWindowsLink: 'Windows 指南 →',
    installLinuxLink: 'Linux 指南 →',
    screenshotsTitle: '查看 WolfBot Community',
    screenshot1Label: '仪表盘',
    screenshot1Alt:
      'WolfBot Community 仪表盘概览，显示已连接的账户以及指向投资组合、策略、机器人和风险中心的快速链接',
    screenshot2Label: '账户状态',
    screenshot2Alt: 'WolfBot Community 账户状态页面，显示盈亏、费用和每个账户的权限',
    featuresTitle: '一个平台。所有市场。',
    featuresSubtitle: '跨越加密货币和传统市场所需的一切 — 一个平台，一个界面。',
    features: [
      { title: '统一市场', desc: '加密货币交易所 + MT5。一个平台。' },
      { title: '一个界面', desc: '账户、持仓、订单 — 一个仪表盘。' },
      { title: '智能执行', desc: '跨所有市场的统一订单路由。' },
      { title: '统一风控', desc: '覆盖所有内容的持仓限制和回撤保护。' },
      { title: '一个投资组合', desc: '跨所有已连接市场的单一投资组合视图。' },
      { title: '自动化', desc: '多策略机器人、TradingView 信号、管道。' },
      { title: '模拟', desc: '跨市场无风险纸面交易。' },
      { title: '智能终端', desc: '风险感知执行的手动交易。' },
      { title: '自动更新', desc: '通过签名频道更新保持最新。' },
      { title: '备份与恢复', desc: '基于快照的备份和恢复。' },
    ],
    runsTitle: '统一交易。在您的机器上。',
    runsSubtitle: '一个平台连接到您的所有市场 — 在您的基础设施上运行。',
    runsMachine: '🖥️ 您的 Windows/Linux 机器',
    runsPlatform: '├── WolfBot — 统一平台',
    runsEngine: '│   ├── 交易引擎',
    runsRisk: '│   ├── 风控引擎',
    runsSmart: '│   ├── 智能执行',
    runsPortfolio: '│   └── 投资组合管理器',
    runsLocalData: '└── 本地数据和配置',
    runsCrypto: '🔗 加密货币交易所',
    runsMt5: '🔗 MT5 经纪商',
    brokersTitle: '加密货币 + 期货 + MT5',
    brokersSubtitle: '跨越现代数字市场和传统金融市场的统一平台。',
    brokersViewAll: '查看所有支持的市场 →',
    cvcTitle: '社区版还是云端？',
    cvcSubtitle: '免费自托管，或使用托管式 WolfBot 体验。同一平台。同一市场。',
    cvcCommunity: 'WolfBot Community',
    cvcCommunityPrice: '免费',
    cvcCommunityItems: [
      '✅ 在您的机器上自托管',
      '✅ 加密货币 + 期货 + MT5',
      '✅ 完整统一交易平台',
      '✅ 支持演示账户',
      '✅ 社区支持',
      '— 您管理基础设施',
      '— 您处理更新',
    ],
    cvcCloud: 'WolfBot Cloud',
    cvcCloudPrice: '订阅',
    cvcCloudItems: [
      '✅ 完全托管式',
      '✅ 加密货币 + 期货 + MT5',
      '✅ 完整统一交易平台',
      '✅ 支持演示账户',
      '✅ 优先支持',
      '✅ 自动更新',
      '✅ 无需基础设施维护',
    ],
    cvcCompareLink: '详细对比 →',
    releaseTitle: '最新发布',
    releasePublicPreview: '公开预览',
    releaseBody:
      '首个公开版本。仅限 Linux（Ubuntu/Debian）— Windows 版本暂未包含在此次发布中。',
    releaseDownload: '下载',
    releaseGitHub: 'GitHub 发布',
    ghTitle: '加入社区',
    ghSubtitle: '关注开发、提问并分享反馈。',
    ghCardGithub: 'GitHub',
    ghCardGithubDesc: '星标、发布、动态',
    ghCardDiscussions: '讨论',
    ghCardDiscussionsDesc: '问与答、想法、展示与讲述',
    ghCardRoadmap: '路线图',
    ghCardRoadmapDesc: '我们接下来要构建的内容',
    securityTitle: '为信任而构建',
    securitySubtitle:
      'WolfBot Community 是非托管的、自托管的 — 您掌控自己的密钥、基础设施和数据。',
    securityItems: [
      { title: '仅交易 API', desc: '使用不能提取资金的安全 API 密钥连接。' },
      { title: '自托管', desc: '在您的机器上运行。第三方无法访问凭据。' },
      { title: '签名发布', desc: '加密签名。安装前请验证校验和。' },
    ],
    securityLearnMore: '了解更多 →',
    faqTitle: '常见问题',
    faqViewAll: '查看所有常见问题 →',
    faqs: [
      {
        q: '什么是 WolfBot Community？',
        a: 'WolfBot Community 是一个免费、自托管的统一交易平台。它将加密货币交易所和 MT5 经纪商连接到一个界面中，实现自动化、执行、投资组合监控和风险管理。',
      },
      {
        q: 'WolfBot 支持哪些市场？',
        a: '加密货币（Binance、Bybit、BingX、KuCoin、Bitget）、加密货币期货，以及 MT5 市场（外汇、黄金、指数、股票/差价合约）。一个平台连接现代和传统金融。',
      },
      {
        q: 'WolfBot Community 免费吗？',
        a: '是的 — 完全免费。无需订阅，无需云端账户。在您自己的 Windows 或 Linux 机器上自托管。',
      },
      {
        q: '如何安装？',
        a: '从下载页面下载安装程序并运行。Linux 附带 .deb，可自动为您设置 Docker；Windows Setup.exe 已记录并将随后续版本发布。无需终端或 Docker 经验。',
      },
      {
        q: '我需要 VPS 或云服务器吗？',
        a: '不需要。WolfBot Community 在您自己的计算机上运行。只有希望它 24/7 交易、而个人机器关机时，您才需要 VPS。',
      },
      {
        q: '电脑关机时会发生什么？',
        a: '交易只会暂停 — 您的账户、策略和设置都会保存，机器重新开机后机器人会恢复。如果您需要全天候运行，请改在常开的 Linux VPS 上运行。',
      },
      {
        q: 'WolfBot 与典型交易机器人有何不同？',
        a: '典型的机器人连接一个交易所。WolfBot 是一个统一平台 — 它连接多个交易所和 MT5 经纪商，提供单执行引擎、单风控层和跨所有市场的单一投资组合视图。',
      },
      {
        q: '我可以从模拟开始吗？',
        a: '可以。连接经纪商的演示/测试网账户（例如 Bybit 演示密钥 — WolfBot 会自动检测）并使用真实市场数据和虚拟资金，在受支持的每个市场无风险交易。',
      },
      {
        q: '更新如何工作？',
        a: '发布经过加密签名，并通过频道（稳定版、测试版、开发预览版）交付。Linux 更新通过签名更新程序运行；每个安装程序都会发布校验和，以便您在安装前验证。',
      },
      {
        q: '与 WolfBot Cloud 的区别是什么？',
        a: 'Community 免费且自托管。Cloud 是托管服务。同一平台、同一市场 — 只是托管方式不同。',
      },
    ],
    finalCtaTitle: '一个平台。所有市场。',
    finalCtaBody:
      '下载 WolfBot Community — 免费，适用于 Windows 和 Linux 的自托管平台。连接加密货币交易所和 MT5 经纪商。从模拟开始。',
    finalCtaDownload: '下载 WolfBot Community',
    finalCtaMeta: '免费 · Windows 和 Linux · 无需注册 · 加密货币 + 期货 + MT5',
  },

  'pt-br': {
    metaTitle: 'WolfBot Community — Bot de Trading Auto-Hospedado Gratuito para Windows e Linux',
    metaDescription:
      'Plataforma de trading unificada, gratuita e auto-hospedada para Windows e Linux. Conecte exchanges de cripto, futuros e mercados MT5 por meio de uma interface inteligente.',
    stripPublicPreview: 'PRÉVIA PÚBLICA',
    stripReleaseAvailable: 'WolfBot Community v0.1.0-p12-ghcr-rc17 está disponível',
    stripSeeRelease: 'Ver lançamento →',
    heroBadge: 'WolfBot Community by WolfBot.io · Grátis e Auto-Hospedado',
    heroTitle1: 'Plataforma de trading auto-hospedada e gratuita para Cripto, Futuros e MT5',
    heroTitle2: 'Negocie todos os mercados em ',
    heroTitleGradient: 'uma plataforma',
    heroTagline: 'Cripto, Futuros e MT5 — unificados no WolfBot.',
    heroDescription:
      'Conecte exchanges modernas de ativos digitais e mercados financeiros tradicionais por meio de uma única plataforma de trading. Automatize estratégias, gerencie contas, controle risco, execute trades e monitore seu portfólio em uma interface.',
    heroDownloadCta: 'Baixar WolfBot Community',
    heroGettingStartedCta: 'Primeiros Passos',
    heroMeta: 'Grátis · Windows e Linux · Auto-Hospedado · Prévia Pública',
    heroMockupTitle: 'WolfBot — Uma Plataforma',
    heroMockupLabel: 'Prévia do Painel',
    trustFree: '✅ Edição Community gratuita',
    trustSelfHosted: '🖥️ Auto-hospedado em Windows e Linux',
    trustMarkets: '🌐 Cripto + Futuros + MT5',
    trustOfficial: '🔒 Lançamento oficial WolfBot.io',
    installTitle: 'Instale em Minutos',
    installSubtitle: 'Uma plataforma para todos os seus mercados. Sem Docker, sem terminal.',
    installStep1Title: 'Baixar',
    installStep1Desc: 'Windows Setup.exe ou Linux .deb',
    installStep2Title: 'Instalar',
    installStep2Desc: 'Clique duas vezes e siga o assistente de instalação',
    installStep3Title: 'Conectar Mercados',
    installStep3Desc: 'Adicione exchanges de cripto e corretoras MT5',
    installWindowsLink: 'Guia do Windows →',
    installLinuxLink: 'Guia do Linux →',
    screenshotsTitle: 'Veja o WolfBot Community',
    screenshot1Label: 'Painel',
    screenshot1Alt:
      'Visão geral do painel do WolfBot Community mostrando contas conectadas e atalhos para Portfólio, Estratégias, Bots e Central de Risco',
    screenshot2Label: 'Status da Conta',
    screenshot2Alt: 'Página de status da conta do WolfBot Community mostrando PnL, taxas e permissões por conta',
    featuresTitle: 'Uma Plataforma. Todos os Mercados.',
    featuresSubtitle:
      'Tudo o que você precisa em cripto e mercados tradicionais — uma plataforma, uma interface.',
    features: [
      { title: 'Mercados unificados', desc: 'Exchanges de cripto + MT5. Uma plataforma.' },
      { title: 'Uma interface', desc: 'Contas, posições, ordens — um painel.' },
      { title: 'Execução inteligente', desc: 'Roteamento unificado de ordens em todos os mercados.' },
      { title: 'Risco unificado', desc: 'Limites de posição e proteções de drawdown em tudo.' },
      { title: 'Um portfólio', desc: 'Visão única do portfólio em todos os mercados conectados.' },
      { title: 'Automação', desc: 'Bots multiestratégia, sinais TradingView, pipelines.' },
      { title: 'Simulação', desc: 'Negocie em papel nos mercados sem risco.' },
      { title: 'Terminal inteligente', desc: 'Trading manual com execução ciente do risco.' },
      { title: 'Atualizações automáticas', desc: 'Mantenha-se atualizado com atualizações de canal assinadas.' },
      { title: 'Backup e restauração', desc: 'Backup e recuperação baseados em snapshot.' },
    ],
    runsTitle: 'Trading Unificado. Na Sua Máquina.',
    runsSubtitle: 'Uma plataforma conectando todos os seus mercados — rodando na sua infraestrutura.',
    runsMachine: '🖥️ Sua Máquina Windows/Linux',
    runsPlatform: '├── WolfBot — Plataforma Unificada',
    runsEngine: '│   ├── Motor de Trading',
    runsRisk: '│   ├── Motor de Risco',
    runsSmart: '│   ├── Execução Inteligente',
    runsPortfolio: '│   └── Gerenciador de Portfólio',
    runsLocalData: '└── Dados e Configuração Locais',
    runsCrypto: '🔗 Exchanges de Cripto',
    runsMt5: '🔗 Corretoras MT5',
    brokersTitle: 'Cripto + Futuros + MT5',
    brokersSubtitle: 'Uma plataforma em mercados digitais modernos e mercados financeiros tradicionais.',
    brokersViewAll: 'Ver todos os mercados suportados →',
    cvcTitle: 'Community ou Cloud?',
    cvcSubtitle: 'Auto-hospede gratuitamente ou use a experiência gerenciada do WolfBot. Mesma plataforma. Mesmos mercados.',
    cvcCommunity: 'WolfBot Community',
    cvcCommunityPrice: 'Grátis',
    cvcCommunityItems: [
      '✅ Auto-hospedado na sua máquina',
      '✅ Cripto + Futuros + MT5',
      '✅ Plataforma de trading unificada completa',
      '✅ Suporte a conta demo',
      '✅ Suporte da comunidade',
      '— Você gerencia a infraestrutura',
      '— Você cuida das atualizações',
    ],
    cvcCloud: 'WolfBot Cloud',
    cvcCloudPrice: 'Assinatura',
    cvcCloudItems: [
      '✅ Hospedagem totalmente gerenciada',
      '✅ Cripto + Futuros + MT5',
      '✅ Plataforma de trading unificada completa',
      '✅ Suporte a conta demo',
      '✅ Suporte prioritário',
      '✅ Atualizações automáticas',
      '✅ Sem manutenção de infraestrutura',
    ],
    cvcCompareLink: 'Comparação detalhada →',
    releaseTitle: 'Último Lançamento',
    releasePublicPreview: 'PRÉVIA PÚBLICA',
    releaseBody:
      'Primeiro lançamento público. Somente Linux (Ubuntu/Debian) — a versão para Windows não faz parte deste lançamento ainda.',
    releaseDownload: 'Baixar',
    releaseGitHub: 'Lançamento no GitHub',
    ghTitle: 'Junte-se à Comunidade',
    ghSubtitle: 'Acompanhe o desenvolvimento, tire dúvidas e compartilhe feedback.',
    ghCardGithub: 'GitHub',
    ghCardGithubDesc: 'Estrelas, lançamentos, atividade',
    ghCardDiscussions: 'Discussões',
    ghCardDiscussionsDesc: 'Perguntas e respostas, ideias, mostre e conte',
    ghCardRoadmap: 'Roteiro',
    ghCardRoadmapDesc: 'O que estamos construindo em seguida',
    securityTitle: 'Construído para Confiança',
    securitySubtitle:
      'WolfBot Community é de autocustódia e auto-hospedado — você controla suas chaves, sua infraestrutura, seus dados.',
    securityItems: [
      { title: 'API somente trading', desc: 'Conecte com chaves de API que não podem sacar fundos.' },
      { title: 'Auto-hospedado', desc: 'Roda na sua máquina. Sem acesso de terceiros às credenciais.' },
      { title: 'Lançamentos assinados', desc: 'Assinados criptograficamente. Verifique os checksums antes de instalar.' },
    ],
    securityLearnMore: 'Saiba mais →',
    faqTitle: 'Perguntas Frequentes',
    faqViewAll: 'Ver todas as perguntas →',
    faqs: [
      {
        q: 'O que é o WolfBot Community?',
        a: 'WolfBot Community é uma plataforma de trading unificada, gratuita e auto-hospedada. Ela conecta exchanges de cripto e corretoras MT5 em uma interface para automação, execução, monitoramento de portfólio e gerenciamento de risco.',
      },
      {
        q: 'Quais mercados o WolfBot suporta?',
        a: 'Cripto (Binance, Bybit, BingX, KuCoin, Bitget), Futuros de Cripto e mercados MT5 (Forex, Ouro, Índices, Ações/CFDs). Uma plataforma em finanças modernas e tradicionais.',
      },
      {
        q: 'O WolfBot Community é gratuito?',
        a: 'Sim — totalmente gratuito. Sem assinatura, sem conta cloud. Auto-hospede na sua própria máquina Windows ou Linux.',
      },
      {
        q: 'Como instalo?',
        a: 'Baixe o instalador da página de Download e execute-o. O Linux vem com um .deb que configura o Docker para você automaticamente; o Windows Setup.exe está documentado e chegará em um próximo lançamento. Não é preciso experiência com terminal ou Docker.',
      },
      {
        q: 'Preciso de VPS ou servidor cloud?',
        a: 'Não. WolfBot Community roda no seu próprio computador. Você só precisa de uma VPS se quiser que ele negocie 24/7 enquanto sua máquina pessoal está desligada.',
      },
      {
        q: 'O que acontece quando meu PC é desligado?',
        a: 'O trading apenas pausa — suas contas, estratégias e configurações são salvas, e os bots retomam quando a máquina é ligada novamente. Se você precisa de operação ininterrupta, rode em uma VPS Linux sempre ligada.',
      },
      {
        q: 'Como o WolfBot difere de um bot de trading típico?',
        a: 'Um bot típico conecta-se a uma exchange. WolfBot é uma plataforma unificada — conecta várias exchanges E corretoras MT5, fornece um motor de execução, uma camada de risco e uma visão de portfólio em todos os mercados.',
      },
      {
        q: 'Posso começar com Simulação?',
        a: 'Sim. Conecte uma conta demo/testnet de corretora (ex.: uma chave Bybit Demo — o WolfBot a detecta automaticamente) e negocie sem risco com dados de mercado reais e fundos virtuais, em todos os mercados suportados.',
      },
      {
        q: 'Como funcionam as atualizações?',
        a: 'Os lançamentos são assinados criptograficamente e enviados por canais (Stable, Beta, Dev Preview). Atualizações no Linux rodam pelo atualizador assinado; checksums são publicados para cada instalador para que você verifique antes de instalar.',
      },
      {
        q: 'Qual a diferença do WolfBot Cloud?',
        a: 'Community é gratuito e auto-hospedado. Cloud é um serviço gerenciado. Mesma plataforma, mesmos mercados — diferente hospedagem.',
      },
    ],
    finalCtaTitle: 'Uma Plataforma. Todos os Mercados.',
    finalCtaBody:
      'Baixe o WolfBot Community — gratuito, auto-hospedado em Windows e Linux. Conecte exchanges de cripto e corretoras MT5. Comece pela Simulação.',
    finalCtaDownload: 'Baixar WolfBot Community',
    finalCtaMeta: 'Grátis · Windows e Linux · Sem cadastro · Cripto + Futuros + MT5',
  },

  ru: {
    metaTitle: 'WolfBot Community — бесплатный самохостинговый торговый бот для Windows и Linux',
    metaDescription:
      'Бесплатная единая торговая платформа для Windows и Linux. Подключите криптобиржи, фьючерсы и рынки MT5 через один интеллектуальный интерфейс.',
    stripPublicPreview: 'ПУБЛИЧНАЯ ПРЕДПРОСМОТР',
    stripReleaseAvailable: 'WolfBot Community v0.1.0-p12-ghcr-rc17 доступен',
    stripSeeRelease: 'Смотреть релиз →',
    heroBadge: 'WolfBot Community by WolfBot.io · Бесплатно и cамохостинг',
    heroTitle1: 'Бесплатная торговля с собственным хостингом для крипты, фьючерсов и MT5',
    heroTitle2: 'Торгуйте на любом рынке с ',
    heroTitleGradient: 'одной платформы',
    heroTagline: 'Крипта, фьючерсы и MT5 — объединены в WolfBot.',
    heroDescription:
      'Подключайте современные биржи цифровых активов и традиционные финансовые рынки через единую торговую платформу. Автоматизируйте стратегии, управляйте счетами, контролируйте риски, исполняйте сделки и отслеживайте портфель в одном интерфейсе.',
    heroDownloadCta: 'Скачать WolfBot Community',
    heroGettingStartedCta: 'Начало работы',
    heroMeta: 'Бесплатно · Windows и Linux · Самохостинг · Публичная предпросмотр',
    heroMockupTitle: 'WolfBot — одна платформа',
    heroMockupLabel: 'Предпросмотр панели',
    trustFree: '✅ Бесплатная Edition Community',
    trustSelfHosted: '🖥️ Самохостинг на Windows и Linux',
    trustMarkets: '🌐 Крипта + фьючерсы + MT5',
    trustOfficial: '🔒 Официальный релиз WolfBot.io',
    installTitle: 'Установка за минуты',
    installSubtitle: 'Одна платформа для всех ваших рынков. Без Docker, без терминала.',
    installStep1Title: 'Скачать',
    installStep1Desc: 'Windows Setup.exe или Linux .deb',
    installStep2Title: 'Установить',
    installStep2Desc: 'Дважды щёлкните и следуйте мастеру установки',
    installStep3Title: 'Подключить рынки',
    installStep3Desc: 'Добавьте криптобиржи и брокеров MT5',
    installWindowsLink: 'Руководство по Windows →',
    installLinuxLink: 'Руководство по Linux →',
    screenshotsTitle: 'Посмотрите WolfBot Community',
    screenshot1Label: 'Панель управления',
    screenshot1Alt:
      'Обзор панели WolfBot Community с подключёнными счетами и быстрыми ссылками на Портфель, Стратегии, Ботов и Центр риска',
    screenshot2Label: 'Статус счёта',
    screenshot2Alt: 'Страница статуса счёта WolfBot Community с PnL, комиссиями и правами каждого счёта',
    featuresTitle: 'Одна платформа. Любой рынок.',
    featuresSubtitle:
      'Всё, что вам нужно на крипто- и традиционных рынках — одна платформа, один интерфейс.',
    features: [
      { title: 'Единые рынки', desc: 'Криптобиржи + MT5. Одна платформа.' },
      { title: 'Один интерфейс', desc: 'Счета, позиции, ордера — одна панель.' },
      { title: 'Умное исполнение', desc: 'Единая маршрутизация ордеров на всех рынках.' },
      { title: 'Единый риск', desc: 'Лимиты позиций и защита от просадок везде.' },
      { title: 'Один портфель', desc: 'Единый вид портфеля по всем подключённым рынкам.' },
      { title: 'Автоматизация', desc: 'Боты с несколькими стратегиями, сигналы TradingView, пайплайны.' },
      { title: 'Симуляция', desc: 'Безрисковая бумажная торговля на рынках.' },
      { title: 'Умный терминал', desc: 'Ручная торговля с риск-ориентированным исполнением.' },
      { title: 'Автообновления', desc: 'Всегда актуально с подписанными обновлениями каналов.' },
      { title: 'Резервное копирование', desc: 'Резервное копирование и восстановление на основе снимков.' },
    ],
    runsTitle: 'Единый трейдинг. На вашей машине.',
    runsSubtitle: 'Одна платформа для всех рынков — работает на вашей инфраструктуре.',
    runsMachine: '🖥️ Ваша машина Windows/Linux',
    runsPlatform: '├── WolfBot — единая платформа',
    runsEngine: '│   ├── Торговый движок',
    runsRisk: '│   ├── Движок риска',
    runsSmart: '│   ├── Умное исполнение',
    runsPortfolio: '│   └── Управление портфелем',
    runsLocalData: '└── Локальные данные и конфигурация',
    runsCrypto: '🔗 Криптобиржи',
    runsMt5: '🔗 Брокеры MT5',
    brokersTitle: 'Крипта + фьючерсы + MT5',
    brokersSubtitle: 'Одна платформа на современных цифровых и традиционных финансовых рынках.',
    brokersViewAll: 'Смотреть все поддерживаемые рынки →',
    cvcTitle: 'Community или Cloud?',
    cvcSubtitle: 'Разместите сами бесплатно или используйте управляемый опыт WolfBot. Та же платформа. Те же рынки.',
    cvcCommunity: 'WolfBot Community',
    cvcCommunityPrice: 'Бесплатно',
    cvcCommunityItems: [
      '✅ Самохостинг на вашей машине',
      '✅ Крипта + фьючерсы + MT5',
      '✅ Полная единая торговая платформа',
      '✅ Поддержка демо-счётов',
      '✅ Поддержка сообщества',
      '— Вы управляете инфраструктурой',
      '— Вы занимаетесь обновлениями',
    ],
    cvcCloud: 'WolfBot Cloud',
    cvcCloudPrice: 'Подписка',
    cvcCloudItems: [
      '✅ Полностью управляемый хостинг',
      '✅ Крипта + фьючерсы + MT5',
      '✅ Полная единая торговая платформа',
      '✅ Поддержка демо-счётов',
      '✅ Приоритетная поддержка',
      '✅ Автоматические обновления',
      '✅ Без обслуживания инфраструктуры',
    ],
    cvcCompareLink: 'Детальное сравнение →',
    releaseTitle: 'Последний релиз',
    releasePublicPreview: 'ПУБЛИЧНАЯ ПРЕДПРОСМОТР',
    releaseBody:
      'Первый публичный релиз. Только Linux (Ubuntu/Debian) — сборка для Windows в этот релиз пока не входит.',
    releaseDownload: 'Скачать',
    releaseGitHub: 'Релиз на GitHub',
    ghTitle: 'Присоединяйтесь к сообществу',
    ghSubtitle: 'Следите за разработкой, задавайте вопросы и делитесь отзывами.',
    ghCardGithub: 'GitHub',
    ghCardGithubDesc: 'Звёзды, релизы, активность',
    ghCardDiscussions: 'Обсуждения',
    ghCardDiscussionsDesc: 'Вопросы и ответы, идеи, шоу и рассказ',
    ghCardRoadmap: 'Дорожная карта',
    ghCardRoadmapDesc: 'Что мы создаём дальше',
    securityTitle: 'Создано для доверия',
    securitySubtitle:
      'WolfBot Community не хранит ваши средства и размещается самостоятельно — вы контролируете свои ключи, инфраструктуру и данные.',
    securityItems: [
      { title: 'API только для торговли', desc: 'Подключайтесь ключами, которые не могут выводить средства.' },
      { title: 'Самохостинг', desc: 'Работает на вашей машине. Никакого доступа третьих лиц к учётным данным.' },
      { title: 'Подписанные релизы', desc: 'Криптографически подписаны. Проверяйте контрольные суммы перед установкой.' },
    ],
    securityLearnMore: 'Подробнее →',
    faqTitle: 'Часто задаваемые вопросы',
    faqViewAll: 'Все вопросы →',
    faqs: [
      {
        q: 'Что такое WolfBot Community?',
        a: 'WolfBot Community — это бесплатная единая торговая платформа с самостоятельным размещением. Она объединяет криптобиржи и брокеров MT5 в одном интерфейсе для автоматизации, исполнения сделок, мониторинга портфеля и управления рисками.',
      },
      {
        q: 'Какие рынки поддерживает WolfBot?',
        a: 'Крипта (Binance, Bybit, BingX, KuCoin, Bitget), крипто-фьючерсы и рынки MT5 (Forex, золото, индексы, акции/CFD). Одна платформа для современной и традиционной финансов.',
      },
      {
        q: 'WolfBot Community бесплатен?',
        a: 'Да — полностью бесплатен. Без подписки, без облачного аккаунта. Размещайте сами на своей Windows- или Linux-машине.',
      },
      {
        q: 'Как его установить?',
        a: 'Скачайте установщик со страницы Download и запустите его. Linux поставляется с .deb, который автоматически настраивает Docker; Windows Setup.exe задокументирован и появится в следующем релизе. Опыт работы с терминалом или Docker не требуется.',
      },
      {
        q: 'Нужен ли мне VPS или облачный сервер?',
        a: 'Нет. WolfBot Community работает на вашем компьютере. VPS нужен только если вы хотите, чтобы он торговал 24/7, пока ваша личная машина выключена.',
      },
      {
        q: 'Что происходит, когда мой ПК выключается?',
        a: 'Торговля просто приостанавливается — ваши счета, стратегии и настройки сохраняются, и боты возобновляются, когда машина снова включается. Если нужна круглосуточная работа, запустите на всегда включённом Linux VPS.',
      },
      {
        q: 'Чем WolfBot отличается от типичного торгового бота?',
        a: 'Типичный бот подключается к одной бирже. WolfBot — это единая платформа: он подключает несколько бирж И брокеров MT5, предоставляет один исполнительный движок, один уровень риска и единый вид портфеля по всем рынкам.',
      },
      {
        q: 'Могу ли я начать с симуляции?',
        a: 'Да. Подключите демо/тестнет-счёт брокера (например, Bybit Demo-ключ — WolfBot определит его автоматически) и торгуйте без риска с реальными рыночными данными и виртуальными средствами на всех поддерживаемых рынках.',
      },
      {
        q: 'Как работают обновления?',
        a: 'Релизы криптографически подписаны и поставляются по каналам (Stable, Beta, Dev Preview). Обновления Linux работают через подписанный апдейтер; контрольные суммы публикуются для каждого установщика, чтобы вы могли проверить перед установкой.',
      },
      {
        q: 'В чём разница с WolfBot Cloud?',
        a: 'Community бесплатен и размещается самостоятельно. Cloud — управляемый сервис. Та же платформа, те же рынки — другой хостинг.',
      },
    ],
    finalCtaTitle: 'Одна платформа. Любой рынок.',
    finalCtaBody:
      'Скачайте WolfBot Community — бесплатно, с самостоятельным размещением на Windows и Linux. Подключите криптобиржи и брокеров MT5. Начните с симуляции.',
    finalCtaDownload: 'Скачать WolfBot Community',
    finalCtaMeta: 'Бесплатно · Windows и Linux · Без регистрации · Крипта + фьючерсы + MT5',
  },

  de: {
    metaTitle: 'WolfBot Community — kostenloser selbstgehosteter Trading-Bot für Windows & Linux',
    metaDescription:
      'Kostenlose, selbstgehostete, einheitliche Trading-Plattform für Windows und Linux. Verbinden Sie Krypto-Börsen, Futures und MT5-Märkte über eine intelligente Oberfläche.',
    stripPublicPreview: 'PUBLIC PREVIEW',
    stripReleaseAvailable: 'WolfBot Community v0.1.0-p12-ghcr-rc17 ist verfügbar',
    stripSeeRelease: 'Release ansehen →',
    heroBadge: 'WolfBot Community by WolfBot.io · Kostenlos & selbstgehostet',
    heroTitle1: 'Kostenlose selbst gehostete Trading-Plattform für Krypto, Futures & MT5',
    heroTitle2: 'Handeln Sie jeden Markt von ',
    heroTitleGradient: 'einer Plattform',
    heroTagline: 'Krypto, Futures und MT5 — vereint in WolfBot.',
    heroDescription:
      'Verbinden Sie moderne Börsen für digitale Vermögenswerte und traditionelle Finanzmärkte über eine einzige Trading-Plattform. Automatisieren Sie Strategien, verwalten Sie Konten, kontrollieren Sie Risiken, führen Sie Trades aus und überwachen Sie Ihr Portfolio — aus einer Oberfläche.',
    heroDownloadCta: 'WolfBot Community herunterladen',
    heroGettingStartedCta: 'Erste Schritte',
    heroMeta: 'Kostenlos · Windows & Linux · Selbstgehostet · Public Preview',
    heroMockupTitle: 'WolfBot — eine Plattform',
    heroMockupLabel: 'Dashboard-Vorschau',
    trustFree: '✅ Kostenlose Community Edition',
    trustSelfHosted: '🖥️ Selbstgehostet auf Windows & Linux',
    trustMarkets: '🌐 Krypto + Futures + MT5',
    trustOfficial: '🔒 Offizielles WolfBot.io-Release',
    installTitle: 'In Minuten installieren',
    installSubtitle: 'Eine Plattform für alle Ihre Märkte. Kein Docker, kein Terminal nötig.',
    installStep1Title: 'Herunterladen',
    installStep1Desc: 'Windows Setup.exe oder Linux .deb',
    installStep2Title: 'Installieren',
    installStep2Desc: 'Doppelklick, Assistent folgen',
    installStep3Title: 'Märkte verbinden',
    installStep3Desc: 'Krypto-Börsen und MT5-Broker hinzufügen',
    installWindowsLink: 'Windows-Anleitung →',
    installLinuxLink: 'Linux-Anleitung →',
    screenshotsTitle: 'WolfBot Community ansehen',
    screenshot1Label: 'Dashboard',
    screenshot1Alt:
      'Übersicht des WolfBot Community-Dashboards mit verbundenen Konten und Schnellzugriff auf Portfolio, Strategien, Bots und Risikozentrum',
    screenshot2Label: 'Kontostatus',
    screenshot2Alt: 'Kontostatus-Seite von WolfBot Community mit PnL, Gebühren und Berechtigungen je Konto',
    featuresTitle: 'Eine Plattform. Jeder Markt.',
    featuresSubtitle:
      'Alles, was Sie auf Krypto- und traditionellen Märkten brauchen — eine Plattform, eine Oberfläche.',
    features: [
      { title: 'Einheitliche Märkte', desc: 'Krypto-Börsen + MT5. Eine Plattform.' },
      { title: 'Eine Oberfläche', desc: 'Konten, Positionen, Orders — ein Dashboard.' },
      { title: 'Smart Execution', desc: 'Einheitliches Order-Routing über alle Märkte.' },
      { title: 'Einheitliches Risiko', desc: 'Positionslimits und Drawdown-Schutz überall.' },
      { title: 'Ein Portfolio', desc: 'Eine Portfolio-Ansicht über alle verbundenen Märkte.' },
      { title: 'Automatisierung', desc: 'Multi-Strategie-Bots, TradingView-Signale, Pipelines.' },
      { title: 'Simulation', desc: 'Risikofrei auf Märkten paper-traden.' },
      { title: 'Smart Terminal', desc: 'Manuelles Trading mit Risiko-bewusster Ausführung.' },
      { title: 'Auto-Updates', desc: 'Mit signierten Kanal-Updates aktuell bleiben.' },
      { title: 'Backup & Wiederherstellung', desc: 'Snapshot-basiertes Backup und Recovery.' },
    ],
    runsTitle: 'Einheitliches Trading. Auf Ihrer Maschine.',
    runsSubtitle: 'Eine Plattform für alle Ihre Märkte — läuft auf Ihrer Infrastruktur.',
    runsMachine: '🖥️ Ihre Windows/Linux-Maschine',
    runsPlatform: '├── WolfBot — einheitliche Plattform',
    runsEngine: '│   ├── Trading-Engine',
    runsRisk: '│   ├── Risiko-Engine',
    runsSmart: '│   ├── Smart Execution',
    runsPortfolio: '│   └── Portfolio-Manager',
    runsLocalData: '└── Lokale Daten & Konfiguration',
    runsCrypto: '🔗 Krypto-Börsen',
    runsMt5: '🔗 MT5-Broker',
    brokersTitle: 'Krypto + Futures + MT5',
    brokersSubtitle: 'Eine Plattform für moderne digitale und traditionelle Finanzmärkte.',
    brokersViewAll: 'Alle unterstützten Märkte ansehen →',
    cvcTitle: 'Community oder Cloud?',
    cvcSubtitle: 'Selbst kostenlos hosten oder das verwaltete WolfBot-Erlebnis nutzen. Gleiche Plattform. Gleiche Märkte.',
    cvcCommunity: 'WolfBot Community',
    cvcCommunityPrice: 'Kostenlos',
    cvcCommunityItems: [
      '✅ Selbstgehostet auf Ihrer Maschine',
      '✅ Krypto + Futures + MT5',
      '✅ Volle einheitliche Trading-Plattform',
      '✅ Demo-Konten-Support',
      '✅ Community-Support',
      '— Sie verwalten die Infrastruktur',
      '— Sie kümmern sich um Updates',
    ],
    cvcCloud: 'WolfBot Cloud',
    cvcCloudPrice: 'Abonnement',
    cvcCloudItems: [
      '✅ Vollständig verwaltetes Hosting',
      '✅ Krypto + Futures + MT5',
      '✅ Volle einheitliche Trading-Plattform',
      '✅ Demo-Konten-Support',
      '✅ Priorisierter Support',
      '✅ Automatische Updates',
      '✅ Keine Infrastruktur-Wartung',
    ],
    cvcCompareLink: 'Detaillierter Vergleich →',
    releaseTitle: 'Neuestes Release',
    releasePublicPreview: 'PUBLIC PREVIEW',
    releaseBody:
      'Erstes öffentliches Release. Nur Linux (Ubuntu/Debian) — ein Windows-Build ist in diesem Release noch nicht enthalten.',
    releaseDownload: 'Herunterladen',
    releaseGitHub: 'GitHub-Release',
    ghTitle: 'Der Community beitreten',
    ghSubtitle: 'Verfolgen Sie Entwicklung, stellen Sie Fragen und teilen Sie Feedback.',
    ghCardGithub: 'GitHub',
    ghCardGithubDesc: 'Stars, Releases, Aktivität',
    ghCardDiscussions: 'Diskussionen',
    ghCardDiscussionsDesc: 'Q&A, Ideen, Show & Tell',
    ghCardRoadmap: 'Roadmap',
    ghCardRoadmapDesc: 'Was wir als Nächstes bauen',
    securityTitle: 'Gebaut für Vertrauen',
    securitySubtitle:
      'WolfBot Community ist nicht-verwahrend und selbstgehostet — Sie kontrollieren Ihre Schlüssel, Ihre Infrastruktur, Ihre Daten.',
    securityItems: [
      { title: 'Trade-Only-API', desc: 'Mit API-Keys verbinden, die keine Gelder abheben können.' },
      { title: 'Selbstgehostet', desc: 'Läuft auf Ihrer Maschine. Kein Drittzugriff auf Anmeldedaten.' },
      { title: 'Signierte Releases', desc: 'Kryptografisch signiert. Prüfen Sie Checksummen vor der Installation.' },
    ],
    securityLearnMore: 'Mehr erfahren →',
    faqTitle: 'Häufig gestellte Fragen',
    faqViewAll: 'Alle Fragen ansehen →',
    faqs: [
      {
        q: 'Was ist WolfBot Community?',
        a: 'WolfBot Community ist eine kostenlose, selbstgehostete, einheitliche Trading-Plattform. Sie verbindet Krypto-Börsen und MT5-Broker in einer Oberfläche für Automatisierung, Ausführung, Portfolio-Überwachung und Risikomanagement.',
      },
      {
        q: 'Welche Märkte unterstützt WolfBot?',
        a: 'Krypto (Binance, Bybit, BingX, KuCoin, Bitget), Krypto-Futures und MT5-Märkte (Forex, Gold, Indizes, Aktien/CFDs). Eine Plattform für moderne und traditionelle Finanzen.',
      },
      {
        q: 'Ist WolfBot Community kostenlos?',
        a: 'Ja — völlig kostenlos. Kein Abo, kein Cloud-Konto nötig. Selbst auf Ihrer eigenen Windows- oder Linux-Maschine hosten.',
      },
      {
        q: 'Wie installiere ich es?',
        a: 'Laden Sie den Installer von der Download-Seite herunter und führen Sie ihn aus. Linux liefert eine .deb, die Docker automatisch einrichtet; Windows Setup.exe ist dokumentiert und kommt in einem Folge-Release. Kein Terminal- oder Docker-Wissen nötig.',
      },
      {
        q: 'Brauche ich eine VPS oder einen Cloud-Server?',
        a: 'Nein. WolfBot Community läuft auf Ihrem eigenen Rechner. Eine VPS brauchen Sie nur, wenn er 24/7 handeln soll, während Ihre persönliche Maschine aus ist.',
      },
      {
        q: 'Was passiert, wenn mein PC ausgeschaltet wird?',
        a: 'Das Trading pausiert einfach — Konten, Strategien und Einstellungen bleiben gespeichert, und Bots laufen weiter, sobald die Maschine wieder an ist. Für Dauerbetrieb nutzen Sie stattdessen eine dauerhaft laufende Linux-VPS.',
      },
      {
        q: 'Wie unterscheidet sich WolfBot von einem typischen Trading-Bot?',
        a: 'Ein typischer Bot verbindet sich mit einer Börse. WolfBot ist eine einheitliche Plattform — sie verbindet mehrere Börsen UND MT5-Broker, bietet eine Execution-Engine, eine Risiko-Ebene und eine Portfolio-Ansicht über alle Märkte.',
      },
      {
        q: 'Kann ich mit Simulation starten?',
        a: 'Ja. Verbinden Sie ein Demo-/Testnet-Konto eines Brokers (z. B. einen Bybit-Demo-Key — WolfBot erkennt ihn automatisch) und traden Sie risikofrei mit echten Marktdaten und virtuellem Guthaben auf allen unterstützten Märkten.',
      },
      {
        q: 'Wie funktionieren Updates?',
        a: 'Releases sind kryptografisch signiert und werden über Kanäle (Stable, Beta, Dev Preview) ausgeliefert. Linux-Updates laufen über den signierten Updater; Checksummen werden für jeden Installer veröffentlicht, damit Sie vor der Installation prüfen können.',
      },
      {
        q: 'Was ist der Unterschied zu WolfBot Cloud?',
        a: 'Community ist kostenlos und selbstgehostet. Cloud ist ein verwalteter Dienst. Gleiche Plattform, gleiche Märkte — anderes Hosting.',
      },
    ],
    finalCtaTitle: 'Eine Plattform. Jeder Markt.',
    finalCtaBody:
      'Laden Sie WolfBot Community herunter — kostenlos, selbstgehostet auf Windows und Linux. Verbinden Sie Krypto-Börsen und MT5-Broker. Starten Sie mit Simulation.',
    finalCtaDownload: 'WolfBot Community herunterladen',
    finalCtaMeta: 'Kostenlos · Windows & Linux · Keine Anmeldung · Krypto + Futures + MT5',
  },

  ja: {
    metaTitle: 'WolfBot Community — Windows & Linux 向け無料セルフホスト取引ボット',
    metaDescription:
      'Windows と Linux に対応した無料のセルフホスト型統合取引プラットフォーム。暗号資産取引所、先物、MT5市場をひとつのスマートなインターフェースで接続します。',
    stripPublicPreview: 'パブリックプレビュー',
    stripReleaseAvailable: 'WolfBot Community v0.1.0-p12-ghcr-rc17 が利用可能になりました',
    stripSeeRelease: 'リリースを見る →',
    heroBadge: 'WolfBot Community by WolfBot.io · 無料＆セルフホスト',
    heroTitle1: '暗号資産・先物・MT5の無料セルフホスト型トレーディングプラットフォーム',
    heroTitle2: 'あらゆる市場をひとつの',
    heroTitleGradient: 'プラットフォームから',
    heroTagline: '暗号資産、先物、MT5 — WolfBot に統合。',
    heroDescription:
      'ひとつの取引プラットフォームで、現代のデジタル資産取引所と伝統的な金融市場を接続。戦略の自動化、口座管理、リスク管理、注文執行、ポートフォリオ監視をすべてひとつの画面で。',
    heroDownloadCta: 'WolfBot Community をダウンロード',
    heroGettingStartedCta: 'はじめる',
    heroMeta: '無料 · Windows & Linux · セルフホスト · パブリックプレビュー',
    heroMockupTitle: 'WolfBot — ひとつのプラットフォーム',
    heroMockupLabel: 'ダッシュボードプレビュー',
    trustFree: '✅ 無料の Community エディション',
    trustSelfHosted: '🖥️ Windows & Linux でセルフホスト',
    trustMarkets: '🌐 暗号資産 + 先物 + MT5',
    trustOfficial: '🔒 公式 WolfBot.io リリース',
    installTitle: '数分でインストール',
    installSubtitle: 'あなたのすべての市場をひとつに。Docker 不要、ターミナル不要。',
    installStep1Title: 'ダウンロード',
    installStep1Desc: 'Windows Setup.exe または Linux .deb',
    installStep2Title: 'インストール',
    installStep2Desc: 'ダブルクリックしてセットアップウィザードに従う',
    installStep3Title: '市場に接続',
    installStep3Desc: '暗号資産取引所と MT5 ブローカーを追加',
    installWindowsLink: 'Windows ガイド →',
    installLinuxLink: 'Linux ガイド →',
    screenshotsTitle: 'WolfBot Community を見る',
    screenshot1Label: 'ダッシュボード',
    screenshot1Alt:
      '接続済みアカウントと、ポートフォリオ・戦略・ボット・リスクセンターへのクイックリンクを表示する WolfBot Community ダッシュボード概要',
    screenshot2Label: '口座ステータス',
    screenshot2Alt: 'PnL・手数料・アカウントごとの権限を表示する WolfBot Community 口座ステータス画面',
    featuresTitle: 'ひとつのプラットフォーム。あらゆる市場。',
    featuresSubtitle:
      '暗号資産と伝統的市場に必要なすべて — ひとつのプラットフォーム、ひとつのインターフェース。',
    features: [
      { title: '統合市場', desc: '暗号資産取引所 + MT5。ひとつのプラットフォーム。' },
      { title: 'ひとつのインターフェース', desc: '口座・ポジション・注文 — ひとつのダッシュボード。' },
      { title: 'スマート執行', desc: '全市場で統合された注文ルーティング。' },
      { title: '統合リスク', desc: 'あらゆる資産にポジション制限とドローダウン保護。' },
      { title: 'ひとつのポートフォリオ', desc: '接続した全市場をひとつのビューで。' },
      { title: '自動化', desc: 'マルチ戦略ボット、TradingView シグナル、パイプライン。' },
      { title: 'シミュレーション', desc: 'ペーパートレードでリスクなく複数市場を体験。' },
      { title: 'スマートターミナル', desc: 'リスクを意識した執行で手動取引。' },
      { title: '自動更新', desc: '署名付きチャンネル更新で常に最新に。' },
      { title: 'バックアップと復元', desc: 'スナップショットベースのバックアップと復旧。' },
    ],
    runsTitle: '統合取引。あなたのマシンで。',
    runsSubtitle: 'すべての市場に接続するひとつのプラットフォーム — あなたのインフラ上で稼働。',
    runsMachine: '🖥️ あなたの Windows/Linux マシン',
    runsPlatform: '├── WolfBot — 統合プラットフォーム',
    runsEngine: '│   ├── 取引エンジン',
    runsRisk: '│   ├── リスクエンジン',
    runsSmart: '│   ├── スマート執行',
    runsPortfolio: '│   └── ポートフォリオマネージャー',
    runsLocalData: '└── ローカルデータ＆設定',
    runsCrypto: '🔗 暗号資産取引所',
    runsMt5: '🔗 MT5 ブローカー',
    brokersTitle: '暗号資産 + 先物 + MT5',
    brokersSubtitle: '現代のデジタル市場と伝統的金融市場をひとつのプラットフォームで。',
    brokersViewAll: '対応するすべての市場を見る →',
    cvcTitle: 'Community か Cloud か？',
    cvcSubtitle: '無料でセルフホストするか、管理された WolfBot 体験を利用するか。同じプラットフォーム、同じ市場。',
    cvcCommunity: 'WolfBot Community',
    cvcCommunityPrice: '無料',
    cvcCommunityItems: [
      '✅ あなたのマシンでセルフホスト',
      '✅ 暗号資産 + 先物 + MT5',
      '✅ 完全な統合取引プラットフォーム',
      '✅ デモ口座サポート',
      '✅ コミュニティサポート',
      '— インフラは自分で管理',
      '— 更新は自分で対応',
    ],
    cvcCloud: 'WolfBot Cloud',
    cvcCloudPrice: 'サブスクリプション',
    cvcCloudItems: [
      '✅ 完全マネージドホスティング',
      '✅ 暗号資産 + 先物 + MT5',
      '✅ 完全な統合取引プラットフォーム',
      '✅ デモ口座サポート',
      '✅ 優先サポート',
      '✅ 自動更新',
      '✅ インフラ保守なし',
    ],
    cvcCompareLink: '詳細な比較 →',
    releaseTitle: '最新リリース',
    releasePublicPreview: 'パブリックプレビュー',
    releaseBody:
      '最初のパブリックリリース。Linux（Ubuntu/Debian）のみ — Windows ビルドは今回のリリースには含まれていません。',
    releaseDownload: 'ダウンロード',
    releaseGitHub: 'GitHub リリース',
    ghTitle: 'コミュニティに参加する',
    ghSubtitle: '開発を追い、質問し、フィードバックを共有しましょう。',
    ghCardGithub: 'GitHub',
    ghCardGithubDesc: 'スター、リリース、アクティビティ',
    ghCardDiscussions: 'ディスカッション',
    ghCardDiscussionsDesc: 'Q&A、アイデア、見せて教える',
    ghCardRoadmap: 'ロードマップ',
    ghCardRoadmapDesc: '次に作る予定のもの',
    securityTitle: '信頼のために設計',
    securitySubtitle:
      'WolfBot Community はノンカストディアル＆セルフホスト — 鍵、インフラ、データをすべてあなたが管理します。',
    securityItems: [
      { title: '取引専用 API', desc: '出金できない API キーで接続します。' },
      { title: 'セルフホスト', desc: 'あなたのマシンで稼働。第三者には認証情報を渡しません。' },
      { title: '署名付きリリース', desc: '暗号署名済み。インストール前にチェックサムを検証しましょう。' },
    ],
    securityLearnMore: '詳しく見る →',
    faqTitle: 'よくある質問',
    faqViewAll: 'すべての FAQ を見る →',
    faqs: [
      {
        q: 'WolfBot Community とは何ですか？',
        a: 'WolfBot Community は無料のセルフホスト型統合取引プラットフォームです。暗号資産取引所と MT5 ブローカーをひとつのインターフェースに統合し、自動化・執行・ポートフォリオ監視・リスク管理を実現します。',
      },
      {
        q: 'WolfBot はどの市場に対応していますか？',
        a: '暗号資産（Binance、Bybit、BingX、KuCoin、Bitget）、暗号資産先物、MT5 市場（FX、金、指数、株式/CFD）。現代と伝統の金融をひとつのプラットフォームで。',
      },
      {
        q: 'WolfBot Community は無料ですか？',
        a: 'はい — 完全無料。サブスクリプションもクラウドアカウントも不要です。ご自身の Windows または Linux マシンでセルフホストできます。',
      },
      {
        q: 'どうやってインストールしますか？',
        a: 'ダウンロードページからインストーラーを取得して実行します。Linux は .deb を提供し Docker を自動設定します。Windows 版 Setup.exe はドキュメント化済みで、次のリリースで提供予定です。ターミナルや Docker の経験は不要です。',
      },
      {
        q: 'VPS やクラウドサーバーは必要ですか？',
        a: 'いいえ。WolfBot Community はご自身のコンピューターで動作します。個人のマシンを停止している間に 24/7 取引させたい場合のみ VPS が必要です。',
      },
      {
        q: 'PC をシャットダウンするとどうなりますか？',
        a: '取引は単に一時停止します — 口座・戦略・設定は保存され、マシンが再起動するとボットは再開します。24時間運用が必要なら、常時起動の Linux VPS で実行してください。',
      },
      {
        q: 'WolfBot は一般的な取引ボットとどう違いますか？',
        a: '一般的なボットはひとつの取引所に接続します。WolfBot は統合プラットフォーム — 複数の取引所と MT5 ブローカーを接続し、ひとつの執行エンジン、ひとつのリスク層、ひとつのポートフォリオビューを全市場で提供します。',
      },
      {
        q: 'シミュレーションから始められますか？',
        a: 'はい。ブローカーのデモ/テストネット口座（例：Bybit デモキー — WolfBot が自動検出）を接続し、実データと仮想資金で全対応市場をリスクなく取引できます。',
      },
      {
        q: '更新はどのように機能しますか？',
        a: 'リリースは暗号署名され、チャンネル（Stable、Beta、Dev Preview）で配信されます。Linux の更新は署名付きアップデータで実行。各インストーラーにチェックサムが公開されるため、インストール前に検証できます。',
      },
      {
        q: 'WolfBot Cloud との違いは？',
        a: 'Community は無料でセルフホスト。Cloud はマネージドサービスです。同じプラットフォーム、同じ市場 — ホスティングが異なります。',
      },
    ],
    finalCtaTitle: 'ひとつのプラットフォーム。あらゆる市場。',
    finalCtaBody:
      'WolfBot Community をダウンロード — Windows と Linux で無料・セルフホスト。暗号資産取引所と MT5 ブローカーを接続し、シミュレーションから始めましょう。',
    finalCtaDownload: 'WolfBot Community をダウンロード',
    finalCtaMeta: '無料 · Windows & Linux · 登録不要 · 暗号資産 + 先物 + MT5',
  },

  ko: {
    metaTitle: 'WolfBot Community — Windows 및 Linux용 무료 자체 호스팅 트레이딩 봇',
    metaDescription:
      'Windows와 Linux를 위한 무료 자체 호스팅 통합 거래 플랫폼. 하나의 지능적인 인터페이스로 암호화폐 거래소, 선물, MT5 시장을 연결합니다.',
    stripPublicPreview: '공개 미리보기',
    stripReleaseAvailable: 'WolfBot Community v0.1.0-p12-ghcr-rc17 사용 가능',
    stripSeeRelease: '릴리스 보기 →',
    heroBadge: 'WolfBot Community by WolfBot.io · 무료 및 자체 호스팅',
    heroTitle1: '암호화폐, 선물 및 MT5를 위한 무료 자체 호스팅 거래 플랫폼',
    heroTitle2: '모든 시장을 ',
    heroTitleGradient: '하나의 플랫폼에서',
    heroTagline: '암호화폐, 선물, MT5 — WolfBot에 통합.',
    heroDescription:
      '하나의 거래 플랫폼으로 현대 디지털 자산 거래소와 전통 금융 시장을 연결합니다. 전략 자동화, 계정 관리, 리스크 제어, 주문 실행, 포트폴리오 모니터링을 하나의 인터페이스에서.',
    heroDownloadCta: 'WolfBot Community 다운로드',
    heroGettingStartedCta: '시작하기',
    heroMeta: '무료 · Windows 및 Linux · 자체 호스팅 · 공개 미리보기',
    heroMockupTitle: 'WolfBot — 하나의 플랫폼',
    heroMockupLabel: '대시보드 미리보기',
    trustFree: '✅ 무료 Community 에디션',
    trustSelfHosted: '🖥️ Windows 및 Linux에서 자체 호스팅',
    trustMarkets: '🌐 암호화폐 + 선물 + MT5',
    trustOfficial: '🔒 공식 WolfBot.io 릴리스',
    installTitle: '몇 분이면 설치',
    installSubtitle: '모든 시장을 위한 하나의 플랫폼. Docker 없음, 터미널 불필요.',
    installStep1Title: '다운로드',
    installStep1Desc: 'Windows Setup.exe 또는 Linux .deb',
    installStep2Title: '설치',
    installStep2Desc: '더블클릭하고 설치 마법사를 따르세요',
    installStep3Title: '시장 연결',
    installStep3Desc: '암호화폐 거래소 및 MT5 브로커 추가',
    installWindowsLink: 'Windows 가이드 →',
    installLinuxLink: 'Linux 가이드 →',
    screenshotsTitle: 'WolfBot Community 보기',
    screenshot1Label: '대시보드',
    screenshot1Alt:
      '연결된 계정과 포트폴리오, 전략, 봇, 리스크 센터로의 빠른 링크를 표시하는 WolfBot Community 대시보드 개요',
    screenshot2Label: '계정 상태',
    screenshot2Alt: 'PnL, 수수료 및 계정별 권한을 표시하는 WolfBot Community 계정 상태 페이지',
    featuresTitle: '하나의 플랫폼. 모든 시장.',
    featuresSubtitle: '암호화폐와 전통 시장을 아우르는 모든 것 — 하나의 플랫폼, 하나의 인터페이스.',
    features: [
      { title: '통합 시장', desc: '암호화폐 거래소 + MT5. 하나의 플랫폼.' },
      { title: '하나의 인터페이스', desc: '계정, 포지션, 주문 — 하나의 대시보드.' },
      { title: '스마트 실행', desc: '모든 시장에서 통합된 주문 라우팅.' },
      { title: '통합 리스크', desc: '모든 것에 포지션 한도와 드로다운 보호.' },
      { title: '하나의 포트폴리오', desc: '연결된 모든 시장에 대한 단일 포트폴리오 뷰.' },
      { title: '자동화', desc: '멀티 전략 봇, TradingView 신호, 파이프라인.' },
      { title: '시뮬레이션', desc: '다양한 시장에서 리스크 없이 페이퍼 트레이딩.' },
      { title: '스마트 터미널', desc: '리스크를 인지한 실행으로 수동 거래.' },
      { title: '자동 업데이트', desc: '서명된 채널 업데이트로 항상 최신 유지.' },
      { title: '백업 및 복원', desc: '스냅샷 기반 백업 및 복구.' },
    ],
    runsTitle: '통합 거래. 내 컴퓨터에서.',
    runsSubtitle: '모든 시장을 연결하는 하나의 플랫폼 — 당신의 인프라에서 실행.',
    runsMachine: '🖥️ 내 Windows/Linux 컴퓨터',
    runsPlatform: '├── WolfBot — 통합 플랫폼',
    runsEngine: '│   ├── 거래 엔진',
    runsRisk: '│   ├── 리스크 엔진',
    runsSmart: '│   ├── 스마트 실행',
    runsPortfolio: '│   └── 포트폴리오 관리자',
    runsLocalData: '└── 로컬 데이터 및 구성',
    runsCrypto: '🔗 암호화폐 거래소',
    runsMt5: '🔗 MT5 브로커',
    brokersTitle: '암호화폐 + 선물 + MT5',
    brokersSubtitle: '현대 디지털 시장과 전통 금융 시장을 아우르는 하나의 플랫폼.',
    brokersViewAll: '지원되는 모든 시장 보기 →',
    cvcTitle: 'Community 아니면 Cloud?',
    cvcSubtitle: '무료로 자체 호스팅하거나 관리되는 WolfBot 경험을 이용하세요. 같은 플랫폼, 같은 시장.',
    cvcCommunity: 'WolfBot Community',
    cvcCommunityPrice: '무료',
    cvcCommunityItems: [
      '✅ 내 컴퓨터에서 자체 호스팅',
      '✅ 암호화폐 + 선물 + MT5',
      '✅ 완전한 통합 거래 플랫폼',
      '✅ 데모 계정 지원',
      '✅ 커뮤니티 지원',
      '— 인프라는 직접 관리',
      '— 업데이트는 직접 처리',
    ],
    cvcCloud: 'WolfBot Cloud',
    cvcCloudPrice: '구독',
    cvcCloudItems: [
      '✅ 완전 관리형 호스팅',
      '✅ 암호화폐 + 선물 + MT5',
      '✅ 완전한 통합 거래 플랫폼',
      '✅ 데모 계정 지원',
      '✅ 우선 지원',
      '✅ 자동 업데이트',
      '✅ 인프라 유지보수 불필요',
    ],
    cvcCompareLink: '상세 비교 →',
    releaseTitle: '최신 릴리스',
    releasePublicPreview: '공개 미리보기',
    releaseBody:
      '첫 공개 릴리스. Linux(Ubuntu/Debian) 전용 — Windows 빌드는 아직 이 릴리스에 포함되지 않았습니다.',
    releaseDownload: '다운로드',
    releaseGitHub: 'GitHub 릴리스',
    ghTitle: '커뮤니티에 참여하세요',
    ghSubtitle: '개발을 팔로우하고, 질문하고, 피드백을 공유하세요.',
    ghCardGithub: 'GitHub',
    ghCardGithubDesc: '스타, 릴리스, 활동',
    ghCardDiscussions: '토론',
    ghCardDiscussionsDesc: 'Q&A, 아이디어, 소개 및 공유',
    ghCardRoadmap: '로드맵',
    ghCardRoadmapDesc: '다음에 만들 것',
    securityTitle: '신뢰를 위해 구축됨',
    securitySubtitle:
      'WolfBot Community는 비수탁형이며 자체 호스팅 방식입니다 — 키, 인프라, 데이터를 직접 통제합니다.',
    securityItems: [
      { title: '거래 전용 API', desc: '출금할 수 없는 API 키로 연결하세요.' },
      { title: '자체 호스팅', desc: '내 컴퓨터에서 실행. 자격 증명에 제3자 접근 없음.' },
      { title: '서명된 릴리스', desc: '암호화 서명됨. 설치 전 체크섬을 검증하세요.' },
    ],
    securityLearnMore: '더 알아보기 →',
    faqTitle: '자주 묻는 질문',
    faqViewAll: '모든 FAQ 보기 →',
    faqs: [
      {
        q: 'WolfBot Community란 무엇인가요?',
        a: 'WolfBot Community는 무료 자체 호스팅 통합 거래 플랫폼입니다. 암호화폐 거래소와 MT5 브로커를 하나의 인터페이스로 연결하여 자동화, 실행, 포트폴리오 모니터링, 리스크 관리를 제공합니다.',
      },
      {
        q: 'WolfBot은 어떤 시장을 지원하나요?',
        a: '암호화폐(Binance, Bybit, BingX, KuCoin, Bitget), 암호화폐 선물, MT5 시장(Forex, 금, 지수, 주식/CFD). 현대 금융과 전통 금융을 하나의 플랫폼으로.',
      },
      {
        q: 'WolfBot Community는 무료인가요?',
        a: '네 — 완전 무료입니다. 구독도 클라우드 계정도 필요 없습니다. 자신의 Windows 또는 Linux 컴퓨터에서 자체 호스팅하세요.',
      },
      {
        q: '어떻게 설치하나요?',
        a: '다운로드 페이지에서 설치 프로그램을 받아 실행하세요. Linux는 Docker를 자동으로 설정하는 .deb를 제공합니다. Windows Setup.exe는 문서화되어 있으며 후속 릴리스에서 제공됩니다. 터미널이나 Docker 경험이 필요 없습니다.',
      },
      {
        q: 'VPS나 클라우드 서버가 필요한가요?',
        a: '아니요. WolfBot Community는 내 컴퓨터에서 실행됩니다. 개인 컴퓨터가 꺼져 있는 동안 24/7 거래하고 싶을 때만 VPS가 필요합니다.',
      },
      {
        q: 'PC 전원이 꺼지면 어떻게 되나요?',
        a: '거래가 잠시 중단될 뿐입니다 — 계정, 전략, 설정은 저장되고, 컴퓨터가 켜지면 봇이 다시 시작됩니다. 24시간 운영이 필요하면 항상 켜져 있는 Linux VPS에서 실행하세요.',
      },
      {
        q: 'WolfBot은 일반 트레이딩 봇과 어떻게 다른가요?',
        a: '일반 봇은 하나의 거래소에 연결됩니다. WolfBot은 통합 플랫폼 — 여러 거래소와 MT5 브로커를 연결하고, 하나의 실행 엔진, 하나의 리스크 레이어, 모든 시장에 걸친 단일 포트폴리오 뷰를 제공합니다.',
      },
      {
        q: '시뮬레이션으로 시작할 수 있나요?',
        a: '네. 브로커 데모/테스트넷 계정(예: Bybit 데모 키 — WolfBot이 자동 감지)을 연결하고, 실제 시장 데이터와 가상 자금으로 모든 지원 시장에서 리스크 없이 거래하세요.',
      },
      {
        q: '업데이트는 어떻게 작동하나요?',
        a: '릴리스는 암호화 서명되며 채널(Stable, Beta, Dev Preview)로 배포됩니다. Linux 업데이트는 서명된 업데이터를 통해 실행됩니다. 각 설치 프로그램에 체크섬이 게시되어 설치 전 검증할 수 있습니다.',
      },
      {
        q: 'WolfBot Cloud와의 차이는 무엇인가요?',
        a: 'Community는 무료이며 자체 호스팅입니다. Cloud는 관리형 서비스입니다. 같은 플랫폼, 같은 시장 — 호스팅만 다릅니다.',
      },
    ],
    finalCtaTitle: '하나의 플랫폼. 모든 시장.',
    finalCtaBody:
      'WolfBot Community를 다운로드하세요 — Windows와 Linux에서 무료·자체 호스팅. 암호화폐 거래소와 MT5 브로커를 연결하고 시뮬레이션으로 시작하세요.',
    finalCtaDownload: 'WolfBot Community 다운로드',
    finalCtaMeta: '무료 · Windows 및 Linux · 가입 불필요 · 암호화폐 + 선물 + MT5',
  },

  hi: {
    metaTitle: 'WolfBot Community — Windows और Linux के लिए निःशुल्क सेल्फ-होस्टेड ट्रेडिंग बॉट',
    metaDescription:
      'Windows और Linux के लिए मुफ़्त सेल्फ-होस्टेड एकीकृत ट्रेडिंग प्लेटफ़ॉर्म। एक स्मार्ट इंटरफ़ेस से क्रिप्टो एक्सचेंज, फ्यूचर्स और MT5 बाज़ारों को जोड़ें।',
    stripPublicPreview: 'सार्वजनिक प्रीव्यू',
    stripReleaseAvailable: 'WolfBot Community v0.1.0-p12-ghcr-rc17 उपलब्ध है',
    stripSeeRelease: 'रिलीज़ देखें →',
    heroBadge: 'WolfBot Community by WolfBot.io · निःशुल्क और सेल्फ-होस्टेड',
    heroTitle1: 'क्रिप्टो, फ़्यूचर्स और MT5 के लिए निःशुल्क सेल्फ-होस्टेड ट्रेडिंग प्लेटफ़ॉर्म',
    heroTitle2: 'हर बाज़ार में ट्रेड करें ',
    heroTitleGradient: 'एक प्लेटफ़ॉर्म पर',
    heroTagline: 'क्रिप्टो, फ्यूचर्स और MT5 — WolfBot में एकीकृत।',
    heroDescription:
      'एक ही ट्रेडिंग प्लेटफ़ॉर्म से आधुनिक डिजिटल-एसेट एक्सचेंज और पारंपरिक वित्तीय बाज़ारों को जोड़ें। एक ही इंटरफ़ेस में रणनीतियाँ स्वचालित करें, खाते प्रबंधित करें, जोखिम नियंत्रित करें, ट्रेड निष्पादित करें और पोर्टफोलियो देखें।',
    heroDownloadCta: 'WolfBot Community डाउनलोड करें',
    heroGettingStartedCta: 'शुरुआत करें',
    heroMeta: 'निःशुल्क · Windows और Linux · सेल्फ-होस्टेड · सार्वजनिक प्रीव्यू',
    heroMockupTitle: 'WolfBot — एक प्लेटफ़ॉर्म',
    heroMockupLabel: 'डैशबोर्ड प्रीव्यू',
    trustFree: '✅ निःशुल्क Community Edition',
    trustSelfHosted: '🖥️ Windows और Linux पर सेल्फ-होस्टेड',
    trustMarkets: '🌐 क्रिप्टो + फ्यूचर्स + MT5',
    trustOfficial: '🔒 आधिकारिक WolfBot.io रिलीज़',
    installTitle: 'मिनटों में इंस्टॉल करें',
    installSubtitle: 'आपके सभी बाज़ारों के लिए एक प्लेटफ़ॉर्म। न Docker, न टर्मिनल।',
    installStep1Title: 'डाउनलोड करें',
    installStep1Desc: 'Windows Setup.exe या Linux .deb',
    installStep2Title: 'इंस्टॉल करें',
    installStep2Desc: 'डबल-क्लिक करें, सेटअप विज़ार्ड का पालन करें',
    installStep3Title: 'बाज़ार कनेक्ट करें',
    installStep3Desc: 'क्रिप्टो एक्सचेंज और MT5 ब्रोकर जोड़ें',
    installWindowsLink: 'Windows गाइड →',
    installLinuxLink: 'Linux गाइड →',
    screenshotsTitle: 'WolfBot Community देखें',
    screenshot1Label: 'डैशबोर्ड',
    screenshot1Alt:
      'WolfBot Community डैशबोर्ड का अवलोकन जो पोर्टफोलियो, रणनीतियों, बॉट्स और रिस्क सेंटर के क्विक लिंक दिखाता है',
    screenshot2Label: 'खाता स्थिति',
    screenshot2Alt: 'WolfBot Community खाता स्थिति पृष्ठ जो PnL, शुल्क और प्रति-खाता अनुमतियाँ दिखाता है',
    featuresTitle: 'एक प्लेटफ़ॉर्म। हर बाज़ार।',
    featuresSubtitle: 'क्रिप्टो और पारंपरिक बाज़ारों के लिए आपको जो कुछ भी चाहिए — एक प्लेटफ़ॉर्म, एक इंटरफ़ेस।',
    features: [
      { title: 'एकीकृत बाज़ार', desc: 'क्रिप्टो एक्सचेंज + MT5। एक प्लेटफ़ॉर्म।' },
      { title: 'एक इंटरफ़ेस', desc: 'खाते, स्थितियाँ, ऑर्डर — एक डैशबोर्ड।' },
      { title: 'स्मार्ट निष्पादन', desc: 'सभी बाज़ारों में एकीकृत ऑर्डर रूटिंग।' },
      { title: 'एकीकृत जोखिम', desc: 'हर चीज़ पर पोजीशन लिमिट और ड्रॉडाउन गार्ड।' },
      { title: 'एक पोर्टफोलियो', desc: 'सभी कनेक्टेड बाज़ारों का एक ही पोर्टफोलियो दृश्य।' },
      { title: 'स्वचालन', desc: 'मल्टी-स्ट्रैटेजी बॉट, TradingView सिग्नल, पाइपलाइन।' },
      { title: 'सिमुलेशन', desc: 'सभी बाज़ारों में जोखिम-मुक्त पेपर ट्रेडिंग।' },
      { title: 'स्मार्ट टर्मिनल', desc: 'जोखिम-जागरूक निष्पादन के साथ मैनुअल ट्रेडिंग।' },
      { title: 'ऑटो अपडेट', desc: 'साइन किए गए चैनल अपडेट से हमेशा अपडेट रहें।' },
      { title: 'बैकअप और पुनर्स्थापना', desc: 'स्नैपशॉट-आधारित बैकअप और रिकवरी।' },
    ],
    runsTitle: 'एकीकृत ट्रेडिंग। आपकी मशीन पर।',
    runsSubtitle: 'आपके सभी बाज़ारों को जोड़ने वाला एक प्लेटफ़ॉर्म — आपके इन्फ्रास्ट्रक्चर पर चलता है।',
    runsMachine: '🖥️ आपकी Windows/Linux मशीन',
    runsPlatform: '├── WolfBot — एकीकृत प्लेटफ़ॉर्म',
    runsEngine: '│   ├── ट्रेडिंग इंजन',
    runsRisk: '│   ├── रिस्क इंजन',
    runsSmart: '│   ├── स्मार्ट निष्पादन',
    runsPortfolio: '│   └── पोर्टफोलियो मैनेजर',
    runsLocalData: '└── स्थानीय डेटा और कॉन्फ़िग',
    runsCrypto: '🔗 क्रिप्टो एक्सचेंज',
    runsMt5: '🔗 MT5 ब्रोकर',
    brokersTitle: 'क्रिप्टो + फ्यूचर्स + MT5',
    brokersSubtitle: 'आधुनिक डिजिटल बाज़ारों और पारंपरिक वित्तीय बाज़ारों का एक प्लेटफ़ॉर्म।',
    brokersViewAll: 'सभी समर्थित बाज़ार देखें →',
    cvcTitle: 'Community या Cloud?',
    cvcSubtitle: 'मुफ़्त में सेल्फ-होस्ट करें या प्रबंधित WolfBot अनुभव उपयोग करें। वही प्लेटफ़ॉर्म। वही बाज़ार।',
    cvcCommunity: 'WolfBot Community',
    cvcCommunityPrice: 'निःशुल्क',
    cvcCommunityItems: [
      '✅ अपनी मशीन पर सेल्फ-होस्टेड',
      '✅ क्रिप्टो + फ्यूचर्स + MT5',
      '✅ पूर्ण एकीकृत ट्रेडिंग प्लेटफ़ॉर्म',
      '✅ डेमो खाता सहायता',
      '✅ समुदाय सहायता',
      '— आप इन्फ्रास्ट्रक्चर प्रबंधित करते हैं',
      '— आप अपडेट संभालते हैं',
    ],
    cvcCloud: 'WolfBot Cloud',
    cvcCloudPrice: 'सदस्यता',
    cvcCloudItems: [
      '✅ पूर्ण रूप से प्रबंधित होस्टिंग',
      '✅ क्रिप्टो + फ्यूचर्स + MT5',
      '✅ पूर्ण एकीकृत ट्रेडिंग प्लेटफ़ॉर्म',
      '✅ डेमो खाता सहायता',
      '✅ प्राथमिकता सहायता',
      '✅ स्वचालित अपडेट',
      '✅ कोई इन्फ्रास्ट्रक्चर रखरखाव नहीं',
    ],
    cvcCompareLink: 'विस्तृत तुलना →',
    releaseTitle: 'नवीनतम रिलीज़',
    releasePublicPreview: 'सार्वजनिक प्रीव्यू',
    releaseBody:
      'पहला सार्वजनिक रिलीज़। केवल Linux (Ubuntu/Debian) — Windows बिल्ड अभी इस रिलीज़ में शामिल नहीं है।',
    releaseDownload: 'डाउनलोड करें',
    releaseGitHub: 'GitHub रिलीज़',
    ghTitle: 'समुदाय से जुड़ें',
    ghSubtitle: 'विकास को फ़ॉलो करें, प्रश्न पूछें और प्रतिक्रिया साझा करें।',
    ghCardGithub: 'GitHub',
    ghCardGithubDesc: 'स्टार, रिलीज़, गतिविधि',
    ghCardDiscussions: 'चर्चाएँ',
    ghCardDiscussionsDesc: 'प्रश्न-उत्तर, विचार, दिखाओ और बताओ',
    ghCardRoadmap: 'रोडमैप',
    ghCardRoadmapDesc: 'हम आगे क्या बना रहे हैं',
    securityTitle: 'विश्वास के लिए निर्मित',
    securitySubtitle:
      'WolfBot Community गैर-हिरासती और सेल्फ-होस्टेड है — आपकी कुंजियाँ, आपका इन्फ्रास्ट्रक्चर, आपका डेटा आपके नियंत्रण में।',
    securityItems: [
      { title: 'केवल-ट्रेड API', desc: 'ऐसे API कुंजियों से जुड़ें जो धन नहीं निकाल सकतीं।' },
      { title: 'सेल्फ-होस्टेड', desc: 'आपकी मशीन पर चलता है। क्रेडेंशियल तक कोई तीसरा पक्ष नहीं।' },
      { title: 'साइन किए रिलीज़', desc: 'क्रिप्टोग्राफ़िक रूप से साइन किए। इंस्टॉल से पहले चेकसम सत्यापित करें।' },
    ],
    securityLearnMore: 'और जानें →',
    faqTitle: 'अक्सर पूछे जाने वाले प्रश्न',
    faqViewAll: 'सभी प्रश्न देखें →',
    faqs: [
      {
        q: 'WolfBot Community क्या है?',
        a: 'WolfBot Community एक निःशुल्क सेल्फ-होस्टेड एकीकृत ट्रेडिंग प्लेटफ़ॉर्म है। यह क्रिप्टो एक्सचेंज और MT5 ब्रोकर को एक इंटरफ़ेस में जोड़ता है — स्वचालन, निष्पादन, पोर्टफोलियो निगरानी और जोखिम प्रबंधन के लिए।',
      },
      {
        q: 'WolfBot किन बाज़ारों को सपोर्ट करता है?',
        a: 'क्रिप्टो (Binance, Bybit, BingX, KuCoin, Bitget), क्रिप्टो फ्यूचर्स और MT5 बाज़ार (फॉरेक्स, सोना, इंडेक्स, स्टॉक/सीएफडी)। आधुनिक और पारंपरिक वित्त के लिए एक प्लेटफ़ॉर्म।',
      },
      {
        q: 'क्या WolfBot Community मुफ़्त है?',
        a: 'हाँ — पूर्णतः निःशुल्क। कोई सदस्यता नहीं, कोई क्लाउड खाता नहीं। अपनी Windows या Linux मशीन पर सेल्फ-होस्ट करें।',
      },
      {
        q: 'मैं इसे कैसे इंस्टॉल करूँ?',
        a: 'डाउनलोड पृष्ठ से इंस्टॉलर डाउनलोड करें और चलाएँ। Linux एक .deb देता है जो Docker को स्वचालित रूप से सेट करता है; Windows Setup.exe दर्ज किया गया है और अगले रिलीज़ में आ रहा है। टर्मिनल या Docker का अनुभव आवश्यक नहीं।',
      },
      {
        q: 'क्या मुझे VPS या क्लाउड सर्वर चाहिए?',
        a: 'नहीं। WolfBot Community आपके अपने कंप्यूटर पर चलता है। आपको VPS की आवश्यकता केवल तभी है जब आप चाहते हैं कि आपकी मशीन बंद होने पर भी यह 24/7 ट्रेड करे।',
      },
      {
        q: 'मेरा पीसी बंद होने पर क्या होगा?',
        a: 'ट्रेडिंग बस रुक जाती है — आपके खाते, रणनीतियाँ और सेटिंग्स सहेजी जाती हैं, और मशीन वापस आने पर बॉट फिर से शुरू हो जाते हैं। 24 घंटे संचालन चाहिए तो हमेशा चालू Linux VPS पर चलाएँ।',
      },
      {
        q: 'WolfBot सामान्य ट्रेडिंग बॉट से कैसे अलग है?',
        a: 'सामान्य बॉट एक एक्सचेंज से जुड़ता है। WolfBot एक एकीकृत प्लेटफ़ॉर्म है — यह कई एक्सचेंज और MT5 ब्रोकर से जुड़ता है, एक निष्पादन इंजन, एक जोखिम परत और सभी बाज़ारों पर एक पोर्टफोलियो दृश्य प्रदान करता है।',
      },
      {
        q: 'क्या मैं सिमुलेशन से शुरुआत कर सकता हूँ?',
        a: 'हाँ। ब्रोकर का डेमो/टेस्टनेट खाता जोड़ें (जैसे Bybit डेमो कुंजी — WolfBot इसे स्वतः पहचानता है) और वास्तविक बाज़ार डेटा व आभासी धन से हर समर्थित बाज़ार में जोखिम-मुक्त ट्रेड करें।',
      },
      {
        q: 'अपडेट कैसे काम करते हैं?',
        a: 'रिलीज़ क्रिप्टोग्राफ़िक रूप से साइन किए जाते हैं और चैनलों (Stable, Beta, Dev Preview) पर भेजे जाते हैं। Linux अपडेट साइन किए अपडेटर से चलते हैं; हर इंस्टॉलर के लिए चेकसम प्रकाशित होते हैं ताकि आप इंस्टॉल से पहले सत्यापित कर सकें।',
      },
      {
        q: 'WolfBot Cloud से क्या अंतर है?',
        a: 'Community मुफ़्त और सेल्फ-होस्टेड है। Cloud एक प्रबंधित सेवा है। वही प्लेटफ़ॉर्म, वही बाज़ार — केवल होस्टिंग अलग।',
      },
    ],
    finalCtaTitle: 'एक प्लेटफ़ॉर्म। हर बाज़ार।',
    finalCtaBody:
      'WolfBot Community डाउनलोड करें — Windows और Linux पर निःशुल्क, सेल्फ-होस्टेड। क्रिप्टो एक्सचेंज और MT5 ब्रोकर जोड़ें। सिमुलेशन से शुरुआत करें।',
    finalCtaDownload: 'WolfBot Community डाउनलोड करें',
    finalCtaMeta: 'निःशुल्क · Windows और Linux · साइनअप आवश्यक नहीं · क्रिप्टो + फ्यूचर्स + MT5',
  },
}

