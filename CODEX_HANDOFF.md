# Codex 交付文档：supernbking 个人博客 / 作品集

## 项目概要

| 项目 | 详情 |
|------|------|
| 项目名 | supernbking-blog |
| 定位 | CS 大三学生个人主页，部署于 Vercel |
| 当前阶段 | 第二阶段完成（Blog / Resources / About 真实内容已上线） |
| 开发工具 | Claude Code（第一阶段 + 第二阶段） |
| 目标 | 交付给 Codex 继续第三阶段开发 |

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
├── next.config.mjs          # 仅 reactStrictMode: true
├── tailwind.config.ts       # 自定义颜色/字体/阴影
├── tsconfig.json            # @/* → ./src/*
├── eslint.config.mjs
├── CODEX_HANDOFF.md         # 本文档
├── src/
│   ├── app/
│   │   ├── layout.tsx           # 根布局，metadata，<html lang="zh-CN">
│   │   ├── globals.css          # 全局样式（网格背景、3D carousel、像素装饰）
│   │   ├── page.tsx             # 首页 → HeroSection
│   │   ├── projects/
│   │   │   ├── page.tsx         # 项目列表（3D 旋转卡片轮播）
│   │   │   └── [slug]/page.tsx  # 项目详情（SSG）
│   │   ├── blog/
│   │   │   ├── page.tsx         # 博客列表（服务端组件壳）
│   │   │   ├── blog-list.tsx    # 客户端筛选组件
│   │   │   └── [slug]/page.tsx  # 博客详情（SSG）
│   │   ├── resources/
│   │   │   ├── page.tsx         # 资源列表（服务端组件壳）
│   │   │   └── resource-grid.tsx # 客户端筛选组件
│   │   └── about/
│   │       ├── page.tsx         # About 页（服务端组件壳）
│   │       └── about-content.tsx # About 完整内容（客户端，含 timeline）
│   ├── components/
│   │   ├── site-header.tsx      # 全局导航（已支持 active 状态）
│   │   ├── hero-section.tsx     # 首页 hero（深蓝网格 + 大号艺术字 + 像素装饰）
│   │   ├── project-carousel.tsx # 3D 旋转项目卡片轮播
│   │   ├── project-card.tsx     # 单张项目卡片（渐变背景 + hover 浮起）
│   │   ├── pixel-decor.tsx      # 像素花/星装饰（纯 CSS 像素 art）
│   │   ├── placeholder-page.tsx # 通用占位页（现已被替换，保留备用）
│   │   ├── blog-card.tsx        # 博客列表卡片
│   │   ├── resource-card.tsx    # 资源卡片
│   │   └── timeline.tsx         # 时间线组件
│   ├── data/
│   │   ├── projects.ts          # 6 个 mock 项目 + Project 类型
│   │   ├── posts.ts             # 8 篇 mock 博客 + BlogPost/BlogSection 类型
│   │   └── resources.ts         # 12 条 mock 资源 + Resource 类型
│   └── lib/
│       └── utils.ts             # cn() classname 合并工具
└── public/projects/             # 项目相关静态资源目录
```

## 设计系统

### 颜色
| Token | 值 | 用途 |
|-------|-----|------|
| `ink-blue` | `#0754d8` | 首页背景 |
| `ink-blue-deep` | `#03358d` | 深蓝备选 |
| `paper` | `#eef0f2` | 内容页背景 |
| `graphite` | `#15171d` | 主文字色 |
| `soft-line` | `rgba(255,255,255,0.12)` | 深色背景分割线 |

### 字体
| Token | 字体栈 | 用途 |
|-------|--------|------|
| `sans` | Inter → system-ui → sans-serif | 正文 |
| `mono` | SFMono → Consolas → monospace | 标签/元数据/按钮 |
| `display` | Georgia → Cambria → serif | 大标题（italic） |

### 间距与圆角
- 页面统一使用 `rounded-[4px]` 作为组件圆角
- 卡片 shadow: `shadow-gallery` = `0 24px 60px rgba(28, 35, 45, 0.16)`
- 内容页统一 `max-w-5xl` ~ `max-w-6xl`，居中
- section 顶部空白 `py-28`

### CSS 约定
- `.home-grid` — 深蓝背景上的 56px 网格线（移动端 42px）
- `.project-stage` / `.project-orbit` / `.project-slot` — 3D CSS carousel
- `.pixel-flower` / `.pixel-spark` — 纯 CSS 像素装饰（绝对定位 + span 块）
- `prefers-reduced-motion` — 全局尊重系统动效偏好

## 核心模式

### 页面架构模式
```
服务端组件（page.tsx） → 负责 metadata + 渲染壳
  └── 客户端组件（*-list.tsx / *-content.tsx） → 负责交互 + 动画
```

### 导航 active 状态
- `SiteHeader` 已是客户端组件，使用 `usePathname()` 检测当前路由
- navItems: WORKS(/projects), BLOG(/blog), RES(/resources), ABOUT(/about)
- active 判断逻辑：`pathname === item.href || pathname.startsWith(item.href + "/")`
- 深色 variant 用于首页，浅色 variant 用于所有内容页

### 动画规范
- Framer Motion `fadeIn` 模式：`animate: { opacity: 1, y: 0 }`, `initial: { opacity: 0, y: 24 }`
- 列表 staggered：`delay: index * 0.06`
- transition：`duration: 0.45, ease: "easeOut"`（大部分场景）
- Category 筛选切换：`AnimatePresence mode="wait"`

### Mock 数据模式
```typescript
// data files 导出：
export type Foo = { ... }              // 类型定义
export const mockFoos: Foo[] = [ ... ] // mock 数据
export const fooCategories = [ ... ]   // 分类常量
export function getFooBySlug(slug)     // 按 slug 查找
export function getFoosByCategory(c)   // 按分类筛选
```

## 已实现页面清单

| 路由 | 状态 | 说明 |
|------|------|------|
| `/` | 完成 | Hero 首页，深蓝网格 + 大号艺术字 + 像素装饰 + 动效 |
| `/projects` | 完成 | 3D 旋转卡片轮播，6 个项目 |
| `/projects/[slug]` | 完成 | 6 个 SSG 详情页 |
| `/blog` | 完成 | 博客列表 + 4 分类筛选 + 8 篇文章卡片 |
| `/blog/[slug]` | 完成 | 8 个 SSG 详情页，排版优化 |
| `/resources` | 完成 | 资源列表 + 4 分类筛选 + 12 条资源卡片 |
| `/about` | 完成 | 个人介绍 + 技能/兴趣 + 时间线 + 联系方式 |
| `/_not-found` | 未自定义 | Next.js 默认 404 |

## 关键约束（务必遵守）

1. **不要降级 Next.js**。不要因为 npm audit 中 Next 内部 PostCSS 的中危提示运行 `npm audit fix`，它会降级到 next@9.3.3。
2. **不要引入后端/数据库/CMS/环境变量**。保持纯静态，Vercel 免费版友好。
3. **不要引入大型 3D 模型或重依赖**。动画用 Framer Motion，3D 用纯 CSS。
4. **不要大规模修改首页和 Projects 页面**。它们已通过测试。除非发现明显 bug。
5. **每次改动后运行 `npm run lint` 和 `npm run build`**。
6. **修改前先阅读相关现有文件**，理解组件风格再动手。
7. **遵循现有设计系统**：display italic 标题、mono 元数据标签、rounded-[4px]、paper 背景、graphite 文字。
8. **外部链接必须安全处理**：`rel="noopener noreferrer" target="_blank"`。
9. **不要引入 console.log**。
10. **保持文件小**：组件 < 200 行，数据文件 < 300 行。

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
| 环境变量 | 不需要 |
| 数据库 | 不需要 |

## 后续开发方向建议

1. **Markdown/MDX 迁移**：将 mock 数据迁移到本地 .mdx 文件，支持代码高亮、数学公式等
2. **搜索功能**：客户端全文搜索（fuse.js 或类似轻量方案）
3. **暗色模式**：全局 dark mode 切换（tailwind dark: 前缀 + localStorage）
4. **RSS / Sitemap**：自动生成 RSS feed 和 sitemap.xml
5. **移动端导航优化**：当前为文字横排，内容多后改为汉堡菜单
6. **图片/媒体支持**：博客和项目卡片添加封面图
7. **返回顶部 / 阅读进度条**：提升长文章阅读体验
8. **SEO 优化**：Open Graph 图片、Twitter Card、结构化数据（JSON-LD）
9. **Analytics**：Vercel Analytics 或 Umami（轻量、自部署）

---

> 本文档于 2026-04-29 由 Claude Code (Opus 4.7) 生成，作为 Phase 2 完成后的交付物。
