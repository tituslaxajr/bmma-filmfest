import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, Facebook } from "lucide-react";
import imgStiLogo from "figma:asset/47cbf0d3de843c46c04016a28331d6c54787b877.png";

const students = [
  "Canilao, Christian Manuel",
  "Cayanan, Ma. Clowee",
  "Cordero, Ariane Mico",
  "Cristi, Meghan",
  "David, Geil Wryzel",
  "Delos Santos, Valerie",
  "Dimaunahan, Jessica Marie",
  "Espoltero, Geraldine",
  "Francisco, Francesca Reigne",
  "Gaddi, Seth Marcus",
  "Galang, Marc Welhem",
  "Galang, Sofia Ysabel",
  "Lingad, Princess Mae",
  "Mejia, Mark Joshua",
  "Pangan, Jelie",
  "Santos, Mary Eleanore Adellei",
  "Valdez, Mowell Rosch"
];

const socialLinks = [
  {
    name: "Luminara",
    url: "https://www.facebook.com/profile.php?id=61575445079151&sk=photos",
  },
  {
    name: "Shutterbox",
    url: "https://www.facebook.com/shutter.box.ph",
  },
  {
    name: "Visionerie",
    url: "https://www.facebook.com/profile.php?id=61587683045700",
  },
];

export function TeamSection() {
  return (
    <section className="relative overflow-hidden py-24 bg-zinc-950 text-white px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="absolute left-[-12%] top-0 h-80 w-80 rounded-full bg-red-800/10 blur-3xl"></div>
      <div className="container relative z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-['Inter'] font-bold uppercase mb-4 tracking-widest text-[#d9ae00]">
            The Creative Minds
          </h2>
          <p className="text-gray-400 font-['DM_Sans'] text-xl">BMMA 3A Cohort</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-6 max-w-5xl mx-auto">
          {students.map((student, index) => (
            <motion.div
              key={student}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="text-lg md:text-xl font-['DM_Sans'] text-gray-300 hover:text-[#d9ae00] transition-colors cursor-default"
            >
              {student} {index < students.length - 1 && <span className="ml-6 text-zinc-800">/</span>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black py-16 px-6 md:px-12 lg:px-24 border-t border-white/10">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-red-600/40 to-transparent"></div>
      <div className="container relative z-10 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="max-w-2xl text-center md:text-left space-y-6">
            <p className="text-gray-500 font-['DM_Sans'] text-sm md:text-base leading-relaxed">
              Disclaimer: Any ticket sales, donations, or contributions for the BMMA Film Festival will be used solely to help cover the students' film production expenses. This event is not intended for profit or personal earnings.
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:justify-start">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 font-['Inter'] text-xs font-bold uppercase tracking-widest text-white/60 transition-colors hover:border-[#d9ae00]/60 hover:text-[#d9ae00]"
                >
                  <Facebook size={14} />
                  {link.name}
                  <ExternalLink size={12} />
                </a>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-4">
             <div className="w-32 md:w-40">
                <ImageWithFallback src={imgStiLogo} alt="STI College San Fernando" className="w-full h-auto" />
             </div>
             <p className="text-white/50 text-xs uppercase tracking-widest">
               (c) 2026 BMMA 3A. All Rights Reserved.
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
