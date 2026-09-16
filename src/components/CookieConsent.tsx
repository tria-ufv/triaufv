/**
 * Aviso de cookies. Só aparece se analytics.enabled = true em src/config/site.ts.
 */
import { useEffect, useState } from "react";
import { copy } from "@/config/copy";
import { analyticsEnabled, loadAnalytics } from "@/integrations/analytics";

const CHAVE = "tria-cookies";

export function CookieConsent() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    if (!analyticsEnabled()) return;
    const escolha = localStorage.getItem(CHAVE);
    if (escolha === "aceito") loadAnalytics();
    if (!escolha) setVisivel(true);
  }, []);

  if (!visivel) return null;

  function decidir(valor: "aceito" | "recusado") {
    localStorage.setItem(CHAVE, valor);
    if (valor === "aceito") loadAnalytics();
    setVisivel(false);
  }

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-2xl rounded-[6px] border border-border bg-background p-4 shadow-sm">
      <p className="text-sm">{copy.cookies.text}</p>
      <div className="mt-3 flex gap-2">
        <button
          type="button"
          onClick={() => decidir("aceito")}
          className="rounded-[5px] bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
        >
          {copy.cookies.accept}
        </button>
        <button
          type="button"
          onClick={() => decidir("recusado")}
          className="rounded-[5px] border border-foreground px-4 py-2 text-sm font-semibold"
        >
          {copy.cookies.reject}
        </button>
      </div>
    </div>
  );
}
