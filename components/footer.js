import Link from 'next/link';
import socials from '../scripts/socials';
import styles from './styles/footer.module.css';

export default function Footer() {
    return (
        <footer className="text-center my-5">
            
            <h2 class="text-3xl pb-10">Interact with me on</h2>
            
            <ul className="list">
            {
                        socials.map((current) => {
                            return (
                                <li className="inline-block mx-4 py-6 px-[50px]">
                                    <a href={current.link} className="flex justify-center" target="_blank">
                                    <svg xmlns={current.xmlns} x="0px" y="0px" width="50" height="50" viewBox="0 0 24 24">
                                        <path d={current.d} className="fill-cool"/>
                                    </svg>                                    
                                    </a>
                                    <h3 className="text-sm pt-2">{current.name}</h3>
                                </li>
                            )
                        })
                    }
            </ul>
        </footer>
    )
}