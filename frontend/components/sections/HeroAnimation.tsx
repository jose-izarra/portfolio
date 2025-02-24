
'use client';
import { useState, useEffect } from 'react';
import pictures from '@/json/backgroundPics.json';
import MovingContainer from '@/components/movingPicture';
import { shuffle } from '@/lib/helper';




export default function HeroAnimation({

}) {

    const [leftValues, setLeftValues] = useState<number[]>([]);
    const [speeds, setSpeeds] = useState<number[]>([]);
    const [picsShuffled, setPicsShuffled] = useState<any[]>([]);

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
    }, []);

    if (leftValues.length === 0 || speeds.length === 0 || picsShuffled.length === 0) {
        return null; // Render nothing until the random values are set
    }
    return (
        <>
            {
                [0, 1, 2, 3].map((col) => (
                    <MovingContainer col={col} left={leftValues[col]} picsShuffled={picsShuffled} speeds={speeds} key={`MovingContainer-${col}`} />
                ))
            }

        </>
    )
}
