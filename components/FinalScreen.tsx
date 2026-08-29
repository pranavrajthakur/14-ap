"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function FinalScreen() {
  return (
    <footer className="relative py-36 px-6 bg-[#030105] text-center border-t border-white/5 overflow-hidden">
      {/* Subtle ambient light dot with continuous pulse */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-950/15 rounded-full blur-[140px] pointer-events-none animate-ambient-glow" />

      <div className="relative z-10 max-w-3xl mx-auto space-y-12">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, margin: "-50px" }}
          className="text-xs font-mono tracking-[0.3em] text-rose-300/70 uppercase"
        >
          before you go...
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="font-serif-romantic text-4xl sm:text-6xl text-[#f8f4ee] font-light"
        >
          Thank you for reading all of this.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4 font-serif-romantic text-xl sm:text-3xl text-[#edd3be]/90 font-light italic"
        >
          <p>And Shibya...</p>
          <p className="text-rose-200">I'm still sorry.</p>
          <p>I'm still crazy about you.</p>
          <p className="text-[#f8f4ee] not-italic font-normal">
            And I'm still hoping we get to laugh together again.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-2 flex flex-col items-center space-y-4"
        >
          <motion.div
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <Heart className="w-8 h-8 text-rose-400 fill-rose-400" />
          </motion.div>
          <span className="font-script-handwritten text-3xl sm:text-4xl text-rose-300">
            — your slightly less irritating Aditya
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-12 border-t border-white/10 space-y-3"
        >
          <h3 className="font-serif-romantic text-2xl tracking-[0.2em] text-[#f8f4ee] uppercase font-light">
            SHIBYA × ADITYA
          </h3>
          <p className="text-xs font-mono text-rose-300/60 tracking-widest italic">
            maybe this isn't the end of our story.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
