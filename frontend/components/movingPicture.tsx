import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './styles/header.module.css';


interface Picture {
    path: string;
    category: string;
}


export default function MovingContainer({ col, left, picsShuffled, speeds } 
    : { col: number, left: number, picsShuffled: Picture[], speeds: number[] }) {

    const pics = picsShuffled.slice(col*5, (col*5) + 5);

    return (
        <motion.div id={`MovingContainer-${col}`}
                className='absolute top-0 w-1/6 h-[50vh]'
                initial={{ y: col % 2 === 0 ? '-250vh' : '120vh'}}
                animate={{ y: col % 2 === 0 ? '150vh' : '-300vh' }}
                transition={{
                            repeat: Infinity,
                            duration: speeds[col],
                            ease: 'linear',
                            yoyo: Infinity,
                        }}
                style={{ left: `${left}%` }}
            >
                {
                  pics.map((pic, row: number) => {
                    
                    return (
                        <MovingPicture path={pic.path} row={row} col={col} key={`MovingPicture-${col}-${row}`}/>
                    )
                  })
                }
                {/* <MovingPicture path="/sego.JPG" row={0} col={col} />
                <MovingPicture path="/sego.JPG" row={1} col={col} />
                <MovingPicture path="/sego.JPG" row={2} col={col} />
                <MovingPicture path="/sego.JPG" row={3} col={col} />
                <MovingPicture path="/sego.JPG" row={4} col={col} />
                
                <MovingPicture path="/images/space2.jpg" row={6} col={col} /> */}
        </motion.div>
    )
}



function MovingPicture({ path, row, col } : { path: string, row: number, col: number }) {

    useEffect(() => {
        const el = document.getElementById(`moving-pic-${col}-${row}`);
        const intervalId = setInterval(() => {
            const rect = el!.getBoundingClientRect();  // the ! is needed to tell tsx that el is not null

            if (rect.bottom > 0) {
                el!.style.opacity = "0.8";
            }

            if (rect.top > window.innerHeight) {
                el!.style.opacity = "0";
            }
        }, 300);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <Image
                id={`moving-pic-${col}-${row}`}
                src={path}
                width={200}
                height={200}
                style={{ opacity: 0, width: 'auto' }}
                className={`${styles.image} my-10`}
                alt="Jose Izarra"
                // largest contentful
                priority={path === '/images/fut.jpg'? true : false}
            />
            
        </>
    )
}

