import { motion } from "motion/react";
import { Facebook, ExternalLink, Film } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import imgLuminara from "../../../luminara.jpg";
import imgShutterbox from "../../../shutterbox cover.jpg";
import imgVisionerie from "../../../visionerie cover.jpg";

const groups = [
  {
    name: "Luminara Film Productions",
    film: "In Her Eyes",
    facebookUrl: "https://www.facebook.com/profile.php?id=61575445079151&sk=photos",
    description: "Capturing the raw intensity of psychological drama through a unique lens.",
    image: imgLuminara
  },
  {
    name: "Shutterbox Production",
    film: "Mis-fortune",
    facebookUrl: "https://www.facebook.com/shutter.box.ph",
    description: "Exploring the intersections of fate and consequence in contemporary storytelling.",
    image: imgShutterbox
  },
  {
    name: "Visionerie Creative Studio",
    film: "Kubli",
    facebookUrl: "https://www.facebook.com/profile.php?id=61587683045700",
    description: "An experimental powerhouse dedicated to uncovering hidden narratives.",
    image: imgVisionerie
  }
];

export function ProductionGroups() {
  return (
    <section id="productions" className="py-24 bg-zinc-950 text-white px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[#d9ae00] font-['Inter'] font-bold text-4xl md:text-5xl uppercase mb-4">
            The Filmmakers
          </h2>
          <div className="w-24 h-1 bg-[#d9ae00] mx-auto mb-6"></div>
          <p className="text-gray-400 font-['DM_Sans'] text-lg max-w-2xl mx-auto">
            Follow the creative minds behind this year's official selections and stay updated on their latest projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {groups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-black/40 border border-white/5 rounded-2xl overflow-hidden hover:border-[#d9ae00]/50 transition-all duration-500"
            >
              <div className="aspect-square relative overflow-hidden bg-zinc-900/50 p-6">
                <ImageWithFallback
                  src={group.image}
                  alt={group.name}
                  className="h-full w-full object-contain grayscale transition-all duration-700 group-hover:scale-[1.02] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="p-8 space-y-4 relative z-10 bg-black/60 backdrop-blur-sm border-t border-white/5">
                <div className="flex items-center gap-2 text-[#d9ae00] text-xs font-bold uppercase tracking-widest">
                  <Film size={14} />
                  <span>{group.film}</span>
                </div>
                <h3 className="text-2xl font-bold font-['Inter'] text-white">
                  {group.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed font-['DM_Sans']">
                  {group.description}
                </p>
                
                <a
                  href={group.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/5 hover:bg-[#d9ae00] text-[#d9ae00] hover:text-black px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all w-full justify-center border border-[#d9ae00]/20 hover:border-[#d9ae00]"
                >
                  <Facebook size={18} />
                  Follow on Facebook
                  <ExternalLink size={14} className="ml-1 opacity-50" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
