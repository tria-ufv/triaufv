/**
 * ARQUIVO 1 DE 3 PARA EDITAR TEXTOS DO SITE
 *
 * Aqui ficam a marca, os botões e os links.
 * Troque apenas o que está entre "aspas".
 */

export const siteConfig = {
  brand: {
    name: "TrIA",
    tagline: "IA para o seu mundo",
    institution: "Universidade Federal de Viçosa — Departamento de Informática (DPI)",
  },

  // Botão principal do site (aparece no topo, no hero e no final da página).
  // Troque o link aqui e ele muda em TODOS os lugares.
  primaryCTA: {
    label: "Garantir minha vaga",
    href: "https://eventos.funarbe.org.br/en/tria",
  },

  secondaryCTA: {
    label: "Conhecer a trilha",
    href: "#trilha",
  },

  // Links do menu do topo (o "#" leva para a seção da própria página)
  nav: [
    { label: "Sobre", href: "#sobre" },
    { label: "Trilha", href: "#trilha" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "UFV", href: "#ufv" },
    { label: "Dúvidas", href: "#duvidas" },
  ],

  // Dados do curso (usados em várias seções)
  course: {
    hours: 240,
    weeks: 20,
    accessMonths: 6,
    format: "A distância",
  },

  // Preço da Trilha de Aprendizagem (aparece na seção de compra)
  commercial: {
    price: "R$ 800",
    installments: "ou 4x de R$ 200",
    highlight: "4 cursos pelo valor de 1",
  },

  // Desconto para comunidade UFV (alunos, servidores e terceirizados)
  ufvDiscount: {
    title: "É da UFV? Ganhe 10% de desconto",
    coupon: "TRILHAFIRST",
    couponNote: "O cupom vale para as primeiras 100 compras. Garanta a sua trilha para não perder o desconto!",
  },

  // ID do Google Analytics
  googleAnalyticsId: "G-2VDNZ2HSPS",

  // Formulário de e-mail. Coloque o endereço do formulário do seu
  // provedor (Mailchimp, Brevo, etc.) em "formAction".
  leadCapture: {
    enabled: true,
    provider: "generic",
    formAction: "COLOCAR_ENDPOINT_AQUI",
  },

  // Aviso de cookies: só ligue se você adicionar analytics.
  analytics: {
    enabled: false,
  },

  links: {
    dpi: "https://www.dpi.ufv.br/",
    ufv: "https://www.ufv.br/",
    email: "contato.tria@ufv.br",
  },
};
