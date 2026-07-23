import type { IHero } from "@/types/hero";

export const hero: IHero = {
  name: "MD Sheik Rafiwol Karim Rafi",
  professionalTitle: "Full-Stack Developer",
  shortIntroduction:
    "A passionate full-stack developer building modern web applications",
  professionalSummary:
    "Computer Science student with a strong foundation in full-stack web development. Passionate about crafting intuitive user interfaces and robust backend systems. Currently exploring AI and Machine Learning while building practical applications with modern JavaScript frameworks.",
  ctaButtons: [
    {
      label: "View Projects",
      href: "/projects",
      variant: "primary",
    },
    {
      label: "GitHub",
      href: "https://github.com/1rafi3",
      variant: "outline",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rafiwolkarimrafi/",
      variant: "outline",
      icon: "linkedin",
    },
    {
      label: "Download Resume",
      href: "/resume",
      variant: "secondary",
    },
  ],
  status: "open",
  availability: "immediate",
};
