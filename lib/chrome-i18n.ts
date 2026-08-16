/**
 * Navigation "chrome" i18n (PLAN §91) — header + footer labels.
 * ============================================================
 * The page content (`content/<locale>/*.md`, localized homepages) is already
 * translated. This dictionary makes the *site navigation shell* (header nav,
 * header CTAs, footer columns + links, footer tagline) follow the active
 * locale too, so a visitor on /vi sees the whole chrome in Vietnamese, not
 * just the body.
 *
 * Terms that are proper nouns or intentionally untranslated stay English in
 * every locale (WolfBot, WolfBot Cloud, GitHub, MT5, COMMUNITY brand mark).
 * Column/accordion titles and generic labels (Download, Markets, Docs...) are
 * translated where a natural translation exists.
 *
 * English is the reference; every locale entry keeps the same shape the
 * Header/Footer read. When a locale is missing a key, the component falls back
 * to the English string so navigation never breaks.
 */
export interface ChromeI18n {
  /* Header nav */
  download: string
  gettingStarted: string
  markets: string
  docs: string
  releases: string
  academy: string
  security: string
  /* Header aside + CTA */
  github: string
  wolfbotCloud: string
  wolfbotCommunityMark: string // "COMMUNITY" suffix next to the logo
  /* Mobile nav accessibility labels */
  chromeAccessibilityOpen: string // "Open navigation"
  chromeAccessibilityClose: string // "Close navigation"
  /* Footer section titles */
  product: string
  learn: string
  community: string
  wolfbot: string
  contact: string
  /* Footer link labels */
  features: string
  faq: string
  discussions: string
  issues: string
  roadmap: string
  wolfbotDotIo: string
  methodology: string
  about: string
  support: string
  /* Footer contact + tagline + meta */
  contactIntro: string
  tagline: string // "One Platform. Every Market."
  footerMeta: string // "Free · Self-Hosted · Crypto + Futures + MT5"
}

function c(data: Partial<ChromeI18n>): ChromeI18n {
  const en = {
    download: 'Download',
    gettingStarted: 'Getting Started',
    markets: 'Markets',
    docs: 'Docs',
    releases: 'Releases',
    academy: 'Academy',
    security: 'Security',
    github: 'GitHub',
    wolfbotCloud: 'WolfBot Cloud',
    wolfbotCommunityMark: 'COMMUNITY',
    chromeAccessibilityOpen: 'Open navigation',
    chromeAccessibilityClose: 'Close navigation',
    product: 'Product',
    learn: 'Learn',
    community: 'Community',
    wolfbot: 'WolfBot',
    contact: 'Contact',
    features: 'Features',
    faq: 'FAQ',
    discussions: 'Discussions',
    issues: 'Issues',
    roadmap: 'Roadmap',
    wolfbotDotIo: 'WolfBot.io',
    methodology: 'Methodology',
    about: 'About',
    support: 'Support',
    contactIntro: 'For any inquiries, please send to:',
    tagline: 'One Platform. Every Market.',
    footerMeta: 'Free · Self-Hosted · Crypto + Futures + MT5',
  }
  return { ...en, ...data } as ChromeI18n
}

export const CHROME_COPY: Record<string, ChromeI18n> = {
  en: c({}),
  vi: c({
    download: 'Tải xuống',
    gettingStarted: 'Bắt đầu',
    markets: 'Thị trường',
    docs: 'Tài liệu',
    releases: 'Bản phát hành',
    academy: 'Học viện',
    security: 'Bảo mật',
    github: 'GitHub',
    wolfbotCloud: 'WolfBot Cloud',
    wolfbotCommunityMark: 'CỘNG ĐỒNG',
    chromeAccessibilityOpen: 'Mở điều hướng',
    chromeAccessibilityClose: 'Đóng điều hướng',
    product: 'Sản phẩm',
    learn: 'Học hỏi',
    community: 'Cộng đồng',
    wolfbot: 'WolfBot',
    contact: 'Liên hệ',
    features: 'Tính năng',
    faq: 'FAQ',
    discussions: 'Thảo luận',
    issues: 'Vấn đề',
    roadmap: 'Lộ trình',
    wolfbotDotIo: 'WolfBot.io',
    methodology: 'Phương pháp',
    about: 'Giới thiệu',
    support: 'Hỗ trợ',
    contactIntro: 'Mọi thắc mắc, vui lòng gửi đến:',
    tagline: 'Một Nền Tảng. Mọi Thị Trường.',
    footerMeta: 'Miễn phí · Tự lưu trữ · Crypto + Futures + MT5',
  }),
  zh: c({
    download: '下载',
    gettingStarted: '快速开始',
    markets: '市场',
    docs: '文档',
    releases: '发布',
    academy: '学院',
    security: '安全',
    github: 'GitHub',
    wolfbotCloud: 'WolfBot 云端',
    wolfbotCommunityMark: '社区',
    chromeAccessibilityOpen: '打开导航',
    chromeAccessibilityClose: '关闭导航',
    product: '产品',
    learn: '学习',
    community: '社区',
    wolfbot: 'WolfBot',
    contact: '联系',
    features: '功能',
    faq: '常见问题',
    discussions: '讨论',
    issues: '问题',
    roadmap: '路线图',
    wolfbotDotIo: 'WolfBot.io',
    methodology: '方法论',
    contactIntro: '如有任何疑问，请发送至：',
    tagline: '一个平台。所有市场。',
    footerMeta: '免费 · 自托管 · 加密货币 + 期货 + MT5',
  }),
  'pt-br': c({
    download: 'Baixar',
    gettingStarted: 'Primeiros Passos',
    markets: 'Mercados',
    docs: 'Documentação',
    releases: 'Versões',
    academy: 'Academia',
    security: 'Segurança',
    github: 'GitHub',
    wolfbotCloud: 'WolfBot Cloud',
    wolfbotCommunityMark: 'COMUNIDADE',
    chromeAccessibilityOpen: 'Abrir navegação',
    chromeAccessibilityClose: 'Fechar navegação',
    product: 'Produto',
    learn: 'Aprender',
    community: 'Comunidade',
    wolfbot: 'WolfBot',
    contact: 'Contato',
    features: 'Recursos',
    faq: 'Perguntas frequentes',
    discussions: 'Discussões',
    issues: 'Problemas',
    roadmap: 'Roteiro',
    wolfbotDotIo: 'WolfBot.io',
    methodology: 'Metodologia',
    contactIntro: 'Para quaisquer dúvidas, envie para:',
    tagline: 'Uma Plataforma. Todos os Mercados.',
    footerMeta: 'Grátis · Auto-hospedado · Cripto + Futuros + MT5',
  }),
  ru: c({
    download: 'Скачать',
    gettingStarted: 'Начало работы',
    markets: 'Рынки',
    docs: 'Документация',
    releases: 'Релизы',
    academy: 'Академия',
    security: 'Безопасность',
    github: 'GitHub',
    wolfbotCloud: 'WolfBot Cloud',
    wolfbotCommunityMark: 'СООБЩЕСТВО',
    chromeAccessibilityOpen: 'Открыть навигацию',
    chromeAccessibilityClose: 'Закрыть навигацию',
    product: 'Продукт',
    learn: 'Обучение',
    community: 'Сообщество',
    wolfbot: 'WolfBot',
    contact: 'Контакты',
    features: 'Возможности',
    faq: 'FAQ',
    discussions: 'Обсуждения',
    issues: 'Вопросы',
    roadmap: 'Дорожная карта',
    wolfbotDotIo: 'WolfBot.io',
    methodology: 'Методология',
    contactIntro: 'По любым вопросам обращайтесь по адресу:',
    tagline: 'Одна платформа. Все рынки.',
    footerMeta: 'Бесплатно · Собственный хостинг · Крипто + Фьючерсы + MT5',
  }),
  de: c({
    download: 'Herunterladen',
    gettingStarted: 'Erste Schritte',
    markets: 'Märkte',
    docs: 'Dokumentation',
    releases: 'Releases',
    academy: 'Akademie',
    security: 'Sicherheit',
    github: 'GitHub',
    wolfbotCloud: 'WolfBot Cloud',
    wolfbotCommunityMark: 'COMMUNITY',
    chromeAccessibilityOpen: 'Navigation öffnen',
    chromeAccessibilityClose: 'Navigation schließen',
    product: 'Produkt',
    learn: 'Lernen',
    community: 'Community',
    wolfbot: 'WolfBot',
    contact: 'Kontakt',
    features: 'Funktionen',
    faq: 'FAQ',
    discussions: 'Diskussionen',
    issues: 'Probleme',
    roadmap: 'Roadmap',
    wolfbotDotIo: 'WolfBot.io',
    methodology: 'Methodik',
    contactIntro: 'Bei Fragen senden Sie bitte eine E-Mail an:',
    tagline: 'Eine Plattform. Jeder Markt.',
    footerMeta: 'Kostenlos · Selbst gehostet · Krypto + Futures + MT5',
  }),
  ja: c({
    download: 'ダウンロード',
    gettingStarted: 'はじめに',
    markets: '市場',
    docs: 'ドキュメント',
    releases: 'リリース',
    academy: 'アカデミー',
    security: 'セキュリティ',
    github: 'GitHub',
    wolfbotCloud: 'WolfBot Cloud',
    wolfbotCommunityMark: 'コミュニティ',
    chromeAccessibilityOpen: 'ナビゲーションを開く',
    chromeAccessibilityClose: 'ナビゲーションを閉じる',
    product: '製品',
    learn: '学ぶ',
    community: 'コミュニティ',
    wolfbot: 'WolfBot',
    contact: 'お問い合わせ',
    features: '機能',
    faq: 'FAQ',
    discussions: 'ディスカッション',
    issues: '問題',
    roadmap: 'ロードマップ',
    wolfbotDotIo: 'WolfBot.io',
    methodology: '方法論',
    contactIntro: 'お問い合わせは次のアドレスへどうぞ：',
    tagline: 'ひとつのプラットフォーム。あらゆる市場。',
    footerMeta: '無料 · セルフホステッド · 暗号通貨 + 先物 + MT5',
  }),
  ko: c({
    download: '다운로드',
    gettingStarted: '시작하기',
    markets: '시장',
    docs: '문서',
    releases: '릴리스',
    academy: '아카데미',
    security: '보안',
    github: 'GitHub',
    wolfbotCloud: 'WolfBot Cloud',
    wolfbotCommunityMark: '커뮤니티',
    chromeAccessibilityOpen: '네비게이션 열기',
    chromeAccessibilityClose: '네비게이션 닫기',
    product: '제품',
    learn: '학습',
    community: '커뮤니티',
    wolfbot: 'WolfBot',
    contact: '문의',
    features: '기능',
    faq: 'FAQ',
    discussions: '토론',
    issues: '이슈',
    roadmap: '로드맵',
    wolfbotDotIo: 'WolfBot.io',
    methodology: '방법론',
    contactIntro: '문의 사항은 다음으로 보내주세요:',
    tagline: '하나의 플랫폼. 모든 시장.',
    footerMeta: '무료 · 자체 호스팅 · 암호화폐 + 선물 + MT5',
  }),
  hi: c({
    download: 'डाउनलोड करें',
    gettingStarted: 'शुरुआत करें',
    markets: 'बाजार',
    docs: 'दस्तावेज़',
    releases: 'रिलीज़',
    academy: 'अकादमी',
    security: 'सुरक्षा',
    github: 'GitHub',
    wolfbotCloud: 'WolfBot Cloud',
    wolfbotCommunityMark: 'सामुदाय',
    chromeAccessibilityOpen: 'नेविगेशन खोलें',
    chromeAccessibilityClose: 'नेविगेशन बंद करें',
    product: 'उत्पाद',
    learn: 'सीखें',
    community: 'सामुदाय',
    wolfbot: 'WolfBot',
    contact: 'संपर्क',
    features: 'विशेषताएँ',
    faq: 'FAQ',
    discussions: 'चर्चाएँ',
    issues: 'समस्याएँ',
    roadmap: 'रोडमैप',
    wolfbotDotIo: 'WolfBot.io',
    methodology: 'पद्धति',
    contactIntro: 'किसी भी प्रश्न के लिए, यहाँ भेजें:',
    tagline: 'एक ही प्लेटफ़ॉर्म। हर बाज़ार।',
    footerMeta: 'मुफ़्त · सेल्फ़-होस्टेड · क्रिप्टो + फ्यूचर्स + MT5',
  }),
}

/** Get the chrome labels for a locale segment (falls back to English). */
export function chromeFor(segment: string | null | undefined): ChromeI18n {
  if (segment && CHROME_COPY[segment]) return CHROME_COPY[segment]
  return CHROME_COPY.en
}
