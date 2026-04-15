"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 overflow-hidden bg-[#111111]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center z-10"
      >
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#f0f0f0] mb-6 leading-tight">
          <span className="text-yellow-500 mr-2">⚠️</span>
          Se você sente que está sempre <span className="text-[#3E86F5]">ocupado</span>… mas sua vida parece <span className="text-[#3E86F5]">não sair do lugar</span>, leia isso com atenção.
        </h1>
        
        <p className="text-xl md:text-2xl text-[#aaaaaa] mb-12 max-w-2xl mx-auto font-light">
          Você não tem um problema de disciplina. Você tem um problema de <span className="font-semibold text-white">ciclos abertos</span>.
        </p>

        <a href="https://payt.site/8oClZz2" className="block w-fit mx-auto w-full md:w-auto">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: ["0 0 0 0 rgba(62, 134, 245, 0.4)", "0 0 0 15px rgba(62, 134, 245, 0)"],
            }}
            transition={{
              boxShadow: {
                duration: 2,
                repeat: Infinity,
              }
            }}
            className="bg-[#3E86F5] text-white font-bold w-full md:w-auto text-lg md:text-xl py-4 px-8 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
          >
            Quero fechar meus ciclos agora <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
          </motion.button>
        </a>
      </motion.div>

      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3E86F5] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse delay-1000" />
    </section>
  );
}
