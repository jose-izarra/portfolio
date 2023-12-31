import Image from 'next/image';
import Link from 'next/link';

import fluent from '../scripts/fluent';
import worked from '../scripts/worked';


export default function Skills({ isFluent }) {


    return isFluent ? (
        <> 
            <div className="flex flex-col w-full mb-[3.5em]">
                <div className="flex mx-auto">
                        <h3 className="mb-[2rem] text-center">Fluent in</h3>
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
                        <h3 className="mb-[3rem] text-center">Frameworks and Languages I've worked with</h3>
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