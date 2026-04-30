import type { Metadata } from "next";

import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://supernbking.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "supernbking | Creative Developer & CS Student",
    template: "%s | supernbking"
  },
  description:
    "A minimal personal blog and project archive built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Featuring course notes, dev logs, AI/ML deep dives, and curated learning resources.",
  keywords: [
    "supernbking",
    "blog",
    "portfolio",
    "CS student",
    "frontend",
    "Next.js",
    "TypeScript",
    "AI",
    "machine learning",
    "course notes",
    "dev blog"
  ],
  authors: [{ name: "supernbking" }],
  creator: "supernbking",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: siteUrl,
    siteName: "supernbking",
    title: "supernbking | Creative Developer & CS Student",
    description:
      "A minimal personal blog and project archive. Course notes, dev logs, AI/ML deep dives, and curated learning resources.",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "supernbking portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "supernbking | Creative Developer & CS Student",
    description:
      "A minimal personal blog and project archive. Course notes, dev logs, AI/ML deep dives, and curated learning resources.",
    images: [`${siteUrl}/og-image.png`]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "supernbking",
    url: siteUrl,
    description:
      "A minimal personal blog and project archive. Course notes, dev logs, AI/ML deep dives, and curated learning resources.",
    author: {
      "@type": "Person",
      name: "supernbking",
      url: siteUrl
    }
  };

  const themeScript = `
    (function() {
      try {
        var t = localStorage.getItem('theme');
        if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark');
        }
      } catch(e) {}
    })()
  `.replace(/\s+/g, " ").trim();

  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          type="application/ld+json"
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
