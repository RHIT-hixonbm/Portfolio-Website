import { getExperiences } from "@/data/data";
import { Experience } from "@/data/types";
import ExperienceNode from "./ExperienceNode";
import ExperienceNodeWithLink from "./ExperienceNodeWithLink";

export default function ExperienceLinks({ featured }: { featured: boolean }) {
  const experiences: Experience[] = getExperiences().filter(
    (experience: Experience) => featured === false || experience.featured
  );
  return (
    <div className="mb-10 flex flex-col items-start relative">
      {experiences.map((experience: Experience, idx: number) => (
        <div className="relative flex items-start w-full" key={experience.id}>
          {idx < experiences.length - 1 ? (
            <ExperienceNodeWithLink experience={experience} />
          ) : (
            <ExperienceNode experience={experience} />
          )}
        </div>
      ))}
    </div>
  );
}
