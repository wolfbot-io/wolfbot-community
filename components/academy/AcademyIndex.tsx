import { listContent } from '@/lib/content'
import { isLocalizedSlug, LOCALES } from '@/lib/locales'
import { DocsSearch } from '@/components/search/DocsSearch'
import { TrackedLink } from '@/components/analytics/TrackedLink'

type AcademyLocale = 'en' | 'vi'

const COPY = {
  en: {
    title: 'Academy',
    intro: 'Research-backed AI trading articles and release-tested practical guides. Research pages identify primary sources and limitations; product guides show the tested WolfBot release.',
    search: 'Search the Academy…',
    noResults: 'No results for “{query}”. Try a broader term, or browse the sections below.',
    researchTitle: 'AI for Trading Research',
    researchIntro: 'Paper-grounded explanations of how modern AI can be evaluated and engineered for quantitative trading, including what published experiments do not prove about live performance.',
  },
  vi: {
    title: 'Học viện',
    intro: 'Bài nghiên cứu AI trading dựa trên nguồn khoa học và hướng dẫn thực hành đã kiểm thử theo release. Trang nghiên cứu nêu rõ nguồn cùng giới hạn; hướng dẫn sản phẩm ghi phiên bản WolfBot đã kiểm thử.',
    search: 'Tìm trong Học viện…',
    noResults: 'Không có kết quả cho “{query}”. Hãy thử từ khóa rộng hơn hoặc xem các nhóm bên dưới.',
    researchTitle: 'Nghiên cứu AI cho Trading',
    researchIntro: 'Giải thích dựa trên paper về cách đánh giá và xây dựng AI cho quantitative trading, bao gồm cả những điều experiment đã công bố chưa thể chứng minh về hiệu quả live.',
  },
} as const

const AI_RESEARCH_TOPICS = [
  {
    title: { en: 'Foundations & Evidence', vi: 'Nền tảng & Bằng chứng' },
    description: {
      en: 'Research questions, evaluation design and the boundary between a backtest result and deployable evidence.',
      vi: 'Câu hỏi nghiên cứu, thiết kế evaluation và ranh giới giữa kết quả backtest với bằng chứng đủ để triển khai.',
    },
    categories: ['ai-trading-foundations'],
  },
  {
    title: { en: 'Deep Reinforcement Learning', vi: 'Deep Reinforcement Learning' },
    description: {
      en: 'MDPs, reward design, PPO, realistic market environments and ensemble agents.',
      vi: 'MDP, reward design, PPO, market environment thực tế và ensemble agent.',
    },
    categories: ['ai-trading-reinforcement-learning'],
  },
  {
    title: { en: 'Time-Series Models', vi: 'Mô hình Chuỗi thời gian' },
    description: {
      en: 'LSTM, xLSTM and state-space architectures for long, multivariate market sequences.',
      vi: 'LSTM, xLSTM và state-space architecture cho market sequence dài, đa biến.',
    },
    categories: ['ai-trading-time-series'],
  },
  {
    title: { en: 'Financial LLMs & Agents', vi: 'Financial LLM & AI Agent' },
    description: {
      en: 'Data-centric financial language models, tool-using agents and auditable hybrid decisions.',
      vi: 'Financial language model data-centric, agent dùng tool và quyết định hybrid có thể audit.',
    },
    categories: ['ai-trading-llm-agents'],
  },
  {
    title: { en: 'Research Systems & RLOps', vi: 'Hệ thống Nghiên cứu & RLOps' },
    description: {
      en: 'Reproducible training, scalable simulation, model selection and controlled promotion to deployment.',
      vi: 'Training tái lập, simulation có thể scale, model selection và promotion sang deployment có kiểm soát.',
    },
    categories: ['ai-trading-systems'],
  },
] as const

const SECTIONS = [
  { title: { en: 'Getting Started', vi: 'Bắt đầu' }, categories: ['getting-started', 'install'] },
  { title: { en: 'Integrations & Notifications', vi: 'Tích hợp & Thông báo' }, categories: ['integrations'] },
  { title: { en: 'Broker Setup & Account Opening', vi: 'Kết nối Broker & Mở tài khoản' }, categories: ['broker-setup', 'broker-account-opening', 'broker-comparison'] },
  { title: { en: 'Using WolfBot', vi: 'Sử dụng WolfBot' }, categories: ['simulation', 'smart-terminal', 'risk-controls', 'automation', 'backup', 'updates'] },
  { title: { en: 'WolfBot Comparisons', vi: 'So sánh WolfBot' }, categories: ['comparison'] },
  { title: { en: 'Reference', vi: 'Tham khảo' }, categories: ['release', 'status', 'troubleshooting', 'faq', 'security'] },
] as const

export function AcademyIndex({ locale }: { locale: AcademyLocale }) {
  const copy = COPY[locale]
  const pages = listContent().filter((page) => {
    if (!page.meta?.title) return false
    return locale === 'en' ? !isLocalizedSlug(page.slug) : page.slug.startsWith('vi/')
  })

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-white text-center mb-4">{copy.title}</h1>
      <p className="text-center mb-12 max-w-2xl mx-auto" style={{ color: '#94A3B8' }}>{copy.intro}</p>

      <DocsSearch
        localePrefix={locale === 'vi' ? 'vi' : undefined}
        excludeLocalePrefixes={locale === 'en' ? LOCALES.map((entry) => entry.urlSegment) : undefined}
        placeholder={copy.search}
        noResultsText={copy.noResults}
      />

      <section className="mb-16" aria-labelledby={`${locale}-ai-research-title`}>
        <div className="border-b pb-4 mb-8" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
          <h2 id={`${locale}-ai-research-title`} className="text-2xl font-bold text-white mb-2">{copy.researchTitle}</h2>
          <p className="text-sm max-w-3xl" style={{ color: '#94A3B8' }}>{copy.researchIntro}</p>
        </div>
        <div className="space-y-10">
          {AI_RESEARCH_TOPICS.map((topic) => {
            const items = pages.filter((page) => topic.categories.some((category) => category === page.meta.category))
            if (items.length === 0) return null
            return (
              <div key={topic.title.en}>
                <h3 className="text-lg font-semibold text-white mb-1">{topic.title[locale]}</h3>
                <p className="text-sm mb-4" style={{ color: '#94A3B8' }}>{topic.description[locale]}</p>
                <AcademyCards items={items} section={topic.title.en} headingLevel="h4" />
              </div>
            )
          })}
        </div>
      </section>

      {SECTIONS.map((section) => {
        const items = pages.filter((page) => section.categories.some((category) => category === page.meta.category))
        if (items.length === 0) return null
        return (
          <div key={section.title.en} className="mb-12">
            <h2 className="text-lg font-semibold text-white mb-4 border-b pb-2" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
              {section.title[locale]}
            </h2>
            <AcademyCards items={items} section={section.title.en} />
          </div>
        )
      })}
    </div>
  )
}

function AcademyCards({
  items,
  section,
  headingLevel = 'h3',
}: {
  items: ReturnType<typeof listContent>
  section: string
  headingLevel?: 'h3' | 'h4'
}) {
  const Heading = headingLevel
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {items.map((page) => (
        <TrackedLink
          key={page.slug}
          href={`/${page.slug}`}
          eventName="academy_click"
          eventParams={{ slug: page.slug, section }}
          className="rounded-lg p-5 border card-hover"
          style={{ background: '#0F172A', borderColor: 'rgba(255,255,255,0.07)' }}
        >
          <Heading className="text-white font-medium mb-1 text-sm">{page.meta.title}</Heading>
          <p className="text-xs line-clamp-2" style={{ color: '#94A3B8' }}>{page.meta.description}</p>
        </TrackedLink>
      ))}
    </div>
  )
}
