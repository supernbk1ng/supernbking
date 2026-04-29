import type { Metadata } from "next";

import { SiteHeader } from "@/components/site-header";
import { BlogList } from "./blog-list";

export const metadata: Metadata = {
  title: "Blog | supernbking",
  description:
    "课程笔记、编程开发、AI/机器学习与读书笔记的个人写作存档。"
};

export default function BlogPage() {
  return (
    <main className="relative min-h-screen bg-paper text-graphite">
      <SiteHeader variant="light" />

      <div className="page-header-grid relative overflow-hidden border-b border-ink-blue/8 pb-16 pt-28">
        <div className="mx-auto w-full max-w-4xl px-5 sm:px-8 lg:px-12">
          <p className="font-mono text-[0.8rem] font-semibold uppercase text-graphite/58">
            Writing Archive
          </p>
          <h1 className="mt-6 font-display text-6xl italic leading-none text-ink-blue sm:text-8xl">
            Blog
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-graphite/60">
            课程笔记、技术文章、读书摘录的个人写作存档。按分类筛选，找到你感兴趣的内容。
          </p>
        </div>
      </div>

      <section className="mx-auto w-full max-w-4xl px-5 pb-24 pt-14 sm:px-8 lg:px-12">
        <BlogList />
      </section>
    </main>
  );
}
