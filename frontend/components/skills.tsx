import Image from 'next/image';
import Link from 'next/link';

import fluent from '../json/fluent.json';
import worked from '../json/worked.json';


export default function Skills({ isFluent }) {


    return isFluent ? (
        <> 
            <div className="flex flex-col w-full mb-[3.5em]">
                <div className="flex mx-auto">
                    <h1 className="mb-[2rem] text-center">Tech Stack</h1>
                </div>
                <ul id="fluent-container" className='max-w-[650px] mx-auto flex flex-wrap w-fit items-center justify-center rounded-xl p-3'>
                    {
                        fluent.map((skill) => {
                            return (
                                <li key={skill.name} className='m-3'>
                                    <a href={skill.link} target="_blank">
                                        <Image src={skill.path}
                                        height={80} width={80} 
                                        className=''
                                        alt={skill.name} />
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
    :
    (
        <>
            <div className="flex flex-col w-full">
                <div className="flex mx-auto ">
                        <h2 className="mb-[3rem] text-center">Frameworks and Languages I've worked with</h2>
                    </div>
                <ul id="worked-container"className='max-w-[550px] flex flex-wrap mx-auto  items-center justify-center rounded-xl p-3'>
                    {
                        worked.map((skill) => {
                            return (
                                <li key={skill.name} className='m-3'>
                                    <Link href={skill.link} target="_blank">     
                                        <Image src={skill.path}
                                        height={70} width={70} 
                                        className=''
                                        alt={skill.name} />
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}