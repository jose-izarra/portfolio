'use client';
import { useState, useEffect } from 'react';


// component imports
import Header from '@/components/sections/Header';
import Intro from '@/components/sections/Intro';
import Keywords from '@/components/sections/Keywords';
import TechStack from '@/components/sections/TechStack';
import ProjectsCompact from '@/components/sections/ProjectsCompact';
import StatsCard from '@/components/StatsCard';

export default function Page() {
  const [ visibleSections, setVisibleSections] = useState<string[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("article");
      const newVisibleSections : string[] = [];

      sections.forEach( (section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        if (isVisible) {
          newVisibleSections.push(section.id);
        }
      });
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
            <Header />
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

        <article id="stats" className={`opacity-0 ${visibleSections.includes("stats")? 'visible' : ''} `}>
            <section className="flex flex-col items-center min-h-[40vh] gap-y-6 mt-12">
                <StatsCard md/>
            </section>
        </article>
    </main>
  );
}
