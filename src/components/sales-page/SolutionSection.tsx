"use client";

import { motion } from "framer-motion";
import { XCircle } from "lucide-react";

export function SolutionSection() {
  return (
    <section className="py-24 px-4 bg-[#111111]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            <span className="text-yellow-500 mr-2">⚠️</span>
            O Verdadeiro Problema: Ciclos Abertos de Execução
          </h2>
        </motion.div>

        <div className="bg-[#1a1a1a] p-8 md:p-12 rounded-3xl mb-16 border border-gray-800">
          <ul className="space-y-6 mb-12">
            {[
              "Você planeja tarefas, mas não as termina no mesmo dia.",
              "Sua mente fica pesada, carregando 'tarefas pendentes' o tempo todo.",
              "Você tenta compensar a falta de conclusão trabalhando mais horas."
            ].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start text-lg text-[#aaaaaa]"
              >
                <XCircle className="text-red-500 mr-4 mt-1 flex-shrink-0" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>

          <blockquote className="border-l-4 border-[#3E86F5] pl-6 py-2 my-8 bg-[#3E86F5]/5 rounded-r-lg">
            <p className="text-xl md:text-2xl font-medium text-white italic py-4">
              "O cérebro humano não foi feito para reter informações inacabadas. Ele foi feito para fechar loops."
            </p>
          </blockquote>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-b from-[#1a1a1a] to-[#3E86F5]/10 p-12 rounded-3xl border border-[#3E86F5]/20 shadow-[0_0_50px_rgba(62,134,245,0.15)]"
        >
          <div className="mb-6 inline-block bg-[#3E86F5]/20 px-4 py-2 rounded-full text-[#3E86F5] font-bold text-sm tracking-wider uppercase">
            A Solução
          </div>
          <h3 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            LOOP: Seu Guia Diário de Metas
          </h3>
          <p className="text-xl text-[#aaaaaa] max-w-2xl mx-auto">
            Um sistema simples, direto e desenhado exclusivamente para transformar intenções em progresso real. Diariamente.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
