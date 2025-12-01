"use client";
import { PauseIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Headline from "./Headline";

interface SpotifyTrack {
  name: string;
  artist: string;
  album: string;
  albumArt: string;
  url: string;
  isPlaying: boolean;
  progressMs: number;
  durationMs: number;
}

interface SpotifyData {
  isPlaying: boolean;
  track: SpotifyTrack | null;
}

export default function SpotifyCard() {
  const [spotifyData, setSpotifyData] = useState<SpotifyData>({
    isPlaying: false,
    track: null,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchSpotifyData = async () => {
      try {
        const response = await fetch("/api/spotify");
        if (!response.ok) {
          throw new Error("Failed to fetch Spotify data");
        }
        const data = await response.json();
        setSpotifyData(data);
        setError(false);
      } catch (err) {
        console.error("Spotify fetch error:", err);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSpotifyData();

    // Refresh every 10 seconds
    const interval = setInterval(fetchSpotifyData, 10000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const getProgress = () => {
    if (!spotifyData.track) return 0;
    return (spotifyData.track.progressMs / spotifyData.track.durationMs) * 100;
  };

  if (error) {
    return null;
  }

  return (
    <div className="flex justify-center">
      <div className="from-primary-500/30 to-primary-500/20 border-light/30 shadow-card flex w-full max-w-md flex-col rounded-2xl border bg-linear-to-br p-4 backdrop-blur-xl">
        <div className="mb-3 flex items-center gap-3">
          <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          <Headline level={4} className="text-light/80 text-lg font-semibold">
            Now Playing on Spotify
          </Headline>
        </div>

        {isLoading ? (
          <div className="flex items-center gap-3 p-2">
            <div className="bg-light/10 h-16 w-16 animate-pulse rounded-lg" />
            <div className="flex-1">
              <div className="bg-light/10 mb-2 h-4 animate-pulse rounded" />
              <div className="bg-light/10 h-3 w-3/4 animate-pulse rounded" />
            </div>
          </div>
        ) : !spotifyData.isPlaying || !spotifyData.track ? (
          <div className="text-light/60 flex items-center gap-3 p-2">
            <div className="bg-light/5 flex h-16 w-16 items-center justify-center rounded-lg">
              <PauseIcon className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <p className="text-sm">Nothing playing right now</p>
              <p className="text-light/40 text-xs">Check back later!</p>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Image
                  src={spotifyData.track.albumArt}
                  alt={`${spotifyData.track.album} cover`}
                  width={64}
                  height={64}
                  className="rounded-lg"
                />
              </div>
              <div className="min-w-0 flex-1">
                <a
                  href={spotifyData.track.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-400 block transition-colors"
                >
                  <p className="truncate text-sm font-semibold">{spotifyData.track.name}</p>
                  <p className="text-light/70 truncate text-xs">{spotifyData.track.artist}</p>
                  <p className="text-light/50 truncate text-xs">{spotifyData.track.album}</p>
                </a>
              </div>
            </div>

            {/* Progress bar */}
            <div className="space-y-1">
              <div className="bg-light/10 h-1 w-full rounded-full">
                <div
                  className="bg-primary-500 h-1 rounded-full transition-all duration-1000"
                  style={{ width: `${getProgress()}%` }}
                />
              </div>
              <div className="text-light/60 flex justify-between text-xs">
                <span>{formatTime(spotifyData.track.progressMs)}</span>
                <span>{formatTime(spotifyData.track.durationMs)}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
