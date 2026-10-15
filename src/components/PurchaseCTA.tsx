/** Seção final de compra: preço, resumo do que está incluso e botão. */
import { copy } from "@/config/copy";
import { siteConfig } from "@/config/site";
import { checkoutSummary } from "@/config/course";
import { CtaButton } from "./CtaButton";
import { UfvDiscount } from "./UfvDiscount";

export function PurchaseCTA() {
  const { commercial } = siteConfig;

  return (
    <section id="inscricao" className="bg-black text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
        <div>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">{copy.purchase.title}</h2>
          <p className="mt-5 max-w-xl text-base text-white/80">{copy.purchase.text}</p>
          <p className="mt-8 inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-black">
            {commercial.highlight}
          </p>
          <p className="mt-5 font-titulo text-5xl font-bold">{commercial.price}</p>
          <p className="mt-1 text-lg text-white/80">{commercial.installments}</p>
          <div className="mt-8">
            <CtaButton href={siteConfig.primaryCTA.href}>{siteConfig.primaryCTA.label}</CtaButton>
          </div>
          <UfvDiscount dark />
        </div>

        <div className="overflow-x-auto rounded-[14px] border border-white/15 bg-white/5 p-5">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-white/70">
            Resumo do que você recebe
          </p>
          <table className="w-full text-left text-sm">
            <thead className="text-white/60">
              <tr>
                <th className="py-2 pr-3 font-medium">O que você recebe</th>
                <th className="py-2 pr-3 font-medium">Como funciona</th>
                <th className="py-2 font-medium">Frequência</th>
              </tr>
            </thead>
            <tbody>
              {checkoutSummary.map((r) => (
                <tr key={r.item} className="border-t border-white/10">
                  <td className="py-2.5 pr-3 font-semibold">{r.item}</td>
                  <td className="py-2.5 pr-3 text-white/80">{r.how}</td>
                  <td className="py-2.5 text-white/80">{r.freq}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
