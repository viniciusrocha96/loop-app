"use client";

import { motion } from 'framer-motion';

export function SolutionSection() {
  return (
    <section className="py-24 bg-card relative overflow-hidden" id="solution">
      {/* Dynamic Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            A Solução Definitiva
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-extrabold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Conheça o Sistema de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300">Loops de Execução™</span>
          </motion.h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Uma engenharia de rotina desenhada não para pessoas que têm disciplina inabalável, mas para pessoas comuns que exigem ver o progresso real e fechar ciclos sistematicamente.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: '1. Clareza',
              title: 'Aterrisagem de Metas',
              desc: 'Transforme desejos confusos em escopos de execução práticos. Diga adeus à paralisia por análise.',
              icon: '🎯'
            },
            {
              step: '2. Encadeamento',
              title: 'Planejamento Inteligente',
              desc: 'Em vez de listas imensas, você cria micro-ciclos que se auto-sustentam e protegem seu tempo livre.',
              icon: '🔗'
            },
            {
              step: '3. Fechamento',
              title: 'O Efeito Conclusão',
              desc: 'A cada loop fechado, seu cérebro recebe a dose exata de dopamina para iniciar o próximo dia motivado.',
              icon: '✅'
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-background border border-zinc-800 rounded-2xl p-8 hover:border-primary/50 transition-colors shadow-2xl shadow-black/20 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150" />
              <div className="text-4xl mb-6 relative z-10">{item.icon}</div>
              <div className="text-primary font-bold text-sm mb-2">{item.step}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-text-secondary leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
