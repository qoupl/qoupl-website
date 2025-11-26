# qoupl - AI-Powered Dating Platform

> **Revolutionizing connections through intelligent matchmaking**

qoupl is an AI-based dating application that uses advanced algorithms to create meaningful connections between people. This repository contains the official marketing website and landing page for the qoupl platform.

## 🚀 About qoupl

qoupl is a next-generation dating platform designed to help people aged 18-25 find genuine connections through:

- **Smart AI Matching**: Advanced compatibility algorithms that analyze personality, interests, values, and lifestyle
- **Safety First**: Multi-layered verification system with 24/7 AI moderation and encrypted messaging
- **Real-Time Connections**: Instant matching and conversation starters for meaningful interactions
- **Premium Experience**: Beautiful, intuitive interface designed for the modern generation

## 📱 Platform Status

**Currently in Development** - The mobile apps (iOS & Android) are being built. This website serves as:
- Marketing landing page
- Waitlist registration system
- Brand presence and information hub
- Future user onboarding portal

## 🛠️ Technology Stack

### Frontend
- **Framework**: Next.js 16.0.3 with App Router (React 19.2.0)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4.18
- **UI Components**: Shadcn UI (Radix UI primitives)
- **Animations**: Framer Motion 12.23.24
- **Theme**: next-themes (Dark/Light mode support)
- **Icons**: Lucide React
- **Fonts**: Poppins & DM Sans (Google Fonts)

### Backend (Planned)
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Storage**: Supabase Storage
- **API**: REST/GraphQL endpoints (in development)

### Infrastructure
- **Hosting**: Vercel
- **CDN**: Vercel Edge Network
- **Analytics**: Vercel Analytics (planned)
- **Domain**: qoupl.ai / qoupl.com

## 📂 Project Structure

```
qoupl-website/
├── app/                          # Next.js App Router
│   ├── page.tsx                  # Homepage with all sections
│   ├── layout.tsx                # Root layout with theme provider
│   ├── globals.css               # Global styles & CSS variables
│   ├── about/                    # About page
│   ├── features/                 # Features page
│   ├── pricing/                  # Pricing page
│   ├── blog/                     # Blog (planned)
│   ├── careers/                  # Careers page
│   ├── contact/                  # Contact page
│   ├── faq/                      # FAQ page
│   ├── privacy/                  # Privacy Policy
│   ├── terms/                    # Terms of Service
│   ├── safety/                   # Safety & Security info
│   └── community-guidelines/     # Community Guidelines
│
├── components/
│   ├── navbar.tsx                # Main navigation
│   ├── splash-screen.tsx         # Animated loading screen
│   ├── waitlist-modal.tsx        # Waitlist signup form
│   ├── theme-toggle.tsx          # Dark/Light mode toggle
│   ├── theme-provider.tsx        # Theme context provider
│   ├── sections/                 # Homepage sections
│   │   ├── animated-hero.tsx     # Hero with glassmorphism
│   │   ├── how-it-works.tsx      # 5-step user journey
│   │   ├── product-features.tsx  # Feature cards
│   │   ├── gallery.tsx           # Image gallery
│   │   ├── testimonials.tsx      # Beta user testimonials
│   │   ├── app-download.tsx      # App launch CTA
│   │   ├── coming-soon.tsx       # Waitlist section
│   │   └── footer.tsx            # Footer with links
│   └── ui/                       # Shadcn UI components
│       ├── button.tsx
│       └── card.tsx
│
├── lib/
│   ├── utils.ts                  # Utility functions
│   └── supabase/                 # Supabase client config
│       ├── client.ts             # Browser client
│       ├── server.ts             # Server client
│       ├── queries.ts            # Database queries (planned)
│       └── types.ts              # TypeScript types
│
├── public/
│   ├── images/
│   │   ├── women/                # User images (women)
│   │   ├── men/                  # User images (men)
│   │   ├── coupl/                # Couple images
│   │   └── quoupl.svg            # Brand logo
│   └── qoupl/                    # App screenshots
│       ├── 1.png - 7.png         # Mobile app preview images
│
└── supabase/
    └── schema.sql                # Database schema (planned)
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/qoupl/qoupl-website.git
   cd qoupl-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (Optional for local development)
   ```bash
   cp .env.example .env.local
   ```
   Add your Supabase credentials (if working with backend):
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build & Deploy

### Local Build
```bash
npm run build
npm start
```

### Deploy to Vercel

#### Via Vercel Dashboard (Recommended)
1. Push your changes to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Import the `qoupl-website` repository
4. Vercel auto-detects Next.js and configures everything
5. Click "Deploy"

#### Via Vercel CLI
```bash
npm install -g vercel
vercel
```

### Environment Variables for Production
Set these in your Vercel project settings:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## 🎨 Design System

### Brand Colors
- **Primary Purple**: `#a855f7` (HSL: 271, 91%, 65%)
- **Secondary Pink**: `#ec4899`
- **Dark Mode**: Full support with automatic theme switching

### Typography
- **Headings**: Poppins (300-800 weights)
- **Body**: DM Sans (400-700 weights)

### Breakpoints
- Mobile: `< 640px`
- Tablet: `640px - 1023px`
- Desktop: `≥ 1024px`

## 🔑 Key Features

### Implemented
✅ Responsive landing page with all sections  
✅ Splash screen with animated logo fill  
✅ Waitlist modal with age validation (18-25 only)  
✅ Dark/Light theme toggle  
✅ Multiple static pages (About, FAQ, Privacy, etc.)  
✅ Mobile-optimized design  
✅ Framer Motion animations throughout  

### In Development
🚧 Supabase backend integration  
🚧 Waitlist data persistence  
🚧 Email confirmation system  
🚧 Admin dashboard for waitlist management  
🚧 Blog CMS integration  
🚧 Analytics tracking  

## 📱 Mobile Apps

The iOS and Android apps are being developed separately and will integrate with:
- Supabase backend for user data
- AI matching algorithms (proprietary)
- Real-time messaging system
- Photo verification system
- Location-based matching

**Repositories** (Private):
- `qoupl-mobile-ios` - Native iOS app (Swift/SwiftUI)
- `qoupl-mobile-android` - Native Android app (Kotlin)
- `qoupl-backend` - API and AI services (Node.js/Python)

## 🤝 Contributing

This is a startup project with a growing team. If you're interested in contributing:

1. **Internal Team**: Check Notion workspace for tasks and sprint planning
2. **External Contributors**: Please reach out to [careers@qoupl.ai](mailto:careers@qoupl.ai) first
3. **Bug Reports**: Open an issue with detailed description and screenshots

### Development Workflow
1. Create a feature branch from `main`
2. Make your changes
3. Test thoroughly (mobile + desktop + dark mode)
4. Submit PR with clear description
5. Wait for code review

## 📊 Analytics & Monitoring

- **Vercel Analytics**: Page views and performance metrics
- **Error Tracking**: Sentry (planned)
- **User Behavior**: PostHog or Mixpanel (planned)

## 🔒 Security & Privacy

qoupl takes user privacy seriously:
- Age-restricted access (18-25 years only)
- All personal data encrypted
- GDPR compliant (in progress)
- Regular security audits
- See [Privacy Policy](/privacy) and [Safety Guidelines](/safety)

## 📄 License

Copyright © 2024-2025 Xencus Technologies Private Limited. All rights reserved.

This is proprietary software for the qoupl dating platform. Unauthorized copying, distribution, or modification is prohibited.

## 📞 Contact

- **Website**: [qoupl.ai](https://qoupl.ai)
- **Email**: [hello@qoupl.ai](mailto:hello@qoupl.ai)
- **Support**: [support@qoupl.ai](mailto:support@qoupl.ai)
- **Careers**: [careers@qoupl.ai](mailto:careers@qoupl.ai)

## 🙏 Acknowledgments

- Design inspiration from modern dating platforms
- UI components from [Shadcn UI](https://ui.shadcn.com/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Icons from [Lucide](https://lucide.dev/)

---

**Built with ❤️ by the qoupl team**

*Helping people find meaningful connections through intelligent technology*
