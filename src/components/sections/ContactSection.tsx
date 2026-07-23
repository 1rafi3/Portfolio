import { Mail, MapPin, MessageSquare } from "lucide-react";

import { contact } from "@/data/contact";
import { SOCIAL_LINKS } from "@/config/social";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SocialLink } from "@/components/shared/SocialLink";
import { ContactForm } from "@/components/features/ContactForm";

export function ContactSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading variant="page" subtitle="Get in touch">
          Contact
        </SectionHeading>

        <div className="mt-12 grid gap-10 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-xl border border-border/50 bg-card p-6">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>

                {contact.location && (
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Location</p>
                      <p className="text-sm text-muted-foreground">
                        {contact.location}
                      </p>
                    </div>
                  </div>
                )}

                {contact.responseTime && (
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <MessageSquare className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Response Time</p>
                      <p className="text-sm text-muted-foreground">
                        {contact.responseTime}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="rounded-xl border border-border/50 bg-card p-6">
              <p className="mb-4 text-sm font-medium text-foreground">
                Social Links
              </p>
              <div className="flex gap-2">
                {SOCIAL_LINKS.filter((s) => s.active !== false).map(
                  (social) => (
                    <SocialLink
                      key={social.platform}
                      href={social.url}
                      label={social.label}
                      icon={social.icon}
                    />
                  ),
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            {contact.contactForm.enabled && (
              <ContactForm endpoint={contact.contactForm.endpoint} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
