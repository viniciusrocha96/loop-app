"use client";

import { m } from "framer-motion";
import { Check, ShieldCheck } from "lucide-react";
import { CtaButton } from "../ui/CtaButton";

export function PricingSection() {
  const benefits = [
    "Tarefas e projetos sem limite",
    "Gestão visual de metas",
    "Fechamento de ciclos otimizado",
    "Hábitos com streaks e análise",
    "Base de conhecimento pessoal",
    "Análises e insights avançados",
  ];

  return (
    <section id="oferta" className="w-full py-24 bg-[var(--color-primary-bg)] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-accent-blue)]/10 blur-[150px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-space-grotesk text-4xl md:text-5xl font-bold text-[var(--color-text-light)] mb-4">
            Um plano. Tudo incluso.
          </h2>
          <p className="text-xl text-[var(--color-text-muted)]">
            Sem limites. Sem restrições. Sem surpresas.
          </p>
        </div>

        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[var(--color-secondary-bg)] border border-[var(--color-accent-blue)]/30 rounded-3xl p-8 md:p-12 relative shadow-[0_0_50px_rgba(0,191,255,0.1)]"
        >
          {/* Top highlight bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--color-accent-blue)] to-transparent" />
          
          <div className="flex flex-col md:flex-row gap-12">
            {/* Left side: Pricing details */}
            <div className="flex-1 flex flex-col justify-center">
              <h3 className="font-space-grotesk text-2xl font-bold text-[var(--color-text-light)] mb-6">
                LOOP: Guia Diário de Metas
              </h3>
              
              <div className="mb-2">
                <span className="text-[var(--color-text-muted)] line-through text-lg">
                  De R$ 147,00
                </span>
              </div>
              
              <div className="flex flex-col gap-1 mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-bold text-[var(--color-text-light)]">por</span>
                  <span className="font-space-grotesk text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent-blue)] to-[#00f2fe]">
                    R$ 47,00
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="inline-block rounded-full bg-[var(--color-accent-blue)]/20 px-3 py-1 text-xs font-bold text-[var(--color-accent-blue)] uppercase tracking-wider">
                    Acesso Vitalício
                  </span>
                  <span className="text-[var(--color-text-muted)] text-sm font-medium">
                    Pagamento Único
                  </span>
                </div>
              </div>
              
              <CtaButton text="COMEÇAR MINHA EVOLUÇÃO" className="w-full text-center mt-2" />
              
              <div className="mt-6 flex items-center justify-center gap-2 text-[var(--color-text-muted)] text-sm">
                <ShieldCheck className="h-5 w-5 text-green-500" />
                Garantia incondicional de 7 dias
              </div>
            </div>
            
            {/* Right side: Benefits list */}
            <div className="flex-1 bg-[var(--color-primary-bg)] rounded-2xl p-8 border border-white/5">
              <h4 className="font-bold text-[var(--color-text-light)] mb-6">
                O que está incluso:
              </h4>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[var(--color-accent-blue)] shrink-0 mt-0.5" />
                    <span className="text-[var(--color-text-muted)]">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
