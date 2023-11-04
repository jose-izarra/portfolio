import Image from "next/image";
import skills from "../scripts/skills.json";

export default function Skills() {
    return (
        <>
            <span>
            <h1>I am fluent in ...</h1>
            <div>
                <ul className='flex'>
                {
                    skills.map((current) => {
                        return (
                            <li>
                                <Image src={current.link}
                                height={25} width={25}
                                />
                            </li>
                        )
                    })
                }
                {/* <li>Python</li>
                <li>{/* skills.json stuff}</li>
                <li>English</li>
                <li>Spanish</li> */}
                </ul>
            </div>
            </span>
            <span>
            <h1>currently learning .. </h1>
            <div>
                <ul>
                <li>{/* currently_learning.json */}</li>
                <li>LLMs + Sonic Pi</li>
                </ul>
            </div>
            </span>
        </>
    )
}