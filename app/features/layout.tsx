import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Features - AI Matching, Verified Profiles & More',
  description: 'Explore qoupl features for college students: AI-powered matching, photo verification, smart icebreakers, end-to-end encryption, and premium dating experience. Be couple with qoupl on your campus.',
  keywords: ['college dating app features', 'AI matching college students', 'verified student profiles', 'campus dating features', 'student dating technology', 'college matchmaking', 'university dating app'],
  openGraph: {
    title: 'qoupl Features - AI Matching for College Students',
    description: 'Explore qoupl features for college students aged 18-25: AI-powered matching, photo verification, smart icebreakers, and safe campus dating.',
    type: 'website',
    url: 'https://qoupl.ai/features',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'qoupl Features - AI Matching for College Students',
    description: 'Explore qoupl features for college students aged 18-25: AI-powered matching, photo verification, and safe campus dating.',
  },
  alternates: {
    canonical: 'https://qoupl.ai/features',
  },
}

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
