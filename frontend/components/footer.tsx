import socials from '../json/socials.json';
import styles from './styles/footer.module.css';



import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import type { InferGetStaticPropsType, GetStaticProps } from 'next'


import Image from 'next/image';

import { useState, useEffect } from 'react';

import Trial from './trial';



// export const getStaticProps = (async () => {
//     // Fetch data from external API
//     const res = await fetch('http://localhost:8888/api/v1/login');
//     const currentlyPlayed= await res.json()
//     // Pass data to the page via props
//     console.log(currentlyPlayed);
//     return { props: { currentlyPlayed } }
//   }) satisfies GetStaticProps;



export default function Footer({ 
    currentlyPlayed,
     } ) {

    // const data = getStaticProps();

    return (
        
        <footer id="footer-container" className={`${styles.footerContainer}`}>
            

            <Trial />

            {/* spotify */}
            <div className="flex flex-col items-center justify-center ml-12 w-7/12">
                <div className={`${styles.spotifyContainer} w-2/3 flex p-2`}>
                    <Image className="m-2" src="/spotify.svg" alt="Spotify Logo" width={50} height={50} />
                    <div className='flex flex-col'>
                        <h4>Currently Listening To:</h4>

                        {/* { currentlyPlayed && <p>{currentlyPlayed.name}</p> } */}
                    </div>
                </div>
            </div>

            {/* contact */}
            <div className='flex flex-col w-5/12'>
                <h3>Contact</h3>
                
                <ul className=''>
                    {
                        socials.map((current) => {
                            return (
                                <li className='' key={`footer-${current.name}-icon`}>
                                    <a href={current.href} target="_blank" className=''>{current.name}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

        </footer>
    )
}




// <footer className="flex items-center justify-center text-center my-5">     
    //     {/* <SpotifySongs /> */}
    //     <div className="flex items-center ">       
    //         <h2 className="text-3xl">Interact with me on</h2>
    //     </div>
    //     <ul className="">
    //     {
    //                 socials.map((current) => {
    //                     return (
    //                         <li key={current.name} className="inline-block mx-4 py-6 px-[50px]">
    //                             <a href={current.link} className="flex justify-center" target="_blank">
    //                             <svg xmlns={current.xmlns} x="0px" y="0px" width="50" height="50" viewBox="0 0 24 24" className='rounded-lg'>
    //                                 <path d={current.d} className="fill-cool"/>
    //                             </svg>                                    
    //                             </a>
    //                             <h3 className="text-sm pt-2">{current.name}</h3>
    //                         </li>
    //                     )
    //                 })
    //             }
    //     </ul>
    // </footer>