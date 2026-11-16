import type { ISkillCategory } from "@/types/skill";

export const skillCategories: ISkillCategory[] = [
  {
    categoryName: "Frontend",
    skills: [
      { name: "React", category: "Frontend" },
      { name: "Next.js", category: "Frontend" },
      { name: "Tailwind CSS", category: "Frontend" },
      { name: "HTML5", category: "Frontend" },
      { name: "CSS3", category: "Frontend" },
      { name: "JavaScript", category: "Frontend" },
      { name: "TypeScript", category: "Frontend" },
    ],
  },
  {
    categoryName: "Backend & Database",
    skills: [
      { name: "Node.js", category: "Backend & Database" },
      { name: "Express.js", category: "Backend & Database" },
      { name: "MySQL", category: "Backend & Database" },
      { name: "MongoDB", category: "Backend & Database" },
      { name: "JWT", category: "Backend & Database" },
    ],
  },
  {
    categoryName: "Programming Languages",
    skills: [
      { name: "C", category: "Programming Languages" },
      { name: "C++", category: "Programming Languages" },
      { name: "Java", category: "Programming Languages" },
      { name: "Python", category: "Programming Languages" },
    ],
  },
  {
    categoryName: "CS Fundamentals & Problem Solving",
    skills: [
      { name: "DSA", category: "CS Fundamentals & Problem Solving" },
      { name: "Competitive Programming (CP)", category: "CS Fundamentals & Problem Solving" },
    ],
  },
  {
    categoryName: "Tools & Platforms",
    skills: [
      { name: "Git", category: "Tools & Platforms" },
      { name: "GitHub", category: "Tools & Platforms" },
      { name: "VS Code", category: "Tools & Platforms" },
      { name: "NetBeans", category: "Tools & Platforms" },
      { name: "XAMPP", category: "Tools & Platforms" },
      { name: "Postman", category: "Tools & Platforms" },
      { name: "Figma", category: "Tools & Platforms" },
    ],
  },
  {
    categoryName: "AI & Machine Learning",
    skills: [
      { name: "OpenAI", category: "AI & Machine Learning" },
      { name: "Gemini", category: "AI & Machine Learning" },
    ],
  },
];
