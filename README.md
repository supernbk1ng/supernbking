# supernbking_blog

Next.js App Router personal blog and portfolio for Vercel — a CS student's
homepage featuring project showcases, course notes, dev blog, and curated
learning resources.

## Project Overview

| Area | Detail |
|------|--------|
| Framework | Next.js 16.2.4 (App Router) |
| Language | TypeScript 5.9 |
| Styling | Tailwind CSS 3.4 |
| Animation | Framer Motion 12 |
| Content | Local TypeScript mock data (`src/data/`) |
| Deploy | Vercel (static, no database or env vars) |

### Pages

| Route | Description |
|-------|-------------|
| `/` | Hero landing with pixel art decor, dark pill navigation, brand ink-blue grid |
| `/blog` | Blog list with category filter + client-side search |
| `/blog/[slug]` | Blog detail with sections, tags, reading time |
| `/projects` | 3D rotating project carousel |
| `/projects/[slug]` | Project detail with stack tags |
| `/resources` | Curated resource grid with category filter + client-side search |
| `/about` | Student profile, skills, interests, timeline, contact links |
| 404 | Custom brand-styled not-found page |

### SEO

- Open Graph & Twitter Card metadata
- Dynamic `/sitemap.xml` (all static routes + blog/project detail pages)
- `/robots.txt`
- JSON-LD `WebSite` schema on every page

## Latest Changes (2026-04-30)

- **404 page** — Custom `not-found.tsx` with brand visuals and return links
- **SEO** — Full metadata, Open Graph, Twitter Card, sitemap, robots, JSON-LD
- **Search** — Client-side keyword search on Blog and Resources (combined with category filter)
- **README** — Post-deployment smoke checklist (26 items across pages, SEO, features, responsive, cross-browser)

## Local Commands

```bash
npm install
npm run dev
npm run lint
npm run build
```

## Vercel Deployment

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Keep the default framework preset as `Next.js`.
4. Build command: `npm run build`.
5. Install command: `npm install`.
6. No environment variables are required for this static mock-data version.

The current implementation uses local TypeScript mock data under `src/data` and does not require a database, server process, or custom Node.js file-system logic.

## Post-Deployment Smoke Checklist

After each deploy to Vercel Preview and Production, verify the following:

### Core Pages

| # | Path | Check |
|---|------|-------|
| 1 | `/` | Hero loads, pixel decor visible, navigation pill present, "View Works" link works |
| 2 | `/blog` | Blog list renders, category filter works, search input present and functional |
| 3 | `/blog/[slug]` | Any blog detail page opens, title/date/tags/sections render correctly |
| 4 | `/projects` | 3D carousel renders, project cards visible and interactive |
| 5 | `/projects/[slug]` | Any project detail page opens, stack tags and summary render |
| 6 | `/resources` | Resource grid renders, category filter works, search input present and functional |
| 7 | `/about` | About content loads, skills/interests/timeline sections visible, contact links correct |

### Error & Utility Pages

| # | Path | Check |
|---|------|-------|
| 8 | `/not-exist-test` | 404 page renders with brand styling, "Back to Home" / "Read Blog" / "View Works" links present |

### SEO & Technical

| # | Item | Check |
|---|------|-------|
| 9 | `meta` tags | Each page has `<title>` and `<meta name="description">` in the `<head>` |
| 10 | Open Graph | `<meta property="og:title">` and related tags present on `/` |
| 11 | Twitter Card | `<meta name="twitter:card" content="summary_large_image">` present on `/` |
| 12 | JSON-LD | `<script type="application/ld+json">` present on `/` |
| 13 | `/sitemap.xml` | Accessible, lists all static routes including blog and project detail pages |
| 14 | `/robots.txt` | Accessible, references the sitemap URL |

### Feature Verification

| # | Feature | Check |
|---|---------|-------|
| 15 | Blog search | Type a keyword in the blog search box, results filter in real time |
| 16 | Blog search + category | Select a category AND type a search keyword, both filters apply together |
| 17 | Blog search empty | Type a nonsense query, "No posts match your search." message appears |
| 18 | Resource search | Type a keyword in the resource search box, results filter in real time |
| 19 | Resource search + category | Select a category AND type a search keyword, both filters apply together |
| 20 | Resource search empty | Type a nonsense query, "No resources match your search." message appears |

### Responsive

| # | Viewport | Check |
|---|----------|-------|
| 21 | Mobile (375px) | All pages readable, no horizontal overflow, nav links accessible |
| 22 | Tablet (768px) | Layout intact, search and filters work |
| 23 | Desktop (1440px) | Full layout, all animations smooth |

### Cross-Browser

| # | Browser | Check |
|---|---------|-------|
| 24 | Chrome | All pages render correctly |
| 25 | Firefox | All pages render correctly |
| 26 | Safari | All pages render correctly |
