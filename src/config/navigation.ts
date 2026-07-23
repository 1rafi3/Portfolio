import type { INavLink } from "@/types/common";

export const NAVIGATION: INavLink[] = [
  {
    label: "Home",
    href: "/",
    active: { exact: true },
  },
  {
    label: "About",
    href: "/about",
    active: { exact: true },
  },
  {
    label: "Projects",
    href: "/projects",
    active: { exact: false, pattern: "/projects" },
  },
  {
    label: "Skills",
    href: "/skills",
    active: { exact: true },
  },
  {
    label: "Education",
    href: "/education",
    active: { exact: true },
  },
  {
    label: "Experience",
    href: "/experience",
    active: { exact: true },
  },
  {
    label: "Resume",
    href: "/resume",
    active: { exact: true },
  },
  {
    label: "Contact",
    href: "/contact",
    active: { exact: true },
  },
];
