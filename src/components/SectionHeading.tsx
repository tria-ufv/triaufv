/** Título padrão de seção. */
export function SectionHeading({
  title,
  text,
  invert = false,
}: {
  title: string;
  text?: string;
  invert?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">{title}</h2>
      {text ? (
        <p className={`mt-5 text-base leading-relaxed ${invert ? "text-white/85" : "text-muted-foreground"}`}>
          {text}
        </p>
      ) : null}
    </div>
  );
}
