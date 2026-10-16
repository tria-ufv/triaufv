/** Seção final de compra: card de checkout com o que está incluso, preço e botão. */
import { Check } from "lucide-react";
import { copy } from "@/config/copy";
import { siteConfig } from "@/config/site";
import { materials } from "@/config/course";
import { CtaButton } from "./CtaButton";
import { UfvDiscount } from "./UfvDiscount";

export function PurchaseCTA() {
  const { commercial } = siteConfig;

  return (
    <section id="inscricao" className="bg-black text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
        <div>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">{copy.purchase.title}</h2>
          <p className="mt-5 max-w-xl text-base text-white/80">{copy.purchase.text}</p>
          <p className="mt-8 inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-black">
            {commercial.highlight}
          </p>
        </div>

        <div className="rounded-[16px] border-2 border-black bg-white p-6 text-black shadow-xl sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            Acesso completo • Extensão UFV
          </p>
          <h3 className="mt-3 text-xl font-bold sm:text-2xl">
            O que está incluso na Trilha de Aprendizagem (TrIA)
          </h3>

          <ul className="mt-6 space-y-4">
            {materials.map((m) => (
              <li key={m.title} className="flex gap-3">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                <div>
                  <p className="font-semibold">{m.title}</p>
                  <p className="text-sm text-black/65">{m.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-7 border-t border-black/10 pt-6">
            <p className="flex flex-wrap items-baseline gap-x-3">
              <span className="font-titulo text-5xl font-bold">{commercial.price}</span>
              <span className="text-black/60">{commercial.installments}</span>
            </p>
            <div className="mt-5 [&>a]:w-full [&>a]:justify-center">
              <CtaButton href={siteConfig.primaryCTA.href}>{siteConfig.primaryCTA.label}</CtaButton>
            </div>
            <p className="mt-3 text-xs text-black/55">
              Pagamento processado em ambiente seguro pela Funarbe/UFV.
            </p>
            <UfvDiscount />
          </div>
        </div>
      </div>
    </section>
  );
}
