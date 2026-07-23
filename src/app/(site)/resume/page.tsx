import type { Metadata } from "next";

import { SEO } from "@/config/seo";
import { ResumeSection } from "@/components/sections/ResumeSection";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Download the professional resume of MD Sheik Rafiwol Karim Rafi — full-stack developer and Computer Science student.",
  openGraph: {
    title: "Resume — " + SEO.openGraph.title,
    description:
      "Download the professional resume of MD Sheik Rafiwol Karim Rafi.",
  },
};

export default function ResumePage() {
  return <ResumeSection />;
}
