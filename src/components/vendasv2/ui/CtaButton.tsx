"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface CtaButtonProps {
  text: string;
  href?: string;
  className?: string;
  icon?: boolean;
}

export function CtaButton({ text, href = "https://payt.site/8oClZz2", className = "", icon = true }: CtaButtonProps) {
  return (
    <a
      href={href}
      onTouchStart={() => { window.location.href = href; }}
      onMouseDown={(e) => { if(e.button === 0) window.location.href = href; }}
      className={`relative group overflow-hidden rounded-full bg-[var(--color-accent-blue)] px-10 py-5 font-black text-lg text-black shadow-[0_0_20px_rgba(0,191,255,0.3)] transition-all hover:shadow-[0_0_30px_rgba(0,191,255,0.6)] hover:scale-105 active:scale-95 inline-block text-center flex items-center justify-center ${className}`}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {text}
        {icon && <ArrowRight className="h-5 w-5" />}
      </span>
      <div className="absolute inset-0 z-0 h-full w-full bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
    </a>
  );
}
