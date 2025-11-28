import { BackgroundPic } from "@/lib/types";
import Image from "next/image";
import { useEffect } from "react";

interface Props {
  pic: BackgroundPic;
  row: number;
  col: number;
}

export function MovingPicture({
  pic,
  row,
  col,
}: Props) {
  useEffect(() => {
    const el = document.getElementById(`moving-pic-${col}-${row}`);
    const intervalId = setInterval(() => {
      const rect = el!.getBoundingClientRect();

      if (rect.bottom > 0) {
        el!.style.opacity = "0.8";
      }

      if (rect.top > window.innerHeight) {
        el!.style.opacity = "0";
      }
    }, 300);

    return () => clearInterval(intervalId);
  }, [col, row]);

  return (
      <Image
        id={`moving-pic-${col}-${row}`}
        src={pic}
        width={150}
        height={150}
        style={{ opacity: 0, width: "auto" }}
        className={`transition-transform duration-500 hover:scale-105 my-10`}
        alt={`Moving Picture ${row} ${col}`}
        // largest contentful
        priority={pic === "/images/fut.jpg" ? true : false}
      />
  );
}
