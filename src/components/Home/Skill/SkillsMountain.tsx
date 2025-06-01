import { getSkills } from "@/data/data";
import { Skill } from "@/data/types";
import { useInView } from "react-intersection-observer";
import SkillCard from "./SkillCard";

export default function SkillsMountain() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });

  const skills = getSkills().sort(
    (a: Skill, b: Skill) => a.priority - b.priority
  );
  const num_base_skills = 3;
  const num_mid_skills = 4;
  const num_top_skills = 4;
  const base_skills = skills.slice(0, num_base_skills);
  const mid_skills = skills.slice(
    num_base_skills,
    num_mid_skills + num_base_skills
  );
  const top_skills = skills.slice(
    num_base_skills + num_mid_skills,
    num_top_skills + num_base_skills + num_mid_skills
  );

  return (
    //TODO: RENDER THESE DYNAMICALLY AT SOME POINT
    <div ref={ref} className="hidden md:flex flex-col items-center">
      {/* Top */}
      <div
        className={`grid ${"grid-cols-4"} gap-1 justify-center opacity-0 ${
          inView && "animate-fade-down"
        }`}
        style={inView ? { animationDelay: "0s" } : {}}
      >
        {top_skills.map((skill: Skill) => {
          return (
            <SkillCard key={skill.priority} skill={skill} textSize="md" largeTextSize="[1.8rem]" />
          );
        })}
      </div>
      {/* Middle */}
      <div
        className={`grid ${"grid-cols-4"} gap-3 justify-center py-2 opacity-0 ${
          inView && "animate-fade-down"
        }`}
        style={inView ? { animationDelay: "0.4s" } : {}}
      >
        {mid_skills.map((skill: Skill) => {
          return (
            <SkillCard key={skill.priority} skill={skill} textSize="2xl" largeTextSize="[2.5rem]" />
          );
        })}
      </div>
      {/* Base */}
      <div
        className={`grid ${"grid-cols-3"} gap-2 justify-center py-2 opacity-0 ${
          inView && "animate-fade-down"
        }`}
        style={inView ? { animationDelay: "0.8s" } : {}}
      >
        {base_skills.map((skill: Skill) => {
          return (
            <SkillCard key={skill.priority} skill={skill} textSize="5xl" largeTextSize="[6rem]" px={12} />
          );
        })}
      </div>
    </div>
  );
}
