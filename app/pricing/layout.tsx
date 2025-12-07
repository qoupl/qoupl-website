import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing - Affordable Plans for College Students',
  description: 'qoupl pricing for college students: Pay per message with flexible bundles. No hidden fees, no subscriptions. Free to join, affordable pricing for student budgets. Be couple with qoupl on campus.',
  keywords: ['college dating app pricing', 'student dating cost', 'affordable student dating', 'campus dating pricing', 'college student dating subscription', 'pay per message students'],
  openGraph: {
    title: 'qoupl Pricing - Affordable Plans for College Students',
    description: 'qoupl pricing for college students aged 18-25: Pay per message with flexible bundles. No hidden fees, student-friendly pricing.',
    type: 'website',
    url: 'https://qoupl.ai/pricing',
  },
  alternates: {
    canonical: 'https://qoupl.ai/pricing',
  },
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
