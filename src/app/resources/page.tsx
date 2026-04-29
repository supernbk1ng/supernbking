import type { Metadata } from "next";

import { SiteHeader } from "@/components/site-header";
import { ResourceGrid } from "./resource-grid";

export const metadata: Metadata = {
  title: "Resources | supernbking",
  description:
    "课程资料、开发工具、学习路线与推荐书籍的精选资源分享。"
};

export default function ResourcesPage() {
  return (
    <main className="relative min-h-screen bg-paper text-graphite">
      <SiteHeader variant="light" />

      <div className="page-header-grid relative overflow-hidden border-b border-ink-blue/8 pb-14 pt-28">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-12">
          <p className="font-mono text-[0.68rem] font-semibold uppercase text-graphite/58">
            Curated Library
          </p>
          <h1 className="mt-6 font-display text-6xl italic leading-none text-ink-blue sm:text-8xl">
            Resources
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-7 text-graphite/60">
            学习过程中收集的高质量资料、工具和参考资源，持续更新中。
          </p>
        </div>
      </div>

      <section className="mx-auto w-full max-w-6xl px-5 pb-24 pt-10 sm:px-8 lg:px-12">
        <ResourceGrid />
      </section>
    </main>
  );
}
