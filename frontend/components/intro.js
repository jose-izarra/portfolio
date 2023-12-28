import Link from 'next/link';
import Image from 'next/image';





export default function Intro() {

    return (
        <>
            <div className='flex flex-col'>
                <div className='pl-10 pb-5'>
                    <h3 id='' className='text-4xl '>- Hello, I'm Jose and I like to code.</h3>
                </div>
                <div className='flex flex-col justify-center items-center mx-auto mb-7'>
                    <h3 className='text-xl mx-auto leading-8'>
                        This is a personal portoflio website I built for myself. 
                        
                    </h3>
                    <h3 className='text-xl mx-auto leading-8'>
                        The goal of this project is to showcase my personality as an individual,
                        </h3>
                    <h3 className='text-xl mx-auto leading-8'> 
                        as well as my skills and experience as a software developer.
                        I think that interpersonal relations 
                        </h3>
                    <h3 className='text-xl mx-auto leading-8'>are the key to leading a, not only happy, but also 
                        successful life, 
                        so here I am, trying to
                        </h3>
                    <h3 className='text-xl mx-auto leading-8'>
                         connect with you.
                        I also believe LinkedIn is an amazing tool for this, so feel 
                        </h3>
                    <h3 className='text-xl mx-auto leading-8'>free to check out my profile
                        and connect with me there!
                    </h3>
                </div>
                {/*}
                <div className='w-3/4 mx-auto'>
                    <p className='text-xl text-darkbg-text'>
                        I’m a software developer with years of experience with python, web development, and AI and Machine Learning. 
                        I am self-driven and highly motivated to learn and create new things. I actively look for continuous personal and 
                        professional development, seeking a higher quality of life. The primary source of my knowledge has been through 
                        hands-on experience gained from working on my own projects and projects with my team. 
                        <br/><br/>Feel free to check them out on my CV or on GitHub!
                    </p>
                </div>
                */}
            </div>
        </>
    )
}



