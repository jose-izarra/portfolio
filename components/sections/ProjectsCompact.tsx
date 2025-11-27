import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects.json";
import Headline from "../Headline";

export default function ProjectsCompact({}) {
  return (
    <section className="flex flex-col items-center min-h-[90vh] sm:min-h-[80vh]  gap-y-6 mt-12">
      <Headline level={1}>What I&apos;ve Done</Headline>
      <div className="w-[90%] relative ">
        {projects
          .slice(Math.max(projects.length - 6, 0), projects.length)
          .map((project, index) => (
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
