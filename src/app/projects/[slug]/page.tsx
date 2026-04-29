import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SiteHeader } from "@/components/site-header";
import { getProjectBySlug, mockProjects } from "@/data/projects";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return mockProjects.map((project) => ({
    slug: project.slug
  }));
}

export async function generateMetadata({
  params
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | supernbking"
    };
  }

  return {
    title: `${project.title} | supernbking`,
    description: project.summary
  };
}

export default async function ProjectDetailPage({
  params
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="relative min-h-screen bg-paper text-graphite">
      <SiteHeader variant="light" />

      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-5 py-28 sm:px-8 lg:px-12">
        <p className="font-mono text-[0.68rem] font-semibold uppercase text-graphite/58">
          {project.category} / {project.year}
        </p>
        <h1 className="mt-6 max-w-4xl font-display text-6xl italic leading-none sm:text-8xl">
          {project.title}
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-8 text-graphite/68">
          {project.summary}
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              className="rounded-[4px] border border-graphite/15 bg-white/60 px-3 py-2 font-mono text-[0.66rem] font-semibold uppercase text-graphite/72"
              key={item}
            >
              {item}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
