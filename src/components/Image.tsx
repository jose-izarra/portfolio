import type { ComponentProps } from "react";
import { preload } from "react-dom";

interface Props extends Omit<ComponentProps<"img">, "src" | "width" | "height" | "loading"> {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Above-the-fold image: preload it and load it eagerly with high priority. */
  priority?: boolean;
}

/**
 * `<img>` with sensible defaults: required dimensions to avoid layout
 * shift, lazy loading, async decoding, and `priority` for the LCP image.
 */
export default function Image({ src, alt, width, height, priority = false, ...rest }: Props) {
  if (priority) {
    preload(src, { as: "image", fetchPriority: "high" });
  }

  return (
    <img
      {...rest}
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
    />
  );
}
