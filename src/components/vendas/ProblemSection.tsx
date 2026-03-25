"use client";

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';

export function ProblemSection() {
  return (
    <section className="py-24 bg-background relative" id="problem">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            A Mentira da Produtividade
          </motion.h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Disseram que você precisava de mais disciplina, acordar às 5 da manhã e usar dezenas de aplicativos. Mentiram para você.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-zinc-900/50 border-red-900/30">
              <h3 className="text-2xl font-semibold text-red-400 mb-4 flex items-center gap-3">
                <span className="p-2 bg-red-400/10 rounded-lg">⚠️</span>
                O Verdadeiro Problema
              </h3>
              <p className="text-text-primary text-lg leading-relaxed mb-6">
                A culpa não é da sua força de vontade. O verdadeiro vilão silencioso que consome sua energia são os <strong className="text-white font-bold decoration-red-500 underline underline-offset-4">Ciclos Abertos de Execução</strong>.
              </p>
              <ul className="space-y-4 text-text-secondary">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  Você planeja e não termina (Ciclo Aberto)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  Sua mente fica pesada tentando lembrar de tudo (Carga Cognitiva)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  Você tenta compensar a falta de progresso trabalhando o dobro. O resultado? Burnout.
                </li>
              </ul>
            </Card>
          </motion.div>
          
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="p-6 border-l-4 border-zinc-800 bg-zinc-900/20">
              <p className="text-lg text-text-secondary italic">
                "O cérebro humano não foi feito para reter informações inacabadas, ele foi feito para fechar loops. Se você não tem um sistema, sua memória de trabalho esgota sua motivação diária."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
