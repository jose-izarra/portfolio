import Link from 'next/link';
import Image from 'next/image';
// import LinkedIn from '../public/linkedin.svg';
import socials from '../json/socials.json';

export default function Intro() {
    
    return (
        <>
            <div className='z-[100] flex flex-col items-center pt-16'>
                {/* 
                <div className='pl-10 pb-5'>
                    <h3 id='hello-message' className='text-3xl '>- Hello! I'm Jose and I like to code.</h3>
                </div> 
                */}
                <div className='flex flex-col justify-center items-center mx-auto mb-7'>
                    <h1 className='text-4xl text-center font-bold mx-auto leading-8'>
                        Welcome to my personal portoflio website! <br/><br/>
                        
                    </h1>
                    <p className='text-xl text-center leading-8'>
                        This is a website I built to showcase my personality as an individual, as well as
                        <br/>
                        my skills and experience as a <span className='font-bold text-cool'>software developer</span>. 
                        This website is also a way for me to connect 
                        <br/>
                        with you and hopefully make a new friend or two. I think that 
                        interpersonal relations 
                        <br/>are the key to leading a happy and also successful life
                        <br/><br/>For this same reason, feel free to connect with me on LinkedIn!
                    </p>
                </div>
                
                
                <div className='w-[4rem]'>
                    <Link id='linkedin-svg' href={socials[0].link} target="_blank" className=''>
                        <svg version="1.1" viewBox="0 0 32 32" className=''><g fill="white"><path d="M28,1c1.654,0,3,1.346,3,3v24c0,1.654-1.346,3-3,3H4c-1.654,0-3-1.346-3-3V4c0-1.654,1.346-3,3-3H28 M28,0H4   C1.8,0,0,1.8,0,4v24c0,2.2,1.8,4,4,4h24c2.2,0,4-1.8,4-4V4C32,1.8,30.2,0,28,0L28,0z"/><path d="M24.299,23.921v-6.137c0-3.288-1.755-4.818-4.096-4.818c-1.889,0-2.735,1.039-3.206,1.768v-1.517h-3.558   c0.047,1.005,0,10.704,0,10.704h3.558v-5.978c0-0.319,0.023-0.639,0.117-0.867c0.257-0.639,0.842-1.301,1.825-1.301   c1.288,0,1.803,0.981,1.803,2.42v5.727L24.299,23.921L24.299,23.921z M9.69,11.756c1.24,0,2.013-0.823,2.013-1.85   c-0.023-1.05-0.773-1.849-1.99-1.849S7.701,8.856,7.701,9.906c0,1.028,0.772,1.85,1.967,1.85H9.69z M11.469,23.921V13.217H7.912   v10.704H11.469z"/></g></svg>
                    </Link>
                </div>
                {/* <div className='flex justify-center items-center pt-12'>
                    <Image src="/jose.jpg" 
                        height={200} width={200} alt="Jose Izarra"
                        // style={{ width: '100%', height: 'auto' }}
                        className='w-64 z-10' 
                        id='profile-pic'
                    />
                </div> */}
                
                
            </div>
        </>
    )
}



