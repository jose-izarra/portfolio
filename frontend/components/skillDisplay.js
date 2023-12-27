import Image from "next/image";
import Skills from './skills';
//import Learning from './learning';

export default function SkillDisplay() {
    return (
        <>
            <h2>I am fluent in ...</h2>
    
            <Skills />   
        
            

            
            <h2>currently learning .. </h2>

            <ul>
            <li>{/* currently_learning.json */}</li>
            <li>LLMs + Sonic Pi</li>
            </ul>
            
        </>
    )
}