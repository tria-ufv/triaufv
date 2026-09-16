# Site TrIA — landing page da UFV, construída para ser fácil de editar

Primeira versão: uma landing page única, sem banco de dados, sem login, com todo o conteúdo mutável concentrado em arquivos de configuração — para que alguém com noções básicas de HTML, CSS e JavaScript consiga manter o site.

## 1. Facilidade de edição (requisito principal)

**Textos e links em arquivos de configuração**

- `src/config/site.ts` — marca, assinatura, CTA principal (rótulo + link), CTA secundário, dados do curso (240h, 20 semanas, 6 meses, modalidade), captura de e-mail (provedor + endpoint), links do rodapé.
- `src/config/course.ts` — os 4 módulos (número, nome, carga horária, resumo, 3–5 tópicos), fatos do "Como funciona", lista "O que você recebe", "Para quem é", FAQ.
- `src/config/copy.ts` — títulos e parágrafos de cada seção (hero, faixa de confiança, por que TrIA, trilha, institucional, conversão).

Nenhum componente terá texto de botão ou preço escrito à mão: todos leem `siteConfig.primaryCTA.label` / `.href`.

**Cores e fontes em um só lugar** — variáveis CSS no topo de `src/styles.css`:

```text
--cor-branco: #FFFFFF   --cor-preto: #000000
--cor-amarelo: #EAB20B  --cor-azul: #215780
--font-display: "League Spartan", "Arial Black", Arial, sans-serif
--font-body: Arial, Helvetica, sans-serif
```

**Uma seção = um arquivo**, com nome óbvio e comentários curtos em português.

**`COMO-EDITAR.md`** na raiz: onde trocar textos, cores, logo, link de compra, como adicionar módulo ou pergunta do FAQ.

**Placeholders intencionais** onde falta confirmação: `COLOCAR_LINK_DE_COMPRA_AQUI`, `COLOCAR_ENDPOINT_AQUI`, `COLOCAR_DATA_DA_TURMA`, `COLOCAR_PRECO`.

## 2. Identidade visual

- Predominância branco/preto (70–80%), azul institucional 10–15%, amarelo 5–10% (CTA, marcadores da trilha, estados ativos).
- Amarelo sempre com texto preto; azul em bloco grande com texto branco.
- Cantos discretos: botões/campos 4–6px, cards 6–10px. Sem pills grandes.
- Sombras mínimas: preferir bordas de 1px e divisórias.
- Sem neon, cyberpunk, gradientes exagerados, ícones infantis ou foto genérica de "pessoa no notebook". Hero tipográfico com o grafismo da marca.

## 3. Logo e animação

- Componente `BrandLogo` que aponta para o arquivo de logo, fácil de trocar depois pelos SVGs oficiais.
- A logo enviada entra no cabeçalho, no hero e no rodapé, e vira o ícone da aba do navegador.
- O "cérebro" é o único elemento de movimento: pontos aparecem com opacidade + deslocamento e se organizam, terminando em 800–1400 ms. Sem splash, sem vídeo, sem partículas pela página.
- Motivo gráfico reaproveitado como nós/linha da trilha e marcador dos módulos.
- `prefers-reduced-motion`: animações decorativas desligadas.

## 4. Estrutura da página inicial

1. **Header** — logo, âncoras (Sobre, Trilha, Como funciona, UFV, Dúvidas), botão "Garantir minha vaga". Fixo após pequeno scroll, fundo branco, borda inferior fina, menu mobile em drawer simples.
2. **Hero** — eyebrow, "Entenda IA além do superficial.", texto de apoio, dois CTAs, provas rápidas (240 horas, a distância, encontros síncronos, monitoria, certificação UFV).
3. **Faixa de confiança** — fundo preto, texto branco, detalhe amarelo.
4. **Por que TrIA?** — "IA não começa no prompt." + três pilares (01 Entender, 02 Experimentar, 03 Aplicar) em colunas retas com numeração grande e borda superior.
5. **A trilha** — "Uma trilha. Quatro etapas." Linha horizontal no desktop, vertical no mobile; cada módulo com número, nome, 60h, resumo e tópicos em accordion (fechados por padrão).
6. **Como funciona** — grade compacta: 240 horas, 20 semanas, a distância, monitoria, 6 meses, certificação UFV. Sem datas (a de 2025 fica fora).
7. **O que você recebe** — lista em duas colunas: apostilas, aulas narradas, notebooks no Colab, exercícios, atividades abertas, guia de estudos, encontros síncronos, monitoria.
8. **Para quem é** — texto + blocos "Você não precisa" / "Você precisa".
9. **UFV e DPI** — bloco azul com o texto institucional e link para o Departamento de Informática. Sem logos UFV/DPI até haver autorização e arquivos oficiais.
10. **Conversão** — "Sua trilha pode começar aqui." + CTA. Preço, datas e vagas ficam desligados por configuração até confirmação.
11. **Captura de e-mail** — nome (opcional), e-mail (obrigatório), checkbox de consentimento, microcopy com link para a Política de Privacidade. Envia para o endpoint configurado; nenhuma chave no site.
12. **Rodapé** — marca, assinatura, vínculo institucional, links para privacidade e termos, contato.
13. **Aviso de cookies** — simples, só ativado se analytics for configurado; nenhum rastreador ligado por padrão.

## 5. Páginas

`/` (landing), `/privacidade`, `/termos`. Nada de `/curso`, `/equipe` ou `/faq` nesta versão.

## 6. SEO, acessibilidade, desempenho

- Title "TrIA — Programação, Dados e Inteligência Artificial | UFV" e a meta description do documento; Open Graph e Twitter em cada página.
- Dados estruturados Schema.org `Course` + `Organization`, sem preço, datas ou oferta enquanto não confirmados.
- HTML semântico, hierarquia de títulos, labels, foco visível, navegação por teclado, contraste AA, `alt` adequado.
- Grafismos em SVG, fontes com `font-display: swap`, imagens com lazy loading, animações em CSS.

## 7. Pendências que ficam marcadas no site como placeholder

Preço, parcelamento, link de checkout, vagas, datas de abertura/início, política de cancelamento, plataforma de e-mail e endpoint do formulário, analytics, uso das marcas UFV/DPI, conteúdo final da Unidade 6 do Módulo 1. Vou listar todas ao final para você preencher.

## 8. Detalhes técnicos

- Stack fixa do projeto: TanStack Start + React + TypeScript + Tailwind v4. Sem backend, sem autenticação, sem CMS.
- A estrutura do documento (`pages/`, `App.tsx`, `styles/globals.css`) é adaptada às rotas do TanStack: `src/routes/index.tsx` (substitui o placeholder), `src/routes/privacidade.tsx`, `src/routes/termos.tsx`, cada uma com `head()` próprio.
- Componentes: `Header`, `MobileMenu`, `BrandLogo`, `Hero`, `TrustStrip`, `SectionHeading`, `WhyTria`, `LearningPath` + `ModuleCard`, `CourseFacts`, `MaterialsSection`, `AudienceSection`, `InstitutionSection`, `LeadCaptureForm`, `PurchaseCTA`, `FAQ`, `Footer`, `CookieConsent`.
- `src/integrations/emailMarketing.ts` e `analytics.ts` isolam provedores; o formulário só conhece a função de envio.
- Tokens da paleta TrIA em `src/styles.css` mapeados nos tokens semânticos existentes; League Spartan carregada via `<link>` no `__root.tsx`.
- Build padrão `npm run build` (saída estática) mantendo o projeto exportável e independente da hospedagem.
