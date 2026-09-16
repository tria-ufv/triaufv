/** Menu simples para telas pequenas. */
import { siteConfig } from "@/config/site";
import { CtaButton } from "./CtaButton";

export function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="border-t border-border bg-background md:hidden">
      <nav className="flex flex-col px-5 py-4" aria-label="Menu principal">
        {siteConfig.nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="border-b border-border py-3 text-sm font-medium uppercase tracking-wide"
          >
            {item.label}
          </a>
        ))}
        <CtaButton href={siteConfig.primaryCTA.href} className="mt-4">
          {siteConfig.primaryCTA.label}
        </CtaButton>
      </nav>
    </div>
  );
}
