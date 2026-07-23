import type { ISkillCategory } from "@/types/skill";

export const skillCategories: ISkillCategory[] = [
  {
    categoryName: "Frontend",
    skills: [
      { name: "Next.js" },
      { name: "React" },
      { name: "JavaScript" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "daisyUI" },
    ],
  },
  {
    categoryName: "Languages",
    skills: [
      { name: "C" },
      { name: "C++" },
      { name: "JavaScript" },
      { name: "Python" },
    ],
  },
  {
    categoryName: "Tools & Platforms",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Vercel" },
    ],
  },
];
