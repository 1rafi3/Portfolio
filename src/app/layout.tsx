import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";
import { SITE } from "@/config/site";
import { SEO } from "@/config/seo";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { ToastContainer } from "@/components/shared/Toast";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — Full-Stack Developer`,
    template: `%s — ${SITE.name}`,
  },
  description: SEO.description,
  keywords: [...SEO.keywords],
  openGraph: {
    title: SEO.openGraph.title,
    description: SEO.openGraph.description,
    type: SEO.openGraph.type,
    locale: SEO.openGraph.locale,
  },
  twitter: {
    card: SEO.twitter.card,
  },
  robots: {
    index: SEO.robots.index,
    follow: SEO.robots.follow,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(inter.variable, jetbrainsMono.variable, "font-sans")}
    >
      <body className="antialiased">
        <ThemeProvider>
          {children}
          <ToastContainer />
        </ThemeProvider>
      </body>
    </html>
  );
}
