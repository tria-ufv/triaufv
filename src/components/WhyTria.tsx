/** Seção "Por que TrIA?" com os três pilares. */
import { copy } from "@/config/copy";
import { SectionHeading } from "./SectionHeading";

export function WhyTria() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionHeading title={copy.why.title} text={copy.why.text} />

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {copy.why.pillars.map((p) => (
            <div key={p.number} className="border-t-2 border-foreground pt-5">
              <p className="font-titulo text-4xl font-bold text-primary">{p.number}</p>
              <h3 className="mt-3 text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
