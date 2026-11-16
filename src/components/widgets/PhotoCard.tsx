import GlassCard from "@/components/ui/GlassCard";
import Media from "@/components/ui/Media";
import type { Photo } from "@/lib/types";

/** Polaroid-style photo with a caption. */
export default function PhotoCard({ photo }: { photo: Photo }) {
  return (
    <GlassCard as="figure" lift className="flex flex-col gap-2.5 rounded-[26px] p-2.5 pb-3.5">
      <Media
        src={photo.src}
        alt={photo.src ? photo.alt : "Photo"}
        width={240}
        height={240}
        className="aspect-square w-full rounded-[18px]"
      />
      <figcaption className="flex items-center justify-between gap-2 px-1.5 text-[13px]">
        <span className="font-semibold">{photo.title}</span>
        <span className="text-muted">{photo.caption}</span>
      </figcaption>
    </GlassCard>
  );
}
