interface ISectionHeadingProps {
  children: React.ReactNode;
  subtitle?: string;
  label?: string;
  align?: "center" | "left";
  variant?: "page" | "section";
}

export function SectionHeading({
  children,
  subtitle,
  label,
  align = "center",
  variant = "section",
}: ISectionHeadingProps) {
  const Tag = variant === "page" ? "h1" : "h2";
  const headingSize =
    variant === "page"
      ? "text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
      : "text-3xl font-bold leading-tight tracking-tight sm:text-4xl";

  return (
    <div
      className={`flex flex-col gap-3 ${
        align === "center"
          ? "items-center text-center"
          : "items-start text-left"
      }`}
    >
      {label && (
        <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-[color:var(--cyan-accent)]">
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: "var(--cyan-accent)" }}
          />
          <span>{label}</span>
        </div>
      )}
      <Tag className={headingSize}>
        {children}
      </Tag>
      {subtitle && (
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
