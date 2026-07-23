import type { Availability } from "./hero";

export type ContactFormField = "name" | "email" | "subject" | "message";

export interface IContactFormConfig {
  enabled: boolean;
  endpoint: string;
  fields: ContactFormField[];
}

export interface IContact {
  email: string;
  phone?: string;
  whatsapp?: string;
  linkedin: string;
  github: string;
  twitter?: string;
  facebook?: string;
  location?: string;
  availability: Availability;
  responseTime?: string;
  contactForm: IContactFormConfig;
}
