import Image from "@/components/ui/Image";
import type { RevealContent } from "@/lib/types";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { type PointerEvent, type ReactNode, useState } from "react";

interface Props {
  reveal: RevealContent;
  /** The trigger text. It stays the accessible content; the popover is decorative. */
  children: ReactNode;
  className?: string;
}

const spring = { type: "spring", stiffness: 420, damping: 22, mass: 0.7 } as const;

/**
 * Wraps inline text so hovering it pops a small surprise (an emoji or a
 * polaroid photo) above it. Non-interactive, so it is safe inside a button.
 */
export default function HoverReveal({ reveal, children, className }: Props) {
  const [open, setOpen] = useState(false);
  const isImage = "image" in reveal;

  // Touch fires pointerenter on tap; skip it so tapping a parent row doesn't flash the popover
  const show = (e: PointerEvent) => {
    if (e.pointerType !== "touch") setOpen(true);
  };

  return (
    <span
      className={cn(
        "decoration-faint relative inline-block cursor-default underline decoration-dotted underline-offset-4",
        className,
      )}
      onPointerEnter={show}
      onPointerLeave={() => setOpen(false)}
    >
      {children}
      <AnimatePresence>
        {open && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 -translate-x-1/2"
          >
            <motion.span
              className={cn(
                "block origin-bottom",
                isImage
                  ? "bg-card shadow-glass w-[150px] rounded-[18px] p-2 pb-3"
                  : "glass bg-card shadow-glass rounded-full px-3 py-1.5 text-4xl leading-none",
              )}
              initial={{ opacity: 0, scale: 0.6, y: 8, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotate: isImage ? -4 : 6, transition: spring }}
              exit={{
                opacity: 0,
                scale: 0.6,
                y: 8,
                rotate: -8,
                transition: { duration: 0.15, ease: "easeIn" },
              }}
            >
              {isImage ? (
                <Image
                  src={reveal.image.src}
                  alt={reveal.image.alt}
                  width={reveal.image.width}
                  height={reveal.image.height}
                  className="block h-auto w-full rounded-xl"
                />
              ) : (
                reveal.emoji
              )}
            </motion.span>
          </span>
        )}
      </AnimatePresence>
    </span>
  );
}
