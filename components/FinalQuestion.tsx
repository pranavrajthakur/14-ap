"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Heart, Sparkles, Clock, ArrowLeft } from "lucide-react";

interface FinalQuestionProps {
  onChoiceMade: (choice: "yes" | "time") => void;
}

export default function FinalQuestion({ onChoiceMade }: FinalQuestionProps) {
  const [choice, setChoice] = useState<"yes" | "time" | null>(null);

  const handleYes = () => {
    setChoice("yes");
    onChoiceMade("yes");

    // Launch subtle rose and gold confetti burst
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#e27d96", "#f8f4ee", "#edd3be", "#ffb6c1"],
    });
  };

  const handleTime = () => {
    setChoice("time");
    onChoiceMade("time");
  };

  const handleReset = () => {
    setChoice(null);
  };

  return (
    <section id="the-question" className="relative py-36 px-6 max-w-5xl mx-auto text-center min-h-[80vh] flex flex-col items-center justify-center">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-rose-950/25 rounded-full blur-[170px] pointer-events-none animate-ambient-glow" />

      <AnimatePresence mode="wait">
        {!choice && (
          <motion.div
            key="question-box"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 w-full max-w-3xl p-8 sm:p-16 rounded-3xl glass-card-burgundy border border-rose-500/30 shadow-[0_30px_100px_rgba(42,10,22,0.6)] space-y-12"
          >
            <div className="space-y-6">
              <span className="text-xs font-mono text-rose-300 uppercase tracking-[0.3em]">
                MY QUESTION FOR YOU
              </span>

              <h2 className="font-serif-romantic text-5xl sm:text-7xl text-[#f8f4ee] font-light">
                So... Shibya
              </h2>

              <div className="space-y-4 font-serif-romantic text-2xl sm:text-4xl text-[#edd3be]/90 font-light leading-relaxed">
                <p>Can we forget the bad moments...</p>
                <p className="text-rose-300/80 text-xl sm:text-2xl italic">not completely...</p>
                <p className="text-[#f8f4ee] font-normal pt-2">
                  but enough to make some new good ones? ❤️
                </p>
              </div>

              <p className="text-xs font-mono text-rose-300/70 tracking-widest uppercase pt-4">
                just one more try?
              </p>
            </div>

            {/* Response Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
              <button
                onClick={handleYes}
                data-cursor="button"
                className="group relative w-full sm:w-auto px-10 py-5 rounded-full bg-gradient-to-r from-rose-600 via-rose-500 to-pink-600 text-white font-medium tracking-wider text-base sm:text-lg transition-all duration-500 shadow-[0_0_40px_rgba(226,125,150,0.5)] hover:shadow-[0_0_60px_rgba(226,125,150,0.8)] hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
              >
                <span>YES, ADITYA ❤️</span>
                <Heart className="w-5 h-5 fill-white group-hover:scale-125 transition-transform" />
              </button>

              <button
                onClick={handleTime}
                data-cursor="button"
                className="w-full sm:w-auto px-8 py-5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-[#bda8b3] hover:text-[#f8f4ee] font-light tracking-wide text-base transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                <Clock className="w-4 h-4 text-rose-300" />
                <span>I NEED SOME TIME</span>
              </button>
            </div>
          </motion.div>
        )}

        {/* YES Experience */}
        {choice === "yes" && (
          <motion.div
            key="yes-response"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-3xl p-10 sm:p-16 rounded-3xl bg-gradient-to-b from-[#2a0a16] via-[#1f0a1c] to-[#120719] border border-rose-400/40 shadow-[0_0_120px_rgba(226,125,150,0.4)] space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/20 text-rose-200 text-xs font-mono tracking-widest uppercase">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>BEST ANSWER EVER</span>
            </div>

            <h2 className="font-serif-romantic text-4xl sm:text-6xl text-[#f8f4ee] font-light leading-tight">
              You just made one very irritating boy extremely happy. 😭❤️
            </h2>

            <p className="font-serif-romantic text-3xl sm:text-4xl text-rose-200 font-normal">
              Thank you, Shibya.
            </p>

            <p className="text-lg sm:text-2xl text-[#edd3be] font-sans-clean font-light italic">
              Ab main ye chance waste nahi karunga.
            </p>

            <p className="text-xl sm:text-3xl font-serif-romantic text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-white to-amber-200 font-normal pt-2">
              Let's make some better memories.
            </p>

            {/* Animated Signature */}
            <div className="pt-6 flex flex-col items-center space-y-2">
              <span className="font-script-handwritten text-4xl sm:text-6xl text-rose-300 font-bold tracking-widest drop-shadow-[0_0_20px_rgba(226,125,150,0.6)]">
                Aditya ❤️ Shibya
              </span>
            </div>

            {/* Back Button */}
            <div className="pt-6 border-t border-rose-500/20">
              <button
                onClick={handleReset}
                data-cursor="button"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-xs font-mono text-rose-300 hover:text-white border border-rose-400/20 transition-all hover:scale-105 active:scale-95"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Change response / Go back</span>
              </button>
            </div>
          </motion.div>
        )}

        {/* TIME Experience */}
        {choice === "time" && (
          <motion.div
            key="time-response"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-2xl p-10 sm:p-14 rounded-3xl glass-panel border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.8)] space-y-6"
          >
            <h2 className="font-serif-romantic text-5xl text-rose-200 font-light">
              Okay. ❤️
            </h2>

            <div className="space-y-4 text-base sm:text-xl text-[#edd3be]/90 font-sans-clean font-light leading-relaxed">
              <p>Take your time.</p>
              <p>Main genuinely samajhta hoon.</p>
              <p>Mujhe tumhara answer jaldi nahi chahiye.</p>
              <p>Bas jab bhi tumhara mann kare... baat kar lena.</p>
            </div>

            <div className="pt-4">
              <span className="font-serif-romantic text-3xl text-[#f8f4ee] font-normal border-b border-rose-400/40 pb-1">
                I'll be here.
              </span>
            </div>

            {/* Back Button */}
            <div className="pt-6 border-t border-white/10">
              <button
                onClick={handleReset}
                data-cursor="button"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-xs font-mono text-rose-300 hover:text-white border border-white/15 transition-all hover:scale-105 active:scale-95"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Change response / Go back</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
