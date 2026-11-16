import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { StaggerContainer } from "@/components/shared/StaggerContainer";
import { StaggerItem } from "@/components/shared/StaggerItem";
import { HOMEPAGE } from "@/data/homepage";

export function DevelopmentPhilosophySection() {
  return (
    <ScrollReveal>
      <section className="relative px-4 py-16 lg:py-24 sm:px-6 lg:px-8 overflow-hidden">
        {/* Subtle ambient glow */}
        <div
          className="ambient-glow w-[500px] h-[500px] -left-48 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none"
          style={{ backgroundColor: "var(--cyan-accent)" }}
        />

        <div className="relative z-10 mx-auto max-w-5xl">
          <SectionHeading
            variant="page"
            label="Core Principles"
            subtitle="The engineering standards and mindset that guide every architectural decision."
          >
            Development Philosophy
          </SectionHeading>

          <StaggerContainer className="mt-14 grid gap-6 sm:grid-cols-2">
            {HOMEPAGE.developmentPhilosophy.map((principle) => (
              <StaggerItem key={principle.number}>
                <div className="group rounded-2xl glass-panel p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#00E5FF]/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_20px_rgba(0,229,255,0.12)]">
                  <span className="text-3xl sm:text-4xl font-mono font-extrabold tracking-tight text-[#00E5FF]/25 transition-colors duration-300 group-hover:text-[#00E5FF]/60">
                    {principle.number}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-foreground">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {principle.description}
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
