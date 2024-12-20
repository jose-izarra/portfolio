


import ProjectCard from "@/components/ProjectCard"
import projects from "@/json/projects.json"

export default function ProjectsCompact({ }) {


    return (
        <section className="flex flex-col items-center min-h-[80vh] gap-y-6 mt-12">
            <h1 className="text-4xl">What I&apos;ve Done</h1>
            <div className="w-[90%] relative hidden md:flex ">
                {projects.map((project, index) => (
                    <ProjectCard
                        index={index}
                        title={project.title}
                        description={project.description}
                        techStack={["React", "Next.js", "TailwindCSS"]}
                        status={"active"}
                        image_url={project.photo}
                        key={index}
                        />
                ))}
            </div>
        </section>
    )
}
