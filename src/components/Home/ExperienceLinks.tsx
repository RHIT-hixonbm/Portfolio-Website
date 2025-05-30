import { getExperiences } from "@/data/data";
import { Experience } from "@/data/types";
import ExperienceNode from "./ExperienceNode";

export default function ExperienceLinks() {
    const experiences: Experience[] = getExperiences();
    return (
        <div className="mb-10">
            {experiences.map((experience: Experience) => (
                <ExperienceNode key={experience.id} experience={experience} />
            ))}
        </div>
    );
}