import Link from "next/link";
import { ArrowRight, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function CTASection() {
  return (
    <ScrollReveal>
      <section className="section-alt px-4 py-10 lg:py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Let&apos;s Work Together
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Have a project in mind or just want to say hello? I&apos;d love to
          hear from you.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button render={<Link href="/contact" />}>
            <Send className="h-4 w-4" />
            Get in Touch
          </Button>
          <Button variant="outline" render={<Link href="/projects" />}>
            View Projects
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      </section>
    </ScrollReveal>
  );
}
