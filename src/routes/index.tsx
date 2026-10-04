import { createFileRoute } from "@tanstack/react-router";
import { copy } from "@/config/copy";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { WhyTria } from "@/components/WhyTria";
import { LearningPath } from "@/components/LearningPath";
import { CourseFacts } from "@/components/CourseFacts";
import { MaterialsSection } from "@/components/MaterialsSection";
import { AudienceSection } from "@/components/AudienceSection";
import { InstitutionSection } from "@/components/InstitutionSection";
import { PurchaseCTA } from "@/components/PurchaseCTA";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";

// Dados estruturados (Schema.org). Preço, datas e oferta ficam fora
// enquanto não estiverem confirmados oficialmente.
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "TrIA — Programação, Dados e Inteligência Artificial",
  description: copy.seo.description,
  inLanguage: "pt-BR",
  provider: {
    "@type": "Organization",
    name: "Universidade Federal de Viçosa — Departamento de Informática (DPI)",
    url: siteConfig.links.ufv,
  },
  educationalCredentialAwarded: "Certificação UFV",
  timeRequired: `PT${siteConfig.course.hours}H`,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: copy.seo.title },
      { name: "description", content: copy.seo.description },
      { property: "og:title", content: copy.seo.title },
      { property: "og:description", content: copy.seo.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(structuredData) },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <WhyTria />
        <LearningPath />
        <CourseFacts />
        <MaterialsSection />
        <AudienceSection />
        <InstitutionSection />
        <PurchaseCTA />
        <FAQ />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
