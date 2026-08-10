import type { Metadata } from 'next'
import { FAQSection } from '@/components/landing/FAQSection'
import { faqSchema } from '@/lib/structured-data/faq'
import { StructuredData } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Common questions about WolfBot Community — installation, brokers, security, and more.',
}

export default function FAQRoute() {
  return (
    <>
      <StructuredData data={faqSchema} />
      <FAQSection standalone />
    </>
  )
}
