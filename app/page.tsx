import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import Keywords from "@/components/sections/Keywords";
import ProjectsCompact from "@/components/sections/ProjectsCompact";
import TechStack from "@/components/sections/TechStack";
import StatsCard from "@/components/StatsCard";

export default function Page() {
  return (
    <main className="space-y-32">
      <Hero />
      <StatsCard />
      <Intro />
      <Keywords />
      <TechStack />
      <ProjectsCompact />
    </main>
  );
}
