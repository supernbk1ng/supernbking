export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  category: string;
  summary: string;
  stack: string[];
  gradient: string;
  accent: string;
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
    stack: ["Next.js", "TypeScript", "Tailwind"],
    gradient:
      "linear-gradient(135deg, #d9ecff 0%, #7bb8ff 48%, #183f8f 100%)",
    accent: "#7bb8ff"
  },
  {
    slug: "pixel-garden",
    title: "Pixel Garden",
    subtitle: "Tiny generative playground",
    year: "2025",
    category: "Creative Code",
    summary:
      "A browser-based sketchbook for pixel plants, color systems, and soft motion studies.",
    stack: ["React", "Canvas", "Framer Motion"],
    gradient:
      "linear-gradient(135deg, #f7e36f 0%, #52c878 42%, #045236 100%)",
    accent: "#f7e36f"
  },
  {
    slug: "task-lighthouse",
    title: "Task Lighthouse",
    subtitle: "Minimal student planner",
    year: "2025",
    category: "Productivity",
    summary:
      "A focused dashboard for assignment deadlines, exam blocks, and daily execution.",
    stack: ["Next.js", "Local Data", "CSS"],
    gradient:
      "linear-gradient(135deg, #fff4e5 0%, #ff9f6e 48%, #49302d 100%)",
    accent: "#ff9f6e"
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
  }
];

export function getProjectBySlug(slug: string) {
  return mockProjects.find((project) => project.slug === slug);
}
