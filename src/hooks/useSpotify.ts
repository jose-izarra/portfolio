import { useEffect, useState } from "react";

export interface SpotifyTrack {
  name: string;
  artist: string;
  album: string;
  albumArt?: string;
  url: string;
  isPlaying: boolean;
  progressMs: number;
  durationMs: number;
}

interface SpotifyResponse {
  isPlaying: boolean;
  track: SpotifyTrack | null;
}

export interface SpotifyState {
  status: "loading" | "ready" | "error";
  isPlaying: boolean;
  track: SpotifyTrack | null;
  /** When `track.progressMs` was read, to interpolate progress between polls. */
  fetchedAt: number;
}

const POLL_INTERVAL_MS = 10_000;

/** Polls `/api/spotify` for the currently-playing track. */
export default function useSpotify(): SpotifyState {
  const [state, setState] = useState<SpotifyState>({
    status: "loading",
    isPlaying: false,
    track: null,
    fetchedAt: 0,
  });

  useEffect(() => {
    const controller = new AbortController();

    const load = async () => {
      try {
        const response = await fetch("/api/spotify", { signal: controller.signal });
        if (!response.ok) throw new Error(`Spotify request failed: ${response.status}`);
        const data = (await response.json()) as SpotifyResponse;
        setState({
          status: "ready",
          isPlaying: data.isPlaying,
          track: data.track,
          fetchedAt: Date.now(),
        });
      } catch (error) {
        if (controller.signal.aborted) return;
        console.error("Spotify fetch error:", error);
        setState((previous) => ({ ...previous, status: "error", isPlaying: false }));
      }
    };

    load();
    const interval = window.setInterval(load, POLL_INTERVAL_MS);

    return () => {
      controller.abort();
      window.clearInterval(interval);
    };
  }, []);

  return state;
}
