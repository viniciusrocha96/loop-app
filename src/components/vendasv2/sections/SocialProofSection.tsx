"use client";

import { motion } from "framer-motion";
import { TestimonialCard } from "../ui/TestimonialCard";

export function SocialProofSection() {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Empreendedor",
      text: "Eu sempre achei que precisava trabalhar mais horas para ter resultados. O LOOP me mostrou que eu só precisava de direção. Minha produtividade dobrou em semanas.",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    },
    {
      name: "Ana Beatriz",
      role: "Designer Gráfica",
      text: "A clareza que o sistema traz é absurda. Parei de tentar lembrar de tudo e deixei o LOOP cuidar disso. Finalmente sinto que estou avançando nos meus projetos.",
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    },
    {
      name: "Rafael Costa",
      role: "Desenvolvedor",
      text: "Já testei dezenas de apps, mas nenhum fechou a lacuna entre intenção e ação como o LOOP. A simplicidade é o maior trunfo.",
      imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    },
  ];

  const stats = [
    {
      value: "92%",
      label: "De Metas Concluídas",
      description: "Deixaram de ser apenas promessas e se tornaram progresso real no último mês.",
    },
    {
      value: "3x Mais",
      label: "Foco no Agora",
      description: "Usuários relatam maior capacidade de concentração ao eliminar ciclos abertos na mente.",
    },
    {
      value: "+1.500",
      label: "Vidas em Evolução",
      description: "Pessoas que decidiram assumir o controle total de sua rotina e finanças com o LOOP.",
    },
  ];

  return (
    <section className="w-full py-24 bg-[var(--color-primary-bg)]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Testimonials */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="font-space-grotesk text-4xl md:text-5xl font-bold text-[var(--color-text-light)]">
              Quem já transformou a vida com o <span className="text-[var(--color-accent-blue)]">LOOP</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                text={testimonial.text}
                imageUrl={testimonial.imageUrl}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-[var(--color-secondary-bg)] rounded-3xl p-12 border border-white/5 relative overflow-hidden">
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[var(--color-accent-blue)]/10 blur-[100px]" />
          
          <h3 className="font-space-grotesk text-3xl font-bold text-center text-[var(--color-text-light)] mb-12">
            O impacto real do LOOP
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col items-center text-center px-4 pt-8 md:pt-0 first:pt-0"
              >
                <span className="font-space-grotesk text-5xl font-bold text-[var(--color-accent-blue)] mb-2">
                  {stat.value}
                </span>
                <span className="text-xl font-bold text-[var(--color-text-light)] mb-2">
                  {stat.label}
                </span>
                <span className="text-[var(--color-text-muted)] text-sm">
                  {stat.description}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
