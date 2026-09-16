/** Seção "Como funciona": grade compacta de fatos do curso. */
import { copy } from "@/config/copy";
import { courseFacts } from "@/config/course";
import { SectionHeading } from "./SectionHeading";

export function CourseFacts() {
  return (
    <section id="como-funciona" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionHeading title={copy.facts.title} />

        <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
          {courseFacts.map((f) => (
            <div key={f.value} className="bg-background p-6">
              <dt className="font-titulo text-xl font-bold">{f.value}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
