# Site TrIA — construído para ser fácil de editar

Objetivo: uma landing page institucional da TrIA que qualquer pessoa com noções básicas de HTML, CSS e JavaScript consiga editar sem se perder.

## Princípio central: texto separado do layout

Todo o conteúdo do site (títulos, parágrafos, botões, módulos da trilha, FAQ, rodapé) fica em **um único arquivo de conteúdo**, escrito em português, com comentários explicando cada campo. Para trocar uma frase, um preço ou um item do FAQ, a pessoa mexe só nesse arquivo — nunca no layout.

Exemplo do que a pessoa vê nesse arquivo:

```text
hero: {
  chapeu: "Trilha de IA — UFV/DPI",
  titulo: "Entenda IA além do superficial.",
  texto: "...",
  botaoPrincipal: { rotulo: "Quero me inscrever", link: "#inscricao" },
}
```

## Cores e fontes em um só lugar

Um bloco de variáveis CSS no topo do arquivo de estilos concentra a paleta e as fontes:

```text
--cor-preto: #000000
--cor-branco: #FFFFFF
--cor-amarelo: #EAB20B   /* CTA, destaques da trilha */
--cor-azul:   #215780    /* institucional UFV/DPI */
--fonte-titulo: "League Spartan"
--fonte-texto:  Arial
```

Trocar o amarelo em um lugar muda o site inteiro. Proporção mantida: 70–80% branco/preto, 10–15% azul, 5–10% amarelo. Cantos discretos (4–10px), sombras mínimas, sem neon ou gradientes.

## Uma seção = um arquivo

Cada faixa da página fica em seu próprio arquivo com nome óbvio (`Cabecalho`, `Hero`, `PorQueTria`, `Trilha`, `ComoFunciona`, `OQueVoceRecebe`, `ParaQuem`, `Ufv`, `Faq`, `Inscricao`, `Rodape`). A página principal só lista as seções na ordem, então reordenar ou remover uma seção é mover/apagar uma linha.

Cada arquivo usa HTML e classes de estilo diretas, sem camadas de abstração, com comentários curtos em português.

## Páginas

- `/` landing page completa
- `/privacidade`
- `/termos`

## Logo, favicon e marca

A logo enviada entra no cabeçalho e no rodapé, e a mesma imagem vira o ícone da aba do navegador. O “cérebro” aparece como detalhe gráfico discreto, com uma animação suave de entrada (respeitando quem prefere menos movimento).

## Conteúdo

Uso dos textos do documento enviado: headline “Entenda IA além do superficial.”, os três pilares (Entender, Experimentar, Aplicar), os 4 módulos da trilha (Programação, Visualização de Dados, Aprendizagem de Máquina, Aprendizagem Profunda), como funciona (240 horas, 20 semanas, a distância, monitoria, certificação UFV) e o FAQ. Sem promessas exageradas.

Itens ainda em aberto no documento (preço, datas, link de checkout, e-mail de contato) entram como marcadores claros e comentados, para você substituir depois — vou listá-los no final para você conferir.

## Um arquivo LEIA-ME de edição

Um `COMO-EDITAR.md` na raiz explica em linguagem simples: onde trocar textos, onde trocar cores, onde trocar a logo, como adicionar um módulo ou uma pergunta do FAQ.

## Detalhes técnicos

- TanStack Start + React + Tailwind (stack fixa do projeto); classes de utilitário legíveis, sem componentes genéricos extras.
- `src/content/site.ts` — objeto único, tipado de forma leve, com todo o texto.
- `src/components/sections/*.tsx` — uma seção por arquivo, sem lógica.
- `src/styles.css` — tokens da paleta TrIA mapeados nos tokens semânticos existentes; fontes via `<link>` no `__root.tsx`.
- Rotas: `src/routes/index.tsx` (substitui o placeholder), `privacidade.tsx`, `termos.tsx`, cada uma com `head()` próprio (title, description, og/twitter).
- Sem backend nesta versão: o formulário/CTA aponta para link externo configurável no arquivo de conteúdo.
- Acessibilidade: contraste, foco visível, `alt` nas imagens, `prefers-reduced-motion`.
