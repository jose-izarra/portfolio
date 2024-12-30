import skills from '../json/skills.json';
import SkillIcon from './SkillIcon';


export default function Skills() {

    return (
        <div id='skills-container' className='flex items-center justify-center mx-2 sm:mx-0 '>
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
