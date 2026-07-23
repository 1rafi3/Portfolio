import type { IImage, IDateRange } from "./common";

export interface IEducation {
  institution: string;
  degree: string;
  duration: IDateRange;
  achievements?: string[];
  relevantCoursework?: string[];
  cgpa?: string;
  logo?: IImage;
}
