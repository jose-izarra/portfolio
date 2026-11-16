import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Identity helper: lets Prettier sort Tailwind classes stored in variables. */
export function tw(input: string) {
  return input;
}

/** `95_000` → `"1:35"` */
export function formatDuration(ms: number) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

export function isExternal(href: string) {
  return /^https?:\/\//.test(href);
}
