import { getSkills } from "@/data/data";
import { Skill } from "@/data/types";
import { useInView } from "react-intersection-observer";
import SkillCard from "./SkillCard";

export default function MobileSkillHinges() {
    const { ref, inView } = useInView({
      threshold: 0.1,
      triggerOnce: true,
    });

    const skills = getSkills().sort((a: Skill, b: Skill) => a.priority - b.priority);

    return (
      <div ref={ref} className="flex md:hidden flex-col items-center gap-3">
        {
          skills.map((skill: Skill, idx: number) => (
            <SkillCard key={skill.priority} skill={skill} minWidth="[13rem]" textSize="md" inView={inView} startingOpacity={0} additionalStyles={{ animationDelay: (idx * 200) + "ms" }} />
          ))
        }
      </div>
    )
}