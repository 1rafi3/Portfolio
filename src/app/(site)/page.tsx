import type { Metadata } from "next";

import { SEO } from "@/config/seo";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedProjectsSection } from "@/components/sections/FeaturedProjectsSection";
import { FeaturedSkillsSection } from "@/components/sections/FeaturedSkillsSection";
import { WhyWorkWithMeSection } from "@/components/sections/WhyWorkWithMeSection";
import { DevelopmentPhilosophySection } from "@/components/sections/DevelopmentPhilosophySection";
import { CurrentLearningSection } from "@/components/sections/CurrentLearningSection";
import { GitHubActivitySection } from "@/components/sections/GitHubActivitySection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Full-stack developer portfolio of MD Sheik Rafiwol Karim Rafi — Computer Science student passionate about web development, AI, and building modern applications.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProjectsSection />
      <FeaturedSkillsSection />
      <WhyWorkWithMeSection />
      <DevelopmentPhilosophySection />
      <CurrentLearningSection />
      <GitHubActivitySection />
      <CTASection />
    </>
  );
}
