# Developer Portfolio

A professional, production-quality, multi-page developer portfolio built with Next.js, TypeScript, and Tailwind CSS. Designed for the SCIC assignment and future personal use.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Linting**: ESLint + Prettier

## Features

- Multi-page site (Home, About, Projects, Blog, Contact)
- Responsive design (mobile-first)
- Dark theme with consistent brand colors
- Framer Motion animations and page transitions
- Contact form with validation
- Data-driven project and article listings
- Accessibility compliant (WCAG AA)
- SEO optimized
- Performance optimized (SSG, lazy loading, optimized images)

## Installation

```bash
# Clone the repository
git clone <repository-url>
cd portfolio

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Folder Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/
│   ├── ui/              # shadcn/ui primitives
│   ├── layout/          # Navigation, Header, Footer
│   ├── sections/        # Page sections
│   └── shared/          # Reusable components
├── data/                # Static content files
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── types/               # TypeScript type definitions
└── config/              # Site configuration
```

## Deployment

Deploy to Vercel with zero configuration:

```bash
npm run build
```

Or connect your GitHub repository to Vercel for automatic deployments.
