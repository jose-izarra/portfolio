import Layout from '../components/layout';
import dynamic from 'next/dynamic';
import { Metadata } from "next";

export const metadata: Metadata = {
    title: `Projects | Jose Izarra`,
    description: `Selection of software projects I've workend on. From web development to AI and Robotics.`,
  };

const ProjectDisplay = dynamic(() => import('../components/projectDisplay'), {ssr: false});



export default function Projects() {
    return (
        
        <Layout title="Projects | Jose Izarra" page="Projects">
            {/* <MovingContainer col={0} left={25} picsShuffled={pics} speeds={[20, 25, 30]}/> */}
            <header className='flex justify-center items-end h-[40vh] pb-16 '>
                <h1 className="text-center">Projects I've worked On</h1>
            </header>
            <ProjectDisplay page="projects"/>
        </Layout>
    )
}