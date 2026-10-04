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
    href: "COLOCAR_LINK_DE_COMPRA_AQUI",
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

  // Informações comerciais: mude "enabled" para true somente quando
  // os dados estiverem confirmados oficialmente.
  commercial: {
    enabled: false,
    price: "COLOCAR_PRECO",
    startDate: "COLOCAR_DATA_DA_TURMA",
    seats: "COLOCAR_NUMERO_DE_VAGAS",
  },

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
