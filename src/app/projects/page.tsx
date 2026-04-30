import type { Metadata } from "next";

import { ProjectCarousel } from "@/components/project-carousel";
import { SiteHeader } from "@/components/site-header";
import { mockProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | supernbking",
  description: "Selected student projects and creative coding experiments."
};

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-paper text-graphite dark:bg-gray-950 dark:text-gray-100">
      <SiteHeader variant="light" />

      <div className="page-header-grid relative overflow-hidden border-b border-ink-blue/8 pb-12 pt-28 dark:border-white/6">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-0">
          <div className="flex flex-col gap-3 font-mono text-[0.78rem] font-semibold uppercase text-graphite/62 dark:text-gray-400 sm:flex-row sm:items-start sm:justify-between">
            <p>Lumiere Archive</p>
            <div className="sm:text-right">
              <p>Issue 01</p>
              <p>Curated Selection</p>
            </div>
          </div>

          <h1 className="mt-6 font-display text-6xl italic leading-none text-ink-blue sm:text-7xl md:text-8xl dark:text-blue-400">
            Projects
          </h1>
          <p className="mt-4 max-w-[21rem] text-base leading-6 text-graphite/62 dark:text-gray-400 sm:max-w-xl">
            Selected builds from coursework, experiments, and personal product sketches.
          </p>
        </div>
      </div>

      <section className="flex min-h-screen flex-col px-0 pb-16 sm:px-8 lg:px-12">
        <ProjectCarousel projects={mockProjects} />
      </section>
    </main>
  );
}
