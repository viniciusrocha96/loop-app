"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ShieldCheck, Clock } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden" id="cta">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div 
          className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-3xl p-8 md:p-14 text-center shadow-2xl shadow-primary/10 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />
          
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight relative z-10">
            Chegou a hora de fechar seus ciclos de execução.
          </h2>
          <p className="text-xl text-text-secondary mb-10 max-w-2xl mx-auto relative z-10">
            Junte-se àqueles que dominaram sua própria rotina e voltaram a prosperar em silêncio.
          </p>
          
          <div className="flex flex-col items-center gap-6 relative z-10">
            <a href="https://ggcheckout.com.br/checkout/v3/DxJbpZMc4hJDilcoHuQw" className="w-full max-w-md block">
              <Button size="lg" className="w-full h-16 text-lg font-bold shadow-xl shadow-[#2563eb]/20 hover:bg-[#1d4ed8] bg-[#2563eb] text-white hover:scale-105 border-none">
                Quero fechar meus ciclos agora 👇
              </Button>
            </a>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-text-secondary mt-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-green-500" />
                <span>Garantia de 7 dias ou seu dinheiro de volta</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span>Acesso Imediato</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
