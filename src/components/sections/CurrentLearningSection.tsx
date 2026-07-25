import { BookOpen, Brain, Globe, Database } from "lucide-react";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { StaggerContainer } from "@/components/shared/StaggerContainer";
import { StaggerItem } from "@/components/shared/StaggerItem";

const CURRENT_FOCUS = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Exploring LLMs, prompt engineering, and integrating AI capabilities into web applications.",
  },
  {
    icon: Database,
    title: "Backend Architecture",
    description:
      "Deepening my understanding of databases, API design, and server-side architecture patterns.",
  },
  {
    icon: Globe,
    title: "Full-Stack Integration",
    description:
      "Building end-to-end applications that connect modern frontends with robust backends.",
  },
  {
    icon: BookOpen,
    title: "Computer Science Fundamentals",
    description:
      "Strengthening my foundation in algorithms, data structures, and software engineering principles.",
  },
];

export function CurrentLearningSection() {
  return (
    <ScrollReveal>
      <section className="px-4 py-10 lg:py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading variant="page" subtitle="What I am currently exploring and building">
            Currently Learning
          </SectionHeading>

          <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2">
            {CURRENT_FOCUS.map((item) => (
              <StaggerItem key={item.title}>
                <div className="group flex items-start gap-4 rounded-lg border border-border/50 bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md hover:shadow-primary/5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-200 group-hover:bg-primary/15 group-hover:scale-110">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </ScrollReveal>
  );
}
