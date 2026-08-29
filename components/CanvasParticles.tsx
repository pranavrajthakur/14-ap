"use client";

import { useEffect, useRef } from "react";

interface CanvasParticlesProps {
  intensity?: "ambient" | "celebration";
}

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
  isPetal: boolean;
}

export default function CanvasParticles({ intensity = "ambient" }: CanvasParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const count = intensity === "celebration" ? 120 : 35;
    const colors = [
      "rgba(226, 125, 150, ",
      "rgba(237, 211, 190, ",
      "rgba(255, 182, 193, ",
      "rgba(212, 136, 156, ",
    ];

    const particles: Particle[] = Array.from({ length: count }, () => {
      const isPetal = intensity === "celebration" && Math.random() > 0.4;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        size: isPetal ? Math.random() * 6 + 4 : Math.random() * 2.5 + 0.8,
        speedX: (Math.random() - 0.5) * (intensity === "celebration" ? 0.8 : 0.3),
        speedY: isPetal ? Math.random() * 1.2 + 0.5 : (Math.random() - 0.5) * 0.3 - 0.2,
        opacity: Math.random() * 0.6 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.03,
        isPetal,
      };
    });

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;

        // Wrap around boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        if (p.isPetal) {
          // Draw subtle rose petal shape
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size, p.size * 0.6, 0, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${p.opacity})`;
          ctx.shadowBlur = 8;
          ctx.shadowColor = "rgba(226, 125, 150, 0.4)";
          ctx.fill();
        } else {
          // Draw soft glowing ambient dot
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${p.opacity})`;
          ctx.shadowBlur = 6;
          ctx.shadowColor = `${p.color}0.6)`;
          ctx.fill();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [intensity]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-70"
    />
  );
}
