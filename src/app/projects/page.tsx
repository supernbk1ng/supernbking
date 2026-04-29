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
    <main className="relative min-h-screen overflow-hidden bg-paper text-graphite">
      <SiteHeader variant="light" />

      <section className="flex min-h-screen flex-col px-0 pb-16 pt-28 sm:px-8 lg:px-12">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-5 font-mono text-[0.66rem] font-semibold uppercase text-graphite/62 sm:flex-row sm:items-start sm:justify-between sm:px-0">
          <p>Lumiere Archive</p>
          <div className="sm:text-right">
            <p>Issue 01</p>
            <p>Curated Selection</p>
          </div>
        </div>

        <div className="mx-auto mt-16 w-full max-w-7xl px-5 sm:px-0">
          <h1 className="font-display text-5xl italic leading-none text-graphite sm:text-7xl md:text-8xl">
            Projects
          </h1>
          <p className="mt-4 max-w-[21rem] text-sm leading-6 text-graphite/62 sm:max-w-xl">
            Selected builds from coursework, experiments, and personal product sketches.
          </p>
        </div>

        <ProjectCarousel projects={mockProjects} />
      </section>
    </main>
  );
}
