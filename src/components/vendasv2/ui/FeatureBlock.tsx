"use client";

import { m } from "framer-motion";
import { Check } from "lucide-react";

interface FeatureBlockProps {
  title: string;
  description: string;
  features: string[];
  mockupSrc: string;
  reversed?: boolean;
}

export function FeatureBlock({ 
  title, 
  description, 
  features, 
  mockupSrc, 
  reversed = false 
}: FeatureBlockProps) {
  return (
    <section className="w-full py-24 border-b border-white/5 last:border-0 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-24`}>
          
          {/* Text Content */}
          <m.div 
            initial={{ opacity: 0, x: reversed ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex flex-col items-start gap-8 z-10"
          >
            <div className="flex flex-col gap-4">
              <h2 className="font-space-grotesk text-4xl md:text-5xl font-black uppercase tracking-tight text-[var(--color-text-light)]">
                {title}
              </h2>
              <p className="text-xl text-[var(--color-text-muted)] leading-relaxed">
                {description}
              </p>
            </div>

            <ul className="flex flex-col gap-4 w-full">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 bg-[var(--color-accent-blue)]/10 rounded-full p-1 shrink-0">
                    <Check className="h-4 w-4 text-[var(--color-accent-blue)]" strokeWidth={3} />
                  </div>
                  <span className="text-[var(--color-text-light)] font-medium text-lg">{feature}</span>
                </li>
              ))}
            </ul>

          </m.div>

          {/* Mockup */}
          <m.div 
            initial={{ opacity: 0, x: reversed ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-[var(--color-accent-blue)]/5 blur-[100px] pointer-events-none rounded-full" />
            
            <div className="relative rounded-2xl border border-white/10 bg-black/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden">
              <div className="h-8 w-full bg-white/5 border-b border-white/5 flex items-center px-4 gap-2 shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
              </div>
              <div className="aspect-[4/3] w-full bg-neutral-900 relative flex items-center justify-center">
                {/* Imagem/GIF do mockup aqui */}
                <img 
                  src={mockupSrc} 
                  alt={title} 
                  loading="lazy"
                  decoding="async"
                  className="object-cover w-full h-full opacity-90 transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </m.div>

        </div>
      </div>
    </section>
  );
}
