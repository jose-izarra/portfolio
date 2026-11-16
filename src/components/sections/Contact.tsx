import { GitHubIcon, LinkedInIcon } from "@/components/icons/BrandIcons";
import Reveal from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/Section";
import { contact, site } from "@/data/site";
import useMadridTime from "@/hooks/useMadridTime";
import { cn, isExternal, tw } from "@/lib/utils";
import { Check, Copy, FileText } from "lucide-react";
import { type ReactNode, useEffect, useRef, useState } from "react";

interface ContactLink {
  label: string;
  detail: string;
  href: string;
  tileClassName: string;
  icon: ReactNode;
}

const links: ContactLink[] = [
  {
    label: "GitHub",
    detail: site.socials.github.handle,
    href: site.socials.github.url,
    tileClassName: tw("bg-brand-github text-white dark:ring-1 dark:ring-white/15"),
    icon: <GitHubIcon className="size-[22px]" />,
  },
  {
    label: "LinkedIn",
    detail: site.socials.linkedin.handle,
    href: site.socials.linkedin.url,
    tileClassName: tw("bg-brand-linkedin text-white"),
    icon: <LinkedInIcon className="size-[19px]" />,
  },
  {
    label: "Résumé",
    detail: "PDF",
    href: site.cvPath,
    tileClassName: tw("bg-accent-soft text-accent"),
    icon: <FileText className="size-5" strokeWidth={1.8} aria-hidden="true" />,
  },
];

const BUTTON = tw(
  "inline-flex h-12 items-center gap-2.5 rounded-full px-5 text-[15px] transition duration-150 hover:-translate-y-px active:translate-y-0",
);

function CopyEmailButton() {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(resetTimer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
    } catch {
      return; // clipboard blocked: the address is still readable on the button
    }
    setCopied(true);
    window.clearTimeout(resetTimer.current);
    resetTimer.current = window.setTimeout(() => setCopied(false), 1800);
  };

  const Icon = copied ? Check : Copy;

  return (
    <button
      type="button"
      onClick={copy}
      className={cn(BUTTON, "bg-accent text-on-accent font-extrabold hover:brightness-105")}
    >
      <Icon className="size-[17px]" strokeWidth={2.2} aria-hidden="true" />
      <span aria-live="polite">{copied ? "Copied!" : site.email}</span>
    </button>
  );
}

function LocalTime() {
  const time = useMadridTime();

  return (
    <div className="text-muted flex items-center gap-3 px-6">
      <span className="bg-accent size-2 rounded-full" />
      <span className="text-[15px]">
        It&apos;s <strong className="tabular-nums">{time.hm}</strong> here in {site.city}.
      </span>
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading">
      <Reveal className="flex flex-wrap gap-[18px]">
        <div className="flex min-w-0 flex-[3_1_420px] flex-col gap-5">
          <SectionHeading id="contact-heading">Contact</SectionHeading>
          <p className="max-w-[540px] text-[26px] leading-[1.3] font-semibold tracking-tight text-pretty">
            {contact.lead} <span className="text-muted">{contact.leadMuted}</span>
          </p>
          <p className="text-muted max-w-[460px] text-pretty">{contact.body}</p>
          <div className="mt-1 flex flex-wrap items-center gap-2.5">
            <CopyEmailButton />
            <a
              href={`mailto:${site.email}`}
              className={cn(BUTTON, "hover:border-faint border-[1.5px] font-semibold")}
            >
              Write an email →
            </a>
          </div>
        </div>

        <div className="flex min-w-0 flex-[2_1_280px] flex-col gap-[18px]">
          <ul className="flex flex-col rounded-[28px] border p-2">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="group hover:bg-surface flex items-center gap-3.5 rounded-[20px] px-4 py-3.5 transition-colors duration-150"
                  {...(isExternal(link.href) && { target: "_blank", rel: "noopener noreferrer" })}
                >
                  <span
                    className={cn(
                      "flex size-10 shrink-0 items-center justify-center rounded-[11px]",
                      link.tileClassName,
                    )}
                  >
                    {link.icon}
                  </span>
                  <span className="flex min-w-0 flex-1 flex-col">
                    <span className="font-extrabold">{link.label}</span>
                    <span className="text-muted text-[13px]">{link.detail}</span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-muted ease-smooth transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <LocalTime />
        </div>
      </Reveal>
    </section>
  );
}
