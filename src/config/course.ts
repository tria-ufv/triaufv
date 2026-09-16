/**
 * ARQUIVO 2 DE 3 PARA EDITAR TEXTOS DO SITE
 *
 * Conteúdo do curso: módulos, fatos, materiais, público e dúvidas.
 * Para adicionar um módulo, copie um bloco inteiro { ... } e cole abaixo.
 */

export const modules = [
  {
    number: "01",
    title: "Introdução à Programação",
    hours: "60 h",
    summary:
      "Fundamentos de lógica e programação em Python para construir a base necessária para os módulos seguintes.",
    topics: [
      "Lógica de programação",
      "Tipos de dados e expressões",
      "Estruturas condicionais e repetição",
      "Arranjos, listas e dicionários",
      "Funções e classes",
    ],
  },
  {
    number: "02",
    title: "Visualização de Dados",
    hours: "60 h",
    summary: "Princípios para explorar, interpretar e comunicar dados de forma visual.",
    topics: [
      "Percepção visual",
      "Navegação e interação analítica",
      "Séries temporais e distribuições",
      "Princípios de boas visualizações",
      "Tipos de gráficos",
    ],
  },
  {
    number: "03",
    title: "Aprendizagem de Máquina",
    hours: "60 h",
    summary: "Introdução a métodos que aprendem padrões a partir de dados.",
    topics: [
      "Preparação de dados",
      "Redução de dimensionalidade",
      "Classificação",
      "Regressão",
      "Aprendizagem não supervisionada",
    ],
  },
  {
    number: "04",
    title: "Aprendizagem Profunda",
    hours: "60 h",
    summary: "Uma introdução estruturada a redes neurais e arquiteturas de deep learning.",
    topics: [
      "Redes neurais",
      "Treinamento de redes profundas",
      "CNNs",
      "RNNs e atenção",
      "Autoencoders e GANs",
    ],
  },
];

// Seção "Como funciona"
export const courseFacts = [
  { value: "240 horas", label: "Carga horária total prevista." },
  { value: "20 semanas", label: "Duração indicada no projeto pedagógico." },
  { value: "A distância", label: "Conteúdo online com encontro síncrono semanal." },
  { value: "Monitoria", label: "Uma monitoria semanal prevista." },
  { value: "6 meses", label: "Período de acesso aos materiais a partir do início do curso." },
  { value: "Certificação UFV", label: "Certificação indicada no projeto do curso." },
];

// Seção "O que você recebe"
export const materials = [
  "Apostilas por módulo",
  "Aulas narradas",
  "Notebooks com exemplos práticos no Google Colab",
  "Exercícios avaliativos",
  "Atividades abertas com implementação",
  "Guia de estudos",
  "Encontros síncronos",
  "Monitoria",
];

// Seção "Para quem é"
export const audience = {
  notNeeded: [
    "Já saber Python",
    "Trabalhar com tecnologia",
    "Ter curso superior",
    "Conhecer aprendizagem de máquina",
  ],
  needed: [
    "Disponibilidade para acompanhar uma formação extensa",
    "Interesse em aprender de forma progressiva",
    "Disposição para praticar",
  ],
};

// Perguntas frequentes. Para adicionar, copie um bloco { q: "...", a: "..." }.
export const faq = [
  {
    q: "Preciso saber programar?",
    a: "Não. O curso foi planejado para público geral e começa pelos fundamentos.",
  },
  {
    q: "O curso é presencial?",
    a: "A modalidade indicada no projeto é a distância, com encontros síncronos e monitoria.",
  },
  { q: "Qual é a carga horária?", a: "A carga horária prevista é de 240 horas." },
  { q: "Quanto tempo dura?", a: "O projeto indica 20 semanas." },
  {
    q: "Por quanto tempo terei acesso?",
    a: "O documento-base prevê acesso aos materiais por 6 meses a partir do início do curso.",
  },
  {
    q: "O curso tem certificado?",
    a: "O projeto informa certificação pela Universidade Federal de Viçosa.",
  },
  {
    q: "Vou aprender somente ferramentas de IA generativa?",
    a: "Não. A trilha inclui fundamentos de programação, visualização de dados, aprendizagem de máquina e aprendizagem profunda.",
  },
  { q: "Preciso ter formação em Computação?", a: "Não." },
];
