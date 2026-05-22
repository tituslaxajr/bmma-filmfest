import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Props {
  onComplete: () => void;
}

const CIRCUMFERENCE = 2 * Math.PI * 88;

export function CinematicIntro({ onComplete }: Props) {
  const [count, setCount] = useState(5);
  const [phase, setPhase] = useState<"countdown" | "flash" | "done">("countdown");
  const isFinishing = useRef(false);

  const finish = useCallback(() => {
    if (isFinishing.current) return;
    isFinishing.current = true;
    setPhase("flash");
    setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 500);
  }, [onComplete]);

  // Countdown tick
  useEffect(() => {
    if (phase !== "countdown") return;
    if (count <= 0) {
      finish();
      return;
    }
    const t = setTimeout(() => setCount((c) => c - 1), 700);
    return () => clearTimeout(t);
  }, [count, phase, finish]);

  // Allow skip after 600ms
  const finishRef = useRef(finish);
  finishRef.current = finish;
  useEffect(() => {
    const timer = setTimeout(() => {
      const skip = () => finishRef.current();
      window.addEventListener("keydown", skip, { once: true });
      window.addEventListener("pointerdown", skip, { once: true });
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  if (phase === "done") return null;

  return (
    <div className="fixed inset-0 z-[200] bg-black flex items-center justify-center overflow-hidden select-none">
      <AnimatePresence mode="wait">
        {phase === "flash" ? (
          <motion.div
            key="flash"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.3, 1, 0] }}
            transition={{ duration: 0.5, times: [0, 0.15, 0.3, 0.55, 1] }}
            className="absolute inset-0 bg-white"
          />
        ) : (
          <motion.div
            key="countdown"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="relative flex flex-col items-center"
          >
            {/* Leader circle */}
            <div className="relative w-56 h-56 md:w-72 md:h-72">
              <svg
                className="absolute inset-0 w-full h-full -rotate-90"
                viewBox="0 0 200 200"
              >
                {/* Dashed outer ring */}
                <circle
                  cx="100" cy="100" r="88"
                  fill="none"
                  stroke="rgba(255,255,255,0.12)"
                  strokeWidth="1"
                  strokeDasharray="3 6"
                />
                {/* Inner thin ring */}
                <circle
                  cx="100" cy="100" r="72"
                  fill="none"
                  stroke="rgba(255,255,255,0.06)"
                  strokeWidth="0.5"
                />
                {/* Crosshairs */}
                <line x1="100" y1="2"   x2="100" y2="26"  stroke="#d9ae00" strokeWidth="1.5" />
                <line x1="100" y1="174" x2="100" y2="198" stroke="#d9ae00" strokeWidth="1.5" />
                <line x1="2"   y1="100" x2="26"  y2="100" stroke="#d9ae00" strokeWidth="1.5" />
                <line x1="174" y1="100" x2="198" y2="100" stroke="#d9ae00" strokeWidth="1.5" />
                {/* Animated progress ring — resets each count via key */}
                <motion.circle
                  key={count}
                  cx="100" cy="100" r="88"
                  fill="none"
                  stroke="#d9ae00"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray={CIRCUMFERENCE}
                  initial={{ strokeDashoffset: CIRCUMFERENCE }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 0.68, ease: "linear" }}
                />
              </svg>

              {/* Count number */}
              <div className="absolute inset-0 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={count}
                    initial={{ opacity: 0, scale: 1.5, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.6, filter: "blur(6px)" }}
                    transition={{ duration: 0.18 }}
                    className="font-display text-7xl md:text-8xl font-bold text-white tabular-nums"
                    style={{ textShadow: "0 0 40px rgba(217,174,0,0.55)" }}
                  >
                    {count}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* Film info text */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-10 text-center space-y-1"
            >
              <p className="type-eyebrow text-[#d9ae00] tracking-[0.5em] text-[10px]">
                BMMA FILM FESTIVAL
              </p>
              <p className="type-meta text-white/20 text-[9px] tracking-[0.35em]">
                STI COLLEGE SAN FERNANDO · 2026
              </p>
            </motion.div>

            {/* Skip hint */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.25 }}
              transition={{ delay: 1.2 }}
              className="absolute bottom-8 type-meta text-white text-[9px] tracking-[0.3em]"
            >
              CLICK OR PRESS ANY KEY TO SKIP
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scan lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.07) 3px, rgba(0,0,0,0.07) 4px)",
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_center,transparent_35%,rgba(0,0,0,0.75)_100%)] pointer-events-none" />

      {/* Subtle projector flicker */}
      <motion.div
        className="absolute inset-0 bg-black pointer-events-none"
        animate={{ opacity: [0, 0.07, 0, 0.04, 0, 0.02, 0] }}
        transition={{ duration: 0.9, repeat: Infinity }}
      />
    </div>
  );
}
