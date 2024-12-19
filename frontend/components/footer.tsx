import socials from '../json/socials.json';


export default function Footer() {

    return (
        <footer className="flex items-center justify-center text-center my-5">
            {/* <SpotifySongs /> */}
            <div className="flex items-center ">
                <h2 className="text-3xl">Socials</h2>
            </div>
            <ul className="">
            {
                        socials.map((current) => {
                            return (
                                <li key={current.name} className="inline-block mx-4 py-6 px-[50px]">
                                    <a href={current.link} className="flex justify-center" target="_blank"
                                      aria-label={`Learn more about Jose's contact information, exploring his ${current.name}`}>
                                      <svg xmlns={current.xmlns} x="0px" y="0px" width="50" height="50" viewBox="0 0 24 24" className='rounded-lg'>
                                          <path d={current.d} className="fill-primary-color"/>
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
