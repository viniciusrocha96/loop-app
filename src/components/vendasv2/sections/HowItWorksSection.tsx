"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Clock, Briefcase, Target } from "lucide-react";
import { CtaButton } from "../ui/CtaButton";

export function HowItWorksSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const scenarios = [
    {
      time: "07:30",
      title: "Acordando",
      description: "Manda um áudio rápido e ele organiza suas primeiras metas do dia.",
      Icon: Clock,
    },
    {
      time: "09:00",
      title: "No Escritório",
      description: "Abre o app e planeja a semana, garantindo que nada importante seja esquecido.",
      Icon: Briefcase,
    },
    {
      time: "14:00",
      title: "Foco Total",
      description: "Ele já sincronizou e te preparou, com todos os pontos chave para o seu sucesso.",
      Icon: Target,
    },
  ];

  return (
    <section className="w-full py-24 bg-[var(--color-secondary-bg)] relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-space-grotesk text-4xl md:text-5xl font-bold text-[var(--color-text-light)] mb-4">
            Um dia com o <span className="text-[var(--color-accent-blue)]">LOOP</span>
          </h2>
          <p className="text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto">
            Veja como o LOOP se integra perfeitamente à sua rotina, transformando cada momento em oportunidade de progresso.
          </p>
        </div>

        <div ref={containerRef} className="relative ml-4 md:ml-8 pl-8 md:pl-12 space-y-16">
          {/* Static Background Line */}
          <div className="absolute left-0 top-2 bottom-0 w-[2px] bg-white/10" />
          
          {/* Animated Glowing Line */}
          <motion.div 
            className="absolute left-0 top-2 w-[2px] bg-[var(--color-accent-blue)] origin-top drop-shadow-[0_0_8px_rgba(0,191,255,0.8)]"
            style={{ height: lineHeight }}
          />

          {scenarios.map((scenario, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Dot on the timeline */}
              <motion.div 
                initial={{ backgroundColor: "var(--color-secondary-bg)", borderColor: "rgba(255,255,255,0.1)" }}
                whileInView={{ backgroundColor: "var(--color-secondary-bg)", borderColor: "var(--color-accent-blue)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="absolute -left-[41px] md:-left-[57px] top-1 w-6 h-6 rounded-full border-4 z-10" 
              />
              
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 text-[var(--color-accent-blue)] font-space-grotesk font-bold text-xl">
                  <scenario.Icon className="h-6 w-6" strokeWidth={1.5} />
                  {scenario.time} - {scenario.title}
                </div>
                <p className="text-[var(--color-text-muted)] text-lg leading-relaxed">
                  {scenario.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <CtaButton text="COMEÇAR MINHA EVOLUÇÃO" href="#oferta" />
        </div>
      </div>
    </section>
  );
}
