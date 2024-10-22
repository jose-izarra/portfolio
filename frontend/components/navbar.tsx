'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './styles/navbar.module.css';
import { usePathname } from 'next/navigation';


export default function NavBar({  }) {
    const path = usePathname();
    const [ scroll, setScroll ] = useState(0);
    const [ isOpen, setIsOpen ] = useState(false);

    const handleClickButton = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const onScroll = () => {
            setScroll(window.scrollY);
        };



        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    const navbarlinks = [
        {
            "name": "Home",
            "href": "/"
        },
        {
            "name": "About",
            "href": path === '/' ? "#about" : "/"
        },
        {
            "name": "Projects",
            "href": "/projects"
        },
        {
            "name": "CV",
            "href": "/cv"
        },
    ]
    useEffect(() => {

        const windowWidth = window.innerWidth;
        const nav = document.getElementById("nav")!;
        const windowHeight = window.innerHeight;
        const container = document.getElementById("nav-container")!;

        if (scroll > windowHeight - 100 && windowWidth > 640) {
            nav.classList.add(styles.verticalNavbar);
            container.classList.add(styles.verticalContainer);
        }
        else {
            nav.classList.remove(styles.verticalNavbar);
            container.classList.remove(styles.verticalContainer);
        }

        // check if the navbar is open and the window is resized
        if (windowWidth > 640) {
            container.classList.remove(styles.open);
            setIsOpen(false);
        }

    }, [scroll, isOpen]);

    return (
        // first 3 class values are for fixed
        <nav id='nav' className={`${styles.nav} fixed mt-5 items-center justify-center`}>

            <button id="toggle" className={`${styles.toggleButton} ${isOpen? styles.open : ""} block sm:hidden`} aria-label='toggle menu' onClick={handleClickButton}>
                <svg id="openIcon" className={`${styles.openIcon}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
                <svg id="closeIcon" className={`${styles.closeIcon}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>

            <ul id="nav-container" className={`${styles.container}  ${isOpen? styles.open : ""} hidden sm:flex rounded-lg`}>
                {
                    navbarlinks.map((current) => {
                        return current.name === path ? (
                            <li id="current-tab" key={current.name} className={`${styles.li} text-lg hover:transition hover:ease-in duration-200`}>
                                <Link href={current.href} className={`${styles.current} rounded-md`}>{current.name}</Link>
                            </li>
                            )
                            :
                            <li id="nav-item" key={current.name} className={`${styles.li} text-lg hover:transition hover:ease-in duration-200`}>
                                <Link href={current.href} className={`${styles.link}  rounded-md`}>{current.name}</Link>
                            </li>
                    })
                }
            </ul>
        </nav>
    )
}
