"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Headline from "./Headline";

interface Props {
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
}

interface Stats {
  commits: number;
  recent: { name: string; url: string; isPrivate: boolean };
}

export default function StatsCard({ sm, md, lg }: Props) {
  const [stats, setStats] = useState<Stats>({
    commits: 0,
    recent: { name: "", url: "", isPrivate: false },
  });
  const router = useRouter();
  const [visible, setVisible] = useState(false);

  const classname = cn(
    "w-[350px] rounded-lg border border-primary-500 flex flex-col p-3 relative",
    {
      "sm:w-[300px] h-[200px]": sm,
      "md:w-[350px] h-[300px]": md,
      "": lg,
    }
  );

  useEffect(() => {
    fetch("/api/github")
      .then((res) => res.json())
      .then((data) => {
        setStats({
          ...stats,
          commits: data.commits,
          recent: data.recent,
        });
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
    <div className={classname}>
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
          <Headline level={3} className="text-2xl font-semibold shrink-0 text-light/65">
            <a target="_blank" href="https://github.com/jose-izarra">
              jose-izarra
            </a>
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
    </div>
  );
}
