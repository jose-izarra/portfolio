import Link from 'next/link';
import navbarlinks from '../scripts/navbarlinks';
export default function NavBar() {
    return (
        <nav className='w-[50%] rounded-xl m-auto bg-cool sticky h-[50px] mt-10 opacity-90'>
            <ul className="flex justify-center items-center m-0 mt-[5px]">
                {
                    navbarlinks.map((current) => {
                        return (
                            <li className='text-subtitle px-6 h-[50px] leading-[50px] text-lg'>
                                <Link href={current.link}>{current.name}</Link>
                            </li>
                        )
                    })
                }
            
            </ul>
        </nav>
    )
}