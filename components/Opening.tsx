"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

interface OpeningProps {
  onComplete: () => void;
}

export default function Opening({ onComplete }: OpeningProps) {
  const [step, setStep] = useState<number>(0);
  const [isSkipped, setIsSkipped] = useState(false);

  useEffect(() => {
    // Sequence timer management
    const t1 = setTimeout(() => setStep(1), 800);   // Glowing dot & "Hey Shibya..."
    const t2 = setTimeout(() => setStep(2), 3200);  // "I made something for you."
    const t3 = setTimeout(() => setStep(3), 5800);  // "Please don't judge..."
    const t4 = setTimeout(() => setStep(4), 8800);  // "Actually... judge it a little." + sparkle
    const t5 = setTimeout(() => setStep(5), 11800); // ADITYA reveal & subtitle
    const t6 = setTimeout(() => {
      onComplete();
    }, 15500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsSkipped(true);
    setTimeout(() => {
      onComplete();
    }, 400);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050307] text-[#f8f4ee] px-6 text-center select-none ${
        isSkipped ? "opacity-0 transition-opacity duration-500" : ""
      }`}
    >
      {/* Ambient background glow dot */}
      <div className="absolute w-[300px] h-[300px] bg-rose-900/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Skip button for quick review */}
      <button
        onClick={handleSkip}
        className="absolute top-8 right-8 text-xs tracking-widest text-[#bda8b3]/40 hover:text-rose-300 transition-colors uppercase py-2 px-4 rounded-full border border-white/5 hover:border-white/10"
      >
        Skip Intro →
      </button>

      <div className="relative max-w-xl mx-auto flex flex-col items-center justify-center min-h-[300px]">
        {/* Step 0: Initial glowing dot */}
        {step >= 0 && step < 5 && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.4, 1], opacity: [0, 1, 0.8] }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-2.5 h-2.5 bg-rose-300 rounded-full shadow-[0_0_15px_rgba(226,125,150,0.9)] mb-8"
          />
        )}

        {/* Sequential Text Reveals */}
        <div className="space-y-6">
          {step >= 1 && step < 5 && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-serif-romantic text-3xl sm:text-4xl tracking-wide text-rose-100 font-light"
            >
              Hey Shibya...
            </motion.p>
          )}

          {step >= 2 && step < 5 && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-lg sm:text-xl font-light text-[#f8f4ee]/80 font-sans-clean"
            >
              I made something for you.
            </motion.p>
          )}

          {step >= 3 && step < 5 && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-sm sm:text-base font-light text-[#bda8b3]/90 italic"
            >
              Please don't judge the amount of effort I put into this.
            </motion.p>
          )}

          {step >= 4 && step < 5 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 pt-2 text-xs sm:text-sm text-rose-300/90 font-mono tracking-tight"
            >
              <span>Actually... judge it a little.</span>
              <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="inline-block"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300 inline" /> 😭
              </motion.span>
            </motion.div>
          )}
        </div>

        {/* Step 5: ADITYA Reveal */}
        {step >= 5 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center space-y-4"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-rose-400/80 font-mono">
              from
            </span>

            <h1 className="font-serif-romantic text-6xl sm:text-7xl md:text-8xl tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-[#f8f4ee] via-[#edd3be] to-[#e27d96] font-normal drop-shadow-[0_0_35px_rgba(226,125,150,0.3)]">
              ADITYA
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="text-sm sm:text-base font-light tracking-widest text-[#bda8b3] italic font-serif-romantic"
            >
              for the girl who still has my heart
            </motion.p>

            <motion.button
              onClick={onComplete}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mt-8 text-xs tracking-widest uppercase text-rose-200/90 hover:text-white border-b border-rose-400/40 hover:border-rose-300 pb-1 transition-all"
            >
              Enter Experience →
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
