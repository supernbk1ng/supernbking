import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import matter from "gray-matter";

import type { BlogPost } from "@/data/posts";

const contentDir = join(process.cwd(), "src", "content", "blog");

export function getMdxPosts(): BlogPost[] {
  try {
    const files = readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));
    return files.map((file) => {
      const raw = readFileSync(join(contentDir, file), "utf-8");
      const { data } = matter(raw);
      return {
        slug: file.replace(/\.mdx$/, ""),
        title: data.title || "Untitled",
        date: data.date || new Date().toISOString().slice(0, 10),
        category: data.category || "编程开发",
        tags: Array.isArray(data.tags) ? data.tags : [],
        excerpt: data.excerpt || "",
        readingTime: data.readingTime || 5,
        coverImage: data.coverImage,
        sections: [],
        source: "mdx" as const
      };
    });
  } catch {
    return [];
  }
}

export function getMdxPost(slug: string): BlogPost | null {
  return getMdxPosts().find((p) => p.slug === slug) || null;
}

export function getMdxSlugs(): string[] {
  try {
    return readdirSync(contentDir)
      .filter((f) => f.endsWith(".mdx"))
      .map((f) => f.replace(/\.mdx$/, ""));
  } catch {
    return [];
  }
}

// Static import map for MDX components.
// Add an entry for each new .mdx file in src/content/blog/.
const mdxLoaders: Record<
  string,
  () => Promise<{ default: React.ComponentType }>
> = {
  "getting-started-with-react": () =>
    import("@/content/blog/getting-started-with-react.mdx")
};

export async function getMdxComponent(
  slug: string
): Promise<React.ComponentType | null> {
  const loader = mdxLoaders[slug];
  if (!loader) return null;
  const mod = await loader();
  return mod.default;
}
