import Link from 'next/link';
import socials from '../scripts/socials';
import styles from './styles/footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
             <div >
                <h2 class="text-3xl flex justify-center pb-10">Interact with me on</h2>
                <div class="flex items-center justify-center">
                    {
                        socials.map((current) => {
                            return (
                                <div class="flex flex-col items-center px-10 w-fit">
                                    {/* <a href={current.link} class="block">
                                        <svg xmlns={current.xmlns} x="0px" y="0px" width="50" height="50" viewBox="0 0 24 24">
                                        <path d={current.d} class="dark:fill-slate-300"></path>
                                        </svg>
                                    </a> */}
                                    <h3 class="text-sm pt-2">{current.name}</h3>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </footer>
    )
}