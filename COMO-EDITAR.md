# Como editar o site da TrIA

## ⭐ Trocar o link de um botão pelo GitHub (passo a passo)

Todos os links de botões ficam em UM arquivo: `src/config/site.ts`.

1. Abra o repositório do site no GitHub.
2. Clique na pasta `src`, depois `config`, depois no arquivo `site.ts`.
3. Clique no ícone de lápis (Edit this file), no canto superior direito.
4. Ache o botão que quer mudar e troque só o texto entre aspas de `href`:

| Botão | Onde no arquivo |
| --- | --- |
| "Garantir minha vaga" (topo, início e final da página) | `primaryCTA.href` |
| "Conhecer a trilha" | `secondaryCTA.href` |
| Itens do menu do topo | `nav` (cada linha tem `label` e `href`) |
| Links da UFV e do DPI no rodapé | `links.ufv` e `links.dpi` |
| E-mail de contato | `links.email` |

Exemplo:
```ts
primaryCTA: {
  label: "Garantir minha vaga",          // texto do botão
  href: "https://seu-link-de-compra.com", // link do botão
},
```

5. Clique no botão verde **Commit changes...** e confirme.
6. Em poucos minutos o site é atualizado (publique novamente se necessário).

Cuidado: não apague aspas, vírgulas nem chaves `{ }`.

Guia rápido para quem tem noções básicas de HTML, CSS e JavaScript.
Você quase nunca precisa mexer em código de layout: quase tudo está em 3 arquivos de texto.

## 1. Trocar textos

| O que você quer mudar | Arquivo |
| --- | --- |
| Nome da marca, assinatura, botões, links do menu, contato | `src/config/site.ts` |
| Módulos da trilha, fatos do curso, materiais, público, dúvidas | `src/config/course.ts` |
| Títulos e parágrafos de cada seção | `src/config/copy.ts` |

Regra: mude somente o que está entre `"aspas"`. Não apague vírgulas nem chaves `{ }`.

## 2. Trocar o link do botão de inscrição

Em `src/config/site.ts`:

```ts
primaryCTA: {
  label: "Garantir minha vaga",
  href: "https://eventos.funarbe.org.br/en/tria",  // <- cole aqui o link do checkout
},
```

O botão aparece no topo, no hero e no final da página — mudar aqui muda em todos.
Hoje ele leva para a página de compra da TrIA na Funarbe
(`https://eventos.funarbe.org.br/en/tria`) e abre em uma nova aba.

## 3. Mostrar preço, data e vagas

Também em `src/config/site.ts`, preencha os valores e mude `enabled` para `true`:

```ts
commercial: {
  enabled: true,
  price: "R$ 000,00",
  startDate: "10 de março",
  seats: "40 vagas",
},
```

## 4. Ligar o formulário de e-mail

Em `src/config/site.ts`, coloque o endereço do formulário do seu provedor
(Mailchimp, Brevo, etc.) em `leadCapture.formAction`.
Nunca coloque chave privada de API no site.

## 5. Ligar analytics e o aviso de cookies

Em `src/config/site.ts`, mude `analytics.enabled` para `true` e escreva o
carregamento do provedor dentro de `loadAnalytics()` em `src/integrations/analytics.ts`.
Sem isso, nenhum rastreador é carregado e o aviso de cookies não aparece.

## 6. Trocar cores e fontes

No começo de `src/styles.css`:

```css
--cor-branco: #ffffff;
--cor-preto: #000000;
--cor-amarelo: #eab20b;  /* botão principal e destaques */
--cor-azul: #215780;     /* bloco institucional UFV/DPI */
--font-display: "League Spartan", ...;  /* títulos */
--font-body: Arial, ...;                /* textos */
```

Mudou aqui, mudou em todo o site. Mantenha a proporção: muito branco e preto,
azul em pequenos blocos, amarelo apenas em destaques.

## 7. Trocar a logo

1. Substitua o arquivo de logo apontado em `src/components/BrandLogo.tsx`.
2. Para o ícone da aba do navegador, substitua `public/favicon.png` por uma versão quadrada.

## 8. Adicionar, remover ou reordenar seções

A ordem das seções está em `src/routes/index.tsx`, dentro de `<main>`.
Para reordenar, mova a linha. Para esconder uma seção, apague ou comente a linha.

## 9. Onde ficam as seções

Cada seção é um arquivo em `src/components/`:
`Header`, `Hero`, `TrustStrip`, `WhyTria`, `LearningPath` (+ `ModuleCard`),
`CourseFacts`, `MaterialsSection`, `AudienceSection`, `InstitutionSection`,
`PurchaseCTA`, `FAQ`, `Footer`, `CookieConsent`.

As páginas ficam em `src/routes/`: `index.tsx` (inicial), `privacidade.tsx`, `termos.tsx`.

## 10. Ainda falta confirmar

Estes pontos estão marcados no código com `COLOCAR_...`:
preço, parcelamento, vagas, datas de abertura e início,
política de cancelamento, plataforma de e-mail e endpoint, analytics,
autorização para usar as marcas UFV/DPI e o conteúdo final
da Unidade 6 do Módulo 1.

O link de compra já está ligado: `https://eventos.funarbe.org.br/en/tria`.
