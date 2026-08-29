"use client";

import { useEffect, useState } from "react";

export default function Cursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hoveredState, setHoveredState] = useState<"normal" | "button" | "photo" | "secret">("normal");
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device is touch-enabled
    if (window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const photoParent = target.closest("[data-cursor='photo']");
      const buttonParent = target.closest("button, a, [data-cursor='button']");
      const secretParent = target.closest("[data-cursor='secret']");

      if (secretParent) {
        setHoveredState("secret");
      } else if (photoParent) {
        setHoveredState("photo");
      } else if (buttonParent) {
        setHoveredState("button");
      } else {
        setHoveredState("normal");
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Primary Dot */}
      <div
        className="fixed top-0 left-0 w-3 h-3 bg-rose-300 rounded-full shadow-[0_0_12px_rgba(226,125,150,0.8)] transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${
            hoveredState === "button" ? 1.8 : hoveredState === "photo" ? 0 : 1
          })`,
        }}
      />

      {/* Expanded Ring */}
      <div
        className={`fixed top-0 left-0 border rounded-full transition-all duration-300 ease-out -translate-x-1/2 -translate-y-1/2 flex items-center justify-center ${
          hoveredState === "button"
            ? "w-12 h-12 border-rose-400/80 bg-rose-500/10 scale-110"
            : hoveredState === "photo"
            ? "w-28 h-9 border-rose-300/60 bg-[#1a0812]/90 backdrop-blur-md rounded-full px-3"
            : hoveredState === "secret"
            ? "w-10 h-10 border-amber-300 bg-amber-400/20 animate-pulse"
            : "w-8 h-8 border-rose-200/20 bg-transparent"
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      >
        {hoveredState === "photo" && (
          <span className="text-[11px] font-medium tracking-wider text-rose-200 uppercase whitespace-nowrap">
            look at this →
          </span>
        )}
        {hoveredState === "secret" && (
          <span className="text-xs">✨</span>
        )}
      </div>
    </div>
  );
}
