type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-sky">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-normal text-snow sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? (
        <p className={`mt-5 text-base leading-8 text-slate-300 sm:text-lg ${centered ? "mx-auto max-w-2xl" : "max-w-2xl"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
