"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, X, Sparkles } from "lucide-react";
import { relationshipConfig } from "@/lib/relationshipConfig";

export default function SecretNote() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hidden Star Icon Trigger */}
      <div className="relative z-30 flex justify-center py-6">
        <button
          onClick={() => setIsOpen(true)}
          data-cursor="secret"
          aria-label="Secret Love Note"
          className="group relative p-3 rounded-full bg-white/5 border border-white/10 hover:border-amber-300/60 hover:bg-amber-500/10 transition-all duration-300 hover:scale-125 shadow-[0_0_15px_rgba(255,215,0,0.15)]"
        >
          <Star className="w-5 h-5 text-amber-300/70 group-hover:text-amber-300 group-hover:rotate-45 transition-all" />
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-mono text-amber-200/80 bg-[#120716] px-2 py-0.5 rounded-md border border-amber-300/30 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            secret note ✨
          </span>
        </button>
      </div>

      {/* Secret Note Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[250] flex items-center justify-center p-6 bg-[#050307]/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-sm w-full p-8 rounded-3xl bg-gradient-to-b from-[#1c0813] to-[#120510] border border-rose-400/30 shadow-[0_20px_80px_rgba(226,125,150,0.3)] text-center space-y-6"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full text-rose-300/60 hover:text-white hover:bg-white/10"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-400/30 flex items-center justify-center mx-auto text-amber-300">
                <Sparkles className="w-6 h-6" />
              </div>

              <div className="space-y-3 font-serif-romantic">
                <span className="text-sm font-mono text-rose-300 uppercase tracking-widest">
                  P.S.
                </span>
                <p className="text-2xl text-[#f8f4ee] font-normal leading-snug">
                  {relationshipConfig.secretNote.ps}
                </p>
                <p className="text-sm text-[#bda8b3] font-sans-clean font-light italic pt-2">
                  {relationshipConfig.secretNote.sub}
                </p>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono text-rose-200 border border-white/10 transition-colors uppercase tracking-wider"
              >
                Close secret
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
