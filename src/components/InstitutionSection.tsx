/** Seção institucional UFV / DPI (bloco azul). */
import { copy } from "@/config/copy";
import { siteConfig } from "@/config/site";
import { SectionHeading } from "./SectionHeading";

export function InstitutionSection() {
  return (
    <section id="ufv" className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionHeading title={copy.institution.title} text={copy.institution.text} invert />
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-white/80">
          {copy.institution.complement}
        </p>
        <a
          href={siteConfig.links.dpi}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-block border-b border-primary pb-1 text-sm font-semibold text-primary"
        >
          {copy.institution.linkLabel}
        </a>
      </div>
    </section>
  );
}
