import useTheme from "@/hooks/useTheme";
import { Moon, Sun } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const Icon = isDark ? Sun : Moon;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="hover:text-accent -mr-3 flex size-11 items-center justify-center transition-colors duration-150"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 45, scale: 0.7 }}
          transition={{ duration: 0.15 }}
        >
          <Icon className="size-[17px]" strokeWidth={1.8} aria-hidden="true" />
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
