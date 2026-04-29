# Codex 交付文档：supernbking 个人博客 / 作品集

## 项目概要

| 项目 | 详情 |
|------|------|
| 项目名 | supernbking-blog |
| 定位 | CS 大三学生个人主页，部署于 Vercel |
| 当前阶段 | 第三阶段完成（品牌色统一 + 字体放大 + 联系方式更新） |
| 开发工具 | Claude Code (Opus 4.7) |
| GitHub | `https://github.com/supernbk1ng/supernbking.git` |
| 分支 | `master` |
| 最新提交 | `8d30317` |

## 技术栈

| 依赖 | 版本 | 用途 |
|------|------|------|
| next | 16.2.4 | 框架（App Router） |
| react / react-dom | 19.2.5 | UI 库 |
| typescript | 5.9.3 | 类型系统 |
| tailwindcss | 3.4.19 | 样式 |
| framer-motion | 12.38.0 | 动画 |
| eslint-config-next | 16.2.4 | 代码规范 |

**无数据库、无 CMS、无环境变量。** 纯静态站点，Vercel 免费部署。

## 目录结构

```
.
├── package.json
├── package-lock.json
├── next.config.mjs            # reactStrictMode: true
├── tailwind.config.ts         # 自定义颜色/字体/阴影
├── tsconfig.json              # @/* → ./src/*
├── eslint.config.mjs
├── vercel.json                # Next.js framework preset
├── .gitignore                 # node_modules, .next, .env
├── CODEX_HANDOFF.md           # 本文档
├── src/
│   ├── app/
│   │   ├── layout.tsx            # 根布局，metadata，<html lang="zh-CN">
│   │   ├── globals.css           # 全局样式 + page-header-grid + 3D carousel + 像素装饰
│   │   ├── page.tsx              # 首页 → HeroSection
│   │   ├── projects/
│   │   │   ├── page.tsx          # 项目列表（page-header-grid + ink-blue 标题 + 3D 轮播）
│   │   │   └── [slug]/page.tsx   # 项目详情 SSG（返回链接 + ink-blue 标题/标签）
│   │   ├── blog/
│   │   │   ├── page.tsx          # 博客列表（page-header-grid + ink-blue 标题）
│   │   │   ├── blog-list.tsx     # 客户端筛选（ink-blue active 按钮）
│   │   │   └── [slug]/page.tsx   # 博客详情 SSG（返回链接 + ink-blue 标签）
│   │   ├── resources/
│   │   │   ├── page.tsx          # 资源列表（page-header-grid + ink-blue 标题）
│   │   │   └── resource-grid.tsx # 客户端筛选（ink-blue active 按钮）
│   │   └── about/
│   │       ├── page.tsx          # About（page-header-grid + ink-blue 标题）
│   │       └── about-content.tsx # 完整内容（ink-blue 标签 + timeline）
│   ├── components/
│   │   ├── site-header.tsx       # 全局导航（usePathname active 状态）
│   │   ├── hero-section.tsx      # 首页 hero（深蓝网格 + 大号艺术字 + 像素装饰）
│   │   ├── project-carousel.tsx  # 3D 旋转卡片轮播
│   │   ├── project-card.tsx      # 项目卡片（渐变背景 + hover 浮起）
│   │   ├── pixel-decor.tsx       # 像素花/星装饰
│   │   ├── placeholder-page.tsx  # 通用占位页（保留备用）
│   │   ├── blog-card.tsx         # 博客卡片（左侧 ink-blue hover accent）
│   │   ├── resource-card.tsx     # 资源卡片（左侧 ink-blue hover accent）
│   │   └── timeline.tsx          # 时间线（ink-blue 圆点 + 竖线）
│   ├── data/
│   │   ├── projects.ts           # 6 个 mock 项目 + Project 类型
│   │   ├── posts.ts              # 8 篇 mock 博客 + BlogPost/BlogSection 类型
│   │   └── resources.ts          # 12 条 mock 资源 + Resource 类型
│   └── lib/
│       └── utils.ts              # cn() classname 合并工具
└── public/projects/              # 项目相关静态资源目录
```

## 设计系统

### 颜色

| Token | 值 | 用途 |
|-------|-----|------|
| `ink-blue` | `#0754d8` | **品牌主色** — 首页背景、所有内容页标题、active 按钮/标签、hover accent |
| `ink-blue-deep` | `#03358d` | 深蓝备选 |
| `paper` | `#eef0f2` | 所有内容页背景 |
| `graphite` | `#15171d` | 主文字色、图标、分割线 |
| `soft-line` | `rgba(255,255,255,0.12)` | 深色背景分割线 |

**ink-blue 使用规范**（所有页面统一）：
- 页面大标题：`text-ink-blue`（替代原来的 `text-graphite`）
- 分类筛选按钮 active 态：`bg-ink-blue`
- 分类标签/badge：`border-ink-blue/20 bg-ink-blue/[0.05] text-ink-blue/80`
- 卡片 hover 左侧 accent 线：`before:bg-ink-blue/45`
- 页面顶部网格装饰：`.page-header-grid`（极淡 ink-blue 网格 + `border-b border-ink-blue/8`）
- Section 标签：`border-ink-blue/15 bg-ink-blue/[0.03] text-ink-blue/70`
- 链接 hover：`hover:text-ink-blue`
- 时间线圆点/竖线：`bg-ink-blue/55` / `bg-ink-blue/25` / `bg-ink-blue/12`

### 字体

| Token | 字体栈 | 用途 |
|-------|--------|------|
| `sans` | Inter → system-ui → sans-serif | 正文 |
| `mono` | SFMono → Consolas → monospace | 标签/元数据/按钮 |
| `display` | Georgia → Cambria → serif | 大标题（italic） |

### 字体尺寸体系（第三阶段放大后）

| 层级 | Tailwind | 实际大小 | 用途 |
|------|----------|----------|------|
| H1 页面标题 | `text-6xl` ~ `text-8xl` | 3.75-6rem | 各页面主标题（display italic） |
| H2 区块标题 | `text-2xl` ~ `text-3xl` | 1.5-1.875rem | 卡片标题、section 标题（display italic） |
| 正文 | `text-base` | 1rem / 16px | 所有段落、摘要、描述文字 |
| 卡片标题 | `text-lg` ~ `text-2xl` | 1.125-1.5rem | 资源卡片、项目卡片标题 |
| 页面眉标 | `text-[0.8rem]` | 0.8rem / 12.8px | mono 小标题（"Writing Archive"等） |
| 导航/按钮 | `text-[0.75rem]` | 0.75rem / 12px | 筛选按钮、返回链接、页脚 |
| 标签/tag | `text-[0.72rem]` ~ `text-[0.78rem]` | 0.72-0.78rem / 11.5-12.5px | 卡片标签、技能标签、分类 badge |
| 项目卡片标签 | `text-[0.68rem]` | 0.68rem / 10.9px | 3D 卡片内栈标签（空间受限） |

### 间距与圆角
- 统一圆角：`rounded-[4px]`
- 卡片阴影：`shadow-gallery` = `0 24px 60px rgba(28, 35, 45, 0.16)`
- Hover 卡片阴影：`shadow-[0_8px_32px_rgba(21,23,29,0.08)]`
- 内容页宽度：`max-w-3xl`（博客详情）、`max-w-4xl`（博客列表）、`max-w-5xl`（About）、`max-w-6xl`（Projects/Resources）
- 页面顶部网格装饰区：`pb-12 pt-28` + `border-b border-ink-blue/8`
- 内容区：`pb-24 pt-10` ~ `pt-14`

### CSS 关键类

| 类名 | 位置 | 作用 |
|------|------|------|
| `.home-grid` | globals.css | 深蓝背景 56px 白色网格（首页 hero） |
| `.page-header-grid` | globals.css | 极淡 ink-blue 48px 网格（所有内容页顶部装饰） |
| `.project-stage` | globals.css | 3D 透视容器 |
| `.project-orbit` | globals.css | 自动旋转的 3D 轨道 |
| `.project-slot` | globals.css | 每张卡片的 3D 定位 |
| `.pixel-flower` | globals.css | 像素花装饰（8 个 span 子元素） |
| `.pixel-spark` | globals.css | 像素星装饰（4 个 span 子元素） |

## 页面架构模式

```
服务端组件（page.tsx）→ metadata + page-header-grid + 标题
  └── 客户端组件（*-list.tsx / *-content.tsx）→ 交互 + 动画 + 筛选
```

### 各页面结构对照

| 页面 | page.tsx（服务端） | 客户端子组件 |
|------|-------------------|-------------|
| /blog | metadata + grid-header + Blog + 描述 | blog-list.tsx（筛选 + AnimatePresence） |
| /blog/[slug] | generateStaticParams + metadata + grid-header + 返回链接 + 正文 | 无（纯服务端渲染） |
| /projects | metadata + grid-header + Projects + 描述 | project-carousel.tsx |
| /projects/[slug] | generateStaticParams + metadata + grid-header + 返回链接 + 正文 | 无 |
| /resources | metadata + grid-header + Resources + 描述 | resource-grid.tsx（筛选 + AnimatePresence） |
| /about | metadata + grid-header + About | about-content.tsx（motion 动画 + timeline） |
| / | metadata（由 layout 提供） | hero-section.tsx |

## 导航系统

- `SiteHeader` 是客户端组件（`usePathname()`）
- 导航项：PORTFOLIO 2026(/) → WORKS(/projects) → BLOG(/blog) → RES(/resources) → ABOUT(/about) → MAIL
- Active 判断：`pathname === item.href || pathname.startsWith(item.href + "/")`
- Active 样式：`opacity-100 text-graphite`（浅色）/ `text-white`（深色），非 active 为 `opacity-55`
- 深色 variant 仅用于首页，浅色 variant 用于所有内容页

## 数据文件

### projects.ts
- 6 个 mock 项目：Campus Notes / Pixel Garden / Task Lighthouse / Algorithm Visuals / Portfolio Archive / Lab Timer
- 导出：`Project` 类型、`mockProjects`、`getProjectBySlug()`

### posts.ts
- 8 篇 mock 博客，4 个分类：课程笔记 / 编程开发 / AI机器学习 / 读书笔记
- 导出：`BlogPost`、`BlogSection`、`BlogCategory` 类型、`mockPosts`、`blogCategories`、`getPostBySlug()`、`getPostsByCategory()`、`getRecentPosts()`

### resources.ts
- 12 条 mock 资源，4 个分类：课程资料 / 开发工具 / 学习路线 / 推荐书籍
- 导出：`Resource`、`ResourceCategory` 类型、`mockResources`、`resourceCategories`、`getResourcesByCategory()`

## 已实现页面清单

| 路由 | 状态 | 说明 |
|------|------|------|
| `/` | 完成 | 深蓝全屏 hero + 像素装饰 + 动效 |
| `/projects` | 完成 | ink-blue 标题 + 3D 轮播卡片 |
| `/projects/[slug]` | 完成 | 6 个 SSG 详情页 |
| `/blog` | 完成 | ink-blue 标题 + 4 分类 ink-blue 筛选 + 8 篇卡片 |
| `/blog/[slug]` | 完成 | 8 个 SSG 详情页 |
| `/resources` | 完成 | ink-blue 标题 + 4 分类 ink-blue 筛选 + 12 条卡片 |
| `/about` | 完成 | ink-blue 标题 + 简介 + 技能 + 兴趣 + ink-blue timeline + 真实联系方式 |
| `/_not-found` | 未自定义 | Next.js 默认 |

## 关键约束（务必遵守）

1. **不要降级 Next.js**。`npm audit fix` 会降级到 next@9.3.3，绝对不要运行。
2. **不要引入后端/数据库/CMS/环境变量**。保持纯静态。
3. **不要引入大型 3D 模型或重依赖**。动画用 Framer Motion，3D 用纯 CSS。
4. **保持 ink-blue 品牌色一致**。所有内容页标题、active 按钮、hover accent、timeline 都用 `ink-blue`。
5. **保持字体尺寸体系**。正文 ≥ `text-base`(16px)，标签 ≥ `text-[0.72rem]`(11.5px)。
6. **每次改动后运行 `npm run lint && npm run build`**。
7. **修改前先阅读相关文件**，理解组件风格再动手。
8. **外部链接安全处理**：`rel="noopener noreferrer" target="_blank"`。
9. **不要引入 console.log**。
10. **文件保持小型**：组件 < 200 行，数据文件 < 500 行。

## 常用命令

```bash
npm install          # 安装依赖
npm run dev          # 开发服务器 http://127.0.0.1:3000
npm run lint         # ESLint（max-warnings=0）
npm run build        # 生产构建
```

## Vercel 部署配置

| 配置项 | 值 |
|--------|-----|
| Framework Preset | Next.js |
| Install Command | `npm install` |
| Build Command | `npm run build` |
| Output Directory | **留空（不要填任何值）** |
| 环境变量 | 不需要 |
| 数据库 | 不需要 |

> vercel.json 已配置 `framework: "nextjs"`，确保 Vercel Dashboard 中也选 Next.js。

## 联系方式（About 页面）

| 类型 | 值 |
|------|-----|
| 学校邮箱 | `3230102949@zju.edu.cn` |
| 个人邮箱 | `zst1873323741@gmail.com` |
| GitHub | `https://github.com/supernbk1ng` |

## 后续开发方向建议

1. **Markdown/MDX 迁移**：将 mock 数据迁移到 .mdx 文件，支持代码高亮、数学公式
2. **搜索功能**：客户端全文搜索（fuse.js 等轻量方案）
3. **暗色模式**：tailwind `dark:` 前缀 + localStorage 切换
4. **RSS / Sitemap**：自动生成 RSS feed + sitemap.xml
5. **移动端导航优化**：汉堡菜单（当前为横排文字链接）
6. **图片/封面图**：博客和项目卡片添加封面图
7. **阅读进度条 / 返回顶部**：长文章体验优化
8. **SEO 增强**：Open Graph 图片、Twitter Card、JSON-LD 结构化数据
9. **Analytics**：Vercel Analytics 或 Umami
10. **404 页面**：自定义 `not-found.tsx`
11. **博客分页**：文章增多后的分页/无限滚动

---

> 本文档于 2026-04-30 由 Claude Code (Opus 4.7) 更新，反映第三阶段完成状态。
