import { HeadlineLevel } from "@/lib/types";
import { cn, tw } from "@/lib/utils";
import { ReactNode, Ref } from "react";

export interface Props {
  children?: ReactNode;
  className?: string;
  ref?: Ref<HTMLHeadingElement>;
  level: HeadlineLevel;
}

function getSize(level: HeadlineLevel) {
  switch (level) {
    case 1:
      return tw("text-3xl lg:text-4xl");

    case 2:
      return tw("text-2xl lg:text-3xl");

    case 3:
      return tw("text-xl lg:text-2xl");

    case 4:
      return tw("text-lg lg:text-xl");

    case 5:
      return tw("text-lg");

    case 6:
      return tw("text-base");
  }
}

function getHeadingTag(level: HeadlineLevel) {
  switch (level) {
    case 1:
      return "h1";

    case 2:
      return "h2";

    case 3:
      return "h3";

    case 4:
      return "h4";

    case 5:
      return "h5";

    case 6:
    default:
      return "h6";
  }
}

export default function Headline({
  children,
  className,
  ref,
  level,
}: Readonly<Props>) {
  const Element = getHeadingTag(level);

  return (
    <Element
      className={cn(
        "font-semibold whitespace-pre-line",
        getSize(level),
        className
      )}
      ref={ref}
    >
      {children}
    </Element>
  );
}
