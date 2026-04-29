import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SiteHeader } from "@/components/site-header";
import { getPostBySlug, mockPosts } from "@/data/posts";

type BlogDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return mockPosts.map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({
  params
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found | supernbking" };
  }

  return {
    title: `${post.title} | supernbking`,
    description: post.excerpt
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="relative min-h-screen bg-paper text-graphite">
      <SiteHeader variant="light" />

      <div className="page-header-grid relative overflow-hidden border-b border-ink-blue/8 pb-12 pt-28">
        <div className="mx-auto w-full max-w-3xl px-5 sm:px-8 lg:px-12">
          <Link
            className="inline-flex items-center gap-2 font-mono text-[0.75rem] font-semibold uppercase text-graphite/45 transition-colors hover:text-ink-blue"
            href="/blog"
          >
            <span aria-hidden="true">&larr;</span>
            Back to Blog
          </Link>
        </div>
      </div>

      <article className="mx-auto w-full max-w-3xl px-5 pb-24 pt-10 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-center gap-3 font-mono text-[0.75rem] font-semibold uppercase">
          <span className="rounded-[4px] border border-ink-blue/20 bg-ink-blue/[0.05] px-2 py-0.5 text-ink-blue/80">
            {post.category}
          </span>
          <span className="text-graphite/25" aria-hidden="true">
            /
          </span>
          <time className="text-graphite/50" dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("zh-CN", {
              year: "numeric",
              month: "long",
              day: "numeric"
            })}
          </time>
          <span className="text-graphite/25" aria-hidden="true">
            /
          </span>
          <span className="text-graphite/50">{post.readingTime} min read</span>
        </div>

        <h1 className="mt-8 font-display text-4xl italic leading-tight text-graphite sm:text-5xl">
          {post.title}
        </h1>

        <p className="mt-6 text-base leading-8 text-graphite/62">
          {post.excerpt}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              className="font-mono text-[0.72rem] font-medium uppercase text-graphite/40"
              key={tag}
            >
              #{tag}
            </span>
          ))}
        </div>

        <hr className="mt-14 border-graphite/8" />

        <div className="mt-14 space-y-16">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-2xl italic text-graphite sm:text-3xl">
                {section.heading}
              </h2>
              <div className="mt-5 space-y-4 text-base leading-[1.85] text-graphite/72">
                {section.body.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <hr className="mt-20 border-graphite/8" />

        <footer className="mt-10 font-mono text-[0.75rem] text-graphite/35">
          <p>
            Published{" "}
            {new Date(post.date).toLocaleDateString("zh-CN", {
              year: "numeric",
              month: "long",
              day: "numeric"
            })}
          </p>
          <p className="mt-1">Content is for personal study purposes only.</p>
        </footer>
      </article>
    </main>
  );
}
