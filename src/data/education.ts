import type { IEducation } from "@/types/education";

export const education: IEducation[] = [
  {
    institution: "PDB High School",
    degree: "Secondary School Certificate (SSC)",
    duration: {
      start: "2016",
      end: "2018",
    },
  },
  {
    institution: "Shah Khurram Degree College",
    degree: "Higher Secondary Certificate (HSC)",
    duration: {
      start: "2018",
      end: "2020",
    },
  },
  {
    institution: "Sylhet Metropolitan University",
    degree: "BSc in Computer Science & Engineering",
    duration: {
      start: "2022",
      end: "Present",
    },
    cgpa: "3.92",
    achievements: [
      "Currently in 2nd Year, 2nd Semester",
      "Maintaining a strong academic record with CGPA 3.92",
    ],
  },
];
