"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, RotateCcw } from "lucide-react";

export default function CuteInteraction() {
  const [answered, setAnswered] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (optionText: string) => {
    setSelectedOption(optionText);
    setAnswered(true);
  };

  const handleReset = () => {
    setAnswered(false);
    setSelectedOption(null);
  };

  return (
    <section className="relative py-24 px-6 max-w-3xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="glass-card-burgundy rounded-3xl p-8 sm:p-14 relative overflow-hidden border border-rose-500/20 shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
      >
        <div className="space-y-6">
          <span className="text-xs font-mono tracking-widest text-rose-300 uppercase">
            A QUICK TRIVIA
          </span>

          <h3 className="font-serif-romantic text-3xl sm:text-4xl text-[#f8f4ee] font-light">
            Okay, one important question...
          </h3>

          <p className="text-xl sm:text-2xl font-light text-rose-200 font-sans-clean">
            Who is more irritating?
          </p>

          {!answered ? (
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => handleSelect("Aditya 😒")}
                data-cursor="button"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/5 hover:bg-rose-500/20 border border-white/10 hover:border-rose-400/50 text-[#f8f4ee] font-medium text-base transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Aditya 😒
              </button>

              <button
                onClick={() => handleSelect("Obviously Aditya 😭")}
                data-cursor="button"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-rose-950/60 to-burgundy-900/60 hover:from-rose-900/80 border border-rose-500/40 text-rose-100 font-medium text-base transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(226,125,150,0.2)]"
              >
                Obviously Aditya 😭
              </button>
            </div>
          ) : (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="pt-6 space-y-4"
              >
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-rose-500/20 border border-rose-400/40 text-rose-200 font-serif-romantic text-2xl font-normal shadow-[0_0_30px_rgba(226,125,150,0.3)]">
                  <CheckCircle2 className="w-5 h-5 text-rose-400" />
                  <span>Correct answer. 😭❤️</span>
                </div>

                <p className="text-base sm:text-lg text-[#bda8b3] font-light italic font-serif-romantic pt-2">
                  See? At least we agree on something.
                </p>

                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    data-cursor="button"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-rose-300/80 hover:text-rose-200 uppercase tracking-wider py-1 px-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Choose again</span>
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </motion.div>
    </section>
  );
}
