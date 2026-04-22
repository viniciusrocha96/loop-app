"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface NextStepsCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
}

export function NextStepsCard({ icon, title, description, index }: NextStepsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
      className="group relative flex flex-col items-start space-y-4 rounded-2xl border border-white/5 bg-[#1A1A1A] p-6 sm:p-8 transition-colors hover:border-[#2563EB]/30 hover:bg-[#1A1A1A]/80 shadow-lg relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/5 to-[#00BFFF]/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
      
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0A0A0A] border border-white/5 text-[#2563EB] shadow-inner relative z-10 group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
      
      <div className="space-y-2 relative z-10">
        <h3 className="text-lg font-semibold text-[#E0E0E0]">{title}</h3>
        <p className="text-sm font-light leading-relaxed text-[#A0A0A0]">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
