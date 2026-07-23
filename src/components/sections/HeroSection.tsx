import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

import { hero } from "@/data/hero";
import { SOCIAL_LINKS } from "@/config/social";
import { Button } from "@/components/ui/button";
import { SocialLink } from "@/components/shared/SocialLink";

export function HeroSection() {
  const initials = hero.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-24 sm:px-6 lg:px-8">
      <div className="flex max-w-3xl flex-col items-center text-center">
        <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/5 p-0.5 ring-1 ring-border/50">
          <div className="flex h-full w-full items-center justify-center rounded-full bg-background text-2xl font-bold text-primary">
            {initials}
          </div>
        </div>

        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          {hero.name}
        </h1>

        <p className="mt-5 text-xl font-medium text-primary sm:text-2xl">
          {hero.professionalTitle}
        </p>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {hero.shortIntroduction}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button render={<Link href="/projects" />}>
            View Projects
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button variant="secondary" render={<Link href="/resume" />}>
            <Download className="h-4 w-4" />
            Resume
          </Button>
        </div>

        <div className="mt-10 flex gap-1.5">
          {SOCIAL_LINKS.filter((s) => s.active !== false).map((social) => (
            <SocialLink
              key={social.platform}
              href={social.url}
              label={social.label}
              icon={social.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
