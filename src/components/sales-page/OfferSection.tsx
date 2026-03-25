"use client";

import { motion } from "framer-motion";
import { Check, Gift } from "lucide-react";

export function OfferSection() {
  const benefits = [
    "Definir metas claras",
    "Planejar com intenção",
    "Reduzir sobrecarga mental",
    "Criar consistência real",
    "Acompanhar progresso visível"
  ];

  return (
    <section className="py-24 px-4 bg-[#111111]">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            O que você recebe hoje
          </h2>
          <ul className="space-y-4">
            {benefits.map((benefit, i) => (
              <li key={i} className="flex items-center text-lg text-[#f0f0f0] bg-[#1a1a1a] p-4 rounded-xl border border-gray-800">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center mr-4 text-green-400">
                  <Check className="w-5 h-5" />
                </div>
                {benefit}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-1 rounded-3xl relative"
        >
          <div className="absolute -top-4 right-8 bg-[#3E86F5] text-white text-sm font-bold px-4 py-1 rounded-full uppercase tracking-wider animate-bounce shadow-lg">
            Bônus Exclusivo
          </div>
          <div className="bg-[#1a1a1a] p-8 rounded-[22px] h-full border border-gray-800 shadow-2xl">
            <Gift className="w-12 h-12 text-[#3E86F5] mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Planilha: Controle de Vida Financeira
            </h3>
            <p className="text-[#aaaaaa] mb-6 leading-relaxed">
              Não adianta organizar sua rotina perfeitamente se a sua vida financeira está um caos. 
              Este bônus te dará total clareza dos seus números para que o estresse com dinheiro não destrua seu foco.
            </p>
            <div className="inline-block bg-gray-800 text-gray-300 font-medium px-4 py-2 rounded-lg line-through mb-2">
              Valor Oficial: R$ 97,00
            </div>
            <div className="text-green-400 font-bold text-2xl">
              Hoje: Grátis
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
