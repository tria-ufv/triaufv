/** Seção "O que você recebe". */
import { copy } from "@/config/copy";
import { materials } from "@/config/course";
import { SectionHeading } from "./SectionHeading";

export function MaterialsSection() {
  return (
    <section className="border-b border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionHeading title={copy.materials.title} />

        <ul className="mt-12 grid gap-x-10 gap-y-4 sm:grid-cols-2">
          {materials.map((m) => (
            <li key={m} className="flex items-start gap-3 border-b border-border pb-4 text-sm">
              <span aria-hidden className="mt-1.5 size-2 shrink-0 bg-primary" />
              {m}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
