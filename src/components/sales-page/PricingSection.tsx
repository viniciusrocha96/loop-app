"use client";

import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight } from "lucide-react";

export function PricingSection() {
  return (
    <section className="py-24 px-4 bg-[#1a1a1a]" id="pricing">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex-1 bg-[#111111] p-10 rounded-3xl border-2 border-[#3E86F5] text-center w-full relative shadow-[0_0_40px_rgba(62,134,245,0.15)]"
        >
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#3E86F5] text-white py-2 px-8 rounded-full font-bold uppercase text-sm tracking-widest shadow-lg">
            Oferta Especial
          </div>
          <h3 className="text-2xl font-bold text-white mb-2 mt-4">LOOP: Guia Diário de Metas</h3>
          <p className="text-[#aaaaaa] mb-6">+ Bônus Controle Financeiro</p>
          
          <div className="text-gray-500 text-xl mb-2 line-through decoration-red-500/50">De R$ 147,00</div>
          <div className="flex items-end justify-center gap-2 mb-10">
            <span className="text-2xl text-white pb-2">por apenas</span>
            <span className="text-7xl font-black text-[#3E86F5] leading-none">R$47</span>
          </div>
          
          <motion.a 
            href="https://payt.site/8oClZz2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-[#3E86F5] text-white font-bold text-xl py-5 rounded-xl shadow-[0_10px_30px_rgba(62,134,245,0.4)] hover:bg-blue-600 transition-colors flex justify-center items-center cursor-pointer"
          >
            Garantir Meu Acesso Agora <ArrowRight className="ml-2 w-6 h-6" />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 p-8 bg-[#111111] rounded-3xl border border-gray-800"
        >
          <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
            <ShieldCheck className="w-12 h-12 text-green-500" />
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">7 Dias de Garantia Incondicional</h3>
          <p className="text-lg text-[#aaaaaa] leading-relaxed">
            Teste o método por 7 dias. Se você não sentir clareza na aplicação, ou simplesmente achar que não é para você, basta pedir reembolso. Sem entrelinhas. Sem perguntas. Você não tem nada a perder.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
