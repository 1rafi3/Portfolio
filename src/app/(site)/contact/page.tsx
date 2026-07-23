import type { Metadata } from "next";

import { SEO } from "@/config/seo";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with MD Sheik Rafiwol Karim Rafi — send a message via the contact form or connect on LinkedIn and GitHub.",
  openGraph: {
    title: "Contact — " + SEO.openGraph.title,
    description:
      "Get in touch with MD Sheik Rafiwol Karim Rafi via email, LinkedIn, or GitHub.",
  },
};

export default function ContactPage() {
  return <ContactSection />;
}
