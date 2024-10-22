'use client'
import Image from 'next/image';
import Link from 'next/link';
import projects from '../json/projects.json';
import styles from './styles/projects.module.css';
import { usePathname } from 'next/navigation';

export default function ProjectDisplay({ }) {
    const path = usePathname();
    const projects1 = [0, 2, 5];
    const projects2 = [1, 3, 4];
    return path !== "/" ? (
        <div className='flex justify-center items-start flex-wrap mx-5 xl:mx-12'>
            <div className='flex flex-col items-center lg:pl-10 lg:w-6/12 h-fit '>
                {
                    projects1.map((project, index) => {
                        return index % 2 === 0 ? (
                            <ProjectCard direction="horizontal" index={project} key={`projects1-${project}`}/>
                        )
                        :
                        (
                            <ProjectCard direction="vertical" index={project} key={`projects1-${project}`}/>
                        )
                    })
                }
                {/* <ProjectCard direction="horizontal" index={0} />
                <ProjectCard direction="vertical" index={5} />
                <ProjectCard direction="horizontal" index={3} />
                <ProjectCard direction="horizontal" index={4} /> */}
            </div>
            <div className='flex flex-col items-center justify-center lg:w-6/12 '>
                {
                    projects2.map((project, index) => {
                        return index % 2 === 0 ? (
                            <ProjectCard direction="vertical" index={project} key={`projects2-${project}`}/>
                        )
                        :
                        (
                            <ProjectCard direction="horizontal" index={project} key={`projects2-${project}`}/>
                        )
                    })
                }
                {/* <ProjectCard direction="vertical" index={2} />
                <ProjectCard direction="horizontal" index={1} /> */}
            </div>

        </div>
    )
    :
    (
        <div className='flex flex-col items-center'>
            <div className='mx-auto pb-12'>
                <h1 className='text-center'>Latest Projects</h1>
            </div>

            <div className='flex justify-center items-center flex-wrap mx-5 xl:mx-12'>
                <div className='flex flex-col items-center lg:pl-10 lg:w-8/12 h-fit '>
                    <ProjectCard direction="horizontal" index={0} />
                    <ProjectCard direction="horizontal" index={1} />
                </div>
                <div className='flex justify-center lg:w-4/12 '>
                    <ProjectCard direction="vertical" index={2} />
                </div>
            </div>
        </div>
    )
}



interface ProjectCardProps {
    direction: string;
    index: number;
}

function ProjectCard({ direction, index }: ProjectCardProps) {
    const project = projects[index];

    return (
        <>
            {/* Horizontal Project Card */}
            { direction === "horizontal" && (
                // <div className="w-full  lg:ml-[3.5rem] h-fit flex justify-center">
                <div className="h-fit w-[95%] mb-2">
                    <Link className=" " href={project.link !== ""? project.link : project.github} target="_blank" >
                        <div className={`${styles.projectCard} ${styles.horizontalProjectCard}`}>
                            <div className='flex flex-col w-7/12 justify-center py-4'>
                                <h3 className=' text-2xl font-bold p-2'>{project.name}</h3>
                                <p className='py-4 px-5'>{project.paragraph}</p>
                                <ul className='flex flex-wrap justify-center'>
                                {
                                    project.techIcons.map((path, index) => {
                                        return (
                                            <li key={`icon-${index}`} className='p-3 content-center'>
                                                <Image src={path}
                                                    height={40} width={40}
                                                    className=''
                                                    alt={'icon'} />
                                            </li>
                                        )
                                    })
                                }
                                </ul>
                            </div>
                            <div className='flex justify-center items-center w-5/12  pr-1 '>
                                <Image src={project.photo}
                                    width={300}
                                    height={300}
                                    sizes="100vh"
                                    style={{ width: 'auto'}}
                                    alt={`${project.name} Preview`}
                                    className='rounded-xl'
                                />

                            </div>
                        </div>
                    </Link>
                </div>
            )}


            {/* Vertical Project Card */}
            { direction === 'vertical' && (
            // <div className={`w-full sm:w-[40%] md:w-[70%]  h-fit md:mx-[2%] flex justify-center`}>
                <div className={`h-full w-[95%]`}>
                    <Link className={``} href={project.link !== ""? project.link : project.github} target="_blank">
                        <div className={`${styles.projectCard} ${styles.verticalProjectCard}`}>
                            <div className='flex flex-col h-4/6 justify-center py-5'>
                                <h3 className=' text-2xl font-bold  p-2'>{project.name}</h3>
                                <p className=' py-2 px-5 text-center'>{project.paragraph}</p>
                                <ul className='flex flex-wrap justify-center'>
                                {
                                    project.techIcons.map((path, index) => {
                                        return (
                                            <li key={`icon-${index}`} className='p-2 content-center'>
                                                <Image src={path}
                                                height={40} width={40}
                                                className=''
                                                alt={'icon'} />
                                            </li>
                                        )
                                    })
                                }
                                </ul>
                            </div>
                            <div className='flex justify-center items-center h-2/6 p-2 '>
                                <Image src={project.photo}
                                    width={400}
                                    height={100}
                                    sizes="100vh"
                                    style={{ width: 'auto'}}
                                    alt={`${project.name} Preview`}
                                    className='rounded-xl max-h-[200px]'
                                />
                            </div>
                        </div>
                    </Link>
                </div>

            )}

        </>
    )


}
