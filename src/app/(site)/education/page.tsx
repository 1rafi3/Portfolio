import type { Metadata } from "next";

import { SEO } from "@/config/seo";
import { EducationSection } from "@/components/sections/EducationSection";

export const metadata: Metadata = {
  title: "Education",
  description:
    "Academic background of MD Sheik Rafiwol Karim Rafi — currently pursuing BSc in Computer Science & Engineering at Sylhet Metropolitan University with a CGPA of 3.92.",
  openGraph: {
    title: "Education — " + SEO.openGraph.title,
    description:
      "Academic background including BSc in CSE at Sylhet Metropolitan University with CGPA 3.92.",
  },
};

export default function EducationPage() {
  return <EducationSection />;
}
