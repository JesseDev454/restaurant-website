type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      {eyebrow ? (
        <span
          className={[
            "mb-2 block text-xs font-bold uppercase tracking-[0.2em]",
            light ? "text-primary-fixed" : "text-tertiary",
          ].join(" ")}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={[
          "font-headline text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl",
          light ? "text-white" : "text-on-surface",
        ].join(" ")}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={[
            "mt-4 max-w-2xl text-sm leading-7 sm:text-base",
            align === "center" ? "mx-auto" : "",
            light ? "text-orange-50/90" : "text-on-surface-variant",
          ].join(" ")}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
