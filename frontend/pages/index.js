import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';
import socials from '../scripts/socials';
import { useState, useEffect } from 'react';

// components imports
import Header from '../components/header';
import NavBar from '../components/navbar';
import Intro from '../components/intro';
import CurrentProject from '../components/currentProject';
import Skills from "../components/skills";
import Projects from "../components/projects";

export default function Home() {
  const [ visibleSections, setVisibleSections] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const newVisibleSections = [];

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
    <Layout page="Home" title="Jose Izarra | Home">
      <section id="section-0" className={`m-0 p-0 ${visibleSections.includes("section-0")? 'visible' : ''}`}>
        <Header />
      </section>
      {/* Introduction Section */}
      
      <section id="section-1" className={`pb-[6rem] ${visibleSections.includes("section-1")? 'visible' : ''}`}>
        <Intro />
      </section>

      {/* Currently working on */}
      <section id="section-2" className={` ${visibleSections.includes("section-2")? 'visible' : ''}`}>
        <CurrentProject />          
      </section>


      {/* Skills Section */}
      <section id="section-3" className={`${visibleSections.includes("section-3")? 'visible' : ''}`}>
        <Skills isFluent={true} />
        <Skills isFluent={false} />
      </section>

      {/* Project Section */}
      <section id="section-4" className={`pb-10 ${visibleSections.includes("section-4")? 'visible' : ''}`}>
        <Projects page="home"/>
      </section>
    </Layout>
  );
}