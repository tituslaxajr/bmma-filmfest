import { motion } from "motion/react";
import { Play } from "lucide-react";
import { trailers } from "./TrailerPopup";
import { TiltCard } from "./TiltCard";

function SprocketStrip() {
  return (
    <div className="flex items-center gap-[10px] px-3 py-[6px] bg-zinc-900 overflow-hidden">
      {Array.from({ length: 80 }).map((_, i) => (
        <div
          key={i}
          className="w-4 h-[14px] flex-shrink-0 rounded-[3px] bg-black border border-white/[0.07]"
        />
      ))}
    </div>
  );
}

export function TrailerSection({ onSelectTrailer }: { onSelectTrailer: (id: string) => void }) {
  return (
    <section id="trailers" className="relative overflow-hidden py-24 bg-black text-white px-6 md:px-12 lg:px-24">
      <div className="absolute left-1/2 top-8 h-64 w-[70vw] -translate-x-1/2 bg-[linear-gradient(90deg,transparent,rgba(220,38,38,0.16),transparent)] blur-3xl" />
      <div className="container relative z-10 mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="type-section-title mb-14 border-l-4 border-[#d9ae00] pl-6 text-[#d9ae00]"
        >
          Official Trailers
        </motion.h2>

        {/* Film strip frame */}
        <div className="relative rounded-xl overflow-hidden border border-white/[0.08] shadow-[0_0_60px_rgba(0,0,0,0.6)]">
          <SprocketStrip />

          {/* Frames */}
          <div className="bg-zinc-950 px-5 py-6">
            <div
              className="flex gap-5 overflow-x-auto md:grid md:grid-cols-3 md:overflow-visible"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
            >
              {trailers.map((trailer, index) => (
                <TiltCard
                  key={trailer.id}
                  className="flex-shrink-0 w-[80vw] md:w-auto cursor-pointer"
                  intensity={2}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.12 }}
                    className="group"
                    onClick={() => onSelectTrailer(trailer.id)}
                  >
                    {/* Frame number */}
                    <div className="mb-2 flex items-center gap-2">
                      <span className="type-meta text-[10px] text-white/20 tracking-[0.3em]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1 h-px bg-white/8" />
                    </div>

                    <div className="relative aspect-video overflow-hidden rounded-md border border-white/10 bg-zinc-900 shadow-2xl">
                      <img
                        src={trailer.thumbnail}
                        alt={`${trailer.title} trailer still`}
                        className="w-full h-full object-cover opacity-55 transition-all duration-700 group-hover:opacity-80 group-hover:scale-105"
                        style={{ filter: "sepia(0.2) contrast(1.1)" }}
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />

                      {/* Play button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.15 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-[#d9ae00] text-black w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-[#d9ae00]/25 transition-shadow duration-300 group-hover:shadow-[#d9ae00]/50"
                        >
                          <Play fill="currentColor" size={20} />
                        </motion.div>
                      </div>
                    </div>

                    <h3 className="type-card-title mt-4 uppercase tracking-[0.1em] text-white/80 transition-colors group-hover:text-[#d9ae00]">
                      {trailer.title}
                    </h3>
                  </motion.div>
                </TiltCard>
              ))}
            </div>
          </div>

          <SprocketStrip />
        </div>
      </div>
    </section>
  );
}
