import Link from "next/link";

import { SiteHeader } from "@/components/site-header";

export default function NotFoundPage() {
  return (
    <main className="relative min-h-screen bg-paper text-graphite dark:bg-gray-950 dark:text-gray-100">
      <SiteHeader variant="light" />

      <div className="page-header-grid relative overflow-hidden border-b border-ink-blue/8 pb-20 pt-28 dark:border-white/6">
        <div className="mx-auto w-full max-w-3xl px-5 text-center sm:px-8 lg:px-12">
          <p className="font-mono text-[10rem] font-bold leading-none text-ink-blue/12 dark:text-blue-400/8 sm:text-[14rem]">
            404
          </p>
          <p className="-mt-8 font-mono text-[0.82rem] font-semibold uppercase tracking-[0.2em] text-graphite/40 dark:text-gray-500 sm:-mt-12">
            Page Not Found
          </p>
          <p className="mx-auto mt-8 max-w-md text-base leading-7 text-graphite/55 dark:text-gray-400">
            The page you are looking for has drifted off the grid.
          </p>
        </div>
      </div>

      <section className="mx-auto w-full max-w-3xl px-5 pb-24 pt-14 text-center sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            className="rounded-[4px] border border-ink-blue/30 bg-ink-blue px-5 py-3 font-mono text-[0.78rem] font-semibold uppercase text-white transition-all duration-300 hover:bg-ink-blue-deep hover:shadow-[0_8px_24px_rgba(7,84,216,0.28)] dark:border-blue-400/40 dark:bg-blue-600 dark:hover:bg-blue-700"
            href="/"
          >
            Back to Home
          </Link>
          <Link
            className="rounded-[4px] border border-graphite/12 bg-white px-5 py-3 font-mono text-[0.78rem] font-semibold uppercase text-graphite/60 transition-all duration-300 hover:border-ink-blue/25 hover:text-ink-blue dark:border-white/10 dark:bg-gray-900 dark:text-gray-400 dark:hover:border-blue-400/30 dark:hover:text-blue-400"
            href="/blog"
          >
            Read Blog
          </Link>
          <Link
            className="rounded-[4px] border border-graphite/12 bg-white px-5 py-3 font-mono text-[0.78rem] font-semibold uppercase text-graphite/60 transition-all duration-300 hover:border-ink-blue/25 hover:text-ink-blue dark:border-white/10 dark:bg-gray-900 dark:text-gray-400 dark:hover:border-blue-400/30 dark:hover:text-blue-400"
            href="/projects"
          >
            View Works
          </Link>
        </div>
      </section>
    </main>
  );
}
