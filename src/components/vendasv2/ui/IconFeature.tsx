"use client";

import { m } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface IconFeatureProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  delay?: number;
}

export function IconFeature({ title, description, Icon, delay = 0 }: IconFeatureProps) {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-start gap-4 rounded-2xl bg-[var(--color-secondary-bg)] p-6 border border-white/5 hover:border-[var(--color-accent-blue)]/50 transition-colors"
    >
      <div className="rounded-xl bg-[var(--color-accent-blue)]/10 p-3 text-[var(--color-accent-blue)]">
        <Icon className="h-6 w-6" strokeWidth={1.5} />
      </div>
      <h3 className="font-space-grotesk text-xl font-bold text-[var(--color-text-light)]">
        {title}
      </h3>
      <p className="text-[var(--color-text-muted)] leading-relaxed">
        {description}
      </p>
    </m.div>
  );
}
