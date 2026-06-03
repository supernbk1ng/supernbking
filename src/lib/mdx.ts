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

export async function getMdxComponent(
  slug: string
): Promise<React.ComponentType | null> {
  const slugs = getMdxSlugs();
  if (!slugs.includes(slug)) return null;

  try {
    const mod = await import(`@/content/blog/${slug}.mdx`);
    return mod.default;
  } catch {
    return null;
  }
}
