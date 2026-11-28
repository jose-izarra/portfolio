import { useSyncExternalStore } from "react";

// One shared 1s ticker for every clock on the page
let now = Date.now();
let timer: number | undefined;
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  if (timer === undefined) {
    now = Date.now();
    timer = window.setInterval(() => {
      now = Date.now();
      listeners.forEach((notify) => notify());
    }, 1000);
  }

  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) {
      window.clearInterval(timer);
      timer = undefined;
    }
  };
}

const getSnapshot = () => now;

/** Current timestamp, updated once a second. */
export default function useNow() {
  return useSyncExternalStore(subscribe, getSnapshot);
}
