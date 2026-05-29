import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SiteHeader } from "@/components/site-header";
import { ReadingProgress } from "@/components/reading-progress";
import { BackToTop } from "@/components/back-to-top";
import { TableOfContents } from "@/components/table-of-contents";
import { getAdjacentPosts, getPostBySlug, mockPosts } from "@/data/posts";
import { getMdxPost, getMdxComponent, getMdxSlugs } from "@/lib/mdx";

type BlogDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
}

export function generateStaticParams() {
  const mdxSlugs = getMdxSlugs();
  const mdxPaths = mdxSlugs.map((slug) => ({ slug }));
  const mockPaths = mockPosts.map((post) => ({ slug: post.slug }));
  return [...mdxPaths, ...mockPaths];
}

export async function generateMetadata({
  params
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getMdxPost(slug) || getPostBySlug(slug);

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
  const mdxPost = getMdxPost(slug);
  const post = mdxPost || getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const tocItems =
    post.source === "mdx"
      ? []
      : post.sections.map((s) => ({
          heading: s.heading,
          id: slugify(s.heading)
        }));

  const MdxContent = mdxPost ? await getMdxComponent(slug) : null;
  const { prev: prevPost, next: nextPost } = getAdjacentPosts(slug);

  return (
    <main className="relative min-h-screen bg-paper text-graphite dark:bg-gray-950 dark:text-gray-100">
      <ReadingProgress />
      <SiteHeader variant="light" />

      <div className="page-header-grid relative overflow-hidden border-b border-ink-blue/8 pb-12 pt-28 dark:border-white/6">
        <div className="mx-auto w-full max-w-3xl px-5 sm:px-8 lg:px-12">
          <Link
            className="inline-flex items-center gap-2 font-mono text-[0.75rem] font-semibold uppercase text-graphite/45 transition-colors hover:text-ink-blue dark:text-gray-400 dark:hover:text-blue-400"
            href="/blog"
          >
            <span aria-hidden="true">&larr;</span>
            Back to Blog
          </Link>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-12">
        <div className="flex gap-10 lg:gap-16">
          <article className="min-w-0 flex-1 pb-24 pt-10">
            <div className="mx-auto max-w-3xl">
              {post.coverImage && (
                <div className="relative mb-10 aspect-video w-full overflow-hidden rounded-[4px]">
                  <Image
                    alt={post.title}
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, 700px"
                    src={post.coverImage}
                  />
                </div>
              )}

              <div className="flex flex-wrap items-center gap-3 font-mono text-[0.75rem] font-semibold uppercase">
                <span className="rounded-[4px] border border-ink-blue/20 bg-ink-blue/[0.05] px-2 py-0.5 text-ink-blue/80 dark:border-blue-400/25 dark:bg-blue-400/8 dark:text-blue-400">
                  {post.category}
                </span>
                <span className="text-graphite/25 dark:text-gray-600" aria-hidden="true">
                  /
                </span>
                <time className="text-graphite/50 dark:text-gray-400" dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("zh-CN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                  })}
                </time>
                <span className="text-graphite/25 dark:text-gray-600" aria-hidden="true">
                  /
                </span>
                <span className="text-graphite/50 dark:text-gray-400">{post.readingTime} min read</span>
              </div>

              <h1 className="mt-8 font-display text-4xl italic leading-tight text-graphite dark:text-white sm:text-5xl">
                {post.title}
              </h1>

              <p className="mt-6 text-base leading-8 text-graphite/62 dark:text-gray-400">
                {post.excerpt}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Link
                    className="font-mono text-[0.72rem] font-medium uppercase text-graphite/40 transition-colors hover:text-ink-blue dark:text-gray-500 dark:hover:text-blue-400"
                    href={`/blog?tag=${encodeURIComponent(tag)}`}
                    key={tag}
                  >
                    #{tag}
                  </Link>
                ))}
              </div>

              <hr className="mt-14 border-graphite/8 dark:border-white/8" />

              {/* MDX content */}
              {MdxContent ? (
                <div className="mt-14">
                  <MdxContent />
                </div>
              ) : (
                <div className="mt-14 space-y-16">
                  {post.sections.map((section) => (
                    <section id={slugify(section.heading)} key={section.heading}>
                      <h2 className="font-display text-2xl italic text-graphite dark:text-white sm:text-3xl">
                        {section.heading}
                      </h2>
                      <div className="mt-5 space-y-4 text-base leading-[1.85] text-graphite/72 dark:text-gray-300">
                        {section.body.split("\n\n").map((paragraph, i) => (
                          <p key={i}>{paragraph}</p>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              )}

              <hr className="mt-20 border-graphite/8 dark:border-white/8" />

              <footer className="mt-10 font-mono text-[0.75rem] text-graphite/35 dark:text-gray-500">
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

              {(prevPost || nextPost) && (
                <nav className="mt-14 grid grid-cols-2 gap-6 border-t border-graphite/8 pt-10 dark:border-white/8">
                  {prevPost ? (
                    <Link
                      className="group text-left"
                      href={`/blog/${prevPost.slug}`}
                    >
                      <span className="font-mono text-[0.7rem] font-semibold uppercase text-graphite/35 dark:text-gray-500">
                        &larr; Previous
                      </span>
                      <p className="mt-1 font-display text-base italic text-graphite/70 transition-colors group-hover:text-ink-blue dark:text-gray-300 dark:group-hover:text-blue-400">
                        {prevPost.title}
                      </p>
                    </Link>
                  ) : (
                    <div />
                  )}
                  {nextPost ? (
                    <Link
                      className="group text-right"
                      href={`/blog/${nextPost.slug}`}
                    >
                      <span className="font-mono text-[0.7rem] font-semibold uppercase text-graphite/35 dark:text-gray-500">
                        Next &rarr;
                      </span>
                      <p className="mt-1 font-display text-base italic text-graphite/70 transition-colors group-hover:text-ink-blue dark:text-gray-300 dark:group-hover:text-blue-400">
                        {nextPost.title}
                      </p>
                    </Link>
                  ) : (
                    <div />
                  )}
                </nav>
              )}
            </div>
          </article>

          {tocItems.length > 0 && (
            <aside className="hidden w-52 shrink-0 pt-[13.5rem] lg:block">
              <div className="sticky top-24">
                <TableOfContents items={tocItems} />
              </div>
            </aside>
          )}
        </div>
      </div>

      {tocItems.length > 0 && (
        <div className="mx-auto w-full max-w-3xl px-5 pb-4 sm:px-8 lg:hidden">
          <TableOfContents items={tocItems} />
        </div>
      )}

      <BackToTop />
    </main>
  );
}
