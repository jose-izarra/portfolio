import Layout from '../components/layout';
import {
    TextRevealCard,
    TextRevealCardDescription,
    TextRevealCardTitle,
  } from "../components/ui/text-reveal-card";

import { about_me } from '../components/data';

const lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta laudantium praesentium veniam quae eos, temporibus ad aspernatur voluptatibus facilis id alias earum! Quasi, quaerat. Excepturi harum molestias voluptas sed suscipit.'
export default function AboutMe() {
    return (
        <Layout page="About" title="About | Jose Izarra">
             
            <h1 className='mb-10 h-[14rem] content-end'>Hello, I am Jose!</h1>
            <article className='flex'>
                <section className='flex justify-end w-1/2'>
                    <div className='w-8/12 bg-teal-700 rounded-xl p-5'>
                        <p>{lorem}</p>
                    </div>
                </section>
                <section className='flex justify-start w-1/2'>
                    {/* scrolling pics on right  + content on left */}
                </section>

            </article>
                 {/* <TextRevealCard
                     text="I love coding stuff in my free time"
                     revealText="I get bored in my free time"
                ></TextRevealCard> */}
                
             
        </Layout>        
    )
}