interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  theme?: "light" | "dark";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  theme = "light",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isDark = theme === "dark";
  return (
    <div className={isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <span
          className={
            isDark
              ? "inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-electric-blue"
              : "inline-block rounded-full bg-electric-blue/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-electric-blue"
          }
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={
          isDark
            ? "font-display mt-4 text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl"
            : "font-display mt-4 text-3xl font-semibold tracking-tight text-balance text-deep-blue sm:text-4xl"
        }
      >
        {title}
      </h2>
      {description ? (
        <p className={isDark ? "mt-4 text-base leading-relaxed text-white/60" : "mt-4 text-base leading-relaxed text-foreground/65"}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
