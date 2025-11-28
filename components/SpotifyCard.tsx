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
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
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
      <div className="backdrop-blur-xl bg-linear-to-br from-primary-500/30 to-primary-500/20 border border-light/30 shadow-card rounded-2xl flex flex-col p-4 w-full max-w-md">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <Headline level={4} className="text-light/80 text-lg font-semibold">
            Now Playing on Spotify
          </Headline>
        </div>

        {isLoading ? (
          <div className="flex items-center gap-3 p-2">
            <div className="w-16 h-16 bg-light/10 rounded-lg animate-pulse" />
            <div className="flex-1">
              <div className="h-4 bg-light/10 rounded mb-2 animate-pulse" />
              <div className="h-3 bg-light/10 rounded w-3/4 animate-pulse" />
            </div>
          </div>
        ) : !spotifyData.isPlaying || !spotifyData.track ? (
          <div className="flex items-center gap-3 p-2 text-light/60">
            <div className="w-16 h-16 bg-light/5 rounded-lg flex items-center justify-center">
              <PauseIcon className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <p className="text-sm">Nothing playing right now</p>
              <p className="text-xs text-light/40">Check back later!</p>
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
              <div className="flex-1 min-w-0">
                <a
                  href={spotifyData.track.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-primary-400 transition-colors"
                >
                  <p className="font-semibold text-sm truncate">
                    {spotifyData.track.name}
                  </p>
                  <p className="text-xs text-light/70 truncate">
                    {spotifyData.track.artist}
                  </p>
                  <p className="text-xs text-light/50 truncate">
                    {spotifyData.track.album}
                  </p>
                </a>
              </div>
            </div>

            {/* Progress bar */}
            <div className="space-y-1">
              <div className="w-full bg-light/10 rounded-full h-1">
                <div
                  className="bg-primary-500 h-1 rounded-full transition-all duration-1000"
                  style={{ width: `${getProgress()}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-light/60">
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
