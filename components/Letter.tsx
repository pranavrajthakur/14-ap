"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface LetterProps {
  variant?: "apology" | "final";
}

export default function Letter({ variant = "apology" }: LetterProps) {
  if (variant === "apology") {
    return (
      <section id="the-apology" className="relative py-20 px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="paper-card rounded-3xl p-8 sm:p-14 relative overflow-hidden"
        >
          {/* Subtle glowing ambient lighting corner with continuous pulse */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />

          {/* Header */}
          <div className="space-y-3 mb-8">
            <span className="text-xs font-mono text-rose-400 uppercase tracking-widest">
              SERIOUS MODE NOW
            </span>
            <h3 className="font-serif-romantic text-3xl sm:text-4xl text-[#f8f4ee] font-light">
              Okay... serious mode now.
            </h3>
          </div>

          {/* Letter Body */}
          <div className="space-y-6 text-[#edd3be]/90 font-sans-clean text-base sm:text-lg leading-relaxed font-light">
            <p className="font-serif-romantic text-xl text-rose-200">Shibya,</p>
            <p>
              mujhe pata hai ki meri kuch harkatein tumhe genuinely irritate karti hain.
            </p>
            <p>
              Kabhi-kabhi main bina soche kuch kar deta hoon, phir baad mein realize hota hai ki tum kitna tolerate kar rahi thi.
            </p>
            <p>
              Aur shayad sabse buri baat ye hai ki main kabhi-kabhi tumhare <span className="text-rose-300 font-medium italic">“bas karo”</span> ko bhi seriously nahi samajhta tha.
            </p>
            <p className="text-rose-200 text-xl font-serif-romantic">
              I'm really sorry.
            </p>
            <p>
              Sirf sorry bolne ke liye sorry nahi... <strong className="text-[#f8f4ee] font-medium underline underline-offset-4 decoration-rose-400/50">sach mein.</strong>
            </p>
            <p>
              Mujhe tumhari feelings ko pehle samajhna chahiye tha.
            </p>
            <p>
              Tumhe baar-baar explain karne ki zarurat nahi padni chahiye thi ki tumhe kya hurt karta hai.
            </p>
            <p className="text-[#f8f4ee] font-normal italic">
              Mujhe khud samajhna chahiye tha.
            </p>
          </div>
        </motion.div>
      </section>
    );
  }

  // Final Letter (Section 15)
  return (
    <section id="the-letter" className="relative py-28 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="paper-card rounded-3xl p-8 sm:p-16 relative overflow-hidden border border-rose-500/20 shadow-[0_30px_100px_rgba(0,0,0,0.9)]"
      >
        {/* Soft paper corner fold effect */}
        <div className="absolute top-0 right-0 border-t-[40px] border-r-[40px] border-t-[#2a0a16] border-r-transparent opacity-80" />

        {/* Heading */}
        <div className="space-y-2 mb-10 text-center sm:text-left">
          <span className="text-xs font-mono text-rose-400 uppercase tracking-widest">
            A PERSONAL NOTE FROM ADITYA
          </span>
          <h2 className="font-serif-romantic text-4xl sm:text-5xl text-[#f8f4ee] font-light">
            One last thing I want you to know.
          </h2>
        </div>

        {/* Letter Text */}
        <div className="space-y-6 text-[#edd3be]/90 font-sans-clean text-base sm:text-xl leading-relaxed font-light">
          <p className="font-serif-romantic text-2xl text-rose-200">Shibya,</p>
          <p>
            main ye sab isliye nahi bana raha ki tumhe force karke mana loon.
          </p>
          <p>
            Main bas chahta hoon ki tumhe pata ho ki mujhe farak padta hai. <span className="text-rose-200 font-medium">Bohot.</span>
          </p>
          <p>
            Mujhe pata hai meri wajah se tum irritate hui ho. Mujhe pata hai tum mujhse distance chahti ho.
          </p>
          <p>
            Aur agar tumhe thoda time chahiye, I'll respect that.
          </p>
          <p className="text-rose-200 font-serif-romantic text-xl sm:text-2xl pt-2">
            Bas dil se ek baat bolunga...
          </p>
          <p className="text-[#f8f4ee] font-medium text-lg sm:text-2xl py-2 px-4 rounded-xl bg-rose-950/30 border-l-2 border-rose-400">
            jo kuch bhi acha tha humare beech, main usse itni easily khatam nahi hone dena chahta.
          </p>
          <p>
            Main tumse ye promise nahi karunga ki main kabhi galti nahi karunga.
          </p>
          <p>
            But I can promise that I'll try to understand you better. Tumhe baar-baar same cheez explain na karni pade... iski koshish karunga.
          </p>
          <p className="text-rose-100 font-medium text-lg sm:text-xl pt-2">
            Aur agar tum mujhe ek chance dogi...
          </p>
          <p className="text-2xl sm:text-3xl font-serif-romantic text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-[#f8f4ee] to-amber-200 py-3 font-normal">
            I'll try to make you feel that choosing me wasn't a mistake.
          </p>

          {/* Signature with continuous heartbeat animation */}
          <div className="pt-8 flex flex-col items-end space-y-2">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <Heart className="w-6 h-6 text-rose-400 fill-rose-400" />
            </motion.div>
            <span className="font-script-handwritten text-4xl sm:text-5xl text-rose-200 font-bold tracking-wide">
              — Aditya
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
