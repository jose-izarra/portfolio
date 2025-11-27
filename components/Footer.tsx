import { FileText, Github, Linkedin, Mail } from "lucide-react";
import Headline from "./Headline";

export default function Footer() {
  const socials = [
    {
      text: "LinkedIn",
      link: "https://www.linkedin.com/in/jose-izarra/",
      icon: <Linkedin className="h-4 w-4" />,
    },
    {
      text: "Github",
      link: "https://www.github.com/jose-izarra",
      icon: <Github className="h-4 w-4" />,
    },
  ];

  return (
    <footer className="from-background to-primary-900/10 overflow relative mt-20 border-t border-white/10 bg-linear-to-b">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 lg:gap-8">
          <div className="col-span-1 space-y-4 md:col-span-2">
            <Headline level={1} className="text-primary-400 text-3xl">
              Jose Izarra
            </Headline>
            <p className="text-light/60 max-w-xs text-sm leading-relaxed">
              Finding balance in life through passion.
              <br />
              Software Developer and Creator.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-light/90 text-sm font-semibold uppercase">Connect</h4>
            <ul className="space-y-3">
              {socials.map((social, i) => (
                <li key={i}>
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-light/60 hover:text-primary-400 flex items-center gap-2 text-sm transition-colors"
                  >
                    {social.icon}
                    <span>{social.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-light/90 text-sm font-semibold uppercase">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:jaiza0912@gmail.com"
                  className="group text-light/60 hover:text-primary-400 flex items-center gap-2 text-sm transition-colors"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  <span>jaiza0912@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="/mycv"
                  className="group text-light/60 hover:text-primary-400 flex items-center gap-2 text-sm transition-colors"
                >
                  <FileText className="h-4 w-4 shrink-0" />
                  <span>View CV</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-white/5 pt-8 md:flex-row">
          <p className="text-light/40 text-xs">
            © {new Date().getFullYear()} Jose Izarra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
