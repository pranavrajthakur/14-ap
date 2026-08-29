"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { relationshipConfig, PhotoItem } from "@/lib/relationshipConfig";
import PhotoModal from "./PhotoModal";
import { Sparkles } from "lucide-react";

export default function PhotoStory() {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  const photos = relationshipConfig.photos;

  return (
    <section id="the-photos" className="relative py-32 px-6 max-w-7xl mx-auto">
      {/* Background ambient glow with continuous pulse */}
      <div className="absolute top-1/3 left-1/4 w-[550px] h-[550px] bg-rose-950/20 rounded-full blur-[150px] pointer-events-none animate-ambient-glow" />

      {/* Header */}
      <div className="text-center space-y-4 mb-20 max-w-2xl mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, margin: "-50px" }}
          className="text-xs font-mono tracking-widest text-rose-400 uppercase"
        >
          03 · MOMENTS OF US
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="font-serif-romantic text-5xl sm:text-7xl text-[#f8f4ee] font-light"
        >
          Moments of Us ✨
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg text-[#bda8b3] font-light italic font-serif-romantic"
        >
          Tap any memory card to expand into full screen view.
        </motion.p>
      </div>

      {/* Editorial Emoji Frames Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Lead Featured Card */}
        {photos[0] && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            onClick={() => setSelectedPhoto(photos[0])}
            data-cursor="photo"
            className={`md:col-span-7 group cursor-pointer relative h-[480px] sm:h-[580px] rounded-3xl overflow-hidden glass-panel border border-white/15 bg-gradient-to-br ${photos[0].gradient} shadow-[0_20px_60px_rgba(0,0,0,0.8)] flex flex-col justify-between p-8 sm:p-12`}
          >
            {/* Ambient Inner Glow */}
            <div
              className="absolute -right-10 -bottom-10 w-80 h-80 rounded-full blur-[100px] opacity-60 group-hover:opacity-100 transition-opacity"
              style={{ backgroundColor: photos[0].glowColor }}
            />

            {/* Top Badge */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono text-rose-200 uppercase tracking-widest backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin" style={{ animationDuration: '8s' }} />
                <span>{photos[0].badge}</span>
              </span>
              <span className="text-xs font-mono text-[#bda8b3]/60">01</span>
            </div>

            {/* Giant Central Floating Emoji */}
            <div className="relative z-10 my-auto text-center">
              <motion.span
                animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                whileHover={{ scale: 1.15, rotate: 8 }}
                className="inline-block text-8xl sm:text-[10rem] select-none filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
              >
                {photos[0].emoji}
              </motion.span>
            </div>

            {/* Bottom Caption */}
            <div className="relative z-10 space-y-2 pt-4 border-t border-white/10">
              <h3 className="font-serif-romantic text-3xl sm:text-4xl text-[#f8f4ee] font-light">
                "{photos[0].caption}"
              </h3>
              <p className="text-xs font-mono text-rose-300/80 group-hover:translate-x-1 transition-transform inline-block">
                TAP TO EXPLORE →
              </p>
            </div>
          </motion.div>
        )}

        {/* Right Stacked Column (2 Cards) */}
        <div className="md:col-span-5 space-y-8">
          {photos[1] && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.15 }}
              onClick={() => setSelectedPhoto(photos[1])}
              data-cursor="photo"
              className={`group cursor-pointer relative h-[270px] rounded-3xl overflow-hidden glass-panel border border-white/15 bg-gradient-to-br ${photos[1].gradient} shadow-[0_20px_50px_rgba(0,0,0,0.7)] p-6 sm:p-8 flex flex-col justify-between`}
            >
              <div className="flex items-center justify-between relative z-10">
                <span className="text-[11px] font-mono text-amber-200/90 uppercase tracking-widest bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">
                  {photos[1].badge}
                </span>
                <motion.span
                  animate={{ y: [0, -6, 0], rotate: [0, -4, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                  className="text-4xl select-none group-hover:scale-125 transition-transform"
                >
                  {photos[1].emoji}
                </motion.span>
              </div>
              <div className="relative z-10 space-y-1">
                <h4 className="font-serif-romantic text-2xl text-[#f8f4ee] font-light">
                  "{photos[1].caption}"
                </h4>
                <span className="text-[11px] font-mono text-rose-300/70 block">TAP TO VIEW →</span>
              </div>
            </motion.div>
          )}

          {photos[2] && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.25 }}
              onClick={() => setSelectedPhoto(photos[2])}
              data-cursor="photo"
              className={`group cursor-pointer relative h-[270px] rounded-3xl overflow-hidden glass-panel border border-white/15 bg-gradient-to-br ${photos[2].gradient} shadow-[0_20px_50px_rgba(0,0,0,0.7)] p-6 sm:p-8 flex flex-col justify-between`}
            >
              <div className="flex items-center justify-between relative z-10">
                <span className="text-[11px] font-mono text-rose-300/90 uppercase tracking-widest bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">
                  {photos[2].badge}
                </span>
                <motion.span
                  animate={{ y: [0, -6, 0], rotate: [0, 4, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut" }}
                  className="text-4xl select-none group-hover:scale-125 transition-transform"
                >
                  {photos[2].emoji}
                </motion.span>
              </div>
              <div className="relative z-10 space-y-1">
                <h4 className="font-serif-romantic text-2xl text-[#f8f4ee] font-light">
                  "{photos[2].caption}"
                </h4>
                <span className="text-[11px] font-mono text-rose-300/70 block">TAP TO VIEW →</span>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Bottom Row (3 Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
        {photos.slice(3).map((photo, idx) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.8, delay: idx * 0.12 }}
            onClick={() => setSelectedPhoto(photo)}
            data-cursor="photo"
            className={`group cursor-pointer relative h-[310px] rounded-3xl overflow-hidden glass-panel border border-white/15 bg-gradient-to-br ${photo.gradient} shadow-[0_20px_50px_rgba(0,0,0,0.7)] p-6 flex flex-col justify-between`}
          >
            <div className="flex items-center justify-between relative z-10">
              <span className="text-[10px] font-mono text-rose-200 uppercase tracking-widest bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">
                {photo.badge}
              </span>
              <motion.span
                animate={{ y: [0, -8, 0], rotate: [0, 5, -5, 0] }}
                transition={{ repeat: Infinity, duration: 3 + idx * 0.5, ease: "easeInOut" }}
                className="text-5xl select-none group-hover:scale-125 transition-transform"
              >
                {photo.emoji}
              </motion.span>
            </div>

            <div className="relative z-10 space-y-2 pt-4 border-t border-white/10">
              <h4 className="font-serif-romantic text-xl text-[#f8f4ee] font-light">
                "{photo.caption}"
              </h4>
              <span className="text-[10px] font-mono text-rose-300/80 block">TAP TO VIEW →</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Lightbox */}
      <PhotoModal photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />
    </section>
  );
}
