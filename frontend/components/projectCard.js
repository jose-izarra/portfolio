import Image from 'next/image';
import Link from 'next/link';

import projects from '../scripts/projects.json';



export default function ProjectCard({  projectIndex }) {
    const project = projects[projectIndex];

    return (
        <>
            <div className='flex mx-auto overflow-auto p-5'> {/* shadow-animation */}
                <div className='flex flex-col bg-ok min-w-[10rem] max-w-[20rem] rounded-2xl items-center'>
                    <Link href={project.link !== ""? project.link : project.github} target="_blank" className='m-0 p-0'>
                        <Image src={project.photo} 
                            width={0} 
                            height={0} 
                            sizes="100vh" 
                            style={{ width: '100%', height: 'auto' }} 
                            alt={`${project.name} Preview`}
                            className='rounded-2xl p-2 '
                        />
                    </Link>
                
                    <h4 className='text-lightbg-text text-2xl font-bold text-center p-2'>{project.name}</h4>
                    <p className='text-lightbg-text p-2 text-center'>{project.description}</p>

                    <ul className='flex flex-wrap justify-center'>
                        {
                            project.techIcons.map((path, index) => {
                                return (
                                    <li key={`icon-${index}`} className='p-3 content-center'>
                                        <Image src={path}
                                        height={30} width={30} 
                                        className=''
                                        alt={'icon'} />
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}



// Current Project

/*               
<div id='project-container' className='flex mx-auto items-center justify-center overflow-auto shadow-animation rounded-2xl'>
    {   
        ongoingProjects.map((current) => {
            num += 1;
            const lengthTech = current.techStack.length || 0;
            return (
                <div key={`ong-project-${num}`} id={`ong-project-${num}`} 
                    className='flex m-auto flex-col items-center rounded-2xl'>
                    <Link href={current.link} target="_blank" className='m-0 p-0'>
                        <Image src={current.src} 
                            width={0} 
                            height={0} 
                            sizes="100vh" 
                            style={{ width: '100%', height: 'auto' }} alt="Project preview"
                            className='rounded-2xl p-1'
                        />
                    </Link>
                    <h4 className='text-lightbg-text text-2xl font-bold mt-auto'>{current.name}</h4>
                    <p className='mb-auto pt-2 text-lg text-white font-bold'>
                        {
                            current.techStack.map((tech, index) => {
                                return (
                                    <Fragment key={`fragment-${tech.name}`}>
                                        <Link key={tech.name} href={tech.link} className='hover:text-cool hover:transition hover:ease-in duration-200' target="_blank">{tech.name}</Link>
                                        <span key={`span-${tech.name}`}> {index !== lengthTech - 1 && "+"} </span>
                                    </Fragment>
                                )
                            })
                        }
                        </p>
                    <p className='mb-auto text-lightbg-text'>{current.teaser}</p>
                </div>
            )
        })
    }
</div>
*/