import { Code2, Sparkles, Rocket, Lightbulb } from "lucide-react";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { StaggerContainer } from "@/components/shared/StaggerContainer";
import { StaggerItem } from "@/components/shared/StaggerItem";

const REASONS = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "I write maintainable, well-structured code that scales. Every project follows consistent patterns and best practices.",
  },
  {
    icon: Sparkles,
    title: "Attention to Detail",
    description:
      "From pixel-perfect UI to smooth micro-interactions, I care about the experience users have with every part of an application.",
  },
  {
    icon: Rocket,
    title: "Fast & Modern",
    description:
      "Leveraging cutting-edge tools like Next.js, React, and Tailwind CSS to build performant, accessible web applications.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description:
      "I enjoy tackling complex challenges and finding creative, efficient solutions that balance business needs with technical excellence.",
  },
];

export function WhyWorkWithMeSection() {
  return (
    <ScrollReveal>
      <section className="px-4 py-10 lg:py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading variant="page" subtitle="What I bring to every project">
            Why Work With Me
          </SectionHeading>

          <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2">
            {REASONS.map((reason) => (
              <StaggerItem key={reason.title}>
                <div className="group rounded-lg border border-border/50 bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md hover:shadow-primary/5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-200 group-hover:bg-primary/15 group-hover:scale-110">
                    <reason.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-foreground">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </ScrollReveal>
  );
}
