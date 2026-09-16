/** Faixa preta de confiança, logo depois do hero. */
import { copy } from "@/config/copy";

export function TrustStrip() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto flex max-w-5xl items-start gap-4 px-5 py-8">
        <span aria-hidden className="mt-2 h-4 w-1 shrink-0 bg-primary" />
        <p className="text-sm leading-relaxed text-white/90">{copy.trust}</p>
      </div>
    </section>
  );
}
