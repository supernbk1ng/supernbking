export type ResourceCategory =
  | "课程资料"
  | "开发工具"
  | "学习路线"
  | "推荐书籍";

export type Resource = {
  name: string;
  description: string;
  category: ResourceCategory;
  tags: string[];
  url: string;
};

export const resourceCategories: ResourceCategory[] = [
  "课程资料",
  "开发工具",
  "学习路线",
  "推荐书籍"
];

export const mockResources: Resource[] = [
  {
    name: "The Missing Semester of Your CS Education",
    description:
      "MIT 出品，覆盖 Shell、Vim、Git、调试器等课堂不教但必须掌握的实用工具技能。",
    category: "课程资料",
    tags: ["MIT", "Shell", "Git", "工具链"],
    url: "https://missing.csail.mit.edu/"
  },
  {
    name: "CS 自学指南",
    description:
      "北大信科学生整理的计算机科学自学路径，涵盖四大核心课程和进阶方向的推荐资源。",
    category: "课程资料",
    tags: ["CS", "自学", "课程体系", "中文"],
    url: "https://csdiy.wiki/"
  },
  {
    name: "Vercel — Frontend Cloud",
    description:
      "前端部署平台，支持 Next.js 原生集成、Serverless Functions、自动 HTTPS 和全球 CDN。",
    category: "开发工具",
    tags: ["部署", "Vercel", "Serverless", "CDN"],
    url: "https://vercel.com/"
  },
  {
    name: "Raycast",
    description:
      "macOS 效率启动器，替代 Spotlight，支持扩展、脚本、剪贴板历史和窗口管理。",
    category: "开发工具",
    tags: ["macOS", "效率", "启动器"],
    url: "https://www.raycast.com/"
  },
  {
    name: "Frontend Developer Roadmap",
    description:
      "社区维护的前端开发路线图，从 HTML/CSS 基础到框架、工具链、性能优化逐步覆盖。",
    category: "学习路线",
    tags: ["前端", "路线图", "职业规划"],
    url: "https://roadmap.sh/frontend"
  },
  {
    name: "AI/ML Learning Path",
    description:
      "从数学基础（线代、概率论）到深度学习框架的完整学习路径，附实践项目建议。",
    category: "学习路线",
    tags: ["AI", "ML", "深度学习", "入门"],
    url: "https://roadmap.sh/ai-data-scientist"
  },
  {
    name: "Designing Data-Intensive Applications",
    description:
      "Martin Kleppmann 的数据密集型应用系统设计圣经，覆盖存储、分布式和批流处理核心原理。",
    category: "推荐书籍",
    tags: ["分布式系统", "数据库", "系统设计", "必读"],
    url: "https://dataintensive.net/"
  },
  {
    name: "Structure and Interpretation of Computer Programs",
    description:
      "SICP（计算机程序的构造与解释），以 Scheme 语言揭示编程抽象的本质，MIT 经典教材。",
    category: "推荐书籍",
    tags: ["编程基础", "抽象", "Scheme", "经典"],
    url: "https://mitpress.mit.edu/sites/default/files/sicp/index.html"
  },
  {
    name: "Obsidian",
    description:
      "基于本地 Markdown 的知识管理工具，双向链接和图谱视图让笔记之间形成知识网络。",
    category: "开发工具",
    tags: ["笔记", "Markdown", "知识管理", "双向链接"],
    url: "https://obsidian.md/"
  },
  {
    name: "LeetCode Patterns",
    description:
      "按模式分类的算法题刷题指南，从滑动窗口到动态规划，每个模式配有模板和练习。",
    category: "学习路线",
    tags: ["算法", "面试", "刷题", "LeetCode"],
    url: "https://seanprashad.com/leetcode-patterns/"
  },
  {
    name: "CS50: Introduction to Computer Science",
    description:
      "哈佛大学的 CS 入门课，David Malan 教授主讲，从 Scratch 到 C、Python、SQL 和 Web 开发。",
    category: "课程资料",
    tags: ["哈佛", "CS入门", "C语言", "Python"],
    url: "https://cs50.harvard.edu/x/"
  },
  {
    name: "The Art of Doing Science and Engineering",
    description:
      "Richard Hamming 的《科学与工程的艺术：学会学习》，探讨方法论、创造力和研究心态，适合 STEM 学生。",
    category: "推荐书籍",
    tags: ["方法论", "科研", "数学", "思维"],
    url: "https://worrydream.com/refs/Hamming_1997_-_The_Art_of_Doing_Science_and_Engineering.pdf"
  }
];

export function getResourcesByCategory(category: ResourceCategory | null) {
  if (!category) return mockResources;
  return mockResources.filter((r) => r.category === category);
}
