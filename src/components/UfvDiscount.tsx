/** Aviso + formulário rápido de desconto de 10% para a comunidade UFV. Os pedidos ficam salvos no banco de dados. */
import { useState, type FormEvent } from "react";
import { supabase } from "@/integrations/supabase/client";
import { siteConfig } from "@/config/site";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function UfvDiscount({ dark = false }: { dark?: boolean }) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error" | "full">("idle");
  const [terceirizado, setTerceirizado] = useState(false);
  const d = siteConfig.ufvDiscount;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const nome = String(f.get("nome") ?? "").trim();
    const email = String(f.get("email") ?? "").trim();
    const matricula = String(f.get("matricula") ?? "").trim();
    const curso = String(f.get("curso") ?? "").trim();
    if (nome.length < 2 || !email.includes("@")) return;
    setStatus("sending");
    const { error } = await supabase.from("descontos_ufv").insert({
      nome: nome.slice(0, 150),
      email: email.slice(0, 200),
      matricula: terceirizado ? null : matricula.slice(0, 40) || null,
      curso: curso.slice(0, 150) || null,
      terceirizado,
    });
    if (error) setStatus(error.message.includes("LIMITE_ATINGIDO") ? "full" : "error");
    else setStatus("ok");
  }

  const input =
    "w-full rounded-[10px] border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-secondary";

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setStatus("idle");
          setOpen(true);
        }}
        className={`mt-4 inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-full px-4 py-2 text-sm transition-colors ${
          dark ? "bg-white/10 text-white hover:bg-white/20" : "bg-[#eaf1f7] text-secondary hover:bg-[#dbe7f0]"
        }`}
      >
        <span className="font-semibold">{d.title}</span>
        <span>{d.text}</span>
        <span className="font-semibold underline underline-offset-2">{d.button} →</span>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Desconto de 10% para a comunidade UFV</DialogTitle>
            <DialogDescription>
              Preencha seus dados. Válido para os 100 primeiros pedidos.
            </DialogDescription>
          </DialogHeader>

          {status === "ok" ? (
            <p className="rounded-[10px] bg-[#eaf1f7] p-4 text-sm text-secondary">
              Pedido recebido! Vamos conferir seus dados e enviar as instruções do desconto para o seu e-mail.
            </p>
          ) : status === "full" ? (
            <p className="rounded-[10px] bg-muted p-4 text-sm">
              As 100 vagas com desconto já foram preenchidas. Obrigado pelo interesse!
            </p>
          ) : (
            <form onSubmit={onSubmit} className="space-y-3">
              <input name="nome" required maxLength={150} placeholder="Nome completo" className={input} />
              <input name="email" type="email" required maxLength={200} placeholder="E-mail" className={input} />
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={terceirizado}
                  onChange={(e) => setTerceirizado(e.target.checked)}
                  className="size-4 accent-[#215780]"
                />
                Sou funcionário terceirizado da UFV
              </label>
              {!terceirizado && (
                <input name="matricula" required maxLength={40} placeholder="Matrícula UFV" className={input} />
              )}
              <input
                name="curso"
                required
                maxLength={150}
                placeholder={terceirizado ? "Setor / empresa" : "Nome do curso ou setor"}
                className={input}
              />
              {status === "error" && (
                <p className="text-sm text-destructive">Não foi possível enviar. Tente novamente.</p>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-[10px] bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground hover:bg-[#1a4667] disabled:opacity-60"
              >
                {status === "sending" ? "Enviando..." : "Solicitar desconto"}
              </button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
