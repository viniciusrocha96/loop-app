"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Clock, Activity, RotateCcw } from "lucide-react";

export function ProblemSection() {
  return (
    <section className="py-24 px-4 bg-[#1a1a1a]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            O "Padrão Invisível" do Fracasso
          </h2>
          <p className="text-xl text-[#aaaaaa] max-w-2xl mx-auto">
            Todos os dias você repete o mesmo ciclo sem perceber:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-4 mb-16">
          {[
            { step: "1", title: "Planejam", icon: Activity },
            { step: "2", title: "Começam", icon: Activity },
            { step: "3", title: "Perdem Ritmo\n+ Culpa", icon: AlertTriangle },
            { step: "4", title: "Recomeçam", icon: RotateCcw },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-[#111111] p-6 rounded-2xl border border-gray-800 text-center relative"
            >
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-4 text-gray-400 font-bold">
                {item.step}
              </div>
              <h3 className="text-lg font-bold text-white whitespace-pre-line">{item.title}</h3>
              {i < 3 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-gray-600">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#111111] border border-[#3E86F5]/30 p-8 rounded-3xl text-center mb-16 shadow-[0_0_30px_rgba(62,134,245,0.1)]"
        >
          <h3 className="text-2xl font-bold text-[#3E86F5] mb-2">
            A sensação continua a mesma:
          </h3>
          <p className="text-xl text-white">ocupado… mas sem progresso real.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            A Mentira da Produtividade
          </h3>
          <div className="bg-red-500/10 border border-red-500/20 p-8 rounded-3xl">
            <p className="text-[#aaaaaa] text-lg mb-6">Dizem que você precisa:</p>
            <ul className="space-y-4 mb-8 text-lg">
              {["Acordar às 5h da manhã", "Usar aplicativos complexos de gestão", "Ter uma força de vontade de ferro"].map((mito, i) => (
                <li key={i} className="flex items-center text-white/80 line-through">
                  <span className="text-red-500 mr-3">✗</span> {mito}
                </li>
              ))}
            </ul>
            <p className="text-2xl font-bold text-white">Mas isso não é verdade.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
