import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions',
  description: 'Get answers to common questions about qoupl, the dating app for college students aged 18-25. Learn about features, pricing, safety, student verification, and more. Be couple with qoupl.',
  keywords: ['qoupl FAQ', 'college dating app questions', 'student dating help', 'campus dating support', 'how to use qoupl', 'couple', 'coupl', 'qouple'],
  openGraph: {
    title: 'qoupl FAQ - College Dating App Questions',
    description: 'Get answers to common questions about qoupl dating app for college students.',
    type: 'website',
    url: 'https://qoupl.ai/faq',
  },
  alternates: {
    canonical: 'https://qoupl.ai/faq',
  },
}

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
