import { cn } from "@/lib/utils";
import type { ComponentProps, ElementType } from "react";

type Props<T extends ElementType> = {
  as?: T;
  /** Rise slightly on hover. */
  lift?: boolean;
} & Omit<ComponentProps<T>, "as">;

/** Frosted translucent surface: the base of every card on the site. */
export default function GlassCard<T extends ElementType = "div">({
  as,
  lift = false,
  className,
  ...rest
}: Props<T>) {
  const Tag: ElementType = as ?? "div";

  return (
    <Tag
      className={cn(
        "glass bg-card shadow-glass rounded-3xl",
        lift &&
          "ease-smooth transition-transform duration-300 will-change-transform hover:-translate-y-1",
        className,
      )}
      {...rest}
    />
  );
}
