import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SOCIAL_LINKS } from "@/config/social";
import { ArrowUpRight } from "lucide-react";

const GITHUB_LINK = SOCIAL_LINKS.find((s) => s.platform === "GitHub");

export function GitHubActivitySection() {
  return (
    <ScrollReveal>
      <section className="relative px-4 py-16 lg:py-24 sm:px-6 lg:px-8 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-5xl">
          <SectionHeading
            variant="page"
            label="Open Source"
            subtitle="My latest code repositories, contributions, and community collaboration."
          >
            GitHub Activity
          </SectionHeading>

          <div className="mt-14 flex flex-col items-center gap-5 rounded-3xl glass-panel p-10 sm:p-14 text-center border border-white/10 transition-all duration-300 hover:border-[#00E5FF]/40 hover:shadow-[0_25px_50px_rgba(0,0,0,0.5),0_0_25px_rgba(0,229,255,0.15)] group">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/20 shadow-[0_0_20px_rgba(0,229,255,0.2)] transition-transform duration-300 group-hover:scale-110">
              <svg
                className="h-8 w-8"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-foreground">
              GitHub Repositories &amp; Contributions
            </h3>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              I actively build projects, solve problems, and contribute to open source.
              Explore my repositories to inspect my commit history, code structure, and ongoing experiments.
            </p>
            <a
              href={GITHUB_LINK?.url ?? "https://github.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 rounded-full px-6 py-2.5 bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/30 text-sm font-semibold transition-all duration-300 hover:bg-[#00E5FF] hover:text-[#030712] hover:shadow-[0_0_25px_rgba(0,229,255,0.4)]"
            >
              <span>View GitHub Profile</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
