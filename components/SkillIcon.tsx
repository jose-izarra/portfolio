"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface Skill {
  name: string;
  path: string;
  link: string;
}

export default function SkillIcon({ skill }: { skill: Skill }) {
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
        { once: true }
      );
    };

    img.addEventListener("mousedown", onMouseDown);

    return () => {
      img.removeEventListener("mousedown", onMouseDown);
    };
  }, []);

  return (
    <div ref={containerRef} className="">
      <Image
        ref={imgRef}
        src={skill.path}
        width={60}
        height={60}
        className=""
        alt={skill.name}
      />
    </div>
  );
}
