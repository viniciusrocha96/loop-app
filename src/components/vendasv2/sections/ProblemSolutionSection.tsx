"use client";

import { m } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function ProblemSolutionSection() {
  return (
    <section className="w-full py-32 bg-[var(--color-secondary-bg)] relative overflow-hidden flex flex-col items-center justify-center border-y border-white/5">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--color-accent-blue)]/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center gap-8">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 text-[var(--color-accent-blue)] font-bold tracking-widest text-sm uppercase mb-6 px-4 py-2 rounded-full border border-[var(--color-accent-blue)]/20 bg-[var(--color-accent-blue)]/5">
            Sua vida organizada. Sem esforço.
          </div>
          
          <h2 className="font-space-grotesk text-4xl md:text-6xl font-black text-[var(--color-text-light)] leading-tight tracking-tight">
            Você ainda tá tentando lembrar tudo de cabeça ou não sabe pra onde vai o seu tempo?
          </h2>
        </m.div>

        <m.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-[var(--color-text-muted)] leading-relaxed max-w-3xl"
        >
          O LOOP resolve isso: organização pessoal e gestão de metas, tudo de forma simples e direta, te ajudando a fechar seus ciclos e transformar intenção em progresso real.
        </m.p>
        
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-8 animate-bounce text-[var(--color-accent-blue)]/50"
        >
          <ArrowDown className="w-8 h-8" strokeWidth={1.5} />
        </m.div>
      </div>
    </section>
  );
}
