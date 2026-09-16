/** Primeira seção da página. */
import { copy } from "@/config/copy";
import { siteConfig } from "@/config/site";
import { BrainTrail } from "./BrainTrail";
import { CtaButton } from "./CtaButton";

export function Hero() {
  return (
    <section id="sobre" className="border-b border-border">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-secondary">
            {copy.hero.eyebrow}
          </p>
          <h1 className="mt-5 text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
            {copy.hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            {copy.hero.text}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <CtaButton href={siteConfig.primaryCTA.href}>{siteConfig.primaryCTA.label}</CtaButton>
            <CtaButton href={siteConfig.secondaryCTA.href} variant="secundario">
              {siteConfig.secondaryCTA.label}
            </CtaButton>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-foreground/75">
            {copy.hero.proofs.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <span aria-hidden className="size-1.5 bg-primary" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="justify-self-center text-foreground">
          <BrainTrail className="w-[280px] md:w-[360px]" />
        </div>
      </div>
    </section>
  );
}
