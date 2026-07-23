import type { IImage, IDateRange } from "./common";

export type ProjectStatus =
  | "completed"
  | "in-progress"
  | "maintained"
  | "archived"
  | "open-source";

export interface IProjectLinks {
  github?: string;
  liveDemo?: string;
  caseStudy?: string;
  docs?: string;
}

export interface IProject {
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription?: string;
  thumbnail?: IImage;
  heroImage?: IImage;
  gallery?: IImage[];
  category: string;
  status: ProjectStatus;
  techStack: string[];
  features?: string[];
  challenges?: string[];
  solutions?: string[];
  lessonsLearned?: string[];
  futureImprovements?: string[];
  links?: IProjectLinks;
  timeline?: IDateRange;
  role?: string;
  featured?: boolean;
  order?: number;
}
