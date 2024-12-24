import styles from "@/styles/ProjectCard.module.css"
import { useState } from "react"
import { Timer, Blocks, Loader, CircleDot, Check } from "lucide-react"
interface ProjectCardProps {
    index: number
    title: string
    description: string
    purpose: string
    techStack: string[]
    status: string
    duration: string
    project_url: string
    image_url: string
}

export default function ProjectCard({
    index,
    title,
    description,
    purpose,
    techStack,
    status,
    duration,
    project_url,
    image_url
}: ProjectCardProps) {

    const [ isTextHovered, setIsTextHovered ] = useState(false)

    return (
        <>
            <a href={project_url} className="shrink-0">
                <div
                    className={`${styles.project} w-[500px] h-[300px] border rounded-lg shadow-sm shadow-[#00332F] absolute flex-col gap-y-1 p-4 hidden md:flex`}
                    style={{ marginLeft: `${index * 60}px`, top: `${index * 60 + 90}px` }}
                    data-index={index}
                    >
                        <div className="flex items-center gap-x-3 min-h-1/4">
                            <h2
                                className={`text-xl ${isTextHovered ? "text-secondary-text-color-light":" text-primary-text-color"}  font-bold shrink-0 self-start`}
                                >{title.toUpperCase()}</h2>
                            <p
                                className={` pb-1 font-[400]  ${isTextHovered ? "text-primary-text-color text-sm":"text-xs text-secondary-text-color-light"} `}
                                onMouseEnter={() => setIsTextHovered(true)}
                                onMouseLeave={() => setIsTextHovered(false)}
                                >{description}</p>
                        </div>
                        <div className="flex items-center justify-between gap-x-2 h-full w-full">
                            <div className="flex flex-col gap-y-3 items-start w-full pl-1">
                                <span className="flex items-center gap-x-2">
                                    <Blocks size={14} className="text-secondary-text-color-light"/>
                                    <p className="font-bold text-xs text-secondary-text-color-light text-left ">
                                        {techStack.map((t, i) => i+1 == techStack.length ? `${t}.` : `${t}, `)}
                                    </p>
                                </span>
                                <span className="flex items-center gap-x-2">
                                    <CircleDot size={14} className="text-secondary-text-color-light"/>
                                    <p className="font-medium  text-xs text-secondary-text-color-light text-left ">{purpose}</p>
                                </span>
                                <span className="flex items-center gap-x-2">
                                    <Timer size={14} className="text-secondary-text-color-light"/>
                                    <p className="font-medium text-xs text-secondary-text-color-light text-left">{duration}</p>
                                </span>
                                <span className="flex items-center gap-x-2">
                                    <Loader size={14} className="text-secondary-text-color-light"/>
                                    <p className="font-medium text-xs text-secondary-text-color-light text-left ">{status}</p>
                                </span>
                            </div>
                            <div className="flex justify-center items-center h-full">
                                <img
                                    src={image_url}
                                    alt="Project Image"
                                    className="md:w-[225px] lg:w-[250px] h-fit rounded-lg"
                                    />
                            </div>
                        </div>
                </div>
            </a>
            {/* mobile adaptation */}
            <div
                className={`${styles.project} w-full sm:w-11/12 h-[300px] border rounded-lg  absolute flex-col  p-4 flex md:hidden shrink-0`}
                style={{ top: `${index * 60 + 90}px` }}
                data-index={index}
                >
                    <div className="flex flex-col gap-y-4 ">
                        <h2 className="text-xl text-primary-text-color font-bold shrink-0 self-start">{title}</h2>
                        <p className="text-xs pb-1 font-[400] text-secondary-text-color-light text-left ">{description}</p>
                    </div>
                    <div className="flex items-center justify-between gap-x-2  h-full w-full ">
                        <div className="flex flex-col gap-y-3 items-start w-full ">
                            <span className="flex items-center gap-x-2">
                                <Blocks size={14} className="text-secondary-text-color-light"/>
                                <p className="font-bold text-xs text-secondary-text-color-light text-left ">
                                    {techStack.map((t, i) => i+1 == techStack.length ? `${t}.` : `${t}, `)}
                                </p>
                            </span>
                            <span className="flex items-center gap-x-2">
                                <CircleDot size={14} className="text-secondary-text-color-light"/>
                                <p className="font-medium  text-xs text-secondary-text-color-light text-left ">{purpose}</p>
                            </span>
                            <span className="flex items-center gap-x-2">
                                <Timer size={14} className="text-secondary-text-color-light"/>
                                <p className="font-medium text-xs text-secondary-text-color-light text-left">{duration}</p>
                            </span>
                            <span className="flex items-center gap-x-2">
                                <Loader size={14} className="text-secondary-text-color-light"/>
                                <p className="font-medium text-xs text-secondary-text-color-light text-left ">{status}</p>
                            </span>
                        </div>
                        <div className="flex justify-center items-center h-full">
                            <img
                                src={image_url}
                                alt="Project Image"
                                className="w-[140px] sm:w-[200px] h-fit rounded-lg"
                                />
                        </div>
                    </div>
            </div>
        </>
    )
}
