import type { Metadata } from "next";

import { SEO } from "@/config/seo";
import { ProjectsSection } from "@/components/sections/ProjectsSection";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore the projects built by MD Sheik Rafiwol Karim Rafi — including RentNest, IntelliStudy AI, and A09 Client. Built with Next.js, React, and modern web technologies.",
  openGraph: {
    title: "Projects — " + SEO.openGraph.title,
    description:
      "Portfolio projects including RentNest, IntelliStudy AI, and A09 Client.",
  },
};

export default function ProjectsPage() {
  return <ProjectsSection />;
}
