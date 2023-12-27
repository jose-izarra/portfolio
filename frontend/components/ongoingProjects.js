import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import ongoingProjects from "../scripts/ongoingProjects";



export default function WorkingOnProjects() {
    let num = 0;  

    return (
        <>
            <div className='flex items-center'>
                <div className='flex-1 flex justify-center'>
                    <h3 className='text-4xl text-subtitle-color'>{`< Current Project />`}</h3>
                </div>
                {/* Currently Working On */}      
                
                <div className='flex flex-1 itemx-center justify-center'>
                    {   
                        
                        ongoingProjects.map((current) => {
                            num += 1;
                            const lengthTech = current.techStack.length || 0;
                            return (
                                <div key={`ong-project-${num}`} id={`ong-project-${num}`} 
                                    className='flex ml-auto mr-auto flex-col items-center mx-3 rounded-2xl shadow-animation'>
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
                                    <p className='mb-auto pt-2 text-lg text-[#ffffff] font-bold'>
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
            </div>
            

        </>
    )
};