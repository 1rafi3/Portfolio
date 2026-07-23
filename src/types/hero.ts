import type { IImage } from "./common";

export type Status = "employed" | "freelance" | "open" | "unavailable";

export type Availability =
  | "immediate"
  | "two-weeks"
  | "one-month"
  | "not-available";

export interface ICTAButton {
  label: string;
  href: string;
  variant: "primary" | "secondary" | "outline";
  icon?: string;
}

export interface IResumeLink {
  label: string;
  url: string;
  fileSize?: string;
}

export interface IHero {
  name: string;
  professionalTitle: string;
  shortIntroduction: string;
  professionalSummary?: string;
  ctaButtons: ICTAButton[];
  resume?: IResumeLink;
  professionalPhoto?: IImage;
  status: Status;
  availability: Availability;
}
