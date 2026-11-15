import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { VenomButton } from "@/components/ui/VenomButton";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function CTASection() {
  return (
    <ScrollReveal>
      <section className="relative px-4 py-24 lg:py-32 sm:px-6 lg:px-8 overflow-hidden text-center">
        {/* Soft atmospheric ambient glow behind the free-floating button */}
        <div
          className="ambient-glow w-[640px] h-[340px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none"
          style={{ backgroundColor: "var(--cyan-accent)" }}
        />

        <div className="relative z-10 mx-auto max-w-3xl flex flex-col items-center">
          {/* Subtle status chip */}
          <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-mono mb-6 bg-[color:var(--cyan-accent)]/10 text-[color:var(--cyan-accent)] border border-[color:var(--cyan-accent)]/20 shadow-sm backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Open for Opportunities</span>
          </div>

          {/* Clean bold headline without any card box */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.12]">
            Ready to build something impactful?
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground max-w-xl mx-auto">
            Whether you have a full-stack project, role opening, or innovative AI product idea — let&apos;s collaborate and bring it to life.
          </p>

          {/* Organic, free-floating WebGL2 Venom Symbiote button */}
          <div className="mt-8 w-full max-w-[560px] h-[190px] sm:h-[220px] flex items-center justify-center relative">
            <VenomButton
              text="let's collaborate"
              link="/contact"
              buttonHeight={58}
              sidePadding={36}
              customCursor={true}
              quality="high"
            />
          </div>

          {/* Clean secondary action */}
          <div className="mt-4">
            <Button
              variant="outline"
              className="rounded-full px-7 py-2.5 text-xs sm:text-sm font-semibold border-white/15 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/30 transition-all duration-300"
              render={<Link href="/projects" />}
            >
              View Projects
              <ArrowRight className="h-4 w-4 ml-1.5" />
            </Button>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
