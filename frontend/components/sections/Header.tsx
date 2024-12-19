'use client';
import { useState, useEffect } from 'react';
import pictures from '@/json/backgroundPics.json';
import MovingContainer from '@/components/movingPicture';
import { shuffle } from '@/lib/helper';

export default function Header() {
    const [leftValues, setLeftValues] = useState<number[]>([]);
    const [speeds, setSpeeds] = useState<number[]>([]);
    const [picsShuffled, setPicsShuffled] = useState<any[]>([]);

    // const shuffle = (array: any[]) => {
    //     for (let i = array.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [array[i], array[j]] = [array[j], array[i]];
    //     }
    //     return array;
    // };

    useEffect(() => {
        // Only generate random values on the client
        const newLeftValues = [
            Math.floor(Math.random() * 4) + 2,
            Math.floor(Math.random() * 4) + 26,
            Math.floor(Math.random() * 6) + 49,
            Math.floor(Math.random() * 4) + 78
        ];

        const newSpeeds = shuffle([20, 24, 28, 32]);
        const newPicsShuffled = shuffle([...pictures]);

        setLeftValues(newLeftValues);
        setSpeeds(newSpeeds);
        setPicsShuffled(newPicsShuffled);
    }, []); // Empty dependency array ensures this runs only once, after the first render

    if (leftValues.length === 0 || speeds.length === 0 || picsShuffled.length === 0) {
        return null; // Render nothing until the random values are set
    }

    return (
        <header className={`h-screen overflow-hidden left-10 flex items-center justify-center w-full`}>
            <div className={`opacity-90 absolute top-[50px] left-[25em] hidden sm:block sm:w-[30%] lg:w-[25%] mr-5 transition ease-in`}></div>
            {
                [0, 1, 2, 3].map((col) => (
                    <MovingContainer col={col} left={leftValues[col]} picsShuffled={picsShuffled} speeds={speeds} key={`MovingContainer-${col}`} />
                ))
            }
            <div className="flex mx-auto justify-center items-center z-10 ">
                <h1 className={`text-[5rem] text-center z-10 `}>Jose Izarra
                    <span className={`pl-5 inline-block text-secondary-color text-base`}>- Software Developer and Creator</span>
                </h1>
            </div>
        </header>
    );
}
