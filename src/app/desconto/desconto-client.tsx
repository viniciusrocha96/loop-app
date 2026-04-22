"use client";

import { motion } from "framer-motion";
import { Check, Copy, ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Logo } from "../../components/ui/Logo";

export default function DescontoClient() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const code = "LOOP40";
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(code);
      } else {
        // Fallback for older browsers or testing over Wi-Fi IPs (HTTP)
        const textArea = document.createElement("textarea");
        textArea.value = code;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Falha ao copiar cupom", err);
    }
  };

  const bullets = [
    "Feche definitivamente seus ciclos abertos.",
    "Transforme suas metas travadas em realidade diária.",
    "Tenha clareza, direção e foco inabalável."
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] font-sans antialiased selection:bg-[#2563EB]/30 selection:text-white flex flex-col">
      {/* Header */}
      <header className="flex flex-col items-center justify-center pt-8 pb-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center w-full -mt-2 md:-mt-6"
        >
          <Logo className="w-[280px] sm:w-[340px] md:w-[420px]" />
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center pb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center space-y-6 mb-12 w-full mt-8 relative z-10"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#E0E0E0] leading-[1.15]">
            Não vá ainda! Uma oferta <span className="text-[#2563EB]">especial</span> espera por você.
          </h1>
          <p className="text-lg md:text-xl font-medium text-[#A0A0A0] max-w-3xl mx-auto leading-relaxed">
            Parece que você está prestes a perder a chance de transformar sua produtividade e fechar seus ciclos de uma vez por todas. Mas queremos te dar uma última oportunidade.
          </p>
        </motion.div>

        {/* Offer Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full max-w-2xl bg-[#1A1A1A] border border-[#2563EB]/30 rounded-3xl p-8 md:p-10 shadow-[0_0_40px_rgba(37,99,235,0.08)] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/10 to-transparent pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center text-center space-y-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#2563EB] tracking-tight">
              ÚLTIMA CHANCE: 40% DE DESCONTO!
            </h2>
            
            <div className="w-full flex flex-col items-center space-y-4">
              <span className="text-[#E0E0E0] text-lg font-medium">Use o cupom:</span>
              
              <button 
                onClick={handleCopy}
                className="group relative flex items-center justify-between w-full max-w-xs bg-[#0A0A0A] border border-[#2563EB]/50 rounded-xl p-4 transition-all hover:border-[#2563EB] hover:shadow-[0_0_15px_rgba(37,99,235,0.2)]"
              >
                <span className="text-2xl md:text-3xl font-bold text-[#E0E0E0] tracking-wider mx-auto">
                  LOOP40
                </span>
                <div className="absolute right-4 text-[#2563EB]">
                  {copied ? <Check className="w-6 h-6" /> : <Copy className="w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity" />}
                </div>
              </button>
              
              <div className="h-6">
                {copied && (
                  <motion.span 
                    initial={{ opacity: 0, y: -5 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    className="text-sm text-[#2563EB] font-medium"
                  >
                    Cupom copiado com sucesso!
                  </motion.span>
                )}
              </div>
            </div>

            <p className="text-sm md:text-base text-[#A0A0A0] font-normal">
              Esta oferta é válida por tempo limitado e apenas agora.
            </p>

            <motion.a 
              href="https://payt.site/8oClZz2?cupom=LOOP40"
              onPointerDown={(e) => {
                if (e.button === 0) window.location.href = "https://payt.site/8oClZz2?cupom=LOOP40";
              }}
              animate={{ 
                scale: [1, 1.03, 1],
                boxShadow: [
                  "0px 0px 0px 0px rgba(37,99,235,0)",
                  "0px 0px 25px 5px rgba(37,99,235,0.4)",
                  "0px 0px 0px 0px rgba(37,99,235,0)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full flex items-center justify-center space-x-2 bg-[#2563EB] text-white text-lg md:text-xl font-bold py-5 px-8 rounded-xl cursor-pointer"
            >
              <span>QUERO MEU DESCONTO DE 40% AGORA!</span>
              <ArrowRight className="w-6 h-6" strokeWidth={2.5} />
            </motion.a>
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
              <CheckCircle2 className="w-5 h-5 text-[#2563EB] flex-shrink-0" />
              <span className="text-base md:text-lg font-medium">{bullet}</span>
            </div>
          ))}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-white/[0.03] py-6 mt-auto bg-[#0A0A0A]">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs text-[#A0A0A0] font-normal">
            © 2026 LOOP™. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
