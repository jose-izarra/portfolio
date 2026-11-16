import { cn } from "@/lib/utils";

// Enough copies of the word list to always cover the container while one copy scrolls out
const COPIES = 4;

interface MovingWordsProps {
  words: string[];
  direction?: -1 | 1;
  className?: string;
  /** Seconds for the words to scroll by one full copy of the list */
  speed?: number;
}

export default function MovingWords({
  words,
  direction = -1,
  className,
  speed = 40,
}: MovingWordsProps) {
  return (
    <div className={cn("relative flex w-full overflow-hidden py-2", className)}>
      <div className="flex w-max">
        {Array.from({ length: COPIES }, (_, copy) => (
          <div
            key={copy}
            aria-hidden={copy > 0}
            className={cn(
              "flex shrink-0",
              direction === -1 ? "animate-move-left" : "animate-move-right",
            )}
            style={{ animationDuration: `${speed}s` }}
          >
            {words.map((word, i) => (
              <span key={`word-${i}`} className="text-light/60 mx-5 text-base">
                {word}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
