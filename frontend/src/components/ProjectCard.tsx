import type { ProjectType } from "../types/ProjectType";

const ProjectCard = ({ project }: { project: ProjectType }) => {
  return (
    <div
      className={`bg-accent rounded-xl p-4 text-background space-y-4 shadow-lg  outline-blue-400 ${
        project.link ? "hover:cursor-pointer hover:outline-2" : ""
      }`}
      onClick={
        project.link ? () => window.open(project.link, "_blank") : undefined
      }
    >
      <h1 className="font-bold">{project.name}</h1>
      <h2 className="italic">{project.role}</h2>
      <h3 className="font-light">{project.period}</h3>
      <p>{project.description}</p>
      <div className="space-x-3">
        {project.tags.map((tag, i) => (
          <span key={i} className="underline">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
