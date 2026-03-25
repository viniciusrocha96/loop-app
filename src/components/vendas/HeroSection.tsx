"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block py-1 pr-4 pl-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-medium text-sm mb-8">
            <span className="bg-red-500 text-white rounded-full px-2 py-0.5 mr-2 text-xs font-bold">⚠️</span>
            ALERTA: Se você quer parar de recomeçar
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-8 leading-[1.1]">
            Se você sente que está sempre ocupado… mas sua vida <span className="text-primary relative whitespace-nowrap">
              parece não sair do lugar
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,5 Q50,15 100,5" stroke="currentColor" strokeWidth="4" fill="transparent" />
              </svg>
            </span>, leia isso com atenção.
          </h1>
          
          <p className="text-lg md:text-2xl text-text-secondary leading-relaxed mb-10 max-w-3xl mx-auto">
            Você não tem um problema de disciplina. Você tem um problema de ciclos abertos. Descubra como o Sistema de Loops de Execução™ transforma boas intenções em resultados palpáveis.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="w-full sm:w-auto text-lg px-8 h-14" onClick={() => document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' })}>
              Quero entender o método 👇
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
