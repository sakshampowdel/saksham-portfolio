import ExperienceCard from "../../components/ExperienceCard";
import type { ExperienceType } from "../../types/ExperienceType";
import data from "../../data/Experiences.json";
import { ArrowDownFromLine } from "lucide-react";

const experiences: ExperienceType[] = data;

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-12 md:px-24 min-h-screen scroll-mt-24"
    >
      <h1 className="text-6xl max-md:text-5xl font-bold text-accent text-center pb-12">
        Experience
      </h1>
      <div className="space-y-4">
        {experiences.map((exp, i) => (
          <ExperienceCard key={i} experience={exp} />
        ))}
      </div>
      <div className="flex mt-15 justify-center max-xl:hidden max-xl:invisible">
        <a href="#projects" className="hover:cursor-pointer">
          <ArrowDownFromLine className="animate-bounce h-7 w-7" />
        </a>
      </div>
    </section>
  );
};

export default Experience;
