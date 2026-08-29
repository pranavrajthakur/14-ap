"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Apology() {
  return (
    <section id="apology-intro" className="relative py-28 sm:py-36 px-6 max-w-4xl mx-auto text-left">
      <div className="space-y-12">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-rose-400/90 uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-ping" />
          <span>01 · FIRST THING</span>
        </motion.div>

        {/* Huge Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="font-serif-romantic text-5xl sm:text-7xl font-light text-[#f8f4ee] leading-tight"
        >
          You know what?
        </motion.h2>

        {/* Conversational Text Paragraphs */}
        <div className="space-y-8 text-lg sm:text-2xl font-light text-[#bda8b3] leading-relaxed font-sans-clean">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            I know I've been irritating you lately.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="pl-4 border-l-2 border-rose-500/30 space-y-3"
          >
            <p className="text-rose-200/90 italic font-serif-romantic text-xl sm:text-2xl">
              Actually...
            </p>
            <p className="inline-flex items-center gap-2 text-[#f8f4ee]/90">
              <span>"lately" might be giving me too much credit.</span>
              <motion.span
                animate={{ y: [0, -6, 0], rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="inline-block"
              >
                😭
              </motion.span>
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            I know some of my harkatein have genuinely made you tired.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            And I'm not going to sit here and pretend they didn't.
          </motion.p>
        </div>

        {/* Sincere Apology Highlight with continuous heartbeat animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="pt-6"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-rose-950/40 via-burgundy-900/30 to-transparent border border-rose-500/30 text-rose-200 font-serif-romantic text-2xl sm:text-3xl font-normal shadow-[0_0_30px_rgba(226,125,150,0.15)]">
            <span>I'm sorry, Shibya.</span>
            <motion.div
              animate={{ scale: [1, 1.25, 1] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            >
              <Heart className="w-6 h-6 text-rose-400 fill-rose-400" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
