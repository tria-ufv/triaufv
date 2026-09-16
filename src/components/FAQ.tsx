/** Dúvidas frequentes. */
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { copy } from "@/config/copy";
import { faq } from "@/config/course";
import { SectionHeading } from "./SectionHeading";

export function FAQ() {
  const [aberta, setAberta] = useState<number | null>(0);

  return (
    <section id="duvidas" className="border-b border-border">
      <div className="mx-auto max-w-4xl px-5 py-16 md:py-24">
        <SectionHeading title={copy.faq.title} />

        <div className="mt-10 divide-y divide-border border-t border-border">
          {faq.map((item, i) => {
            const open = aberta === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setAberta(open ? null : i)}
                  aria-expanded={open}
                  aria-controls={`faq-${i}`}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-titulo text-base font-semibold">{item.q}</span>
                  <ChevronDown
                    className={`size-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
                  />
                </button>
                {open ? (
                  <p id={`faq-${i}`} className="pb-5 text-sm leading-relaxed text-muted-foreground">
                    {item.a}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
