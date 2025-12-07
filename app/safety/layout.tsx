import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Safety & Security - Protection for College Students',
  description: 'qoupl prioritizes college student safety with photo verification, student ID verification, end-to-end encryption, 24/7 moderation, and reporting tools. Safe campus dating for students aged 18-25.',
  keywords: ['college dating safety', 'student dating security', 'verified student profiles', 'safe campus dating', 'college student protection', 'university dating security'],
  openGraph: {
    title: 'qoupl Safety & Security - Protection for College Students',
    description: 'qoupl prioritizes college student safety with photo verification, student ID verification, and 24/7 moderation for safe campus dating.',
    type: 'website',
    url: 'https://qoupl.ai/safety',
  },
  alternates: {
    canonical: 'https://qoupl.ai/safety',
  },
}

export default function SafetyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
