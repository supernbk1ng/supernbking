import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children, ...props }) => (
      <h1
        className="mt-10 font-display text-3xl italic text-graphite dark:text-white sm:text-4xl"
        {...props}
      >
        {children}
      </h1>
    ),
    h2: ({ children, ...props }) => (
      <h2
        className="mt-10 font-display text-2xl italic text-graphite dark:text-white sm:text-3xl"
        {...props}
      >
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3
        className="mt-8 font-display text-xl italic text-graphite dark:text-white sm:text-2xl"
        {...props}
      >
        {children}
      </h3>
    ),
    p: ({ children, ...props }) => (
      <p
        className="mt-4 text-base leading-[1.85] text-graphite/72 dark:text-gray-300"
        {...props}
      >
        {children}
      </p>
    ),
    a: ({ children, href, ...props }) => (
      <a
        className="text-ink-blue underline underline-offset-4 transition-colors hover:text-ink-blue-deep dark:text-blue-400 dark:hover:text-blue-300"
        href={href}
        rel="noopener noreferrer"
        target="_blank"
        {...props}
      >
        {children}
      </a>
    ),
    ul: ({ children, ...props }) => (
      <ul
        className="mt-4 list-disc space-y-2 pl-6 text-base leading-[1.85] text-graphite/72 dark:text-gray-300"
        {...props}
      >
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol
        className="mt-4 list-decimal space-y-2 pl-6 text-base leading-[1.85] text-graphite/72 dark:text-gray-300"
        {...props}
      >
        {children}
      </ol>
    ),
    li: ({ children, ...props }) => (
      <li className="pl-1" {...props}>
        {children}
      </li>
    ),
    code: ({ children, className, ...props }) => {
      const isInline = !className;
      return isInline ? (
        <code
          className="rounded-[4px] bg-graphite/[0.06] px-1.5 py-0.5 font-mono text-[0.85em] text-ink-blue dark:bg-white/8 dark:text-blue-400"
          {...props}
        >
          {children}
        </code>
      ) : (
        <code
          className={`hljs-code-block font-mono text-[0.82rem] leading-relaxed ${className || ""}`}
          {...props}
        >
          {children}
        </code>
      );
    },
    pre: ({ children, ...props }) => (
      <pre
        className="mt-4 overflow-x-auto rounded-[4px] border border-graphite/8 bg-graphite/[0.03] p-4 dark:border-white/8 dark:bg-white/[0.03]"
        {...props}
      >
        {children}
      </pre>
    ),
    blockquote: ({ children, ...props }) => (
      <blockquote
        className="mt-4 border-l-2 border-ink-blue/30 pl-4 italic text-graphite/60 dark:border-blue-400/30 dark:text-gray-400"
        {...props}
      >
        {children}
      </blockquote>
    ),
    hr: (props) => (
      <hr
        className="my-12 border-graphite/8 dark:border-white/8"
        {...props}
      />
    ),
    img: ({ src, alt, ...props }) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        alt={alt || ""}
        className="mt-6 rounded-[4px]"
        src={src}
        {...props}
      />
    ),
    ...components
  };
}
