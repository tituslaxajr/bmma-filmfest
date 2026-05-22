import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import imgMainBackground from "../../assets/8k hero cover.png";
import { motion } from "motion/react";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect || !spotlightRef.current) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    spotlightRef.current.style.background = `radial-gradient(ellipse 28% 36% at ${x}% ${y}%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.78) 100%)`;
  }

  function handleMouseLeave() {
    if (!spotlightRef.current) return;
    spotlightRef.current.style.background =
      "radial-gradient(circle at center, rgba(0,0,0,0.04), rgba(0,0,0,0.62) 74%)";
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white px-6 md:px-12 lg:px-24 py-20"
    >
      {/* Background with cinematic treatment */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={imgMainBackground}
          alt="BMMA Film Fest Background"
          className="w-full h-full object-cover opacity-84"
        />
        {/* Dynamic cursor spotlight overlay */}
        <div
          ref={spotlightRef}
          className="absolute inset-0 transition-none"
          style={{ background: "radial-gradient(circle at center, rgba(0,0,0,0.04), rgba(0,0,0,0.62) 74%)" }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/24 via-black/8 to-black/68"></div>
      </div>

      <div className="relative z-10 container mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="type-eyebrow mb-7 text-white/75 md:mb-8 md:text-base md:tracking-[0.42em]"
        >
          BMMA 3A Presents
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mb-9 md:mb-10"
        >
          <div className="absolute left-1/2 top-1/2 h-28 w-[115%] -translate-x-1/2 -translate-y-1/2 bg-[linear-gradient(90deg,transparent,rgba(220,38,38,0.22),rgba(217,174,0,0.08),transparent)] blur-2xl"></div>
          <h1 className="font-display relative flex flex-col items-center text-[4rem] leading-[0.88] font-bold uppercase tracking-[-0.045em] md:text-[6.9rem] lg:text-[9.1rem] xl:text-[10.4rem]">
              <span className="relative inline-block mb-2 text-[#d9ae00] md:mb-4">
                <span className="absolute inset-0 translate-x-[0.04em] translate-y-[0.04em] blur-[7px] text-[#d9ae00]/70">
                  BMMA
                </span>
                <span className="relative">BMMA</span>
              </span>
              <span className="relative mb-2 inline-block text-white md:mb-4">
                <span className="absolute -inset-x-4 inset-y-0 rounded-full bg-black/18 blur-xl"></span>
                <span className="absolute inset-0 translate-x-[0.03em] translate-y-[0.04em] blur-[8px] text-white/50">
                  FILM
                </span>
                <span className="relative">FILM</span>
              </span>
              <span className="relative inline-flex flex-wrap items-end text-white">
                <span className="relative text-white">
                  <span className="absolute -inset-x-3 inset-y-0 rounded-full bg-black/16 blur-xl"></span>
                  <span className="absolute inset-0 translate-x-[0.03em] translate-y-[0.04em] blur-[8px] text-white/50">
                    FE
                  </span>
                  <span className="relative">FE</span>
                </span>
                <span className="relative text-[#d9ae00]">
                  <span className="absolute inset-0 translate-x-[0.03em] translate-y-[0.04em] blur-[8px] text-[#d9ae00]/80">
                    STI
                  </span>
                  <span className="relative">STI</span>
                </span>
                <span className="relative text-white">
                  <span className="absolute -inset-x-3 inset-y-0 rounded-full bg-black/16 blur-xl"></span>
                  <span className="absolute inset-0 translate-x-[0.03em] translate-y-[0.04em] blur-[8px] text-white/50">
                    VAL
                  </span>
                  <span className="relative">VAL</span>
                </span>
              </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center justify-center gap-6 md:gap-12"
        >
          <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-0">
            {/* Date & Venue */}
            <div className="flex flex-col items-center gap-3 md:items-end md:pr-12 md:flex-1">
              <p className="type-meta text-[10px] tracking-[0.35em] text-white/40 uppercase">When & Where</p>
              <p className="font-display text-3xl font-bold uppercase tracking-[-0.02em] text-white md:text-4xl md:text-right">26 May 2026</p>
              <p className="font-display text-xl font-bold uppercase tracking-[-0.02em] text-[#d9ae00] md:text-2xl md:text-right">
                STI College San Fernando
              </p>
            </div>

            {/* Divider */}
            <div className="hidden md:flex flex-col items-center self-stretch">
              <div className="w-px flex-1 bg-gradient-to-b from-transparent via-[#d9ae00] to-transparent" />
            </div>
            <div className="block md:hidden w-16 h-px bg-gradient-to-r from-transparent via-[#d9ae00] to-transparent" />

            {/* Description */}
            <div className="flex flex-col items-center gap-3 md:items-start md:pl-12 md:flex-1">
              <p className="type-meta text-[10px] tracking-[0.35em] text-white/40 uppercase">The Films</p>
              <p className="type-body-lg max-w-xs text-gray-300 text-center md:text-left">
                Featuring three original short films showcasing creativity, storytelling, and passion for filmmaking.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-wrap justify-center md:mt-12"
        >
          <button 
             onClick={() => document.getElementById('films')?.scrollIntoView({ behavior: 'smooth' })}
             className="type-button cursor-pointer rounded-full bg-[#d9ae00] px-8 py-4 text-black shadow-lg shadow-[#d9ae00]/20 transition-all hover:bg-white"
          >
            Explore the films
          </button>
        </motion.div>
      </div>
      
    </section>
  );
}
