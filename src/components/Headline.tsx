import { HeadlineLevel } from "@/lib/types";
import { cn, tw } from "@/lib/utils";
import { ReactNode, Ref, createElement } from "react";

export interface Props {
  children?: ReactNode;
  className?: string;
  ref?: Ref<HTMLHeadingElement>;
  level: HeadlineLevel;
}

function getSize(level: HeadlineLevel) {
  switch (level) {
    case 1:
      return tw("text-primary-400 shadow-headline font-lora text-4xl");

    case 2:
      return tw("text-light/65 font-lora");

    case 3:
      return tw("text-primary-500 font-lora text-xl font-bold");
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

export default function Headline({ children, className, ref, level }: Readonly<Props>) {
  const tag = getHeadingTag(level);

  return createElement(
    tag,
    {
      className: cn(getSize(level), className),
      ref,
    },
    children,
  );
}
