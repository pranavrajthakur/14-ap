"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "apology-intro", label: "Our Story", num: "01" },
  { id: "the-apology", label: "The Apology", num: "02" },
  { id: "the-memories", label: "The Memories", num: "03" },
  { id: "the-photos", label: "Gallery", num: "04" },
  { id: "what-i-miss", label: "What I Miss", num: "05" },
  { id: "the-letter", label: "The Letter", num: "06" },
  { id: "the-question", label: "My Question", num: "07" },
];

export default function ProgressNav() {
  const [activeSection, setActiveSection] = useState<string>("apology-intro");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300;

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-[80] hidden md:flex flex-col items-end space-y-4">
      {sections.map((item) => {
        const isActive = activeSection === item.id;

        return (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            data-cursor="button"
            className="group flex items-center gap-3 py-1 text-right focus:outline-none"
          >
            {/* Hover Tooltip Label */}
            <span
              className={`text-xs font-serif-romantic tracking-wider transition-all duration-300 ${
                isActive
                  ? "text-rose-200 opacity-100 translate-x-0"
                  : "text-[#bda8b3]/60 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2"
              }`}
            >
              {item.label}
            </span>

            {/* Indicator Dot/Number */}
            <div className="flex items-center gap-2">
              <span
                className={`text-[10px] font-mono transition-colors ${
                  isActive ? "text-rose-300 font-bold" : "text-[#bda8b3]/40 group-hover:text-rose-300/80"
                }`}
              >
                {item.num}
              </span>
              <div
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? "w-2.5 h-2.5 bg-rose-400 shadow-[0_0_10px_rgba(226,125,150,0.8)]"
                    : "w-1.5 h-1.5 bg-white/20 group-hover:bg-rose-300/60"
                }`}
              />
            </div>
          </button>
        );
      })}
    </nav>
  );
}
