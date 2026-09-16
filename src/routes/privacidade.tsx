import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/config/site";

const titulo = "Política de Privacidade — TrIA | UFV";
const descricao =
  "Como a TrIA coleta, usa e protege os dados enviados no formulário de avisos de novas turmas.";

export const Route = createFileRoute("/privacidade")({
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
  component: Privacidade,
});

function Privacidade() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-3xl px-5 py-16">
        <h1 className="text-3xl font-bold sm:text-4xl">Política de Privacidade</h1>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            Esta página explica como a TrIA trata os dados pessoais informados no site. Coletamos
            apenas o necessário para comunicar a abertura de novas turmas.
          </p>

          <h2 className="text-lg font-semibold text-foreground">Dados coletados</h2>
          <p>
            Nome (opcional) e e-mail, enviados voluntariamente no formulário de avisos, com
            consentimento explícito.
          </p>

          <h2 className="text-lg font-semibold text-foreground">Finalidade</h2>
          <p>
            Enviar informações sobre inscrições, turmas e novidades da TrIA. Não utilizamos os dados
            para outras finalidades nem os vendemos a terceiros.
          </p>

          <h2 className="text-lg font-semibold text-foreground">Cookies e medição</h2>
          <p>
            Ferramentas de medição de uso só são ativadas após consentimento. Nenhum rastreador de
            publicidade é carregado por padrão.
          </p>

          <h2 className="text-lg font-semibold text-foreground">Seus direitos</h2>
          <p>
            Conforme a LGPD, você pode solicitar acesso, correção ou remoção dos seus dados pelo
            contato {siteConfig.links.email}. O cancelamento do recebimento de mensagens também pode
            ser feito pelo link de descadastro presente nos e-mails.
          </p>

          <h2 className="text-lg font-semibold text-foreground">Responsável</h2>
          <p>{siteConfig.brand.institution}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
