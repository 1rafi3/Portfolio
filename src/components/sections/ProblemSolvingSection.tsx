import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { StaggerContainer } from "@/components/shared/StaggerContainer";
import { StaggerItem } from "@/components/shared/StaggerItem";
import { TechIcon } from "@/components/shared/TechIcon";
import { problemSolvingData } from "@/data/problemSolving";

export function ProblemSolvingSection() {
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
            label={problemSolvingData.label}
            subtitle={problemSolvingData.subtitle}
          >
            {problemSolvingData.title}
          </SectionHeading>

          <StaggerContainer className="mt-14 grid gap-6 sm:grid-cols-2">
            {problemSolvingData.platforms.map((platform) => (
              <StaggerItem key={platform.name}>
                <div className="group relative flex flex-col justify-between rounded-2xl glass-panel p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#00E5FF]/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_20px_rgba(0,229,255,0.12)]">
                  <div>
                    {/* Header: Icon, Name & Badge */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3.5">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface/80 border border-border/60 p-2.5 transition-all duration-300 group-hover:scale-105 group-hover:border-[#00E5FF]/50 group-hover:shadow-[0_0_15px_rgba(0,229,255,0.25)]">
                          <TechIcon name={platform.iconName} className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-foreground transition-colors group-hover:text-[#00E5FF] light:group-hover:text-cyan-600">
                            {platform.name}
                          </h3>
                          <span className="font-mono text-xs text-muted-foreground">
                            @{platform.handle}
                          </span>
                        </div>
                      </div>

                      <span className="shrink-0 rounded-full border border-border/60 bg-surface/60 px-2.5 py-1 text-[11px] font-mono text-muted-foreground">
                        {platform.badge}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {platform.description}
                    </p>
                  </div>

                  {/* Profile Link Footer */}
                  <div className="mt-6 flex items-center justify-between border-t border-border/40 pt-4">
                    <span className="text-xs font-mono text-muted-foreground">
                      {platform.category}
                    </span>

                    <a
                      href={platform.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00E5FF] transition-all duration-200 hover:gap-2 hover:drop-shadow-[0_0_8px_rgba(0,229,255,0.6)] light:text-cyan-600"
                    >
                      <span>View Profile</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
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
