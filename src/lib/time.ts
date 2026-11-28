export interface ZonedTime {
  hours: number;
  minutes: number;
  seconds: number;
  /** "14:05" */
  hm: string;
  /** "Mon 16 Nov" */
  shortDate: string;
  /** "Monday 16 Nov" */
  longDate: string;
  /** Calendar date in the zone, as a UTC midnight timestamp. */
  dayStart: number;
}

const formatters = new Map<string, Intl.DateTimeFormat>();

function formatter(timeZone: string, key: string, options: Intl.DateTimeFormatOptions) {
  const id = `${timeZone}:${key}`;
  let fmt = formatters.get(id);
  if (!fmt) {
    fmt = new Intl.DateTimeFormat("en-GB", { timeZone, ...options });
    formatters.set(id, fmt);
  }
  return fmt;
}

/** Break a timestamp into wall-clock parts for the given IANA time zone. */
export function getZonedTime(timestamp: number, timeZone: string): ZonedTime {
  const parts: Partial<Record<Intl.DateTimeFormatPartTypes, string>> = {};
  for (const part of formatter(timeZone, "parts", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  }).formatToParts(timestamp)) {
    parts[part.type] = part.value;
  }

  const monthIndex = Number(formatter(timeZone, "month", { month: "numeric" }).format(timestamp));
  const weekdayLong = formatter(timeZone, "weekday", { weekday: "long" }).format(timestamp);

  return {
    hours: Number(parts.hour) % 24,
    minutes: Number(parts.minute),
    seconds: Number(parts.second),
    hm: `${parts.hour}:${parts.minute}`,
    shortDate: `${parts.weekday} ${parts.day} ${parts.month}`,
    longDate: `${weekdayLong} ${parts.day} ${parts.month}`,
    dayStart: Date.UTC(Number(parts.year), monthIndex - 1, Number(parts.day)),
  };
}
