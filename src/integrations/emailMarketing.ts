/**
 * Envio do formulário de e-mail.
 *
 * O site não conhece o provedor: ele apenas envia os dados para o endereço
 * configurado em src/config/site.ts (leadCapture.formAction).
 * Nunca coloque chave privada de API aqui — este arquivo roda no navegador.
 */
import { siteConfig } from "@/config/site";

export type Lead = {
  name?: string | undefined;
  email: string;
  consent: boolean;
};

export async function submitLead(lead: Lead): Promise<void> {
  const action = siteConfig.leadCapture.formAction;

  if (!action || action.startsWith("COLOCAR_")) {
    // Ainda sem provedor configurado: apenas registra no console.
    console.info("[TrIA] Endpoint de e-mail não configurado. Dados recebidos:", lead);
    return;
  }

  const body = new FormData();
  if (lead.name) body.append("name", lead.name);
  body.append("email", lead.email);
  body.append("consent", String(lead.consent));

  const response = await fetch(action, { method: "POST", body });
  if (!response.ok) throw new Error("Falha no envio");
}
