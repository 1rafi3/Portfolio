import type { Metadata } from "next";

import { SEO } from "@/config/seo";
import { SkillsSection } from "@/components/sections/SkillsSection";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Explore the technical skills and technologies of MD Sheik Rafiwol Karim Rafi — including Next.js, React, JavaScript, C, C++, Python, Git, and more.",
  openGraph: {
    title: "Skills — " + SEO.openGraph.title,
    description:
      "Technical skills and technologies including Next.js, React, JavaScript, C, C++, and more.",
  },
};

export default function SkillsPage() {
  return <SkillsSection />;
}
