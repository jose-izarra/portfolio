import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import Keywords from "@/components/sections/Keywords";
import ProjectsCompact from "@/components/sections/ProjectsCompact";
import TechStack from "@/components/sections/TechStack";
import StatsCard from "@/components/StatsCard";

export default function Page() {
  return (
    <main>
      <article className="m-0 p-0 overflow-hidden relative">
        <Hero />
      </article>

      <article className="z-100">
        <Intro />
      </article>

      <article className="my-12 relative">
        <Keywords />
      </article>

      <article>
        <TechStack />
      </article>

      <article>
        <ProjectsCompact />
      </article>

      <article className="mb-0! pb-0!">
        <section className="flex flex-col items-center min-h-[40vh] gap-y-6 mt-12">
          <StatsCard md />
        </section>
      </article>
    </main>
  );
}
