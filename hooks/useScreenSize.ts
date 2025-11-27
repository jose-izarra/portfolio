import { SCREEN_SIZES } from "@/lib/types";
import { useWindowSize } from "usehooks-ts";

export default function useScreenSize(): "Mobile" | "Desktop" {
  const size = useWindowSize();

  if (!size.width) {
    return "Desktop";
  }

  const isDesktop = SCREEN_SIZES.LG <= size.width;

  return isDesktop ? "Desktop" : "Mobile";
}
