import { Code2, Sparkles, Rocket, Lightbulb } from "lucide-react";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { StaggerContainer } from "@/components/shared/StaggerContainer";
import { StaggerItem } from "@/components/shared/StaggerItem";
import { HOMEPAGE } from "@/data/homepage";

const REASON_ICONS = [Code2, Sparkles, Rocket, Lightbulb] as const;

export function WhyWorkWithMeSection() {
  return (
    <ScrollReveal>
      <section className="relative px-4 py-16 lg:py-24 sm:px-6 lg:px-8 overflow-hidden">
        {/* Subtle ambient glow */}
        <div
          className="ambient-glow w-[500px] h-[500px] -right-48 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none"
          style={{ backgroundColor: "var(--cyan-accent)" }}
        />

        <div className="relative z-10 mx-auto max-w-5xl">
          <SectionHeading
            variant="page"
            label="Value Proposition"
            subtitle="What I bring to every engineering team and client project."
          >
            Why Work With Me
          </SectionHeading>

          <StaggerContainer className="mt-14 grid gap-6 sm:grid-cols-2">
            {HOMEPAGE.whyWorkWithMe.map((reason, i) => {
              const Icon = REASON_ICONS[i] ?? Lightbulb;
              return (
                <StaggerItem key={reason.title}>
                  <div className="group rounded-2xl glass-panel p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#00E5FF]/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_20px_rgba(0,229,255,0.12)]">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--cyan-accent)]/10 text-[color:var(--cyan-accent)] border border-[color:var(--cyan-accent)]/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-[color:var(--cyan-accent)]/15">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-foreground">
                      {reason.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {reason.description}
                    </p>
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
