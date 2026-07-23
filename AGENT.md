# AGENT.md — Developer Portfolio

## Project Vision

Build a professional, production-quality, multi-page developer portfolio that satisfies SCIC assignment requirements and serves as a long-term personal portfolio. The project prioritizes scalability, maintainability, code quality, and performance — enabling incremental feature additions without major refactoring.

## Assignment Requirements

1. Multi-page application for a professional developer portfolio.
2. Pages: Home, About, Projects, Blog (or Articles), Contact.
3. Responsive navigation and footer.
4. Contact form with form validation.
5. Data-driven content (e.g., projects, articles loaded from data files or a headless CMS).
6. Dark mode or consistent color scheme.
7. Animations and transitions using Framer Motion.
8. Accessibility compliance.
9. SEO optimization.
10. Deployment to a hosting platform (e.g., Vercel).

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14+ (App Router) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS |
| Component Library | shadcn/ui |
| Animation | Framer Motion |
| Icons | Lucide React |
| Form Handling | React Hook Form + Zod |
| Linting | ESLint + Prettier |

## Coding Standards

### General
- Strict TypeScript — no `any`, no implicit `any`, no `@ts-ignore`.
- Functional components only — no class components.
- Named exports preferred over default exports.
- Single responsibility for every function, component, and module.
- No magic strings, numbers, or inline styles.
- All text strings must be extractable (prefer constants or locale files for future i18n).

### Naming
- **Components**: PascalCase (`ProjectCard.tsx`)
- **Files**: camelCase for utilities (`formatDate.ts`), PascalCase for components.
- **Functions**: camelCase verbs (`getProjects`, `handleSubmit`).
- **Constants**: UPPER_SNAKE_CASE (`MAX_ITEMS`, `DEFAULT_PAGE_SIZE`).
- **Types/Interfaces**: PascalCase prefixed with `I` for interfaces, `T` for types (`IProject`, `TNavLink`).
- **CSS classes**: Tailwind utility classes only — no custom CSS unless absolutely necessary.

### File & Folder Conventions
- One component per file.
- Colocate tests, stories, and type definitions with the component (e.g., `ProjectCard/ProjectCard.tsx`, `ProjectCard/types.ts`).
- Barrel exports via `index.ts` in each directory.

## Folder Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (site)/             # Route group for site pages
│   │   ├── about/
│   │   ├── blog/
│   │   ├── contact/
│   │   ├── projects/
│   │   └── page.tsx        # Home page
│   ├── layout.tsx          # Root layout
│   └── globals.css         # Global styles / Tailwind directives
├── components/
│   ├── ui/                 # shadcn/ui primitives (button, card, input, etc.)
│   ├── layout/             # Layout components (Header, Footer, Navbar)
│   ├── sections/           # Page sections (HeroSection, AboutSection, etc.)
│   └── shared/             # Shared components (ProjectCard, ArticleCard, SkillBadge, etc.)
├── data/                   # Static data files (projects.ts, articles.ts, skills.ts)
├── hooks/                  # Custom React hooks (useScrollAnimation, useMediaQuery, etc.)
├── lib/                    # Utility functions (cn.ts, formatters.ts, validators.ts)
├── types/                  # Shared TypeScript types
├── public/
│   ├── images/
│   └── fonts/
└── config/                 # Site configuration (site.ts, constants.ts, seo.ts)
```

## Component Rules

1. **One concern per component** — if a component does more than one thing, split it.
2. **Composition over props explosion** — use `children` and slot patterns.
3. **Shadcn/ui customization** — only override via `className` prop or `cn()` utility; never modify the source.
4. **Framer Motion** — wrap animated parts in motion components; keep variants in separate objects.
5. **Accessibility** — every interactive element needs `aria-label` or visible label; use `role` attributes correctly.
6. **Error boundaries** — wrap data-dependent sections with error boundaries.
7. **Loading states** — every data-fetching component must have a loading state.
8. **Empty states** — every list component must handle the empty state.

## UI Rules

### Brand Colors
- Background: `#0F172A`
- Accent: `#3B82F6`
- Text: `#F8FAFC`
- Derive all shades from these three.

### Design Tokens (Tailwind Config)
```ts
colors: {
  brand: {
    bg: '#0F172A',
    accent: '#3B82F6',
    text: '#F8FAFC',
  }
}
```

### Spacing
- Use Tailwind spacing scale (`space-y-4`, `p-6`, `gap-8`).
- Whitespace must be intentional — never add extra spacing without purpose.

### Responsive
- Mobile-first approach.
- Breakpoints: `sm` (640), `md` (768), `lg` (1024), `xl` (1280).
- Test every component at all breakpoints.

## Accessibility Rules

1. All images must have `alt` text.
2. All interactive elements must be keyboard-focusable.
3. Skip-to-content link must be the first focusable element.
4. Use semantic HTML (`<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`).
5. Headings must follow a logical hierarchy (h1 → h2 → h3, never skip levels).
6. Color contrast must meet WCAG AA (minimum 4.5:1 for text).
7. Form inputs must have associated `<label>` elements.
8. Use `aria-expanded`, `aria-controls`, `aria-current` where applicable.

## Performance Rules

1. Images must use Next.js `Image` component with explicit `width` and `height`.
2. Lazy-load below-the-fold content.
3. Minimize JavaScript bundle — dynamic import heavy components.
4. Use `next/font` for font loading.
5. Static generation (SSG) for content pages where possible.
6. No render-blocking resources.
7. Use React.memo only when profiling shows a bottleneck — never pre-optimize.
8. Keep Framer Motion animations GPU-accelerated (use `transform` and `opacity` only).

## AI Behavior Rules

1. Never modify an existing file without explicit approval.
2. Never install dependencies without approval.
3. Never generate application code without first explaining the plan and listing every file.
4. Wait for user approval before writing any code.
5. Prefer reading existing code before writing new code.
6. Only create files listed in the approved plan.
7. After implementing, verify with lint and type checking.
8. If the user rejects a plan, propose an alternative — do not proceed.
9. When refactoring, explain the before/after and why the change is needed.
10. Never use `any`. Never use `// @ts-ignore`.

## Definition of Done

A task is complete when:

- [ ] All planned files are created or modified.
- [ ] TypeScript compiles without errors (strict mode).
- [ ] ESLint passes with zero warnings.
- [ ] The feature/page renders correctly at all breakpoints.
- [ ] All interactive elements are keyboard-accessible.
- [ ] Lighthouse scores are above 90 in all categories.
- [ ] No dead code, commented code, or console.log statements.
- [ ] The code follows the naming conventions and folder structure defined here.
- [ ] No duplicate logic exists.
- [ ] The feature works in production build (`next build && next start`).
