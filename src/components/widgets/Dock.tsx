import { GitHubIcon, LinkedInIcon } from "@/components/icons/BrandIcons";
import { site } from "@/data/site";
import { cn, isExternal, tw } from "@/lib/utils";
import { CodeXml, FileText, Mail } from "lucide-react";
import type { ReactNode } from "react";

interface DockItem {
  label: string;
  href: string;
  className: string;
  icon: ReactNode;
}

const NEUTRAL_TILE = tw("bg-card border");

const items: DockItem[] = [
  {
    label: "Email",
    href: `mailto:${site.email}`,
    className: tw("bg-brand-mail text-white"),
    icon: <Mail className="size-6" strokeWidth={1.8} aria-hidden="true" />,
  },
  {
    label: "GitHub",
    href: site.socials.github.url,
    className: tw("bg-brand-github text-white dark:ring-1 dark:ring-white/15"),
    icon: <GitHubIcon className="size-[26px]" />,
  },
  {
    label: "LinkedIn",
    href: site.socials.linkedin.url,
    className: tw("bg-brand-linkedin text-white"),
    icon: <LinkedInIcon className="size-[22px]" />,
  },
  {
    label: "Résumé",
    href: site.cvPath,
    className: tw("bg-accent text-on-accent"),
    icon: <FileText className="size-6" strokeWidth={1.8} aria-hidden="true" />,
  },
  {
    label: "Projects",
    href: "#projects",
    className: cn(NEUTRAL_TILE, "text-accent"),
    icon: <CodeXml className="size-6" strokeWidth={1.8} aria-hidden="true" />,
  },
];

const TILE = tw(
  "ease-smooth flex size-12 items-center justify-center rounded-[13px] transition-transform duration-200 hover:-translate-y-1.5 hover:scale-108",
);

/** macOS-style dock of quick links under the hero. */
export default function Dock() {
  return (
    <nav
      aria-label="Links"
      className="glass bg-bar shadow-glass flex items-center gap-1.5 rounded-[22px] border p-2 sm:gap-2.5 sm:p-2.5"
    >
      <a
        href="#about"
        aria-label="About me"
        title="About me"
        className={cn(TILE, NEUTRAL_TILE, "text-[17px] font-extrabold tracking-tight")}
      >
        {site.initials}
      </a>
      <span aria-hidden="true" className="bg-border h-8 w-px" />
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          aria-label={item.label}
          title={item.label}
          className={cn(TILE, item.className)}
          {...(isExternal(item.href) && { target: "_blank", rel: "noopener noreferrer" })}
        >
          {item.icon}
        </a>
      ))}
    </nav>
  );
}
