'use client';
import { useEffect, useState } from "react"
import styles from '@/styles/Keywords.module.css'



interface Keywords {
    props: string[];
}
export default function Keywords() {
    const keywords = ['growth', 'mindset', 'football', 'dedication', 'passion', 'hardwork', 'teamwork', 'leadership', 'innovation', 'creativity', 'problem-solving', 'resilience']


    // console.log('shuffled', shuffled)
    return (
        <section className="w-full min-h-32 flex flex-col items-center ">
            <div className="w-[90%]  lg:w-2/3 flex flex-col h-full ">
                {/* <h2 className="text-xl font-bold text-primary-text-color text-left">Keywords</h2> */}
                <div className="flex flex-col gap-y-5 justify-center items-center overflow-x-hidden w-full">
                    {[0, 1, 2].map(i => <MovingWords key={i} props={keywords} /> )}
                </div>
            </div>
        </section>
    )
}


function MovingWords({ props }: Keywords) {


    return (
        <div className={`${styles.keywords} w-full relative`}>
            <ul
            className={`flex gap-x-8 text-secondary-text-color whitespace-nowrap relative  w-full`}
            // initial={{ x: 0}}
            >
                {
                    props.map((keyword, index) => (
                        <li key={index} className="">{keyword}</li>
                    ))
                }
                {
                    props.map((keyword, index) => (
                        <li key={index} className="aria-hidden">{keyword}</li>
                    ))
                }
            </ul>
        </div>

    )
}
