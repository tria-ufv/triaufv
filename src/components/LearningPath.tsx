/** Seção "A trilha": linha com os quatro módulos. */
import { copy } from "@/config/copy";
import { modules } from "@/config/course";
import { ModuleCard } from "./ModuleCard";
import { SectionHeading } from "./SectionHeading";

export function LearningPath() {
  return (
    <section id="trilha" className="border-b border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionHeading title={copy.path.title} text={copy.path.text} />

        {/* Linha da trilha: horizontal no desktop, vertical no mobile */}
        <div className="relative mt-14">
          <div
            aria-hidden
            className="absolute left-[7px] top-0 h-full w-px bg-foreground/20 md:left-0 md:top-[7px] md:h-px md:w-full"
          />
          <div className="grid gap-8 md:grid-cols-4">
            {modules.map((m) => (
              <div key={m.number} className="relative pl-8 md:pl-0 md:pt-8">
                <span
                  aria-hidden
                  className="absolute left-0 top-2 size-4 rounded-full border-2 border-foreground bg-primary md:left-0 md:top-0"
                />
                <ModuleCard module={m} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
