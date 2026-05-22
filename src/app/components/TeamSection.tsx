import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, Facebook } from "lucide-react";
import imgStiLogo from "figma:asset/47cbf0d3de843c46c04016a28331d6c54787b877.png";
import imgLuminara from "figma:asset/c589f4921221a6b99e242c5cace2710d002953cd.png";
import imgShutterbox from "figma:asset/f434c0ecc56937158ac2e788621b43b7b3397cdf.png";
import imgVisionerie from "figma:asset/cebddcdbacb68fd94ac779035ea6376c0fc6e0c1.png";

const studios = [
  {
    name: "Luminara Film Productions",
    film: "In Her Eyes",
    logo: imgLuminara,
    url: "https://www.facebook.com/profile.php?id=61575445079151&sk=photos",
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
    film: "Mis-Fortune",
    logo: imgShutterbox,
    url: "https://www.facebook.com/shutter.box.ph",
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
    logo: imgVisionerie,
    url: "https://www.facebook.com/profile.php?id=61587683045700",
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
      <div className="absolute right-[-8%] bottom-20 h-64 w-64 rounded-full bg-[#d9ae00]/6 blur-3xl"></div>
      <div className="container relative z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="type-section-title mb-4 text-[#d9ae00]">
            The Creative Minds
          </h2>
          <p className="type-body-lg text-gray-400">BMMA 3A Cohort</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {studios.map((studio, studioIndex) => (
            <motion.div
              key={studio.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: studioIndex * 0.15 }}
              className="rounded-2xl border border-white/8 bg-white/[0.03] p-8 flex flex-col gap-6"
            >
              {/* Studio logo */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 flex-shrink-0 grayscale opacity-70">
                  <ImageWithFallback
                    src={studio.logo}
                    alt={studio.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <p className="type-meta text-[10px] tracking-[0.25em] text-[#d9ae00] uppercase mb-1">
                    {studio.film}
                  </p>
                  <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white leading-tight">
                    {studio.name}
                  </h3>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-[#d9ae00]/20" />

              {/* Members */}
              <ul className="space-y-3 flex-1">
                {studio.members.map((member) => (
                  <li
                    key={member}
                    className="font-body text-sm text-gray-300 hover:text-white transition-colors cursor-default flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#d9ae00]/50 flex-shrink-0" />
                    {member}
                  </li>
                ))}
              </ul>

              {/* Facebook link */}
              <a
                href={studio.url}
                target="_blank"
                rel="noopener noreferrer"
                className="type-button inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs text-white/50 transition-all hover:border-[#d9ae00]/60 hover:text-[#d9ae00]"
              >
                <Facebook size={13} />
                Follow on Facebook
                <ExternalLink size={11} className="opacity-50" />
              </a>
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
            <p className="type-body text-gray-500">
              Disclaimer: Any ticket sales, donations, or contributions for the BMMA Film Festival will be used solely to help cover the students' film production expenses. This event is not intended for profit or personal earnings.
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:justify-start">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="type-button inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs text-white/60 transition-colors hover:border-[#d9ae00]/60 hover:text-[#d9ae00]"
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
             <p className="type-meta text-xs text-white/50">
               (c) 2026 BMMA 3A. All Rights Reserved.
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
