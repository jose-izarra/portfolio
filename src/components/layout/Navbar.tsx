import { navLinks, site } from "@/data/site";
import useMadridTime from "@/hooks/useMadridTime";
import ThemeToggle from "./ThemeToggle";

function MenuBarClock() {
  const time = useMadridTime();

  return (
    <span className="hidden whitespace-nowrap tabular-nums sm:inline">
      {time.shortDate}&nbsp;&nbsp;{time.hm}
    </span>
  );
}

/** Menu-bar style header, sticky on every page. */
export default function Navbar() {
  return (
    <header className="glass bg-bar sticky top-0 z-50 border-b text-[13px]">
      <div className="flex min-h-11 items-center justify-between gap-4 px-4">
        <a href="/#home" className="flex min-w-0 items-center gap-4">
          <span className="font-extrabold tracking-tight">{site.initials}</span>
          <span className="font-semibold whitespace-nowrap">{site.name}</span>
          <span className="text-muted hidden whitespace-nowrap lg:inline">{site.role}</span>
        </a>

        <div className="flex items-center gap-x-[18px]">
          <nav aria-label="Sections" className="hidden gap-4 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`/#${link.id}`}
                className="text-muted hover:text-foreground py-3 transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <MenuBarClock />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
