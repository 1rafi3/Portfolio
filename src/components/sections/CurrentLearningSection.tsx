import { BookOpen, Brain, Globe, Database } from "lucide-react";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { StaggerContainer } from "@/components/shared/StaggerContainer";
import { StaggerItem } from "@/components/shared/StaggerItem";
import { HOMEPAGE } from "@/data/homepage";

const FOCUS_ICONS = [Brain, Database, Globe, BookOpen] as const;

export function CurrentLearningSection() {
  return (
    <ScrollReveal>
      <section className="relative px-4 py-16 lg:py-24 sm:px-6 lg:px-8 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-5xl">
          <SectionHeading
            variant="page"
            label="Continuous Growth"
            subtitle="Technologies, research areas, and architectures I am actively mastering."
          >
            Currently Learning
          </SectionHeading>

          <StaggerContainer className="mt-14 grid gap-6 sm:grid-cols-2">
            {HOMEPAGE.currentLearning.map((item, i) => {
              const Icon = FOCUS_ICONS[i] ?? BookOpen;
              return (
                <StaggerItem key={item.title}>
                  <div className="group flex items-start gap-5 rounded-2xl glass-panel p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#00E5FF]/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_20px_rgba(0,229,255,0.12)]">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[color:var(--cyan-accent)]/10 text-[color:var(--cyan-accent)] border border-[color:var(--cyan-accent)]/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-[color:var(--cyan-accent)]/15">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>
    </ScrollReveal>
  );
}
