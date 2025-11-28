"use client";
import useScreenSize from "@/hooks/useScreenSize";
import { cn } from "@/lib/utils";
import { XIcon } from "lucide-react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Headline from "./Headline";

interface Stats {
  commits: number;
  recent: { name: string; url: string; isPrivate: boolean };
}

const baseClasses =
  "backdrop-blur-xl bg-gradient-to-br from-primary-500/30 to-primary-600/20 border border-light/30 shadow-card rounded-2xl flex flex-col p-3 overflow-visible md:w-[350px] h-[300px]";

const threshold = 1050;

export default function StatsCard() {
  const screenSize = useScreenSize();
  const isDesktop = screenSize === "Desktop";
  const [stats, setStats] = useState<Stats>({
    commits: 0,
    recent: { name: "", url: "", isPrivate: false },
  });
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const [dragConstraints, setDragConstraints] = useState({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  });

  useEffect(() => {
    const updateConstraints = () => {
      setDragConstraints({
        left: -window.innerWidth + 350,
        right: 0,
        top: 0,
        bottom: window.innerHeight - 300,
      });
    };

    updateConstraints();
    window.addEventListener("resize", updateConstraints);
    return () => window.removeEventListener("resize", updateConstraints);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest < threshold) {
      setIsHidden(false);
    }

    if (isHidden) return;

    if (latest > threshold && !isSticky) {
      setIsSticky(true);
    } else if (latest <= threshold && isSticky) {
      setIsSticky(false);
    }
  });

  useEffect(() => {
    fetch("/api/github")
      .then((res) => res.json())
      .then((data) => {
        setStats((prevStats) => ({
          ...prevStats,
          commits: data.commits,
          recent: data.recent,
        }));
        setIsLoading(false);
      })
      .catch((err) => console.log("err", err));
  }, []);

  const handleClick = () => {
    if (stats.recent.isPrivate) {
      setVisible(true);
      setTimeout(() => setVisible(false), 3000);
    } else {
      router.push(stats.recent.url);
    }
  };

  return (
    <div className="relative flex min-h-72 flex-col items-center gap-y-6">
      <motion.div
        layout
        drag={isSticky && isDesktop}
        dragConstraints={dragConstraints}
        dragMomentum={false}
        dragElastic={0.2}
        whileDrag={{ cursor: "grabbing", scale: 0.65 }}
        className={cn(
          baseClasses,
          isSticky && isDesktop
            ? "fixed -top-6 -right-6 z-110 origin-top-right cursor-grab"
            : "relative cursor-default",
        )}
        animate={{
          scale: isSticky && isDesktop ? 0.6 : 1,
          x: isSticky ? 0 : undefined,
          y: isSticky ? 0 : undefined,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 50,
        }}
      >
        {isSticky && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute -top-3 -right-3 z-50 cursor-pointer rounded-full border border-white/10 bg-neutral-800/50 p-1 backdrop-blur-sm hover:bg-neutral-800/70"
            onClick={(e) => {
              e.stopPropagation();
              setIsSticky(false);
              setIsHidden(true);
            }}
          >
            <XIcon className="h-5 w-5 text-white/80" />
          </motion.div>
        )}
        <div className="grid shrink-0 grid-cols-3 items-center gap-x-3 px-5 pt-3">
          <div className="">
            <a target="_blank" href="https://github.com/jose-izarra">
              <Image
                src="https://github.com/jose-izarra.png"
                className="rounded-full"
                width={56}
                height={56}
                alt="Jose Izarra"
              />
            </a>
          </div>

          <div className="col-span-2 flex w-full items-center gap-x-4">
            <Headline level={3} className="text-light/65 shrink-0 text-2xl font-semibold">
              jose-izarra
            </Headline>
            <p className="text-2xl">🎯</p>
          </div>
        </div>
        <div className="flex h-full flex-col justify-center gap-y-3 px-4">
          <div className="flex justify-between">
            <p className="text-light/65 text-base font-semibold">Commits (past year):</p>
            <p className="text-base font-bold">{isLoading ? "-" : stats.commits}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-light/65 text-base font-semibold">Most Used Language:</p>
            <p className="text-base">{isLoading ? "-" : "TypeScript"}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-light/65 text-base font-semibold">Most Recent Commit:</p>
            <p onClick={handleClick} className="cursor-pointer text-base">
              {isLoading ? "-" : stats.recent.name}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-light/65 text-base font-semibold">Code Editor:</p>
            <p className="text-base">{isLoading ? "-" : "Cursor"}</p>
          </div>
          {stats.recent.isPrivate && visible && (
            <span className="shadown-md absolute -top-12 right-0 rounded-2xl border bg-neutral-200 px-2 py-1">
              <p className="text-xs text-nowrap text-neutral-600">This repo is private</p>
            </span>
          )}
        </div>
        <p className="text-light/65 text-center text-sm">My unofficial business card</p>
      </motion.div>
    </div>
  );
}
