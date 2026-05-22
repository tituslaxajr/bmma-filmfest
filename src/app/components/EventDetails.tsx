import { CalendarDays, Clock, MapPin, Ticket } from "lucide-react";
import { motion } from "motion/react";

const details = [
  {
    icon: CalendarDays,
    label: "Date",
    value: "May 26, 2026",
  },
  {
    icon: MapPin,
    label: "Venue",
    value: "STI College San Fernando",
  },
  {
    icon: Clock,
    label: "Screenings",
    value: "11:00AM - 5:30PM",
  },
  {
    icon: Ticket,
    label: "Admission",
    value: "Get tickets on location",
  },
];

export function EventDetails() {
  return (
    <section
      id="event"
      className="relative overflow-hidden bg-black px-6 py-16 text-white md:px-12 lg:px-24"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#d9ae00]/50 to-transparent"></div>
      <div className="absolute -left-20 top-10 h-60 w-60 rounded-full bg-red-700/16 blur-3xl"></div>
      <div className="absolute right-0 bottom-0 h-48 w-80 rounded-full bg-[#d9ae00]/8 blur-3xl"></div>

      <div className="container relative z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid gap-4 md:grid-cols-2 xl:grid-cols-4"
        >
          {details.map((detail) => {
            const Icon = detail.icon;

            return (
              <div
                key={detail.label}
                className="rounded-lg border border-white/10 bg-white/[0.035] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.25)] backdrop-blur-sm"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#d9ae00] text-black">
                  <Icon size={20} />
                </div>
                <p className="type-meta text-white/45 md:text-xs">
                  {detail.label}
                </p>
                <p className="type-card-title mt-2 uppercase text-white">
                  {detail.value}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
