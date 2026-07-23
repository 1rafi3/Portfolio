# Architecture Document — Developer Portfolio

## 1. Folder Structure

```
src/
├── app/
│   ├── (site)/                      # Route group — public site pages
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── projects/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── skills/
│   │   │   └── page.tsx
│   │   ├── experience/
│   │   │   └── page.tsx
│   │   ├── resume/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── blog/                     # Future — v2.0
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── certificates/             # Future — v2.0
│   │   │   └── page.tsx
│   │   └── page.tsx                  # Home (/)
│   ├── (admin)/                      # Future — v3.0 (separate layout)
│   │   ├── layout.tsx
│   │   ├── login/
│   │   │   └── page.tsx
│   │   └── dashboard/
│   │       └── page.tsx
│   ├── api/                          # API route handlers
│   │   ├── contact/
│   │   │   └── route.ts
│   │   └── ...                       # Future API endpoints
│   ├── layout.tsx                    # Root layout (fonts, metadata, providers)
│   ├── not-found.tsx                 # Custom 404
│   ├── error.tsx                     # Global error boundary
│   ├── loading.tsx                   # Global loading state
│   ├── sitemap.ts                    # Dynamic sitemap generation
│   └── robots.ts                     # Robots.txt generation
│
├── components/
│   ├── ui/                           # shadcn/ui primitives (Button, Card, Input, etc.)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   └── ...
│   ├── layout/                       # Site-wide structural components
│   │   ├── Header/
│   │   │   ├── Header.tsx
│   │   │   ├── MobileNav.tsx
│   │   │   └── index.ts
│   │   ├── Footer/
│   │   │   ├── Footer.tsx
│   │   │   └── index.ts
│   │   ├── SkipToContent.tsx
│   │   ├── PageTransition.tsx
│   │   └── ThemeProvider.tsx
│   ├── sections/                     # Page sections (compose UI + Shared)
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── ...
│   ├── shared/                       # Reusable domain components (cross-page)
│   │   ├── ProjectCard/
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── types.ts
│   │   │   └── index.ts
│   │   ├── SkillBadge/
│   │   │   ├── SkillBadge.tsx
│   │   │   └── index.ts
│   │   ├── TimelineItem/
│   │   │   ├── TimelineItem.tsx
│   │   │   └── index.ts
│   │   ├── SectionHeading.tsx
│   │   ├── TechTag.tsx
│   │   ├── SocialLink.tsx
│   │   └── ArticleCard/              # Future — v2.0
│   │       ├── ArticleCard.tsx
│   │       └── index.ts
│   └── features/                     # Feature modules (self-contained, stateful)
│       ├── ContactForm/
│       │   ├── ContactForm.tsx
│       │   ├── useContactForm.ts
│       │   ├── schema.ts
│       │   ├── types.ts
│       │   └── index.ts
│       ├── ProjectFilters/
│       │   ├── ProjectFilters.tsx
│       │   ├── useProjectFilters.ts
│       │   ├── types.ts
│       │   └── index.ts
│       └── ...                       # Future features
│
├── data/                             # Static content (typed data arrays)
│   ├── projects.ts
│   ├── skills.ts
│   ├── experience.ts
│   ├── articles.ts                   # Future — v2.0
│   └── certificates.ts               # Future — v2.0
│
├── types/                            # Shared TypeScript type definitions
│   ├── project.ts
│   ├── skill.ts
│   ├── experience.ts
│   ├── article.ts                    # Future — v2.0
│   ├── certificate.ts                # Future — v2.0
│   ├── common.ts                     # NavLink, SocialLink, SiteMetadata, etc.
│   └── index.ts                      # Barrel re-exports
│
├── hooks/                            # Custom React hooks
│   ├── useScrollAnimation.ts
│   ├── useMediaQuery.ts
│   ├── useActiveSection.ts
│   └── index.ts
│
├── lib/                              # Pure utility functions (zero side effects)
│   ├── utils.ts                      # cn(), clamp(), etc.
│   ├── formatters.ts                 # formatDate(), formatUrl(), etc.
│   └── validators.ts                 # Zod schemas (shared)
│
├── config/                           # Site-wide configuration (rarely changes)
│   ├── site.ts                       # name, description, url, locale
│   ├── navigation.ts                 # Nav link definitions
│   ├── social.ts                     # Social profile URLs
│   └── seo.ts                        # Default SEO metadata
│
└── content/                          # Future — MDX / CMS content storage
    ├── projects/                     # Future
    └── blog/                         # Future
```

### File count estimate (v1.0)
- **Data files**: 3 (`projects.ts`, `skills.ts`, `experience.ts`)
- **Type files**: 4 (`project.ts`, `skill.ts`, `experience.ts`, `common.ts`)
- **Config files**: 4 (`site.ts`, `navigation.ts`, `social.ts`, `seo.ts`)
- **Lib files**: 3 (`utils.ts`, `formatters.ts`, `validators.ts`)
- **Hook files**: 3 (`useScrollAnimation.ts`, `useMediaQuery.ts`, `useActiveSection.ts`)
- **UI components**: ~8 (shadcn/ui primitives: Button, Card, Input, Badge, Textarea, Tabs, Dialog, Skeleton)
- **Layout components**: ~6 (Header, MobileNav, Footer, SkipToContent, PageTransition, ThemeProvider)
- **Section components**: ~6 (Hero, About, Projects, Skills, Experience, Contact)
- **Shared components**: ~5 (ProjectCard, SkillBadge, TimelineItem, SectionHeading, TechTag)
- **Feature components**: ~2 (ContactForm, ProjectFilters)
- **App pages**: ~13 (site route group + layouts + shared)

---

## 2. Routing Structure

```
Route Map (v1.0 — Current)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/                                   → Home
/about                              → About
/projects                           → Projects (listing)
/projects/[slug]                    → Project detail
/skills                             → Skills
/experience                         → Experience
/resume                             → Resume
/contact                            → Contact

Route Map (v2.0 — Enhanced)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/blog                               → Blog listing
/blog/[slug]                        → Article detail
/certificates                       → Certificates

Route Map (v3.0 — Advanced)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/admin/login                        → Admin login
/admin/dashboard                    → Admin dashboard
/admin/projects                     → Manage projects
/admin/blog                         → Manage articles
```

### Route Organization

```
app/
├── (site)/layout.tsx        # Public site layout (Header, Footer, PageTransition)
├── (site)/page.tsx          # Home
├── (admin)/layout.tsx       # Admin layout (sidebar, auth guard)
├── (admin)/page.tsx         # Redirects to /admin/dashboard
├── api/contact/route.ts     # Contact form submission handler
├── layout.tsx               # Root layout (fonts, metadata, providers)
```

**Why route groups?** `(site)` and `(admin)` are route groups — they don't affect the URL path. They allow different layouts without URL nesting. This means `/about` is not `/site/about`.

**Why not parallel routes?** Not needed in v1.0. Could be introduced in v3.0 for admin split-view.

---

## 3. Data Architecture

### Layer Responsibilities

```
┌─────────────────────────────────────────────────────┐
│                    config/                          │
│  Site-wide settings that rarely change              │
│  e.g., site name, nav links, social URLs           │
│  Changes: when you rebrand or add a nav item       │
├─────────────────────────────────────────────────────┤
│                    types/                           │
│  Shape definitions for all content entities         │
│  e.g., IProject, ISkill, IExperience               │
│  Changes: when a data model gains/loses fields      │
├─────────────────────────────────────────────────────┤
│                    data/                            │
│  Actual content as typed const arrays               │
│  e.g., projects.ts exports projects: IProject[]    │
│  Changes: when you add/edit portfolio content       │
├─────────────────────────────────────────────────────┤
│                    lib/                             │
│  Pure utility functions                             │
│  e.g., cn(), formatDate(), parseSlug()             │
│  Changes: when you add a new transformation         │
└─────────────────────────────────────────────────────┘
```

### Data Flow

```
config/site.ts  ──────►  app/layout.tsx        (metadata, SEO)
config/nav.ts   ──────►  components/layout/     (navigation rendering)
config/social.ts ──────►  components/layout/     (social link rendering)

data/projects.ts ──────►  app/projects/page.tsx (listing)
                    ──────►  app/projects/[slug]/page.tsx (detail)
                    ──────►  components/sections/ (featured projects)

types/project.ts ──────►  data/projects.ts      (type enforcement)
                    ──────►  components/shared/   (props typing)
                    ──────►  pages                (params typing)

lib/             ──────►  any component needing pure functions
```

### Separation Principle

**To add a new project**, you edit only `data/projects.ts` — no component changes.
**To add a new field to projects**, you edit `types/project.ts` first, then `data/projects.ts`, then the UI components that display that field.

### Future CMS Migration Path

When a CMS is introduced (v2.0+), the data layer changes from static imports to async fetches, but **component interfaces remain unchanged**:

```
// Before (static)
import { projects } from '@/data/projects'
// Component receives IProject[]

// After (CMS)
async function getProjects(): Promise<IProject[]> {
  const res = await fetchCMS('projects')
  return res.map(mapToIProject)
}
// Component still receives IProject[] — unchanged
```

---

## 4. Component Architecture

### Category Hierarchy

```
components/
├── ui/           → Primitive, generic, unstyled-ish (shadcn/ui)
├── layout/       → Page structure, appears on every route
├── sections/     → Composes UI + Shared into page sections
├── shared/       → Domain-specific, used across 2+ sections/pages
└── features/     → Stateful, self-contained, single-page concern
```

### Category Definitions

| Category | Responsibility | Examples | State? | Dependencies |
|----------|---------------|----------|--------|-------------|
| **ui** | Generic primitives. One HTML element = one component. | `Button`, `Card`, `Input`, `Badge` | Never | `lib/utils.ts` (cn) |
| **layout** | Structural shell. Rendered around every page. | `Header`, `Footer`, `Navbar`, `SkipToContent` | Navigation state only | `config/navigation.ts`, `config/social.ts` |
| **shared** | Domain-specific, reused across pages. | `ProjectCard`, `SkillBadge`, `TimelineItem`, `SectionHeading` | Never | `types/*`, `data/*` (through parent) |
| **sections** | One section = one purpose on one page. Composes ui + shared. | `HeroSection`, `AboutSection`, `ProjectsSection` | Never | `shared/*`, `ui/*` |
| **features** | Complex, stateful modules with business logic. | `ContactForm`, `ProjectFilters`, `BlogSearch` | Own state | `hooks/*`, `lib/*`, `types/*` |

### Component Rules

```
ProjectCard (shared)                        SectionHeading (shared)
├── Card (ui)                               ├── Heading element
├── Badge (ui)                              └── cn() for variants
├── Image from next/image
└── Link from next/link

HeroSection (sections)
├── SectionHeading (shared)
├── Button (ui)
├── SocialLink (shared)
└── PageTransition (layout — motion wrapper)
```

### Colocation Pattern

Each component with multiple files gets a folder:

```
SkillBadge/
├── SkillBadge.tsx       # Component implementation
├── types.ts             # Props / variant types (if not in shared types/)
└── index.ts             # Barrel re-export `export { SkillBadge } from './SkillBadge'`
```

Single-file components skip the folder:

```
SectionHeading.tsx       # No index.ts — import directly
```

---

## 5. Naming Conventions

### Files

| Entity | Convention | Example |
|--------|-----------|---------|
| React component | PascalCase | `ProjectCard.tsx` |
| Hook | camelCase prefixed `use` | `useScrollAnimation.ts` |
| Utility | camelCase | `formatters.ts` |
| Type definition | PascalCase | `project.ts` (contains `IProject`) |
| Data file | camelCase | `projects.ts` |
| Config file | camelCase | `navigation.ts` |
| Constant module | camelCase | `constants.ts` |
| Image | kebab-case | `project-architecture.png` |

### Components

```
// PascalCase, noun or adjective+noun
ProjectCard, HeroSection, SectionHeading, TimelineItem
```

### Hooks

```
// camelCase, verb or getter, prefixed with 'use'
useScrollAnimation, useMediaQuery, useActiveSection, useContactForm
```

### Utilities

```
// camelCase verbs
cn, formatDate, parseSlug, validateEmail, truncateText
```

### Types

```
// Interfaces: I + PascalCase noun
IProject, ISkill, IExperience, IArticle, INavLink, ISocialLink

// Type aliases: T + PascalCase noun
TProjectCardProps, TContactFormValues, TNavLinkVariant

// Enums: PascalCase
ProjectStatus, SkillCategory
```

### Constants

```
// Module-level: UPPER_SNAKE_CASE
MAX_FEATURED_PROJECTS, DEFAULT_PAGE_SIZE, CONTACT_FORM_ID

// Config exports: PascalCase object constant
export const SITE = { name: '...', url: '...' }
export const SOCIAL = { github: '...', linkedin: '...' }
```

### Images

```
// kebab-case, descriptive
hero-portrait.jpg
project-ecommerce-dashboard.png
resume-thumbnail.pdf
```

---

## 6. Import Strategy

### Path Aliases

Configured in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Import Order Convention

```
// 1. External (framework, libraries)
import { Metadata } from 'next'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

// 2. Internal (aliased)
import { Button } from '@/components/ui/button'
import { IProject } from '@/types/project'
import { projects } from '@/data/projects'
import { cn } from '@/lib/utils'
import { SITE } from '@/config/site'

// 3. Relative (colocated only)
import type { TProjectCardProps } from './types'
```

### Import Rules

- Use `@/*` for all cross-directory imports.
- Use relative imports (`./Component`, `../types`) only within the same module/folder.
- Prefer `import type` for type-only imports to leverage isolatedModules.
- Barrel exports via `index.ts` for multi-file components (e.g., `ProjectCard/index.ts`).
- Single-file components import directly (no barrel).

---

## 7. Styling Strategy

### Tailwind Usage

1. **Utility-first** — 95% of styling is inline Tailwind classes.
2. **No custom CSS** — only `globals.css` which contains:
   - `@tailwind` directives
   - `@layer base` with brand color CSS variables
3. **shadcn/ui components** are styled via `className` prop, never modified at source.

### The `cn()` Utility

```ts
// lib/utils.ts
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

Used on every component that accepts a `className` prop to enable clean composition.

### Extracting Reusable Styles

**Rule: Extract to a component when the same className combination appears in 2+ places.**

```tsx
// Don't repeat this pattern across multiple files:
// <h2 className="text-3xl font-bold tracking-tight text-[#F8FAFC] sm:text-4xl">

// Extract:
// SectionHeading.tsx — accepts children + optional className
```

### Avoiding Duplicated Styles

1. Use `cn()` to compose class strings — never concatenate.
2. Use Tailwind's `@apply` only in shadcn/ui source (never in custom code).
3. Variants go through props, not class duplication:
   ```tsx
   // Bad
   <p className="text-sm text-gray-400">...</p>
   <p className="text-base text-gray-300">...</p>

   // Good
   <Text variant="small">...</Text>
   <Text variant="base">...</Text>
   ```

### Brand Color Application

```tsx
// Tailwind config maps brand colors:
// bg-brand-bg, text-brand-text, accent-brand-accent

<section className="bg-brand-bg text-brand-text">
  <Button className="bg-brand-accent hover:bg-brand-accent/90">
    Contact Me
  </Button>
</section>
```

---

## 8. Performance Strategy

### Server Components vs Client Components

```
Default: Server Component
│
├── Needs interactivity (onClick, onChange)?              → 'use client'
├── Uses useState, useReducer, useEffect?                 → 'use client'
├── Uses Framer Motion?                                   → 'use client'
├── Uses React Hook Form?                                 → 'use client'
├── Uses browser APIs (localStorage, IntersectionObserver)? → 'use client'
│
└── None of the above?                                    → Stay Server Component
```

### Client Component Boundaries

Keep client boundaries small — push them to the leaf components:

```
HeroSection.tsx          → Server Component (no 'use client')
├── SectionHeading.tsx   → Server Component
├── Button.tsx           → Client Component (needs onClick)
├── SocialLink.tsx       → Client Component (Framer Motion)
└── PageTransition.tsx   → Client Component (Framer Motion)
```

### Image Optimization

```tsx
import Image from 'next/image'

// Good
<Image
  src="/images/project-dashboard.png"
  alt="E-commerce dashboard preview"
  width={800}
  height={600}
  priority={isAboveTheFold}
/>

// Rules:
// - Always provide width + height (prevents layout shift)
// - priority={true} for LCP images (hero)
// - priority={false} (default) for below-fold (lazy-loaded)
// - Use remote images with next.config.js remotePatterns
```

### Lazy Loading

```tsx
import dynamic from 'next/dynamic'

// Heavy component loaded only when needed
const ContactForm = dynamic(() => import('@/components/features/ContactForm'), {
  loading: () => <Skeleton className="h-[400px] w-full" />,
})

// Framer Motion components are client-only — isolate them
const AnimatedSection = dynamic(() => import('@/components/shared/AnimatedSection'), {
  ssr: false,
})
```

### Code Splitting

1. **Route-based** — automatic with Next.js App Router (every `page.tsx` is a separate chunk).
2. **Component-based** — `next/dynamic` for heavy/rarely-used components.
3. **Library-based** — dynamic import of `framer-motion` only on pages with animations.

### Additional Performance Measures

| Strategy | Implementation |
|----------|---------------|
| Font loading | `next/font` with `display: 'swap'` + `preload: true` |
| Metadata | `generateMetadata()` for per-page SEO without client JS |
| Static generation | `export const dynamic = 'force-static'` for content pages |
| Bundle analysis | `@next/bundle-analyzer` in dev (not committed) |
| No render-blocking | All CSS is Tailwind (inline at build time) |

---

## 9. Future Scalability

### Adding Blog (v2.0)

**New files only — no modifications to existing files:**

```
src/
├── app/(site)/blog/
│   ├── page.tsx              # Blog listing — imports data, renders ArticleCard[]
│   └── [slug]/page.tsx       # Article detail — imports data, renders article content
├── components/shared/ArticleCard/
│   ├── ArticleCard.tsx
│   └── index.ts
├── data/articles.ts          # Typed article content
└── types/article.ts          # IArticle interface
```

**Reuses**: `SectionHeading`, `Card` (ui), `Badge` (ui), `PageTransition` (layout).

### Adding Certificates (v2.0)

```
src/
├── app/(site)/certificates/
│   └── page.tsx
├── components/shared/CertificateCard/
│   ├── CertificateCard.tsx
│   └── index.ts
├── data/certificates.ts
└── types/certificate.ts
```

**Reuses**: `Card`, `Badge`, `SectionHeading`, `Image` from next/image.

### Adding CMS (v2.0+)

```
src/
├── lib/cms.ts               # CMS client (fetch, cache, transform)
├── lib/cms-adapter.ts       # Maps CMS response → IProject / IArticle
└── content/                  # Local content directory (MDX or fetched)
```

**Changes required in existing files:**
- `data/projects.ts` → replaced with `lib/cms.ts` getter
- All components remain unchanged (still receive `IProject[]`)

### Adding Admin Dashboard (v3.0)

```
src/
├── app/(admin)/              # New route group — isolated layout
│   ├── layout.tsx            # Admin layout (sidebar, header, auth guard)
│   ├── login/page.tsx
│   └── dashboard/page.tsx
├── components/features/admin/
│   ├── AdminSidebar.tsx
│   ├── AdminHeader.tsx
│   ├── ProjectManager.tsx
│   └── BlogEditor.tsx
└── hooks/useAuth.ts          # Auth state management
```

**No changes to site components** — admin is fully isolated.

### Adding Analytics (v3.0)

```
src/
├── components/layout/AnalyticsProvider.tsx   # Wraps root layout
└── config/analytics.ts                       # Measurement IDs
```

**Single modification**: Root `layout.tsx` adds `<AnalyticsProvider>`.

### Scalability Diagram

```
v1.0                                    v2.0 (additive)                     v3.0 (additive)
━━━━━━━━━━━━━━━━━━━━━━━━━              ━━━━━━━━━━━━━━━━━━━━━━━              ━━━━━━━━━━━━━━━━━━━━━━━━━━
app/(site)/                             app/(site)/                          app/(site)/ (unchanged)
├── page.tsx                            ├── page.tsx                         app/(admin)/
├── about/                          ──► ├── blog/                              ├── layout.tsx
├── projects/                       ──► ├── certificates/                      ├── login/
├── skills/                              └── ... unchanged                     └── dashboard/
├── experience/                        components/shared/                    components/features/admin/
├── resume/                             ├── ArticleCard/                       ├── AdminSidebar/
├── contact/                            └── CertificateCard/                   └── ProjectManager/
└── ...                                data/                                  hooks/
components/                             ├── articles.ts                        └── useAuth.ts
├── shared/                             └── certificates.ts
│   ├── ProjectCard/                  types/
│   └── ...                             ├── article.ts
└── ...                                 └── certificate.ts
```

---

## Architecture Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Route groups | `(site)` + `(admin)` | Separate layouts without URL prefix |
| Data layer | Static typed TS files | Zero dependencies, type-safe, easy to edit, trivial CMS migration path |
| Component categories | 5-tier (ui/layout/sections/shared/features) | Clear responsibility boundaries; features isolate stateful complexity |
| Colocation | Folder per multi-file component | Single-file components stay flat; multi-file gets folder + barrel |
| Client boundaries | Leaf components only | Maximizes server rendering, minimizes JS bundle |
| shadcn/ui customization | `className` prop only | Never fork the primitive — always compose |
| Naming prefix | `I` for interfaces, `T` for types | Immediate visual distinction in imports and IDE autocomplete |
| Path alias | `@/*` → `src/*` | Clean imports, easy refactoring |
| Styling | Tailwind utility classes only | Zero CSS maintenance, consistent spacing, easy responsive design |
| Future features | Additive only | New features never modify existing files |

## Advantages

1. **Zero refactoring for v2.0** — blog and certificates are purely additive.
2. **CMS-ready** — swapping static data for CMS calls changes only the data layer, no component needs modification.
3. **Admin isolation** — admin lives in its own route group with its own layout and components, fully separate from the public site.
4. **Small client bundles** — only leaf components use `'use client'`; most rendering is server-side.
5. **Type safety everywhere** — every data entity has a dedicated type; no `any` ever.
6. **Predictable imports** — `@/*` alias + consistent naming means you always know where a file lives.
7. **Reusable primitives** — shadcn/ui components are the building block; sections compose them; features orchestrate them.

## Possible Trade-offs

1. **Static data files require a build to update content.** For a personal portfolio this is acceptable (infrequent updates). When content needs change without deploys, introduce a CMS (v2.0).
2. **Five component categories may feel heavy for small projects.** But the overhead is minimal (folder structure only), and the clarity payoff grows as the project expands.
3. **`I`/`T` prefix convention is not standard TypeScript.** However, it provides instant recognition in imports. The team/project chose this; consistency matters more than community fashion.
4. **Colocation increases file count.** Each `SkillBadge/` folder has 3 files instead of 1. This is intentional — it prevents files from growing uncontrollably and makes testing/storybook colocation trivial.
5. **No CSS modules or styled-components.** Tailwind-only means long className strings in JSX. The `cn()` helper + component extraction keep this manageable.

## Recommendations Before Implementation

1. **Initialize the Next.js project** with TypeScript, ESLint, and the `src/` directory option.
2. **Configure path aliases** in `tsconfig.json` immediately (`@/*`).
3. **Set up Tailwind with brand colors** — define the three core colors with all necessary shades before any component work.
4. **Install and initialize shadcn/ui** — customize the base theme colors to match the brand palette.
5. **Create the folder structure** (empty files where needed) before writing any component logic — this forces architectural discipline.
6. **Start building from the outside in**:
   - Root layout → fonts, metadata, global styles
   - Layout components → Header, Footer, PageTransition
   - Shared components → SectionHeading, ProjectCard, SkillBadge
   - Data files → projects.ts, skills.ts, experience.ts
   - Sections → compose above into HeroSection, AboutSection, etc.
   - Pages → compose sections into page.tsx
   - Features → ContactForm last (requires forms library)
7. **Commit after each milestone** — the ROADMAP.md milestones map directly to commit boundaries.
8. **Run `next build` early and often** — catch type errors and build failures incrementally.
