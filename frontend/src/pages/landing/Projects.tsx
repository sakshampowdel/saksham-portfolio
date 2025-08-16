import ProjectCard from "../../components/ProjectCard";
import type { ProjectType } from "../../types/ProjectType";
import data from "../../data/Projects.json";

const projectList: ProjectType[] = data;

const Projects = () => {
  return (
    <section id="projects" className="py-12 md:px-24 min-h-screen scroll-mt-24">
      <h1 className="text-6xl max-md:text-5xl font-bold text-accent text-center pb-12 text-shadow-lg">
        Projects
      </h1>
      <div className="space-y-4">
        {projectList.map((proj, i) => (
          <ProjectCard key={i} project={proj} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
