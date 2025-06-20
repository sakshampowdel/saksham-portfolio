import ProjectCard from "../../components/ProjectCard";

function Projects() {
  return (
    <section
      id="projects"
      className="flex-col flex justify-between p-10 text-xl gap-5"
    >
      <div>
        <h2 className="font-bold text-4xl mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 leading-relaxed">
          <ProjectCard
            project={{
              name: "BetterReads",
              description:
                "A Goodreads-inspired social reading platform built with React, Spring Boot, and PostgreSQL. Features search, reading lists, and a scalable backend with Docker and CI/CD support.",
            }}
          />

          <ProjectCard
            project={{
              name: "CampusMarket",
              description:
                "A student-only marketplace app built with Django and React. Features secure authentication, listing management, and deployment on Azure with Docker and CI/CD pipelines.",
            }}
          />

          <ProjectCard
            project={{
              name: "Resume Skill Extractor",
              description:
                "An NLP-based tool that extracts and classifies technical skills from uploaded resumes or job descriptions using Python and spaCy. Designed to simulate automated candidate screening tools used in modern hiring workflows (Work in progress).",
            }}
          />

          <ProjectCard
            project={{
              name: "Quant Backtester",
              description:
                "A performance-focused C++ project that analyzes trading strategies or market volatility. Combines systems-level efficiency with Python-based data modeling and visualization (Work in progress).",
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
