import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Toolbox from "@/components/sections/Toolbox";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="mx-auto flex max-w-[1040px] flex-col gap-24 px-6 pt-24 pb-20 md:gap-32">
        <About />
        <Experience />
        <Projects />
        <Toolbox />
        <Contact />
      </div>
    </main>
  );
}
