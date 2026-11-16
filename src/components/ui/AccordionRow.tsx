import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { type ReactNode, useId } from "react";

interface Props {
  /** Short mono label in the left column (dates, year). */
  lead: string;
  title: string;
  subtitle: string;
  open: boolean;
  onToggle: () => void;
  /** Shown under the lead column when expanded. */
  aside?: ReactNode;
  children: ReactNode;
  className?: string;
}

const GRID = "grid gap-x-6 gap-y-1 sm:grid-cols-[180px_minmax(0,1fr)]";

/** One expandable row of a list; the parent owns which row is open. */
export default function AccordionRow({
  lead,
  title,
  subtitle,
  open,
  onToggle,
  aside,
  children,
  className,
}: Props) {
  const panelId = useId();

  return (
    <div className={cn("border-b", className)}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={panelId}
        className="hover:bg-surface flex w-full items-start gap-4 rounded-xl px-3 py-5 text-left transition-colors duration-150"
      >
        <span className={cn(GRID, "flex-1")}>
          <span className="text-muted font-mono text-xs leading-[26px]">{lead}</span>
          <span className="text-[17px] leading-[26px]">
            <strong className="font-extrabold">{title}</strong>
            <span className="text-muted"> · {subtitle}</span>
          </span>
        </span>
        <ChevronDown
          aria-hidden="true"
          className={cn(
            "ease-smooth mt-[3px] size-5 shrink-0 transition-transform duration-300",
            open ? "text-accent rotate-180" : "text-muted",
          )}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className={cn(GRID, "gap-y-3 px-3 pr-12 pb-6")}>
              <div className="text-muted font-mono text-xs">{aside}</div>
              <div className="flex max-w-[640px] flex-col gap-3.5">{children}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
