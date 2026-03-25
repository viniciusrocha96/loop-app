import { HeroSection } from "@/components/sales-page/HeroSection";
import { ProblemSection } from "@/components/sales-page/ProblemSection";
import { SolutionSection } from "@/components/sales-page/SolutionSection";
import { HowItWorksSection } from "@/components/sales-page/HowItWorksSection";
import { OfferSection } from "@/components/sales-page/OfferSection";
import { TestimonialsSection } from "@/components/sales-page/TestimonialsSection";
import { PricingSection } from "@/components/sales-page/PricingSection";
import { FAQSection } from "@/components/sales-page/FAQSection";

export const metadata = {
  title: "LOOP: Seu Guia Diário de Metas",
  description: "Você não tem um problema de disciplina. Você tem um problema de ciclos abertos.",
};

export default function SalesPage() {
  return (
    <main className="bg-[#111111] min-h-screen overflow-hidden">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <OfferSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
    </main>
  );
}
