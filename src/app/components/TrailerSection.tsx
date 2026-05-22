import { motion } from "motion/react";
import { Play } from "lucide-react";
import { trailers } from "./TrailerPopup";

export function TrailerSection({ onSelectTrailer }: { onSelectTrailer: (id: string) => void }) {
  return (
    <section id="trailers" className="relative overflow-hidden py-24 bg-black text-white px-6 md:px-12 lg:px-24">
      <div className="absolute left-1/2 top-8 h-64 w-[70vw] -translate-x-1/2 bg-[linear-gradient(90deg,transparent,rgba(220,38,38,0.16),transparent)] blur-3xl"></div>
      <div className="container relative z-10 mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="type-section-title mb-16 border-l-4 border-[#d9ae00] pl-6 text-[#d9ae00]"
        >
          Official Trailers
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trailers.map((trailer) => (
            <motion.div
              key={trailer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative cursor-pointer"
              onClick={() => onSelectTrailer(trailer.id)}
            >
              <div className="relative aspect-video overflow-hidden rounded-lg border border-white/10 bg-zinc-900 shadow-2xl">
                <img 
                  src={trailer.thumbnail} 
                  alt={`${trailer.title} trailer still`}
                  className="w-full h-full object-cover opacity-65 transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="bg-[#d9ae00] text-black w-16 h-16 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg shadow-[#d9ae00]/20"
                  >
                    <Play fill="currentColor" size={24} />
                  </div>
                </div>
              </div>
              <h3 className="type-card-title mt-4 uppercase tracking-[0.12em] text-white/90 transition-colors group-hover:text-[#d9ae00]">
                {trailer.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
