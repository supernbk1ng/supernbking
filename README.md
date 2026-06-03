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
| Content | TypeScript mock data (`src/data/`) + MDX (`src/content/blog/`) |
| Deploy | Vercel (static, no database or env vars) |

### Features

- Pixel art hero landing with brand ink-blue grid and Framer Motion animations
- 3D rotating project carousel with gradient cards
- Blog: category filter + client-side search + MDX authoring support
- Resources: category filter + client-side search
- Dark/light theme toggle with localStorage persistence
- Reading progress bar, back-to-top, table of contents
- Custom 404 page with brand styling
- Mobile hamburger menu with slide-in panel
- Full SEO: Open Graph, Twitter Card, sitemap, robots.txt, JSON-LD
- All pages responsive (mobile/tablet/desktop)

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
- **Mobile nav** — Hamburger menu with slide-in panel, Framer Motion animated
- **Theme toggle** — Dark/light mode with localStorage persistence + system preference detection
- **Reading experience** — Reading progress bar, back-to-top button, table of contents
- **MDX support** — Blog posts can now be authored as `.mdx` files alongside existing `posts.ts` data
- **Cover images** — Blog posts and projects support optional `coverImage` field
- **README** — Post-deployment smoke checklist (26 items across pages, SEO, features, responsive, cross-browser)

## Content Management

### Adding a Blog Post (MDX — recommended)

**Quick start:** `npm run new-post -- "My Post Title" [slug]`

Or manually:
1. Create a new `.mdx` file in `src/content/blog/`:
   ```
   src/content/blog/my-new-post.mdx
   ```

2. Add frontmatter at the top:
   ```yaml
   ---
   title: "My Post Title"
   date: "2026-05-01"
   category: "编程开发"
   tags:
     - React
     - TypeScript
   excerpt: "A short description shown in the blog list."
   readingTime: 8
   coverImage: "/blog/my-cover.jpg"
   ---
   ```

3. Write the post body in Markdown below the `---` line.

4. Rebuild: `npm run build`. The post is auto-discovered — no import registration needed.

### Adding a Blog Post (TypeScript — legacy)

Add an entry to `src/data/posts.ts` in the `mockPosts` array:

```ts
{
  slug: "my-slug",
  title: "My Post Title",
  date: "2026-05-01",
  category: "编程开发",
  tags: ["React", "TypeScript"],
  excerpt: "A short description.",
  readingTime: 8,
  coverImage: "/blog/my-cover.jpg", // optional
  sections: [
    {
      heading: "Section One",
      body: "Paragraph text here.\n\nAnother paragraph."
    }
  ]
}
```

### Adding a Resource

Add an entry to `src/data/resources.ts` in the `mockResources` array:

```ts
{
  name: "Resource Name",
  description: "A brief description of what this resource offers.",
  category: "开发工具",
  tags: ["tag1", "tag2"],
  url: "https://example.com/"
}
```

### Adding a Project

Add an entry to `src/data/projects.ts` in the `mockProjects` array:

```ts
{
  slug: "project-slug",
  title: "Project Title",
  subtitle: "One-line description",
  year: "2026",
  category: "Web App",
  summary: "Detailed project description.",
  stack: ["Next.js", "TypeScript", "Tailwind"],
  gradient: "linear-gradient(135deg, #hex1 0%, #hex2 48%, #hex3 100%)",
  accent: "#hexAccent",
  coverImage: "/projects/my-cover.jpg" // optional
}
```

### Adding Cover Images

- **Blog covers**: Place images in `public/blog/`, reference as `/blog/filename.jpg`
- **Project covers**: Place images in `public/projects/`, reference as `/projects/filename.jpg`
- **Format**: WebP or AVIF preferred, JPG/PNG acceptable. Keep under 200KB.
- **Aspect ratio**: 16:9 or 2:1 works well for blog cards. Square or 4:3 for projects.
- **Fallback**: If `coverImage` is missing or empty, no image is rendered — no error.

### MDX Migration Path

Current state:
- `src/data/posts.ts` (`mockPosts`) — 8 hardcoded blog posts with structured `sections`
- `src/content/blog/` — 1 example `.mdx` post (more can be added incrementally)
- Both sources are merged and displayed together in `/blog`

To migrate an existing post from TypeScript to MDX:

1. Create the `.mdx` file with frontmatter matching the original post's metadata
2. Rewrite the `sections` array as Markdown headings and paragraphs
3. Remove the post from `mockPosts` in `src/data/posts.ts`

Future enhancements (not yet implemented):
- **Code syntax highlighting**: Install `rehype-highlight` or `prism-react-renderer`, update `src/mdx-components.tsx`
- **Math formulas**: Install `remark-math` + `rehype-katex`, add KaTeX stylesheet to layout
- **Full MDX migration**: Move all posts to `.mdx`, deprecate `mockPosts`

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
