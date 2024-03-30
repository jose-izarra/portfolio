import Layout from '../components/layout';
import Image from 'next/image';
import { StickyScroll } from '../components/ui/sticky-scroll-reveal';
import { about_me, ight } from '../components/data';




const lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta laudantium praesentium veniam quae eos, temporibus ad aspernatur voluptatibus facilis id alias earum! Quasi, quaerat. Excepturi harum molestias voluptas sed suscipit.'
export default function AboutMe() {
    return (
        <Layout page="About" title="About | Jose Izarra">
             
            <h1 className='mb-10 h-[14rem] content-end'>Hello, I am Jose!</h1>
            {/* <StickyScroll content={ight} /> */}
            <article className=''> 
                <section className='flex justify-end w-1/2'>
                    
                </section>

                <section className='flex justify-start w-1/2'>

                </section> 
                
            </article>               
             
        </Layout>        
    )
}