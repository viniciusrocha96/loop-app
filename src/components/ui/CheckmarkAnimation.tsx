"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function CheckmarkAnimation() {
  return (
    <div className="flex justify-center items-center my-6">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.1,
        }}
        className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-tr from-[#2563EB]/20 to-[#00BFFF]/20 shadow-[0_0_40px_rgba(37,99,235,0.15)]"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.3,
          }}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-tr from-[#2563EB] to-[#60A5FA]"
        >
          <motion.div
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            <Check strokeWidth={3} className="h-8 w-8 text-[#0A0A0A]" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
