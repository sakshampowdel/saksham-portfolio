import type { ExperienceType } from "../types/ExperienceType";

const ExperienceCard = ({ experience }: { experience: ExperienceType }) => {
  return (
    <div className="flex flex-col border-l-3 px-3">
      <h1 className="font-bold underline">{experience.role}</h1>
      <h2 className="italic">{experience.company}</h2>
      <h3 className="font-light">{experience.period}</h3>
      <p>{experience.description.split("\n")}</p>
    </div>
  );
};

export default ExperienceCard;
