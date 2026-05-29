export type BlogCategory =
  | "课程笔记"
  | "编程开发"
  | "AI / 机器学习"
  | "读书笔记";

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  category: BlogCategory;
  tags: string[];
  excerpt: string;
  readingTime: number;
  coverImage?: string;
  sections: BlogSection[];
  source?: "mdx";
};

export type BlogSection = {
  heading: string;
  body: string;
};

export const blogCategories: BlogCategory[] = [
  "课程笔记",
  "编程开发",
  "AI / 机器学习",
  "读书笔记"
];

export const mockPosts: BlogPost[] = [
  {
    slug: "csapp-machine-level-programming",
    title: "CSAPP 深入理解计算机系统：机器级编程笔记",
    date: "2026-04-20",
    category: "课程笔记",
    tags: ["CSAPP", "汇编", "计算机组成", "系统编程"],
    excerpt:
      "梳理 x86-64 汇编指令、栈帧结构与调用惯例，结合 GDB 调试实战理解程序在硬件层面的执行过程。",
    coverImage: "/blog/csapp-machine-level-programming.svg",
    readingTime: 12,
    sections: [
      {
        heading: "从 C 到汇编",
        body: "理解编译器如何将 C 代码翻译为机器指令，是掌握系统编程的第一步。本文以 CSAPP 第三章为主线，记录从 C 语言到 x86-64 汇编的翻译过程。\n\n关键概念：程序计数器 %rip、整数寄存器、条件码寄存器。x86-64 提供 16 个 64 位通用寄存器，包括 %rax、%rbx、%rcx、%rdx 等。每个寄存器可访问其低 32 位、16 位或 8 位部分。\n\n操作数类型包括：立即数（$ 开头）、寄存器（% 开头）、内存引用（偏移量 + 基址 + 变址 × 比例因子）。mov 指令的源和目的不能同时为内存地址。"
      },
      {
        heading: "栈帧与过程调用",
        body: "过程调用通过栈帧实现。每次函数调用在栈上分配一个新的栈帧，用于存储返回地址、保存的寄存器、局部变量和参数。%rsp 指向栈顶，%rbp 通常用作帧指针。\n\ncall 指令将返回地址压栈后跳转到目标函数，ret 指令从栈中弹出返回地址并跳转。参数通过寄存器传递（前 6 个整数参数使用 %rdi、%rsi、%rdx、%rcx、%r8、%r9），超出部分通过栈传递。\n\n被调用者保存寄存器（%rbx、%rbp、%r12-%r15）在函数返回前必须恢复原值。调用者保存寄存器（%rax、%rcx、%rdx、%rsi、%rdi、%r8-%r11）可在函数内自由修改。"
      },
      {
        heading: "GDB 实战调试",
        body: "GDB 是理解程序运行时行为的利器。常用命令：\n\n- break *0x400540 在指定地址设置断点\n- stepi / nexti 单步执行指令\n- info registers 查看寄存器状态\n- x/8gx $rsp 查看栈内容（8 个 8 字节以十六进制显示）\n- disas 反汇编当前函数\n\n通过单步跟踪一个简单的递归函数，能直观理解栈帧的创建和销毁过程，以及参数和返回值如何在寄存器和栈之间流转。"
      },
      {
        heading: "实践建议",
        body: "1. 写简单的 C 程序，用 gcc -S 生成汇编代码，逐行对比理解。\n2. 用 objdump -d 反汇编可执行文件，观察优化级别（-O0 vs -O2）对生成代码的影响。\n3. 使用 Compiler Explorer (godbolt.org) 在线对比不同编译器、不同架构的代码生成。\n4. 理解缓冲区溢出攻击的基本原理，这是学习栈帧结构的最佳实践方式。"
      }
    ]
  },
  {
    slug: "nextjs-app-router-patterns",
    title: "Next.js App Router 实战模式总结",
    date: "2026-04-15",
    category: "编程开发",
    tags: ["Next.js", "React", "TypeScript", "App Router"],
    excerpt:
      "从 Pages Router 迁移到 App Router 的实践记录，涵盖路由组织、数据获取、静态生成与部署优化的核心模式。",
    coverImage: "/blog/nextjs-app-router-patterns.svg",
    readingTime: 10,
    sections: [
      {
        heading: "路由与文件约定",
        body: "App Router 使用文件系统约定定义路由。每个 route segment 对应一个文件夹，文件夹内的 page.tsx 是该路由的 UI 入口。\n\n特殊文件约定：\n- page.tsx：路由的 UI\n- layout.tsx：共享布局，状态在导航间保持\n- loading.tsx：Suspense 边界内的加载 UI\n- error.tsx：错误边界\n- not-found.tsx：404 页面\n- route.ts：API 路由处理\n\n动态路由使用 [param] 文件夹命名，可选 catch-all 使用 [...param]，optional catch-all 使用 [[...param]]。"
      },
      {
        heading: "服务端组件 vs 客户端组件",
        body: "App Router 默认所有组件都是服务端组件（Server Components），在服务端渲染，不会增加客户端 JS 体积。\n\n需要交互性时使用 'use client' 指令标记客户端组件：\n- 事件处理（onClick、onChange 等）\n- 状态管理（useState、useReducer）\n- 浏览器 API（useEffect、localStorage）\n- 第三方客户端库（Framer Motion 等）\n\n关键策略：将客户端组件尽可能推向叶子节点，保持大部分内容在服务端渲染。服务端组件可以直接 await 异步数据，无需 useEffect 或数据请求库。"
      },
      {
        heading: "数据获取模式",
        body: "App Router 推荐在服务端组件中直接使用 fetch 获取数据，Next.js 自动扩展原生 fetch API 以支持缓存和重新验证。\n\n静态数据（默认）：fetch 请求在构建时缓存\n动态数据：使用 cache: 'no-store' 或 next: { revalidate: 0 }\nISR 模式：使用 next: { revalidate: 3600 } 设置重新验证间隔\n\n对于 mock 数据或本地文件，直接在组件顶层读取即可，无需额外数据请求层。generateStaticParams 函数告诉 Next.js 在构建时预渲染哪些动态路由。"
      },
      {
        heading: "部署与性能",
        body: "Vercel 部署的最佳实践：\n\n1. 确保 next.config.mjs 配置正确，避免不必要的实验性功能\n2. 图片使用 next/image 自动优化\n3. 字体使用 next/font 避免布局偏移\n4. 使用 streaming 和 Suspense 优化首屏加载\n5. 利用 Route Groups 组织不共享布局的路由\n6. 静态生成的页面天然支持 CDN 缓存，性能最优\n\nlighthouse 评分目标：Performance 95+、Accessibility 95+、Best Practices 100、SEO 100。"
      }
    ]
  },
  {
    slug: "neural-network-from-scratch",
    title: "从零实现神经网络：反向传播推导与代码",
    date: "2026-04-10",
    category: "AI / 机器学习",
    tags: ["深度学习", "反向传播", "NumPy", "数学推导"],
    excerpt:
      "用 NumPy 从零搭建一个三层全连接网络，手推梯度公式，逐行实现前向传播和反向传播。",
    coverImage: "/blog/neural-network-from-scratch.svg",
    readingTime: 15,
    sections: [
      {
        heading: "为什么从零实现",
        body: "PyTorch 和 TensorFlow 让搭建神经网络变得像搭积木，但理解框架背后的数学原理才能真正掌握深度学习。本文从零使用 NumPy 实现一个三层全连接神经网络，在 MNIST 数据集上达到 97% 以上的准确率。\n\n核心目标：\n1. 手写前向传播计算\n2. 推导反向传播的梯度公式\n3. 实现参数更新逻辑\n4. 理解链式法则在计算图中的运作"
      },
      {
        heading: "前向传播",
        body: "对于第 l 层，前向传播计算：\nZ[l] = W[l] · A[l-1] + b[l]\nA[l] = g(Z[l])\n\n其中 g 是激活函数。隐藏层使用 ReLU：g(z) = max(0, z)，输出层使用 Softmax 获得类别概率。\n\n实现关键点：\n- 权重初始化使用 He 初始化（sqrt(2/n[l-1])），避免梯度消失\n- 输入数据需要归一化到 [0, 1] 范围\n- One-hot 编码将标签转为向量形式\n- 注意保持矩阵维度一致性，batch size 作为最后一个维度"
      },
      {
        heading: "反向传播推导",
        body: "反向传播的核心是链式法则。对于输出层（Softmax + Cross-Entropy）：\ndZ[L] = A[L] - Y\n\n对于隐藏层（ReLU）：\ndZ[l] = W[l+1]ᵀ · dZ[l+1] ⊙ g'(Z[l])\n其中 g'(z) = 1 if z > 0 else 0\n\n参数梯度：\ndW[l] = (1/m) · dZ[l] · A[l-1]ᵀ\ndb[l] = (1/m) · Σ dZ[l]\n\n关键验证：使用数值梯度检查确认解析梯度的正确性，单边差分公式：f'(θ) ≈ (f(θ + ε) - f(θ)) / ε，取 ε = 1e-7。"
      },
      {
        heading: "训练与调优",
        body: "训练循环：each epoch → shuffle batch → 前向传播 → 反向传播 → 更新参数\n\n关键超参数：\n- Learning rate: 从 0.01 开始，观察 loss 曲线调整\n- Batch size: 32 或 64 是不错的起点\n- Hidden layer size: 先用 128 测试，再根据过拟合/欠拟合调整\n- Epochs: 使用 early stopping，val accuracy 不再提升时停止\n\n正则化技巧：L2 正则化（weight decay）、Dropout（训练时随机置零神经元）、数据增强（对 MNIST 可用的轻微旋转/平移）。"
      }
    ]
  },
  {
    slug: "clean-code-reading-notes",
    title: "代码整洁之道读书笔记：可维护代码的核心原则",
    date: "2026-04-05",
    category: "读书笔记",
    tags: ["软件工程", "代码质量", "命名", "重构"],
    excerpt:
      "重读 Clean Code 的精华摘录与实践反思，聚焦命名、函数设计、注释与错误处理四大核心主题。",
    coverImage: "/blog/clean-code-reading-notes.svg",
    readingTime: 8,
    sections: [
      {
        heading: "有意义的命名",
        body: "Martin 大叔的核心观点：命名是编程中最困难的事情之一，也是最能体现代码质量的指标。\n\n好命名的特征：\n1. 名副其实：变量名应该回答\"它为什么存在、做什么事、怎么用\"\n2. 避免误导：不要用 accountList 命名一个 Map 类型；避免用小写 l 和大写 O 作为变量名\n3. 有意义的区分：a1、a2 是无意义区分；getActiveAccount() vs getActiveAccounts() 是细微差异的陷阱\n4. 可读名称：genymdhms（生成年月日时分秒）不如 generationTimestamp\n5. 可搜索名称：单字母变量只在短小的局部作用域内使用"
      },
      {
        heading: "函数设计原则",
        body: "函数的黄金法则：短小、只做一件事、一个抽象层级。\n\n核心规则：\n1. 函数应该短小：20 行封顶是理想目标\n2. 每个函数只做一件事：如果函数可以再拆分出一个函数（且不是对原函数的重新表述），那么它做了不止一件事\n3. 一个抽象层级：函数内不应该混杂高层级和底层级的操作\n4. Switch 语句天生做了 N 件事，应将其隐藏在抽象工厂后面\n5. 函数参数越少越好：0 参数最好，1 参数次之，3 个以上参数需要充分理由\n\n标识参数（如 bool 参数）通常表明函数做了不止一件事——考虑拆分为两个独立函数。"
      },
      {
        heading: "注释的真相",
        body: "\"注释是弥补代码表达力的失败。\"——这句话值得贴在每一台显示器的边框上。\n\n注释的坏处：\n1. 注释会撒谎：代码会演化而注释往往不会同步更新\n2. 不准确的注释比没注释更糟糕\n3. 注释会掩盖糟糕的代码：与其写注释解释混乱的逻辑，不如花时间理清代码\n\n少数合理的注释场景：\n- 法律信息（版权声明等）\n- 对意图的解释（为什么这样做，而非做了什么）\n- 对复杂算法或正则表达式的说明\n- TODO 标记（但要定期清理）\n- 公共 API 的文档注释\n\n关键建议：用代码表达意图，而非用注释修补表达力不足。"
      },
      {
        heading: "错误处理与边界",
        body: "错误处理不应该搞乱代码逻辑。\n\n1. 使用异常而非返回码：错误码要求调用者立即处理，破坏了正常的控制流\n2. 先写 try-catch-finally：这有助于定义代码的预期范围\n3. 不要返回 null：null 是错误处理的万恶之源，调用者总会忘记检查\n4. 不要传递 null：参数中的 null 同样危险\n5. 使用特例模式（Special Case Pattern）：替代 null 返回值\n\n第三方库的边界管理：使用包装器或适配器模式封装第三方 API，确保你的代码不依赖库的具体类型和行为。这使测试更容易，也降低了更换库的迁移成本。"
      }
    ]
  },
  {
    slug: "typescript-generics-deep-dive",
    title: "TypeScript 泛型深度解析：从基础到高级模式",
    date: "2026-03-28",
    category: "编程开发",
    tags: ["TypeScript", "泛型", "类型系统", "高级类型"],
    excerpt:
      "系统梳理 TypeScript 泛型的核心概念、约束、条件类型与 infer 关键字，配合实战案例深入理解类型编程。",
    coverImage: "/blog/typescript-generics-deep-dive.svg",
    readingTime: 11,
    sections: [
      {
        heading: "泛型基础",
        body: "泛型是 TypeScript 类型系统的心脏，它让我们能编写可复用、类型安全的代码。基本语法：\n\nfunction firstElement<T>(arr: T[]): T | undefined { return arr[0]; }\n\n这里的 T 是类型变量，它捕获调用时传入的实际类型。TypeScript 能从参数自动推断 T，也可以显式指定：firstElement<string>([\"a\", \"b\"])\n\n泛型约束（extends）：限制类型变量必须满足某些条件\nfunction longest<T extends { length: number }>(a: T, b: T): T\n\n泛型不仅用于函数，还可用于接口、类和类型别名。泛型接口最经典的例子是 Array<T> 和 Promise<T>。"
      },
      {
        heading: "条件类型",
        body: "条件类型语法：T extends U ? X : Y——如果 T 可赋值给 U，则类型为 X，否则为 Y。\n\n条件类型的强大之处在于：\n1. 配合泛型使用，根据输入类型动态决定输出类型\n2. 分布式条件类型：当 T 是联合类型时，条件类型会分布到每个成员\n3. 配合 infer 关键字从类型中提取信息\n\n实用例子：\ntype ExtractReturnType<T> = T extends (...args: any[]) => infer R ? R : never;\ntype Flatten<T> = T extends Array<infer U> ? U : T;\ntype NonNullable<T> = T extends null | undefined ? never : T;"
      },
      {
        heading: "映射类型与模板字面量类型",
        body: "映射类型允许基于已有类型创建新类型：\ntype Readonly<T> = { readonly [K in keyof T]: T[K] };\ntype Partial<T> = { [K in keyof T]?: T[K] };\ntype Pick<T, K extends keyof T> = { [P in K]: T[P] };\n\n结合 as 子句可以重新映射键：\ntype Getters<T> = { [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K] };\n\n模板字面量类型在字符串层面提供了强大的类型计算能力，可用于路由参数解析、事件名生成、CSS 属性校验等场景。"
      },
      {
        heading: "实战模式与建议",
        body: "1. Builder 模式：使用泛型链式调用，每一步返回正确类型的 this\n2. 类型安全的 Event Emitter：用映射类型约束事件名和对应的回调参数\n3. 多态组件 Props：根据 variant prop 自动推断正确的其余 props 类型\n4. API 响应类型封装：泛型包装通用响应结构 type ApiResponse<T> = { data: T; ... }\n\n使用泛型的黄金法则：让 TypeScript 尽可能推断类型，只在边界处显式标注。过度标注和完全依赖推断都应避免——在导出的函数签名和公共 API 中明确类型，在内部实现中信任推断。"
      }
    ]
  },
  {
    slug: "attention-mechanism-explained",
    title: "注意力机制完全解读：从 Seq2Seq 到 Transformer",
    date: "2026-03-20",
    category: "AI / 机器学习",
    tags: ["NLP", "Transformer", "Attention", "深度学习"],
    excerpt:
      "逐步拆解注意力机制的数学原理，从传统的 Seq2Seq + Attention 过渡到 Self-Attention 和 Multi-Head Attention。",
    coverImage: "/blog/attention-mechanism-explained.svg",
    readingTime: 14,
    sections: [
      {
        heading: "为什么需要 Attention",
        body: "传统 Seq2Seq 模型将整个输入序列压缩为一个固定长度的上下文向量，这导致长序列的信息瓶颈。当输入句子很长时，解码器的性能会急剧下降。\n\nAttention 机制的核心思想：解码时动态地\"关注\"输入序列的不同部分，而非依赖单一的固定向量。每一步解码，模型计算当前状态与所有编码器隐藏状态的相似度，得到注意力权重分布，然后用加权和作为上下文向量。\n\n直观理解：就好比翻译长句时，每翻译一个词，你会回头\"看\"原句中相关的部分，而不是试图记住整句话的每个细节。"
      },
      {
        heading: "Attention 的数学形式",
        body: "Attention 可以统一描述为将 query 和一组 key-value 对映射到输出的过程：\n\nAttention(Q, K, V) = softmax(QK^T / √d_k) V\n\n其中：\n- Q (Query): 当前要查询的信息（解码器状态）\n- K (Key): 每个位置的\"标签\"（编码器状态）\n- V (Value): 每个位置的实际信息（编码器状态）\n- √d_k: 缩放因子，防止点积值过大导致 softmax 梯度消失\n\n计算步骤：\n1. 计算 Q 与每个 K 的相似度得分（点积）\n2. 除以 √d_k 缩放\n3. Softmax 得到注意力权重\n4. 权重与 V 的加权和作为输出\n\n这个公式的美妙之处在于高度并行化——所有位置同时计算，没有循环依赖。"
      },
      {
        heading: "Self-Attention 与 Multi-Head",
        body: "Self-Attention（自注意力）是 Transformer 的核心创新：Q、K、V 都来自同一个输入序列，让每个位置与序列中的其他位置建立直接的关联。\n\nSelf-Attention 的优势：\n- 解决了长距离依赖问题：任意两个位置的最短路径长度为 O(1)\n- 高度并行化：不像 RNN 需要逐步处理\n- 可解释性：注意力权重可视化能揭示模型在\"看\"什么\n\nMulti-Head Attention 通过将 Q、K、V 投影到 h 个不同的子空间，让模型能从多个角度\"关注\"信息：\n\nMultiHead(Q, K, V) = Concat(head_1, ..., head_h) W^O\nwhere head_i = Attention(QW_i^Q, KW_i^K, VW_i^V)\n\n每个 head 可以学习不同的注意力模式：一个 head 关注位置关系，一个关注语法结构，一个关注语义相似性。"
      },
      {
        heading: "Transformer 架构总览",
        body: "Transformer 完全基于注意力机制，摒弃了循环和卷积结构：\n\n编码器：\n1. Input Embedding + Positional Encoding（正弦位置编码注入位置信息）\n2. N × (Multi-Head Self-Attention + Feed Forward + 两个 Add & Norm 残差连接)\n\n解码器：\n1. Output Embedding + Positional Encoding\n2. Masked Multi-Head Self-Attention（防止看到未来位置）\n3. Multi-Head Cross-Attention（Q 来自解码器，K/V 来自编码器）\n4. Feed Forward\n5. 每层后 Add & Norm\n\nLayer Normalization 放在残差连接之后（Post-LN）还是之前（Pre-LN）对训练稳定性影响显著。现代实现普遍采用 Pre-LN。"
      }
    ]
  },
  {
    slug: "data-structures-review",
    title: "数据结构期末复习：核心结构与应用场景总结",
    date: "2026-03-12",
    category: "课程笔记",
    tags: ["数据结构", "算法", "考试复习", "C++"],
    excerpt:
      "期末考试前的系统梳理：数组、链表、栈、队列、树、图、哈希表的实现要点、复杂度分析和高频考点。",
    coverImage: "/blog/data-structures-review.svg",
    readingTime: 13,
    sections: [
      {
        heading: "线性结构",
        body: "数组：连续内存，O(1) 随机访问，O(n) 插入/删除（需移动元素）。动态数组（如 C++ vector）通过倍增策略实现均摊 O(1) 的尾部插入。\n\n链表：非连续内存，O(1) 插入/删除（已知位置），O(n) 随机访问。双向链表方便前后遍历，循环链表适用于轮询调度。哨兵节点可简化边界条件处理。\n\n栈：LIFO，应用场景包括函数调用栈、表达式求值、括号匹配、DFS。单调栈可在 O(n) 时间内解决\"下一个更大元素\"类问题。\n\n队列：FIFO，应用场景包括 BFS、任务调度、消息队列。优先队列（堆实现）支持 O(log n) 插入和取出最大/最小元素。双端队列（deque）两端均可操作。"
      },
      {
        heading: "树结构",
        body: "二叉树遍历：前序（根左右）、中序（左根右）、后序（左右根）、层序（BFS）。递归实现简洁，迭代实现需要显式栈辅助。\n\n二叉搜索树 (BST)：左子树 < 根 < 右子树，平均 O(log n) 查找，最坏 O(n)（退化为链表）。平衡二叉搜索树（AVL、红黑树）通过旋转操作保证 O(log n) 高度。\n\n堆：完全二叉树，父节点 ≤ 子节点（最小堆）。用数组存储（索引 i 的左子 = 2i+1，右子 = 2i+2）。建堆 O(n)，插入/删除 O(log n)。堆排序原地 O(n log n)。\n\nTrie（前缀树）：用于字符串集合的高效存储和前缀匹配。每个节点包含子节点指针数组和结束标记。空间换时间，前缀查询 O(k)，k 为字符串长度。"
      },
      {
        heading: "图与哈希",
        body: "图的存储：邻接矩阵（O(V²) 空间，适合稠密图）、邻接表（O(V+E) 空间，适合稀疏图）。\n\n图的遍历：BFS 求最短路径（无权图）、DFS 检测环/拓扑排序/强连通分量。\n\n最短路径：Dijkstra（非负权值 O((V+E)logV)）、Bellman-Ford（可处理负权边 O(VE)）、Floyd-Warshall（全源 O(V³)）。\n\n最小生成树：Prim（从点出发 O((V+E)logV)）、Kruskal（从边出发 O(E log E)，并查集实现）。\n\n哈希表：设计哈希函数（除留余数法、乘法哈希）、冲突解决（拉链法、开放寻址法）。负载因子 = n/m，通常超过 0.75 时扩容。C++ unordered_map 平均 O(1) 操作。"
      },
      {
        heading: "高频考点与复杂度速查",
        body: "必背复杂度：\n- 快速排序：平均 O(n log n)，最坏 O(n²)，不稳定\n- 归并排序：O(n log n)，稳定，需 O(n) 额外空间\n- 二分查找：O(log n)，要求有序数组\n- 二叉搜索树查找：平均 O(log n)\n- Dijkstra + 二叉堆：O((V+E) log V)\n\n易错点：\n1. 递归基（base case）遗漏导致栈溢出\n2. 二分查找边界条件（left < right vs left ≤ right）\n3. 动态规划的状态定义和递推方向\n4. 指针操作中的空指针检查\n5. 图遍历中 visited 标记的时机（入队时标记 vs 出队时标记影响去重效果）"
      }
    ]
  },
  {
    slug: "pragmatic-programmer-notes",
    title: "程序员修炼之道读书笔记：务实编程的哲学与方法",
    date: "2026-03-01",
    category: "读书笔记",
    tags: ["软件工程", "职业成长", "最佳实践", "DRY"],
    excerpt:
      "从\"破窗理论\"到\"知识组合\"，提炼《The Pragmatic Programmer》中最值得实践的十条建议。",
    coverImage: "/blog/pragmatic-programmer-notes.svg",
    readingTime: 7,
    sections: [
      {
        heading: "破窗理论与熵增",
        body: "\"破窗理论\"是书中最重要的隐喻之一：一栋建筑如果有一扇破窗没人修理，很快就会有更多窗户被打破。软件开发同理——一个糟糕的设计、一个错误的决策、一行劣质的代码，如果不及时修复，会迅速蔓延。\n\n反制措施：\n1. 不要容忍\"破窗\"：看到坏代码立即修，不要让技术债务累积\n2. Code review 是最有效的\"修窗\"机制\n3. 团队规范比个人英雄主义更重要\n\n作者的忠告：\"不要因为时间紧迫就写出低质量的代码。绳子同样会断，只是你不知道什么时候。\""
      },
      {
        heading: "知识组合与持续学习",
        body: "将知识视为一种投资组合：\n\n1. 定期投资：每周至少学习一种新工具、语言或技术\n2. 多样化：不要只学一种语言或框架，理解不同范式的思维方式\n3. 管理风险：不要把全部精力投入可能过时的技术上\n4. 低买高卖：在新兴技术中找到有可能爆发的那一个\n\n具体建议：每年学习一门新语言，每季度读一本技术书籍，定期参与开源项目。知识的关键不在于记住所有细节，而在于知道\"当你需要时，该去哪里找\"。"
      },
      {
        heading: "DRY 与正交性",
        body: "DRY（Don't Repeat Yourself）：每一个知识点在系统内必须有单一、明确、权威的表示。\n\nDRY 不只是\"不要复制粘贴代码\"，而是更广义的：\n- 代码的重复：抽取公共函数/组件\n- 文档的重复：代码即文档，避免代码和文档各说各话\n- 数据的重复：单一数据源（Single Source of Truth）\n- 开发者的重复：用自动化消除重复的手工步骤\n\n正交性（Orthogonality）：系统的不同部分应该互不依赖。就像直升机操控系统——改变一个维度的控制不影响其他维度。正交系统更容易开发、测试和维护。\n\n实现正交性的方法：保持模块解耦、避免全局状态、使用纯函数、依赖注入。"
      },
      {
        heading: "实用工具思维",
        body: "1. 用好你的编辑器/IDE：掌握快捷键、多光标、正则替换、宏录制——投资学习工具的时间会以指数倍回报\n2. 版本控制不仅是代码：文档、配置、构建脚本、数据库迁移都该纳入版本管理\n3. 自动化一切：构建、测试、部署、文档生成——手工步骤是 bug 的来源\n4. 日志与追踪胜过调试器：好的日志让你在问题发生之前就发现问题\n\n最终建议：\"不要让工具限制你的思维，而是让工具放大你的能力。\"朴实无华的工具组合（编辑器 + Shell + Git + 测试框架）胜过花哨但不可靠的工具链。"
      }
    ]
  }
];

export function getPostBySlug(slug: string) {
  return mockPosts.find((post) => post.slug === slug);
}

export function getPostsByCategory(category: BlogCategory | null) {
  if (!category) return mockPosts;
  return mockPosts.filter((post) => post.category === category);
}

export function getRecentPosts(count = 4) {
  return [...mockPosts]
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )
    .slice(0, count);
}

export function getAdjacentPosts(slug: string): {
  prev: BlogPost | null;
  next: BlogPost | null;
} {
  const sorted = [...mockPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const idx = sorted.findIndex((p) => p.slug === slug);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx < sorted.length - 1 ? sorted[idx + 1] : null,
    next: idx > 0 ? sorted[idx - 1] : null
  };
}
