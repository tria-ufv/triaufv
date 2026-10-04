/**
 * Logo da TrIA.
 * Para trocar a logo: substitua o arquivo src/assets/logo-tria.png
 * (mesmo nome). A imagem vai junto com o site, funciona em qualquer servidor.
 */
import logoUrl from "@/assets/logo-tria.png";

export function BrandLogo({ className = "h-10" }: { className?: string }) {
  return (
    <img
      src={logoUrl}
      alt="TrIA — IA para o seu mundo"
      className={`w-auto ${className}`}
      loading="eager"
    />
  );
}
