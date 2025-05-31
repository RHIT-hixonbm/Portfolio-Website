import { getSkills } from "@/data/data";
import { Skill } from "@/data/types";
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { useInView } from "react-intersection-observer";

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
            <Card key={skill.priority} className={`bg-black min-w-[13rem] opacity-0 ${inView && "animate-hinge-spin"}`} style={{ animationDelay: (idx * 200) + "ms" }}>
              <CardContent className="text-white text-center font-bold text-md">
                {skill.name}
              </CardContent>
            </Card>
          ))
        }
      </div>
    )
}