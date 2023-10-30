import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout home>
      {/* Introduction Section */}
      <section className={styles.section}>
        <header>
          <h2>Software Developer and Creator</h2>
          <h1>Jose Izarra</h1>
    
          {/* About Me section */}
          <h2>Hello, I am Jose and I like to code</h2>
          {/* <p>[Your Self Introduction]</p>
          <p>
            (This is a sample website - you’ll be building a site like this on{' '}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p> */}
          </header>
      </section>
      {/* Currently working on */}
      <section className={styles.section}>
          <h2>I get bored in my free time</h2>
          <h1>Currently Working On</h1>
          <div>
            {/* include percentage of completion */}
            <ul>
              {/* could add a hover display to show more information about each process */}
              <li>This website :)</li>
              <li>Sonic Pi Generator</li>
              <li>IE Robotics Club Website</li>
              <li>yeah and uni</li>
            </ul>
          </div>
      </section>

      {/* Skills Section */}
      <section className={styles.section}>
        <span>
          <h1>I am fluent in ...</h1>
          <div>
            <ul>
              <li>Python</li>
              <li>{/* skills.json stuff*/}</li>
              <li>English</li>
              <li>Spanish</li>
            </ul>
          </div>
        </span>
        <span>
          <h1>Currently learning .. </h1>
          <div>
            <ul>
              <li>{/* currently_learning.json */}</li>
              <li>LLMs + Sonic Pi</li>
            </ul>
          </div>
        </span>
      </section>
    </Layout>
  );
}