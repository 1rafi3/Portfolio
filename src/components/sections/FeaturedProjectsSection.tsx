"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { StaggerContainer } from "@/components/shared/StaggerContainer";
import { StaggerItem } from "@/components/shared/StaggerItem";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { Button } from "@/components/ui/button";

export function FeaturedProjectsSection() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);
  const showButton = true;

  if (featured.length === 0) return null;

  return (
    <ScrollReveal>
      <section className="relative px-4 py-16 lg:py-24 sm:px-6 lg:px-8 overflow-hidden">
        {/* Subtle ambient glow behind featured projects */}
        <div
          className="ambient-glow w-[500px] h-[500px] -left-48 top-1/2 -translate-y-1/2 opacity-10"
          style={{ backgroundColor: "var(--cyan-accent)" }}
        />

        <div className="relative z-10 mx-auto max-w-6xl">
          <SectionHeading
            variant="page"
            label="Selected Works"
            subtitle="A selection of high-impact full-stack and AI applications engineered for performance and reliability."
          >
            Featured Projects
          </SectionHeading>

          <StaggerContainer className="mt-14">
            <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((project) => (
                <StaggerItem key={project.slug}>
                  <ProjectCard project={project} />
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>

          {showButton && (
            <motion.div
              className="mt-14 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <Button
                  variant="default"
                  className="rounded-full px-6 py-2.5 font-semibold shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
                  render={<Link href="/projects" />}
                >
                  View All Projects
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>
    </ScrollReveal>
  );
}
