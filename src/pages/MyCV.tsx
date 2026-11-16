import { site } from "@/data/site";

export default function MyCV() {
  return (
    <main className="mx-auto flex min-h-[80vh] w-full max-w-[1040px] flex-col gap-6 px-6 py-12">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <h1 className="text-4xl leading-tight font-extrabold tracking-tight">Résumé</h1>
        <a
          href={site.cvFile}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline text-sm font-semibold"
        >
          Open the PDF ↗
        </a>
      </div>
      <object
        data={site.cvFile}
        type="application/pdf"
        aria-label={`${site.name} résumé`}
        className="glass bg-card shadow-glass h-[80vh] w-full rounded-3xl"
      >
        <p className="text-muted p-6">
          Your browser can&apos;t show PDFs inline — use the link above to open it.
        </p>
      </object>
    </main>
  );
}
