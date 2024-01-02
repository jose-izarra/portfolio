import Image from 'next/image';
import Link from 'next/link';
import styles from './styles/header.module.css';


export default function Header() {


    return (
        <header className={`${styles.header} z-10 flex items-center justify-center overflow-hidden h-[100vh]`}>
            <div className={`${styles.overlay} absolute top-[50px] left-[25em] hidden sm:block sm:w-[30%] lg:w-[25%] mr-5 transition ease-in`}>
                
            </div>
            <div className={`${styles.overlay} ml-auto hidden sm:block sm:w-[30%] lg:w-[25%]  transition ease-in `}>
                <Image src='/sego.jpg'
                    width={0} 
                    height={0} 
                    sizes="100vh" 
                    style={{ width: '100%', height: 'auto' }} 
                    className={`${styles.pic}`} 
                />
            </div>
            <div className="flex mx-auto justify-center items-center z-10 ">
                <h1 id="main-title" className='text-center'>Jose Izarra<span id="main-sub" className='pl-5 inline-block'>- Software Developer and Creator</span></h1>
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