import { cn } from "@/lib/utils";
import Image from "./Image";
import Placeholder from "./Placeholder";

interface Props {
  /** Image or `.mp4` path. `null` renders a placeholder. */
  src: string | null;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

/** An image, a GIF-style looping video (any `.mp4`), or a placeholder when there's no source. */
export default function Media({ src, alt, width, height, className }: Props) {
  if (!src) {
    return <Placeholder label={alt} className={className} />;
  }

  if (src.endsWith(".mp4")) {
    return (
      <video
        src={src}
        width={width}
        height={height}
        className={cn("object-cover", className)}
        aria-label={alt}
        autoPlay
        muted
        loop
        playsInline
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn("object-cover", className)}
    />
  );
}
