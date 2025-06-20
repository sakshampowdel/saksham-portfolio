type Project = {
  name: string;
  description: string;
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="max-w-xl p-5">
      <h2 className="text-2xl font-semibold mb-2">{project.name}</h2>
      <p>{project.description}</p>
    </div>
  );
}

export default ProjectCard;
