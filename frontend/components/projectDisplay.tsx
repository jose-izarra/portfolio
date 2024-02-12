import Image from 'next/image';
import Link from 'next/link';
import projects from '../json/projects.json';
import styles from './styles/projects.module.css';



export default function ProjectDisplay({ page }) {
    return page !== "home" ? (
        <div className='flex flex-col items-center'>
            

            <div className='flex flex-wrap max-w-full mx-auto'>
                {/* {
                    [0, 1, 2].map((projectIndex) => (
                        <ProjectCard key={`project-no-${projectIndex}`} index={projectIndex} />
                    ))
                } */}
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
                                <h4 className=' text-2xl font-bold p-2'>{project.name}</h4>
                                <p className='py-2 px-5'>{project.paragraph}</p>
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
                            <div className='flex justify-center items-center w-5/12 pr-1'>
                                <Image src={project.photo} 
                                    width={0} 
                                    height={0} 
                                    sizes="100vh" 
                                    style={{ width: '100%', height: 'auto' }} 
                                    alt={`${project.name} Preview`}
                                    className='rounded-2xl p-2 '
                                />
                                
                            </div>
                        </div>
                    </Link>
                </div>
            )}


            {/* Vertical Project Card */}
            { direction === 'vertical' && (
            // <div className={`w-full sm:w-[40%] md:w-[70%]  h-fit md:mx-[2%] flex justify-center`}>
                <div className={`h-full w-[90%]`}>
                    <Link className={``} href={project.link !== ""? project.link : project.github} target="_blank">
                        <div className={`${styles.projectCard} ${styles.verticalProjectCard}`}>
                            <div className='flex flex-col h-4/6 justify-center py-5'>
                                <h4 className=' text-2xl font-bold  p-2'>{project.name}</h4>
                                <p className=' py-2 px-5 text-center'>{project.paragraph}</p>
                                <ul className='flex flex-wrap justify-center'>
                                {
                                    project.techIcons.map((path, index) => {
                                        return (
                                            <li key={`icon-${index}`} className='p-2 content-center'>
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
                            <div className='flex justify-center items-center h-2/6 p-2'>
                                <Image src={project.photo} 
                                    width={0} 
                                    height={0} 
                                    sizes="100vh" 
                                    style={{ width: 'auto', height: '100%' }} 
                                    alt={`${project.name} Preview`}
                                    className='rounded-2xl p-2 max-h-[200px]'
                                />
                            </div>
                        </div>
                    </Link>
                </div>
               
            )}
            
        </>
    )

    
}





// function ProjectCard({  projectIndex }) {
//     const project = projects[projectIndex];

//     return (
//         <>  
//             <div className='flex mx-auto overflow-auto p-5'> {/* shadow-animation */}
//                 <div className='flex flex-col bg-ok min-w-[10rem] max-w-[20rem] rounded-2xl items-center'>
//                     <Link href={project.link !== ""? project.link : project.github} target="_blank" className='m-0 p-0'>
//                         <Image src={project.photo} 
//                             width={0} 
//                             height={0} 
//                             sizes="100vh" 
//                             style={{ width: '100%', height: 'auto' }} 
//                             alt={`${project.name} Preview`}
//                             className='rounded-2xl p-2 '
//                         />
//                     </Link>
                
//                     <h4 className='text-lightbg-text text-2xl font-bold text-center p-2'>{project.name}</h4>
//                     <p className='text-lightbg-text p-2 text-center'>{project.description}</p>

                    // <ul className='flex flex-wrap justify-center'>
                    //     {
                    //         project.techIcons.map((path, index) => {
                    //             return (
                    //                 <li key={`icon-${index}`} className='p-3 content-center'>
                    //                     <Image src={path}
                    //                     height={30} width={30} 
                    //                     className=''
                    //                     alt={'icon'} />
                    //                 </li>
                    //             )
                    //         })
                    //     }
                    // </ul>
//                 </div>
//             </div>
//         </>
//     )
// }



