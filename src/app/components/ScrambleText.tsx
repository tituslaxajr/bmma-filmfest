import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$@!%&";

interface Props {
  text: string;
  className?: string;
  duration?: number;
  delay?: number;
}

export function ScrambleText({ text, className, duration = 900, delay = 0 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15% 0px" });
  const [displayed, setDisplayed] = useState(text);
  const triggered = useRef(false);

  useEffect(() => {
    if (!isInView || triggered.current) return;
    triggered.current = true;

    const startTime = performance.now() + delay;

    const animate = (now: number) => {
      if (now < startTime) {
        requestAnimationFrame(animate);
        return;
      }

      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const revealedCount = Math.floor(progress * text.length);

      setDisplayed(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < revealedCount) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (progress < 1) requestAnimationFrame(animate);
      else setDisplayed(text);
    };

    requestAnimationFrame(animate);
  }, [isInView, text, duration, delay]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      {displayed}
    </span>
  );
}
