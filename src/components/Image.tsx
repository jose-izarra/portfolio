import type { ComponentProps } from "react";
import { preload } from "react-dom";

// Must match `images.sizes` in vercel.json (same defaults as next/image)
const SIZES = [16, 32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840];
const QUALITY = 75;

interface Props extends Omit<ComponentProps<"img">, "src" | "width" | "height" | "loading"> {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Above-the-fold image: preload it and load it eagerly with high priority. */
  priority?: boolean;
  /** Serve the source file as-is, skipping the image optimizer. */
  unoptimized?: boolean;
}

function optimizedUrl(src: string, width: number) {
  const w = SIZES.find((size) => size >= width) ?? SIZES[SIZES.length - 1];
  return `/_vercel/image?url=${encodeURIComponent(src)}&w=${w}&q=${QUALITY}`;
}

/**
 * Drop-in replacement for next/image backed by Vercel's Image Optimization API.
 * Outside Vercel builds (local dev/preview) images are served unoptimized.
 */
export default function Image({
  src,
  alt,
  width,
  height,
  priority = false,
  unoptimized = false,
  style,
  ...rest
}: Props) {
  // Like next/image, SVGs and GIFs are passed through untouched
  const optimize = __VERCEL_IMAGE_OPTIMIZATION__ && !unoptimized && !/\.(svg|gif)$/i.test(src);

  const srcSet = optimize
    ? `${optimizedUrl(src, width)} 1x, ${optimizedUrl(src, width * 2)} 2x`
    : undefined;
  const finalSrc = optimize ? optimizedUrl(src, width * 2) : src;

  if (priority) {
    preload(finalSrc, { as: "image", imageSrcSet: srcSet, fetchPriority: "high" });
  }

  return (
    <img
      {...rest}
      src={finalSrc}
      alt={alt}
      srcSet={srcSet}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
      style={{ color: "transparent", ...style }}
    />
  );
}
