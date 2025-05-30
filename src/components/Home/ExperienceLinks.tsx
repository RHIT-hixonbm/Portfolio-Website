import { getExperiences } from "@/data/data";
import { Experience } from "@/data/types";
import ExperienceNode from "./ExperienceNode";

export default function ExperienceLinks() {
  const experiences: Experience[] = getExperiences();
  return (
    <div className="mb-10 flex flex-col items-start relative">
      {experiences.map((experience: Experience, idx: number) => (
        <div className="relative flex items-start w-full" key={experience.id}>
          {/* Vertical line */}
          {idx < experiences.length - 1 && (
            <span
              className="absolute left-1/2 top-8 -translate-x-1/2 w-2 h-full bg-black"
              aria-hidden="true"
            />
          )}
          {/* Node */}
          <div className="relative w-full flex justify-center">
            <ExperienceNode experience={experience} />
          </div>
        </div>
      ))}
    </div>
  );
}
