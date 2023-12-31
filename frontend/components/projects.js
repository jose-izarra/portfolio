import Image from 'next/image';
import Link from 'next/link';

import ProjectCard from './projectCard';




export default function Projects({ page }) {


    return page === "home" ? (
        <>
            <div className='flex flex-col items-center'>
                <div className='mx-auto'>
                    <h3 className='text-center'>Latest Projects</h3>
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