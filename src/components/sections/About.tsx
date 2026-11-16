import GlassCard from "@/components/ui/GlassCard";
import Section from "@/components/ui/Section";
import { facts } from "@/data/site";

export default function About() {
  return (
    <Section id="about" title="About" className="gap-8">
      <div className="flex flex-wrap items-start gap-x-14 gap-y-8">
        {/* Prose with inline links lives here rather than in data: edit the copy directly */}
        <div className="flex min-w-0 flex-[1_1_460px] flex-col gap-[18px] text-lg leading-[1.7] [&>p]:text-pretty">
          <p>
            I&apos;m a software engineer in Madrid who likes working across the whole stack — APIs,
            web and mobile apps, and the machine learning behind them. I&apos;ve been writing
            software for about four years.
          </p>
          <p>
            At{" "}
            <a href="#experience" className="link-underline">
              MVST
            </a>{" "}
            I built products for startup clients, from a dog-sitting marketplace to a medical
            dashboard that generates patient reports automatically.
          </p>
          <p>
            On the side I build things that are a little unusual, like a{" "}
            <a
              href="https://github.com/rorosaga/C_whale"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline"
            >
              language for writing Dockerfiles
            </a>{" "}
            or a{" "}
            <a
              href="https://github.com/jose-izarra/algo-visualizer"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline"
            >
              sorting visualizer
            </a>
            . I care about growth, teamwork and solving the actual problem.
          </p>
        </div>

        <GlassCard
          as="dl"
          className="flex min-w-0 flex-[0_1_280px] flex-col divide-y rounded-[22px] px-[18px] py-1 text-sm"
        >
          {facts.map((fact) => (
            <div key={fact.label} className="flex justify-between gap-3 py-[11px]">
              <dt className="text-muted">{fact.label}</dt>
              <dd className="flex items-center gap-2 text-right font-semibold">
                {fact.highlight && <span className="bg-accent size-[7px] rounded-full" />}
                {fact.value}
              </dd>
            </div>
          ))}
        </GlassCard>
      </div>
    </Section>
  );
}
