"use client";

import { motion } from "framer-motion";
import { relationshipConfig } from "@/lib/relationshipConfig";
import { Heart } from "lucide-react";

export default function ThingsIMiss() {
  const items = relationshipConfig.thingsIMiss;

  return (
    <section id="what-i-miss" className="relative py-32 px-6 max-w-4xl mx-auto text-left">
      <div className="space-y-16">
        {/* Section Header */}
        <div className="space-y-4">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, margin: "-50px" }}
            className="text-xs font-mono tracking-widest text-rose-400 uppercase"
          >
            04 · WHAT I MISS
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="font-serif-romantic text-4xl sm:text-6xl text-[#f8f4ee] font-light leading-tight"
          >
            Things I didn't realize I'd miss this much.
          </motion.h2>
        </div>

        {/* Revealed Items List */}
        <div className="space-y-6 pl-4 border-l-2 border-rose-500/20">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex items-center gap-4 text-xl sm:text-2xl font-light text-[#edd3be]/90 font-sans-clean"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400/70 shrink-0 animate-ping" style={{ animationDuration: '3s' }} />
              <span>{item}</span>
            </motion.div>
          ))}
        </div>

        {/* Climax Lines */}
        <div className="pt-10 space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="font-serif-romantic text-3xl sm:text-5xl text-[#f8f4ee] font-light"
          >
            I miss us being easy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-3 text-3xl sm:text-6xl font-serif-romantic text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-rose-100 to-amber-200 font-normal drop-shadow-[0_0_25px_rgba(226,125,150,0.4)]"
          >
            <span>I miss you.</span>
            <motion.div
              animate={{ scale: [1, 1.25, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <Heart className="w-8 h-8 text-rose-400 fill-rose-400" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
