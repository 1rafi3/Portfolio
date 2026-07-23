import type { Metadata } from "next";

import { SEO } from "@/config/seo";
import { AboutSection } from "@/components/sections/AboutSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about MD Sheik Rafiwol Karim Rafi — a Computer Science student and aspiring full-stack developer passionate about AI, web development, and building modern applications.",
  openGraph: {
    title: "About — " + SEO.openGraph.title,
    description:
      "Learn more about MD Sheik Rafiwol Karim Rafi — a Computer Science student and aspiring full-stack developer.",
  },
};

export default function AboutPage() {
  return <AboutSection />;
}
