/** Um módulo da trilha, com tópicos que abrem e fecham. */
import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Module = {
  number: string;
  title: string;
  hours: string;
  summary: string;
  topics: string[];
};

export function ModuleCard({ module }: { module: Module }) {
  const [open, setOpen] = useState(false);
  const painelId = `topicos-modulo-${module.number}`;

  return (
    <article className="rounded-[8px] border border-border bg-card p-6">
      <div className="flex items-baseline gap-3">
        <span className="font-titulo text-3xl font-bold text-primary">{module.number}</span>
        <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          {module.hours}
        </span>
      </div>

      <h3 className="mt-3 text-lg font-semibold leading-snug">{module.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{module.summary}</p>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={painelId}
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:underline"
      >
        Ver tópicos
        <ChevronDown className={`size-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open ? (
        <ul id={painelId} className="mt-4 space-y-2 border-t border-border pt-4 text-sm">
          {module.topics.map((t) => (
            <li key={t} className="flex gap-2">
              <span aria-hidden className="mt-2 size-1.5 shrink-0 bg-primary" />
              {t}
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
