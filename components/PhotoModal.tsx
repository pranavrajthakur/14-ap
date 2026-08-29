"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, Sparkles } from "lucide-react";
import { PhotoItem } from "@/lib/relationshipConfig";

interface PhotoModalProps {
  photo: PhotoItem | null;
  onClose: () => void;
}

export default function PhotoModal({ photo, onClose }: PhotoModalProps) {
  if (!photo) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8 bg-[#050307]/90 backdrop-blur-2xl overflow-hidden cursor-pointer"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-3 rounded-full bg-white/10 text-white hover:bg-rose-500/20 border border-white/20 transition-all hover:scale-110"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Content */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-4xl w-full max-h-[85vh] flex flex-col md:flex-row rounded-3xl overflow-hidden glass-panel border border-white/20 shadow-[0_30px_100px_rgba(0,0,0,0.9)]"
        >
          {/* Large Emoji Canvas Container */}
          <div className={`relative w-full md:w-2/3 h-[45vh] md:h-[70vh] bg-gradient-to-br ${photo.gradient} flex items-center justify-center overflow-hidden`}>
            {/* Glowing Backdrop Aura */}
            <div
              className="absolute w-72 h-72 rounded-full blur-[100px] animate-pulse"
              style={{ backgroundColor: photo.glowColor }}
            />

            {/* Giant Floating Emoji */}
            <motion.div
              initial={{ scale: 0.8, rotate: -5 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10 text-9xl sm:text-[11rem] select-none filter drop-shadow-[0_15px_35px_rgba(0,0,0,0.6)] animate-float"
            >
              {photo.emoji}
            </motion.div>

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:hidden" />
          </div>

          {/* Details Sidebar */}
          <div className="w-full md:w-1/3 p-6 sm:p-10 flex flex-col justify-between bg-[#120716]/90 backdrop-blur-xl">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-xs font-mono text-rose-300 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>{photo.badge}</span>
              </div>

              <h3 className="font-serif-romantic text-3xl sm:text-4xl text-[#f8f4ee] font-light leading-snug">
                "{photo.caption}"
              </h3>

              {photo.subCaption && (
                <p className="text-sm sm:text-base text-[#bda8b3] font-light font-sans-clean leading-relaxed italic">
                  {photo.subCaption}
                </p>
              )}
            </div>

            <div className="pt-8 border-t border-white/10 text-xs font-mono text-[#bda8b3]/60 flex items-center justify-between">
              <span>ADITYA × SHIBYA</span>
              <button
                onClick={onClose}
                className="text-rose-300 hover:text-white uppercase tracking-wider underline underline-offset-4"
              >
                Close →
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
