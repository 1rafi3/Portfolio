interface ISectionHeadingProps {
  children: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  variant?: "page" | "section";
}

export function SectionHeading({
  children,
  subtitle,
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
