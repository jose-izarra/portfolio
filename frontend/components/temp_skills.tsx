import skills from '../json/skills.json';
import SkillIcon from './temp_skillicon'
import styles from "@/styles/Skills.module.css"


//

export default function Skills() {
    return (
        <div className={`${styles.skills} grid grid-cols-5 justify-evenly mx-2 sm:mx-0 w-2/3`}>
            {skills.map((skill) => {
                return (
                    <SkillIcon key={skill.name} skill={skill} />
                )
            })}
        </div>
    )

}
