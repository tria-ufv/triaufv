/** Primeira seção da página: logo grande, título, subtítulo, botões e cartão do curso. */
import { copy } from "@/config/copy";
import { siteConfig } from "@/config/site";
import { BrandLogo } from "./BrandLogo";
import { CtaButton } from "./CtaButton";

export function Hero() {
  return (
    <section id="sobre" className="border-b border-border bg-background">
      <div className="mx-auto max-w-4xl px-5 pb-20 pt-14 text-center md:pb-28 md:pt-20">
        <div className="flex justify-center">
          <BrandLogo className="h-28 md:h-40" />
        </div>

        <p className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#eaf1f7] px-4 py-2 text-xs font-semibold text-secondary md:text-sm">
          <span aria-hidden className="size-2 rounded-full bg-accent" />
          {copy.hero.eyebrow}
        </p>

        <h1 className="mx-auto mt-7 max-w-3xl text-4xl font-bold leading-[1.08] sm:text-5xl md:text-6xl">
          {copy.hero.title}
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {copy.hero.text}
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <CtaButton href={siteConfig.primaryCTA.href}>{siteConfig.primaryCTA.label}</CtaButton>
          <CtaButton href={siteConfig.secondaryCTA.href} variant="secundario">
            {siteConfig.secondaryCTA.label}
          </CtaButton>
        </div>

        <div className="mx-auto mt-14 max-w-3xl rounded-[14px] border border-border bg-muted/40 p-6 text-left md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-secondary">
            {copy.hero.card.title}
          </p>
          <dl className="mt-6 grid gap-6 sm:grid-cols-2">
            {copy.hero.card.items.map((item) => (
              <div key={item.destaque} className="border-l-2 border-secondary pl-4">
                <dt className="font-titulo text-lg font-bold">{item.destaque}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.texto}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
