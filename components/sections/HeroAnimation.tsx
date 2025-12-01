"use client";
import MovingContainer from "@/components/MovingContainer";
import { backgroundPics } from "@/data/background-pics";
import { BackgroundPic } from "@/lib/types";
import { shuffle } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function HeroAnimation({}) {
  const [leftValues, setLeftValues] = useState<number[]>([]);
  const [speeds, setSpeeds] = useState<number[]>([]);
  const [picsShuffled, setPicsShuffled] = useState<BackgroundPic[]>([]);

  useEffect(() => {
    const newLeftValues = [
      Math.floor(Math.random() * 4) + 2,
      Math.floor(Math.random() * 4) + 26,
      Math.floor(Math.random() * 6) + 49,
      Math.floor(Math.random() * 4) + 78,
    ];

    const newSpeeds = shuffle([20, 24, 28, 32]);
    const newPicsShuffled = shuffle([...backgroundPics]);

    setTimeout(() => {
      setLeftValues(newLeftValues);
      setSpeeds(newSpeeds);
      setPicsShuffled(newPicsShuffled);
    }, 0);
  }, []);

  if (leftValues.length === 0 || speeds.length === 0 || picsShuffled.length === 0) {
    return null;
  }
  return (
    <>
      {[0, 1, 2, 3].map((col) => (
        <MovingContainer
          col={col}
          left={leftValues[col]}
          pics={picsShuffled}
          speeds={speeds}
          key={`MovingContainer-${col}`}
        />
      ))}
    </>
  );
}
