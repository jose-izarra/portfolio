"use client";

import { useRef } from 'react';
import skills from '../json/skills.json';
import SkillIcon from './skillIcon';


export default function Skills({  }) {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={containerRef} id='skills-container' className='flex items-center justify-center mx-2 sm:mx-0 overflow-hidden'>
            <div className='skill-div'>
                {
                    skills.slice(0, 5).map((skill) => {
                        return (
                            <SkillIcon key={skill.name} skill={skill} />
                        )
                    })
                }
            </div>
            <div className='skill-div'>
                {
                skills.slice(5, 10).map((skill) => {
                    return (
                        <SkillIcon key={skill.name}  skill={skill} />
                    )
                    }) 
                }
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl leading-[1.125em] max-w-[40%] mx-5">My<br/>Frameworks<br/>&<br/>Languages</h2>
            <div className='skill-div'>
                {
                    skills.slice(10, 15).map((skill) => {
                        return (
                            <SkillIcon key={skill.name} skill={skill} />
                        )
                    })
                }
            </div>
            <div className='skill-div'>
                {
                    skills.slice(15, 20).map((skill) => {
                        return (
                            <SkillIcon key={skill.name} skill={skill} />
                        )
                    })
                }
            </div>
        </div>
    )
    
}

