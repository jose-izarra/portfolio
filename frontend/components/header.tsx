import styles from './styles/header.module.css';
import pictures from '../json/backgroundPics.json';
import MovingContainer from './movingPicture';

const leftValues = [
    Math.floor(Math.random() * 4) + 2,
    Math.floor(Math.random() * 4) + 26,
    Math.floor(Math.random() * 6) + 49,
    Math.floor(Math.random() * 4) + 78
];


const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

const speeds= shuffle([20, 24, 28, 32]);




const picsShuffled  = shuffle(pictures);

export default function Header() {
    

    return (
        <header className={`${styles.header} left-10 z-10 flex items-center justify-center w-full`}>
            <div className={`${styles.overlay} absolute top-[50px] left-[25em] hidden sm:block sm:w-[30%] lg:w-[25%] mr-5 transition ease-in`}>
            </div>          

            {
                [0, 1, 2, 3].map((col) => {
                    return (
                        <MovingContainer col={col} left={leftValues[col]} picsShuffled={picsShuffled} speeds={speeds} key={`MovingContainer-${col}`}/>
                    )
                })
            }
                       

            <div className="flex mx-auto justify-center items-center z-10 ">
                <h1 id="main-title" className={`${styles.maintitle} text-center`}>Jose Izarra<span id="main-sub" className={`${styles.mainsub} pl-5 inline-block`}>- Software Developer and Creator</span></h1>
            </div>
      </header>
    )
}


/*

<motion.div
                id={'moving-picture-0'}
                className={`absolute top-[300px] left-10 w-1/6`}
                initial={{ y: 0 }}
                animate={{ y: '100vh' }}
                onAnimationComplete={() => {
                    setAnimationComplete(true);
                    console.log('Animation complete', animationComplete);
                }}
                transition={{ 
                    repeat: Infinity,
                    duration: 5,
                    ease: 'linear',
                    // yoyo: Infinity,
                }}
            >
                <Image
                src='/sego.JPG'
                width={0}
                height={0}
                sizes="100vh"
                style={{ width: '100%', height: 'auto' }}
                className={``}
                alt="Jose Izarra"
                />
            </motion.div>
*/