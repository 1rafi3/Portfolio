import { Code2, BriefcaseBusiness, Mail, Globe } from "lucide-react";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Code2,
  linkedin: BriefcaseBusiness,
  mail: Mail,
  globe: Globe,
};

interface ISocialLinkProps {
  href: string;
  label: string;
  icon: string;
}

export function SocialLink({ href, label, icon }: ISocialLinkProps) {
  const Icon = ICON_MAP[icon] ?? Globe;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/50 text-muted-foreground transition-all duration-200 hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
    >
      <Icon className="h-4 w-4" />
    </a>
  );
}
