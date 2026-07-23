# Design System — Developer Portfolio

> Visual source of truth for the entire project.
> Inspired by Vercel, Linear, Stripe, GitHub, and Raycast.

---

## Table of Contents

1. [Design Principles](#1-design-principles)
2. [Color System](#2-color-system)
3. [Typography](#3-typography)
4. [Spacing System](#4-spacing-system)
5. [Layout](#5-layout)
6. [Border Radius](#6-border-radius)
7. [Shadow System](#7-shadow-system)
8. [Button System](#8-button-system)
9. [Card System](#9-card-system)
10. [Form Elements](#10-form-elements)
11. [Badge & Tag System](#11-badge--tag-system)
12. [Iconography](#12-iconography)
13. [Navigation](#13-navigation)
14. [Image Guidelines](#14-image-guidelines)
15. [Animation System](#15-animation-system)
16. [Responsiveness](#16-responsiveness)
17. [Accessibility](#17-accessibility)

---

## 1. Design Principles

### Whitespace First

Whitespace is a design element, not empty space. Every element must have room to breathe. When in doubt, add more spacing. The page should feel airy, never cramped.

### Content Over Decoration

Every visual element must serve a purpose. If it doesn't communicate or guide, remove it. Decoration is justified only when it improves clarity or hierarchy — never for its own sake.

### Consistency Over Creativity

Users should never guess. The same component looks the same everywhere. The same spacing applies everywhere. Predictability builds trust. Creativity lives in content, not in inconsistent UI.

### Readable Typography

Text is the primary interface. Type must be comfortable to read at every size. Line height, letter spacing, and contrast are non-negotiable. Sacrificing readability for style is not permitted.

### Simple Interactions

Hover, focus, click — each interaction should feel natural and predictable. No gratuitous motion. No surprises. Every micro-interaction must answer: "What just happened? Where am I now?"

### Professional Presentation

The portfolio represents a professional. Every pixel must communicate competence and attention to detail. Alignment, spacing, color, and typography must be flawless. There is no room for "good enough."

---

## 2. Color System

### Brand Colors (Fixed)

Only three brand colors exist. All other visual colors are derived from these using opacity, lightness, or darkness adjustments.

| Token | Hex | Usage |
|-------|-----|-------|
| `brand-bg` | `#0F172A` | Page background, primary surface |
| `brand-accent` | `#3B82F6` | Primary actions, links, highlights, focus rings |
| `brand-text` | `#F8FAFC` | Primary body text, headings |

### Derived Color Palette

All derived values are relative to the three brand colors.

#### Background Shades (`#0F172A`)

| Token | Value | Usage |
|-------|-------|-------|
| `bg-base` | `#0F172A` | Page background |
| `bg-surface` | `#1E293B` | Card backgrounds, elevated surfaces (lighten ~8%) |
| `bg-elevated` | `#273449` | Dropdowns, modals, hovered cards (lighten ~12%) |
| `bg-hover` | `#334155` | Hover state for surface elements (lighten ~16%) |
| `bg-subtle` | `#1A2332` | Alternating rows, subtle section breaks (lighten ~4%) |

#### Accent Shades (`#3B82F6`)

| Token | Value | Usage |
|-------|-------|-------|
| `accent-base` | `#3B82F6` | Primary buttons, links, active states |
| `accent-hover` | `#2563EB` | Button/link hover (darken 10%) |
| `accent-active` | `#1D4ED8` | Button/link active/pressed (darken 15%) |
| `accent-subtle` | `rgba(59, 130, 246, 0.15)` | Background highlight for selected/focused items |
| `accent-muted` | `rgba(59, 130, 246, 0.5)` | Disabled accent elements, decorative lines |
| `accent-ring` | `rgba(59, 130, 246, 0.5)` | Focus ring / outline |

#### Text Shades (`#F8FAFC`)

| Token | Value | Usage |
|-------|-------|-------|
| `text-base` | `#F8FAFC` | Primary body text, headings |
| `text-secondary` | `rgba(248, 250, 252, 0.7)` | Secondary text, metadata, captions |
| `text-muted` | `rgba(248, 250, 252, 0.5)` | Placeholder text, disabled labels |
| `text-subtle` | `rgba(248, 250, 252, 0.35)` | Decorative hints, non-essential info |
| `text-inverse` | `#0F172A` | Text on accent-colored backgrounds |

#### Border Colors

| Token | Value | Usage |
|-------|-------|-------|
| `border-default` | `rgba(248, 250, 252, 0.1)` | Default borders on surfaces |
| `border-subtle` | `rgba(248, 250, 252, 0.06)` | Very subtle separators, dividers |
| `border-hover` | `rgba(248, 250, 252, 0.2)` | Hovered border state |
| `border-accent` | `#3B82F6` | Focused or active border |

### Usage Rules

1. Never use a color outside this palette.
2. Use CSS variables for all color tokens.
3. `text-base` on `bg-base` = default page appearance.
4. `text-base` on `bg-surface` = card content.
5. `text-secondary` for anything less important than body text.
6. Accent is reserved for interactive elements only — never use it for decorative borders or backgrounds.

---

## 3. Typography

### Font Selection

| Role | Font | Fallback | Weight Range |
|------|------|----------|-------------|
| Display | Inter | sans-serif | 700–800 |
| Heading | Inter | sans-serif | 600–700 |
| Body | Inter | sans-serif | 400–500 |
| Caption | Inter | sans-serif | 400–500 |
| Monospace | JetBrains Mono | monospace | 400–500 |

**Rationale**: Inter is the industry standard for premium SaaS (used by Vercel, GitHub, Linear, Raycast). It offers excellent readability at every size, a complete weight range, and tight vertical metrics. A single primary font maintains visual consistency. JetBrains Mono is reserved for code blocks and technical content.

### Type Scale

```
Display XL:   48px / 3rem    →  line-height: 1.1    →  letter-spacing: -0.03em
Display LG:   40px / 2.5rem  →  line-height: 1.15   →  letter-spacing: -0.025em
Display MD:   36px / 2.25rem →  line-height: 1.2    →  letter-spacing: -0.02em

Heading XL:  30px / 1.875rem →  line-height: 1.25   →  letter-spacing: -0.015em
Heading LG:  24px / 1.5rem   →  line-height: 1.3    →  letter-spacing: -0.01em
Heading MD:  20px / 1.25rem  →  line-height: 1.35   →  letter-spacing: -0.005em
Heading SM:  18px / 1.125rem →  line-height: 1.4    →  letter-spacing: 0

Body LG:     18px / 1.125rem →  line-height: 1.65   →  letter-spacing: 0
Body MD:     16px / 1rem     →  line-height: 1.65   →  letter-spacing: 0
Body SM:     14px / 0.875rem →  line-height: 1.6    →  letter-spacing: 0

Caption:     13px / 0.8125rem→  line-height: 1.5    →  letter-spacing: 0
Small:       12px / 0.75rem  →  line-height: 1.5    →  letter-spacing: 0.01em

Code:        14px / 0.875rem →  line-height: 1.6    →  letter-spacing: 0
```

### Typography Usage Rules

| Element | Style | Weight |
|---------|-------|--------|
| Page title (h1) | Display XL or LG | 700 |
| Section title (h2) | Display MD or Heading XL | 600 or 700 |
| Subsection title (h3) | Heading LG or MD | 600 |
| Card title (h4) | Heading SM or Body LG | 600 |
| Body paragraphs | Body MD | 400 |
| Secondary body | Body SM | 400 |
| Metadata, dates | Caption | 400 |
| Labels, tags | Small | 500 |
| Code blocks | Code | 400 |

### Rules

1. Never use more than two type sizes on a single card or compact component.
2. Never use font weight below 400 for body text (reduces readability on dark backgrounds).
3. Letter-spacing is negative for display/heading sizes only — body text always uses 0.
4. Line height for body text must be at least 1.6 for comfortable reading.
5. All type is rendered in `text-base` unless secondary/muted is explicitly intended.

---

## 4. Spacing System

### Base Unit

8px (0.5rem) base unit. All spacing values are multiples of 8px, with 4px allowed for tight spacing only.

### Spacing Scale

| Name | Value | Tailwind | Usage |
|------|-------|----------|-------|
| 3xs | 2px | `0.5` | Icon gaps, tiny adjustments |
| 2xs | 4px | `1` | Tight inner padding, icon-to-text gaps |
| xs | 8px | `2` | Element spacing within a card |
| sm | 12px | `3` | Between related elements |
| md | 16px | `4` | Default spacing, card padding |
| lg | 24px | `6` | Between grouped sections within a page section |
| xl | 32px | `8` | Between major content blocks |
| 2xl | 40px | `10` | Section top/bottom padding |
| 3xl | 48px | `12` | Section spacing on mobile |
| 4xl | 64px | `16` | Section spacing on desktop |
| 5xl | 80px | `20` | Hero section padding |
| 6xl | 96px | `24` | Page-level spacing |
| 7xl | 128px | `32` | Rare — full page break spacing |

### Spacing Rules

#### Section Spacing

```
Desktop (≥1024px):
  padding-top:    4xl (64px)
  padding-bottom: 4xl (64px)

Tablet (768–1023px):
  padding-top:    3xl (48px)
  padding-bottom: 3xl (48px)

Mobile (<768px):
  padding-top:    2xl (40px)
  padding-bottom: 2xl (40px)
```

#### Card Spacing

```
Card padding:        md (16px) or lg (24px)
Card inner gap:      sm (12px) between elements
Card title to body:  xs (8px)
Card actions:        md (16px) from content
```

#### Container Padding

```
Desktop (≥1280px):  horizontal padding = 32px (8)
Laptop (1024–1279): horizontal padding = 24px (6)
Tablet (768–1023):  horizontal padding = 24px (6)
Mobile (<768px):     horizontal padding = 16px (4)
```

#### Grid Spacing

```
Desktop grid gap:    24px (6)
Mobile grid gap:     16px (4)
Column gap:          24px (6)
Row gap:             24px (6)
```

#### Responsive Spacing

```
Text elements:
  Desktop:  stack gap = md (16px)
  Mobile:   stack gap = xs (8px)

Button groups:
  Desktop:  gap = sm (12px)
  Mobile:   gap = xs (8px)

Avatar/icon lists:
  Stack gap: 2xs (4px)
```

---

## 5. Layout

### Container Width

```
Maximum container width:  1280px (80rem)
Narrow content width:     768px (48rem)  — for articles, blog posts, reading content
```

The container is centered with auto horizontal margins.

### Grid System

Uses CSS Grid with responsive columns.

```
Default grid:            12-column implicit grid
Content grid:            12-column explicit grid with 24px gap

Breakpoint columns:
  <640px:   1 column
  640+ :    2 columns
  768+ :    2–3 columns
  1024+:    3–4 columns
  1280+:    4 columns
```

### Breakpoints

| Name | Width | Target |
|------|-------|--------|
| `sm` | 640px | Large phones, small tablets |
| `md` | 768px | Tablets |
| `lg` | 1024px | Small laptops, landscape tablets |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Wide desktops |

### Page Structure

```
┌──────────────────────────────────────────────────┐
│  SkipToContent (first focusable element)         │
├──────────────────────────────────────────────────┤
│  Header                                          │
│  ├── Logo/Name (left)                            │
│  ├── Desktop Nav (center/right)                  │
│  └── Mobile Menu Toggle (hidden on desktop)      │
├──────────────────────────────────────────────────┤
│  <main>                                          │
│  │                                               │
│  │  ┌─ Section ──────────────────────────────┐   │
│  │  │  Container (max 1280px, centered)       │   │
│  │  │  ┌─ Content ───────────────────────┐    │   │
│  │  │  │  Section heading (if applicable) │    │   │
│  │  │  │  Grid / stacked content          │    │   │
│  │  │  └──────────────────────────────────┘    │   │
│  │  └──────────────────────────────────────────┘   │
│  │                                                 │
│  │  (repeat sections as needed)                    │
│  │                                                 │
│  └─────────────────────────────────────────────────┘
├──────────────────────────────────────────────────┤
│  Footer                                          │
│  ├── Social links                                │
│  ├── Navigation links                            │
│  └── Copyright                                   │
└──────────────────────────────────────────────────┘
```

### Section Structure

Every page section follows this template:

```
<section>
  <div class="container">    // Centered, max 1280px
    <div class="section-header">   // Optional — for titled sections
      <SectionHeading />
      <p>Description</p>          // Optional — brief context
    </div>
    <div class="section-content"> // Grid or stacked layout
      // Cards, lists, or content grids
    </div>
  </div>
</section>
```

### Hero Section (Special)

```
<section>                     // Full viewport height suggestion, or content-driven
  <div class="container">
    <div class="hero-content"> // Centered or left-aligned
      <h1>Display XL</h1>
      <p>Body LG — supporting text</p>
      <div class="hero-actions"> // Button group
        <Button variant="primary" />
        <Button variant="outline" />
      </div>
    </div>
  </div>
</section>
```

---

## 6. Border Radius

### Radius Scale

| Name | Value | Tailwind | Usage |
|------|-------|----------|-------|
| None | 0 | `rounded-none` | Cards that need sharp edges (rare) |
| XS | 2px | `rounded-sm` | Tags, small badges |
| SM | 4px | `rounded` | Inputs, form elements |
| MD | 6px | `rounded-md` | Buttons, small cards |
| LG | 8px | `rounded-lg` | Default card radius |
| XL | 12px | `rounded-xl` | Feature cards, large images |
| 2XL | 16px | `rounded-2xl` | Modals, dialogs |
| Full | 9999px | `rounded-full` | Avatars, pill badges, icon buttons |

### Radius by Component

| Component | Radius |
|-----------|--------|
| Primary / Secondary Button | MD (6px) |
| Ghost / Outline Button | MD (6px) |
| Icon Button | LG (8px) |
| Card — Project | LG (8px) |
| Card — Skill | LG (8px) |
| Card — Experience | LG (8px) |
| Input field | SM (4px) |
| Textarea | SM (4px) |
| Badge / Tag | XS or Full (2px or pill) |
| Image (inline) | LG (8px) |
| Image (hero) | XL (12px) |
| Avatar | Full (circle) |
| Modal / Dialog | XL (12px) |

### Radius Rules

1. Buttons and cards share the same radius (6–8px) for visual consistency.
2. Inputs use a slightly smaller radius (4px) to distinguish them from cards.
3. Images in cards match the card radius or use a slightly larger radius (the card itself has LG radius, so the image can be LG or XL).
4. Never mix different radius sizes within the same component.

---

## 7. Shadow System

### Approach for Dark Theme

On a dark background (`#0F172A`), traditional black box-shadows are invisible. Instead, elevation is communicated through:
1. **Lighter surface backgrounds** (the card is lighter than the page)
2. **Subtle border highlights** (a thin lighter border on top)
3. **Very subtle glow shadows** (using the accent color at low opacity)

### Shadow Definitions

| Name | Value | Usage |
|------|-------|-------|
| None | `none` | Flat surfaces |
| XS | `0 1px 2px rgba(0, 0, 0, 0.3)` | Small elements, tags |
| SM | `0 1px 3px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.2)` | Default card shadow |
| MD | `0 4px 6px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.2)` | Elevated cards, dropdowns |
| LG | `0 10px 25px rgba(0, 0, 0, 0.4), 0 4px 10px rgba(0, 0, 0, 0.3)` | Modals, popovers |
| XL | `0 20px 50px rgba(0, 0, 0, 0.5), 0 8px 20px rgba(0, 0, 0, 0.4)` | Full-screen overlays |
| Accent Glow | `0 0 20px rgba(59, 130, 246, 0.15)` | Accent hover glow on cards/buttons |

### Hover Shadow

```
Card hover:  MD shadow + translateY(-2px) + border-hover color
Button hover: SM shadow + slight brightness increase
```

### Shadow Rules

1. Shadows on dark themes are primarily about depth layering, not dramatic drops.
2. The primary visual cue for elevation is background lightness (bg → surface → elevated), not shadow intensity.
3. Use accent glow sparingly — only on interactive elements that benefit from it.

---

## 8. Button System

### Button Variants

#### Primary Button

```
Background:   accent-base (#3B82F6)
Text:         text-inverse (#0F172A)
Border:       none
Radius:       MD (6px)
Padding:      12px 24px (horizontal), 10px 20px (compact)
Font:         Body SM (14px), weight 600
Icon gap:     8px

Hover:
  Background: accent-hover (#2563EB)
  Shadow:     SM shadow

Active/Pressed:
  Background: accent-active (#1D4ED8)
  Transform:  scale(0.98)

Focus:
  Ring:       2px solid accent-ring, offset 2px

Disabled:
  Background: rgba(59, 130, 246, 0.4)
  Text:       rgba(15, 23, 42, 0.5)
  Cursor:     not-allowed
```

#### Secondary Button

```
Background:   transparent
Text:         text-base (#F8FAFC)
Border:       1px solid border-default
Radius:       MD (6px)
Padding:      12px 24px
Font:         Body SM (14px), weight 500
Icon gap:     8px

Hover:
  Background: bg-hover (#334155)
  Border:     border-hover

Active/Pressed:
  Background: bg-elevated (#273449)
  Transform:  scale(0.98)

Focus:
  Ring:       2px solid accent-ring, offset 2px

Disabled:
  Text:       text-muted
  Border:     border-default
  Background: transparent
  Cursor:     not-allowed
```

#### Ghost Button

```
Background:   transparent
Text:         text-base (#F8FAFC)
Border:       none
Radius:       MD (6px)
Padding:      12px 24px
Font:         Body SM (14px), weight 500
Icon gap:     8px

Hover:
  Background: bg-hover (#334155)

Active/Pressed:
  Background: bg-elevated (#273449)

Focus:
  Ring:       2px solid accent-ring, offset 2px

Disabled:
  Text:       text-muted
  Background: transparent
  Cursor:     not-allowed
```

#### Outline Button (Accent)

```
Background:   transparent
Text:         accent-base (#3B82F6)
Border:       1px solid accent-base
Radius:       MD (6px)
Padding:      12px 24px
Font:         Body SM (14px), weight 500
Icon gap:     8px

Hover:
  Background: accent-subtle
  Border:     accent-hover (#2563EB)
  Text:       accent-hover

Active/Pressed:
  Background: rgba(59, 130, 246, 0.25)
  Transform:  scale(0.98)

Focus:
  Ring:       2px solid accent-ring, offset 2px

Disabled:
  Text:       accent-muted
  Border:     accent-muted
  Background: transparent
  Cursor:     not-allowed
```

#### Icon Button

```
Size:         40px × 40px (default), 32px × 32px (small)
Background:   transparent
Text:         text-base (#F8FAFC)
Border:       none
Radius:       LG (8px)
Icon:         20px (default), 16px (small)

Hover:
  Background: bg-hover (#334155)

Active/Pressed:
  Background: bg-elevated (#273449)

Focus:
  Ring:       2px solid accent-ring, offset 2px

Disabled:
  Text:       text-muted
  Background: transparent
  Cursor:     not-allowed
```

### Button Sizes

| Size | Height | Horizontal Padding | Font | Icon |
|------|--------|-------------------|------|------|
| SM | 32px | 16px | 13px / 500 | 16px |
| MD (default) | 40px | 24px | 14px / 500–600 | 18px |
| LG | 48px | 32px | 16px / 500–600 | 20px |

### Button Rules

1. Every button must have a visible focus ring (WCAG AA).
2. Icon buttons must have an `aria-label` describing the action.
3. Buttons with icons and text: icon on the left for actions, icon on the right for navigation/expand.
4. Never use primary buttons for destructive actions — use secondary or outline instead.
5. Loading state: replace icon with a spinner, keep the text visible.

---

## 9. Card System

### Common Card Base

All cards share this base appearance:

```
Background:   bg-surface (#1E293B)
Border:       1px solid border-default
Radius:       LG (8px)
Shadow:       SM (default)
Padding:      lg (24px) or md (16px) — consistent per card type
Transition:   border-color 200ms, transform 200ms, box-shadow 200ms
```

### Card Variants

#### Project Card

```
Layout:       vertical, image on top
Image:        16:9 aspect ratio, rounded LG top corners (match card)
Padding:      lg (24px)
Title:        Heading SM, weight 600
Description:  Body SM, weight 400, text-secondary
Tags:         inline row at bottom, xs spacing
Hover:        border-hover + subtle translateY(-2px)
```

#### Skill Card

```
Layout:       horizontal (icon + text) or centered (icon on top)
Icon size:    32px or 40px
Title:        Body MD, weight 600
Proficiency:  Body SM, weight 400, text-secondary
Padding:      md (16px)
Hover:        border-hover + background bg-hover
```

#### Experience / Timeline Card

```
Layout:       horizontal with timeline line on the left
Role:         Heading SM, weight 600
Company:      Body MD, weight 500, accent-base (link to company)
Period:       Body SM, weight 400, text-secondary
Description:  Body MD, weight 400
Padding:      md (16px) top/bottom, lg (24px) left/right
Border:       left border 2px accent-base (timeline accent)
```

#### Blog / Article Card

```
Layout:       vertical, optional thumbnail
Image:        16:9 aspect ratio (optional)
Title:        Heading SM, weight 600
Excerpt:      Body SM, weight 400, text-secondary (2–3 lines max)
Meta:         date + read time, caption style, text-secondary
Tags:         inline row
Padding:      lg (24px)
Hover:        border-hover + subtle translateY(-2px)
```

#### Contact Card / Info Card

```
Layout:       horizontal (icon + text) or stacked
Icon:         20px, accent-base
Title:        Body SM, weight 500, text-secondary (label)
Value:        Body MD, weight 400 (content)
Padding:      md (16px)
```

### Card Layout Patterns

```
Grid layout (multiple cards):
  ┌──────────┐  ┌──────────┐  ┌──────────┐
  │  Card 1  │  │  Card 2  │  │  Card 3  │
  └──────────┘  └──────────┘  └──────────┘
  Gap: 24px (grid gap)

Featured card (single, hero position):
  ┌──────────────────────────────────────┐
  │                                      │
  │  Featured project                    │
  │  Larger, more prominent              │
  │                                      │
  └──────────────────────────────────────┘
  Background: bg-elevated or accent-subtle
```

---

## 10. Form Elements

### Input

```
Background:   bg-surface (#1E293B)
Text:         text-base (#F8FAFC)
Placeholder:  text-muted
Border:       1px solid border-default
Radius:       SM (4px)
Padding:      10px 14px (top/bottom, left/right)
Font:         Body MD (16px), weight 400
Height:       40px
Transition:   border-color 200ms

Focus:
  Border:     accent-base (#3B82F6)
  Ring:       1px solid accent-base (or outline)

Error:
  Border:     #EF4444 (red-500)
  Text (error message): caption, #EF4444

Disabled:
  Background: bg-subtle
  Text:       text-muted
  Border:     border-default
  Cursor:     not-allowed
```

### Textarea

Same as Input, with these differences:

```
Min-height:   120px
Resize:       vertical only
Padding:      12px 14px
```

### Label

```
Font:         Body SM (14px), weight 500
Color:        text-base
Margin-bottom: 6px (gap between label and input)
Required indicator: accent-base asterisk
```

### Select / Dropdown

Same as Input, with a chevron icon on the right.

### Form Layout

```
Form padding:        none (container handles spacing)
Field spacing:       20px (gap between form fields)
Field group:         24px (between logical groups)
Button placement:    left-aligned with fields, 32px from last field
Error messages:      below the field, Small (12px), red
Success message:     centered in the form area
```

### Checkbox / Radio

```
Checkbox:     18px × 18px, rounded SM (4px), accent fill when checked
Radio:         18px × 18px, rounded full, accent dot when checked
Label gap:     8px (between control and label)
```

---

## 11. Badge & Tag System

### Badge

```
Background:   bg-elevated (#273449) or accent-subtle (for accent badges)
Text:         text-base or accent-base
Border:       none or 1px solid border-default
Radius:       XS (2px) or Full (pill style)
Padding:      2px 8px (tight), 4px 12px (default)
Font:         Small (12px), weight 500
```

### Tech Tag (for project cards)

Same as Badge, default variant.

### Status Badge

```
Active/Current: accent-subtle background, accent-base text
Completed:      subtle green (#166534 / #4ADE80 on light)
Archived:       subtle gray, text-muted
```

### Badge Rules

1. Use badges for metadata only — never for primary actions.
2. Keep text short (1–3 words).
3. If the same type of badge appears in multiple places, use the same variant.

---

## 12. Iconography

### Library

All icons come from Lucide React.

### Icon Sizing

| Context | Size | Usage |
|---------|------|-------|
| Inline with text | 16px | Alongside labels, captions |
| Button icon | 18–20px | Inside buttons |
| Section icon | 24px | Section headings, feature icons |
| Skill icon | 32px | Skill cards |
| Hero / large icon | 40–48px | Hero section, empty states |
| Social link | 20–24px | Footer social icons |

### Icon Usage Rules

1. Icons must communicate meaning without relying on color.
2. Always pair icons with text for critical actions (exception: universally recognized icons in icon buttons with aria-labels).
3. Icon color inherits from the parent text color by default.
4. Decorative icons (purely visual) must have `aria-hidden="true"`.
5. Do not use outlined and filled variants inconsistently — stick to one style per context.
6. Never apply custom colors to icons that make them look clickable when they are not.

---

## 13. Navigation

### Desktop Navigation

```
Layout:       horizontal row, left-aligned (logo) + center/right-aligned (links)
Height:       64px (16 on Tailwind scale)
Background:   transparent or bg-base with backdrop blur
Border-bottom: 1px solid border-subtle (optional)
Item padding:  20px horizontal between links
Active link:   text-base, weight 500
Inactive link: text-secondary, weight 400
Hover link:    text-base
Active indicator: 2px bottom border, accent-base
```

### Mobile Navigation

```
Trigger:      hamburger icon (24px), top-right of header
Menu:         full-width dropdown, bg-base or bg-surface
Link height:   48px per item
Link padding:  16px horizontal
Divider:      1px solid border-subtle between groups
Close:         X icon, top-right
Animation:     slide down or fade, 250ms
```

### Navigation Rules

1. Current page link must have `aria-current="page"`.
2. Mobile menu must trap focus when open.
3. Navigation order must match the page hierarchy in the sitemap.
4. External links open in new tab with `rel="noopener noreferrer"`.

---

## 14. Image Guidelines

### Appearance

```
Style:          Clean, well-lit, professional
Background:     Should complement or match bg-base (#0F172A)
No borders:     Images should blend naturally (unless presented as a mockup)
Color treatment: No filters or heavy color grading (keep natural)
```

### Aspect Ratios

| Context | Ratio | Size (suggested) |
|---------|-------|-----------------|
| Project thumbnail / card | 16:9 | 800 × 450px |
| Blog thumbnail | 16:9 | 1200 × 675px |
| Hero image | 16:9 or 3:2 | 1440 × 810px or 1440 × 960px |
| Profile / avatar | 1:1 | 400 × 400px |
| Certificate | 4:3 or original | 1200 × 900px |
| Screenshot | 16:9 or original | 1920 × 1080px (scaled down) |

### Rounding

```
Card images:    Match card radius on top corners, flat bottom (if image is top)
                Or LG (8px) uniformly for standalone images
Avatars:        Full (circle)
Screenshots:    LG (8px)
Hero images:    XL (12px)
```

### Optimization Rules

1. All images must use Next.js `Image` component with explicit `width` and `height`.
2. Use WebP format with JPEG fallback.
3. Maximum image dimensions: 1920px on the longest side.
4. Compress with 80% quality (or lossless for screenshots with text).
5. Lazy-load all images except the hero LCP image (`priority={true}`).
6. Descriptive `alt` text is required on every image — never leave it empty unless the image is purely decorative (then use `alt=""`).

---

## 15. Animation System

### Philosophy

Animations are subtle, purposeful, and never distracting. Every animation must answer: "What just happened? Where should the user look next?"

### Animation Catalog

#### Fade In

```
When:     Element enters viewport (scrolling)
Duration: 400ms
Easing:   ease-out (cubic-bezier(0.16, 1, 0.3, 1))
Distance: none (opacity only: 0 → 1)
Stagger:  100ms between children in a list
```

#### Slide Up (Fade + Translate)

```
When:     Cards, sections entering viewport
Duration: 500ms
Easing:   ease-out (cubic-bezier(0.16, 1, 0.3, 1))
Distance: translateY(20px) → translateY(0)
Opacity:  0 → 1
Stagger:  100ms between sibling cards
```

#### Page Transition

```
When:     Navigating between routes
Duration: 300ms
Easing:   ease-in-out
Type:     Fade (opacity 1 → 0.5 → 1) or subtle slide
Note:     Keep it fast — the user wants to see the content
```

#### Hover (Interactive Elements)

```
Button hover:
  Duration: 150ms
  Easing:   ease-out
  Change:   background-color, border-color, transform

Card hover:
  Duration: 200ms
  Easing:   ease-out
  Change:   border-color + translateY(-2px)

Link hover:
  Duration: 150ms
  Easing:   ease-out
  Change:   color only
```

#### Focus

```
Duration: 150ms
Easing:   ease-out
Change:   outline / ring appearance (instant or near-instant for accessibility)
```

#### Loading / Skeleton

```
Duration: 1500ms infinite
Easing:   linear
Type:     Shimmer / pulse (opacity oscillation)
```

### When NOT to Animate

1. **Reduce motion**: Respect `prefers-reduced-motion` — disable all animations when detected.
2. **Critical interactions**: Form submissions, navigation clicks, and error states should feel instant or near-instant.
3. **Repeated content**: Don't re-animate content that was already visible (e.g., navigating back).
4. **Decorative overload**: Never animate more than three elements on screen simultaneously.
5. **Large elements**: Avoid animating the page container or large layout blocks — it causes disorientation.

### Easing Reference

```
Default ease-out:  cubic-bezier(0.16, 1, 0.3, 1)   — Linear-inspired, smooth deceleration
Ease-in-out:       cubic-bezier(0.65, 0, 0.35, 1)   — For page transitions
Ease-out (snappy): cubic-bezier(0, 0, 0.2, 1)       — For micro-interactions (hover, focus)
Linear:            cubic-bezier(1, 1, 1, 1)          — Only for continuous animations (spinners)
```

### Framer Motion Implementation Notes

```
- Use `motion.div` only where animation is needed
- Define variants as objects outside the component (no inline variant objects)
- Use `whileInView` for scroll-triggered animations
- Use `initial="hidden" animate="visible"` for enter animations
- Duration and easing should match the values defined above
- Wrap page content in a single `motion.div` for page transitions
```

---

## 16. Responsiveness

### Breakpoint Behavior

#### Desktop (≥1024px)

```
Layout:       Full multi-column grids, side-by-side sections
Container:    Max 1280px, centered
Navigation:   Full horizontal bar, all links visible
Cards:        3–4 columns
Typography:   Display XL for h1, Display MD for h2
Spacing:      4xl (64px) section padding
Images:       Full size
```

#### Laptop (1024–1279px)

```
Layout:       Similar to desktop, slightly tighter
Container:    Max 1280px (still fits)
Navigation:   Full horizontal bar
Cards:        2–3 columns
Typography:   Display LG for h1 (downshift one step)
Spacing:      4xl (64px) section padding
Images:       Full size, slightly smaller
```

#### Tablet (768–1023px)

```
Layout:       2-column grids, stacked sections where appropriate
Container:    Padding 24px on each side
Navigation:   Hamburger menu (links hidden)
Cards:        2 columns
Typography:   Display MD for h1, Heading XL for h2
Spacing:      3xl (48px) section padding
Images:       Medium size
```

#### Mobile (<768px)

```
Layout:       Single column, everything stacked
Container:    Padding 16px on each side
Navigation:   Hamburger menu
Cards:        1 column, full width
Typography:   Heading XL for h1, Heading LG for h2
Spacing:      2xl (40px) section padding
Images:       Full width, constrained by container
Touch targets: Minimum 44px × 44px for all interactive elements
```

### Responsive Rules

1. Design mobile-first — start with the mobile layout, then enhance upward.
2. Never hide important content on mobile — reorganize it vertically.
3. Touch targets must be at least 44px × 44px on touch devices.
4. Horizontal scrolling is never acceptable on any breakpoint.
5. Test every component at 320px width (smallest supported device).

---

## 17. Accessibility

### Contrast

| Combination | Minimum Ratio | Standard |
|-------------|---------------|----------|
| text-base on bg-base | 15.9:1 | ✅ Passes AA, passes AAA |
| text-secondary on bg-base | 11.1:1 | ✅ Passes AA, passes AAA |
| text-muted on bg-base | 7.9:1 | ✅ Passes AA |
| text-base on bg-surface | 14.5:1 | ✅ Passes AA, passes AAA |
| text-secondary on bg-surface | 10.1:1 | ✅ Passes AA, passes AAA |
| accent-base on bg-base | 6.7:1 | ✅ Passes AA |
| accent-hover on bg-base | 4.9:1 | ✅ Passes AA |
| text-inverse on accent-base | 6.7:1 | ✅ Passes AA |

### Focus States

```
All interactive elements:
  Outline:    2px solid accent-base (or accent-ring)
  Offset:     2px from the element
  Radius:     Match the element's border-radius
  Visible:    Must always be visible on focus (never outline: none)
```

### Keyboard Navigation

1. Skip-to-content link must be the first focusable element on every page.
2. Tab order follows visual order (left-to-right, top-to-bottom).
3. All interactive elements (links, buttons, form controls, custom widgets) must be keyboard accessible.
4. Use `aria-expanded` for expandable/collapsible elements.
5. Use `aria-controls` pointing to the controlled element's ID.
6. Use `aria-current="page"` on the active navigation link.
7. Focus must be managed programmatically for modals, mobile menus, and dynamic content.

### Screen Readers

1. All images must have `alt` text (or `alt=""` for decorative images).
2. Form inputs must have associated `<label>` elements (not just placeholders).
3. Icon buttons must have `aria-label` describing the action.
4. Use `aria-hidden="true"` on decorative icons and non-informative elements.
5. Headings must form a logical hierarchy (h1 → h2 → h3, no skipping).
6. Use `role="status"` for live regions that announce dynamic content.
7. Error messages must be associated with their inputs via `aria-describedby`.

### Semantic HTML

```
<header>        → Site header (banner landmark)
<nav>           → Navigation (navigation landmark)
<main>          → Primary content (main landmark)
<section>       → Thematic grouping of content
<article>       → Self-contained content (blog post, project)
<aside>         → Complementary content
<footer>        → Site footer (contentinfo landmark)
<h1>–<h6>       → Headings in hierarchy
<p>             → Paragraphs
<ul>/<ol>       → Lists (never use divs for lists)
<button>        → Actions (never use divs for buttons)
<a>             → Navigation (when href changes URL)
<label>         → Form input labels
```

### Accessibility Rules Summary

1. Skip-to-content is the first focusable element.
2. Every interactive element has a visible focus state.
3. All images have alt text (decorative images use alt="").
4. Color is never the sole indicator of state or importance.
5. All form elements have associated labels.
6. Heading hierarchy is strictly sequential.
7. Touch targets are minimum 44×44px.
8. Motion respects `prefers-reduced-motion`.
