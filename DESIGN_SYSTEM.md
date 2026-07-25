

# recommendations - akkila.dev

## Overview

**Product:** recommendations - akkila.dev
**URL:** https://akkila.dev/recommendations
**Surface type:** blog
**Audience:** General readers
**Brand character:** Content-first editorial layout with a rich, diverse color palette and a complementary two-font typographic system.

### Design Principles

- Readability above all — optimise for sustained reading, not scanning.
- Content is the interface — typography and whitespace do the heavy lifting.
- Minimal chrome — navigation and UI should fade behind the content.

## Colors

| Token | Value | Role |
|-------|-------|------|
| --surface-2 | `#F4F4F0` | Surface |
| --text-faint | `#4A4A4A` | Text Primary |
| --text-dim | `#6B6B6B` | Text Primary |
| --text-dim | `#7A7A7A` | Text Secondary |
| --accent | `#00A85A` | Accent |
| --border-strong | `#D4D2CC` | Border |
| --border | `#E5E3DD` | Border |
| --text-faint | `#B5B5B5` | Text Light |
| --text | `#E5E5E5` | Text Light |
| color-11 | `#FFFFFF` | Background |
| color-1 | `#000000` | Text Primary |

## Typography

**Font stack:** JetBrains Mono, Geist

| Level | Size | Usage |
|-------|------|-------|
| text-xs | 11px | Captions, metadata |
| text-sm | 13px | Labels, secondary text |
| text-base | 15px | Body text (default) |
| text-lg | 17px | Subheadings, emphasis |
| text-xl | 40px | Section headings |
| text-2xl | 72px | Section headings |

**Weight scale:** 300 · 400 · 500 · 600
**Line heights:** 73.44px · 62px · 23.25px · 18.6px · 28.05px · 23.1px · 17.05px · 24.75px · 20.15px · 21.7px · 24px

## Spacing

**Base unit:** 4px

`space-1: 4px` · `space-2: 6px` · `space-3: 8px` · `space-4: 10px` · `space-5: 12px` · `space-6: 14px` · `space-7: 16px` · `space-8: 18px` · `space-9: 20px` · `space-10: 24px` · `space-11: 32px` · `space-12: 36px` · `space-13: 56px` · `space-14: 80px` · `space-15: 88px` · `space-16: 193px`

## Shapes

**Border radius:** `radius-sm: 2.7962e+07px` · `radius-md: 6px` · `radius-lg: 8px` · `radius-xl: 14px`

## Elevation

- **shadow-sm:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 168, 90, 0.3) 0px 0px 12px 0px`

## Motion

- **duration-fast:** `all`
- **duration-fast:** `none`
- **duration-fast:** `border-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), color 0.15s cubic-bezier(0.4, 0, 0.2, 1)`
- **duration-fast:** `color 0.15s cubic-bezier(0.4, 0, 0.2, 1), background 0.15s cubic-bezier(0.4, 0, 0.2, 1)`
- **duration-fast:** `color 0.15s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), outline-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), text-decoration-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), fill 0.15s cubic-bezier(0.4, 0, 0.2, 1), stroke 0.15s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-from 0.15s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-via 0.15s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-to 0.15s cubic-bezier(0.4, 0, 0.2, 1)`
- **duration-fast:** `border-color 0.18s cubic-bezier(0.4, 0, 0.2, 1), background 0.18s cubic-bezier(0.4, 0, 0.2, 1), transform 0.18s cubic-bezier(0.4, 0, 0.2, 1), color 0.18s cubic-bezier(0.4, 0, 0.2, 1)`
- **duration-base:** `opacity 0.25s`
- **duration-slow:** `1.05s steps(2) infinite blink`
- **duration-slow:** `2.4s ease-in-out infinite pulse`

## Components

- **Buttons:** 3 detected
- **Links:** 23 detected
- **Navigation:** 2 elements
- **Images:** 9 detected

## Do's and Don'ts

### Do

- Reference tokens by name, not raw values — agents and developers should use `color.text.primary`, not `#171717`.
- Define all interactive states: default, hover, focus-visible, active, disabled.
- Use the spacing scale for all padding, margin, and gap values.
- Write content in sentence case. Reserve ALL CAPS for acronyms only.
- Test every component at the smallest and largest breakpoint before shipping.

### Don't

- Do not introduce colors outside the extracted palette.
- Do not use arbitrary spacing values — stick to the scale.
- Do not mix border-radius values. Pin to the detected set (2.7962e+07px, 6px, 8px, 14px).
- Do not use full-uppercase text for body or paragraph content.
- Do not nest interactive elements (e.g. buttons inside links).
- Do not ship components without defining hover, focus-visible, and disabled states.

## Writing Tone

Informative, engaging, conversational. First person plural when appropriate.

## Authoring Workflow

When creating or updating a component guideline for this system, follow this sequence:

1. **State the intent** — one sentence on what the component does and why it exists.
2. **Map tokens** — list every color, spacing, typography, and radius token the component uses. No raw values.
3. **Define anatomy** — break the component into named parts (container, label, icon, etc.) with their token assignments.
4. **Specify states** — document every state: default, hover, focus-visible, active, disabled, loading, error, empty.
5. **Describe interactions** — keyboard, pointer, and touch behavior, including edge cases (long content, overflow, truncation).
6. **Add accessibility criteria** — write testable pass/fail checks (e.g. "focus ring must be visible at 3:1 contrast").
7. **List anti-patterns** — concrete examples of misuse with a brief explanation of why each is wrong.
8. **Close with a QA checklist** — a mechanical list of verifiable items (see Definition of Done below).

## Required Output Structure

Every component guideline produced from this system must contain these sections, in order:

1. Overview — purpose, when to use, when not to use.
2. Tokens and foundations — all referenced tokens from the tables above.
3. Anatomy and variants — named parts, variant matrix, responsive behavior.
4. States and interactions — full state table, keyboard/pointer/touch behavior.
5. Accessibility — ARIA attributes, contrast requirements, focus management, screen reader behavior.
6. Content guidelines — copy length, tone, capitalisation, placeholder text rules.
7. Anti-patterns — explicit examples of what not to build, with reasoning.

## Component Requirements

Every component built against this system must:

- Reference only tokens defined in the tables above — no hardcoded hex, px, or font values.
- Define all interactive states: default, hover, focus-visible, active, disabled, loading, error.
- Specify responsive behavior at the smallest and largest supported breakpoint.
- Handle edge cases: empty state, overflow / truncation, maximum content length.
- Include keyboard navigation (Tab, Enter, Escape, Arrow keys where applicable).
- Document ARIA roles, labels, and live-region behavior where relevant.
- Include known page component density: - **Buttons:** 3 detected
- **Links:** 23 detected
- **Navigation:** 2 elements
- **Images:** 9 detected

## Definition of Done

A component is not complete until every item below is checked:

- Renders correctly in its default state (smoke test).
- All states documented and visually verified (hover, focus, disabled, loading, error, empty).
- All visual values use design tokens — zero hardcoded values.
- Keyboard navigation works without a pointer.
- No critical accessibility violations (contrast, ARIA, focus order).
- Tested at smallest and largest breakpoint.
- Anti-patterns section lists at least one concrete misuse example.
- Documentation covers purpose, usage, props/API, and limitations.
