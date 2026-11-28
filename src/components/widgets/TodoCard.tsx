import GlassCard from "@/components/ui/GlassCard";
import type { Todo } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Check, List } from "lucide-react";
import { useState } from "react";

/** Reminders-style checklist. Ticks are local to the visit; the list comes from data. */
export default function TodoCard({ items }: { items: Todo[] }) {
  const [done, setDone] = useState(() => items.map((item) => item.done));
  const remaining = done.filter((isDone) => !isDone).length;

  const toggle = (index: number) =>
    setDone((previous) => previous.map((isDone, i) => (i === index ? !isDone : isDone)));

  return (
    <GlassCard lift className="flex flex-col gap-1 px-4 pt-3.5 pb-1.5">
      <div className="text-accent flex items-center justify-between gap-2">
        <span className="flex items-center gap-2">
          <span className="bg-accent text-on-accent flex size-[26px] items-center justify-center rounded-full">
            <List className="size-3.5" strokeWidth={2.4} aria-hidden="true" />
          </span>
          <span className="text-[17px] font-extrabold">To-do</span>
        </span>
        <span
          className="text-[22px] leading-none font-extrabold tabular-nums"
          aria-label={`${remaining} remaining`}
        >
          {remaining}
        </span>
      </div>

      <ul className="flex flex-col divide-y">
        {items.map((item, i) => (
          <li key={item.text}>
            <button
              type="button"
              onClick={() => toggle(i)}
              aria-pressed={done[i]}
              className="group flex min-h-11 w-full items-start gap-2.5 py-[9px] text-left"
            >
              <span
                aria-hidden="true"
                className={cn(
                  "mt-px flex size-[18px] shrink-0 items-center justify-center rounded-full border-[1.5px] transition-colors duration-200",
                  done[i]
                    ? "border-accent bg-accent text-on-accent"
                    : "border-faint group-hover:border-accent text-transparent",
                )}
              >
                <Check className="size-[11px]" strokeWidth={3.5} />
              </span>
              <span className="flex min-w-0 flex-col">
                <span
                  className={cn(
                    "text-sm leading-5 transition-colors duration-200",
                    done[i] && "text-muted line-through",
                  )}
                >
                  {item.text}
                </span>
                <span className="text-muted text-[11px]">{item.note}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>
    </GlassCard>
  );
}
