import type { IOpenGraph, ITwitterCard, IRobotsConfig } from "@/types/common";

export const SEO = {
  title: "MD Sheik Rafiwol Karim Rafi — Full-Stack Developer",
  description:
    "Full-stack developer portfolio of MD Sheik Rafiwol Karim Rafi. Computer Science student passionate about web development, AI, and building modern applications.",
  keywords: [
    "MD Sheik Rafiwol Karim Rafi",
    "Rafi",
    "full-stack developer",
    "web development",
    "react",
    "next.js",
    "portfolio",
    "computer science",
    "Bangladesh",
  ],
  openGraph: {
    title: "MD Sheik Rafiwol Karim Rafi — Full-Stack Developer",
    description:
      "Computer Science student and full-stack developer building modern web applications with Next.js and React.",
    type: "website",
    locale: "en_US",
  } satisfies IOpenGraph,
  twitter: {
    card: "summary_large_image",
  } satisfies ITwitterCard,
  canonicalUrl: "https://portfolio-rafi.vercel.app",
  robots: {
    index: true,
    follow: true,
    sitemap: true,
  } satisfies IRobotsConfig,
} as const;
