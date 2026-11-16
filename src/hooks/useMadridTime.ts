import { site } from "@/data/site";
import { getZonedTime } from "@/lib/time";
import useNow from "./useNow";

/** Live wall-clock time in the site owner's time zone. */
export default function useMadridTime() {
  return getZonedTime(useNow(), site.timeZone);
}
