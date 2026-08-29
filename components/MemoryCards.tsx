"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { relationshipConfig } from "@/lib/relationshipConfig";
import { MessageCircleHeart, Smile, Flame, Smartphone, Sparkles, ChevronRight } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  MessageCircleHeart: <MessageCircleHeart className="w-6 h-6 text-rose-400" />,
  Smile: <Smile className="w-6 h-6 text-amber-400" />,
  Flame: <Flame className="w-6 h-6 text-pink-400" />,
  Smartphone: <Smartphone className="w-6 h-6 text-rose-400" />,
  Sparkles: <Sparkles className="w-6 h-6 text-amber-300" />,
};

export default function MemoryCards() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section id="the-memories" className="relative py-28 px-6 max-w-6xl mx-auto">
      {/* Background warm glowing aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-950/20 rounded-full blur-[150px] pointer-events-none animate-ambient-glow" />

      {/* Header */}
      <div className="text-center space-y-4 mb-16 max-w-2xl mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, margin: "-50px" }}
          className="text-xs font-mono tracking-widest text-rose-400 uppercase"
        >
          02 · REMEMBERING US
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="font-serif-romantic text-4xl sm:text-6xl text-[#f8f4ee] font-light"
        >
          Phir mujhe hum yaad aate hain.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg text-[#bda8b3] font-light leading-relaxed italic"
        >
          aur honestly... main humare baare mein sirf woh moments yaad nahi karna chahta jahan sab kharab hua. mujhe woh sab bhi yaad hai jo itna achha tha.
        </motion.p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {relationshipConfig.memories.map((card, idx) => {
          const isExpanded = activeCard === card.id;

          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              onClick={() => setActiveCard(isExpanded ? null : card.id)}
              data-cursor="button"
              className={`group cursor-pointer rounded-2xl p-7 transition-all duration-500 relative overflow-hidden glass-panel glass-panel-hover border border-white/10 ${
                isExpanded ? "ring-2 ring-rose-400/50 bg-white/10 scale-[1.02]" : ""
              }`}
            >
              {/* Card Accent Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
                {/* Top Row */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-rose-300/70 tracking-widest uppercase">
                    {card.tag}
                  </span>
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{ repeat: Infinity, duration: 2.5 + idx * 0.3, ease: "easeInOut" }}
                    className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform"
                  >
                    {iconMap[card.iconName]}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="font-serif-romantic text-2xl text-[#f8f4ee] group-hover:text-rose-200 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#edd3be]/90 font-sans-clean font-light leading-relaxed">
                    {card.hindiText}
                  </p>
                  <p className="text-xs sm:text-sm text-[#bda8b3] italic font-serif-romantic">
                    {card.englishSub}
                  </p>
                </div>

                {/* Tap feedback indicator */}
                <div className="flex items-center gap-1.5 text-xs font-mono text-rose-300/80 pt-2 group-hover:translate-x-1 transition-transform">
                  <span>{isExpanded ? "TAP TO CLOSE" : "TAP TO REFLECT"}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
