/** Captura de e-mail para avisos de novas turmas. */
import { useState } from "react";
import { copy } from "@/config/copy";
import { siteConfig } from "@/config/site";
import { submitLead } from "@/integrations/emailMarketing";

export function LeadCaptureForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    try {
      await submitLead({ name: name || undefined, email, consent });
      setStatus("ok");
      setName("");
      setEmail("");
      setConsent(false);
    } catch {
      setStatus("error");
    }
  }

  if (!siteConfig.leadCapture.enabled) return null;

  return (
    <section className="border-b border-border bg-muted/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:py-20">
        <div>
          <h2 className="text-2xl font-bold sm:text-3xl">{copy.lead.title}</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{copy.lead.text}</p>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label htmlFor="lead-nome" className="block text-sm font-medium">
              Nome (opcional)
            </label>
            <input
              id="lead-nome"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full rounded-[5px] border border-input bg-background px-3 py-2.5 text-sm"
            />
          </div>

          <div>
            <label htmlFor="lead-email" className="block text-sm font-medium">
              E-mail
            </label>
            <input
              id="lead-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-[5px] border border-input bg-background px-3 py-2.5 text-sm"
            />
          </div>

          <div className="flex items-start gap-2">
            <input
              id="lead-consent"
              type="checkbox"
              required
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-1"
            />
            <label htmlFor="lead-consent" className="text-xs leading-relaxed text-muted-foreground">
              {copy.lead.microcopy}{" "}
              <a href="/privacidade" className="text-secondary underline">
                Política de Privacidade
              </a>
              .
            </label>
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex rounded-[5px] bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-[#d19f08] disabled:opacity-60"
          >
            {status === "sending" ? "Enviando..." : "Quero receber avisos"}
          </button>

          <p aria-live="polite" className="text-sm">
            {status === "ok" ? <span className="text-secondary">{copy.lead.success}</span> : null}
            {status === "error" ? <span className="text-destructive">{copy.lead.error}</span> : null}
          </p>
        </form>
      </div>
    </section>
  );
}
