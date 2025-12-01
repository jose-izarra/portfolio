"use client";
import { Skill } from "@/lib/types";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface Props {
  skill: Skill;
}

export default function SkillIcon({ skill }: Props) {
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    const container = containerRef.current;

    if (!img || !container) return;

    const onMouseDown = (e: MouseEvent) => {
      e.preventDefault();
      const startX = e.clientX;
      const startY = e.clientY;
      const startLeft = img.offsetLeft;
      const startTop = img.offsetTop;

      img.style.cursor = "grabbing";

      const onMouseMove = (moveEvent: MouseEvent) => {
        const nextX = moveEvent.clientX - startX + startLeft;
        const nextY = moveEvent.clientY - startY + startTop;

        img.style.left = `${nextX}px`;
        img.style.top = `${nextY}px`;
        img.style.transition = "none";
      };

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener(
        "mouseup",
        () => {
          document.removeEventListener("mousemove", onMouseMove);
          img.style.cursor = "grab";

          const containerHeight = container.clientHeight;
          const containerWidth = container.clientWidth;
          const imgHeight = img.clientHeight;
          const imgWidth = img.clientWidth;
          const floorPosition = containerHeight - imgHeight;
          const rightPosition = containerWidth - imgWidth;

          img.style.top = `${floorPosition}px`;
          img.style.left = `${rightPosition}px`;
          img.style.transition = "top 1s ease-out, left 1s ease-out";
        },
        { once: true },
      );
    };

    img.addEventListener("mousedown", onMouseDown);

    return () => {
      img.removeEventListener("mousedown", onMouseDown);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative z-10 h-[60px] w-[60px] shrink-0 cursor-grab select-none sm:h-[70px] sm:w-[70px]"
      title={skill.name}
    >
      <Image
        ref={imgRef}
        src={skill.path}
        width={60}
        height={60}
        className="absolute top-0 left-0 h-full w-full object-contain select-none"
        alt={skill.name}
        draggable={false}
      />
    </div>
  );
}
