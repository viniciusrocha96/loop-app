"use client";

import { motion } from "framer-motion";

export function HowItWorksSection() {
  const steps = [
    {
      icon: "🎯",
      title: "1. Clareza",
      subtitle: "Aterrissagem de Metas",
      desc: "Tire as ideias da cabeça e coloque no papel. Sem clareza, você apenas reage ao dia."
    },
    {
      icon: "🔗",
      title: "2. Encadeamento",
      subtitle: "Micro-ciclos",
      desc: "Planejamento Inteligente. Quebre o que é complexo em pedaços impossíveis de dar errado."
    },
    {
      icon: "✅",
      title: "3. Fechamento",
      subtitle: "O Efeito Conclusão",
      desc: "Termine. Risque. Feche o loop e sinta a dose natural de dopamina do progresso real."
    }
  ];

  return (
    <section className="py-24 px-4 bg-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Como o Método LOOP Funciona
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#111111] p-8 rounded-3xl border border-gray-800 hover:border-[#3E86F5]/50 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#3E86F5] mix-blend-multiply opacity-0 group-hover:opacity-10 transition-opacity rounded-bl-full" />
              <div className="text-5xl mb-6">{step.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
              <div className="text-[#3E86F5] font-semibold mb-4 text-lg">{step.subtitle}</div>
              <p className="text-[#aaaaaa] leading-relaxed text-lg">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
