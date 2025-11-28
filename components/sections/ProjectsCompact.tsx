import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects.json";
import Headline from "../Headline";

export default function ProjectsCompact({}) {
  return (
    <section className="mt-12 flex min-h-screen flex-col items-center gap-y-6">
      <Headline level={1}>What I&apos;ve Done</Headline>
      <div className="relative flex w-full flex-col items-center gap-4 px-4 lg:block lg:h-[600px] lg:w-[90%]">
        {projects.slice(Math.max(projects.length - 6, 0), projects.length).map((project, index) => (
          <ProjectCard
            index={index}
            title={project.title}
            description={project.description}
            purpose={project.purpose}
            techStack={project.techStack}
            status={project.status}
            duration={project.duration}
            contributors={project.contributors}
            project_url={project.project_url}
            image_url={project.image_url}
            key={index}
          />
        ))}
      </div>
    </section>
  );
}
