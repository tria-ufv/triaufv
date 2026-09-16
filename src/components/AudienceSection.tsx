/** Seção "Para quem é". */
import { copy } from "@/config/copy";
import { audience } from "@/config/course";
import { SectionHeading } from "./SectionHeading";

export function AudienceSection() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionHeading title={copy.audience.title} text={copy.audience.text} />

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div className="border-t-2 border-foreground pt-5">
            <h3 className="text-lg font-semibold">Você não precisa</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {audience.notNeeded.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
          <div className="border-t-2 border-primary pt-5">
            <h3 className="text-lg font-semibold">Você precisa</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {audience.needed.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
