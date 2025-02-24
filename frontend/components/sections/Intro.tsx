

export default function Intro() {

    return (
        <section className="flex flex-col items-center min-h-[40vh] gap-y-6 mt-12">
            <h1 className="text-4xl lg:mb-6">What I Do</h1>
            <div className="w-full sm:w-[90%] lg:w-9/12 flex gap-y-2 lg:gap-y-12 justify-center">

                <div className="md:hidden">
                    <p className="text-left px-1 ">
                        I&apos;m Jose Izarra, a software developer passionate about creating projects no one has ever done before.
                        {" "}I do full stack, random projects I find interesting and study for uni at the moment.
                        {" "}Currently pursuing a Computer Science degree and working at a startup.
                        {" "}Developing software for over 4 years now.
                    </p >
                </div>

                <div className="hidden md:flex gap-y-6  w-full justify-evenly">
                    <div className='flex flex-col gap-y-28'>
                        <div className='w-[356px] self-center hidden md:block '>
                            <p className=" font-medium">I&apos;m Jose Izarra, a software developer passionate about creating projects no one has ever done before</p>
                        </div>
                        <div className='w-[356px] justify-center hidden md:flex '>
                            <p className=''>Currently pursuing a Computer Science degree and working at a startup</p>
                        </div>
                    </div>
                    <div className='flex flex-col lg:mt-28 gap-y-28'>
                        <div className='w-[356px] hidden md:block '>
                            <p className='font-light'>I do full stack, random projects I find interesting and study for uni at the moment</p>
                        </div>

                        <div className='w-[356px] hidden md:flex '>
                            <p className=''>Developing software for over 4 years now</p>
                        </div>
                    </div>


                </div>
            {/* <div className="fixed right-12 bottom-12">
                <p className="text-sm">... and play football</p>
            </div> */}
            </div>
        </section>


    )
}

/*
<div className="h-[440px] bg-[#34383c] relative">
<div className="w-[172px] h-[23px] left-[514px] top-[60px] absolute text-center text-[#00ccbb] text-[32px] font-bold font-['Lora'] leading-tight">What I do</div>
<div className="w-[356px] h-[125px] left-[147px] top-[137px] absolute text-center text-white text-xs font-bold font-['Lora'] leading-tight">I’m Jose Izarra, a software developer passionate about creating projects no one has ever done before.</div>
<div className="w-[285px] h-[69px] left-[683px] top-[186px] absolute text-center text-white text-xs font-bold font-['Lora'] leading-tight">I do full stack, random projects I find interesting and study for uni.</div>
<div className="w-[285px] h-[69px] left-[339px] top-[301px] absolute text-center text-white text-xs font-bold font-['Lora'] leading-tight">Currently pursuing a Computer Science degree and working at a startup.</div>
<div className="left-[1075px] top-[396px] absolute text-center text-white text-[8px] font-bold font-['Lora'] leading-tight">... and play football</div>
</div>
*/
