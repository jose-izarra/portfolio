import Layout from '../components/layout';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';

// component imports
import Header from '../components/header';
import Intro from '../components/intro';
import CurrentProject from '../components/currentProject';
import Skills from "../components/skills";
import ProjectDisplay from "../components/projectDisplay";



export default function Home() {
  const [ visibleArticles, setVisibleArticles] = useState<string[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const articles = document.querySelectorAll("article");
      const newVisibleArticles : string[] = [];

      articles.forEach( (article) => {
        const rect = article.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        if (isVisible) {
          newVisibleArticles.push(article.id);
        }
      });
      setVisibleArticles(newVisibleArticles);
    };

      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check on mount

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };

    
  }, []);
  return (
    <Layout page="Home" title="Home">
      <article id="article-0" className={`m-0 p-0 overflow-hidden relative ${visibleArticles.includes("article-0")? 'visible' : ''} `}>
        <Header />
      </article>
      {/* Introduction Section */}
      
      <article id="article-1" className={`z-[100] ${visibleArticles.includes("article-1")? 'visible' : ''} `}>
        <Intro />
      </article>

      {/* Currently working on */}
      <article id="article-2" className={`${visibleArticles.includes("article-2")? 'visible' : ''} `}>
        <ProjectDisplay page="home"/>     
      </article>


      {/* Skills Section */}
      <article id="article-3" className={`${visibleArticles.includes("article-3")? 'visible' : ''}`}>
        <Skills isFluent={true} />
        <Skills isFluent={false} />
      </article>

      {/* Project Section */}
      <article id="article-4" className={`pb-10 ${visibleArticles.includes("article-4")? 'visible' : ''}`}>
        <CurrentProject />  
      </article>
    </Layout>
  );
}