import { useEffect, useState } from "react";

export default function AnimatedBackground() {
  const [offset, setOffset] = useState(0.5);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setOffset(e.clientX / window.innerWidth);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // SVG wave path, offset moves the wave horizontally
  const wavePath = `M0 60 Q${80 + offset * 40} 0, 160 60 T320 60 T480 60 T640 60 T800 60 V120 H0 Z`;

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <svg
        width="100%"
        height="80%"
        viewBox="0 0 800 120"
        preserveAspectRatio="none"
        style={{ position: "absolute", bottom: 0, left: 0 }}
      >
        <defs>
          <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        <path
          d={wavePath}
          fill="url(#waveGradient)"
          style={{ transition: "d 0.3s cubic-bezier(.22,1,.36,1)" }}
        />
      </svg>
    </div>
  );
}
