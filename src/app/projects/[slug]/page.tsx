import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
    <main className="relative min-h-screen bg-paper text-graphite dark:bg-gray-950 dark:text-gray-100">
      <SiteHeader variant="light" />

      <div className="page-header-grid relative overflow-hidden border-b border-ink-blue/8 pb-12 pt-28 dark:border-white/6">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-12">
          <Link
            className="inline-flex items-center gap-2 font-mono text-[0.75rem] font-semibold uppercase text-graphite/45 transition-colors hover:text-ink-blue dark:text-gray-400 dark:hover:text-blue-400"
            href="/projects"
          >
            <span aria-hidden="true">&larr;</span>
            Back to Projects
          </Link>
        </div>
      </div>

      <section className="mx-auto w-full max-w-6xl px-5 py-10 pb-24 sm:px-8 lg:px-12">
        <p className="font-mono text-[0.8rem] font-semibold uppercase">
          <span className="rounded-[4px] border border-ink-blue/20 bg-ink-blue/[0.05] px-2 py-0.5 text-ink-blue/80 dark:border-blue-400/25 dark:bg-blue-400/8 dark:text-blue-400">
            {project.category}
          </span>
          <span className="ml-3 text-graphite/40 dark:text-gray-500">{project.year}</span>
        </p>
        <h1 className="mt-6 max-w-4xl font-display text-6xl italic leading-none text-ink-blue sm:text-8xl dark:text-blue-400">
          {project.title}
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-8 text-graphite/68 dark:text-gray-300">
          {project.summary}
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              className="rounded-[4px] border border-graphite/12 bg-white/60 px-3 py-2 font-mono text-[0.78rem] font-semibold uppercase text-graphite/72 dark:border-white/10 dark:bg-gray-900/60 dark:text-gray-300"
              key={item}
            >
              {item}
            </span>
          ))}
        </div>

        {(project.githubUrl || project.demoUrl) && (
          <div className="mt-8 flex flex-wrap gap-4">
            {project.githubUrl && (
              <a
                className="inline-flex items-center gap-2 rounded-[4px] border border-graphite/12 bg-white px-5 py-3 font-mono text-[0.78rem] font-semibold uppercase text-graphite/72 transition-colors hover:border-ink-blue/20 hover:text-ink-blue dark:border-white/10 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-blue-400/30 dark:hover:text-blue-400"
                href={project.githubUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub &rarr;
              </a>
            )}
            {project.demoUrl && (
              <a
                className="inline-flex items-center gap-2 rounded-[4px] border border-graphite/12 bg-white px-5 py-3 font-mono text-[0.78rem] font-semibold uppercase text-graphite/72 transition-colors hover:border-ink-blue/20 hover:text-ink-blue dark:border-white/10 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-blue-400/30 dark:hover:text-blue-400"
                href={project.demoUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                Live Demo &rarr;
              </a>
            )}
          </div>
        )}

        {project.description && (
          <>
            <hr className="mt-12 border-graphite/8 dark:border-white/8" />
            <div className="mt-10 max-w-3xl">
              <h2 className="font-display text-2xl italic text-graphite dark:text-white sm:text-3xl">
                About
              </h2>
              <div className="mt-5 space-y-4 text-base leading-[1.85] text-graphite/72 dark:text-gray-300">
                {project.description.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          </>
        )}

        {project.screenshots && project.screenshots.length > 0 && (
          <>
            <hr className="mt-12 border-graphite/8 dark:border-white/8" />
            <div className="mt-10">
              <h2 className="font-display text-2xl italic text-graphite dark:text-white sm:text-3xl">
                Screenshots
              </h2>
              <div className="mt-5 grid gap-6 sm:grid-cols-2">
                {project.screenshots.map((src, i) => (
                  <div
                    className="relative aspect-video overflow-hidden rounded-[4px] border border-graphite/8 dark:border-white/8"
                    key={i}
                  >
                    <Image
                      alt={`${project.title} screenshot ${i + 1}`}
                      className="object-cover"
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      src={src}
                    />
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {project.coverImage && (
          <div className="relative mt-12 aspect-[2/1] w-full max-w-3xl overflow-hidden rounded-[4px] border border-graphite/8 dark:border-white/8">
            <Image
              alt={`${project.title} cover`}
              className="object-cover"
              fill
              sizes="(max-width: 768px) 100vw, 700px"
              src={project.coverImage}
            />
          </div>
        )}
      </section>
    </main>
  );
}
