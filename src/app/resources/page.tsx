import type { Metadata } from "next";

import { SiteHeader } from "@/components/site-header";
import { ResourceGrid } from "./resource-grid";

export const metadata: Metadata = {
  title: "Resources | supernbking",
  description:
    "课程资料、开发工具、学习路线与推荐书籍的精选资源分享。"
};

type ResourcesPageProps = {
  searchParams: Promise<{ tag?: string }>;
};

export default async function ResourcesPage({
  searchParams
}: ResourcesPageProps) {
  const { tag } = await searchParams;

  return (
    <main className="relative min-h-screen bg-paper text-graphite dark:bg-gray-950 dark:text-gray-100">
      <SiteHeader variant="light" />

      <div className="page-header-grid relative overflow-hidden border-b border-ink-blue/8 pb-14 pt-28 dark:border-white/6">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-12">
          <p className="font-mono text-[0.8rem] font-semibold uppercase text-graphite/58 dark:text-gray-400">
            Curated Library
          </p>
          <h1 className="mt-6 font-display text-6xl italic leading-none text-ink-blue sm:text-8xl dark:text-blue-400">
            Resources
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-graphite/60 dark:text-gray-400">
            学习过程中收集的高质量资料、工具和参考资源，持续更新中。
          </p>
        </div>
      </div>

      <section className="mx-auto w-full max-w-6xl px-5 pb-24 pt-10 sm:px-8 lg:px-12">
        <ResourceGrid initialTag={tag || null} />
      </section>
    </main>
  );
}
