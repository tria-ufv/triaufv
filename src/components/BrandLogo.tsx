/**
 * Logo da TrIA.
 * Para trocar a logo: substitua o arquivo apontado abaixo.
 */
import logo from "@/assets/logo-tria.png.asset.json";

export function BrandLogo({ className = "h-10" }: { className?: string }) {
  return (
    <img
      src={logo.url}
      alt="TrIA — IA para o seu mundo"
      className={`w-auto ${className}`}
      loading="eager"
    />
  );
}
