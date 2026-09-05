/**
 * Locale registry (PLAN §91 Multilingual).
 * =========================================
 * Single source of truth for every non-English content locale this site
 * ships. Adding a language means: (1) add an entry here, (2) mirror
 * content/<file>.md into content/<urlSegment>/<file>.md translated, (3)
 * regenerate sitemap/llms.txt/search-index via `npm run prebuild-content`.
 * No other file needs a new special case — content.ts, generate-sitemap.ts,
 * generate-llms-txt.ts, app/[...slug]/page.tsx and app/academy/page.tsx all
 * loop over this list instead of hardcoding `'vi'`.
 */
export interface LocaleConfig {
  /** BCP-47-ish code used in hreflang / og:locale-adjacent contexts. */
  code: string
  /** Lowercase URL path segment, e.g. content/<urlSegment>/... -> /<urlSegment>/... */
  urlSegment: string
  /** hreflang attribute value (Google-recommended casing, e.g. "zh-CN"). */
  hreflang: string
  /** Open Graph `og:locale` value, e.g. "vi_VN". */
  ogLocale: string
  /** Human label for llms.txt section headers, e.g. "Tiếng Việt (Vietnamese)". */
  label: string
  /** Short English label for the language switcher menu (e.g. "Vietnamese"). */
  labelEn: string
  /** BCP-47 tag for the <html lang> override on this locale's pages. */
  htmlLang: string
  /** Small UI microcopy dictionary used by the content-page chrome
   *  (frontmatter banner + "next step" label). Each is a short label;
   *  `testedWith` is concatenated directly with the version string
   *  (e.g. "テスト済みバージョン: v" + "0.1.0-beta.9"), so every
   *  locale's phrasing was chosen to read naturally as a prefix. */
  ui: {
    testedWith: string
    lastUpdated: string
    nextStep: string
  }
}

export const LOCALES: LocaleConfig[] = [
  {
    code: 'vi',
    urlSegment: 'vi',
    hreflang: 'vi',
    ogLocale: 'vi_VN',
    label: 'Tiếng Việt (Vietnamese)',
    labelEn: 'Tiếng Việt',
    htmlLang: 'vi',
    ui: { testedWith: 'Đã kiểm thử với WolfBot Community v', lastUpdated: 'Cập nhật lần cuối', nextStep: 'Bước tiếp theo' },
  },
  {
    code: 'zh',
    urlSegment: 'zh',
    hreflang: 'zh-CN',
    ogLocale: 'zh_CN',
    label: '中文 (Chinese)',
    labelEn: '中文',
    htmlLang: 'zh-CN',
    ui: { testedWith: '已在 WolfBot Community v', lastUpdated: '最后更新', nextStep: '下一步' },
  },
  {
    code: 'pt-BR',
    urlSegment: 'pt-br',
    hreflang: 'pt-BR',
    ogLocale: 'pt_BR',
    label: 'Português (Brasil)',
    labelEn: 'Português',
    htmlLang: 'pt-BR',
    ui: { testedWith: 'Testado com WolfBot Community v', lastUpdated: 'Última atualização', nextStep: 'Próximo passo' },
  },
  {
    code: 'ru',
    urlSegment: 'ru',
    hreflang: 'ru',
    ogLocale: 'ru_RU',
    label: 'Русский (Russian)',
    labelEn: 'Русский',
    htmlLang: 'ru',
    ui: { testedWith: 'Протестировано с WolfBot Community v', lastUpdated: 'Последнее обновление', nextStep: 'Следующий шаг' },
  },
  {
    code: 'de',
    urlSegment: 'de',
    hreflang: 'de',
    ogLocale: 'de_DE',
    label: 'Deutsch (German)',
    labelEn: 'Deutsch',
    htmlLang: 'de',
    ui: { testedWith: 'Getestet mit WolfBot Community v', lastUpdated: 'Zuletzt aktualisiert', nextStep: 'Nächster Schritt' },
  },
  {
    code: 'ja',
    urlSegment: 'ja',
    hreflang: 'ja',
    ogLocale: 'ja_JP',
    label: '日本語 (Japanese)',
    labelEn: '日本語',
    htmlLang: 'ja',
    ui: { testedWith: 'テスト済みバージョン: v', lastUpdated: '最終更新', nextStep: '次のステップ' },
  },
  {
    code: 'ko',
    urlSegment: 'ko',
    hreflang: 'ko',
    ogLocale: 'ko_KR',
    label: '한국어 (Korean)',
    labelEn: '한국어',
    htmlLang: 'ko',
    ui: { testedWith: '테스트 버전: v', lastUpdated: '마지막 업데이트', nextStep: '다음 단계' },
  },
  {
    code: 'hi',
    urlSegment: 'hi',
    hreflang: 'hi',
    ogLocale: 'hi_IN',
    label: 'हिन्दी (Hindi)',
    labelEn: 'हिन्दी',
    htmlLang: 'hi',
    ui: { testedWith: 'टेस्ट किया गया संस्करण: v', lastUpdated: 'आखिरी अपडेट', nextStep: 'अगला कदम' },
  },
]

const BY_SEGMENT = new Map(LOCALES.map((l) => [l.urlSegment, l]))

/** Match a browser/navigator locale string (e.g. "de-DE", "pt-BR", "zh-CN",
 *  "ko") to the locale segment that best represents it, or null when the
 *  user's language isn't one of our translated locales (fall through to
 *  English). Matching is by BCP-47 language-tag prefix so "pt-PT" correctly
 *  maps to pt-BR and "zh-TW" maps to zh. */
export function localeSegmentForBrowserLang(lang: string): string | null {
  if (!lang) return null
  const norm = lang.toLowerCase()
  const base = norm.split(/[-_]/)[0]
  const direct = LOCALES.find((l) => l.hreflang.toLowerCase() === norm)
  if (direct) return direct.urlSegment
  if (base === 'pt') return 'pt-br'
  if (base === 'zh') return 'zh'
  return LOCALES.find((l) => l.code.toLowerCase().split('-')[0] === base)?.urlSegment ?? null
}

/** The locale config for a slug's leading `<segment>/...` prefix, or null for English. */
export function localeForSlug(slug: string): LocaleConfig | null {
  const seg = slug.split('/')[0]
  return BY_SEGMENT.get(seg) ?? null
}

/** True if this slug lives under any non-English locale prefix. */
export function isLocalizedSlug(slug: string): boolean {
  return localeForSlug(slug) !== null
}

/** Strip a leading locale segment (if any) to get the English counterpart slug. */
export function toEnglishSlug(slug: string): string {
  const locale = localeForSlug(slug)
  return locale ? slug.slice(locale.urlSegment.length + 1) : slug
}

/** Prefix an English slug with a locale's URL segment. */
export function toLocaleSlug(slug: string, urlSegment: string): string {
  return `${urlSegment}/${slug}`
}
