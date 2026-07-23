import type { IImage, IDateRange } from "./common";

export type EmploymentType =
  | "full-time"
  | "part-time"
  | "internship"
  | "contract"
  | "freelance";

export interface IExperience {
  company: string;
  role: string;
  location?: string;
  duration: IDateRange;
  description?: string;
  technologies?: string[];
  responsibilities: string[];
  achievements?: string[];
  companyUrl?: string;
  companyLogo?: IImage;
  type: EmploymentType;
}
