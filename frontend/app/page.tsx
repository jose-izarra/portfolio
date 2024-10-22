'use client';
import { useState, useEffect } from 'react';


// component imports
import Header from '@/components/header';
import Intro from '@/components/intro';
import Skills from '@/components/skills';
import ProjectDisplay from '@/components/projectDisplay';


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

      <article id="hero-0" className={`m-0 p-0 overflow-hidden relative opacity-0 ${visibleSections.includes("hero-0")? 'visible' : ''} `}>
        <Header />
      </article>
      {/* Introduction Section */}

      <article id="about" className={`z-[100] opacity-0 ${visibleSections.includes("about")? 'visible' : ''} `}>
        <Intro />
      </article>

      {/* Currently working on */}
      <article id="project-display-2" className={`opacity-0 ${visibleSections.includes("project-display-2")? 'visible' : ''} `}>
        <ProjectDisplay />
      </article>


      {/* Skills Section */}
      <article id="skills-3" className={` flex items-center justify-center opacity-0 ${visibleSections.includes("skills-3")? 'visible' : ''}`}>
        <Skills />
      </article>

      {/* Project Section */}
    </main>
  );
}
