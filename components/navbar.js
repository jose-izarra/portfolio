import Link from 'next/link';
import navbarlinks from '../scripts/navbarlinks';
import styles from './styles/navbar.module.css';

export default function NavBar() {
    return (
        // first 3 class values are for fixed
        <nav id="navbar" className="fixed w-[100%] top-5 m-0 p-0"> {/*' rounded-xl m-auto bg-cool h-[50px] mt-10 opacity-90 '>*/}
            <div className="rounded-xl bg-cool m-auto w-fit opacity-90">
                <ul className="flex justify-center items-center">
                    {
                        navbarlinks.map((current) => {
                            return (
                                <li className='text-subtitle px-6 h-[50px] leading-[50px] text-lg w-[100]%'>
                                    <Link href={current.link} className='p-2 rounded-md'>{current.name}</Link>
                                </li>
                            )
                        })
                    }
                
                </ul>
            </div>
        </nav>
    )
}