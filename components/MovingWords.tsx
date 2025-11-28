"use client";
import { cn } from "@/lib/utils";
import Ticker from "framer-motion-ticker";

interface MovingWordsProps {
  words: string[];
  direction?: -1 | 1;
  className?: string;
  speed?: number;
}

export default function MovingWords({
  words,
  direction = -1,
  className,
  speed = 40,
}: MovingWordsProps) {
  return (
    <div
      className={cn("relative flex w-full overflow-hidden py-2", className)}
    >
      <Ticker duration={speed} direction={direction} >
        {words.map((word, i) => (
            <span key={`word-${i}`} className="text-light/60 text-base mx-5">
                {word}
          </span>
        ))}
        </Ticker>
    </div>
  );
}
