# Project Tree Structure

```
marqait.com/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   ├── page.tsx
│   ├── sitemap.ts
│   ├── template.tsx
│   │
│   ├── about/
│   │   └── page.tsx
│   │
│   ├── ai-ad-generator/
│   │   ├── benefit.tsx
│   │   ├── brand.tsx
│   │   ├── faq-section.tsx
│   │   ├── final-cta.tsx
│   │   ├── hero-section.tsx
│   │   ├── introduction.tsx
│   │   ├── made-everybrand.tsx
│   │   └── page.tsx
│   │
│   ├── ai-agent-development/
│   │   ├── ai-agent-benefits.tsx
│   │   ├── ai-agent-faq-section.tsx
│   │   ├── ai-agent-hero-section.tsx
│   │   ├── custom-ai-agents-section.tsx
│   │   ├── industries-section.tsx
│   │   ├── our-dev-process.tsx
│   │   ├── page.tsx
│   │   ├── what-is-agent.tsx
│   │   └── why.tsx
│   │
│   ├── ai-blog/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       ├── not-found.tsx
│   │       └── page.tsx
│   │
│   ├── ai-brandbook-generator/
│   │   ├── benefits.tsx
│   │   ├── brand.tsx
│   │   ├── faq-section.tsx
│   │   ├── final-cta.tsx
│   │   ├── hero-section.tsx
│   │   ├── introduction.tsx
│   │   ├── made-everybrand.tsx
│   │   └── page.tsx
│   │
│   ├── ai-for-customer-service/
│   │   ├── benefits.tsx
│   │   ├── custom-ai-agents-section.tsx
│   │   ├── faq-section.tsx
│   │   ├── hero-section.tsx
│   │   ├── industries-section.tsx
│   │   ├── our-dev-process.tsx
│   │   ├── page.tsx
│   │   ├── what.tsx
│   │   └── why.tsx
│   │
│   ├── ai-for-ecommerce/
│   │   ├── benefits.tsx
│   │   ├── faq.tsx
│   │   ├── hero-section.tsx
│   │   ├── industries-section.tsx
│   │   ├── our-solution.tsx
│   │   ├── page.tsx
│   │   ├── what.tsx
│   │   └── why.tsx
│   │
│   ├── ai-for-healthcare/
│   │   ├── benefits.tsx
│   │   ├── custom-ai-agents-section.tsx
│   │   ├── faq-section.tsx
│   │   ├── hero-section.tsx
│   │   ├── industries-section.tsx
│   │   ├── our-dev-process.tsx
│   │   ├── page.tsx
│   │   ├── what.tsx
│   │   └── why.tsx
│   │
│   ├── ai-for-retails/
│   │   ├── ai-agent-benefits.tsx
│   │   ├── ai-agent-faq-section.tsx
│   │   ├── ai-agent-hero-section.tsx
│   │   ├── custom-ai-agents-section.tsx
│   │   ├── industries-section.tsx
│   │   ├── our-dev-process.tsx
│   │   ├── page.tsx
│   │   ├── what-is-agent.tsx
│   │   └── why.tsx
│   │
│   ├── ai-for-seo/
│   │   ├── benefits-section.tsx
│   │   ├── faq-section.tsx
│   │   ├── hero-section.tsx
│   │   ├── our-seo-services.tsx
│   │   ├── page.tsx
│   │   ├── what-is-seo.tsx
│   │   └── why-businesses-need-ai-seo.tsx
│   │
│   ├── ai-for-startups/
│   │   ├── benefit.tsx
│   │   ├── faq.tsx
│   │   ├── hero-section.tsx
│   │   ├── page.tsx
│   │   ├── role.tsx
│   │   ├── solution-for-startup.tsx
│   │   ├── what-is-startup.tsx
│   │   └── why.tsx
│   │
│   ├── ai-image-editor/
│   │   ├── benefits.tsx
│   │   ├── faq-section.tsx
│   │   ├── feature-one.tsx
│   │   ├── feature-three.tsx
│   │   ├── feature-two.tsx
│   │   ├── final-cta.tsx
│   │   ├── hero-section.tsx
│   │   ├── introduction.tsx
│   │   ├── key-features.tsx
│   │   └── page.tsx
│   │
│   ├── ai-logo-generator/
│   │   ├── categories.tsx
│   │   ├── comparison-table-section.tsx
│   │   ├── faq-section.tsx
│   │   ├── final-cta-section.tsx
│   │   ├── hero-section.tsx
│   │   ├── how-logo-is-generated-.tsx
│   │   ├── introduction.tsx
│   │   ├── page.tsx
│   │   ├── pro-tip-section.tsx
│   │   └── why-to-choose.tsx
│   │
│   ├── ai-reel-generator/
│   │   ├── benefit.tsx
│   │   ├── brand.tsx
│   │   ├── faq-section.tsx
│   │   ├── final-cta.tsx
│   │   ├── hero-section.tsx
│   │   ├── introduction.tsx
│   │   ├── made-everybrand.tsx
│   │   └── page.tsx
│   │
│   ├── ai-social-media-post-generator/
│   │   ├── developmet-process.tsx
│   │   ├── faq-section.tsx
│   │   ├── final-cta-section.tsx
│   │   ├── hero-section.tsx
│   │   ├── introduction.tsx
│   │   ├── page.tsx
│   │   ├── use-ai-social.tsx
│   │   └── why-to-choose.tsx
│   │
│   ├── ai-solutions/
│   │   ├── [slug]/
│   │   │   ├── AISolutionPageClient.tsx
│   │   │   └── page.tsx
│   │   └── page.tsx
│   │
│   ├── ai-tools/
│   │   └── page.tsx
│   │
│   ├── api/
│   │   └── indexnow/
│   │       └── route.ts
│   │
│   ├── contact/
│   │   └── page.tsx
│   │
│   ├── contacts/
│   │   └── page.tsx
│   │
│   ├── custom-ai-solutions/
│   │   ├── benefits.tsx
│   │   ├── custom-ai-agents-section.tsx
│   │   ├── faq-section.tsx
│   │   ├── hero-section.tsx
│   │   ├── industries-section.tsx
│   │   ├── our-dev-process.tsx
│   │   ├── page.tsx
│   │   ├── what.tsx
│   │   └── why.tsx
│   │
│   ├── growth-pods/
│   │   └── page.tsx
│   │
│   ├── privacy-policy/
│   │   └── page.tsx
│   │
│   ├── products/
│   │   └── page.tsx
│   │
│   ├── sitemap/
│   │   └── page.tsx
│   │
│   ├── studio/
│   │   └── [[...index]]/
│   │       └── page.tsx
│   │
│   ├── terms/
│   │   └── page.tsx
│   │
│   └── user-data-deletion/
│       ├── layout.tsx
│       └── page.tsx

# Other Major Directories (Summary)
├── components/          # Reusable UI components
├── data/               # Data services and static content
├── hooks/              # Custom React hooks
├── lib/                # Core utilities and configurations
├── public/             # Static assets and images
├── sanity/             # Sanity CMS configurations
├── scripts/            # Utility scripts
├── types/              # TypeScript type definitions
└── utils/              # Helper functions and utilities

# Configuration Files
├── analytics.ts
├── components.json
├── eslint.config.mjs
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── sanity.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── vercel.json
```

This is a Next.js 13+ project using the App Router pattern. The app directory contains all the routes and pages of the application, with each subdirectory representing a route. Key features of the structure:

1. Each route has its own directory with a `page.tsx` file
2. Complex routes (like AI tools) have multiple components split into separate files
3. Dynamic routes are handled with `[slug]` directories
4. API routes are located in the `api` directory
5. Layouts and templates are at the root level of the app directory
6. Each feature section (like ai-logo-generator, ai-reel-generator) has its own components organized in separate files
7. The structure follows Next.js's file-based routing convention
8. Component-based architecture with clear separation of concerns
9. Proper organization of static assets in the public directory
10. TypeScript integration throughout the project
