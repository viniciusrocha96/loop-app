"use client";

import { AccordionItem } from "../ui/AccordionItem";

export function FaqSection() {
  const faqs = [
    {
      question: "Como funciona o LOOP?",
      answer: "O LOOP é um sistema digital projetado para organizar sua rotina e transformar metas em passos executáveis. Você planeja seus ciclos diários, semanais e mensais em um único lugar, mantendo o controle total sobre o que precisa ser feito.",
    },
    {
      question: "Meus dados estão seguros?",
      answer: "Sim, a segurança e privacidade dos seus dados são nossa prioridade. Utilizamos infraestrutura robusta para garantir que suas informações estejam sempre protegidas e acessíveis apenas por você.",
    },
    {
      question: "Preciso ter conhecimentos técnicos para usar o LOOP?",
      answer: "Não! O LOOP foi desenvolvido com foco na simplicidade. Se você consegue usar um aplicativo de mensagens, conseguirá usar o LOOP para organizar sua vida em minutos.",
    },
    {
      question: "Posso usar o LOOP para controlar metas de toda a família/equipe?",
      answer: "O plano atual é focado na produtividade e gestão pessoal. No entanto, muitos usuários utilizam a clareza gerada no LOOP para organizar e liderar os projetos de suas equipes e famílias.",
    },
    {
      question: "Como faço para começar a usar o LOOP?",
      answer: "Basta clicar em qualquer botão desta página, realizar o pagamento seguro e você receberá o acesso imediato à plataforma no seu e-mail.",
    },
  ];

  return (
    <section className="w-full py-24 bg-[var(--color-primary-bg)]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-space-grotesk text-4xl font-bold text-[var(--color-text-light)]">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="bg-[var(--color-secondary-bg)] rounded-2xl p-6 md:p-8 border border-white/5">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
