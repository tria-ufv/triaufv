/**
 * Analytics desacoplado.
 *
 * Nenhum rastreador é carregado por padrão. Para ativar, mude
 * analytics.enabled para true em src/config/site.ts e escreva o
 * carregamento do seu provedor dentro de loadAnalytics().
 */
import { siteConfig } from "@/config/site";

export function analyticsEnabled(): boolean {
  return siteConfig.analytics.enabled;
}

export function loadAnalytics(): void {
  if (!analyticsEnabled()) return;
  // Exemplo: inserir aqui o script do provedor escolhido.
}
