"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQSection() {
  const faqs = [
    {
      q: "Como funciona o acesso?",
      a: "Após a compra, você receberá um e-mail com instruções para criar sua conta e acessar o app imediatamente. É rápido e simples!"
    },
    {
      q: "Funciona no celular e computador?",
      a: "Sim! O LOOP é 100% responsivo e funciona perfeitamente em qualquer dispositivo: celular, tablet ou computador."
    },
    {
      q: "Tenho garantia se não gostar?",
      a: "Sim, você tem 30 dias de garantia incondicional. Se não sentir resultados ou não gostar, devolvemos 100% do seu dinheiro sem perguntas."
    },
    {
      q: "O acesso é vitalício mesmo?",
      a: "Sim! Você paga apenas uma vez e tem acesso para sempre, incluindo todas as atualizações e novos recursos que adicionarmos."
    },
    {
      q: "Preciso baixar algum aplicativo?",
      a: "Não! O LOOP funciona diretamente no navegador. Você pode adicionar à tela inicial do seu celular para acesso rápido como um app."
    },
    {
      q: "O app substitui outras ferramentas?",
      a: "Sim! O LOOP integra rotina, finanças, hábitos, estudos, treinos e mais em um só lugar. Você não precisa de vários apps diferentes."
    },
    {
      q: "Consigo ver meu progresso?",
      a: "Com certeza! O app mostra estatísticas visuais do seu progresso diário, semanal e mensal. Você acompanha sua evolução em tempo real."
    },
    {
      q: "É difícil de usar?",
      a: "Não! O LOOP foi criado para ser intuitivo. Você escolhe como usar: pode deixar nossa IA gerar sua rotina base em segundos ou pode cadastrar tudo manualmente, no seu ritmo. Em poucos minutos você já está organizando sua vida sem complicação."
    },
    {
      q: "A IA decide tudo por mim?",
      a: "De jeito nenhum! A IA é o seu ponto de partida para economizar tempo. Assim que ela gera a sugestão de rotina, você tem liberdade total para alterar horários, mudar tarefas ou adicionar novos itens manualmente sempre que quiser."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 bg-[#111111]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Dúvidas Frequentes
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              key={index}
              className="border border-gray-800 bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                className="w-full text-left px-8 py-6 flex justify-between items-center bg-[#1a1a1a] text-white font-bold text-xl hover:bg-gray-800/80 transition-colors focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span>{faq.q}</span>
                <div className={`p-2 rounded-full bg-[#111111] transition-transform duration-300 ${openIndex === index ? "bg-[#3E86F5]" : ""}`}>
                  <ChevronDown className={`transform transition-transform duration-300 ${openIndex === index ? "rotate-180 text-white" : "text-[#aaaaaa]"}`} />
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <div className="px-8 pb-6 pt-2 text-[#aaaaaa] text-lg border-t border-gray-800/50 mx-8">
                  {faq.a}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
