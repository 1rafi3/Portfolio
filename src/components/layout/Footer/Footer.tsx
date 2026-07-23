import Link from "next/link";

import { FOOTER } from "@/config/footer";
import { NAVIGATION } from "@/config/navigation";
import { SOCIAL_LINKS } from "@/config/social";
import { SocialLink } from "@/components/shared/SocialLink";

export function Footer() {
  return (
    <footer className="border-t border-border/50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between">
          {FOOTER.showNavigation && (
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              {NAVIGATION.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          )}

          {FOOTER.showSocialLinks && (
            <div className="flex gap-1.5">
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
          )}
        </div>

        <div className="mt-10 border-t border-border/30 pt-6">
          <p className="text-center text-xs text-muted-foreground/60">
            {FOOTER.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
