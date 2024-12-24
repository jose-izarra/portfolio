
import { useEffect, useState } from "react"

import Skills from "../skills"

export default function TechStack() {

    const [ isScrolled, setIsScrolled ] = useState(false);

    useEffect(() => {

    }, [])


    return (
        <section className="flex flex-col items-center min-h-[40vh] gap-y-6 mt-12 ">

            <h1 className="text-4xl lg:mb-6">How I Do</h1>
            <div
                className="w-full sm:w-[90%] lg:w-9/12 flex flex-col items-center lg:flex-row lg:items-start justify-evenly gap-x-4 gap-y-6 "
                >

                <div
                    className="lg:h-full lg:w-1/3 flex items-center justify-center flex-col h-full"
                    >
                        <h2 className="mb-2">*According to <a className="" href="https://github.com/jose-izarra">GitHub</a></h2>
                        <img
                            src="https://github-readme-stats-git-master-jose-izarras-projects.vercel.app/api/top-langs/?username=jose-izarra&theme=dracula&hide_border=true&include_all_commits=true&count_private=true&layout=compact&exclude_repo=C_whale"
                            alt="Top Languages"
                            className="w-[356px] h-fit"
                            />
                </div>
                <div className="w-full md:w-2/3">
                    <h2 className="text-secondary-text-color">*According to me</h2>
                    <Skills />
                </div>
            </div>
        </section>
    )
}
