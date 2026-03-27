"use client";

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDown, Check, X, Target, Link as LinkIcon, CheckCircle2, ShieldCheck, PlayCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { FAQSection } from '@/components/sales-page/FAQSection';

const testimonialsData = [
  { text: "O LOOP foi a primeira coisa simples que realmente me fez sentir progresso no dia a dia.", letter: "R", name: "Rafael M." },
  { text: "Depois que comecei a usar o método, parece que alguém organizou minha mente.", letter: "J", name: "Juliana C." },
  { text: "Hoje eu termino o dia sabendo exatamente o que concluí.", letter: "A", name: "André S." },
  { text: "É simples, prático e funciona na vida real.", letter: "F", name: "Fernanda L." }
];

export default function VendasPage() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 7;

  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [testimonialsHovered, setTestimonialsHovered] = useState(false);
  const [testimonialsIndex, setTestimonialsIndex] = useState(0);
  const totalTestimonials = 4;

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const slideWidth = carouselRef.current.clientWidth;
        const nextIndex = (currentIndex + 1) % totalSlides;
        carouselRef.current.scrollTo({ left: slideWidth * nextIndex, behavior: 'smooth' });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, isHovered]);

  useEffect(() => {
    if (testimonialsHovered) return;
    const interval = setInterval(() => {
      if (testimonialsRef.current) {
        const slideWidth = testimonialsRef.current.clientWidth;
        const nextIndex = (testimonialsIndex + 1) % totalTestimonials;
        testimonialsRef.current.scrollTo({ left: slideWidth * nextIndex, behavior: 'smooth' });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonialsIndex, testimonialsHovered]);

  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const slideWidth = carouselRef.current.clientWidth;
      const newIndex = Math.round(scrollLeft / slideWidth);
      if (newIndex !== currentIndex && newIndex < totalSlides) {
        setCurrentIndex(newIndex);
      }
    }
  };

  const handleTestimonialScroll = () => {
    if (testimonialsRef.current) {
      const scrollLeft = testimonialsRef.current.scrollLeft;
      const slideWidth = testimonialsRef.current.clientWidth;
      const newIndex = Math.round(scrollLeft / slideWidth);
      if (newIndex !== testimonialsIndex && newIndex < totalTestimonials) {
        setTestimonialsIndex(newIndex);
      }
    }
  };

  const goToSlide = (index: number) => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.clientWidth;
      carouselRef.current.scrollTo({ left: slideWidth * index, behavior: 'smooth' });
    }
  };

  const goToTestimonialSlide = (index: number) => {
    if (testimonialsRef.current) {
      const slideWidth = testimonialsRef.current.clientWidth;
      testimonialsRef.current.scrollTo({ left: slideWidth * index, behavior: 'smooth' });
    }
  };

  const scrollRight = () => goToSlide((currentIndex + 1) % totalSlides);
  const scrollLeft = () => goToSlide((currentIndex - 1 + totalSlides) % totalSlides);

  const scrollTestimonialRight = () => goToTestimonialSlide((testimonialsIndex + 1) % totalTestimonials);
  const scrollTestimonialLeft = () => goToTestimonialSlide((testimonialsIndex - 1 + totalTestimonials) % totalTestimonials);

  const handleCheckout = () => {
    window.location.href = 'https://ggcheckout.com.br/checkout/v3/DxJbpZMc4hJDilcoHuQw';
  };

  return (
    <div className="bg-[#111111] min-h-screen text-[#f0f0f0] font-sans selection:bg-[#3E86F5]/30">
      
      {/* SEÇÃO 1: O DESPERTAR (HERO) */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-4 py-24 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center z-10"
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight text-white">
            Se você sente que está sempre <span className="text-[#3E86F5]">ocupado</span>… mas sua vida parece <span className="text-[#3E86F5]">não sair do lugar</span>, leia isso com atenção.
          </h1>
          
          <p className="text-xl md:text-3xl text-[#cccccc] font-medium leading-relaxed max-w-3xl mx-auto">
            Você não tem um problema de disciplina.<br className="hidden md:block"/> Você tem um problema de <span className="font-bold text-white uppercase tracking-wide">ciclos abertos</span>.
          </p>
        </motion.div>
        
        {/* Decorative background blurs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3E86F5]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#3E86F5]/5 rounded-full blur-[150px] pointer-events-none" />
      </section>

      {/* SEÇÃO 2: O PADRÃO INVISÍVEL */}
      <section className="py-24 px-4 bg-[#141414] border-t border-white/5 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="text-2xl md:text-4xl text-white mb-8 font-bold leading-tight tracking-tight">
              Existe um motivo silencioso pelo qual tantas pessoas inteligentes vivem presas em um padrão invisível:
            </p>

            <p className="text-xl md:text-2xl text-[#aaaaaa] mb-16 leading-relaxed max-w-3xl mx-auto font-medium">
              Este é o ciclo silencioso que prende muitas pessoas. Elas planejam mudanças, começam cheias de motivação, mas sem um sistema para sustentar o progresso acabam perdendo o ritmo, e tudo recomeça novamente na semana seguinte.
            </p>

            {/* Infográfico Visual do Fluxo */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-20 px-4">
               <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10 w-full md:w-auto shadow-lg hover:border-[#3E86F5]/50 transition-colors">
                 <span className="font-bold text-white text-xl md:text-2xl">Planejam</span>
               </div>
               <ArrowDown className="md:-rotate-90 text-[#3E86F5] w-8 h-8 md:w-10 md:h-10 shrink-0" />
               <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10 w-full md:w-auto shadow-lg hover:border-[#3E86F5]/50 transition-colors">
                 <span className="font-bold text-white text-xl md:text-2xl">Começam animadas</span>
               </div>
               <ArrowDown className="md:-rotate-90 text-[#3E86F5] w-8 h-8 md:w-10 md:h-10 shrink-0" />
               <div className="bg-red-500/10 p-6 rounded-2xl border border-red-500/30 w-full md:w-auto shadow-lg">
                 <div className="flex flex-col items-center">
                   <span className="font-bold text-[#f87171] text-xl md:text-2xl">Perdem o ritmo</span>
                   <span className="text-base font-medium text-red-300 uppercase tracking-widest mt-1 text-xs">Sentem culpa</span>
                 </div>
               </div>
               <ArrowDown className="md:-rotate-90 text-[#3E86F5] w-8 h-8 md:w-10 md:h-10 shrink-0" />
               <div className="bg-[#3E86F5]/10 p-6 rounded-2xl border border-[#3E86F5]/50 w-full md:w-auto shadow-[0_0_30px_rgba(62,134,245,0.2)]">
                 <div className="flex flex-col items-center">
                   <span className="font-bold text-white text-xl md:text-2xl">Recomeçam tudo</span>
                   <span className="text-base font-medium text-blue-300 mt-1">na semana seguinte</span>
                 </div>
               </div>
            </div>

            <div className="inline-block bg-[#111111] p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#3E86F5]/20 rounded-full blur-[60px] pointer-events-none" />
              <p className="text-xl md:text-2xl text-[#bbbbbb] mb-4 font-medium">Não importa quantos planners ou aplicativos usem.</p>
              <p className="text-2xl md:text-4xl font-bold text-white tracking-tight leading-snug">
                A sensação continua a mesma:<br className="hidden md:block"/> <span className="text-[#3E86F5]">ocupado… mas sem progresso real.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO 3: A MENTIRA DA PRODUTIVIDADE */}
      <section className="py-32 px-4 relative bg-[#111111] border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-10 text-white tracking-tight">
              A Mentira da <br className="md:hidden" />Produtividade
            </h2>
            <p className="text-xl md:text-3xl text-[#aaaaaa] leading-relaxed mb-16 font-medium max-w-3xl mx-auto">
              Disseram que você precisava acordar às 5 da manhã, ter disciplina extrema, usar dezenas de aplicativos e criar rotinas perfeitas. E se você não consegue manter isso… o problema seria você.
            </p>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-[#1a0f0f] border border-red-500/30 p-10 md:p-16 rounded-[2rem] shadow-[0_0_50px_rgba(239,68,68,0.15)] relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-500/20 blur-[60px] rounded-full pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-red-500/20 blur-[60px] rounded-full pointer-events-none" />
              
              <p className="text-3xl md:text-6xl font-black text-red-500 tracking-tight uppercase relative z-10 flex items-center justify-center gap-4">
                <span className="text-4xl md:text-7xl">❌</span> Mas isso não é verdade.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO 3: O VERDADEIRO VILÃO (CICLOS ABERTOS) */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >

            
            <p className="text-xl md:text-3xl font-medium text-[#cccccc] leading-relaxed mb-12 text-center mx-auto">
              A culpa não é da sua força de vontade. O verdadeiro vilão silencioso são os <strong className="text-white">Ciclos Abertos de Execução</strong>. Quando você começa coisas e não fecha ciclos, três coisas acontecem:
            </p>
            
            <div className="bg-[#1a1a1a] rounded-2xl p-6 md:p-8 mb-8 border border-red-500/10">
              <ul className="space-y-4 text-lg text-red-100/70">
                <li className="flex items-start gap-4">
                  <X className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                  <span>Você planeja e não termina</span>
                </li>
                <li className="flex items-start gap-4">
                  <X className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                  <span>Sua mente fica pesada tentando lembrar de tudo</span>
                </li>
                <li className="flex items-start gap-4">
                  <X className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                  <span>Você tenta compensar trabalhando mais</span>
                </li>
              </ul>
            </div>

            <p className="text-lg md:text-xl text-[#aaaaaa] mb-10">
              O resultado? Ansiedade. Sobrecarga mental. E sensação constante de atraso.
            </p>

            <blockquote className="border-l-4 border-[#3E86F5] pl-6 py-2 my-10 italic text-xl md:text-2xl text-white/90">
              “O cérebro humano não foi feito para reter informações inacabadas. Ele foi feito para fechar loops.”
            </blockquote>

            <p className="text-lg md:text-xl text-[#cccccc] leading-relaxed">
              Quando você não tem um sistema que fecha ciclos… sua mente gasta energia tentando lembrar do que ainda está aberto. <strong className="text-white font-medium">Isso drena sua motivação todos os dias.</strong>
            </p>
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO 4: A SOLUÇÃO (O MÉTODO LOOP) */}
      <section className="py-24 px-4 bg-[#3E86F5]/5 border-y border-[#3E86F5]/10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Pensando nisso criamos o LOOP: Seu Guia de Metas Diárias</h2>
            <p className="text-lg md:text-xl text-[#cccccc] max-w-3xl mx-auto leading-relaxed">
              Um sistema simples para transformar boas intenções em progresso diário.<br /><br />
              O LOOP é um sistema de evolução pessoal, onde você organiza toda a sua vida em um só lugar: sua agenda do dia, suas metas mensais e seus objetivos do ano. Com ajuda de uma IA integrada, o sistema te ajuda a planejar, organizar e executar o que realmente importa, sem depender de motivação ou rotinas impossíveis. A ideia é simples: pequenos ciclos de planejamento e execução que fazem o progresso acontecer todos os dias.
            </p>
          </motion.div>

          <div className="space-y-12">
            
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start p-8 bg-[#111111] rounded-3xl border border-white/5 hover:border-[#3E86F5]/30 transition-colors">
              <div className="w-16 h-16 rounded-full bg-[#3E86F5]/10 flex items-center justify-center shrink-0">
                <Target className="w-8 h-8 text-[#3E86F5]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">1. Clareza <span className="text-[#3E86F5] font-medium text-xl">(Metas que fazem sentido)</span></h3>
                <p className="text-[#aaaaaa] text-lg leading-relaxed">No LOOP você define metas anuais e mensais, e transforma esses objetivos em ações simples para o dia a dia. Nada de listas gigantes. Apenas o que realmente move sua vida para frente.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start p-8 bg-[#111111] rounded-3xl border border-white/5 hover:border-[#3E86F5]/30 transition-colors">
              <div className="w-16 h-16 rounded-full bg-[#3E86F5]/10 flex items-center justify-center shrink-0">
                <LinkIcon className="w-8 h-8 text-[#3E86F5]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">2. Organização <span className="text-[#3E86F5] font-medium text-xl">(Seu dia estruturado)</span></h3>
                <p className="text-[#aaaaaa] text-lg leading-relaxed">O LOOP organiza sua agenda diária e sua rotina em um sistema simples de execução. Você pode estruturar tarefas, compromissos e blocos de foco para o seu dia. E se quiser, pode simplesmente falar com a IA integrada que ela ajuda a criar tarefas, planejar sua semana ou organizar sua rotina de forma rápida.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start p-8 bg-[#111111] rounded-3xl border border-white/5 hover:border-[#3E86F5]/30 transition-colors">
              <div className="w-16 h-16 rounded-full bg-[#3E86F5]/10 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-8 h-8 text-[#3E86F5]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">3. Fechamento <span className="text-[#3E86F5] font-medium text-xl">(Progresso real)</span></h3>
                <p className="text-[#aaaaaa] text-lg leading-relaxed">Cada tarefa concluída fecha um pequeno ciclo de execução. Isso cria um efeito poderoso: quanto mais ciclos você fecha, mais sensação de progresso você sente, e mais fácil fica continuar avançando.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO 5: VEJA POR DENTRO DO LOOP */}
      <section className="py-24 px-4 bg-[#111111] border-t border-white/5 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 tracking-tight">Veja por dentro do LOOP</h2>
            
            <div className="text-lg md:text-xl text-[#cccccc] leading-relaxed mx-auto text-left space-y-6 max-w-3xl">
              <p>
                É como ter uma secretária pessoal… só que dentro do seu celular.<br/>
                O LOOP foi criado para <strong className="text-white">organizar sua rotina sem esforço.</strong><br/>
                Nada de telas confusas. Nada de sistemas complicados.
              </p>
              
              <p>
                Logo no início, você responde algumas perguntas simples…<br/>
                E em poucos segundos, sua <strong className="text-white">rotina já está montada automaticamente.</strong>
              </p>
              
              <p>
                Mas o diferencial vai muito além disso.<br/>
                Você pode simplesmente <strong className="text-[#3E86F5]">conversar com o LOOP</strong> como se estivesse falando com alguém:
              </p>
              
              <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10 space-y-3 font-medium italic text-white my-8 shadow-lg">
                <p>🗣️ “Organiza minha semana”</p>
                <p>🗣️ “Adiciona treino amanhã de manhã”</p>
              </div>
              
              <p>
                E ele faz tudo pra você.<br/>
                Sem esforço. Sem pensar demais. Sem travar.
              </p>
              
              <p>
                E não é só sobre tarefas…<br/>
                O LOOP também te ajuda a <strong className="text-white">evoluir de verdade.</strong><br/>
                Você define suas metas — mensais e anuais —<br/>
                e o sistema transforma isso em ações claras no seu dia a dia.
              </p>

              <p>
                Seus hábitos ficam visíveis, organizados e fáceis de executar.<br/>
                E a cada dia concluído, você vê seu progresso acontecendo de forma real.
              </p>

              <p>
                Nada de listas infinitas.<br/>
                Nada de começar e parar toda semana.<br/>
                Apenas <strong className="text-white">consistência, clareza e progresso contínuo.</strong>
              </p>

              <p>
                Tudo isso em um ambiente simples, intuitivo e direto ao ponto…<br/>
                Como se alguém estivesse organizando sua vida por trás dos bastidores.
              </p>
            </div>
          </motion.div>

          {/* Carrossel Single-Item */}
          <div 
            className="relative mt-16 max-w-5xl mx-auto group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
          >
            <button 
              onClick={scrollLeft}
              className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-[#111111]/90 hover:bg-[#2563eb] text-white p-3 md:p-5 rounded-full opacity-90 transition-all border border-white/20 shadow-2xl flex items-center justify-center transform hover:scale-105"
            >
              <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
            </button>
            
            <div 
              ref={carouselRef}
              onScroll={handleScroll}
              className="flex overflow-x-auto snap-x snap-mandatory pb-16 pt-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] scroll-smooth w-full"
            >
              {[1, 2, 3, 4, 5, 6, 7].map((num, idx) => (
                <div key={idx} className="w-full shrink-0 snap-center flex items-center justify-center px-4 md:px-24">
                  <Image 
                    src={`/print-${num}.png`} 
                    alt={`Tela do app LOOP ${num}`} 
                    width={1081}
                    height={608}
                    priority={num === 1}
                    unoptimized
                    className="w-full h-auto max-w-4xl mx-auto rounded-[2.5rem] md:rounded-[3rem] border-8 border-[#1a1a1a] shadow-[0_30px_60px_rgba(0,0,0,0.8)] object-contain bg-black relative"
                  />
                </div>
              ))}
            </div>

            <button 
              onClick={scrollRight}
              className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-[#111111]/90 hover:bg-[#2563eb] text-white p-3 md:p-5 rounded-full opacity-90 transition-all border border-white/20 shadow-2xl flex items-center justify-center transform hover:scale-105"
            >
              <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
            </button>

            {/* Bullets Navigation */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 md:gap-3 z-20">
              {Array.from({ length: totalSlides }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`transition-all duration-300 rounded-full ${
                    currentIndex === idx 
                      ? 'w-8 h-2 md:h-3 bg-[#3E86F5]' 
                      : 'w-2 h-2 md:w-3 md:h-3 bg-white/20 hover:bg-white/50'
                  }`}
                  aria-label={`Ir para o slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 5: O QUE VOCÊ RECEBE + BÔNUS */}
      <section className="py-24 px-4 bg-[#141414]">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">O que você recebe no LOOP:</h3>
              <ul className="space-y-4">
                {[
                  "Definir metas claras",
                  "Planejar seu dia com intenção",
                  "Reduzir sobrecarga mental",
                  "Criar consistência",
                  "Acompanhar seu progresso",
                  "Rotina pronta de alta performance com IA"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg text-[#cccccc]">
                    <Check className="w-5 h-5 text-green-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#111111] p-8 md:p-10 rounded-3xl border border-[#3E86F5]/20 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#3E86F5]/10 rounded-full blur-[50px] pointer-events-none" />
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🎁</span>
                <h3 className="text-xl md:text-2xl font-bold text-white">Bônus Especial:</h3>
              </div>
              <h4 className="text-2xl font-black text-[#3E86F5] mb-4">Controle de Vida Financeira</h4>
              <p className="text-[#aaaaaa] text-lg leading-relaxed mb-6">
                Uma seção completa para organizar sua vida financeira. Você vai poder acompanhar entradas e saídas, entender para onde seu dinheiro está indo e criar metas financeiras claras.
              </p>
              <p className="text-white/80 font-medium italic border-l-2 border-white/20 pl-4 py-1">
                Porque não adianta organizar sua rotina… se suas finanças continuam no caos.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SEÇÃO 6: VISUALIZAÇÃO E PROVA SOCIAL */}
      <section className="py-32 px-4 bg-[#111111] border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight">Imagine sua vida daqui a 30 dias</h2>
            <p className="text-lg md:text-xl text-[#cccccc] leading-relaxed">
              Você não acorda mais confuso. Você abre seu planejamento e já sabe qual ciclo precisa fechar hoje. A névoa mental desaparece. A lista infinita deixa de existir. E no final do dia… em vez de sentir culpa por "ter feito muito e avançado pouco"… você sente algo muito mais raro: <strong className="text-white font-bold">progresso silencioso.</strong>
            </p>
          </motion.div>

          {/* DEPOIMENTOS - Fundo Claro, Aspas Azuis, Grid 2x2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">O que dizem nossos usuários 💬</h2>
          </motion.div>
          <div 
            className="relative mt-12 max-w-5xl mx-auto group"
            onMouseEnter={() => setTestimonialsHovered(true)}
            onMouseLeave={() => setTestimonialsHovered(false)}
            onTouchStart={() => setTestimonialsHovered(true)}
            onTouchEnd={() => setTestimonialsHovered(false)}
          >
            <button 
              onClick={scrollTestimonialLeft}
              className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-[#111111]/90 hover:bg-[#2563eb] text-white p-3 md:p-5 rounded-full opacity-90 transition-all border border-white/20 shadow-2xl flex items-center justify-center transform hover:scale-105"
            >
              <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
            </button>
            
            <div 
              ref={testimonialsRef}
              onScroll={handleTestimonialScroll}
              className="flex overflow-x-auto snap-x snap-mandatory pb-16 pt-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] scroll-smooth w-full"
            >
              {testimonialsData.map((t, idx) => (
                <div key={idx} className="w-full shrink-0 snap-center flex items-center justify-center px-4 md:px-24">
                  <div className="bg-[#f0f0f0] text-[#111111] p-10 md:p-14 rounded-3xl shadow-lg relative w-full border border-white/10 max-w-3xl mx-auto">
                    <span className="absolute -top-4 -left-2 text-[80px] md:text-[100px] text-[#3E86F5] font-serif leading-none opacity-40">"</span>
                    <p className="text-xl md:text-3xl font-medium leading-relaxed mb-10 relative z-10 italic text-gray-800 text-center">
                      {t.text}
                    </p>
                    <div className="flex items-center justify-center gap-4">
                      <div className="w-14 h-14 bg-gray-300 rounded-full flex items-center justify-center font-bold text-xl text-gray-600">{t.letter}</div>
                      <div className="font-bold text-xl">{t.name}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={scrollTestimonialRight}
              className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-[#111111]/90 hover:bg-[#2563eb] text-white p-3 md:p-5 rounded-full opacity-90 transition-all border border-white/20 shadow-2xl flex items-center justify-center transform hover:scale-105"
            >
              <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
            </button>

            {/* Bullets Navigation */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 md:gap-3 z-20">
              {Array.from({ length: totalTestimonials }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToTestimonialSlide(idx)}
                  className={`transition-all duration-300 rounded-full ${
                    testimonialsIndex === idx 
                      ? 'w-8 h-2 md:h-3 bg-[#3E86F5]' 
                      : 'w-2 h-2 md:w-3 md:h-3 bg-white/20 hover:bg-white/50'
                  }`}
                  aria-label={`Ir para o depoimento ${idx + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SEÇÃO 7: OFERTA E GARANTIA */}
      <section className="py-24 px-4 bg-[#141414] border-t border-white/5" id="oferta">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 bg-[#111111] p-10 rounded-3xl border-2 border-[#3E86F5] text-center w-full relative shadow-[0_0_50px_rgba(62,134,245,0.1)]"
          >
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[#3E86F5] text-white py-2 px-8 rounded-full font-bold uppercase tracking-widest text-sm shadow-xl whitespace-nowrap">
              Oferta Especial
            </div>
            
            <h3 className="text-2xl font-bold text-white mt-4 mb-2">LOOP: Guia Diário de Metas</h3>
            <p className="text-[#aaaaaa] mb-8 font-medium">+ Bônus Controle Financeiro</p>
            
            <div className="text-gray-500 text-xl md:text-2xl mb-2 line-through decoration-red-500/50">De R$ 147,00</div>
            <div className="flex items-center justify-center gap-3 mb-12">
              <span className="text-xl text-white">por</span>
              <span className="text-6xl md:text-7xl font-black text-[#3E86F5] leading-none">R$47</span>
            </div>
            
            <div className="text-[#aaaaaa] font-medium mb-10 flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" /> Pagamento único. Sem mensalidade.
            </div>

            <a href="https://ggcheckout.com.br/checkout/v3/DxJbpZMc4hJDilcoHuQw" className="block w-full">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-[#2563eb] text-white font-bold text-xl py-5 rounded-xl shadow-[0_10px_30px_rgba(37,99,235,0.3)] hover:bg-[#1d4ed8] transition-colors flex justify-center items-center"
              >
                Garantir Meu Acesso Agora
              </motion.button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 p-8 md:p-10 bg-[#1a1a1a] rounded-3xl border border-white/10"
          >
            <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
              <ShieldCheck className="w-10 h-10 text-green-500" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Garantia de 7 dias</h3>
            <p className="text-lg text-[#aaaaaa] leading-relaxed">
              Teste o método por 7 dias. Se você não sentir mais clareza na sua rotina… basta pedir reembolso. Sem perguntas.
            </p>
          </motion.div>

        </div>
      </section>

      {/* SEÇÃO 8: FECHAMENTO (O AGORA) */}
      <section className="py-32 px-4 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">Chegou a hora de fechar seus ciclos</h2>
            <p className="text-xl md:text-2xl text-[#cccccc] mb-12 leading-relaxed">
              Imagine continuar vivendo exatamente como hoje… daqui a 6 meses. Agora imagine 6 meses fechando pequenos ciclos todos os dias. A diferença começa com uma decisão simples.
            </p>
            
            <a href="https://ggcheckout.com.br/checkout/v3/DxJbpZMc4hJDilcoHuQw" className="block w-full md:w-auto mx-auto mb-16">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full md:w-auto bg-[#2563eb] text-white font-bold text-xl md:text-2xl py-6 px-12 rounded-2xl shadow-[0_10px_40px_rgba(37,99,235,0.3)] hover:bg-[#1d4ed8] transition-all flex items-center justify-center"
              >
                Quero fechar meus ciclos agora 👇
              </motion.button>
            </a>

            <div className="text-left text-lg md:text-xl text-[#aaaaaa] max-w-2xl mx-auto bg-[#141414] p-8 md:p-10 rounded-3xl border border-white/5">
              <p className="mb-6"><strong className="text-white">Última pergunta:</strong> Quantas vezes você já prometeu para si mesmo que agora vai se organizar de verdade?</p>
              <p className="mb-6">Talvez o que faltava não era disciplina. Era apenas um sistema simples para fechar ciclos.</p>
              <p className="font-bold text-white text-xl">Começar agora por R$47.</p>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative background glow */}
        <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#3E86F5]/10 blur-[150px] rounded-[100%] pointer-events-none" />
      </section>

      {/* SEÇÃO 9: DÚVIDAS FREQUENTES */}
      <FAQSection />

    </div>
  );
}
