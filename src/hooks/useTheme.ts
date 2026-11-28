import { useCallback, useSyncExternalStore } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";
const listeners = new Set<() => void>();

// The <html data-theme> attribute (set pre-paint in index.html) is the source of truth
function getTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  listeners.forEach((listener) => listener());
}

function hasSavedTheme() {
  try {
    return localStorage.getItem(STORAGE_KEY) !== null;
  } catch {
    return false;
  }
}

function subscribe(listener: () => void) {
  listeners.add(listener);

  // Follow the OS setting until the visitor picks a theme themselves
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const onSystemChange = (event: MediaQueryListEvent) => {
    if (!hasSavedTheme()) applyTheme(event.matches ? "dark" : "light");
  };
  media.addEventListener("change", onSystemChange);

  return () => {
    listeners.delete(listener);
    media.removeEventListener("change", onSystemChange);
  };
}

export default function useTheme() {
  const theme = useSyncExternalStore(subscribe, getTheme);

  const toggleTheme = useCallback(() => {
    const next: Theme = getTheme() === "dark" ? "light" : "dark";
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // storage unavailable (private mode): the choice lasts for this visit only
    }
    applyTheme(next);
  }, []);

  return { theme, toggleTheme };
}
