import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { StaggerContainer } from "@/components/shared/StaggerContainer";
import { StaggerItem } from "@/components/shared/StaggerItem";
import { HOMEPAGE } from "@/data/homepage";

export function DevelopmentPhilosophySection() {
  return (
    <ScrollReveal>
      <section className="px-4 py-10 lg:py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading variant="page" subtitle="The principles that guide my work">
            Development Philosophy
          </SectionHeading>

          <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2">
            {HOMEPAGE.developmentPhilosophy.map((principle) => (
              <StaggerItem key={principle.number}>
                <div className="group rounded-lg border border-border/50 bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md hover:shadow-primary/5">
                  <span className="text-3xl font-bold tracking-tight text-primary/20 transition-colors duration-200 group-hover:text-primary/30">
                    {principle.number}
                  </span>
                  <h3 className="mt-2 text-base font-semibold text-foreground">
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
