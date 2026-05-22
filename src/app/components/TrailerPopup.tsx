import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { ExternalLink } from "lucide-react";
import imgKubliStill from "C:/Users/huawei notebook/Documents/kubli still trailer.jpg";
import imgInHerEyesStill from "C:/Users/huawei notebook/Documents/trailer stills in her eyes.jpg";

export const trailers = [
  {
    id: "in-her-eyes",
    title: "In Her Eyes",
    openUrl: "https://drive.google.com/file/d/1iaCiTpTJX-RBFfrD6BDSxl2_rItUGdoF/view?usp=sharing",
    videoUrl: "https://drive.google.com/file/d/1iaCiTpTJX-RBFfrD6BDSxl2_rItUGdoF/preview",
    thumbnail: imgInHerEyesStill,
  },
  {
    id: "mis-fortune",
    title: "Mis-fortune",
    openUrl: "https://drive.google.com/file/d/1X5Xk_oYVjZ-G8nB_H_r3jH7-Y7_yGvE_/view?usp=sharing",
    videoUrl: "https://drive.google.com/file/d/1X5Xk_oYVjZ-G8nB_H_r3jH7-Y7_yGvE_/preview", // Example Drive Preview Link
    thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "kubli",
    title: "Kubli",
    openUrl: "https://drive.google.com/file/d/1kRL-v4ILtWTUKmMIlfbhEVRHLmi4_2S-/view?usp=sharing",
    videoUrl: "https://drive.google.com/file/d/1kRL-v4ILtWTUKmMIlfbhEVRHLmi4_2S-/preview",
    thumbnail: imgKubliStill,
  }
];

interface TrailerPopupProps {
  trailerId: string | null;
  onClose: () => void;
}

export function TrailerPopup({ trailerId, onClose }: TrailerPopupProps) {
  const trailer = trailers.find(t => t.id === trailerId);

  return (
    <Dialog open={!!trailerId} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-[95vw] lg:max-w-screen-2xl bg-black border-white/10 p-0 overflow-hidden shadow-[0_0_100px_rgba(217,174,0,0.15)] rounded-none md:rounded-lg">
        <DialogHeader className="sr-only">
          <DialogTitle>{trailer?.title} Trailer</DialogTitle>
          <DialogDescription>
            Watch the official trailer for {trailer?.title}.
          </DialogDescription>
        </DialogHeader>
        {trailer && (
          <div className="bg-zinc-950">
            <div className="aspect-video w-full">
              <iframe
                src={trailer.videoUrl}
                title={`${trailer.title} trailer`}
                className="h-full w-full"
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex items-center justify-between gap-4 border-t border-white/10 bg-black px-5 py-4">
              <span className="font-['Inter'] text-sm font-bold uppercase tracking-widest text-[#d9ae00]">
                {trailer.title} Trailer
              </span>
              <a
                href={trailer.openUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#d9ae00]/40 px-4 py-2 font-['Inter'] text-xs font-bold uppercase tracking-widest text-[#d9ae00] transition-colors hover:border-[#d9ae00] hover:bg-[#d9ae00] hover:text-black"
              >
                Open in Drive
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
