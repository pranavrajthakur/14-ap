"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function EmotionalSection() {
  return (
    <div className="space-y-36 relative">
      {/* Section 12: The "I Know" Section */}
      <section className="relative py-24 px-6 max-w-4xl mx-auto text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="space-y-8 text-xl sm:text-3xl font-light text-[#bda8b3] font-serif-romantic leading-relaxed"
        >
          <p>I know saying sorry doesn't magically fix everything.</p>
          <p>I know you may still be annoyed.</p>
          <p>I know you may need time.</p>
          <p className="text-rose-200 italic">And honestly... I understand.</p>
          
          <div className="pt-6">
            <span className="text-2xl sm:text-4xl text-[#f8f4ee] font-normal border-b-2 border-rose-400/40 pb-2">
              But I still wanted you to know this.
            </span>
          </div>
        </motion.div>
      </section>

      {/* Section 13: The Most Romantic Section */}
      <section className="relative py-32 px-6 max-w-5xl mx-auto text-center overflow-hidden">
        {/* Soft background ambient glow with continuous pulse */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-burgundy-950/30 via-rose-950/30 to-purple-950/20 rounded-full blur-[160px] pointer-events-none animate-ambient-glow" />

        <div className="relative z-10 space-y-16">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 1 }}
            className="font-serif-romantic text-4xl sm:text-7xl font-extralight text-[#f8f4ee]"
          >
            If I could have one thing...
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-4xl font-serif-romantic text-[#bda8b3] italic"
          >
            I wouldn't ask for a perfect relationship.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 1, delay: 0.4 }}
            className="p-8 sm:p-14 rounded-3xl glass-card-burgundy border border-rose-500/30 max-w-3xl mx-auto shadow-[0_30px_90px_rgba(226,125,150,0.15)]"
          >
            <p className="font-serif-romantic text-3xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-rose-100 via-[#f8f4ee] to-rose-200 font-normal leading-tight">
              I would ask for another chance to make the ordinary days good again.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="space-y-4 text-lg sm:text-2xl text-[#edd3be]/90 font-sans-clean font-light max-w-2xl mx-auto"
          >
            <p>Random conversations.</p>
            <p>Stupid jokes.</p>
            <p>Little fights.</p>
            <p>Making up.</p>
            <p>Laughing at things nobody else understands.</p>
            <p className="pt-4 text-3xl sm:text-5xl font-serif-romantic text-rose-300 font-normal">
              Just... <strong className="font-normal underline underline-offset-8 decoration-rose-400">us.</strong>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 14: "I don't want to go back" */}
      <section className="relative py-24 px-6 max-w-4xl mx-auto text-left">
        <div className="space-y-10">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="font-serif-romantic text-3xl sm:text-5xl text-[#f8f4ee] font-light"
          >
            I don't want to go back to exactly how we were.
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-2xl text-[#bda8b3] font-light font-sans-clean"
          >
            because somewhere along the way, I know I messed things up.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-6"
          >
            <h4 className="font-serif-romantic text-3xl sm:text-4xl text-rose-200 font-normal">
              I want to go forward.
            </h4>

            <div className="space-y-3 text-base sm:text-xl text-[#edd3be]/90 font-sans-clean font-light">
              <p>with a little more understanding.</p>
              <p>a little more patience.</p>
              <div className="flex items-center gap-2 text-rose-300">
                <span>a little less stupidity from Aditya.</span>
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                  😭
                </motion.span>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.5 }}
                className="pt-4 font-mono text-sm sm:text-base text-rose-400 font-medium flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-300 animate-spin" style={{ animationDuration: '6s' }} />
                <span>Okay... maybe a LOT less stupidity.</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
