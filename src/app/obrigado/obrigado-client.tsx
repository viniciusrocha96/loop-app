"use client";

import { motion } from "framer-motion";
import { Mail, LayoutDashboard, Target } from "lucide-react";
import { NextStepsCard } from "../../components/ui/NextStepsCard";
import { Logo } from "../../components/ui/Logo";
import { ConfettiEffect } from "../../components/ui/ConfettiEffect";

export default function ObrigadoClient() {
  const nextSteps = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "1. Verifique seu E-mail",
      description: "Enviamos suas credenciais de acesso e o link para o portal. Verifique sua caixa de entrada (e spam/promoções)."
    },
    {
      icon: <LayoutDashboard className="h-6 w-6" />,
      title: "2. Acesse o Portal",
      description: "Utilize suas credenciais exclusivas recebidas por e-mail para acessar sua nova plataforma."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "3. Inicie sua Jornada",
      description: "Selecione o seu objetivo diário e dê o primeiro passo para sua evolução pessoal."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] font-sans antialiased selection:bg-[#00BFFF]/30 selection:text-white relative">
      <ConfettiEffect />
      {/* Header */}
      <header className="flex flex-col items-center justify-center pt-8 pb-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <div className="flex justify-center w-full -mt-2 md:-mt-6">
            <Logo className="w-[280px] sm:w-[340px] md:w-[420px]" />
          </div>
          <span className="text-lg md:text-xl font-medium tracking-wide text-[#2563EB] relative z-10 -mt-2 md:-mt-6">
            Seu Guia de Metas Diárias
          </span>
        </motion.div>
      </header>

      {/* Main Content Area */}
      <main className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-20 mt-8 relative z-10">
        
        {/* Success Hero Section */}
        <section className="flex flex-col items-center text-center space-y-6 mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#E0E0E0] text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide"
          >
            Parabéns pela sua conquista!
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-[#2563EB] via-[#60A5FA] to-[#00BFFF] leading-[1.15] max-w-3xl pb-2"
          >
            Seu Acesso ao LOOP Está Confirmado!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-lg md:text-xl font-medium text-[#A0A0A0] max-w-2xl mx-auto leading-relaxed pt-2"
          >
            O portal de evolução pessoal acaba de se abrir para você. Prepare-se para transformar suas metas em realidade.
          </motion.p>
        </section>

        {/* Next Steps Section */}
        <section className="w-full max-w-4xl mx-auto space-y-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-2xl md:text-3xl font-semibold text-[#E0E0E0] text-center"
          >
            O que fazer agora?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {nextSteps.map((step, index) => (
              <NextStepsCard
                key={index}
                index={index}
                icon={step.icon}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.03] py-8 mt-12 bg-[#0A0A0A] relative z-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs md:text-sm text-[#A0A0A0] font-normal">
            © 2026 LOOP™. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
