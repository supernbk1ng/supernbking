import { SiteHeader } from "@/components/site-header";

type PlaceholderPageProps = {
  eyebrow: string;
  title: string;
  copy: string;
};

export function PlaceholderPage({ eyebrow, title, copy }: PlaceholderPageProps) {
  return (
    <main className="relative min-h-screen bg-paper text-graphite">
      <SiteHeader variant="light" />

      <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-5 py-28 sm:px-8 lg:px-12">
        <p className="font-mono text-[0.8rem] font-semibold uppercase text-graphite/58">
          {eyebrow}
        </p>
        <h1 className="mt-6 font-display text-6xl italic leading-none sm:text-8xl">
          {title}
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-8 text-graphite/68">
          {copy}
        </p>
      </section>
    </main>
  );
}
