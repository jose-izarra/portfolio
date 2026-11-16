import GlassCard from "@/components/ui/GlassCard";
import { site } from "@/data/site";
import useMadridTime from "@/hooks/useMadridTime";
import { cn } from "@/lib/utils";

const TICKS = Array.from({ length: 12 }, (_, i) => ({ deg: i * 30, major: i % 3 === 0 }));

/** Analog + digital clock for the site owner's city. */
export default function ClockCard() {
  const time = useMadridTime();
  const hourDeg = (time.hours % 12) * 30 + time.minutes * 0.5;
  const minuteDeg = time.minutes * 6 + time.seconds * 0.1;
  const secondDeg = time.seconds * 6;

  return (
    <GlassCard lift className="flex items-center gap-[18px] p-[18px]">
      <div
        role="img"
        aria-label={`Clock showing ${time.hm} in ${site.city}`}
        className="bg-surface relative size-[88px] shrink-0 rounded-full"
      >
        {TICKS.map((tick) => (
          <span
            key={tick.deg}
            className={cn(
              "absolute top-1 left-[43px] w-0.5 origin-[1px_40px] rounded-[1px]",
              tick.major ? "bg-foreground h-2" : "bg-faint h-1",
            )}
            style={{ transform: `rotate(${tick.deg}deg)` }}
          />
        ))}
        <span
          className="bg-foreground absolute top-[22px] left-[42px] h-[22px] w-1 origin-bottom rounded-sm"
          style={{ transform: `rotate(${hourDeg}deg)` }}
        />
        <span
          className="bg-foreground absolute top-3 left-[43px] h-8 w-0.5 origin-bottom rounded-[1px]"
          style={{ transform: `rotate(${minuteDeg}deg)` }}
        />
        <span
          className="bg-accent absolute top-[9px] left-[43.5px] h-10 w-px origin-[0.5px_35px]"
          style={{ transform: `rotate(${secondDeg}deg)` }}
        />
        <span className="bg-accent absolute top-[41px] left-[41px] size-1.5 rounded-full" />
      </div>

      <div className="flex min-w-0 flex-col">
        <span className="text-muted text-[11px] font-semibold tracking-widest uppercase">
          {site.city}
        </span>
        <span className="text-[34px] leading-[1.1] font-extrabold tracking-tight tabular-nums">
          {time.hm}
        </span>
        <span className="text-muted text-[13px]">{time.longDate}</span>
      </div>
    </GlassCard>
  );
}
