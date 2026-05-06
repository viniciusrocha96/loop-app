"use client";

import { m } from "framer-motion";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  text: string;
  imageUrl?: string;
  delay?: number;
}

export function TestimonialCard({ name, role, text, imageUrl, delay = 0 }: TestimonialCardProps) {
  return (
    <m.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col gap-6 rounded-2xl bg-[var(--color-secondary-bg)] p-8 border border-white/5 relative"
    >
      <Quote className="absolute top-6 right-6 h-10 w-10 text-[var(--color-accent-blue)]/20" />
      
      <p className="text-[var(--color-text-light)] text-lg leading-relaxed relative z-10 italic">
        "{text}"
      </p>
      
      <div className="flex items-center gap-4 mt-auto">
        <div className="h-12 w-12 rounded-full bg-neutral-800 overflow-hidden flex-shrink-0 border-2 border-[var(--color-accent-blue)]/30">
          {imageUrl ? (
            <img src={imageUrl} alt={name} loading="lazy" decoding="async" className="h-full w-full object-cover" />
          ) : (
            <div className="h-full w-full flex items-center justify-center text-[var(--color-accent-blue)] font-bold">
              {name.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <h4 className="font-bold text-[var(--color-text-light)]">{name}</h4>
          <p className="text-sm text-[var(--color-text-muted)]">{role}</p>
        </div>
      </div>
    </m.div>
  );
}
