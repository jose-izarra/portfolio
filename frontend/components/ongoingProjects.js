import Image from 'next/image';
import ongoingProjects from "../scripts/ongoingProjects";



export default function WorkingOnProjects() {


    return (
        <>
            <div className='w-[30%]'>
                <h3 className='text-5xl text-subtitle-color'>Building this right now</h3>
            </div>
            {/* Currently Working On */}      
            
            <div id="ong-project-1" className='w-[33%] bg-ok'>
            
            </div>

            <div id="ong-project-2" className='w-[33%] bg-ok'>
            
            </div>
            {/* <ul className='flex flex-col flex-wrap'>
                {
                    ongoingProjects.map((current) => {
                        return (
                            <li key={current.name} className=''>{current.name}</li>
                        )
                    }
                    )
                }
            </ul> */}

        </>
    )
};