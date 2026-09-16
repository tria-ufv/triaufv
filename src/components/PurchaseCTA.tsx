/** Seção final de inscrição. */
import { copy } from "@/config/copy";
import { siteConfig } from "@/config/site";
import { CtaButton } from "./CtaButton";

export function PurchaseCTA() {
  const { commercial } = siteConfig;

  return (
    <section id="inscricao" className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <h2 className="max-w-2xl text-3xl font-bold sm:text-4xl md:text-5xl">
          {copy.purchase.title}
        </h2>
        <p className="mt-5 max-w-xl text-base text-white/80">{copy.purchase.text}</p>

        {/* Preço e datas só aparecem quando commercial.enabled = true em src/config/site.ts */}
        {commercial.enabled ? (
          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-3 text-sm text-white/85">
            <div>
              <dt className="uppercase tracking-wide text-white/60">Investimento</dt>
              <dd className="font-titulo text-xl">{commercial.price}</dd>
            </div>
            <div>
              <dt className="uppercase tracking-wide text-white/60">Início da turma</dt>
              <dd className="font-titulo text-xl">{commercial.startDate}</dd>
            </div>
            <div>
              <dt className="uppercase tracking-wide text-white/60">Vagas</dt>
              <dd className="font-titulo text-xl">{commercial.seats}</dd>
            </div>
          </dl>
        ) : null}

        <div className="mt-10">
          <CtaButton href={siteConfig.primaryCTA.href}>{siteConfig.primaryCTA.label}</CtaButton>
        </div>
      </div>
    </section>
  );
}
