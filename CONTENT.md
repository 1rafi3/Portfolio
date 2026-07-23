# Content Architecture — Developer Portfolio

> Single source of truth for every piece of portfolio content.
> All UI components consume data from structured files — no hardcoded text.
> Separating content from presentation means editing a project, adding a skill, or updating your bio never requires touching a component.

---

## Table of Contents

1. [Content Principles](#1-content-principles)
2. [Hero](#2-hero)
3. [About](#3-about)
4. [Skills](#4-skills)
5. [Education](#5-education)
6. [Experience](#6-experience)
7. [Projects](#7-projects)
8. [Certifications](#8-certifications)
9. [Contact](#9-contact)
10. [SEO](#10-seo)
11. [Footer](#11-footer)
12. [Navigation](#12-navigation)
13. [Social Links](#13-social-links)
14. [Resume](#14-resume)
15. [Blog (Future)](#15-blog-future)
16. [Testimonials (Future)](#16-testimonials-future)
17. [Content-to-File Mapping](#17-content-to-file-mapping)

---

## 1. Content Principles

### Every content model must be:

1. **Reusable** — One schema powers listing pages, detail pages, and previews.
2. **Scalable** — Adding new fields never breaks existing consumers. All fields are additive.
3. **Future-ready** — Optional fields for future versions (v2.0, v3.0) exist now as empty slots.
4. **Duplication-free** — A piece of information lives in exactly one place. References use IDs, not copies.
5. **Presentation-agnostic** — Content describes _what_ to show, not _how_ to show it. No markup, no style hints, no inline formatting.

### Data flow rule:

```
Content definition (CONTENT.md)
  → TypeScript interface (src/types/*.ts)
    → Data file (src/data/*.ts)
      → Component consumes typed data
```

The UI never reaches into raw content. It always consumes typed data through interfaces.

---

## 2. Hero

The hero is a single profile — a singleton object, not an array. It represents the owner of the portfolio.

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | yes | Full name displayed in the hero heading |
| `professionalTitle` | string | yes | Current or primary role (e.g., "Full-Stack Developer") |
| `shortIntroduction` | string | yes | One-liner tagline under the title (15 words max) |
| `professionalSummary` | string | no | 2–3 sentence summary for the hero section |
| `ctaButtons` | CTAButton[] | yes | Array of call-to-action buttons (1–3) |
| `resume` | ResumeLink | no | Link to resume file or external URL |
| `professionalPhoto` | Image | no | Profile photo (1:1 aspect ratio) |
| `status` | Status | yes | Current professional status |
| `availability` | Availability | yes | Current availability for work |

### Subtypes

#### CTAButton

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `label` | string | yes | Button text |
| `href` | string | yes | URL or route path |
| `variant` | "primary" \| "secondary" \| "outline" | yes | Maps to button style |
| `icon` | string (Lucide name) | no | Optional leading icon |

#### ResumeLink

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `label` | string | yes | Button text (e.g., "Download Resume") |
| `url` | string | yes | Path to PDF or external URL |
| `fileSize` | string | no | Display size (e.g., "2.4 MB") |

#### Image

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `src` | string | yes | Path relative to `/public/images/` |
| `alt` | string | yes | Descriptive alt text |
| `width` | number | yes | Native image width in pixels |
| `height` | number | yes | Native image height in pixels |

#### Status

| Value | Meaning |
|-------|---------|
| `"employed"` | Currently working full-time |
| `"freelance"` | Available for freelance |
| `"open"` | Open to opportunities |
| `"unavailable"` | Not looking |

#### Availability

| Value | Meaning |
|-------|---------|
| `"immediate"` | Available now |
| `"two-weeks"` | Available in 2 weeks |
| `"one-month"` | Available in 1 month |
| `"not-available"` | Not available |

### Behavioral Rules

1. `ctaButtons` supports 1–3 buttons. The first button is always primary. The last button may link to the full resume.
2. If `professionalPhoto` is absent, the hero shows an initials avatar or no avatar.
3. `shortIntroduction` must never wrap to more than two lines at desktop width.

---

## 3. About

The about is a singleton object representing the person behind the portfolio.

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `biography` | string[] | yes | Array of paragraphs for the main bio |
| `programmingJourney` | string[] | no | How the developer started coding |
| `careerGoals` | string[] | no | Short-term and long-term professional aspirations |
| `interests` | string[] | no | Technical interests (e.g., "distributed systems", "UI/UX") |
| `hobbies` | Hobby[] | no | Personal hobbies outside coding |
| `personality` | string[] | no | Descriptors of working style (e.g., "detail-oriented") |
| `coreValues` | string[] | no | Professional values (e.g., "clean code", "user-first") |
| `funFacts` | string[] | no | Lighthearted facts that humanize the profile |

### Subtypes

#### Hobby

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | yes | Hobby name |
| `icon` | string (Lucide name) | no | Optional icon identifier |
| `description` | string | no | One-sentence description |

### Behavioral Rules

1. `biography` is an array of strings — each entry is a separate paragraph. The component renders each as a `<p>` element.
2. All text arrays are ordered. The component renders them in the order they appear in the array.
3. Empty arrays are treated as "section not available" — the component hides the entire section rather than showing empty state.

---

## 4. Skills

Skills are organized by category. Each category contains a list of skills.

### Structure

```
SkillCategory[]
  ├── categoryName: string
  ├── categoryIcon: string (Lucide name, optional)
  └── skills: Skill[]
        ├── name: string
        ├── icon: string (Lucide or devicon name, optional)
        ├── proficiency: number (0–100, optional)
        └── yearsOfExperience: number (optional)
```

### Categories (v1.0)

| Category | Expected Skills |
|----------|----------------|
| Frontend | React, Next.js, TypeScript, Tailwind CSS, HTML, CSS |
| Backend | Node.js, Express, Python, REST APIs, GraphQL |
| Database | PostgreSQL, MongoDB, MySQL, Redis, Prisma |
| Programming Languages | JavaScript, TypeScript, Python, C++, Go |
| AI / ML | TensorFlow, PyTorch, OpenAI APIs, LangChain |
| Tools & Editors | VS Code, Git, Docker, Webpack, Vite |
| Cloud & DevOps | AWS, Vercel, Docker, CI/CD, Linux |
| Version Control | Git, GitHub, GitLab, Bitbucket |
| Other | Agile, SEO, Accessibility, Performance |

### Fields

#### SkillCategory

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `categoryName` | string | yes | Display name for the category |
| `categoryIcon` | string (Lucide name) | no | Icon identifier for the category card |
| `skills` | Skill[] | yes | List of skills in this category |

#### Skill

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | yes | Skill display name |
| `icon` | string | no | Icon identifier — Lucide name or devicon class |
| `proficiency` | number (0–100) | no | Skill level indicator (used for optional progress bars) |
| `yearsOfExperience` | number | no | Rough years of experience with this skill |

### Behavioral Rules

1. Categories are displayed in the order defined in the array.
2. If `proficiency` is absent, the skill renders as a simple badge without a progress indicator.
3. Empty categories are filtered out and not rendered.
4. `categoryIcon` is optional — if absent, no icon appears above the category heading.

---

## 5. Education

An array of education entries ordered reverse-chronologically (most recent first).

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `institution` | string | yes | Institution name |
| `degree` | string | yes | Degree title (e.g., "B.Sc. in Computer Science") |
| `duration` | DateRange | yes | Start and end dates |
| `achievements` | string[] | no | Notable achievements during this period |
| `relevantCoursework` | string[] | no | Key courses taken |
| `cgpa` | string | no | CGPA or GPA (optional, as display string like "3.8/4.0") |
| `logo` | Image | no | Institution logo |

### Subtypes

#### DateRange

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `start` | string (ISO date) | yes | Start date (e.g., "2019-09-01") |
| `end` | string (ISO date) \| "present" | yes | End date or "present" for current |

### Behavioral Rules

1. `cgpa` is a display string, not a number — this avoids precision formatting concerns.
2. `duration.end` can be `"present"` to indicate "currently studying".
3. If `relevantCoursework` is empty, the coursework section is not rendered.

---

## 6. Experience

An array of work experience entries ordered reverse-chronologically.

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `company` | string | yes | Company name |
| `role` | string | yes | Job title |
| `location` | string | no | City, Country or "Remote" |
| `duration` | DateRange | yes | Start and end dates |
| `description` | string | no | Brief overview of the role (2–3 sentences) |
| `technologies` | string[] | no | Tech stack used in this role |
| `responsibilities` | string[] | yes | Key responsibilities as bullet points |
| `achievements` | string[] | no | Notable achievements or metrics |
| `companyUrl` | string | no | Company website URL |
| `companyLogo` | Image | no | Company logo |
| `type` | "full-time" \| "part-time" \| "internship" \| "contract" \| "freelance" | yes | Employment type |

### Behavioral Rules

1. `responsibilities` must always have at least one entry — this is the primary content of a timeline item.
2. `achievements` are visually distinct from responsibilities (e.g., highlighted with an accent bullet or icon).
3. `duration.end` can be `"present"` for the current role.
4. `technologies` render as badges below the description.

---

## 7. Projects

An array of project entries. This is the most content-rich model in the portfolio.

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | yes | Project display name |
| `slug` | string | yes | URL-safe identifier (kebab-case) |
| `shortDescription` | string | yes | 1–2 sentence summary for cards |
| `fullDescription` | string | no | Detailed description (multi-paragraph) |
| `thumbnail` | Image | no | Card thumbnail (16:9 recommended) |
| `heroImage` | Image | no | Hero/banner image for the detail page |
| `gallery` | Image[] | no | Screenshot gallery for the detail page |
| `category` | string | yes | Project category (e.g., "Web App", "CLI Tool", "Library") |
| `status` | ProjectStatus | yes | Current project status |
| `techStack` | string[] | yes | Technologies used |
| `features` | string[] | no | Key features as bullet points |
| `challenges` | string[] | no | Technical challenges faced |
| `solutions` | string[] | no | How challenges were solved |
| `lessonsLearned` | string[] | no | What was learned from the project |
| `futureImprovements` | string[] | no | Planned or desired improvements |
| `links` | ProjectLinks | no | External links |
| `timeline` | DateRange | no | Project development timeline |
| `role` | string | no | Your role (e.g., "Solo Developer", "Frontend Lead") |
| `featured` | boolean | no | Whether to show on the home page (default: false) |
| `order` | number | no | Sort order (lower = earlier in listing) |

### Subtypes

#### ProjectStatus

| Value | Meaning |
|-------|---------|
| `"completed"` | Finished and delivered |
| `"in-progress"` | Currently being worked on |
| `"maintained"` | Completed but actively maintained |
| `"archived"` | No longer maintained |
| `"open-source"` | Public repository, accepting contributions |

#### ProjectLinks

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `github` | string | no | GitHub repository URL |
| `liveDemo` | string | no | Deployed live URL |
| `caseStudy` | string | no | Blog post or case study URL |
| `docs` | string | no | Documentation URL |

### Behavioral Rules

1. `slug` must be unique and kebab-case (e.g., `"e-commerce-platform"`).
2. `featured` projects appear on the home page. Maximum 3 featured projects.
3. `order` controls listing sort. Lower values appear first. If two projects have the same order, newer `timeline.start` wins.
4. `fullDescription` supports plain text only — no Markdown, no HTML. Rich content is future (v2.0 with MDX).
5. `gallery` images are displayed in the order defined in the array.

---

## 8. Certifications

An array of certificate entries. Future v2.0 feature — defined now for forward compatibility.

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | yes | Certificate name |
| `issuer` | string | yes | Issuing organization (e.g., "AWS", "Google") |
| `issuedDate` | string (ISO date) | yes | Date the certificate was issued |
| `expirationDate` | string (ISO date) \| "no-expiry" | no | Expiration date, if applicable |
| `credentialId` | string | no | Credential ID or license number |
| `credentialUrl` | string | no | Verification URL |
| `skills` | string[] | no | Skills validated by this certificate |
| `image` | Image | no | Certificate badge or image |
| `featured` | boolean | no | Whether to highlight on the home page |

### Behavioral Rules

1. `expirationDate` is `"no-expiry"` for certifications that never expire.
2. If `credentialUrl` is present, the certificate title links to the verification page.
3. Certificates are ordered reverse-chronologically by `issuedDate`.

---

## 9. Contact

A singleton object containing all contact information.

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `email` | string | yes | Primary email address |
| `phone` | string | no | Phone number (display string) |
| `whatsapp` | string | no | WhatsApp number or link |
| `linkedin` | string (URL) | yes | LinkedIn profile URL |
| `github` | string (URL) | yes | GitHub profile URL |
| `twitter` | string (URL) | no | Twitter/X profile URL |
| `facebook` | string (URL) | no | Facebook profile URL |
| `location` | string | no | City, Country (e.g., "Dhaka, Bangladesh") |
| `availability` | Availability | yes | Current availability status |
| `responseTime` | string | no | Expected response time (e.g., "within 24 hours") |
| `contactForm` | ContactFormConfig | yes | Configures the contact form behavior |

### Subtypes

#### ContactFormConfig

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `enabled` | boolean | yes | Whether the contact form is active |
| `endpoint` | string | yes | API route path for form submission |
| `fields` | ContactFormField[] | yes | Which fields to show |

#### ContactFormField

| Value | Description |
|-------|-------------|
| `"name"` | Sender's name |
| `"email"` | Sender's email |
| `"subject"` | Message subject |
| `"message"` | Message body |

### Behavioral Rules

1. `email` is obfuscated from bots in rendering (rendered via JavaScript or data attribute).
2. Social links that are empty strings or null are not rendered.
3. `contactForm.fields` controls exactly which input fields appear. All listed fields are rendered. Order matches the array.

---

## 10. SEO

SEO is split into two layers: site-wide defaults and per-page overrides.

### Site-Wide Defaults

Stored in `config/seo.ts`. Apply to every page unless overridden.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | yes | Site title suffix (e.g., "John Doe — Developer") |
| `description` | string | yes | Default meta description (150–160 chars) |
| `keywords` | string[] | yes | Default keywords |
| `openGraph` | OpenGraph | yes | Default Open Graph configuration |
| `twitter` | TwitterCard | yes | Default Twitter card configuration |
| `canonicalUrl` | string (URL) | yes | Base canonical URL (e.g., "https://johndoe.com") |
| `robots` | RobotsConfig | yes | Search engine crawling preferences |

### Per-Page Overrides

Each page exports a `generateMetadata()` function that merges site defaults with page-specific values.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | yes | Page title (appended to site title) |
| `description` | string | yes | Page-specific meta description |
| `keywords` | string[] | no | Page-specific keywords |
| `openGraph` | Partial<OpenGraph> | no | Page-specific OG overrides |
| `canonicalUrl` | string | no | Page-specific canonical URL |
| `noIndex` | boolean | no | If true, sets `noindex` on this page |

### Subtypes

#### OpenGraph

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | yes | OG title |
| `description` | string | yes | OG description |
| `image` | Image | no | OG image (1200×630 recommended) |
| `type` | "website" \| "article" \| "profile" | yes | OG type |
| `locale` | string | no | Content locale (e.g., "en_US") |

#### TwitterCard

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `card` | "summary" \| "summary_large_image" | yes | Card type |
| `site` | string | no | Twitter handle (e.g., "@johndoe") |
| `creator` | string | no | Content creator handle |

#### RobotsConfig

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `index` | boolean | yes | Allow indexing |
| `follow` | boolean | yes | Allow link following |
| `sitemap` | boolean | yes | Include in sitemap |

---

## 11. Footer

A singleton object containing footer content.

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `copyright` | string | yes | Copyright text (e.g., "© 2026 John Doe. All rights reserved.") |
| `showSocialLinks` | boolean | yes | Whether to render social icons in the footer |
| `showNavigation` | boolean | yes | Whether to render navigation links in the footer |
| `additionalLinks` | FooterLink[] | no | Extra footer links (e.g., "Privacy", "Terms") |
| `badge` | FooterBadge | no | Optional badge (e.g., "Built with Next.js") |

### Subtypes

#### FooterLink

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `label` | string | yes | Link text |
| `href` | string | yes | URL or route path |
| `external` | boolean | no | Whether it opens in a new tab |

#### FooterBadge

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `text` | string | yes | Badge text (e.g., "Built with Next.js") |
| `icon` | string (Lucide name) | no | Optional icon |
| `href` | string | no | Optional link URL |

---

## 12. Navigation

Navigation is an array of link entries defined in `config/navigation.ts`.

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `label` | string | yes | Display text |
| `href` | string | yes | Route path |
| `icon` | string (Lucide name) | no | Optional icon for mobile menu |
| `external` | boolean | no | If true, opens in new tab |
| `active` | ActivePattern | yes | How to determine if this link is active |
| `children` | NavLink[] | no | Dropdown sub-items (future use) |

### Subtypes

#### ActivePattern

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `exact` | boolean | yes | If true, matches only the exact path |
| `pattern` | string | no | Regex or path pattern for partial matching |

### Behavioral Rules

1. `active.exact` is `true` for leaf pages (e.g., `/about`).
2. `active.exact` is `false` for parent pages with children (e.g., `/projects` matches `/projects/*`).
3. Navigation order in the array determines the visual order in the header.
4. The Home link (`/`) is always first.

---

## 13. Social Links

Social links are stored in `config/social.ts` as an array.

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `platform` | string | yes | Platform name (e.g., "GitHub", "LinkedIn") |
| `url` | string (URL) | yes | Full profile URL |
| `icon` | string (Lucide name) | yes | Lucide icon identifier |
| `label` | string | yes | Accessible label (e.g., "Visit my GitHub profile") |
| `active` | boolean | no | Whether this account is active (default: true) |

### Behavioral Rules

1. Inactive accounts (`active: false`) are not rendered anywhere.
2. The `label` field is used as `aria-label` on the icon link.
3. All social links open in a new tab with `rel="noopener noreferrer"`.

---

## 14. Resume

Resume is a singleton object that references the resume file and its metadata.

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `file` | ResumeFile | yes | Resume file reference |
| `lastUpdated` | string (ISO date) | yes | Last update date |
| `versions` | ResumeVersion[] | no | Multiple language or format versions |
| `highlights` | string[] | no | Key highlights to display alongside the resume link |

### Subtypes

#### ResumeFile

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string | yes | Path to PDF file |
| `format` | "pdf" | yes | File format |
| `size` | string | no | Display file size (e.g., "1.2 MB") |

#### ResumeVersion

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `label` | string | yes | Display label (e.g., "English", "简体中文") |
| `locale` | string | yes | Locale code (e.g., "en", "zh-CN") |
| `url` | string | yes | Path to version-specific PDF |
| `size` | string | no | File size |

### Behavioral Rules

1. The resume page shows `lastUpdated` prominently so visitors know the resume is current.
2. If `versions` is defined with multiple entries, the UI shows a version picker before downloading.

---

## 15. Blog (Future)

Defined now for forward compatibility. Will be implemented in v2.0.

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | yes | Article title |
| `slug` | string | yes | URL-safe identifier (kebab-case) |
| `excerpt` | string | yes | Short summary for cards (2–3 sentences) |
| `content` | string (MDX) | yes | Full article content |
| `coverImage` | Image | no | Featured image (16:9 recommended) |
| `publishedAt` | string (ISO date) | yes | Publication date |
| `updatedAt` | string (ISO date) | no | Last significant update |
| `readingTime` | number | yes | Estimated reading time in minutes |
| `tags` | string[] | no | Content tags |
| `category` | string | no | Article category (e.g., "Tutorial", "Case Study") |
| `featured` | boolean | no | Whether to highlight on home page |
| `status` | "draft" \| "published" \| "archived" | yes | Publication status |
| `seo` | Partial<SEO per-page overrides> | no | Article-specific SEO |
| `relatedArticles` | string[] (slugs) | no | References to related articles |

### Behavioral Rules

1. Draft articles are never rendered on the site — they exist for future publishing.
2. `readingTime` is calculated by the author, not auto-generated.
3. `content` uses MDX (future). In v1.0 this field is planned but empty.

---

## 16. Testimonials (Future)

Defined now for forward compatibility. Will be implemented in v3.0.

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `quote` | string | yes | The testimonial text |
| `author` | string | yes | Full name of the person |
| `role` | string | no | Their role/title at the time |
| `company` | string | no | Their company or organization |
| `avatar` | Image | no | Author photo (1:1 recommended) |
| `linkedin` | string (URL) | no | Author's LinkedIn profile |
| `featured` | boolean | no | Whether to highlight on the home page |

### Behavioral Rules

1. Testimonials are displayed in the order defined in the array.
2. If `linkedin` is present, the author's name links to their LinkedIn profile.
3. If `avatar` is absent, an initials avatar is rendered.

---

## 17. Content-to-File Mapping

Every content model maps to exactly one file. This table defines the source of truth for every piece of content.

| Content Model | Storage Location | Type Definition | Format |
|---------------|-----------------|-----------------|--------|
| Hero | `src/data/hero.ts` | `src/types/hero.ts` | Exported singleton object |
| About | `src/data/about.ts` | `src/types/about.ts` | Exported singleton object |
| Skills | `src/data/skills.ts` | `src/types/skill.ts` | Exported array of category objects |
| Education | `src/data/education.ts` | `src/types/education.ts` | Exported array |
| Experience | `src/data/experience.ts` | `src/types/experience.ts` | Exported array |
| Projects | `src/data/projects.ts` | `src/types/project.ts` | Exported array |
| Certifications | `src/data/certificates.ts` | `src/types/certificate.ts` | Exported array |
| Contact | `src/data/contact.ts` | `src/types/contact.ts` | Exported singleton object |
| SEO (site-wide) | `src/config/seo.ts` | Inline / `types/seo.ts` | Exported config object |
| Navigation | `src/config/navigation.ts` | `src/types/common.ts` | Exported array |
| Social Links | `src/config/social.ts` | `src/types/common.ts` | Exported array |
| Resume | `src/data/resume.ts` | `src/types/resume.ts` | Exported singleton object |
| Footer | `src/config/footer.ts` | `src/types/common.ts` | Exported singleton object |
| Blog | `src/data/articles.ts` (v2.0) | `src/types/article.ts` | Exported array |
| Testimonials | `src/data/testimonials.ts` (v3.0) | `src/types/testimonial.ts` | Exported array |

### File Loading Convention

```
src/data/*.ts              → Static content, imported directly at build time
src/config/*.ts            → Site configuration, imported directly
src/types/*.ts             → Type definitions, imported by data files and components
```

### File Organization Rule

- **One file per content entity** — `data/projects.ts` contains all projects.
- If a content entity grows beyond 500 lines, split into a folder with an index barrel: `data/projects/index.ts`, `data/projects/project-01.ts`, etc.
- Type definitions are prefixed to match: `types/project.ts` contains `IProject`, `IProjectLinks`, `ProjectStatus`.

### Migration Path (Static → CMS)

Current:
```
src/data/projects.ts  →  Component (build-time import)
```

Future with CMS:
```
CMS (Sanity / Contentlayer)  →  lib/cms-adapter.ts  →  IProject[]  →  Component (unchanged)
```

The component never changes — it always receives `IProject[]`. Only the data source changes.
