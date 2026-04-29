import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "supernbking | Portfolio",
  description:
    "A minimal personal blog and project archive built with Next.js, TypeScript, Tailwind CSS, and Framer Motion."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
