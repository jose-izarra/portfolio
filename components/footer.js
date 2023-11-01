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
                                <li class="inline-block mx-4 py-5 px-[50px]">
                                    <h3 class="text-sm pt-2">{current.name}</h3>
                                </li>
                                // <div class="flex flex-col items-center px-10 w-fit">
                                //     {/* <a href={current.link} class="block">
                                //         <svg xmlns={current.xmlns} x="0px" y="0px" width="50" height="50" viewBox="0 0 24 24">
                                //         <path d={current.d} class="dark:fill-slate-300"></path>
                                //         </svg>
                                //     </a> */}
                                    
                                // </div>
                            )
                        })
                    }
            </ul>
        </footer>
    )
}