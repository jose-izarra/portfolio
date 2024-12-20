


import styles from "@/styles/ProjectCard.module.css"


interface ProjectCardProps {
    index: number
    title: string
    description: string
    techStack: string[]
    status: string
    image_url: string
}

export default function ProjectCard({
    index,
    title,
    description,
    techStack,
    status,
    image_url
}: ProjectCardProps) {


    return (
        <div
            // className={`${styles.project} w-[500px] h-[300px] border rounded-lg shadow-sm shadow-[#00332F] absolute flex flex-col gap-y-4 p-4`}
            className={`${styles.project} w-[500px] h-[300px] border rounded-lg shadow-sm shadow-[#00332F] absolute flex flex-col gap-y-4 p-4 md:left-[0px] lg:left-0 lg:right-0 inset-x-0`}
            // style={{ left: `${index * 60 + 300}px` , top: `${index * 60 + 90}px` }}
            style={{ marginLeft: `${index * 60}px`,top: `${index * 60 + 90}px` }}
            data-index={index}
            >
                <div className="flex items-end  gap-x-3 ">
                    <h2 className="text-2xl text-primary-text-color font-bold shrink-0 self-start">{title}</h2>
                    <p className="text-xs pb-1 font-light text-secondary-text-color brightness-[1.4]">{description}</p>
                </div>
                <div className="flex justify-between gap-x-2  h-full w-full">
                    <div className="flex flex-col gap-y-1 text-left ">
                        <p className="text-sm text-left">Tech Stack</p>
                        <p className="text-sm text-left">Status</p>
                    </div>
                    <div className="flex justify-center items-center h-full">
                        <img
                            src={image_url}
                            alt="Project Image"
                            className="w-[150px] h-fit rounded-lg"
                            />
                    </div>
                </div>
        </div>
    )
}
