'use client';
import Layout from '../components/layout';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';


// component imports

const Header = dynamic(() => import('../components/header'), {ssr:false});
const Intro = dynamic(() => import('../components/intro'));
const CurrentProject = dynamic(() => import('../components/currentProject'));
const Skills = dynamic(() => import("../components/skills"));
const ProjectDisplay = dynamic(() => import("../components/projectDisplay"));

// import Header from '../components/header';
// import Intro from '../components/intro';
// import CurrentProject from '../components/currentProject';
// import Skills from "../components/skills";
// import ProjectDisplay from "../components/projectDisplay";





export default function Home() {
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
    <Layout page="Home" title="Home | Jose Izarra">
      <article id="hero-0" className={`m-0 p-0 overflow-hidden relative opacity-0 ${visibleSections.includes("hero-0")? 'visible' : ''} `}>
        <Header />
      </article>
      {/* Introduction Section */}
      
      <article id="intro-1" className={`z-[100] opacity-0 ${visibleSections.includes("intro-1")? 'visible' : ''} `}>
        <Intro />
      </article>

      {/* Currently working on */}
      <article id="project-display-2" className={`opacity-0 ${visibleSections.includes("project-display-2")? 'visible' : ''} `}>
        <ProjectDisplay page="home"/>     
      </article>


      {/* Skills Section */}
      <article id="skills-3" className={` flex items-center justify-center opacity-0 ${visibleSections.includes("skills-3")? 'visible' : ''}`}>
        <Skills />
      </article>

      {/* Project Section */}
      <article id="current-project-4" className={`pb-10 opacity-0 ${visibleSections.includes("current-project-4")? 'visible' : ''}`}>
        <CurrentProject />  
      </article>
    </Layout>
  );
}