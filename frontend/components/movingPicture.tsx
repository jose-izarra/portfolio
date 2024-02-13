import { useState, useEffect } from 'react';
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



function MovingPicture({ path, row, col }) {

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
                width={0}
                height={0}
                sizes="100vh"
                style={{ width: '100%', height: 'auto', opacity: 0}}
                // ${translateY - 100100 != 0 ? '' : 'hidden'}
                className={`${styles.image} my-10`}
                alt="Jose Izarra"
            />
            
        </>
    )
}

// export default function MovingPicture({ path, delay, time, left, row, col }) {

//     const [isVisible, setIsVisible] = useState(false);

//     useEffect(() => {
        


//         // Set an interval to upload translateY value every second
//         const uploadInterval = setInterval(() => {
//             const myElement = document.getElementById(`moving-container-${col}-${row}`);
//             const myImg = document.getElementById(`moving-pic-${col}-${row}`);
            
//             const computedStyle = window.getComputedStyle(myElement);

//             const transformStyle = computedStyle.transform;
//             const val = +transformStyle.replace(/[^\d.]/g, '');
            

//             const threshold = 100100;
//             if (val - threshold !== 0) {
//                 myImg.classList.remove('hidden');
//             }

//         }, 500); // Upload every second
        
        
//         // Cleanup the interval when the component is unmounted
//         return () => clearInterval(uploadInterval);
//       }, []);


//     // depend on duration, and height

//     const divString = `absolute top-0 w-1/6` 
    
//     return (
//         <>
//             <motion.div
//                 id={`moving-container-${col}-${row}`}
//                 className={`${divString} `}
//                 initial={{ y: col % 2 === 0? '-30vh' : '130vh' }}
//                 animate={{ y: col % 2 === 0? '200vh' : '-200vh' }}
//                 transition={{
//                     repeat: Infinity,
//                     duration: parseInt(time),
//                     ease: 'linear',
//                     delay: delay,
//                 }}
//                 style={{ left: `${left}%` }}
//             >
//                 <Image
//                     id={`moving-pic-${col}-${row}`}
//                     src={path}
//                     width={0}
//                     height={0}
//                     sizes="100vh"
//                     style={{ width: '100%', height: 'auto'}}
//                     // ${translateY - 100100 != 0 ? '' : 'hidden'}
//                     className={`backgroundPicsTransition visible`}
//                     alt="Jose Izarra"
//                 />
//             </motion.div>
//         </>
//     )
// };