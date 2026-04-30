# Codex Handoff: supernbking 个人博客 / 作品集

更新时间：2026-04-30
当前状态：完整静态站点已完成，首页 Hero 已完成视觉精修，可继续做内容、SEO、MDX、搜索等迭代。
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

## 4. 本轮最新变更：首页 Hero 视觉精修

本轮只优化首页 `/`，没有改动 Blog、Projects、Resources、About 的功能逻辑。

### 修改文件

- `src/components/hero-section.tsx`
- `src/components/site-header.tsx`
- `src/app/globals.css`
- `CODEX_HANDOFF.md`

### 视觉变化

- 背景网格透明度降低，避免抢走标题焦点。
- 首页背景增加轻微 radial gradient 光晕，中心区域更亮。
- 页面边缘增加克制暗角，整体更有空间感。
- 主标题 `supernbking` 调整字号、行高与移动端尺寸。
- 主标题增加非常轻的 text-shadow / glow。
- 新增 tagline：`Building projects, notes and resources with care.`
- 首页深色导航改成半透明 pill + backdrop blur。
- `MAIL` 保持右上角独立链接，但视觉语言与导航一致。
- 底部信息调整为三段：
  - `AVAILABLE FOR / INTERNSHIPS · SPRING 2026`
  - `VIEW WORKS →`
  - `BASED IN / ZJU CAMPUS`
- 像素花与像素星重新分层：大小、透明度、位置不再等权。
- 部分像素装饰加入轻微 floating animation。
- 修复 `.pixel-flower` / `.pixel-spark` 的全局 `display: block` 覆盖 Tailwind `hidden` 的问题。
- 首页 body 背景增加蓝色兜底，避免 headless 或特殊 viewport 下出现白边。

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
│   └── projects/
└── src/
    ├── app/
    │   ├── layout.tsx
    │   ├── page.tsx
    │   ├── globals.css
    │   ├── about/
    │   │   ├── page.tsx
    │   │   └── about-content.tsx
    │   ├── blog/
    │   │   ├── page.tsx
    │   │   ├── blog-list.tsx
    │   │   └── [slug]/page.tsx
    │   ├── projects/
    │   │   ├── page.tsx
    │   │   └── [slug]/page.tsx
    │   └── resources/
    │       ├── page.tsx
    │       └── resource-grid.tsx
    ├── components/
    │   ├── hero-section.tsx
    │   ├── site-header.tsx
    │   ├── pixel-decor.tsx
    │   ├── project-carousel.tsx
    │   ├── project-card.tsx
    │   ├── blog-card.tsx
    │   ├── resource-card.tsx
    │   ├── timeline.tsx
    │   └── placeholder-page.tsx
    ├── data/
    │   ├── projects.ts
    │   ├── posts.ts
    │   └── resources.ts
    └── lib/
        └── utils.ts
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

优先级从高到低：

1. **自定义 404 页面**：新增 `src/app/not-found.tsx`，保持品牌视觉。
2. **SEO 增强**：Open Graph、Twitter Card、站点 sitemap、JSON-LD。
3. **MDX 迁移**：把 `posts.ts` 的 mock 内容迁移到 `.mdx`，支持代码块和数学公式。
4. **搜索功能**：博客和资源页加入轻量客户端搜索，例如 Fuse.js。
5. **移动端导航**：首页当前隐藏 pill nav，后续可做轻量菜单。
6. **明暗交替**：增加一个亮暗更替按键，用户点击后就可以将主题修改为夜间/白天模式
7.  **阅读体验**：博客详情页加入目录、阅读进度、返回顶部。
8.  **部署后检查**：Vercel Preview 与 Production 都需要打开 `/`、`/blog`、`/projects`、`/resources`、`/about` 做冒烟检查。
9. **资源和文章真实内容替换**：继续扩充 `src/data/posts.ts` 和 `src/data/resources.ts`。
10. **图片资产**：为项目和博客添加 `public/` 下的封面图。

## 14. 快速接手入口

如果下一位 AI 继续开发，建议按这个顺序阅读：

1. `package.json`
2. `src/app/layout.tsx`
3. `src/app/globals.css`
4. `src/components/site-header.tsx`
5. `src/components/hero-section.tsx`
6. `src/data/projects.ts`
7. `src/data/posts.ts`
8. `src/data/resources.ts`
9. 对应要修改的页面目录

当前最值得继续投入的方向是：SEO、MDX、搜索、404、移动端导航。
