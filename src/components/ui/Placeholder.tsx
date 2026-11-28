import { cn } from "@/lib/utils";
import { ImageIcon } from "lucide-react";

interface Props {
  /** What belongs here, e.g. "Photo". */
  label: string;
  className?: string;
}

/** Dashed stand-in for an image that hasn't been added yet. */
export default function Placeholder({ label, className }: Props) {
  return (
    <div
      role="img"
      aria-label={`${label} placeholder`}
      className={cn(
        "border-faint bg-surface text-muted flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed text-xs",
        className,
      )}
    >
      <ImageIcon className="size-5" aria-hidden="true" />
      <span>{label}</span>
    </div>
  );
}
