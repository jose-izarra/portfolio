import Link from 'next/link';
import { use, useEffect } from 'react';
import navbarlinks from '../scripts/navbarlinks';
import styles from './styles/navbar.module.css';



export default function NavBar({ page }) {
    //make current page get lit up in the navbar

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.getElementById("navbar");
            const scroll = window.scrollY;
            const threshold = navbar.offsetHeight ;

            if (scroll > threshold) {
                navbar.classList.add(styles.sticky);
                
            } else {
                navbar.classList.remove(styles.sticky);
            }
        }
        
        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };

    }, [])

    return (
        // first 3 class values are for fixed
        <nav id="navbar" className="flex h-fit justify-center items-center w-full pt-5 overflow-auto"> {/*//"fixed w-[100%] top-5 m-0 p-0"> */}
            {/* <div className="rounded-xl bg-cool m-auto w-fit opacity-90"> */}
            <ul className="bg-cool opacity-90 w-fit rounded-lg flex justify-center items-center">
                {
                    navbarlinks.map((current) => {
                        return (
                            <li id="nav-item" key={current.name} className='text-subtitle px-6 h-[50px] leading-[50px] text-lg'>
                                <Link href={current.href} className='p-2 rounded-md'>{current.name}</Link>
                            </li>
                        )
                    })
                }
            
            </ul>
        </nav>
    )
}

