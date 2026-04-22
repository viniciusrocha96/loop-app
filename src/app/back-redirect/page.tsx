"use client";

import { motion } from "framer-motion";
import { Check, Copy, ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Logo } from "../../components/ui/Logo";

export default function BackRedirectPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("LOOP40");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const bullets = [
    "Feche definitivamente seus ciclos abertos.",
    "Transforme suas metas travadas em realidade diária.",
    "Tenha clareza, direção e foco inabalável."
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] font-sans antialiased selection:bg-[#00BFFF]/30 selection:text-white flex flex-col">
      {/* Header */}
      <header className="flex flex-col items-center justify-center pt-8 pb-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center w-40 md:w-48"
        >
          <Logo className="w-full" />
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center pb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center space-y-6 mb-12 w-full mt-4"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#E0E0E0] leading-[1.15]">
            Não vá ainda! Uma oferta <span className="text-[#00BFFF]">especial</span> espera por você.
          </h1>
          <p className="text-lg md:text-xl font-light text-[#A0A0A0] max-w-3xl mx-auto leading-relaxed">
            Parece que você está prestes a perder a chance de transformar sua produtividade e fechar seus ciclos de uma vez por todas. Mas queremos te dar uma última oportunidade.
          </p>
        </motion.div>

        {/* Offer Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full max-w-2xl bg-[#1A1A1A] border border-[#00BFFF]/30 rounded-3xl p-8 md:p-10 shadow-[0_0_40px_rgba(0,191,255,0.08)] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#00BFFF]/10 to-transparent pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center text-center space-y-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00BFFF] tracking-tight">
              ÚLTIMA CHANCE: 40% DE DESCONTO!
            </h2>
            
            <div className="w-full flex flex-col items-center space-y-4">
              <span className="text-[#E0E0E0] text-lg font-medium">Use o cupom:</span>
              
              <button 
                onClick={handleCopy}
                className="group relative flex items-center justify-between w-full max-w-xs bg-[#0A0A0A] border border-[#00BFFF]/40 rounded-xl p-4 transition-all hover:border-[#00BFFF] hover:shadow-[0_0_15px_rgba(0,191,255,0.2)]"
              >
                <span className="text-2xl md:text-3xl font-bold text-[#E0E0E0] tracking-wider mx-auto">
                  LOOP40
                </span>
                <div className="absolute right-4 text-[#00BFFF]">
                  {copied ? <Check className="w-6 h-6" /> : <Copy className="w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity" />}
                </div>
              </button>
              
              <div className="h-6">
                {copied && (
                  <motion.span 
                    initial={{ opacity: 0, y: -5 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    className="text-sm text-[#00BFFF] font-medium"
                  >
                    Cupom copiado com sucesso!
                  </motion.span>
                )}
              </div>
            </div>

            <p className="text-sm md:text-base text-[#A0A0A0] font-light">
              Esta oferta é válida por tempo limitado e apenas agora.
            </p>

            <a 
              href="https://payt.site/8oClZz2" 
              className="w-full flex items-center justify-center space-x-2 bg-[#00BFFF] hover:bg-[#00BFFF]/90 text-[#0A0A0A] text-lg md:text-xl font-bold py-5 px-8 rounded-xl transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#00BFFF]/20"
            >
              <span>QUERO MEU DESCONTO DE 40% AGORA!</span>
              <ArrowRight className="w-6 h-6" strokeWidth={2.5} />
            </a>
          </div>
        </motion.div>

        {/* Value Reinforcement */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 w-full max-w-xl mx-auto space-y-4"
        >
          {bullets.map((bullet, idx) => (
            <div key={idx} className="flex items-center space-x-3 text-[#A0A0A0]">
              <CheckCircle2 className="w-5 h-5 text-[#00BFFF] flex-shrink-0" />
              <span className="text-base md:text-lg font-light">{bullet}</span>
            </div>
          ))}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-white/[0.03] py-6 mt-auto bg-[#0A0A0A]">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs text-[#A0A0A0] font-light">
            © 2026 LOOP™. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
