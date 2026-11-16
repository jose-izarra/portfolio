import ClockCard from "@/components/widgets/ClockCard";
import ContributionsCard from "@/components/widgets/ContributionsCard";
import Dock from "@/components/widgets/Dock";
import PhotoCard from "@/components/widgets/PhotoCard";
import SpotifyCard from "@/components/widgets/SpotifyCard";
import TodoCard from "@/components/widgets/TodoCard";
import { hero, heroPhoto, site, todos } from "@/data/site";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import type { ReactNode } from "react";

/** Blurred color blob that the glass cards refract. */
function Blob({ className }: { className: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "animate-drift pointer-events-none absolute rounded-full opacity-(--blob-opacity) blur-[80px]",
        className,
      )}
    />
  );
}

/** Page-load entrance: each hero column rises in, slightly staggered. */
function Enter({
  children,
  className,
  delay,
}: {
  children: ReactNode;
  className?: string;
  delay: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Intro"
      className="bg-dots relative flex flex-col overflow-hidden border-b lg:min-h-[820px]"
    >
      <Blob className="bg-accent top-[18%] left-[4%] size-[360px]" />
      <Blob className="bg-accent-alt top-[8%] right-[6%] size-80 [animation-delay:-6s]" />
      <Blob className="bg-accent -bottom-16 left-[42%] h-56 w-[300px] [animation-delay:-12s]" />

      <div className="relative mx-auto grid w-full max-w-[1240px] flex-1 items-center gap-x-10 gap-y-8 px-6 pt-10 pb-6 md:grid-cols-2 lg:grid-cols-[310px_minmax(0,1fr)_260px]">
        <Enter delay={0.15} className="order-2 flex min-w-0 flex-col gap-4 lg:order-1">
          <ClockCard />
          <SpotifyCard />
          <ContributionsCard />
        </Enter>

        <Enter
          delay={0}
          className="order-1 flex min-w-0 flex-col items-center gap-[22px] py-6 text-center md:col-span-2 lg:order-2 lg:col-span-1"
        >
          <span className="glass bg-card shadow-glass text-muted inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[13px]">
            <span className="bg-accent size-[7px] rounded-full" />
            {site.status}
          </span>
          <h1 className="text-[clamp(2.5rem,6vw,3.75rem)] leading-[1.05] font-extrabold tracking-[-0.035em] text-balance">
            {hero.greeting}
            <br />
            {hero.headline.before}
            <span className="decoration-accent underline decoration-[5px] underline-offset-[10px]">
              {hero.headline.highlight}
            </span>
            {hero.headline.after}
          </h1>
          <p className="text-muted max-w-[500px] text-lg text-pretty">{hero.intro}</p>
        </Enter>

        <Enter delay={0.25} className="order-3 flex min-w-0 flex-col gap-4">
          <PhotoCard photo={heroPhoto} />
          <TodoCard items={todos} />
        </Enter>
      </div>

      <Enter delay={0.35} className="relative flex justify-center px-4 pt-2 pb-10">
        <Dock />
      </Enter>
    </section>
  );
}
