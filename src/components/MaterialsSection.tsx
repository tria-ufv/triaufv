/** Seção "O que está incluso na Trilha de Aprendizagem". */
import { copy } from "@/config/copy";
import { materials } from "@/config/course";
import { SectionHeading } from "./SectionHeading";

export function MaterialsSection() {
  return (
    <section className="border-b border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionHeading title={copy.materials.title} />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {materials.map((m) => (
            <li key={m.title} className="rounded-[14px] border border-border bg-background p-6">
              <p className="font-titulo text-lg font-bold text-secondary">{m.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
