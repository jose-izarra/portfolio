import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface Props {
  /** Anchor id, used by the navbar links. */
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export function SectionHeading({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <h2 id={id} className="text-4xl leading-tight font-extrabold tracking-tight">
      {children}
    </h2>
  );
}

/** A titled page section that reveals on scroll. */
export default function Section({ id, title, children, className }: Props) {
  const headingId = `${id}-heading`;

  return (
    <section id={id} aria-labelledby={headingId}>
      <Reveal className={cn("flex flex-col gap-7", className)}>
        <SectionHeading id={headingId}>{title}</SectionHeading>
        {children}
      </Reveal>
    </section>
  );
}
