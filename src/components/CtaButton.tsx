/**
 * Botões do site.
 * "principal" = fundo amarelo com texto preto. "secundario" = borda preta.
 */
type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "principal" | "secundario" | "escuro";
  className?: string;
};

export function CtaButton({ href, children, variant = "principal", className = "" }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-[10px] px-6 py-3 text-sm font-semibold transition-colors";
  const estilos = {
    principal: "bg-primary text-primary-foreground hover:bg-[#1a4667]",
    secundario: "bg-[#eaf1f7] text-secondary hover:bg-[#dbe7f0]",
    escuro: "border border-white text-white hover:bg-white hover:text-black",
  } as const;


  // Links externos (como a página de compra) abrem em uma nova aba.
  const externo = /^https?:\/\//i.test(href);

  return (
    <a
      href={href}
      {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${base} ${estilos[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
