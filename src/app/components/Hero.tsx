import { ImageWithFallback } from "./figma/ImageWithFallback";
import imgMainBackground from "../../assets/8k hero cover.png";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white px-6 md:px-12 lg:px-24 py-20">
      {/* Background with cinematic treatment */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={imgMainBackground}
          alt="BMMA Film Fest Background"
          className="w-full h-full object-cover opacity-84"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04),rgba(0,0,0,0.54)_74%)]"></div>
        <div className="absolute inset-0 bg-linear-to-b from-black/24 via-black/8 to-black/68"></div>
      </div>

      <div className="relative z-10 container mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-7 font-['Inter'] text-sm font-normal uppercase tracking-[0.26em] text-white/75 md:mb-8 md:text-lg md:tracking-[0.45em]"
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
          <h1 className="relative flex flex-col items-center font-['Inter'] text-[4rem] leading-[0.88] font-bold uppercase tracking-[-0.045em] md:text-[6.9rem] lg:text-[9.1rem] xl:text-[10.4rem]">
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
          <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-12">
            <div className="text-center md:text-right">
              <p className="font-['Inter'] text-3xl font-bold uppercase mb-1 md:text-5xl">26 May 2026</p>
              <p className="font-['Inter'] text-2xl font-bold text-[#d9ae00] uppercase md:text-4xl">
                STI College San Fernando
              </p>
            </div>
            <div className="hidden md:block h-24 w-px bg-[#d9ae00]"></div>
          <p className="max-w-md font-['DM_Sans'] text-lg leading-relaxed text-gray-300 md:text-left md:text-2xl">
            Featuring three original short films showcasing creativity, storytelling, and passion for filmmaking.
          </p>
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
             className="bg-[#d9ae00] text-black px-8 py-4 rounded-full font-bold text-lg uppercase tracking-wider hover:bg-white transition-all cursor-pointer shadow-lg shadow-[#d9ae00]/20"
          >
            Explore the films
          </button>
        </motion.div>
      </div>
      
    </section>
  );
}
