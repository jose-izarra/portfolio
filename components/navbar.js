import Link from 'next/link';
import navbarlinks from '../scripts/navbarlinks';
export default function NavBar() {
    return (
        <>
            <nav className='w-[50%] rounded-xl m-auto bg-cool sticky h-10 mt-10'>
                <ul className="flex justify-center items-center">
                    {
                        navbarlinks.map((current) => {
                            return (
                                <li className='inline-block text-title px-6'>
                                    <Link href={current.link}>{current.name}</Link>
                                </li>
                            )
                        })
                    }
                
                </ul>
            </nav>
        </>
    )
}