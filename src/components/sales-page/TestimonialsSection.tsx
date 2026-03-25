"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rafael M.",
    role: "Analista de TI",
    text: "O LOOP foi a primeira coisa simples que realmente me fez sentir progresso no dia a dia.",
    initials: "RM"
  },
  {
    name: "Juliana C.",
    role: "Estudante",
    text: "Depois que comecei a usar o método, parece que alguém organizou minha mente.",
    initials: "JC"
  },
  {
    name: "André S.",
    role: "Empreendedor",
    text: "Hoje eu termino o dia sabendo exatamente o que concluí.",
    initials: "AS"
  },
  {
    name: "Fernanda L.",
    role: "Professora",
    text: "É simples, prático e funciona na vida real.",
    initials: "FL"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-24 px-4 bg-[#111111]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            O que dizem sobre o método
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#e0e0e0] rounded-3xl p-8 relative flex flex-col justify-between shadow-xl"
            >
              <Quote className="text-[#3E86F5] w-16 h-16 mb-4 opacity-40 absolute top-6 left-6" />
              <div className="z-10 relative">
                <p className="text-xl text-gray-800 italic mb-10 pt-8 font-medium leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#3E86F5] flex items-center justify-center text-white font-bold text-xl shadow-md">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600 font-medium">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
