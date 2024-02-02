import Image from 'next/image';
import Link from 'next/link';
import projects from '../scripts/projects.json';




export default function Projects({ page }) {


    return page === "home" ? (
        <>
            <div className='flex flex-col items-center'>
                <div className='mx-auto'>
                    <h1 className='text-center'>Latest Projects</h1>
                </div>

                <div className='flex flex-wrap max-w-full mx-auto'>
                    {
                        [0, 1, 2].map((projectIndex) => (
                            <ProjectCard key={`project-no-${projectIndex}`} projectIndex={projectIndex} />
                        ))
                    }
                </div>
            </div>
        </>
    )
    :
    (
        <>
            <div className='flex'>

            </div>
        </>
    )
}



function ProjectCard({  projectIndex }) {
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



