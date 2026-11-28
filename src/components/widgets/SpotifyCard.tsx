import { SpotifyIcon } from "@/components/icons/BrandIcons";
import GlassCard from "@/components/ui/GlassCard";
import Image from "@/components/ui/Image";
import useNow from "@/hooks/useNow";
import useSpotify from "@/hooks/useSpotify";
import { formatDuration } from "@/lib/utils";
import { Music } from "lucide-react";

function Equalizer() {
  return (
    <span className="flex h-6 items-end gap-1" aria-hidden="true">
      {["0s", "-0.4s", "-0.7s", "-0.2s"].map((delay, i) => (
        <span
          key={delay}
          className="bg-on-accent animate-equalizer block h-6 w-[5px] origin-bottom rounded-sm"
          style={{ animationDelay: delay, animationDuration: `${[1, 0.8, 1.15, 0.9][i]}s` }}
        />
      ))}
    </span>
  );
}

/** Now-playing card fed by `/api/spotify`; shows an idle state when nothing is playing. */
export default function SpotifyCard() {
  const { status, isPlaying, track, fetchedAt } = useSpotify();
  const now = useNow();

  const playing = isPlaying && track !== null;
  // Advance the progress bar between polls
  const elapsedMs = track
    ? Math.min(track.durationMs, track.progressMs + (playing ? Math.max(0, now - fetchedAt) : 0))
    : 0;
  const percent = track ? (elapsedMs / track.durationMs) * 100 : 0;

  const label = status === "loading" ? "Spotify" : playing ? "Now playing" : "Not playing";
  const title = track?.name ?? (status === "loading" ? "Loading…" : "Nothing playing right now");
  const subtitle = track ? `${track.artist} — ${track.album}` : "Check back later";

  return (
    <GlassCard lift className="flex flex-col gap-3.5 p-4">
      <div className="flex items-center gap-3.5">
        <div className="bg-accent relative flex size-[68px] shrink-0 items-center justify-center overflow-hidden rounded-xl">
          {track?.albumArt ? (
            <Image
              src={track.albumArt}
              alt={`${track.album} cover`}
              width={68}
              height={68}
              className="size-full object-cover"
            />
          ) : (
            !playing && (
              <Music className="text-on-accent size-[26px]" strokeWidth={1.8} aria-hidden="true" />
            )
          )}
          {playing && (
            <span className="absolute inset-0 flex items-center justify-center bg-black/30">
              <Equalizer />
            </span>
          )}
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-px">
          <span className="text-muted flex items-center gap-1.5 text-[11px] font-semibold tracking-wider uppercase">
            <SpotifyIcon className="size-[13px]" />
            {label}
          </span>
          {track ? (
            <a
              href={track.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent truncate text-[17px] font-extrabold tracking-tight transition-colors duration-150"
            >
              {title}
            </a>
          ) : (
            <span className="truncate text-[17px] font-extrabold tracking-tight">{title}</span>
          )}
          <span className="text-muted truncate text-[13px]">{subtitle}</span>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <div className="bg-surface h-1 overflow-hidden rounded-sm">
          <div
            className="bg-foreground h-1 rounded-sm transition-[width] duration-1000 ease-linear"
            style={{ width: `${percent}%` }}
          />
        </div>
        <div className="text-muted flex justify-between font-mono text-[10px]">
          <span>{track ? formatDuration(elapsedMs) : "–:––"}</span>
          <span>{track ? `-${formatDuration(track.durationMs - elapsedMs)}` : "–:––"}</span>
        </div>
      </div>
    </GlassCard>
  );
}
