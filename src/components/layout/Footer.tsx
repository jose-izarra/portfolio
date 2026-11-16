import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-[1040px] px-6 pb-12">
      <div className="text-muted flex flex-wrap justify-between gap-2 border-t px-1 pt-5 text-[13px]">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <a href="#top" className="hover:text-foreground transition-colors duration-150">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
