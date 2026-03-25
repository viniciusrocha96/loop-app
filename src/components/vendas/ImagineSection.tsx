"use client";

import { motion } from 'framer-motion';

export function ImagineSection() {
  return (
    <section className="py-32 bg-card relative overflow-hidden border-y border-zinc-800" id="imagine">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--color-primary)_0,transparent_50%)] opacity-5 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-10 leading-tight">
            Imagine sua vida daqui a 30 dias...
          </h2>
          
          <div className="space-y-6 text-lg md:text-2xl text-text-secondary leading-relaxed">
            <p>
              Você acorda rolando a tela do celular? <span className="text-white font-medium">Não.</span>
            </p>
            <p>
              Você abre o computador e sabe exatamente o que precisa concluir na próxima hora. A névoa mental sumiu. A ansiedade da "lista sem fim" deu lugar a uma clareza cortante.
            </p>
            <p>
              E ao final do dia... ao invés de deitar na cama com aquela culpa de <em>"fui ocupado, mas não produtivo"</em>, você deita sabendo que fechou os loops. Você cresceu um pouco mais. O tempo livre volta a ser tempo livre, e não <span className="italic text-primary">"tempo onde você deveria estar trabalhando"</span>.
            </p>
            <p className="text-white font-bold text-2xl mt-12 block">
              Apenas clareza. E progresso silencioso.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
