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
  "backdrop-blur-xl bg-gradient-to-br from-primary-500/30 to-primary-600/10 border border-white/10 shadow-card rounded-2xl flex flex-col p-3 overflow-visible md:w-[350px] h-[300px]";

const threshold = 1000;

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
        top: -window.innerHeight + 300,
        bottom: 0,
      });
    };

    updateConstraints();
    window.addEventListener("resize", updateConstraints);
    return () => window.removeEventListener("resize", updateConstraints);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
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
    <div className="relative flex flex-col items-center gap-y-6 min-h-72">
      <motion.div
        layout
        drag={isSticky && isDesktop}
        dragConstraints={dragConstraints}
        dragElastic={0.2}
        whileDrag={{ cursor: "grabbing", scale: 0.65 }}
        className={cn(
          baseClasses,
          isSticky && isDesktop
            ? "fixed -bottom-4 -right-4 z-110 origin-bottom-right cursor-grab"
            : "relative cursor-default"
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
            className="absolute -top-3 -right-3 z-50 p-1 bg-neutral-800/50 hover:bg-neutral-800/70 rounded-full backdrop-blur-sm border border-white/10 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setIsSticky(false);
            }}
          >
            <XIcon className="w-4 h-4 text-white/80" />
          </motion.div>
        )}
        <div className="grid grid-cols-3 gap-x-3 items-center px-5 pt-3 shrink-0 ">
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

          <div className="flex gap-x-4 items-center col-span-2 w-full">
            <Headline
              level={3}
              className="text-2xl font-semibold shrink-0 text-light/65"
            >
                jose-izarra
            </Headline>
            <p className="text-2xl">🎯</p>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-y-3 px-4 h-full">
          <div className="flex justify-between">
            <p className=" text-primary-500 font-semibold text-base">
              Commits (past year):
            </p>
            <p className="text-base font-bold">{stats.commits}</p>
          </div>
          <div className="flex justify-between">
            <p className=" text-primary-500 font-semibold text-base">
              Most Used Language:
            </p>
            <p className="text-base">TypeScript</p>
          </div>
          <div className="flex justify-between">
            <p className=" text-primary-500 font-semibold text-base">
              Most Recent Commit:
            </p>
            <p onClick={handleClick} className="text-base cursor-pointer">
              {stats.recent.name}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-primary-500 font-semibold text-base">
              Code Editor:
            </p>
            <p className="text-base">Cursor</p>
          </div>
          {stats.recent.isPrivate && visible && (
            <span className="bg-neutral-200 border shadown-md absolute -top-12 right-0 py-1 px-2 rounded-2xl">
              <p className=" text-neutral-600 text-nowrap text-xs">
                This repo is private
              </p>
            </span>
          )}
        </div>
        <p className="text-sm text-light/65 text-center">My unofficial business card</p>
      </motion.div>
    </div>
  );
}
