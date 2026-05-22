import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import imgInHerEyes from "../../assets/in-her-eyes-poster-optimized.jpg";
import imgMisfortune from "../../assets/misfortune-poster-optimized.jpg";
import imgKubli from "figma:asset/5668d9559d8d6d80a01b3f591bca3dc754826657.png";
import imgLuminara from "figma:asset/c589f4921221a6b99e242c5cace2710d002953cd.png";
import imgShutterBox from "figma:asset/f434c0ecc56937158ac2e788621b43b7b3397cdf.png";
import imgVisionerie from "figma:asset/cebddcdbacb68fd94ac779035ea6376c0fc6e0c1.png";

const films = [
  {
    id: "in-her-eyes",
    title: "IN HER EYES",
    director: "Geil David",
    description: "A melancholy young lady reminisces about her past as she paints someone she holds dear to her heart, who became the light at the end of the tunnel she calls her life.",
    genre: "Psychological, Romance",
    time: "11:00AM - 5:30PM",
    venue: "STUDIO, 3RD FLOOR",
    poster: imgInHerEyes,
    logo: imgLuminara,
  },
  {
    id: "mis-fortune",
    title: "MIS-FORTUNE",
    director: "Clowee Cayanan",
    description: "What begins as an unsettling warning from a fortune teller soon turns into a psychological nightmare that forces a young woman to question fate, truth, and her own sanity.",
    genre: "Psychological, Mystery",
    time: "11:00AM - 5:00PM",
    venue: "CL3, 2ND FLOOR",
    poster: imgMisfortune,
    logo: imgShutterBox,
  },
  {
    id: "kubli",
    title: "KUBLI",
    director: "Valerie Delos Santos",
    description: "When a rural girl is forced to abandon her education for her family, the suffocating weight of obedience begins to fracture her mind, revealing a darkness that has always lived beneath her silence.",
    genre: "Psychological, Horror",
    time: "11:00AM - 4:00PM",
    venue: "ROOM 302, 3RD FLOOR",
    poster: imgKubli,
    logo: imgVisionerie,
  }
];

export function FilmSection({ onWatchTrailer }: { onWatchTrailer: (id: string) => void }) {
  return (
    <section id="films" className="relative overflow-hidden py-24 bg-black text-white px-6 md:px-12 lg:px-24">
      <div className="absolute right-[-12%] top-24 h-96 w-96 rounded-full bg-red-800/12 blur-3xl"></div>
      <div className="absolute left-[-12%] bottom-40 h-80 w-80 rounded-full bg-[#d9ae00]/8 blur-3xl"></div>
      <div className="container relative z-10 mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="type-section-title mb-16 border-l-4 border-[#d9ae00] pl-6 text-[#d9ae00]"
        >
          The Showcase
        </motion.h2>

        <div className="space-y-32">
          {films.map((film, index) => (
            <motion.div 
              key={film.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              {/* Film Poster */}
              <div className="w-full lg:w-1/3 flex-shrink-0">
                <div className="relative group overflow-hidden rounded-lg shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-white/10">
                  <ImageWithFallback 
                    src={film.poster} 
                    alt={`${film.title} official poster`}
                    className="w-full h-auto aspect-[2/3] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60"></div>
                </div>
              </div>

              {/* Film Details */}
              <div className="flex-1 space-y-8">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="type-film-title mb-2 text-[#d9ae00]">
                      {film.title}
                    </h3>
                    <p className="font-body text-xl text-white/90 md:text-2xl">
                      Directed by <span className="font-bold">{film.director}</span>
                    </p>
                  </div>
                  {film.logo && (
                    <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                      <ImageWithFallback src={film.logo} alt={`${film.title} production studio logo`} className="w-full h-full object-contain" />
                    </div>
                  )}
                </div>

                <div className="w-full h-px bg-[#d9ae00]/30"></div>

                <p className="type-body-lg max-w-2xl text-gray-300">
                  {film.description}
                </p>

                <div className="flex flex-wrap gap-4 items-center">
                  <div className="type-meta rounded-full border-2 border-[#d9ae00] px-6 py-2 text-[#d9ae00]">
                    {film.time}
                  </div>
                  <div className="type-meta rounded-full border-2 border-[#d9ae00] px-6 py-2 text-[#d9ae00]">
                    {film.venue}
                  </div>
                </div>

                <p className="type-meta text-gray-400">
                  Genre: <span className="text-white">{film.genre}</span>
                </p>

                <div className="pt-4 flex flex-wrap gap-4">
                  <div className="type-button rounded-full bg-[#d9ae00] px-10 py-4 text-black shadow-lg shadow-[#d9ae00]/20">
                    Get Tickets at the Room
                  </div>
                  <button 
                    onClick={() => onWatchTrailer(film.id)}
                    className="type-button cursor-pointer rounded-full border-2 border-white/20 px-10 py-4 text-white transition-all duration-300 hover:border-[#d9ae00] hover:text-[#d9ae00]"
                  >
                    Watch Trailer
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
