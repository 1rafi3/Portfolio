import type { Metadata } from "next";

import { SEO } from "@/config/seo";
import { ExperienceSection } from "@/components/sections/ExperienceSection";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience of MD Sheik Rafiwol Karim Rafi — full-stack developer skilled in Next.js, React, and modern web technologies.",
  openGraph: {
    title: "Experience — " + SEO.openGraph.title,
    description:
      "Professional experience and work history of MD Sheik Rafiwol Karim Rafi.",
  },
};

export default function ExperiencePage() {
  return <ExperienceSection />;
}
