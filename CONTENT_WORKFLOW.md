# Content Workflow

This document describes how to manage all content in this portfolio **without editing React components**.

---

## Folder Structure

```
public/
├── images/
│   ├── profile/
│   │   └── your-photo.webp          ← Profile picture
│   ├── banner/
│   │   └── your-banner.webp         ← Hero banner image
│   ├── projects/
│   │   ├── <slug>/                  ← One folder per project
│   │   │   ├── thumbnail.webp       ← Card thumbnail (1200×675)
│   │   │   ├── hero.webp            ← Detail page hero (1600×900)
│   │   │   ├── gallery-1.webp       ← Gallery image 1 (1200×675)
│   │   │   ├── gallery-2.webp       ← Gallery image 2 (1200×675)
│   │   │   └── gallery-3.webp       ← Gallery image 3 (1200×675)
│   │   ├── another-project/
│   │   │   └── ...
│   └── gallery/
│       └── ...                       ← General gallery images
└── resume/
    └── resume.pdf                   ← Resume file
```

---

## Image Requirements

| Image | Recommended Size | Format | Required |
|-------|----------------|--------|----------|
| Profile photo | 400×400 | webp / jpg / png | Yes |
| Hero banner | 1584×396 | webp / jpg | No |
| Project thumbnail | 1200×675 (16:9) | webp | No |
| Project hero | 1600×900 (16:9) | webp | No |
| Gallery images | 1200×675 (16:9) | webp | No |

**Use `.webp` for best performance.** JPEG and PNG also work.

---

## 1. How to Replace the Profile Picture

**Step 1:** Place the image at `public/images/profile/`.

**Step 2:** Open `src/data/hero.ts` and update `professionalPhoto`:

```ts
professionalPhoto: {
  src: "/images/profile/your-photo.webp",
  alt: "Professional portrait of Your Name",
  width: 400,
  height: 400,
}
```

If using an external URL, add the hostname to `next.config.ts` → `remotePatterns`.

---

## 2. How to Replace the Banner

**Step 1:** Place the image at `public/images/banner/`.

**Step 2:** The `HeroBanner` component renders code-based decorative elements (not a raster image). If you want to use a raster banner instead, update the `HeroBanner.tsx` component's `BackgroundLayers` to use an `<Image>` tag referencing your file at `/images/banner/your-banner.webp`.

---

## 3. How to Replace the Resume

**Step 1:** Place `resume.pdf` at `public/resume/resume.pdf`.

**Step 2:** Open `src/data/resume.ts` and set:

```ts
available: true,    // enables the download button
lastUpdated: "2026-07",
file: {
  url: "/resume/resume.pdf",
  format: "pdf",
}
```

The download button appears in the header, mobile nav, hero section, and resume page.

---

## 4. How to Replace Project Thumbnails

**Step 1:** Navigate to `public/images/projects/<slug>/` (create if missing).

**Step 2:** Place `thumbnail.webp` (1200×675).

**Step 3:** If the file is missing, the card fallback shows a gradient placeholder automatically.

---

## 5. How to Replace Gallery Images

**Step 1:** Navigate to `public/images/projects/<slug>/`.

**Step 2:** Place `gallery-1.webp`, `gallery-2.webp`, `gallery-3.webp`.

**Step 3:** If files are missing, the gallery section shows dashed placeholder boxes.

---

## 6. How to Add a Brand-New Project

I will ask you for:

```
✔ Project title
✔ Short description (one line)
✔ Long description (paragraph)
✔ Technology stack (comma-separated)
✔ GitHub link (optional)
✔ Live demo link (optional)
✔ Challenges (bullet points)
✔ Key features (bullet points)
✔ Future improvements (bullet points)
✔ Thumbnail image (1200×675 webp)
✔ Hero image (1600×900 webp)
✔ Gallery images (up to 3, 1200×675 webp)
```

**After you provide all of the above**, I will:

1. Create `public/images/projects/<slug>/` folder
2. Place the images
3. Add the project entry to `src/data/projects.ts`
4. The project will appear on the projects page, detail page, and (if `featured: true`) the homepage

---

## 7. Image Validation Workflow

When you say **"I added the project images"**, I will check:

```
public/images/projects/<slug>/
  thumbnail.webp    → required
  hero.webp         → optional (fallback to placeholder)
  gallery-1.webp    → optional (fallback to placeholder)
  gallery-2.webp    → optional
  gallery-3.webp    → optional
```

If any required images are missing, I will report:

```
Missing:
  thumbnail.webp
  gallery-1.webp
```

---

## 8. Smart Update Commands

| You Say | I Do |
|---------|------|
| "I added my profile picture" | Update `src/data/hero.ts` `professionalPhoto.src` |
| "I updated my resume" | Update `src/data/resume.ts` `available`, `lastUpdated` |
| "I changed my banner" | Update image reference in component or config |
| "I added my project" | Collect all info → create folder → update `projects.ts` |
| "I want to remove project X" | Remove entry from `projects.ts`, keep folder in case needed |
| "I updated my skills" | Update `src/data/skills.ts` |
| "I updated my social links" | Update `src/config/social.ts` |
| "I changed my name/title" | Update `src/data/hero.ts` + `src/data/brand.ts` |

---

## Data Files Quick Reference

| File | Edits You Can Make |
|------|-------------------|
| `src/data/hero.ts` | Name, title, intro, photo, CTA buttons, availability |
| `src/data/brand.ts` | Brand name, short name, initial letter, tagline |
| `src/data/about.ts` | Biography paragraphs, journey, goals, interests |
| `src/data/skills.ts` | All skill categories and individual skills |
| `src/data/projects.ts` | All project data including image paths |
| `src/data/education.ts` | School entries, degrees, CGPA, achievements |
| `src/data/experience.ts` | Work experience entries |
| `src/data/contact.ts` | Email, social URLs, location, response time |
| `src/data/resume.ts` | Resume file URL, availability toggle |
| `src/data/homepage.ts` | Philosophy cards, "Why Me" cards, learning focus |
| `src/config/social.ts` | Social platform links and labels |
| `src/config/navigation.ts` | Nav menu structure and links |
| `src/config/seo.ts` | SEO title, description, keywords, OG |
| `src/config/footer.ts` | Copyright text, visibility toggles |
| `src/config/site.ts` | Site name, description, canonical URL |

No React component files need to be edited for any of the above changes.
