import { Metadata } from "next";
import dynamic from "next/dynamic";
import { HeroSection } from "@/components/vendasv2/sections/HeroSection";
import { ProblemSolutionSection } from "@/components/vendasv2/sections/ProblemSolutionSection";
import { BackRedirectScript } from "@/components/vendasv2/scripts/BackRedirectScript";

const FeaturesSection = dynamic(() => import("@/components/vendasv2/sections/FeaturesSection").then(mod => mod.FeaturesSection), { ssr: true });
const HowItWorksSection = dynamic(() => import("@/components/vendasv2/sections/HowItWorksSection").then(mod => mod.HowItWorksSection), { ssr: true });
const SocialProofSection = dynamic(() => import("@/components/vendasv2/sections/SocialProofSection").then(mod => mod.SocialProofSection), { ssr: true });
const PricingSection = dynamic(() => import("@/components/vendasv2/sections/PricingSection").then(mod => mod.PricingSection), { ssr: true });
const FaqSection = dynamic(() => import("@/components/vendasv2/sections/FaqSection").then(mod => mod.FaqSection), { ssr: true });
const Footer = dynamic(() => import("@/components/vendasv2/layout/Footer").then(mod => mod.Footer), { ssr: true });

export const metadata: Metadata = {
  title: "LOOP - Guia Diário de Metas",
  description: "O sistema de gestão pessoal com IA que organiza sua rotina, metas e finanças em um único lugar. O fim dos 'ciclos abertos' na sua mente.",
};

export default function Home() {
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
