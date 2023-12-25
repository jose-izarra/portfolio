import Image from "next/image";
import Skills from './skills';
//import Learning from './learning';

export default function SkillDisplay() {
    return (
        <>
            <span>
            <h1>I am fluent in ...</h1>
            <div className="w-[50%]">
                <Skills />   
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