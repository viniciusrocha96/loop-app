"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function ConfettiEffect() {
  const [pieces, setPieces] = useState<any[]>([]);

  useEffect(() => {
    const colors = ["#2563EB", "#00BFFF", "#FFFFFF", "#3B82F6"];
    const piecesArray = Array.from({ length: 80 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: -10 - Math.random() * 20,
      rotation: Math.random() * 360,
      scale: Math.random() * 0.5 + 0.5,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 0.4, 
      duration: Math.random() * 2 + 2.5,
    }));
    setPieces(piecesArray);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {pieces.map((p) => (
        <motion.div
           key={p.id}
           initial={{ top: `${p.y}%`, left: `${p.x}%`, rotate: 0, opacity: 1 }}
           animate={{ 
             top: "120%", 
             rotate: p.rotation + 360,
             opacity: [1, 1, 0]
           }}
           transition={{ duration: p.duration, delay: p.delay, ease: "linear" }}
           className="absolute w-3 h-3 rounded-[2px] shadow-sm"
           style={{ backgroundColor: p.color, scale: p.scale }}
        />
      ))}
    </div>
  );
}
