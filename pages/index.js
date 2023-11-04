import Image from 'next/image';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';
import Skills from "../components/skills";

export default function Home() {
  return (
    <Layout page="Home" title="Jose Izarra | Home">
      {/* Introduction Section */}
      <section className={styles.section}>
        <header className='pt-[100px]'>
          
          <h1 id="main-title" className='pl-32 inline-block'>Jose Izarra</h1>
          <h2 id="main-sub" className='pl-2 inline-block'>- Software Developer and Creator</h2>
          {/* About Me section */}
        </header>
      </section>
      <section className={styles.section}>
        <h2>Hello, I am Jose and I like to code</h2>
        <div>
          <Image className={styles.profilepic} src="/images/profile.jpg" height={144} width={144} alt="Jose Izarra"/>
        </div>
          {/* <p>[Your Self Introduction]</p>
              picture of myself 
          */}
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
        <Skills />
      </section>
    </Layout>
  );
}