export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  category: string;
  summary: string;
  description?: string;
  stack: string[];
  gradient: string;
  accent: string;
  coverImage?: string;
  screenshots?: string[];
  githubUrl?: string;
  demoUrl?: string;
};

export const mockProjects: Project[] = [
  {
    slug: "campus-notes",
    title: "Campus Notes",
    subtitle: "Study workflow archive",
    year: "2026",
    category: "Web App",
    summary:
      "A quiet knowledge base for course notes, reading lists, and weekly learning reviews.",
    description:
      "Campus Notes is a personal study companion built to organize and review university coursework. It supports Markdown-based note editing with live preview, a reading list tracker with progress indicators, and a weekly review dashboard that surfaces study streaks and topic coverage.\n\nThe app uses Next.js App Router for static generation of all note pages, with client-side search across the full text corpus. Notes are stored as local Markdown files with frontmatter metadata, making them portable and version-controllable.\n\nKey features include: full-text search with highlighted results, category-based filtering by course, a weekly review calendar, and a responsive reading mode optimized for long-form study material.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    gradient:
      "linear-gradient(135deg, #d9ecff 0%, #7bb8ff 48%, #183f8f 100%)",
    accent: "#7bb8ff",
    githubUrl: "https://github.com/supernbking/campus-notes",
    coverImage: "/projects/campus-notes.svg",
    screenshots: ["/projects/campus-notes.svg"]
  },
  {
    slug: "pixel-garden",
    title: "Pixel Garden",
    subtitle: "Tiny generative playground",
    year: "2025",
    category: "Creative Code",
    summary:
      "A browser-based sketchbook for pixel plants, color systems, and soft motion studies.",
    description:
      "Pixel Garden is a browser-based creative coding playground for generating pixel-art plants using procedural algorithms. Each plant grows from a seed configuration through a set of customizable rules — branch probability, leaf density, color palette, and growth direction.\n\nThe canvas-based renderer uses a custom pixel grid system with color blending and soft motion effects. Users can save their favorite generations to a gallery, export as PNG, and share plant configurations via URL parameters.\n\nBuilt with React for the UI layer and raw Canvas API for pixel rendering, with Framer Motion providing smooth transitions between the control panel and gallery views. The procedural generation algorithm is inspired by L-systems and space colonization.",
    stack: ["React", "Canvas", "Framer Motion"],
    gradient:
      "linear-gradient(135deg, #f7e36f 0%, #52c878 42%, #045236 100%)",
    accent: "#f7e36f",
    githubUrl: "https://github.com/supernbking/pixel-garden",
    demoUrl: "https://pixel-garden.vercel.app",
    coverImage: "/projects/pixel-garden.svg",
    screenshots: ["/projects/pixel-garden.svg"]
  },
  {
    slug: "task-lighthouse",
    title: "Task Lighthouse",
    subtitle: "Minimal student planner",
    year: "2025",
    category: "Productivity",
    summary:
      "A focused dashboard for assignment deadlines, exam blocks, and daily execution.",
    description:
      "Task Lighthouse is a focused student planner that replaces noisy to-do apps with a clean dashboard designed around academic rhythms. It visualizes assignment deadlines on a timeline, groups tasks by course, and provides a daily focus view that shows only what matters today.\n\nData is stored locally in the browser using IndexedDB — no accounts, no cloud sync, no distractions. The interface is built around three views: a timeline showing upcoming deadlines, a course-grouped backlog, and a daily execution board.\n\nBuilt with Next.js and styled with CSS custom properties for theme consistency. The drag-and-drop priority reordering uses the native HTML5 Drag and Drop API with custom touch support for mobile.",
    stack: ["Next.js", "Local Data", "CSS"],
    gradient:
      "linear-gradient(135deg, #fff4e5 0%, #ff9f6e 48%, #49302d 100%)",
    accent: "#ff9f6e",
    githubUrl: "https://github.com/supernbking/task-lighthouse",
    coverImage: "/projects/task-lighthouse.svg",
    screenshots: ["/projects/task-lighthouse.svg"]
  },
  {
    slug: "algorithm-visuals",
    title: "Algorithm Visuals",
    subtitle: "Learning by motion",
    year: "2024",
    category: "Learning Tool",
    summary:
      "Small visual explainers for sorting, graph traversal, and dynamic programming notes.",
    stack: ["TypeScript", "SVG", "Motion"],
    gradient:
      "linear-gradient(135deg, #f0f2ff 0%, #9b8cff 44%, #1c1f5c 100%)",
    accent: "#9b8cff"
  },
  {
    slug: "portfolio-archive",
    title: "Portfolio Archive",
    subtitle: "Personal publishing system",
    year: "2024",
    category: "Website",
    summary:
      "An evolving static portfolio structure for essays, project notes, and resource curation.",
    stack: ["App Router", "Markdown Ready", "Vercel"],
    gradient:
      "linear-gradient(135deg, #f6f7f8 0%, #b7c0c8 46%, #20262d 100%)",
    accent: "#b7c0c8"
  },
  {
    slug: "lab-timer",
    title: "Lab Timer",
    subtitle: "Pomodoro for experiments",
    year: "2024",
    category: "Utility",
    summary:
      "A small timer interface for lab sessions, revision sprints, and recovery breaks.",
    stack: ["React", "Hooks", "Tailwind"],
    gradient:
      "linear-gradient(135deg, #e0fff9 0%, #50d7c7 42%, #123f48 100%)",
    accent: "#50d7c7"
  },
  {
    slug: "adversarial-attack-lab",
    title: "Adversarial Attack Lab",
    subtitle: "ML security benchmark suite",
    year: "2025",
    category: "AI / ML",
    summary:
      "A comprehensive adversarial machine learning lab: 5 attack methods (FGSM, PGD, MI-FGSM, CW, Square), 2 defense strategies, and a Gradio web demo, all benchmarked on CIFAR-10.",
    description:
      "This project implements and benchmarks five classic adversarial attack algorithms from scratch using PyTorch, targeting a ResNet-18 classifier trained on CIFAR-10.\n\nThe five attacks span both white-box (FGSM, PGD, MI-FGSM, CW-L2) and black-box (Square Attack) paradigms. Each attack is implemented with clear, documented code that follows the original paper formulations — FGSM uses single-step gradient ascent, PGD iterates with random restarts, MI-FGSM accumulates momentum for better transferability, CW optimizes perturbations in arctanh space for tight L2 constraints, and Square Attack uses query-efficient randomized search.\n\nTwo defense strategies are implemented: input preprocessing (Gaussian noise injection and spatial smoothing) and adversarial training (PGD-based). A consistency-based detector can also distinguish clean from adversarial inputs by measuring prediction disagreement.\n\nThe entire pipeline is wrapped in an interactive Gradio web demo for real-time experimentation, and a comprehensive benchmark matrix evaluates all attack × defense × model combinations.",
    stack: ["PyTorch", "torchattacks", "Gradio", "CIFAR-10", "ResNet-18"],
    gradient:
      "linear-gradient(135deg, #1a1a2e 0%, #16213e 42%, #0f3460 100%)",
    accent: "#e94560",
    coverImage: "/projects/adv-attack-lab.svg",
    screenshots: ["/projects/adv-attack-lab.svg"],
    githubUrl: "https://github.com/supernbking/adv-attack-lab"
  },
  {
    slug: "dqn-maze-navigator",
    title: "DQN Maze Navigator",
    subtitle: "Deep RL for autonomous navigation",
    year: "2025",
    category: "AI / ML",
    summary:
      "A reinforcement learning project where agents learn to navigate procedurally generated mazes using Q-Learning and Deep Q-Networks (DQN) with both PyTorch and Keras backends.",
    description:
      "This project explores how reinforcement learning agents can learn to navigate complex, randomly generated mazes without any prior knowledge of the environment. Mazes are generated procedurally using Prim's algorithm, ensuring varied and unpredictable layouts for each training run.\n\nTwo algorithmic approaches are implemented and compared: tabular Q-Learning, which maintains a discrete state-action value table with epsilon-greedy exploration, and Deep Q-Network (DQN), which uses a neural network to approximate the Q-function for continuous state representations. The DQN features experience replay, target network updates, and two independent backends (PyTorch and Keras/TensorFlow) with identical APIs.\n\nThe training pipeline generates animated GIFs showing the agent's learning progression across episodes, along with reward curves and success rate statistics for quantitative comparison between Q-Learning and DQN. BFS search is also implemented as an optimal baseline.",
    stack: ["PyTorch", "Keras", "DQN", "Q-Learning", "BFS", "Matplotlib"],
    gradient:
      "linear-gradient(135deg, #0d1117 0%, #161b22 50%, #1a2332 100%)",
    accent: "#58a6ff",
    coverImage: "/projects/dqn-maze-navigator.svg",
    screenshots: ["/projects/dqn-maze-navigator.svg"],
    githubUrl: "https://github.com/supernbking/dqn-maze-navigator"
  }
];

export function getProjectBySlug(slug: string) {
  return mockProjects.find((project) => project.slug === slug);
}
