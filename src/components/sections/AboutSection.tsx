import { about } from "@/data/about";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function AboutSection() {
  return (
    <ScrollReveal>
      <section className="relative px-4 py-16 lg:py-24 sm:px-6 lg:px-8 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-4xl">
          <SectionHeading align="left" variant="page" label="Biography" subtitle="Get to know my journey, vision, and core mindset.">
            About Me
          </SectionHeading>

          {about.biography.length > 0 && (
            <div className="mt-10 space-y-4">
              {about.biography.map((paragraph, i) => (
                <p key={i} className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          )}

          {about.personality && about.personality.length > 0 && (
            <div className="mt-12 rounded-2xl glass-panel p-7 border border-white/10">
              <h3 className="text-lg font-bold text-foreground">Personality &amp; Approach</h3>
              <ul className="mt-5 grid gap-3.5 sm:grid-cols-2">
                {about.personality.map((trait, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#00E5FF]" />
                    <span>{trait}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {about.interests && about.interests.length > 0 && (
            <div className="mt-8 rounded-2xl glass-panel p-7 border border-white/10">
              <h3 className="text-lg font-bold text-foreground">Interests &amp; Focus Areas</h3>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {about.interests.map((interest, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-3.5 py-1 text-xs font-mono font-medium text-muted-foreground transition-all duration-200 hover:border-[#00E5FF]/40 hover:text-[#00E5FF]"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          )}

          {about.programmingJourney && about.programmingJourney.length > 0 && (
            <div className="mt-8 rounded-2xl glass-panel p-7 border border-white/10">
              <h3 className="text-lg font-bold text-foreground">
                My Journey
              </h3>
              <div className="mt-5 space-y-4">
                {about.programmingJourney.map((step, i) => (
                  <div key={i} className="flex gap-3.5 items-start">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#00E5FF]/10 text-xs font-mono font-bold text-[#00E5FF] border border-[#00E5FF]/20">
                      {i + 1}
                    </span>
                    <p className="pt-0.5 text-sm sm:text-base leading-relaxed text-muted-foreground">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {about.careerGoals && about.careerGoals.length > 0 && (
            <div className="mt-8 rounded-2xl glass-panel p-7 border border-white/10">
              <h3 className="text-lg font-bold text-foreground">
                Career Goals
              </h3>
              <ul className="mt-5 space-y-3">
                {about.careerGoals.map((goal, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#00E5FF]" />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </ScrollReveal>
  );
}
