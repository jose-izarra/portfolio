import Link from 'next/link';
import { use, useEffect } from 'react';
import navbarlinks from '../scripts/navbarlinks';
import styles from './styles/navbar.module.css';



export default function NavBar({ page }) {
    
    // useEffect(() => {
    //     const handleScroll = () => {
    //         const navbar = document.getElementById("navbar");
    //         const scroll = window.scrollY;
    //         const threshold = 0;//navbar.offsetHeight ;

    //         if (scroll > threshold) {
    //             navbar.classList.add(styles.sticky);
                
    //         } else {
    //             navbar.classList.remove(styles.sticky);
    //         }
    //     }
        
    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //     window.removeEventListener('scroll', handleScroll);
    //     };

    // }, [])

    return (
        // first 3 class values are for fixed
        <nav id="navbar" className="fixed flex h-fit justify-center items-center w-full pt-5 overflow-auto transition ease-in"> 
            {/* <div className="rounded-xl bg-cool m-auto w-fit opacity-90"> */}
            <ul className="bg-cool opacity-90 w-fit rounded-lg flex justify-center items-center">
                {
                    navbarlinks.map((current) => {
                        return current.name === page? (
                            <li id="current-tab" key={current.name} className='text-subtitle px-6 h-[50px] leading-[50px] text-lg hover:transition hover:ease-in duration-200'>
                                    <Link href={current.href} className='p-2 rounded-md'>{current.name}</Link>
                            </li>
                            )
                            :
                            <li id="nav-item" key={current.name} className="text-subtitle px-6 h-[50px] leading-[50px] text-lg hover:transition hover:ease-in duration-200">
                                <Link href={current.href} className='p-2 rounded-md'>{current.name}</Link>
                            </li>
                            
                    })
                }
            
            </ul>
        </nav>
    )
}

