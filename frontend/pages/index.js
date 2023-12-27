import Image from 'next/image';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';


// components imports
import SkillDisplay from "../components/skillDisplay";
import WorkingOnProjects from '../components/ongoingProjects';


export default function Home() {
  return (
    <Layout page="Home" title="Jose Izarra | Home">
      
      <header className='flex justify-center py-[2em] my-[1em]'>
          <div className="flex items-center">
            <h1 id="main-title" className=''>Jose Izarra<span id="main-sub" className='pl-5 inline-block'>- Software Developer and Creator</span></h1>
            {/* <h2 id="main-sub" className='pl-2 '>- Software Developer and Creator</h2> */}
          </div>
      </header>

      {/* Introduction Section */}
      <section className="">
        
      </section>


      <section className="">
        <h2>Hello, I am Jose and I like to code</h2>
        <div>
          <Image className={styles.profilepic} src="/images/profile.jpg" height={144} width={144} alt="Jose Izarra"/>
        </div>
          {/* <p>[Your Self Introduction]</p>
              picture of myself 
          */}
      </section>


      {/* Currently working on */}
      <section className="flex">
          <WorkingOnProjects />          
      </section>


      {/* Skills Section */}
      <section className="">
        <SkillDisplay />
      </section>


    </Layout>
  );
}