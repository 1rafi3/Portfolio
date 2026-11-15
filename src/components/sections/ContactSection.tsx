import { Mail, MapPin, MessageSquare } from "lucide-react";

import { contact } from "@/data/contact";
import { SOCIAL_LINKS } from "@/config/social";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SocialLink } from "@/components/shared/SocialLink";
import { ContactForm } from "@/components/features/ContactForm";

export function ContactSection() {
  return (
    <ScrollReveal>
      <section className="relative px-4 py-16 lg:py-24 sm:px-6 lg:px-8 overflow-hidden">
        {/* Ambient glow */}
        <div
          className="ambient-glow w-[500px] h-[500px] -left-48 top-1/2 -translate-y-1/2 opacity-15"
          style={{ backgroundColor: "var(--cyan-accent)" }}
        />

        <div className="relative z-10 mx-auto max-w-5xl">
          <SectionHeading variant="page" label="Get In Touch" subtitle="Have a project in mind, opportunities to discuss, or just want to connect?">
            Contact Me
          </SectionHeading>

          <div className="mt-14 grid gap-8 lg:grid-cols-5">
            <div className="space-y-6 lg:col-span-2">
              <div className="rounded-2xl glass-panel p-7 border border-white/10">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/20 shadow-[0_0_12px_rgba(0,229,255,0.2)]">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-mono uppercase text-muted-foreground tracking-wider">Email</p>
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-sm font-semibold text-foreground transition-colors hover:text-[#00E5FF]"
                      >
                        {contact.email}
                      </a>
                    </div>
                  </div>

                  {contact.location && (
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/20 shadow-[0_0_12px_rgba(0,229,255,0.2)]">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-mono uppercase text-muted-foreground tracking-wider">Location</p>
                        <p className="text-sm font-semibold text-foreground">
                          {contact.location}
                        </p>
                      </div>
                    </div>
                  )}

                  {contact.responseTime && (
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/20 shadow-[0_0_12px_rgba(0,229,255,0.2)]">
                        <MessageSquare className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-mono uppercase text-muted-foreground tracking-wider">Response Time</p>
                        <p className="text-sm font-semibold text-foreground">
                          {contact.responseTime}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="rounded-2xl glass-panel p-6 border border-white/10">
                <p className="mb-4 text-xs font-mono uppercase text-muted-foreground tracking-wider">
                  Direct Profiles
                </p>
                <div className="flex gap-2.5">
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
    </ScrollReveal>
  );
}
