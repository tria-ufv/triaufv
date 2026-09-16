import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/config/site";

const titulo = "Termos de Uso — TrIA | UFV";
const descricao =
  "Condições de uso do site da TrIA, trilha formativa em programação, dados e inteligência artificial da UFV.";

export const Route = createFileRoute("/termos")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descricao },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descricao },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Termos,
});

function Termos() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-3xl px-5 py-16">
        <h1 className="text-3xl font-bold sm:text-4xl">Termos de Uso</h1>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <h2 className="text-lg font-semibold text-foreground">Sobre este site</h2>
          <p>
            Este site apresenta a TrIA, trilha formativa vinculada à Universidade Federal de Viçosa e
            ao Departamento de Informática (DPI). O conteúdo tem caráter informativo.
          </p>

          <h2 className="text-lg font-semibold text-foreground">Informações do curso</h2>
          <p>
            Carga horária, duração, modalidade, período de acesso e certificação seguem o projeto do
            curso e podem ser atualizados em novas edições. Condições comerciais (preço, datas,
            vagas e política de cancelamento) valem conforme divulgadas no momento da inscrição.
          </p>

          <h2 className="text-lg font-semibold text-foreground">Inscrição e pagamento</h2>
          <p>
            A inscrição é realizada em plataforma externa indicada no botão de inscrição. As regras
            de pagamento e reembolso dessa plataforma se aplicam ao processo.
          </p>

          <h2 className="text-lg font-semibold text-foreground">Propriedade intelectual</h2>
          <p>
            Materiais, apostilas, notebooks e aulas são de uso pessoal do participante e não podem
            ser redistribuídos sem autorização.
          </p>

          <h2 className="text-lg font-semibold text-foreground">Contato</h2>
          <p>
            {siteConfig.links.email} — {siteConfig.brand.institution}
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
