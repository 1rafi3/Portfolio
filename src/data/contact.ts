import type { IContact } from "@/types/contact";

export const contact: IContact = {
  email: "rwolkorimrafi@gmail.com",
  linkedin: "https://www.linkedin.com/in/rafiwolkarimrafi/",
  github: "https://github.com/1rafi3",
  location: "Bangladesh",
  availability: "immediate",
  responseTime: "Within 24 hours",
  contactForm: {
    enabled: true,
    endpoint: "/api/contact",
    fields: ["name", "email", "subject", "message"],
  },
};
