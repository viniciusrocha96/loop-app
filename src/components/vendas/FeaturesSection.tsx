"use client";

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { CheckCircle2, Zap, Brain, CalendarDays } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      title: 'Sistema de Metas (Aterrissadas)',
      desc: 'Adeus metas genéricas. Um framework para transformar qualquer ambição em um plano de 3 fases totalmente executável.',
      icon: <CheckCircle2 className="w-8 h-8 text-primary" />
    },
    {
      title: 'Planejamento Inteligente Baseado em Energia',
      desc: 'Não basta ter tempo, você precisa organizar as tarefas de acordo com seus picos de energia para evitar a fadiga no final do dia.',
      icon: <Zap className="w-8 h-8 text-primary" />
    },
    {
      title: 'Central de Execução Dinâmica',
      desc: 'Uma interface limpa que esconde o caos e te mostra exatamente o que deve ser feito na próxima hora. Sem ansiedade.',
      icon: <Brain className="w-8 h-8 text-primary" />
    },
    {
      title: 'Auditoria de Loops',
      desc: 'Toda semana você realiza um checkpoint focado. Assim, as pontas soltas são amarradas e você começa a segunda-feira limpo.',
      icon: <CalendarDays className="w-8 h-8 text-primary" />
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden" id="features">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            A Engenharia por trás do LOOP
          </motion.h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Não é mais um curso teórico. É uma infraestrutura de rotina pronta para você plugar sua vida e começar a rodar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="flex flex-col sm:flex-row gap-6 p-8 bg-zinc-900/40 hover:bg-zinc-900/70 border-zinc-800 transition-colors h-full group">
                <div className="flex-shrink-0 bg-primary/10 p-4 rounded-xl group-hover:bg-primary/20 transition-colors h-fit">
                  {feat.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">{feat.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{feat.desc}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
