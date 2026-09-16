/** Rodapé. */
import { Link } from "@tanstack/react-router";
import { siteConfig } from "@/config/site";
import { BrandLogo } from "./BrandLogo";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="bg-white p-3 inline-block">
            <BrandLogo className="h-12" />
          </div>
          <p className="mt-4 text-sm text-white/70">{siteConfig.brand.tagline}</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">Instituição</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/70">{siteConfig.brand.institution}</p>
          <a
            href={siteConfig.links.ufv}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block text-sm text-white/80 underline"
          >
            ufv.br
          </a>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">Links</h2>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li>
              <Link to="/privacidade" className="underline">
                Política de Privacidade
              </Link>
            </li>
            <li>
              <Link to="/termos" className="underline">
                Termos de Uso
              </Link>
            </li>
            <li>Contato: {siteConfig.links.email}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-white/50">
          © {new Date().getFullYear()} {siteConfig.brand.name} — {siteConfig.brand.institution}
        </p>
      </div>
    </footer>
  );
}
