"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Cursor from "@/components/Cursor";
import CanvasParticles from "@/components/CanvasParticles";
import Opening from "@/components/Opening";
import Hero from "@/components/Hero";
import Apology from "@/components/Apology";
import Letter from "@/components/Letter";
import MemoryCards from "@/components/MemoryCards";
import PhotoStory from "@/components/PhotoStory";
import CuteInteraction from "@/components/CuteInteraction";
import ThingsIMiss from "@/components/ThingsIMiss";
import EmotionalSection from "@/components/EmotionalSection";
import FinalQuestion from "@/components/FinalQuestion";
import SecretNote from "@/components/SecretNote";
import MusicPlayer from "@/components/MusicPlayer";
import ProgressNav from "@/components/ProgressNav";
import FinalScreen from "@/components/FinalScreen";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [particleIntensity, setParticleIntensity] = useState<"ambient" | "celebration">("ambient");

  const handleChoiceMade = (choice: "yes" | "time") => {
    if (choice === "yes") {
      setParticleIntensity("celebration");
    }
  };

  const scrollToStory = () => {
    const el = document.getElementById("apology-intro");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="relative min-h-screen bg-[#07050a] text-[#f8f4ee] bg-grain overflow-x-hidden selection:bg-[#2a0a14] selection:text-[#f8f4ee]">
      {/* Desktop Luxury Magnetic Cursor */}
      <Cursor />

      {/* Ambient Canvas Particles */}
      <CanvasParticles intensity={particleIntensity} />

      {/* Floating Mini Music Player */}
      <MusicPlayer />

      {/* Cinematic Typewriter Opening Intro */}
      <AnimatePresence>
        {showIntro && <Opening onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>

      {/* Main Experience Content */}
      {!showIntro && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="relative z-10"
        >
          {/* Side Progress Navigator */}
          <ProgressNav />

          {/* Section 4: Fullscreen Hero */}
          <Hero onStart={scrollToStory} />

          {/* Section 5: Romantic Intro */}
          <Apology />

          {/* Section 6: Serious Mode Letter */}
          <Letter variant="apology" />

          {/* Section 7 & 8: Memory Cards */}
          <MemoryCards />

          {/* Section 9: Editorial Photo Story */}
          <PhotoStory />

          {/* Section 10: Cute Quiz Interaction */}
          <CuteInteraction />

          {/* Section 11: Things I Miss */}
          <ThingsIMiss />

          {/* Section 12, 13, 14: Deep Emotional Slow-Scroll Sections */}
          <EmotionalSection />

          {/* Section 15: One Last Letter */}
          <Letter variant="final" />

          {/* Section 16, 17, 18: Final Question & Choice Interactions */}
          <FinalQuestion onChoiceMade={handleChoiceMade} />

          {/* Section 19: Hidden Secret Love Note */}
          <SecretNote />

          {/* Section 26: Final Closing Screen */}
          <FinalScreen />
        </motion.div>
      )}
    </main>
  );
}
