import { Hero } from "./components/Hero";
import { FilmSection } from "./components/FilmSection";
import { EventDetails } from "./components/EventDetails";
import { TrailerSection } from "./components/TrailerSection";
import { TrailerPopup } from "./components/TrailerPopup";
import { ProductionGroups } from "./components/ProductionGroups";
import { TeamSection, Footer } from "./components/TeamSection";
import { FilmGrain } from "./components/FilmGrain";
import { CinematicIntro } from "./components/CinematicIntro";
import { motion, useScroll, useSpring } from "motion/react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { Toaster } from "sonner";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import imgOverlay from "../assets/texture-overlay-optimized.jpg";

export default function Home() {
  const [activeTrailerId, setActiveTrailerId] = useState<string | null>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navItems = [
    {
      label: "Home",
      action: () => window.scrollTo({ top: 0, behavior: "smooth" }),
    },
    {
      label: "Event",
      action: () => document.getElementById("event")?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      label: "Films",
      action: () => document.getElementById("films")?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      label: "Trailers",
      action: () => document.getElementById("trailers")?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      label: "Filmmakers",
      action: () => document.getElementById("productions")?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      label: "Credits",
      action: () => document.querySelector("footer")?.scrollIntoView({ behavior: "smooth" }),
    },
  ];

  const handleNavClick = (action: () => void) => {
    setMobileNavOpen(false);
    action();
  };

  return (
    <main className="bg-black min-h-screen selection:bg-[#d9ae00] selection:text-black overflow-x-hidden relative">
      <CinematicIntro onComplete={() => setIntroComplete(true)} />
      <FilmGrain />
      <Toaster position="bottom-right" />
      <TrailerPopup
        trailerId={activeTrailerId}
        onClose={() => setActiveTrailerId(null)}
      />
      <div className="fixed inset-0 z-20 pointer-events-none overflow-hidden">
        <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-red-600/18 blur-3xl md:h-[28rem] md:w-[28rem]"></div>
        <div className="absolute right-[-10%] top-[18%] h-64 w-64 rounded-full bg-red-500/12 blur-3xl md:h-[26rem] md:w-[26rem]"></div>
        <div className="absolute left-[8%] bottom-[18%] h-56 w-80 rotate-[-18deg] rounded-full bg-[linear-gradient(90deg,rgba(220,38,38,0.14),rgba(239,68,68,0.05),transparent)] blur-2xl"></div>
      </div>
      {/* Texture Overlay — reduced opacity since FilmGrain adds animated grain */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-10 mix-blend-overlay">
        <ImageWithFallback src={imgOverlay} alt="" className="w-full h-full object-cover" />
      </div>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#d9ae00] origin-left z-50"
        style={{ scaleX }}
      />

      <header className="fixed top-0 left-0 right-0 z-40 px-4 pt-4 md:px-8 lg:px-12">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/65 px-5 py-4 text-white shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          <button
            onClick={() => handleNavClick(() => window.scrollTo({ top: 0, behavior: "smooth" }))}
            className="font-display cursor-pointer text-lg font-bold uppercase tracking-[0.18em] text-white"
          >
            BMMA<span className="text-[#d9ae00]">FF</span>
          </button>

          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.action)}
                className="type-meta cursor-pointer text-xs text-white/70 transition-colors hover:text-[#d9ae00]"
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMobileNavOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:border-[#d9ae00] hover:text-[#d9ae00] md:hidden"
            aria-label={mobileNavOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileNavOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>

        {mobileNavOpen && (
          <div className="mx-auto mt-3 max-w-7xl rounded-3xl border border-white/10 bg-black/90 p-3 shadow-[0_18px_50px_rgba(0,0,0,0.45)] backdrop-blur-xl md:hidden">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.action)}
                  className="type-meta rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-left text-white/80 transition-colors hover:border-[#d9ae00]/40 hover:text-[#d9ae00]"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <Hero />
      <EventDetails />
      <FilmSection onWatchTrailer={(id) => setActiveTrailerId(id)} />
      <TrailerSection onSelectTrailer={(id) => setActiveTrailerId(id)} />
      <ProductionGroups />
      <TeamSection />
      <Footer />
    </main>
  );
}
