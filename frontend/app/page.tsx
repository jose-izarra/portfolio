'use client';
import { useState, useEffect } from 'react';


// component imports
import Hero from '@/components/sections/Hero';
import Intro from '@/components/sections/Intro';
import Keywords from '@/components/sections/Keywords';
import TechStack from '@/components/sections/TechStack';
import ProjectsCompact from '@/components/sections/ProjectsCompact';
import StatsCard from '@/components/StatsCard';

export default function Page() {
  const [ visibleSections, setVisibleSections] = useState<string[]>(['']);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("article");
      const newVisibleSections : string[] = [];

      if (sections[0].getBoundingClientRect().top < window.innerHeight && sections[0].getBoundingClientRect().bottom >= 0) {
        newVisibleSections.push(sections[0].id);
      }
      for (let i = 1; i < sections.length; i++) {
        const rect = sections[i].getBoundingClientRect();
        const isVisible = rect.top > sections[i-1].getBoundingClientRect().y && rect.bottom >= 0;
        if (isVisible) newVisibleSections.push(sections[i].id);
      }
      setVisibleSections(newVisibleSections);
    };

      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check on mount

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };


  }, []);
  return (
    <main>
        <article id="header" className={`m-0 p-0 overflow-hidden relative opacity-0 ${visibleSections.includes("header")? 'visible' : ''} `}>
            <Hero />
        </article>


        <article id="about" className={`z-[100] opacity-0 ${visibleSections.includes("about")? 'visible' : ''} `}>
            <Intro />
        </article>

        <article id='keywords' className={` my-12 relative opacity-0 ${visibleSections.includes("keywords")? 'visible' : ''} `}>
            <Keywords />
        </article>

        <article id="tech-stack" className={`opacity-0 ${visibleSections.includes("tech-stack")? 'visible' : ''} `}>
            <TechStack />
        </article>

        <article id="projects-compact" className={`opacity-0 ${visibleSections.includes("projects-compact")? 'visible' : ''} `}>
            <ProjectsCompact />
        </article>

        <article id="stats" className={`opacity-0 ${visibleSections.includes("stats")? 'visible' : ''} !mb-0 !pb-0`}>
            <section className="flex flex-col items-center min-h-[40vh] gap-y-6 mt-12">
                <StatsCard md/>
            </section>
        </article>
    </main>
  );
}
