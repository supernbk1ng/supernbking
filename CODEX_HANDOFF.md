# Codex Handoff: supernbking 个人博客 / 作品集

更新时间：2026-05-29
当前状态：核心功能完整，已添加语法高亮、RSS、标签导航、文章导航、项目详情增强、图片资产、分析统计、文档同步。
仓库：`https://github.com/supernbk1ng/supernbking.git`
默认分支：`master`

## 1. 项目定位

这是一个面向 Vercel 部署的个人博客主页与作品集网站，定位为 CS 大三学生的个人展示、学习记录、项目归档和资源收藏入口。

当前版本是纯静态架构：

- 不使用数据库
- 不使用 CMS
- 不依赖环境变量
- 不需要额外后端服务器
- 所有内容来自 `src/data` 中的本地 mock 数据
- 所有路由使用 Next.js App Router
- 动画使用 Framer Motion 与 CSS transform

## 2. 技术栈

| 类型 | 技术 / 版本 | 说明 |
| --- | --- | --- |
| Framework | Next.js `16.2.4` | App Router，Vercel 友好 |
| UI | React `19.2.5` | 函数组件 |
| Language | TypeScript `5.9.3` | 严格类型 |
| Styling | Tailwind CSS `3.4.19` | 全局设计系统与响应式 |
| Animation | Framer Motion `12.38.0` | 首页与内容卡片动效 |
| Lint | ESLint `9.39.4` + `eslint-config-next` | `npm run lint` |
| Deploy | Vercel | `vercel.json` 已配置 |

## 3. 当前已实现页面

| 路由 | 状态 | 说明 |
| --- | --- | --- |
| `/` | 完成 | 深蓝网格 Hero、大号艺术字体、像素装饰、精修导航与底部状态 |
| `/projects` | 完成 | 项目列表页，浅灰背景，3D 横向旋转项目卡片 |
| `/projects/[slug]` | 完成 | 项目详情页，使用 `generateStaticParams` 静态生成 |
| `/blog` | 完成 | 博客列表页，本地 mock 数据，分类筛选 |
| `/blog/[slug]` | 完成 | 博客详情页，静态生成 |
| `/resources` | 完成 | 资源分享页，本地 mock 数据，分类筛选 |
| `/about` | 完成 | 关于页，个人介绍、技能、兴趣、时间线、联系方式 |

## 4. 本轮最新变更：全站功能增强

### 新增功能

- **代码语法高亮**：MDX 代码块集成 `rehype-highlight`，支持 GitHub 风格明暗主题。
- **RSS 订阅源**：新增 `/feed.xml` Route Handler，自动生成 RSS 2.0 XML。
- **标签可点击**：博客和资源页标签改为链接，点击跳转至 `?tag=X` 筛选视图。
- **文章间导航**：博客详情页底部显示上一篇/下一篇链接。
- **项目详情页增强**：扩展 Project 类型，支持描述正文、GitHub 链接、Demo 链接、截图图库。
- **图片资产**：为所有博客文章和项目生成 SVG 封面图，新增 OG 社交分享图。
- **分析统计**：集成 `@vercel/analytics`，生产环境自动采集页面访问。
- **文档同步**：更新 CODEX_HANDOFF.md 反映实际实现状态。

### 修改文件

- `next.config.mjs` — 添加 rehype-highlight 插件
- `package.json` — 新增 rehype-highlight、@vercel/analytics
- `src/app/globals.css` — 添加 highlight.js 深/浅色代码主题
- `src/mdx-components.tsx` — 代码块适配 rehype-highlight 输出
- `src/app/layout.tsx` — RSS link、Analytics 组件、OG 图片格式修正
- `src/app/feed.xml/route.ts` — 新增 RSS 路由
- `src/app/sitemap.ts` — 添加 feed.xml 条目
- `src/app/blog/page.tsx` — 支持 `?tag=` 查询参数
- `src/app/blog/blog-list.tsx` — 支持 initialTag 属性与标签筛选状态
- `src/app/blog/[slug]/page.tsx` — 标签链接、上一篇/下一篇导航
- `src/components/blog-card.tsx` — 标签改为可点击链接
- `src/app/resources/page.tsx` — 支持 `?tag=` 查询参数
- `src/app/resources/resource-grid.tsx` — 支持 initialTag 属性
- `src/components/resource-card.tsx` — 标签改为可点击链接
- `src/app/projects/[slug]/page.tsx` — 描述正文、GitHub/Demo 按钮、截图图库
- `src/data/posts.ts` — 添加 getAdjacentPosts()、所有文章封面图
- `src/data/projects.ts` — 扩展 Project 类型、3 个项目增加描述和链接
- `public/blog/*.svg` — 9 篇博客封面图
- `public/projects/*.svg` — 6 个项目封面图
- `public/og-image.svg` — 新增 OG 社交分享图
- `CODEX_HANDOFF.md` — 本文档

## 5. 项目目录结构

```txt
.
├── CODEX_HANDOFF.md
├── README.md
├── package.json
├── package-lock.json
├── next.config.mjs
├── vercel.json
├── tailwind.config.ts
├── postcss.config.js
├── eslint.config.mjs
├── tsconfig.json
├── next-env.d.ts
├── public/
│   ├── og-image.svg
│   ├── blog/
│   │   └── *.svg              # 博客封面图 (9 篇)
│   └── projects/
│       └── *.svg              # 项目封面图 (6 个)
└── src/
    ├── app/
    │   ├── layout.tsx
    │   ├── page.tsx
    │   ├── globals.css
    │   ├── not-found.tsx
    │   ├── robots.ts
    │   ├── sitemap.ts
    │   ├── about/
    │   │   ├── page.tsx
    │   │   └── about-content.tsx
    │   ├── blog/
    │   │   ├── page.tsx
    │   │   ├── blog-list.tsx
    │   │   └── [slug]/page.tsx
    │   ├── feed.xml/
    │   │   └── route.ts        # RSS 2.0 路由
    │   ├── projects/
    │   │   ├── page.tsx
    │   │   └── [slug]/page.tsx
    │   └── resources/
    │       ├── page.tsx
    │       └── resource-grid.tsx
    ├── components/
    │   ├── back-to-top.tsx
    │   ├── hero-section.tsx
    │   ├── site-header.tsx
    │   ├── pixel-decor.tsx
    │   ├── project-carousel.tsx
    │   ├── project-card.tsx
    │   ├── blog-card.tsx
    │   ├── resource-card.tsx
    │   ├── reading-progress.tsx
    │   ├── table-of-contents.tsx
    │   ├── theme-provider.tsx
    │   ├── theme-toggle.tsx
    │   ├── timeline.tsx
    │   └── placeholder-page.tsx
    ├── content/
    │   └── blog/
    │       └── getting-started-with-react.mdx
    ├── data/
    │   ├── projects.ts
    │   ├── posts.ts
    │   └── resources.ts
    ├── lib/
    │   ├── mdx.ts
    │   └── utils.ts
    └── mdx-components.tsx
```

## 6. 关键组件说明

### `HeroSection`

位置：`src/components/hero-section.tsx`

首页唯一主视觉组件。当前包含：

- 深蓝网格背景容器 `.home-grid`
- 首页专用深色导航 `SiteHeader variant="dark"`
- 多层像素花 / 像素星装饰
- 身份文字 `Creative Developer / CS Student`
- 超大艺术标题 `supernbking`
- tagline
- 底部状态信息与 `View Works` 链接

后续优化首页时优先改这里，避免影响内容页。

### `SiteHeader`

位置：`src/components/site-header.tsx`

全站导航组件，使用 `usePathname()` 判断 active 状态。

- `variant="dark"`：仅首页使用，半透明 pill 导航
- `variant="light"`：内容页使用，保持原有浅色文字导航

注意：不要把首页 pill 样式泄漏到内容页。

### `PixelDecor`

位置：`src/components/pixel-decor.tsx`

使用 span 拼装像素花和像素星，不依赖图片资源。样式在 `globals.css` 中。

### `ProjectCarousel`

位置：`src/components/project-carousel.tsx`

项目页 3D 横向旋转卡片，使用 CSS 3D transform 和 Framer Motion，不使用 Three.js。

## 7. 数据结构

所有内容数据集中放在 `src/data`。

### `projects.ts`

导出：

- `Project`
- `mockProjects`
- `getProjectBySlug()`

用途：

- `/projects`
- `/projects/[slug]`

### `posts.ts`

导出：

- `BlogPost`
- `BlogSection`
- `BlogCategory`
- `mockPosts`
- `blogCategories`
- `getPostBySlug()`
- `getPostsByCategory()`
- `getRecentPosts()`

用途：

- `/blog`
- `/blog/[slug]`

### `resources.ts`

导出：

- `Resource`
- `ResourceCategory`
- `mockResources`
- `resourceCategories`
- `getResourcesByCategory()`

用途：

- `/resources`

## 8. 设计系统现状

### 颜色

| Token | 值 | 用途 |
| --- | --- | --- |
| `ink-blue` | `#0754d8` | 首页主背景、品牌主色、内容页强调色 |
| `ink-blue-deep` | `#03358d` | 深蓝备用 |
| `paper` | `#eef0f2` | 内容页浅灰背景 |
| `graphite` | `#15171d` | 正文与主要文字 |
| `soft-line` | `rgba(255,255,255,0.12)` | 深色背景分割线 |

### 字体

| Token | 字体栈 | 用途 |
| --- | --- | --- |
| `sans` | Inter / system-ui / sans-serif | 正文 |
| `mono` | SFMono / Consolas / monospace | 导航、标签、状态信息 |
| `display` | Georgia / Cambria / serif | 大标题，italic 风格 |

### 重要 CSS 类

| 类名 | 文件 | 说明 |
| --- | --- | --- |
| `.home-grid` | `globals.css` | 首页深蓝网格、光晕、暗角 |
| `.hero-title-glow` | `globals.css` | 首页标题克制 glow |
| `.page-header-grid` | `globals.css` | 内容页顶部淡网格 |
| `.pixel-flower` | `globals.css` | 像素花 |
| `.pixel-spark` | `globals.css` | 像素星 |
| `.float-slow` / `.float-soft` / `.float-delay` | `globals.css` | 首页装饰轻微浮动 |
| `.project-stage` / `.project-orbit` / `.project-slot` | `globals.css` | 项目页 3D 轮播 |

## 9. Vercel 部署配置

`vercel.json`：

```json
{
  "installCommand": "npm install",
  "buildCommand": "npm run build",
  "framework": "nextjs"
}
```

Vercel Dashboard 推荐配置：

- Framework Preset: `Next.js`
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: 留空
- Environment Variables: 不需要

## 10. 常用命令

```bash
npm install
npm run dev
npm run lint
npm run build
```

## 11. 本次质量验证

本次提交前已运行：

```bash
npm run lint
npm run build
```

结果：

- Lint: PASS
- Build: PASS
- Next.js 静态生成：PASS
- 已生成静态路由：`/`、`/about`、`/blog`、`/blog/[slug]`、`/projects`、`/projects/[slug]`、`/resources`

补充说明：

- 本项目没有 test script，当前质量门禁以 lint + production build 为主。
- 不要运行 `npm audit fix --force`，它可能建议破坏性降级 Next.js。

## 12. 开发约束

后续 AI 或开发者继续迭代时请遵守：

1. 不要降级 Next.js。
2. 不要引入数据库、CMS、额外服务器或必须配置环境变量的功能。
3. 不要引入大型 3D 模型或重依赖。
4. 首页可以继续精修，但不要破坏 Blog、Projects、Resources、About 现有逻辑。
5. 内容页延续 `paper` 背景与 `ink-blue` 品牌色。
6. 所有外部链接使用 `target="_blank"` 时必须加 `rel="noopener noreferrer"`。
7. 修改后必须运行 `npm run lint` 和 `npm run build`。
8. 不提交 `node_modules`、`.next`、截图、临时日志。
9. 保持组件小型，不要把多个页面逻辑堆进一个巨大文件。

## 13. 后续迭代建议

已完成（前次建议中已实现）：

1. ~~自定义 404 页面~~ → 已实现 `src/app/not-found.tsx`
2. ~~SEO 增强~~ → 已实现 OG/Twitter Card、sitemap、JSON-LD
3. ~~搜索功能~~ → 已实现客户端文本搜索
4. ~~移动端导航~~ → 已实现汉堡菜单 + 动画面板
5. ~~明暗交替~~ → 已实现 ThemeToggle + localStorage 持久化
6. ~~阅读体验~~ → 已实现目录、阅读进度、返回顶部
7. ~~图片资产~~ → 已添加 SVG 封面图
8. ~~MDX 迁移（启动）~~ → 已创建 1 篇 MDX、自定义组件、mdx.ts 加载器
9. ~~代码语法高亮~~ → 已集成 rehype-highlight
10. ~~RSS feed~~ → 已实现 /feed.xml
11. ~~标签可点击~~ → 已实现 ?tag=X 参数筛选
12. ~~文章导航~~ → 已实现上一篇/下一篇
13. ~~项目详情增强~~ → 已实现描述正文、链接、截图
14. ~~分析统计~~ → 已集成 Vercel Analytics

待推进事项（优先级从高到低）：

1. **博客内容 MDX 全量迁移**：将 posts.ts 中剩余 8 篇文章的 sections 迁移为独立 .mdx 文件。
2. **自动 MDX 发现**：替换 `src/lib/mdx.ts` 中手动注册表为 build-time glob 自动发现。
3. **数学公式支持**：MDX 集成 KaTeX 或 MathJax（AI/ML 文章需要）。
4. **标签聚合页**：`/blog/tags` 和 `/resources/tags` 展示所有标签及其文章数。
5. **评论区**：集成 Giscus 或 Disqus（可选，个人博客不一定需要）。
6. **图片优化**：将 SVG 封面图替换为实际截图和设计稿。
7. **测试**：添加基本的 E2E 测试（Playwright）。
8. **资源和文章真实内容替换**：继续扩充 `src/data/posts.ts` 和 `src/data/resources.ts`。

## 14. 快速接手入口

如果下一位 AI 继续开发，建议按这个顺序阅读：

1. `package.json`
2. `src/app/layout.tsx`
3. `src/app/globals.css`
4. `next.config.mjs`
5. `src/mdx-components.tsx`
6. `src/lib/mdx.ts`
7. `src/components/site-header.tsx`
8. `src/components/hero-section.tsx`
9. `src/data/projects.ts`
10. `src/data/posts.ts`
11. `src/data/resources.ts`
12. 对应要修改的页面目录

当前最值得继续投入的方向是：MDX 全量迁移、数学公式支持、自动 MDX 发现、标签聚合页。
