import { ImageWithFallback } from "./figma/ImageWithFallback";
import imgMainBackground from "C:/Users/huawei notebook/Desktop/8k hero cover.png";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white px-6 md:px-12 lg:px-24 py-20">
      {/* Background with cinematic treatment */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={imgMainBackground}
          alt="BMMA Film Fest Background"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black"></div>
      </div>

      <div className="relative z-10 container mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-['Inter'] font-normal text-sm md:text-xl tracking-[6px] mb-8 uppercase"
        >
          BMMA 3A Presents
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-12"
        >
          <h1 className="font-['Inter'] font-bold text-6xl md:text-[180px] lg:text-[220px] leading-[0.8] tracking-[-0.08em] uppercase flex flex-col items-center">
            <span className="text-[#d9ae00] drop-shadow-[0_0_15px_rgba(217,174,0,0.5)]">BMMA</span>
            <span>FILM</span>
            <span>
              FE<span className="text-[#d9ae00]">STI</span>VAL
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12"
        >
          <div className="text-center md:text-right">
            <p className="font-['Inter'] font-bold text-3xl md:text-5xl uppercase mb-1">26 May 2026</p>
            <p className="font-['Inter'] font-bold text-2xl md:text-4xl text-[#d9ae00] uppercase">
              STI College San Fernando
            </p>
          </div>
          <div className="hidden md:block w-px h-24 bg-[#d9ae00]"></div>
          <p className="max-w-md text-lg md:text-2xl font-['DM_Sans'] font-normal leading-relaxed text-gray-300 md:text-left">
            Featuring three original short films showcasing creativity, storytelling, and passion for filmmaking.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 flex flex-wrap justify-center"
        >
          <button 
             onClick={() => document.getElementById('films')?.scrollIntoView({ behavior: 'smooth' })}
             className="bg-[#d9ae00] text-black px-8 py-4 rounded-full font-bold text-lg uppercase tracking-wider hover:bg-white transition-all cursor-pointer shadow-lg shadow-[#d9ae00]/20"
          >
            Explore the films
          </button>
        </motion.div>
      </div>
      
      {/* Decorative vertical lines */}
      <div className="absolute left-10 top-1/4 h-1/2 w-px bg-linear-to-b from-transparent via-[#d9ae00] to-transparent hidden lg:block"></div>
      <div className="absolute right-10 top-1/4 h-1/2 w-px bg-linear-to-b from-transparent via-[#d9ae00] to-transparent hidden lg:block"></div>
    </section>
  );
}
