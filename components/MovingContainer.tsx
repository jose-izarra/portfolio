"use client";
import { BackgroundPic } from "@/lib/types";
import { motion } from "framer-motion";
import { MovingPicture } from "./MovingPicture";


interface Props {
  col: number;
  left: number;
  pics: BackgroundPic[];
  speeds: number[];
}

export default function MovingContainer({
  col,
  left,
  pics,
  speeds,
}: Props) {
  const picsToShow = pics.slice(col * 5, col * 5 + 5);

  return (
    <motion.div
      className="absolute top-0 w-1/6 h-[50vh]"
      initial={{ y: col % 2 === 0 ? "-250vh" : "120vh" }}
      animate={{ y: col % 2 === 0 ? "150vh" : "-300vh" }}
      transition={{
        repeat: Infinity,
        duration: speeds[col],
        ease: "linear",
        repeatType: "reverse",
      }}
      style={{ left: `${left}%` }}
      data-testid={`MovingContainer-${col}`}
    >
      {picsToShow.map((pic, row: number) => {
        return (
          <MovingPicture
            pic={pic}
            row={row}
            col={col}
            key={`MovingPicture-${col}-${row}`}
          />
        );
      })}
    </motion.div>
  );
}
