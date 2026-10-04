/** Topo do site: logo, links e botão principal. */
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { BrandLogo } from "./BrandLogo";
import { CtaButton } from "./CtaButton";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-background ${
        scrolled ? "border-b border-border" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="/" aria-label="TrIA — página inicial">
          <BrandLogo className={`h-14 md:h-16 transition-opacity duration-300 ${scrolled ? "opacity-100" : "pointer-events-none opacity-0"}`} />
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Menu principal">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <CtaButton
            href={siteConfig.primaryCTA.href}
            className="hidden px-5 py-2.5 md:inline-flex"
          >
            {siteConfig.primaryCTA.label}
          </CtaButton>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="rounded-[5px] border border-border p-2 md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? <MobileMenu onClose={() => setOpen(false)} /> : null}
    </header>
  );
}
