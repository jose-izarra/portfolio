import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';
import socials from '../scripts/socials';
import { useState, useEffect } from 'react';
// components imports
import SkillDisplay from "../components/skillDisplay";
import WorkingOnProjects from '../components/ongoingProjects';
import Intro from '../components/intro';

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

    
  }, [visibleSections]);
  return (
    <Layout page="Home" title="Jose Izarra | Home">
      
      <header className='flex flex-col justify-center items-center pb-[2.5em] pt-[5em] mb-[1em] h-[100vh]'>
        <div className='flex justify-center my-auto'>
          <div className="flex items-center">
            <h1 id="main-title" className=''>Jose Izarra<span id="main-sub" className='pl-5 inline-block'>- Software Developer and Creator</span></h1>
          </div>
        </div>
          <div className='flex justify-center items-center my-auto '>
            <Link href={socials[0].link} target="_blank">
              <Image src="/images/profile.jpg" 
                height={200} width={200} alt="Jose Izarra"
                // style={{ width: '100%', height: 'auto' }}
                className=' w-64 ' 
                id='profile-pic'
              />
            </Link>
            
          </div>
      </header>

      {/* Introduction Section */}
      <section id="section-1" className={` ${visibleSections.includes("section-1")? 'visible' : ''}`}>
        <Intro />
      </section>

      {/* Currently working on */}
      <section id="section-2" className={` ${visibleSections.includes("section-2")? 'visible' : ''}`}>
        <WorkingOnProjects />          
      </section>


      {/* Skills Section */}
      <section id="section-3" className={` ${visibleSections.includes("section-3")? 'visible' : ''}`}>
        <SkillDisplay />
      </section>

    </Layout>
  );
}