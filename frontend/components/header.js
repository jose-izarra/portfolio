import { useEffect, useState } from 'react';
import styles from './styles/header.module.css';
import BackgroundImage from './backgroundImage';
import pictures from '../scripts/backgroundPics.json';

import Image from 'next/image';

export default function Header() {
    const picSizes = [
        { width: "25%", top: "10%", left: "10%", zIndex: "0" },
        { width: '20%', top: '50%',left: '60%', zIndex: "1" },
        { width: '15%', top: '5%', left: '80%', zIndex: '2' },
        { width: '18%', top: '5%', left: '40%', zIndex: '2', },
        { width: '10%', top: '75%', left: '0', zIndex: '2' },
        { width: '10%', top: '35%', left: '60%', zIndex: '2' },
        { width: '10%', top: '35%', left: '60%', zIndex: '2' },
        { width: '10%', top: '35%', left: '60%', zIndex: '2' },
        { width: '10%', top: '35%', left: '60%', zIndex: '2' },
        { width: '10%', top: '35%', left: '60%', zIndex: '2' },
    ]


    return (
        <header className={`${styles.header} z-10 flex items-center justify-center w-full`}>
            <div className={`${styles.overlay} absolute top-[50px] left-[25em] hidden sm:block sm:w-[30%] lg:w-[25%] mr-5 transition ease-in`}>
            </div>          

            {/* sego pic on hover */}
            {/* <div className={`${styles.overlay} ml-auto hidden sm:block sm:w-[30%] lg:w-[25%]  transition ease-in `}>
                <Image src='/sego.JPG'
                    width={0} 
                    height={0} 
                    sizes="100vh" 
                    style={{ width: '100%', height: 'auto' }} 
                    className={`${styles.pic}`} 
                    alt="Jose Izarra"
                />
            </div> */}

            <div className="flex mx-auto justify-center items-center z-10 ">
                <h1 id="main-title" className={`${styles.maintitle} text-center`}>Jose Izarra<span id="main-sub" className={`${styles.mainsub} pl-5 inline-block`}>- Software Developer and Creator</span></h1>
            </div>
      </header>
    )
}


/*
<Image src={project.photo} 
                            width={0} 
                            height={0} 
                            sizes="100vh" 
                            style={{ width: '100%', height: 'auto' }} 
                            alt={`${project.name} Preview`}
                            className='rounded-2xl p-2 '
                        />
*/

/*
<header id="header" className='flex flex-col justify-center items-center pb-[2.5em] pt-[5em] mb-[1em] h-[100vh]'>
    <div className="flex justify-center my-auto items-center">
    <h1 id="main-title" className='text-center'>Jose Izarra<span id="main-sub" className='pl-5 inline-block'>- Software Developer and Creator</span></h1>
    </div>
</header>
*/