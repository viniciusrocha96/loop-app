"use client";

import { m } from "framer-motion";
import { CtaButton } from "../ui/CtaButton";

export function HeroSection() {
  return (
    <section className="relative w-full pt-32 pb-20 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
      {/* Premium Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-tr from-[var(--color-accent-blue)]/10 via-[var(--color-accent-blue)]/5 to-transparent rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[var(--color-accent-gold)]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center gap-6"
        >
          <div className="inline-block rounded-full border border-[var(--color-accent-gold)]/30 bg-[var(--color-accent-gold)]/10 px-4 py-1.5 text-sm font-medium text-[var(--color-accent-gold)] mb-4">
            +1.500 pessoas no controle da própria vida com o LOOP
          </div>
          
          <h1 className="font-space-grotesk text-5xl md:text-7xl tracking-tight text-[var(--color-text-light)] max-w-4xl leading-[1.1]">
            <span className="font-black">Pare de gastar energia tentando lembrar da sua vida.</span><br />
            <span className="font-light italic text-[var(--color-accent-blue)] mt-2 inline-block">Comece a vivê-la.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[var(--color-text-muted)] max-w-2xl mt-4 mb-8">
            O sistema de gestão pessoal com IA que organiza sua rotina, metas e finanças em um único lugar. O fim dos "ciclos abertos" na sua mente.
          </p>
          
          <div className="flex flex-col items-center gap-4">
            <CtaButton text="COMEÇAR MINHA EVOLUÇÃO" href="#oferta" />
            <p className="text-sm text-[var(--color-text-muted)]/70">
              Garantia de 7 dias • Acesso Imediato • Pagamento Único
            </p>
          </div>
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="mt-20 w-full max-w-5xl relative"
        >
          {/* Neon border effect and Browser Mockup */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-accent-blue)]/20 via-[var(--color-accent-blue)]/40 to-[var(--color-accent-blue)]/20 rounded-2xl blur-xl opacity-70" />
          <div className="relative rounded-2xl border border-white/10 bg-black/80 shadow-[0_30px_100px_rgba(0,191,255,0.15)] backdrop-blur-md flex flex-col overflow-hidden">
            {/* Browser Header */}
            <div className="h-10 w-full bg-white/5 border-b border-white/5 flex items-center px-4 gap-2 shrink-0">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
             {/* Mockup content */}
            <div className="w-full bg-neutral-950 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent-blue)]/5 to-transparent pointer-events-none z-10" />
              {/* Video Player */}
              <video 
                src="/demo.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                preload="metadata"
                className="w-full h-auto opacity-90 transition-transform duration-700 hover:scale-[1.02]"
              >
                Seu navegador não suporta a reprodução de vídeo.
              </video>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
