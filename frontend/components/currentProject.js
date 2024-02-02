import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import ongoingProjects from "../scripts/ongoingProjects";



export default function CurrentProject() {
    let num = 0;  

    return (
        <>
            
            <div className='flex flex-wrap items-center justify-center z-10 h-full'>
                <div className='flex justify-end pb-5 mx-auto my-auto z-10'>
                    <h2 className='text-center'>{`<Current Project />`}</h2>
                </div>
                {/* Currently Working On */}      
                
                <div id='project-container' className='flex mx-auto items-center justify-center overflow-auto shadow-animation rounded-2xl'>
                    {   
                        ongoingProjects.map((current) => {
                            num += 1;
                            const lengthTech = current.techStack.length || 0;
                            return (
                                <div key={`ong-project-${num}`} id={`ong-project-${num}`} 
                                    className='flex m-auto flex-col items-center rounded-2xl'>
                                    <a  className='m-0 p-0 pointer-events-none'>
                                        <Image src={current.src} 
                                            width={0} 
                                            height={0} 
                                            sizes="100vh" 
                                            style={{ width: '100%', height: 'auto' }} 
                                            alt="Project preview"
                                            className='rounded-2xl p-2 min-w-[300px] max-h-[290px]'
                                        />
                                    </a>
                                    <h4 className='text-lightbg-text text-2xl font-bold mt-auto'>{current.name}</h4>
                                    <p className='mb-auto pt-2 text-lg text-white font-bold text-center'>
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
                                    <p className='mb-auto text-lightbg-text p-2 text-center'>{current.teaser}</p>
                                </div>
                            )
                        })
                    }
            
                </div>
            </div>
        </>
    )
};