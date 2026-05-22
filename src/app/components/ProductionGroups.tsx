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
    image: imgLuminara,
    members: [
      "David, Geil Wryzel",
      "Cristi, Meghan",
      "Santos, Mary Eleanore Adellei",
      "Mejia, Mark Joshua",
      "Galang, Sofia Ysabel",
    ],
  },
  {
    name: "Shutterbox Production",
    film: "Mis-fortune",
    facebookUrl: "https://www.facebook.com/shutter.box.ph",
    description: "Exploring the intersections of fate and consequence in contemporary storytelling.",
    image: imgShutterbox,
    members: [
      "Cayanan, Ma. Clowee",
      "Cordero, Ariane Mico",
      "Francisco, Francesca Reigne",
      "Galang, Marc Welhem",
      "Gaddi, Seth Marcus",
      "Espoltero, Geraldine",
    ],
  },
  {
    name: "Visionerie Creative Studio",
    film: "Kubli",
    facebookUrl: "https://www.facebook.com/profile.php?id=61587683045700",
    description: "An experimental powerhouse dedicated to uncovering hidden narratives.",
    image: imgVisionerie,
    members: [
      "Delos Santos, Valerie",
      "Valdez, Mowell Rosch",
      "Dimaunahan, Jessica Marie",
      "Pangan, Jelie",
      "Canilao, Christian Manuel",
      "Lingad, Princess Mae",
    ],
  },
];

export function ProductionGroups() {
  return (
    <section id="productions" className="relative overflow-hidden py-24 bg-zinc-950 text-white px-6 md:px-12 lg:px-24">
      <div className="absolute -right-20 top-20 h-72 w-72 rounded-full bg-red-700/12 blur-3xl"></div>
      <div className="absolute left-1/3 bottom-0 h-56 w-96 bg-[linear-gradient(90deg,transparent,rgba(217,174,0,0.08),rgba(220,38,38,0.1),transparent)] blur-3xl"></div>
      <div className="container relative z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="type-section-title mb-4 text-[#d9ae00]">
            The Filmmakers
          </h2>
          <div className="w-24 h-1 bg-[#d9ae00] mx-auto mb-6"></div>
          <p className="type-body-lg mx-auto max-w-2xl text-gray-400">
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
                  alt={`${group.name} featured logo`}
                  className="h-full w-full object-contain grayscale transition-all duration-700 group-hover:scale-[1.02] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="p-8 space-y-4 relative z-10 bg-black/60 backdrop-blur-sm border-t border-white/5">
                <div className="type-meta flex items-center gap-2 text-[#d9ae00]">
                  <Film size={14} />
                  <span>{group.film}</span>
                </div>
                <h3 className="type-card-title text-white">
                  {group.name}
                </h3>
                <p className="type-body text-gray-400">
                  {group.description}
                </p>

                <div className="h-px bg-white/8" />

                <ul className="space-y-2">
                  {group.members.map((member) => (
                    <li key={member} className="font-body text-xs text-gray-400 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#d9ae00]/50 flex-shrink-0" />
                      {member}
                    </li>
                  ))}
                </ul>

                <a
                  href={group.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="type-button inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#d9ae00]/20 bg-white/5 px-6 py-3 text-[#d9ae00] transition-all hover:border-[#d9ae00] hover:bg-[#d9ae00] hover:text-black"
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
