"use client";

import { motion } from "framer-motion";
import { Heart, ChevronDown } from "lucide-react";

interface HeroProps {
  onStart: () => void;
}

export default function Hero({ onStart }: HeroProps) {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-[#07050a]">
      {/* Background glowing blurred radial highlights */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-rose-950/20 via-burgundy-900/30 to-purple-950/20 rounded-full blur-[140px] pointer-events-none animate-ambient-glow" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center space-y-8">
        {/* Small label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono tracking-widest text-rose-300 uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-ping" />
          <span>A PRIVATE STORY</span>
        </motion.div>

        {/* HUGE Typography: SHIBYA */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif-romantic text-7xl sm:text-9xl md:text-[11rem] tracking-tight font-extralight text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] via-[#f8f4ee] to-[#e27d96] drop-shadow-[0_10px_40px_rgba(226,125,150,0.25)] select-none leading-none"
        >
          SHIBYA
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg sm:text-2xl font-light text-[#bda8b3] tracking-wide max-w-lg italic font-serif-romantic"
        >
          there's something I want to tell you
        </motion.p>

        {/* Action Button: COME WITH ME ❤️ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="pt-6"
        >
          <button
            onClick={onStart}
            data-cursor="button"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#2a0a16] via-[#1f0a1c] to-[#2a0a16] border border-rose-500/30 hover:border-rose-400 text-rose-100 font-medium tracking-wider text-sm transition-all duration-500 shadow-[0_0_30px_rgba(226,125,150,0.2)] hover:shadow-[0_0_45px_rgba(226,125,150,0.4)] hover:scale-105 active:scale-95"
          >
            <span>COME WITH ME</span>
            <Heart className="w-4 h-4 text-rose-400 fill-rose-400/30 group-hover:fill-rose-400 transition-colors" />
          </button>
        </motion.div>
      </div>

      {/* Downward indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs font-mono text-[#bda8b3]"
      >
        <span>SCROLL DOWN</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-rose-300" />
      </motion.div>
    </section>
  );
}
