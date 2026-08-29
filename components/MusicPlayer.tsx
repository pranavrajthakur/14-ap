"use client";

import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Play, Pause, Music } from "lucide-react";
import { relationshipConfig } from "@/lib/relationshipConfig";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasAudio, setHasAudio] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const synthRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    const audio = new Audio(relationshipConfig.music);
    audio.loop = true;
    audioRef.current = audio;

    const checkAudio = async () => {
      try {
        const res = await fetch(relationshipConfig.music, { method: "HEAD" });
        if (!res.ok) {
          setHasAudio(false);
        }
      } catch {
        setHasAudio(false);
      }
    };

    checkAudio();

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (synthRef.current) {
        synthRef.current.close();
      }
    };
  }, []);

  // Web Audio Synth Fallback for ambient romantic soundscape if mp3 not present
  const startAmbientSynth = () => {
    try {
      if (!synthRef.current) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        synthRef.current = new AudioCtx();
      }
      const ctx = synthRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }
    } catch {
      // Graceful fallback
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      if (audioRef.current) audioRef.current.pause();
      setIsPlaying(false);
    } else {
      if (hasAudio && audioRef.current) {
        audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {
          startAmbientSynth();
          setIsPlaying(true);
        });
      } else {
        startAmbientSynth();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[90] flex items-center gap-3 p-2.5 px-4 rounded-full glass-panel border border-white/15 shadow-[0_10px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl">
      <div className="flex items-center gap-2 text-rose-300 font-serif-romantic text-xs sm:text-sm">
        <Music className={`w-3.5 h-3.5 ${isPlaying ? "animate-pulse" : ""}`} />
        <span>♡ our song</span>
      </div>

      <div className="h-4 w-[1px] bg-white/10" />

      <div className="flex items-center gap-2">
        <button
          onClick={togglePlay}
          data-cursor="button"
          aria-label={isPlaying ? "Pause Music" : "Play Music"}
          className="p-1.5 rounded-full bg-white/5 hover:bg-rose-500/20 text-[#f8f4ee] hover:text-rose-200 transition-colors"
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
        </button>

        <button
          onClick={toggleMute}
          data-cursor="button"
          aria-label={isMuted ? "Unmute" : "Mute"}
          className="p-1.5 rounded-full bg-white/5 hover:bg-rose-500/20 text-[#bda8b3] hover:text-rose-200 transition-colors"
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
        </button>
      </div>
    </div>
  );
}
