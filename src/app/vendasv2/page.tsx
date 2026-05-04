import { Metadata } from "next";
import { HeroSection } from "@/components/vendasv2/sections/HeroSection";
import { ProblemSolutionSection } from "@/components/vendasv2/sections/ProblemSolutionSection";
import { FeaturesSection } from "@/components/vendasv2/sections/FeaturesSection";
import { HowItWorksSection } from "@/components/vendasv2/sections/HowItWorksSection";
import { SocialProofSection } from "@/components/vendasv2/sections/SocialProofSection";
import { PricingSection } from "@/components/vendasv2/sections/PricingSection";
import { FaqSection } from "@/components/vendasv2/sections/FaqSection";
import { Footer } from "@/components/vendasv2/layout/Footer";
import { BackRedirectScript } from "@/components/vendasv2/scripts/BackRedirectScript";

export const metadata: Metadata = {
  title: "LOOP - Guia Diário de Metas",
  description: "O sistema de execução pessoal que organiza sua vida inteira — fechando ciclos e transformando metas em realidade.",
};

export default function VendasV2Page() {
  return (
    <main className="min-h-screen bg-[var(--color-primary-bg)] text-[var(--color-text-light)] selection:bg-[var(--color-accent-blue)]/30">
      <BackRedirectScript />
      <HeroSection />
      <ProblemSolutionSection />
      <FeaturesSection />
      <HowItWorksSection />
      <SocialProofSection />
      <PricingSection />
      <FaqSection />
      <Footer />
    </main>
  );
}
