import type { ISkillCategory } from "@/types/skill";

export const skillCategories: ISkillCategory[] = [
  {
    categoryName: "Frontend",
    skills: [
      { name: "Next.js", category: "Frontend" },
      { name: "React", category: "Frontend" },
      { name: "JavaScript", category: "Frontend" },
      { name: "HTML5", category: "Frontend" },
      { name: "CSS3", category: "Frontend" },
      { name: "daisyUI", category: "Frontend" },
    ],
  },
  {
    categoryName: "Languages",
    skills: [
      { name: "C", category: "Languages" },
      { name: "C++", category: "Languages" },
      { name: "JavaScript", category: "Languages" },
      { name: "Python", category: "Languages" },
    ],
  },
  {
    categoryName: "Tools & Platforms",
    skills: [
      { name: "Git", category: "Tools & Platforms" },
      { name: "GitHub", category: "Tools & Platforms" },
      { name: "Vercel", category: "Tools & Platforms" },
    ],
  },
];
